# RugFreePump Documentation Project Instructions

## About this project

- This repository contains the official RugFreePump documentation, built with Mintlify.
- Documentation pages are MDX files with YAML frontmatter.
- Navigation, site settings, and appearance are configured in `docs.json`.
- The documentation covers the RugFreePump Solana bonding-curve token launch platform.

## Terminology

- Use **RugFreePump** for the platform name.
- Use **TU (Token Unlocked)** and **TL (Token Locked)** for the two token sale models.
- Use **bonding-curve sale** when describing the initial token sale process.
- Use **liquidity migration** for the transition to Raydium.
- Distinguish purchased tokens from claimable and unlocked tokens.
- Distinguish protocol-enforced behavior from frontend behavior and operational policies.

## Writing standards

- Use clear, accurate, professional language.
- Use sentence case for headings.
- Preserve existing terminology and page organization.
- Use code formatting for file paths, instructions, program identifiers, and field names.
- Avoid unnecessary repetition between documentation pages.
- Do not introduce unsupported security guarantees, audit claims, or decentralization claims.

## Content maintenance

- Preserve existing finalized documentation unless changes are explicitly requested.
- Do not change existing URLs or navigation paths unnecessarily.
- Keep internal links consistent with `docs.json`.
- Verify technical claims against the current production program and configuration.
- Clearly distinguish currently implemented functionality from future plans.
- Do not publish private keys, internal credentials, unpublished administrative procedures, or sensitive infrastructure details.

## Documentation validation

Run the following commands when appropriate:

```bash
mint dev
mint broken-links
```

## Content boundaries

- Do not provide investment advice or predict token prices.
- Do not imply that token sales or migrations are risk-free.
- Do not describe the on-chain program as immutable while it remains upgradeable.
- Do not claim independent audits or multisignature governance unless they have actually been implemented.
- Keep legal documentation separate from technical and user-facing guides.
