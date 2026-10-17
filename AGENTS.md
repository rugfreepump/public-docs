# RugFreePump Documentation — Agent Instructions

## Project Overview

This repository contains the official public documentation for RugFreePump, a Solana-native, high-conviction crowdfunded token launch platform.

RugFreePump uses a bonding-curve fundraising model that separates active fundraising from unrestricted public token trading. During the active fundraising phase, the protocol does not provide a standard bonding-curve sell-back operation.

When a sale reaches its fundraising threshold, it becomes eligible for liquidity migration to Raydium CPMM. The resulting liquidity provider (LP) tokens are burned by the protocol.

If a sale expires without reaching its threshold, contributors may withdraw eligible SOL contributions according to the protocol's withdrawal rules. Eligible withdrawals are also supported following an authorized emergency cancellation of a completed sale.

RugFreePump supports two token sale models:

- **Token Unlocked (TU):** Buyers can claim their full purchased token allocation after successful liquidity migration.
- **Token Locked (TL):** Buyers can claim purchased tokens progressively according to the unlock schedule recorded when the sale was created.

The platform also provides project discovery, user profiles, statistics, analytics, real-time information, developer integrations, and an ecosystem reward program.

## Repository Scope

This is a public Mintlify documentation repository.

It contains:

- MDX documentation pages.
- The Mintlify `docs.json` configuration.
- Public Anchor IDL files.
- Generated TypeScript interface types.
- Developer integration examples.
- Public documentation assets.
- Repository maintenance instructions.

It does not contain the unpublished proprietary source code for RugFreePump's on-chain program, frontend, backend, indexers, workers, administrative systems, or infrastructure.

Do not introduce private source code, credentials, secrets, or sensitive operational information into this repository.

## Official References

- Platform: https://rugfreepump.com
- Documentation: https://docs.rugfreepump.com
- Public documentation repository: https://github.com/rugfreepump/public-docs
- Legal contact: legal@rugfreepump.com

The current `docs.json` is authoritative for documentation navigation.

Do not invent deployment URLs, support destinations, social accounts, program addresses, or other official references.

## Documentation Technology

The documentation uses Mintlify.

- Site configuration: `docs.json`
- Page format: MDX
- Frontmatter: YAML
- Public interface artifacts: `idl-and-types/`
- Branding assets: `logo/` and `favicon.svg`

Documentation pages should have appropriate `title` and `description` frontmatter.

Use Mintlify-supported MDX components and syntax.

Keep page paths, navigation entries, and internal links synchronized.

## Navigation Structure

The documentation navigation is organized into nine tabs.

### Welcome

- `index`

### Overview

- `overview/overview`
- `overview/token-sale-models`
- `overview/protocol-fees`

### User Guides

- `user-guides/getting-started`
- `user-guides/trust-and-safety`
- `user-guides/rugfreepump-consent`

For Token Creators:

- `user-guides/for-token-creators/creating-a-bonding-curve-sale`
- `user-guides/for-token-creators/migrating-raised-liquidity`

For Token Buyers:

- `user-guides/for-token-buyers/buying-bonding-curve-sale-tokens`
- `user-guides/for-token-buyers/claiming-purchased-tokens`
- `user-guides/for-token-buyers/withdrawing-contributed-sol`

Additional page:

- `user-guides/faq`

### Reward Program

- `reward-program/reward-program`

### On-Chain Program

- `on-chain-program/proof-of-execution`

### Security & Risks

- `security-and-risk/security`
- `security-and-risk/risks`
- `security-and-risk/security-disclosure`

### Developer Guide

- `developer-guide/building-on-rugfreepump`
- `developer-guide/on-chain-integration/buy`
- `developer-guide/anchor-idl-and-types`
- `developer-guide/developer-limitations`

### Legal & Compliance

- `legal-and-compliance/terms-of-service`
- `legal-and-compliance/privacy-policy`
- `legal-and-compliance/risk-disclosure`
- `legal-and-compliance/copyright-policy`
- `legal-and-compliance/trademark-guidelines`

### Announcements

- `announcements/announcements`

These paths reflect the supplied `docs.json`. Always verify against the current configuration before modifying navigation.

Do not restore removed starter pages or introduce unrelated documentation sections.

## Source of Truth

Use the following sources when reviewing technical documentation:

1. The current deployed on-chain program and verified on-chain state.
2. The authoritative Anchor IDL and generated TypeScript types.
3. The current platform implementation and configuration, when verified.
4. Existing approved RugFreePump documentation.
5. The current `docs.json` for navigation and page paths.

