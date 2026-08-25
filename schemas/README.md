# Schemas

Machine-readable **JSON Schema** definitions for all knowledge types in this system. These schemas enable:

- Validation of artifact frontmatter during authoring and CI.
- AI-assisted authoring with structured completions.
- Tooling that navigates and queries the knowledge graph.

## Schemas

| File | Knowledge Type |
|------|---------------|
| [`concept.schema.json`](./concept.schema.json) | Concept (dictionary entry) |
| [`article.schema.json`](./article.schema.json) | Article (encyclopedia entry) |
| [`discussion.schema.json`](./discussion.schema.json) | Discussion thread |
| [`observation.schema.json`](./observation.schema.json) | Evidence |
| [`question.schema.json`](./question.schema.json) | Unresolved observation |
| [`hypothesis.schema.json`](./hypothesis.schema.json) | Proposed explanation |
| [`experiment.schema.json`](./experiment.schema.json) | Method for testing a hypothesis |
| [`decision.schema.json`](./decision.schema.json) | Resolved discussion |
| [`implementation.schema.json`](./implementation.schema.json) | Executable work |
| [`review.schema.json`](./review.schema.json) | Evaluation of an implementation |
| [`transform.schema.json`](./transform.schema.json) | Relationship between artifacts |

## Format

All artifact files use **YAML frontmatter** embedded in Markdown. The schemas describe the structure of that frontmatter. Common fields across all types:

| Field | Type | Description |
|-------|------|-------------|
| `type` | string (enum) | The knowledge type; must match the schema |
| `id` | string | Globally unique slug identifier |
| `title` | string | Human-readable name |
| `created` | string (date) | ISO 8601 creation date |
| `updated` | string (date) | ISO 8601 last-modified date |
| `status` | string (enum) | Lifecycle status (varies by type) |
| `tags` | array of strings | Free-form labels for discovery |

## Conventions

- IDs use lowercase kebab-case: `my-concept-id`.
- Dates use ISO 8601 format: `YYYY-MM-DD`.
- Cross-references use the `id` of the target artifact.
