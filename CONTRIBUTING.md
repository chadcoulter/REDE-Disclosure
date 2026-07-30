# Contributing to REDE-Disclosure

Thank you for contributing to this knowledge system. This guide explains how to propose, develop, and publish knowledge artifacts.

## Principles

1. **Provenance matters.** Every artifact traces its origin through Git history. Never edit a committed artifact in a way that obscures its history.
2. **Separate evidence from interpretation.** Observations record facts; Hypotheses propose explanations; Decisions record conclusions. Keep these distinct.
3. **Open inquiry, curated canon.** Anyone may propose a draft. Maintainers curate canonical content through transparent review.
4. **Human and AI readable.** Use YAML frontmatter + Markdown for all artifacts so they can be processed by both people and automated systems.

## Artifact Lifecycle

```
draft → review → canonical/published
                    ↑
              (maintainer approval)
```

All new artifacts start as `draft`. When you believe an artifact is ready, open a pull request and set its `status` to `review`. Maintainers will review and either merge (promoting to `canonical` or `published`) or request changes.

## Creating a New Artifact

1. **Choose the right type.** Consult the [knowledge type table](./README.md#knowledge-types) to determine which type fits your contribution.
2. **Copy the template.** Each directory contains a `_template.md`. Copy it and rename the file using lowercase kebab-case matching the artifact's `id`.
3. **Fill in the frontmatter.** All required fields (marked in the [schemas](./schemas/)) must be completed before submitting for review.
4. **Write the body.** Use the section headings in the template as a guide. Remove any sections that are not applicable.
5. **Open a pull request.** Describe the artifact briefly in the PR description. Link any related artifacts by ID.

## File Naming

- Use lowercase kebab-case: `my-concept-name.md`
- The filename (without `.md`) should match the artifact's `id` field.
- Templates are named `_template.md` and are never submitted as artifacts.

## IDs

- IDs must be globally unique across the entire repository.
- Use descriptive, stable slugs: `rede-transform`, not `concept-001`.
- Once an artifact is published (status `canonical` or `published`), its `id` must not change.

## Cross-References

- Reference other artifacts using their `id` fields, not file paths.
- Use the appropriate frontmatter field (e.g., `concepts`, `discussion`, `resolves`).
- When referencing external sources, add full citations to the `references` array and expand them in the article body.

## Discussion Threads

- Every concept and article should have an associated Discussion artifact.
- Open a Discussion when you have a question, want to propose a change, or have new evidence to introduce.
- Use Observations, Questions, Hypotheses, and Experiments as child artifacts within the discussion thread.
- Close a Discussion by creating a Decision artifact and setting the discussion's `status` to `resolved`.

## Canonical Content

- Only maintainers may set an artifact's status to `canonical` or `published`.
- Proposed changes to canonical artifacts must go through a pull request with at least one maintainer review.
- Deprecated concepts must retain their files with `status: deprecated` and a `superseded_by` reference.

## Transforms

Use [Transform artifacts](./transforms/README.md) to record formal relationships between artifacts. Do not embed relationship logic in article prose alone—make it explicit with a Transform.

## Commit Messages

Use the format:

```
<type>(<id>): <short description>

[optional body]
```

Examples:
- `concept(rede-transform): add canonical definition`
- `article(logic-structures): add background section`
- `discussion(rede-transform-scope): open thread on boundary cases`

## Questions

Open a [Discussion](./discussions/) or a [Question](./questions/) artifact to ask about the knowledge system itself.
