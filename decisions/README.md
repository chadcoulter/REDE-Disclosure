# Decisions

A decision is a **resolved discussion**. It captures what was concluded, why, and by whom, closing the loop from observation through inquiry to action.

## Purpose

- Record the outcome of a discussion thread authoritatively.
- Preserve the rationale so future contributors understand why choices were made.
- Serve as the basis for Implementation artifacts.

## Structure

Each decision is an artifact stored as a Markdown file with YAML frontmatter. A decision resolves a Discussion and may reference Hypotheses and Experiments that informed it.

### Status Lifecycle

| Status | Meaning |
|--------|---------|
| `proposed` | Drafted and awaiting acceptance |
| `accepted` | Ratified by maintainers; the discussion is now resolved |
| `rejected` | Not accepted; the discussion may be reopened |
| `superseded` | Replaced by a newer Decision; kept for provenance |

## Template

See [`_template.md`](./_template.md) to create a new decision.

## Schema

The full JSON Schema for this artifact type is at [`../schemas/decision.schema.json`](../schemas/decision.schema.json).
