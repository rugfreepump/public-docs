# RugFreePump Documentation — Agent Instructions

## About This Repository

This repository contains the official public documentation for RugFreePump, a Solana-native, high-conviction crowdfunded token launch platform.

RugFreePump uses a bonding-curve fundraising mechanism that separates the active fundraising phase from unrestricted public token trading. Successful sales proceed to liquidity migration on Raydium CPMM, where the resulting LP tokens are burned.

The platform supports two token sale models:

- **Token Unlocked (TU):** Purchased tokens become fully claimable after successful liquidity migration.
- **Token Locked (TL):** Purchased tokens become claimable gradually according to the unlock schedule recorded when the sale was created.

This repository is built with Mintlify.

- Documentation pages use MDX with YAML frontmatter.
- Site configuration and navigation are maintained in `docs.json`.
- Public Anchor IDL and generated TypeScript types are maintained in `idl-and-types/`.
- The official platform domain is `https://rugfreepump.com`.

The repository contains public documentation and integration artifacts. It is not the source repository for RugFreePump's proprietary on-chain or off-chain implementation.

## Source of Truth

Use the following sources when maintaining documentation:

1. The current deployed RugFreePump on-chain program and its verified state.
2. The current published Anchor IDL and generated TypeScript types.
3. The current platform implementation and configuration, when verified by the project maintainer.
4. The existing finalized documentation.
5. The current `docs.json` for navigation and page paths.

Do not assume that historical documentation, old links, previous deployment addresses, or outdated configuration values are still correct.

Do not invent missing implementation details.

If a requested change depends on information that cannot be verified, identify the uncertainty instead of silently introducing an assumption.

## Documentation Structure

The documentation is organized into the following sections:

- **Welcome:** Platform introduction.
- **Overview:** Fundraising model, token sale models, and protocol fees.
- **User Guides:** Wallet setup, safety, consent, token creation, buying, claiming, withdrawing, and liquidity migration.
- **Reward Program:** Buyer and creator rewards, qualification, rankings, and distribution.
- **On-Chain Program:** Proof of execution and publicly documented program behavior.
- **Security & Risks:** Security information, risks, and vulnerability reporting.
- **Developer Guide:** Direct on-chain integrations, instructions, IDL, types, and developer limitations.
- **Legal & Compliance:** Terms of Service, Privacy Policy, Risk Disclosure, Copyright Policy, and Trademark Guidelines.
- **Announcements:** Official platform announcements.

Preserve the established organization unless a structural change is explicitly requested.

## Canonical Terminology

Use the following terminology consistently:

- **RugFreePump:** Official platform name.
- **Bonding-curve sale:** The structured initial fundraising process.
- **Contributor / Buyer:** A participant who purchases tokens through a bonding-curve sale.
- **Creator:** A participant who creates a token sale.
- **Token Unlocked (TU):** The sale model allowing the entire purchased allocation to become claimable after successful migration.
- **Token Locked (TL):** The sale model using a predefined gradual unlock schedule.
- **Purchased token allocation:** Tokens purchased and recorded for a buyer before claiming.
- **Claimable tokens:** Purchased tokens currently eligible to be claimed.
- **Claimed tokens:** Tokens transferred to the buyer through a successful claim.
- **Liquidity migration:** The protocol operation that establishes public liquidity on Raydium CPMM.
- **Raydium CPMM:** The destination liquidity pool mechanism.
- **LP tokens:** Liquidity provider tokens generated during pool creation.
- **Program Derived Address (PDA):** A Solana program-derived account address.

Do not confuse a purchased allocation with tokens already held in the buyer's wallet.

Do not describe token unlocking as an automatic transfer to the buyer. Eligible buyers must initiate the applicable claiming transaction.

## Protocol Behavior

The documentation must preserve the following distinctions.

### Fundraising

- RugFreePump does not provide a standard bonding-curve sell-back operation during active fundraising.
- Buyers contribute SOL to purchase token allocations.
- Purchased allocations remain subject to the protocol's custody and claiming rules.
- A completed sale must successfully migrate liquidity before purchased tokens become claimable.
- A sale that expires without reaching its threshold can become eligible for withdrawals.
- A finalized sale canceled through the authorized emergency procedure can also become eligible for withdrawals.

Do not describe withdrawals as ordinary active-sale selling.

### Token Sale Models

The sale model is selected during creation and cannot be changed afterward.

For the documented current TL configuration:

- Unlock percentage: 10% per interval.
- Unlock interval: 30 minutes.
- Unlock schedule starts after successful liquidity migration.
- Full allocation becomes available after 10 intervals, or five hours.

These values describe the documented current configuration for newly created TL sales.

Existing TL sales retain the unlock parameters recorded at creation. Do not imply that changing protocol defaults modifies previously created sales.

Before changing these values in documentation, verify the current on-chain configuration and applicable deployment.

### Liquidity Migration

- Successful fundraising completion and successful liquidity migration are distinct states.
- Liquidity migrates to Raydium CPMM.
- LP tokens generated by the protocol's migration process are burned.
- LP-token burning does not guarantee token price stability, market demand, or protection against financial loss.

### On-Chain Authority

The on-chain program enforces protocol state transitions and transaction rules.

The program remains upgradeable and is subject to administrative authorities.

Do not describe the protocol as immutable, fully decentralized, independently governed, or protected by an active multisignature arrangement unless those statements have been verified against the current deployment.

## Developer Integration Standards

The public developer documentation supports independent integrations with the RugFreePump on-chain program.

Published integration materials may include:

- Program IDs.
- Anchor IDL files.
- Generated TypeScript types.
- Public instruction definitions.
- Instruction arguments and account layouts.
- PDA derivation information.
- Public events and errors.
- Integration examples.
- Solana transaction construction guidance.

