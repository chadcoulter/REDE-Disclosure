# Discussions

Every concept and every article has an associated **discussion space** where ideas can be explored, challenged, refined, and eventually resolved. Discussions are not separate from the knowledge base—they are part of the provenance of that knowledge.

## Purpose

- Capture the reasoning that connects observations to conclusions.
- Provide a structured space for collaborative inquiry.
- Preserve the path from open question to resolved decision.

## Structure

Each discussion is an artifact stored as a Markdown file with YAML frontmatter. A discussion is anchored to either a Concept (in the dictionary) or an Article (in the encyclopedia) via its `subject` field.

A discussion thread typically follows this progression:

```
Discussion
  └── Observation  (evidence introduced)
        └── Question  (what is unresolved?)
              └── Hypothesis  (proposed explanation)
                    └── Experiment  (how to test it)
                          └── Decision  (what was concluded)
```

### Status Lifecycle

| Status | Meaning |
|--------|---------|
| `open` | Active discussion |
| `resolved` | Closed with a Decision artifact |
| `archived` | Closed without resolution; preserved for provenance |

## Template

See [`_template.md`](./_template.md) to create a new discussion.

## Schema

The full JSON Schema for this artifact type is at [`../schemas/discussion.schema.json`](../schemas/discussion.schema.json).

## Conventions

- One file per discussion thread.
- The `subject` field references the `id` of the anchoring Concept or Article.
- Child artifacts (Observations, Questions, etc.) live in their own directories and reference this discussion's `id`.
- When a discussion is resolved, create a Decision artifact and set `status: resolved`.
