# Implementations

An implementation is **executable work** that puts a Decision into practice. It may be code, configuration, documentation, a process, or any other concrete artifact.

## Purpose

- Bridge the gap between a resolved decision and tangible output.
- Provide a traceable link from reasoning to execution.
- Enable review and evaluation through Review artifacts.

## Structure

Each implementation is an artifact stored as a Markdown file with YAML frontmatter. An implementation references the Decision that authorized it.

### Status Lifecycle

| Status | Meaning |
|--------|---------|
| `proposed` | Outlined but not yet started |
| `in-progress` | Actively being built |
| `complete` | Finished and ready for review |
| `abandoned` | Stopped; reason recorded |

## Template

See [`_template.md`](./_template.md) to create a new implementation.

## Schema

The full JSON Schema for this artifact type is at [`../schemas/implementation.schema.json`](../schemas/implementation.schema.json).
