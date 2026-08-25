# Reviews

A review is an **evaluation of an implementation**. It assesses whether the implementation meets its stated goals, conforms to standards, and is ready to be accepted into the knowledge system.

## Purpose

- Provide quality assurance before an implementation is accepted.
- Surface issues, gaps, and improvements in a structured way.
- Record the evaluation process for future reference.

## Structure

Each review is an artifact stored as a Markdown file with YAML frontmatter. A review references the Implementation it evaluates.

### Status Lifecycle

| Status | Meaning |
|--------|---------|
| `pending` | Review requested but not yet started |
| `in-progress` | Evaluation underway |
| `approved` | Implementation accepted |
| `needs-revision` | Changes required before acceptance |
| `rejected` | Implementation not accepted |

## Template

See [`_template.md`](./_template.md) to create a new review.

## Schema

The full JSON Schema for this artifact type is at [`../schemas/review.schema.json`](../schemas/review.schema.json).
