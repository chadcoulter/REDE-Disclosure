# Contributing to REDE-Disclosure

Thank you for contributing to REDE-Disclosure. This document describes everything you need to know to make a well-formed contribution.

---

## Table of Contents

- [Principles](#principles)
- [Branching](#branching)
- [Commit Messages](#commit-messages)
- [Artifact Format](#artifact-format)
- [Artifact Types](#artifact-types)
- [Contribution Workflow](#contribution-workflow)
- [Review Criteria](#review-criteria)
- [Style Guide](#style-guide)

---

## Principles

1. **Knowledge first.** Every contribution must add, clarify, or connect knowledge. Cosmetic-only changes without substance are deprioritized.
2. **Traceable.** Every claim should be attributable. Use the `sources` frontmatter field when citing external material.
3. **Governance-compliant.** All work follows the processes described in [GOVERNANCE.md](GOVERNANCE.md).
4. **Plain text.** All artifacts are YAML frontmatter + Markdown. No binary blobs in content directories.

---

## Branching

All work must be done on feature branches. Direct pushes to `main` are not permitted.

### Branch Naming Convention

Branch names must follow this pattern:

```
<type>/<short-description>
```

Where `<type>` is one of:

| Type | Use for |
|---|---|
| `concept` | New or revised dictionary concepts |
| `article` | New or revised encyclopedia articles |
| `discussion` | New structured discussion artifacts |
| `ontology` | Ontology declarations or mappings |
| `transform` | Transform definitions |
| `template` | Changes to artifact templates |
| `example` | New or updated examples |
| `governance` | Changes to governance, contributing, or policy documents |
| `fix` | Corrections to existing artifacts (typos, broken links, factual errors) |
| `chore` | Maintenance tasks (CI, tooling, scaffolding) |

`<short-description>` must be `lowercase-kebab-case`, 2–6 words.

**Examples:**

```
concept/causal-chain-definition
article/rede-transform-overview
fix/correct-entropy-definition
governance/update-review-process
```

---

## Commit Messages

Use the imperative mood and keep the subject line under 72 characters.

```
Add definition for causal-chain concept
Fix broken cross-reference in entropy article
Update governance to require two reviewers
```

Prefix with the artifact type when changing a specific artifact:

```
concept: add causal-chain definition
article: expand entropy article with examples
fix: correct spelling in observation-loop
```

---

## Artifact Format

Every artifact is a Markdown file with a YAML frontmatter block.

### Required Frontmatter Fields

```yaml
---
id: artifact-id-in-kebab-case
type: <artifact-type>
title: Human Readable Title
created: YYYY-MM-DD
authors:
  - github: your-github-username
status: draft | review | stable | deprecated
---
```

### Optional Frontmatter Fields

```yaml
updated: YYYY-MM-DD
sources:
  - url: https://example.com
    title: Source Title
    accessed: YYYY-MM-DD
tags:
  - tag-one
  - tag-two
related:
  - other-artifact-id
  - another-artifact-id
```

### Rules

- **IDs** are globally unique, `lowercase-kebab-case`, and never change after an artifact reaches `stable` status.
- **`type`** must exactly match one of the declared artifact types (see below).
- **Dates** use ISO 8601 format: `YYYY-MM-DD`.
- **Cross-references** always use artifact `id` values, never file paths.
- **`status`** must be updated as the artifact progresses through review.

---

## Artifact Types

| Type | Directory | Description |
|---|---|---|
| `concept` | `dictionary/` | Canonical definition of a term or primitive |
| `article` | `encyclopedia/` | Long-form treatment of a topic |
| `discussion` | `discussions/` | Structured deliberation record |
| `ontology` | `ontology/` | Formal ontology declaration or mapping |
| `template` | `templates/` | Template for a new artifact type |
| `example` | `examples/` | Worked example demonstrating an artifact or transform |

---

## Contribution Workflow

```
1. Open an issue  →  2. Branch  →  3. Draft artifact  →  4. Open PR  →  5. Review  →  6. Merge
```

### Step 1 — Open an Issue

Before drafting a new artifact, open a GitHub Issue using the appropriate template. This starts the Discussion phase and surfaces whether similar work is already in progress.

### Step 2 — Create a Branch

```bash
git checkout -b concept/your-concept-name
```

### Step 3 — Draft Your Artifact

Copy the relevant template from `templates/`, fill in the frontmatter, and write the body. Set `status: draft`.

### Step 4 — Open a Pull Request

Use the pull request template. Link to the issue you opened in step 1.

### Step 5 — Review

At least one maintainer must approve. For `stable`-status artifacts, two approvals are required. Address all review comments before merging.

### Step 6 — Merge

Maintainers merge approved PRs. After merge, the artifact is part of the canonical knowledge base and its `id` is stable.

---

## Review Criteria

Reviewers evaluate contributions on:

| Criterion | Questions |
|---|---|
| **Accuracy** | Are factual claims correct and sourced? |
| **Consistency** | Does this conflict with existing stable artifacts? |
| **Completeness** | Does the artifact fully address what it declares? |
| **Format compliance** | Does the frontmatter conform to the schema? |
| **Cross-references** | Are related artifacts linked by ID? |
| **Clarity** | Is the language unambiguous? |

---

## Style Guide

- Write in the third person for definitions and articles.
- Prefer short declarative sentences.
- Use numbered lists for sequences, bullet lists for unordered sets.
- Avoid jargon that is not itself defined in the dictionary.
- Use `inline code` for artifact IDs, field names, and literal values.
