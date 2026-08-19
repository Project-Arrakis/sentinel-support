# Security Policy

## Reporting a Vulnerability

**Do not report security vulnerabilities through public GitHub Issues or
Discussions in this repository.** A public report of an unpatched
vulnerability can be used against server owners before a fix is available.

To report a suspected vulnerability in the Arrakis Control Panel Discord
bot, the setup portal, or the WebUI adapter integration:

1. Use GitHub's private vulnerability reporting for this repository, if
   available (`Security` tab → `Report a vulnerability`), **or**
2. Contact the repository owner directly through their GitHub profile
   contact channel.

Please include:

- affected version (see `/dune core about`, or your setup portal)
- a description of the vulnerability and its potential impact
- reproduction steps
- whether any token, server address, Discord guild ID, or user data
  appears in your evidence

**Redact secrets before sharing evidence.** Do not include Discord bot
tokens, WebUI adapter tokens, `.env` file contents, or session identifiers
in a report, screenshot, or log excerpt — even in a private report.

## Scope

This repository is the public community, Issues, Discussions, and
release-information surface for the Arrakis Control Panel Discord bot. It
does not contain the bot's application source code (see `README.md`), so
this policy also covers:

- the hosted setup portal (`acp-setup.darkdante.org`);
- the Discord bot's public-facing command behavior;
- the WebUI adapter integration contract, to the extent it's documented
  here.

## Secret Exposure Response

If you believe a Discord bot token, WebUI adapter token, or other
credential has been exposed (for example, pasted into a public issue or
Discussion by mistake):

1. Report it privately using the process above — do not just delete the
   public comment and assume it's resolved; GitHub retains edit history.
2. If it's your own server's adapter token or bot token, rotate it
   immediately regardless of whether you've reported anything.
3. Treat any exposed token as compromised even if no abuse is visible yet.

## Supported Versions

Security fixes are released for the current release line. Operators
should run the latest published release rather than an old version when
requesting a security fix.

## ACP Issue Bridge

Issues opened in this repository may be automatically mirrored into the
ACP team's internal engineering tracker for triage and resolution (see
`docs/` for what this means for your report). This mirroring is one-way
and automatic for public content; nothing from internal engineering
discussion is published back to this repository except through an
explicit engineering update, status change, or resolution comment posted
by the ACP team.
