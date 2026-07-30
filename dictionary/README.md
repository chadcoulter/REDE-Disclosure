# Dictionary

The dictionary provides **canonical definitions** for concepts, terminology, entities, and relationships. It establishes the shared vocabulary that serves as the foundation for all other work in this knowledge system.

## Purpose

- Define terms precisely so that everyone—human and AI—shares a common understanding.
- Serve as the authoritative reference for all articles and discussions.
- Preserve the history of how definitions evolve over time.

## Structure

Each entry in the dictionary is a **Concept** artifact stored as a Markdown file with YAML frontmatter. Files are named using lowercase kebab-case: `my-concept.md`.

### Status Lifecycle

| Status | Meaning |
|--------|---------|
| `draft` | Proposed definition, open for discussion |
| `review` | Submitted for maintainer review |
| `canonical` | Accepted as the authoritative definition |
| `deprecated` | Superseded by another concept; kept for provenance |

## Template

See [`_template.md`](./_template.md) to create a new concept.

## Schema

The full JSON Schema for this artifact type is at [`../schemas/concept.schema.json`](../schemas/concept.schema.json).

## Conventions

- One file per concept.
- The `id` field must be a globally unique slug (e.g., `rede-transform`).
- Use `aliases` to capture synonyms and alternate spellings.
- Use `related` to link to other concepts without implying a formal relationship.
- Formal relationships between artifacts belong in [`../transforms/`](../transforms/README.md).
