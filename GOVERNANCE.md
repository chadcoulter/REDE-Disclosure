# Governance

This document defines the roles, decision-making processes, and policies that govern REDE-Disclosure.

---

## Table of Contents

- [Roles](#roles)
- [Decision-Making](#decision-making)
- [Review Process](#review-process)
- [Artifact Lifecycle](#artifact-lifecycle)
- [Conflict Resolution](#conflict-resolution)
- [Amendments](#amendments)

---

## Roles

### Contributor

Anyone who opens an issue, submits a pull request, or participates in a discussion. No special permissions are required to contribute.

**Responsibilities:**
- Follow the conventions in [CONTRIBUTING.md](CONTRIBUTING.md)
- Be respectful and constructive per the [Code of Conduct](CODE_OF_CONDUCT.md)
- Respond to review feedback in a timely manner

### Reviewer

A contributor who is trusted to evaluate pull requests. Reviewers are listed in the `CODEOWNERS` file (when established).

**Responsibilities:**
- Review pull requests within seven days of assignment
- Evaluate contributions against the criteria in CONTRIBUTING.md
- Approve, request changes, or comment — never leave PRs in limbo

**How to become a Reviewer:** Demonstrate consistent, high-quality contributions over at least three merged PRs. A maintainer nominates; the existing reviewer group approves by consensus.

### Maintainer

A trusted steward of the repository who holds merge permissions.

**Responsibilities:**
- Merge approved pull requests
- Triage new issues
- Enforce the Code of Conduct
- Maintain governance documents
- Make judgment calls when consensus is unclear

**How to become a Maintainer:** Nominated by an existing maintainer after sustained reviewer activity. Requires approval of all current maintainers.

---

## Decision-Making

REDE-Disclosure uses **lazy consensus**: a proposal passes unless a maintainer objects within five business days of it being posted.

For significant changes (additions or removals of artifact types, governance amendments, breaking changes to schemas), a **simple majority** of maintainers must explicitly approve.

Changes to this document (GOVERNANCE.md) require a **two-thirds supermajority** of maintainers.

All decisions are recorded as GitHub Issues or Discussions with a clear outcome stated in a closing comment.

---

## Review Process

### Standard Review (Draft → Review)

1. Contributor opens a PR and requests review.
2. At least **one Reviewer or Maintainer** must approve.
3. All change requests must be resolved before merge.
4. Maintainer merges.

### Stable Promotion (Review → Stable)

To promote an artifact's `status` from `review` to `stable`:

1. At least **two Reviewers or Maintainers** must approve.
2. The artifact must have been in `review` status for at least **five business days** to allow community comment.
3. No unresolved objections may remain.

### Hotfix Review

Corrections that fix factual errors, broken links, or formatting without changing meaning require only **one approval** and may be merged the same day.

---

## Artifact Lifecycle

```
draft  →  review  →  stable  →  deprecated
```

| Status | Meaning |
|---|---|
| `draft` | Work in progress. Subject to significant change. Not citable. |
| `review` | Proposed for acceptance. Open for community comment. |
| `stable` | Canonical. IDs are frozen. Changes require a new PR with documented rationale. |
| `deprecated` | No longer authoritative. Preserved for provenance. Replaced by a successor artifact. |

Once an artifact reaches `stable`:
- Its `id` is **permanent** and must never be reused.
- Changes to its content require a PR with an `updated` date and a changelog note in the body.
- Substantive rewrites should produce a new artifact with a new `id`; the original may be deprecated and linked to the successor.

---

## Conflict Resolution

1. **Good-faith discussion first.** Most disagreements resolve through open conversation on the relevant issue or PR.
2. **Maintainer arbitration.** If discussion stalls, any participant may request a maintainer to make a binding call.
3. **Full maintainer vote.** If the arbitrating maintainer is a party to the conflict, a vote of all maintainers decides the outcome.
4. **Code of Conduct violations** are handled separately under that document's enforcement process.

---

## Amendments

To propose an amendment to this document:

1. Open a GitHub Issue describing the proposed change and its rationale.
2. Allow at least **ten business days** for community discussion.
3. Open a PR with the change. The PR must reference the issue.
4. Obtain a **two-thirds supermajority** approval from maintainers.
5. Merge.

All governance amendments are noted in the PR description and linked from the issue for full provenance.
