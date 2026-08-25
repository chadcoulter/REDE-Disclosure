# theatre-dresser

**REDE Theme Composition Service** — a prompt-driven CSS variation engine for REDE portals.

## Purpose

`theatre-dresser` generates fresh, high-variation CSS themes at runtime from a base stylesheet using a short prompt. It is designed to be consumed by a portal vendor as a standalone service: the vendor calls the API, receives generated CSS, and injects it into the portal at runtime.

The service enforces only hard safety limits on its output (no JavaScript, no HTML, no external network imports) while allowing full stylistic freedom in color, typography, spacing, motion, and component emphasis.

---

## How It Works

1. The portal (or vendor) sends a `POST /theme/compose` request with:
   - a short natural-language `prompt` describing the desired feel
   - a `baseCss` string (the portal's current root stylesheet or token file)
   - an optional `context` label (e.g. `"operations"`, `"public"`)

2. The service sends the base CSS and prompt to an AI provider.

3. The AI generates a fresh CSS variation — full stylistic interpretation, not just token overrides.

4. The service validates the output against hard safety rules:
   - **Allowed**: valid CSS, custom properties, animations, gradients, media queries
   - **Blocked**: `<script>`, HTML tags, `javascript:`, `expression(...)`, `@import` of external URLs, `url()` with non-data URIs by default

5. The service returns the validated CSS and provenance metadata.

---

## API

### `POST /theme/compose`

**Request body** (`application/json`):
```json
{
  "context": "operations",
  "prompt": "make it feel futuristic and high-energy",
  "baseCss": ":root { --accent: #4f46e5; --background: #ffffff; }"
}
```

| Field     | Type   | Required | Description                                      |
|-----------|--------|----------|--------------------------------------------------|
| `prompt`  | string | yes      | Natural-language style directive                 |
| `baseCss` | string | yes      | The base stylesheet text to build the theme from |
| `context` | string | no       | Semantic label for the theme context             |

**Response** (`application/json`):
```json
{
  "themeId": "theme-20260818-a3f9c1",
  "css": ":root { --accent: #7c3aed; --surface: #0b1020; --text: #f9fafb; }",
  "provenance": {
    "provider": "theatre-dresser",
    "model": "gpt-4o",
    "generatedAt": "2026-08-18T03:00:00.000Z",
    "prompt": "make it feel futuristic and high-energy",
    "context": "operations"
  }
}
```

**Error responses**:

| Status | Meaning                                      |
|--------|----------------------------------------------|
| 400    | Missing or invalid request fields            |
| 422    | Generated CSS failed safety validation       |
| 500    | Upstream AI provider error or internal fault |

---

## Portal Vendor Integration

The vendor should:

1. Call `POST /theme/compose` with the portal's base CSS and a user/session prompt.
2. Receive the `css` field from the response.
3. Inject that CSS string into the page (e.g. via a `<style>` tag or a CSS-in-JS runtime).
4. Store the `themeId` from `provenance` for audit/logging purposes.

The service is stateless — it does not persist themes. If the portal wants to cache or replay a theme, it should store the returned CSS alongside the `themeId`.

---

## Configuration

Set the following environment variables before starting:

| Variable            | Default         | Description                            |
|---------------------|-----------------|----------------------------------------|
| `PORT`              | `3000`          | HTTP port the service listens on       |
| `OPENAI_API_KEY`    | *(required)*    | OpenAI API key for theme generation    |
| `OPENAI_MODEL`      | `gpt-4o`        | Model to use for generation            |
| `ALLOW_EXTERNAL_URLS` | `false`       | Whether to allow `url()` external refs |
| `OPENAI_TEMPERATURE`  | `1.1`         | Sampling temperature (0–2). Higher = more variety |

---

## Running Locally

```bash
cd theatre-dresser
npm install
OPENAI_API_KEY=sk-... npm start
```

For development with auto-restart:
```bash
npm run dev
```

---

## Running Tests

```bash
npm test
```

Tests cover request validation and CSS safety rules without requiring a live AI key.

---

## Sample Files

- `samples/base.css` — example base stylesheet
- `samples/request-futuristic.json` — example prompt payload
- `samples/request-executive.json` — example prompt payload

---

## Safety Rules (Hard Limits)

The validator rejects any generated CSS that contains:
- HTML tags (`<script>`, `<style>`, `<iframe>`, etc.)
- `javascript:` scheme references
- `expression(...)` (legacy IE CSS injection)
- `@import` of external URLs (non-relative, non-data)
- `url()` with external `http`/`https` references (unless `ALLOW_EXTERNAL_URLS=true`)
- Any null bytes or unusual control characters

Stylistic content — colors, gradients, animations, custom properties, media queries, keyframes — is fully allowed.
