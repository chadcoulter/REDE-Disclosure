# Experiments

An experiment is a **method for testing a hypothesis**. It describes what will be done, what evidence will be collected, and how results will be interpreted.

## Purpose

- Make the process of inquiry transparent and reproducible.
- Link hypotheses to the evidence that supports or refutes them.
- Preserve the methodology so others can replicate or build on it.

## Structure

Each experiment is an artifact stored as a Markdown file with YAML frontmatter. An experiment is anchored to a Discussion and tests one or more Hypotheses.

### Status Lifecycle

| Status | Meaning |
|--------|---------|
| `proposed` | Designed but not yet started |
| `running` | Currently being conducted |
| `completed` | Finished; results are available |
| `abandoned` | Stopped before completion; reason recorded |

## Template

See [`_template.md`](./_template.md) to create a new experiment.

## Schema

The full JSON Schema for this artifact type is at [`../schemas/experiment.schema.json`](../schemas/experiment.schema.json).
