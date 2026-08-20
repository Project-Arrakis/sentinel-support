# ACP Discord Bot — Community Repository

> *"A beginning is a very delicate time."*

This repository is the **public support, Issues, Discussions,
documentation, and release-information repository for the Arrakis Control
Panel (ACP) Discord Bot** — the Discord companion for
[Dune Awakening Self-Host Docker](https://github.com/Red-Blink/dune-awakening-selfhost-docker)
servers.

**The Arrakis Control Panel application source code is maintained
separately and is not published in this repository.** This repository
exists so users, server owners, and the community have a public place to
file bugs, request features, report compatibility problems, flag
documentation issues, ask questions, and follow release announcements —
without any engineering source, internal architecture, CI/CD internals, or
security findings being exposed alongside it.

## What ACP Does

ACP connects your Dune Awakening self-hosted game server to Discord.
Once your server owner sets it up, anyone in the Discord server can check
server health, see player counts, look up their own inventory, and more —
all without leaving Discord. It is **read-only by default**: it cannot
change anything on your game server unless an operator explicitly enables
write commands.

## Getting the Bot

Server owners invite the bot and connect it through a hosted setup
portal — no Discord application, hosting, or `.env` configuration
required on your side:

1. [Invite the bot to your server](https://discord.com/oauth2/authorize?client_id=1516816812006969494&scope=bot%20applications.commands&permissions=128)
2. Complete the setup portal to connect your console
3. Configure roles so players and admins have the access you intend

Players who just want to use commands: ask a server admin for the
appropriate role, then type `/dune` in any channel.

## Getting Help

- **Usage questions:** [Discussions → Q&A](../../discussions/categories/q-a)
- **Bugs, feature requests, compatibility problems, documentation
  issues:** [open an issue](../../issues/new/choose) using the matching
  form
- **Security vulnerabilities:** see [SECURITY.md](SECURITY.md) — do not
  file these as public issues or Discussions
- See [SUPPORT.md](SUPPORT.md) for what makes a good report

## Discussions

This repository uses [GitHub Discussions](../../discussions) for:

- **Announcements** — release notes and project status
- **General** — open-ended conversation
- **Q&A** — usage and troubleshooting questions
- **Ideas** — early-stage feature ideas before they become a formal
  Feature Request issue
- **Troubleshooting** — help working through a specific problem
- **Show and Tell** — share how you're using ACP

A Discussion that turns out to be a confirmed, actionable defect is
converted into a tracked issue from there.

## How Issues Are Handled

Opening an issue here starts a triage process: the ACP team reviews it,
and as engineering work progresses you'll see status updates posted back
to your issue (`Confirmed`, `Planned`, `In Progress`, `Blocked`,
`Testing`, `Ready for Release`, `Released`), followed by a resolution
comment when it ships. Internal engineering discussion, implementation
details, and security analysis are **not** published back to this
repository — only the outcome is.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). This repository does not accept
pull requests containing ACP application source code.

## License

This repository (documentation, issue templates, and community-facing
automation) is provided under the [MIT License](LICENSE). This license
covers the contents of *this* repository only, and makes no statement
about the licensing of the ACP application itself, which is maintained
elsewhere.