Keep integration examples consistent with the published program interface.

### IDL and TypeScript Types

The following artifacts are intended for public developer use:

- `idl-and-types/rug_free_pump.json`
- `idl-and-types/rug_free_pump.ts`

Treat these as generated interface artifacts, not as manually maintained narrative documentation.

Do not edit generated instruction discriminators, account layouts, field names, argument types, enum variants, or event definitions without an authoritative interface update.

When the public program interface changes:

1. Obtain the updated authoritative IDL.
2. Regenerate the corresponding TypeScript types.
3. Verify that the two artifacts describe the same interface.
4. Review affected developer documentation and code examples.
5. Verify the relevant deployment addresses and compatibility information.
6. Update published interface dates or version references where applicable.

Do not claim that Devnet and Mainnet are synchronized without verifying the deployed versions.

### Code Examples

- Use accurate Solana and Anchor terminology.
- Preserve integer precision for lamports, token base units, basis points, and other scaled values.
- Avoid floating-point arithmetic where it would compromise on-chain accounting accuracy.
- Use the correct instruction arguments and account constraints.
- Distinguish required signers from other accounts.
- Do not invent SDK functions, program instructions, account fields, or PDA seeds.
- Clearly distinguish complete working examples from illustrative pseudocode.
- Never embed private keys, recovery phrases, credentials, or internal service secrets.

Do not publish unpublished program source code merely to explain an integration.

## Proprietary and Public Boundaries

RugFreePump's unpublished implementation remains proprietary.

Do not add or disclose private source code from:

- The Solana on-chain program.
- Frontend or administrative applications.
- Backend services.
- Indexers and workers.
- Internal APIs or operational services.
- Deployment and infrastructure systems.
- Internal administration and recovery tools.

Public interface information and intentionally published integration artifacts are permitted.

Do not publish secrets, privileged credentials, private operational instructions, or sensitive infrastructure details.

The public documentation repository is licensed separately from RugFreePump's unpublished proprietary implementations.

## Security and Risk Accuracy

RugFreePump's design aims to reduce certain risks associated with unrestricted bonding-curve selling, but does not eliminate all risks.

Do not claim or imply:

- Guaranteed project success.
- Guaranteed token value or returns.
- Guaranteed liquidity or market demand.
- Complete protection against scams or malicious creators.
- Immunity from smart-contract vulnerabilities.
- An independent audit that has not occurred.
- Immutable program code while upgrade authority remains active.
- Multisignature governance before it has actually been implemented.

Preserve clear distinctions between protocol-enforced protections, platform-level safeguards, third-party dependencies, and risks users must evaluate themselves.

Security vulnerabilities should be reported privately through the published security disclosure process.

Do not add exploit details or confidential vulnerability reports to public documentation without explicit authorization.

## Legal and Compliance Documentation

The legal documentation is maintained separately from the technical and user-facing guides.

The principal wallet-consent documents are:

- Terms of Service.
- Privacy Policy.
- Risk Disclosure.

The repository also contains separate Copyright Policy and Trademark Guidelines.

Preserve the distinction between these documents.

Do not:

- Change legal obligations or liability provisions as an incidental editorial improvement.
- Invent a governing jurisdiction.
- Alter legal contact information without verification.
- Change document versions or publication dates without authorization.
- Present copyright or trademark moderation as control over immutable on-chain records.
- Merge independent policies into one document without explicit approval.

Changes to consent-controlled documents must follow the platform's legal-document versioning process.

Legal wording that affects rights, obligations, liability, or regulatory treatment should receive appropriate review before publication.

## Writing and Editorial Standards

- Use clear, professional, accurate English.
- Prefer active voice and direct explanations.
- Use sentence case for headings.
- Use consistent terminology throughout the repository.
- Use **bold** for interface labels and important defined concepts.
- Use inline code formatting for code identifiers, paths, commands, field names, and program identifiers.
- Keep tables and examples consistent with current protocol behavior.
- Avoid unsupported promotional or security claims.
- Explain limitations where they materially affect user understanding.

Preserve the existing document's intended audience, explanatory flow, tone, and level of detail.

Do not unnecessarily shorten, rewrite, or reorganize finalized pages.

## Content Ownership and Cross-References

Prefer a single authoritative explanation for each major topic.

For example:

- Token sale models and unlock conditions belong in the Overview.
- Step-by-step user operations belong in User Guides.
- Reward qualification and distribution belong in Reward Program.
- Program interface details belong in Developer Guide.
- Security limitations belong in Security & Risks.
- Legal obligations belong in Legal & Compliance.

Other pages may summarize a topic when necessary, but should link to the primary explanation rather than duplicate entire sections.

Do not remove useful contextual explanations merely to eliminate repetition.

## Navigation and Links

`docs.json` is the source of truth for the site's current navigation.

Before changing page paths:

1. Check the current navigation configuration.
2. Confirm the target MDX file exists.
3. Search for references to the old path.
4. Update affected internal links.
5. Preserve existing public URLs where possible.
6. Add redirects when appropriate and supported.

Use root-relative paths for links between documentation pages.

Use `https://rugfreepump.com` for official platform references.

Do not introduce guessed production URLs.

Existing social-link placeholders should remain placeholders until official destinations are confirmed.

## Change Management

For ordinary documentation updates:

1. Identify the exact requested change.
2. Read the affected page and relevant related pages.
3. Preserve unrelated content.
4. Apply only the necessary changes.
5. Check terminology, cross-references, and formatting.
6. Validate links and navigation.
7. Report any unresolved uncertainty.

For changes affecting protocol parameters, developer artifacts, security claims, or legal content, verify the authoritative source before publishing.

Do not silently correct or replace technical facts based solely on assumptions.

## Local Validation

Run from the repository root:

```bash
mint dev
