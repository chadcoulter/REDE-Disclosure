# Hypotheses

A hypothesis is a **proposed explanation** for one or more observations or questions. It is a testable claim that has not yet been confirmed or refuted.

## Purpose

- Offer candidate explanations that can be investigated.
- Connect observations and questions to experimental methods.
- Record the reasoning behind proposed explanations for future reference.

## Structure

Each hypothesis is an artifact stored as a Markdown file with YAML frontmatter. A hypothesis is anchored to a Discussion and addresses one or more Questions.

### Status Lifecycle

| Status | Meaning |
|--------|---------|
| `proposed` | Suggested but not yet tested |
| `testing` | An Experiment is actively underway |
| `supported` | Evidence is consistent with the hypothesis |
| `refuted` | Evidence contradicts the hypothesis |
| `accepted` | Incorporated into a Decision or canonical knowledge |

## Template

See [`_template.md`](./_template.md) to create a new hypothesis.

## Schema

The full JSON Schema for this artifact type is at [`../schemas/hypothesis.schema.json`](../schemas/hypothesis.schema.json).
