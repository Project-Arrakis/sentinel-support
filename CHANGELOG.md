# Changelog

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
conventions for this repository's own content (documentation, issue forms,
and the ACP Issue Bridge automation). It does not track releases of the
Arrakis Control Panel application itself, which is versioned separately.

## Unreleased

### Added
- **ACP Issue Bridge** — the public-repository side of a fail-closed
  synchronization system with the ACP engineering repository. Public
  issues, comments, edits, closures, reopens, and allowlisted labels
  mirror inward automatically to engineering for triage; nothing from
  private engineering discussion is ever published back here except an
  explicit, authorized status update or resolution comment. See
  `docs/issue-bridge/` in the engineering repository for the full
  architecture and threat model.
- Public label taxonomy (`type:*`, `status:*`, `priority:*`, `area:*`) —
  bootstrapped live via `.github/workflows/issue-bridge-maintenance.yml`.
- GitHub Issue Forms: Bug Report, Feature Request, Compatibility Report,
  Documentation Issue, with a `config.yml` routing security reports away
  from public issues and support questions toward Discussions.
- `SECURITY.md`, `SUPPORT.md`, `CONTRIBUTING.md`, and a full `README.md`
  clarifying this repository's scope (no ACP application source).
- `CI` and `Security Gates` (Semgrep, Gitleaks) workflows.
