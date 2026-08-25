/**
 * Tests for CSS safety validator.
 */

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { validateCss } = require('../src/validator');

test('valid CSS passes validation', () => {
  const css = ':root { --accent: #7c3aed; --surface: #0b1020; --text: #f9fafb; }';
  const result = validateCss(css);
  assert.equal(result.valid, true);
  assert.deepEqual(result.violations, []);
});

test('CSS custom properties and animations are allowed', () => {
  const css = `
    :root { --space: 1rem; --radius: 8px; }
    @keyframes pulse { from { opacity: 1; } to { opacity: 0.5; } }
    button { transition: background 200ms ease; animation: pulse 2s infinite; }
  `;
  const result = validateCss(css);
  assert.equal(result.valid, true);
});

test('HTML script tag is blocked', () => {
  const css = '<script>alert(1)</script>';
  const result = validateCss(css);
  assert.equal(result.valid, false);
  assert.ok(result.violations.includes('html-tag'));
});

test('HTML style tag is blocked', () => {
  const css = '<style>body{}</style>';
  const result = validateCss(css);
  assert.equal(result.valid, false);
  assert.ok(result.violations.includes('html-tag'));
});

test('javascript: scheme is blocked', () => {
  const css = 'body { background: url("javascript:alert(1)"); }';
  const result = validateCss(css);
  assert.equal(result.valid, false);
  assert.ok(result.violations.includes('javascript-scheme'));
});

test('expression() injection is blocked', () => {
  const css = 'div { width: expression(alert(1)); }';
  const result = validateCss(css);
  assert.equal(result.valid, false);
  assert.ok(result.violations.includes('expression-injection'));
});

test('null bytes are blocked', () => {
  const css = ':root { --x: \x00 red; }';
  const result = validateCss(css);
  assert.equal(result.valid, false);
  assert.ok(result.violations.includes('null-byte'));
});

test('@import of external URL is blocked', () => {
  const css = "@import url('https://evil.example.com/style.css');";
  const result = validateCss(css);
  assert.equal(result.valid, false);
  assert.ok(result.violations.includes('external-import'));
});

test('@import of relative path is allowed', () => {
  const css = "@import './tokens.css';";
  const result = validateCss(css);
  assert.equal(result.valid, true);
});

test('url() with external http is blocked by default', () => {
  const css = 'body { background-image: url("https://cdn.example.com/bg.png"); }';
  const result = validateCss(css);
  assert.equal(result.valid, false);
  assert.ok(result.violations.includes('external-url'));
});

test('url() with data URI is allowed', () => {
  const css = 'body { background-image: url("data:image/png;base64,abc123"); }';
  const result = validateCss(css);
  assert.equal(result.valid, true);
});

test('non-string input is rejected', () => {
  const result = validateCss(null);
  assert.equal(result.valid, false);
  assert.ok(result.violations.includes('output is not a string'));
});

test('multiple violations are all reported', () => {
  const css = '<script>alert(1)</script>\nbody { width: expression(1); }';
  const result = validateCss(css);
  assert.equal(result.valid, false);
  assert.ok(result.violations.includes('html-tag'));
  assert.ok(result.violations.includes('expression-injection'));
});
