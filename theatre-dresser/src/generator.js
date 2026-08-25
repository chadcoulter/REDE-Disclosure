/**
 * AI theme generator.
 *
 * Sends a prompt + base CSS to the configured AI provider and returns
 * generated CSS text.
 *
 * Supports OpenAI-compatible APIs. Set OPENAI_API_KEY and (optionally)
 * OPENAI_MODEL in the environment before starting the service.
 */

const MODEL = process.env.OPENAI_MODEL || 'gpt-4o';
const API_KEY = process.env.OPENAI_API_KEY || '';
const API_URL = 'https://api.openai.com/v1/chat/completions';
// Temperature above 1.0 increases stylistic variety. Range accepted by OpenAI: 0–2.
// Set OPENAI_TEMPERATURE to override (e.g. "0.8" for more predictable output).
const TEMPERATURE = parseFloat(process.env.OPENAI_TEMPERATURE ?? '1.1');

const SYSTEM_PROMPT = `You are a CSS theme composer.
You receive a base CSS file and a style prompt.
You return ONLY valid CSS — no explanations, no markdown code fences, no HTML.
Produce a high-variation, creative reinterpretation of the base CSS according to the prompt.
You may change colors, typography, spacing, shadows, gradients, animations, border radius, and transitions.
Do not include any JavaScript, HTML tags, javascript: URLs, or expression() constructs.
Do not @import external URLs.
Output only the raw CSS text.`;

/**
 * Generate a CSS theme variation using the AI provider.
 *
 * @param {{ prompt: string, baseCss: string, context?: string }} params
 * @returns {Promise<string>} generated CSS text
 */
async function generateTheme({ prompt, baseCss, context }) {
  if (!API_KEY) {
    throw new Error('OPENAI_API_KEY is not set');
  }

  const userMessage = [
    context ? `Context: ${context}` : null,
    `Style directive: ${prompt}`,
    '',
    'Base CSS:',
    baseCss,
  ]
    .filter((l) => l !== null)
    .join('\n');

  const authHeader = 'Bearer ' + API_KEY;

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authHeader,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage },
      ],
      temperature: TEMPERATURE,
      max_tokens: 2048,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`AI provider error ${response.status}: ${text}`);
  }

  const data = await response.json();
  const css = data?.choices?.[0]?.message?.content ?? '';

  // Strip markdown code fences if the model wraps output despite instructions
  return css.replace(/^```(?:css)?\n?/i, '').replace(/\n?```$/i, '').trim();
}

module.exports = { generateTheme };
