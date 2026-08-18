/**
 * CSS safety validator.
 *
 * Enforces hard limits on generated CSS:
 *   - no HTML tags
 *   - no javascript: scheme
 *   - no expression() (IE CSS injection)
 *   - no @import of external URLs
 *   - no url() with external http/https refs (unless ALLOW_EXTERNAL_URLS is set)
 *   - no null bytes or control characters
 *
 * Stylistic content (colors, gradients, animations, custom properties,
 * keyframes, media queries) is fully allowed.
 */

const ALLOW_EXTERNAL_URLS = process.env.ALLOW_EXTERNAL_URLS === 'true';

/** @type {Array<{name: string, pattern: RegExp}>} */
const HARD_RULES = [
  { name: 'html-tag', pattern: /<\s*[a-z]/i },
  { name: 'javascript-scheme', pattern: /javascript\s*:/i },
  { name: 'expression-injection', pattern: /expression\s*\(/i },
  { name: 'null-byte', pattern: /\x00/ },
];

const EXTERNAL_IMPORT_RULE = {
  name: 'external-import',
  pattern: /@import\s+(?:url\s*\(\s*)?['"]?https?:\/\//i,
};

const EXTERNAL_URL_RULE = {
  name: 'external-url',
  pattern: /url\s*\(\s*['"]?\s*https?:\/\//i,
};

/**
 * Validate generated CSS against hard safety limits.
 *
 * @param {string} css
 * @returns {{ valid: boolean, violations: string[] }}
 */
function validateCss(css) {
  if (typeof css !== 'string') {
    return { valid: false, violations: ['output is not a string'] };
  }

  const violations = [];

  for (const rule of HARD_RULES) {
    if (rule.pattern.test(css)) {
      violations.push(rule.name);
    }
  }

  if (EXTERNAL_IMPORT_RULE.pattern.test(css)) {
    violations.push(EXTERNAL_IMPORT_RULE.name);
  }

  if (!ALLOW_EXTERNAL_URLS && EXTERNAL_URL_RULE.pattern.test(css)) {
    violations.push(EXTERNAL_URL_RULE.name);
  }

  return { valid: violations.length === 0, violations };
}

module.exports = { validateCss };
