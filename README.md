# RugFreePump Documentation

Official documentation repository for [RugFreePump](https://rugfreepump.com), a Solana-based token launch platform supporting Token Unlocked (TU) and Token Locked (TL) bonding-curve sale models.

The documentation is built with [Mintlify](https://mintlify.com). Pages are written in MDX, and navigation and site configuration are managed through [`docs.json`](./docs.json).

## Documentation structure

- **Welcome** — Platform introduction.
- **Overview** — Token sale models and protocol fees.
- **User Guides** — Getting started, creating token sales, purchasing tokens, claiming tokens, and withdrawing contributions.
- **Reward Program** — Platform reward program.
- **On-Chain Program** — On-chain execution information.
- **Security & Risks** — Security information, risks, and security disclosures.
- **Developer Guide** — Integration information, Anchor IDL, and TypeScript types.
- **Legal & Compliance** — Terms, privacy, risk disclosure, copyright, and trademark policies.
- **Announcements** — Platform announcements.

## Local development

Install the Mintlify CLI:

```bash
npm install -g mint
```

Start the local development server from the repository root:

```bash
mint dev
```

Check for broken links:

```bash
mint broken-links
```

## Repository conventions

Documentation pages use MDX with YAML frontmatter. Site navigation is maintained in `docs.json`.

Changes to existing page paths should be reflected in navigation and internal links. Documentation must accurately describe the currently deployed RugFreePump protocol and should not present planned features as already available.

## Links

- Platform: https://rugfreepump.com
- Documentation: https://rugfreepump.com/docs
- Support: https://discord.gg/REPLACE_WITH_INVITE

## License

See the repository's `LICENSE` file if a documentation license is adopted.