If published documentation conflicts with verified implementation behavior, identify the discrepancy before changing content.

Never invent protocol functionality, security guarantees, fees, program addresses, or operational procedures.

## Canonical Terminology

Use these terms consistently:

- **RugFreePump:** Official platform name.
- **Bonding-curve sale:** The initial structured fundraising process.
- **Creator:** The participant who creates a token sale.
- **Buyer / Contributor:** A participant who purchases tokens through the bonding curve.
- **Token Unlocked (TU):** The model allowing full token claiming after successful migration.
- **Token Locked (TL):** The model allowing gradual token claiming after migration.
- **Purchased token allocation:** Tokens purchased but not necessarily transferred to the buyer.
- **Claimable tokens:** Purchased tokens currently eligible for claiming.
- **Claimed tokens:** Tokens received through a completed claim.
- **Liquidity migration:** The process of establishing liquidity on Raydium CPMM.
- **Raydium CPMM:** The liquidity destination used by the protocol.
- **LP tokens:** Liquidity provider tokens generated during pool creation.
- **PDA:** Program Derived Address.

Do not confuse token purchasing, token unlocking, token claiming, and token trading.

## Fundraising and Sale States

Preserve these protocol distinctions:

- Buyers purchase token allocations during an active sale.
- There is no standard bonding-curve sell-back operation during active fundraising.
- Sale completion and successful liquidity migration are separate events.
- Purchased tokens do not become claimable merely because the fundraising threshold was reached.
- Expired sales and authorized emergency-canceled completed sales may support eligible withdrawals.
- Withdrawals are not equivalent to unrestricted bonding-curve selling.
- The selected sale model cannot be changed after sale creation.

Do not imply that successful fundraising guarantees successful migration, future market liquidity, token price, or project outcome.

## Token Claiming Rules

Both TU and TL require successful liquidity migration before purchased tokens can be claimed.

For TU sales:

- The full purchased allocation becomes claimable after successful migration.
- Buyers must initiate a claiming transaction.

For TL sales:

- Unlock settings are recorded when the sale is created.
- The unlock schedule starts after successful liquidity migration.
- The currently documented configuration unlocks 10% every 30 minutes.
- The full allocation becomes available after five hours.
- Buyers may claim available tokens periodically or wait.
- Previously unclaimed unlocked tokens remain eligible for later claiming.
- Unlocking does not automatically transfer tokens to a wallet.

Existing TL sales retain their recorded unlock settings even if administrators update defaults for future sales.

Do not change published unlock settings without verifying the authoritative configuration.

## Fees and Numerical Accuracy

Protocol fees and financial parameters must match the current verified configuration.

When documenting financial calculations:

- Distinguish SOL from lamports.
- Distinguish displayed token quantities from base units.
- Preserve integer precision where applicable.
- Identify percentages and basis points correctly.
- Avoid floating-point assumptions in examples involving on-chain accounting.
- Distinguish protocol fees from Solana network fees and third-party costs.

Do not silently change fee tables, contribution thresholds, allocation percentages, or other numerical parameters.

## On-Chain Program and Governance

RugFreePump's Solana program is upgradeable.

The current administrative and upgrade authorities are controlled by the platform's sole operator. No active multisignature governance arrangement has been implemented.

Future governance changes must not be described as existing protections before deployment and verification.

Do not claim:

- The program is immutable.
- Upgrade authority has been revoked.
- A multisignature arrangement is active.
- The protocol is independently governed.
- An independent security audit has been completed unless verified.
- Funds or token values are guaranteed.

The on-chain program governs protocol state and financial execution.

Off-chain databases, indexers, APIs, and WebSocket services provide supporting functionality but do not replace the blockchain as the source of truth for on-chain execution.

## Developer Documentation

The public developer documentation supports independent integration with the RugFreePump on-chain program.

Published resources include:

- Anchor IDL.
- Generated TypeScript types.
- Instruction and account information.
- Public program interface definitions.
- Developer integration examples.
- Documented integration limitations.

The public interface artifacts are:

- `idl-and-types/rug_free_pump.json`
- `idl-and-types/rug_free_pump.ts`

These artifacts are intentionally public and reusable under the repository's applicable license.

Do not manually alter generated discriminators, instruction arguments, account layouts, event definitions, enum variants, or field types without an authoritative program interface update.

When updating the interface:

1. Obtain the authoritative updated IDL.
2. Regenerate the TypeScript types.
3. Verify consistency between the artifacts.
4. Review affected integration examples.
5. Verify relevant deployment compatibility.
6. Update related documentation as necessary.

