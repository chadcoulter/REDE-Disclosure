# Encyclopedia

The encyclopedia expands upon the dictionary by providing **context, history, examples, evidence, competing perspectives, implementation notes, and references**. Articles may reference many concepts and evolve over time while preserving their history.

## Purpose

- Deepen understanding beyond a simple definition.
- Provide worked examples, historical context, and competing interpretations.
- Serve as the living body of knowledge that grows with the community.

## Structure

Each entry in the encyclopedia is an **Article** artifact stored as a Markdown file with YAML frontmatter. Files are named using lowercase kebab-case: `my-article.md`.

### Status Lifecycle

| Status | Meaning |
|--------|---------|
| `draft` | Work in progress, not yet ready for review |
| `review` | Submitted for maintainer review |
| `published` | Accepted and visible as authoritative knowledge |
| `archived` | Superseded or outdated; kept for provenance |

## Template

See [`_template.md`](./_template.md) to create a new article.

## Schema

The full JSON Schema for this artifact type is at [`../schemas/article.schema.json`](../schemas/article.schema.json).

## Conventions

- One file per article.
- The `id` field must be a globally unique slug.
- List all concepts referenced in the article under `concepts`.
- Use `references` for external citations (books, papers, URLs).
- Prefer linking to dictionary concepts rather than redefining terms inline.
