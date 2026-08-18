/**
 * Tests for POST /theme/compose API endpoint.
 *
 * The generator is mocked so no real AI key is required.
 */

const { test } = require('node:test');
const assert = require('node:assert/strict');

// Shared reference to the generator module so tests can stub generateTheme
const generatorModule = require('../src/generator');

test('POST /theme/compose - missing prompt returns 400', async () => {
  const app = require('../src/app');

  const { createServer } = require('node:http');
  const server = createServer(app);
  await new Promise((r) => server.listen(0, r));
  const { port } = server.address();

  const res = await fetch(`http://localhost:${port}/theme/compose`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ baseCss: ':root{}' }),
  });
  assert.equal(res.status, 400);
  const body = await res.json();
  assert.ok(body.error.includes('prompt'));

  server.close();
});

test('POST /theme/compose - missing baseCss returns 400', async () => {
  const app = require('../src/app');
  const { createServer } = require('node:http');
  const server = createServer(app);
  await new Promise((r) => server.listen(0, r));
  const { port } = server.address();

  const res = await fetch(`http://localhost:${port}/theme/compose`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: 'make it dark' }),
  });
  assert.equal(res.status, 400);
  const body = await res.json();
  assert.ok(body.error.includes('baseCss'));

  server.close();
});

test('GET /health returns ok', async () => {
  const app = require('../src/app');
  const { createServer } = require('node:http');
  const server = createServer(app);
  await new Promise((r) => server.listen(0, r));
  const { port } = server.address();

  const res = await fetch(`http://localhost:${port}/health`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.status, 'ok');

  server.close();
});

test('POST /theme/compose - generator error returns 500', async () => {
  // Temporarily replace generateTheme
  const original = generatorModule.generateTheme;
  generatorModule.generateTheme = async () => { throw new Error('upstream failed'); };

  // Clear module cache so app picks up fresh generator reference
  delete require.cache[require.resolve('../src/app')];
  const app = require('../src/app');

  const { createServer } = require('node:http');
  const server = createServer(app);
  await new Promise((r) => server.listen(0, r));
  const { port } = server.address();

  const res = await fetch(`http://localhost:${port}/theme/compose`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: 'dark', baseCss: ':root{}' }),
  });
  assert.equal(res.status, 500);

  generatorModule.generateTheme = original;
  server.close();
});

test('POST /theme/compose - unsafe CSS returns 422', async () => {
  const original = generatorModule.generateTheme;
  generatorModule.generateTheme = async () => '<script>alert(1)</script>';

  delete require.cache[require.resolve('../src/app')];
  const app = require('../src/app');

  const { createServer } = require('node:http');
  const server = createServer(app);
  await new Promise((r) => server.listen(0, r));
  const { port } = server.address();

  const res = await fetch(`http://localhost:${port}/theme/compose`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: 'dark', baseCss: ':root{}' }),
  });
  assert.equal(res.status, 422);
  const body = await res.json();
  assert.ok(Array.isArray(body.violations));

  generatorModule.generateTheme = original;
  server.close();
});

test('POST /theme/compose - valid response shape', async () => {
  const original = generatorModule.generateTheme;
  generatorModule.generateTheme = async () => ':root { --accent: #7c3aed; }';

  delete require.cache[require.resolve('../src/app')];
  const app = require('../src/app');

  const { createServer } = require('node:http');
  const server = createServer(app);
  await new Promise((r) => server.listen(0, r));
  const { port } = server.address();

  const res = await fetch(`http://localhost:${port}/theme/compose`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: 'futuristic', baseCss: ':root{}', context: 'ops' }),
  });
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.ok(body.themeId);
  assert.ok(body.css);
  assert.ok(body.provenance);
  assert.equal(body.provenance.prompt, 'futuristic');
  assert.equal(body.provenance.context, 'ops');

  generatorModule.generateTheme = original;
  server.close();
});
