# Transforms

A transform is a **relationship artifact** that shows how one knowledge artifact becomes, relates to, or connects to another. Transforms make the knowledge graph explicit and navigable.

## Purpose

- Express formal relationships between artifacts across the knowledge system.
- Enable reasoning about how knowledge evolves and connects.
- Support AI and human navigation of the knowledge graph.

## Structure

Each transform is an artifact stored as a Markdown file with YAML frontmatter. It references a `source` artifact and a `target` artifact, with a `relationship` that characterizes the connection.

### Relationship Types

| Relationship | Meaning |
|-------------|---------|
| `derived-from` | The target was produced or inferred from the source |
| `transforms-into` | The source becomes the target through a process |
| `refines` | The target is a more precise or detailed version of the source |
| `contradicts` | The target is in tension with or negates the source |
| `supports` | The target provides evidence for or reinforces the source |
| `supersedes` | The target replaces the source |
| `instantiates` | The target is a concrete instance of the abstract source |

## Template

See [`_template.md`](./_template.md) to create a new transform.

## Schema

The full JSON Schema for this artifact type is at [`../schemas/transform.schema.json`](../schemas/transform.schema.json).
