# Changelog

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
conventions for this repository's own content (documentation, issue forms,
and the ACP Issue Bridge automation). It does not track releases of the
Arrakis Control Panel application itself, which is versioned separately.

## Unreleased

### Changed
- ACP Issue Bridge config (`.github/acp-issue-bridge.yml`) repoints both
  `repositories.private` and `repositories.public` (issue #228 in the
  engineering repo, now at `Project-Arrakis/sentinel#228`) — both this
  repo and the private engineering repo have transferred to
  `Project-Arrakis` **and been renamed** (`arrakis-control-panel` →
  `sentinel`, this repo `acp-discordbot` → `sentinel-support`). **Not yet
  live** — merging is deliberately deferred until the GitHub App is
  reinstalled under `Project-Arrakis`; see the engineering repo's
  `docs/issue-bridge/github-app.md` "Org migration" section for the exact
  manual sequencing and current status.

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

### Fixed
- `scripts/run-tests.js`'s CI test-discovery bug (Node 22 does not
  recurse into a bare dot-directory the way Node 20 does) — see
  yacketrj/arrakis-control-panel's identical fix for the full writeup.
- Outbound secret scanner (`lib/secretScan.mjs`) false-negative: a real
  secret was wrongly exempted whenever a placeholder-shaped word (e.g.
  `example`) appeared as a hyphen/underscore-bounded substring anywhere
  within it. Fixed by anchoring the placeholder exclusion to the entire
  captured value only.
