# Support

## Before Opening an Issue

Check the documentation linked from `README.md` first, and search existing
[Issues](../../issues) and [Discussions](../../discussions) — someone may
have already reported or answered the same thing.

For a quick usage question, prefer **Discussions → Q&A** over filing an
issue. Issues are for tracked bugs, feature requests, compatibility
problems, and documentation problems.

## What to Include

When you do open an issue, use the matching form (Bug Report, Feature
Request, Compatibility Report, or Documentation Issue) and fill in every
field it asks for. At minimum, useful reports include:

- the ACP version you're running;
- how you're running it (hosted bot vs. self-hosted);
- exact reproduction steps;
- what you expected vs. what happened;
- sanitized logs, if relevant.

## What Not to Include

Never post, in an issue, comment, Discussion, or screenshot:

- Discord bot tokens or client secrets;
- WebUI adapter bearer tokens;
- `.env` file contents;
- session IDs or OAuth tokens;
- private server addresses, unless you intend to make them public;
- other users' personal information.

If you accidentally post a secret, see `SECURITY.md`'s "Secret Exposure
Response" section — rotate it, don't just delete the comment.

## Security Issues

Do not open public issues or Discussions for suspected vulnerabilities or
leaked credentials. See `SECURITY.md`.

## What Happens After You File an Issue

Public issues opened here may be automatically mirrored into the ACP
team's internal engineering tracker for triage. You'll see status updates
(`Confirmed`, `Planned`, `In Progress`, `Blocked`, `Testing`,
`Ready for Release`, `Released`) and a resolution comment posted back to
your issue as engineering work progresses — these are the only kind of
update that crosses back from internal engineering to this repository.
