/**
 * Express application for the theatre-dresser theme service.
 */

const express = require('express');
const generator = require('./generator');
const { validateCss } = require('./validator');

const app = express();
app.use(express.json({ limit: '256kb' }));

/**
 * POST /theme/compose
 *
 * Accept a prompt and base CSS, generate a CSS theme variation,
 * validate it against hard safety limits, and return the result.
 */
app.post('/theme/compose', async (req, res) => {
  const { prompt, baseCss, context } = req.body ?? {};

  if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
    return res.status(400).json({ error: 'prompt is required' });
  }
  if (!baseCss || typeof baseCss !== 'string' || baseCss.trim() === '') {
    return res.status(400).json({ error: 'baseCss is required' });
  }

  let css;
  try {
    css = await generator.generateTheme({ prompt: prompt.trim(), baseCss, context });
  } catch (err) {
    console.error('Generation error:', err.message);
    return res.status(500).json({ error: 'theme generation failed', detail: err.message });
  }

  const { valid, violations } = validateCss(css);
  if (!valid) {
    console.warn('Safety validation failed:', violations);
    return res.status(422).json({ error: 'generated CSS failed safety validation', violations });
  }

  const themeId = `theme-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

  return res.status(200).json({
    themeId,
    css,
    provenance: {
      provider: 'theatre-dresser',
      model: process.env.OPENAI_MODEL || 'gpt-4o',
      generatedAt: new Date().toISOString(),
      prompt: prompt.trim(),
      context: context ?? null,
    },
  });
});

/** Health check */
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

module.exports = app;
