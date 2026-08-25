# REDE-Disclosure

**An AI-native knowledge system for disclosing REDE logic structures and transforms.**

REDE-Disclosure is a governance-first, knowledge-first repository designed for public collaboration. It combines structured knowledge artifacts, traceable provenance, and transparent governance to build a living, auditable body of knowledge.

---

## What This Repository Is

REDE-Disclosure integrates six interlocking knowledge layers into a single coherent system:

| Layer | Purpose |
|---|---|
| **Dictionary** | Canonical definitions of concepts, terms, and primitives |
| **Encyclopedia** | Long-form articles that develop and contextualize concepts |
| **Structured Discussions** | Traceable records of reasoning, debate, and resolution |
| **Provenance** | Explicit authorship, sourcing, and change history for every artifact |
| **Transforms** | Formal mappings that convert or relate knowledge structures |
| **Governance** | Policies, roles, and processes that keep the system trustworthy |

All artifacts are plain text (YAML frontmatter + Markdown) so they are human-readable, machine-parseable, and version-controlled.

---

## Repository Structure

```
REDE-Disclosure/
├── dictionary/        # Concept definitions
├── encyclopedia/      # Long-form articles
├── discussions/       # Structured discussions and debates
├── ontology/          # Formal ontology declarations and mappings
├── templates/         # Artifact templates for contributors
├── examples/          # Worked examples of artifact types
└── .github/
    ├── ISSUE_TEMPLATE/   # Structured issue forms
    └── workflows/        # CI/CD automation
```

---

## Contributor Workflow

Every contribution moves through a structured lifecycle to ensure traceability and quality:

```
Observation
    ↓
Discussion
    ↓
Proposal
    ↓
Review
    ↓
Merge
    ↓
Knowledge Base
```

1. **Observation** — A contributor notices a gap, inconsistency, or new idea. Open an issue using the appropriate template.
2. **Discussion** — The community deliberates via GitHub Discussions or issue comments. Key arguments are captured as structured discussion artifacts.
3. **Proposal** — A contributor opens a feature branch and drafts an artifact (definition, article, transform, etc.) using a template.
4. **Review** — Maintainers and peers review the artifact for accuracy, consistency, and governance compliance.
5. **Merge** — Approved artifacts are merged into `main` and become part of the canonical knowledge base.
6. **Knowledge Base** — Merged artifacts are stable, citable, and cross-referenceable by ID.

---

## Artifact Format

All artifacts use YAML frontmatter followed by Markdown body:

```markdown
---
id: example-concept
type: concept
title: Example Concept
created: 2026-07-30
authors:
  - github: your-username
status: draft
---

Body content here.
```

- **IDs** use `lowercase-kebab-case`
- **Types** must match one of the declared artifact types (see `templates/`)
- **Dates** use ISO 8601 (`YYYY-MM-DD`)
- **Cross-references** use artifact IDs, not file paths

---

## Getting Started

1. Read [CONTRIBUTING.md](CONTRIBUTING.md) for branching, commit, and artifact conventions
2. Read [GOVERNANCE.md](GOVERNANCE.md) for roles, decision-making, and review processes
3. Browse `templates/` to find the right template for your contribution
4. Open an issue to start a discussion before creating large new artifacts

---

## License

This project is licensed under the [Apache License 2.0](LICENSE).
