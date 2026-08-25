# Observations

An observation is **evidence**—a recorded fact, measurement, finding, or perceived phenomenon that is relevant to the knowledge system. Observations are the raw material from which questions, hypotheses, and decisions are built.

## Purpose

- Introduce empirical or logical evidence into a discussion.
- Provide a traceable basis for every claim in the knowledge system.
- Distinguish raw evidence from interpretation (which belongs in Hypotheses).

## Structure

Each observation is an artifact stored as a Markdown file with YAML frontmatter, anchored to a Discussion via the `discussion` field.

### Evidence Types

| Type | Meaning |
|------|---------|
| `empirical` | Measured or directly experienced data |
| `anecdotal` | Reported but not systematically verified |
| `logical` | Derived by reasoning or formal proof |
| `computational` | Produced by a model, simulation, or algorithm |
| `documentary` | Sourced from an existing document or record |

## Template

See [`_template.md`](./_template.md) to create a new observation.

## Schema

The full JSON Schema for this artifact type is at [`../schemas/observation.schema.json`](../schemas/observation.schema.json).
