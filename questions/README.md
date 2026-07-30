# Questions

A question is an **unresolved observation**—something noticed that is not yet explained or understood. Questions drive inquiry and give structure to investigation.

## Purpose

- Articulate what is unknown or uncertain.
- Link observations to the hypotheses they motivate.
- Track which questions have been answered and which remain open.

## Structure

Each question is an artifact stored as a Markdown file with YAML frontmatter. A question is anchored to a Discussion and typically stems from one or more Observations.

### Status Lifecycle

| Status | Meaning |
|--------|---------|
| `open` | Unanswered; active area of inquiry |
| `answered` | Addressed by one or more accepted Hypotheses or Decisions |
| `withdrawn` | Retracted by the author; no longer relevant |

## Template

See [`_template.md`](./_template.md) to create a new question.

## Schema

The full JSON Schema for this artifact type is at [`../schemas/question.schema.json`](../schemas/question.schema.json).