Do not invent program instructions, PDA seeds, account constraints, SDK methods, or transaction parameters.

## Public and Proprietary Boundaries

The repository is publicly accessible and MIT-licensed for RugFreePump-owned published materials.

Developers may reuse the published documentation, Anchor IDL, TypeScript types, and integration examples under the applicable license.

This does not mean RugFreePump's private implementation repositories are open source.

Do not publish:

- Private Rust program source code.
- Private frontend or backend source code.
- Internal administrative service code.
- Private worker and indexer implementations.
- Infrastructure credentials.
- Private keys or recovery phrases.
- Internal security procedures.
- Sensitive deployment configurations.
- Confidential vulnerability information.

Publicly documented interfaces may be described without disclosing proprietary implementations.

## Security and Risk Documentation

The name RugFreePump describes a platform design objective, not a guarantee that every token or project is free from risk.

Preserve accurate disclosure of:

- Creator and project risk.
- Market and token price risk.
- Smart-contract and upgradeability risk.
- Wallet and transaction risk.
- Liquidity and migration risk.
- Third-party infrastructure dependencies.
- Administrative authority limitations.

Do not overstate the protections provided by the bonding-curve fundraising model or LP-token burning.

Security reports should follow the process described at:

https://docs.rugfreepump.com/security-and-risk/security-disclosure

Do not publicly disclose confidential vulnerability information without authorization.

## Legal and Compliance Documentation

The platform's three wallet-consent documents are:

- Terms of Service.
- Privacy Policy.
- Risk Disclosure.

Other published policies include:

- Copyright Policy.
- Trademark Guidelines.

Preserve the separation between these documents.

Do not modify legal rights, obligations, liability provisions, eligibility conditions, document versions, or publication dates without explicit authorization.

Do not invent a governing jurisdiction.

Do not describe platform-level content moderation as the ability to delete immutable blockchain records or independently hosted content.

The platform's moderation capabilities are limited to the systems and data it controls.

Changes to consent-controlled legal documents must follow the established document-versioning and consent process.

## Editorial Standards

- Write clear, accurate, professional English.
- Preserve the existing document's tone and explanatory structure.
- Prefer direct explanations over promotional language.
- Use consistent technical terminology.
- Preserve meaningful warnings, qualifications, and examples.
- Avoid unnecessary duplication across documentation sections.
- Do not shorten finalized content without a specific reason.
- Do not introduce unsupported claims.
- Use tables where they improve technical clarity.
- Use code formatting for identifiers, file paths, commands, and field names.
- Preserve Mintlify-compatible MDX formatting.

When making a targeted change, avoid unrelated rewrites.

## Internal Links

Use root-relative paths for links between documentation pages.

Examples:

- `/overview/overview`
- `/overview/token-sale-models`
- `/user-guides/getting-started`
- `/user-guides/for-token-buyers/claiming-purchased-tokens`
- `/developer-guide/anchor-idl-and-types`
- `/security-and-risk/security-disclosure`
- `/legal-and-compliance/terms-of-service`

The documentation is hosted at `https://docs.rugfreepump.com`, so a root-relative documentation link resolves against that subdomain.

Do not use `https://rugfreepump.com/docs` for documentation links.

Do not include `.mdx` extensions in published documentation URLs.

When moving or renaming a page, check affected links and consider redirects for previously published URLs.

## Documentation Changes

Before editing:

1. Read the affected page.
2. Review the relevant `docs.json` navigation entry.
3. Inspect related documentation where necessary.
4. Confirm the requested scope.
5. Verify any technical facts being changed.

After editing:

1. Check MDX syntax and frontmatter.
2. Confirm navigation references.
3. Check internal links.
4. Check local assets.
5. Verify technical consistency.
6. Ensure no sensitive information was introduced.
7. Report any unresolved uncertainty.

## Local Development and Validation

Install the Mintlify CLI:

```bash
npm install -g mint
```

Start the local documentation preview:

```bash
mint dev
```

Validate the documentation:

```bash
mint validate
```

Check internal links:

```bash
mint broken-links
```

Run these commands from the repository root containing `docs.json`. Confirm command availability against the installed Mintlify CLI version.

## Final Principle

Maintain RugFreePump's documentation as an accurate, consistent, transparent public reference.

Support independent developer integrations through published interfaces while protecting unpublished proprietary implementation code.

Preserve the established documentation unless a change is explicitly requested or supported by verified evidence.
