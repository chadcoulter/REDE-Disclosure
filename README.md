# REDE-Disclosure

An open, extensible knowledge system for collecting, organizing, discussing, refining, and transforming knowledge while preserving the provenance of every contribution.

## Vision

Rather than centering around files or folders, this repository is centered around **knowledge artifacts** and the relationships between them. Every artifact is understandable by both humans and AI systems, and every change remains transparent and traceable through Git.

## Three Complementary Knowledge Structures

### [Dictionary](./dictionary/README.md)
Canonical definitions for concepts, terminology, entities, and relationships. Establishes the shared vocabulary that serves as the foundation for all other work.

### [Encyclopedia](./encyclopedia/README.md)
Expanded articles that provide context, history, examples, evidence, competing perspectives, implementation notes, and references. Articles may reference many concepts and evolve over time while preserving their history.

### [Discussions](./discussions/README.md)
Structured conversations attached to every concept and article. Discussions are part of the provenance of knowledge—not separate from it.

Together these three structures form a living knowledge graph:
- **Definitions** establish shared meaning.
- **Articles** develop understanding.
- **Discussions** capture the reasoning that connects observations to conclusions.

## Knowledge Types

| Type | Description | Location |
|------|-------------|----------|
| [Concept](./dictionary/README.md) | The canonical definition of a thing | `dictionary/` |
| [Article](./encyclopedia/README.md) | An encyclopedia entry explaining one or more concepts | `encyclopedia/` |
| [Discussion](./discussions/README.md) | A tree of conversations attached to Concepts and Articles | `discussions/` |
| [Observation](./observations/README.md) | Evidence | `observations/` |
| [Question](./questions/README.md) | An unresolved observation | `questions/` |
| [Hypothesis](./hypotheses/README.md) | A proposed explanation | `hypotheses/` |
| [Experiment](./experiments/README.md) | A method for testing a hypothesis | `experiments/` |
| [Decision](./decisions/README.md) | A resolved discussion | `decisions/` |
| [Implementation](./implementations/README.md) | Executable work | `implementations/` |
| [Review](./reviews/README.md) | Evaluation of an implementation | `reviews/` |
| [Transform](./transforms/README.md) | A relationship showing how one artifact becomes another | `transforms/` |

## Schemas

Machine-readable JSON Schemas for all knowledge types live in [`schemas/`](./schemas/README.md). These enable validation, tooling integration, and AI-assisted authoring.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on proposing new artifacts, requesting reviews, and the lifecycle of canonical content.

## License

Apache 2.0 — see [LICENSE](./LICENSE).
