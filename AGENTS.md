# RugFreePump Documentation — Agent Instructions

## About This Repository

This repository contains the official public documentation for RugFreePump, a Solana-native, high-conviction crowdfunded token launch platform.

RugFreePump uses a bonding-curve fundraising model that separates the active fundraising phase from unrestricted public trading. Successful sales proceed to liquidity migration on Raydium CPMM, where the protocol burns the resulting LP tokens.

The platform supports two token sale models:

- **Token Unlocked (TU):** Purchased tokens become fully claimable after successful liquidity migration.
- **Token Locked (TL):** Purchased tokens become claimable gradually according to the unlock schedule recorded when the sale was created.

The documentation is built with Mintlify.

- Documentation pages use MDX with YAML frontmatter.
- Site navigation and configuration are maintained in `docs.json`.
- Public Anchor IDL and TypeScript type definitions are maintained in `idl-and-types/`.
- The official platform domain is `https://rugfreepump.com`.

This repository contains public documentation and integration artifacts. It does not contain RugFreePump's unpublished proprietary on-chain or off-chain source code.

## Sources of Truth

When maintaining the documentation, prioritize:

1. The current deployed RugFreePump on-chain program and its verified configuration.
2. The current published Anchor IDL and generated TypeScript types.
3. The current platform implementation, when verified by the project maintainer.
4. The existing finalized documentation.
5. The current `docs.json` for navigation and page paths.

Do not assume that historical documentation, previous deployment addresses, outdated configuration values, or old navigation links are still correct.

Do not invent implementation details or silently replace documented behavior with assumptions.

When authoritative sources conflict, identify the discrepancy and request clarification before making substantive changes.

## Documentation Structure

The documentation is organized into these sections:

- **Welcome:** Introduction to RugFreePump.
- **Overview:** Fundraising model, token sale models, and protocol fees.
- **User Guides:** Wallet setup, safety, consent, sale creation, purchasing, claiming, withdrawing, and liquidity migration.
- **Reward Program:** Buyer and creator rewards, qualification, rankings, and distribution.
- **On-Chain Program:** Publicly documented program behavior and proof of execution.
- **Security & Risks:** Security information, protocol risks, and vulnerability reporting.
- **Developer Guide:** On-chain integration, instructions, Anchor IDL, TypeScript types, and developer limitations.
- **Legal & Compliance:** Terms of Service, Privacy Policy, Risk Disclosure, Copyright Policy, and Trademark Guidelines.
- **Announcements:** Platform announcements.

Preserve this structure unless changes are explicitly requested.

## Canonical Terminology

Use these terms consistently:

- **RugFreePump:** Official platform name.
- **Bonding-curve sale:** The structured initial token fundraising process.
- **Creator:** A participant who creates a token sale.
- **Buyer / Contributor:** A participant who purchases tokens during fundraising.
- **Token Unlocked (TU):** The sale model allowing the full purchased allocation to become claimable after successful liquidity migration.
- **Token Locked (TL):** The sale model using a predefined gradual unlock schedule.
- **Purchased token allocation:** Tokens purchased and recorded for a buyer before claiming.
- **Claimable tokens:** Purchased tokens currently eligible to be claimed.
- **Claimed tokens:** Tokens transferred to a buyer through a successful claim.
- **Liquidity migration:** The transition from completed fundraising to Raydium CPMM liquidity.
- **LP tokens:** Liquidity provider tokens generated during pool creation.
- **PDA:** Program Derived Address on Solana.

Do not confuse purchased allocations with tokens already held in a buyer's wallet.

Do not describe token unlocking as an automatic wallet transfer. Claiming requires an eligible buyer to initiate the appropriate transaction.

## Protocol Behavior

### Fundraising

- RugFreePump does not provide a standard bonding-curve sell-back operation during active fundraising.
- Buyers contribute SOL to purchase token allocations.
- Purchased tokens are not immediately transferred to buyers' wallets.
- Reaching the fundraising threshold and successfully migrating liquidity are separate events.
- A completed sale must successfully migrate liquidity before purchased tokens become claimable.
- Expired sales may become eligible for withdrawals under the protocol's rules.
- Completed sales canceled through the authorized emergency procedure may also become eligible for withdrawals.

Do not describe eligible withdrawals as ordinary active-sale selling.

### Token Sale Models

Creators select either TU or TL when creating a sale.

The selected model cannot be changed after creation.

The documented current TL configuration for newly created sales is:

- Unlock percentage: 10% per interval.
- Unlock interval: 30 minutes.
- Unlock schedule begins after successful liquidity migration.
- Full allocation becomes available after 10 intervals, or five hours.

TL unlock settings are recorded for each sale at creation.

Existing sales retain their recorded unlock conditions even if protocol administrators later change the defaults for new sales.

Do not change documented configuration values without verifying the current authoritative program configuration.

### Liquidity Migration

- Completed sales may proceed to Raydium CPMM liquidity migration.
- The protocol burns the LP tokens generated through successful migration.
- LP-token burning does not guarantee market liquidity, token price stability, future demand, or protection against loss.

### Program Authority

RugFreePump's Solana program enforces protocol rules and state transitions.

The program remains upgradeable and subject to administrative authorities.

Do not describe the protocol as immutable, fully decentralized, independently governed, or protected by active multisignature controls unless those claims have been verified against the current deployment.

Distinguish protocol-enforced behavior from platform-level policies and administrator-controlled operations.

## Developer Integration Standards

The public Developer Guide supports independent applications that interact with the RugFreePump on-chain program.

Public integration information may include:

- Program IDs and deployment information.
- Anchor IDL and generated TypeScript types.
- Instruction definitions and arguments.
- Account structures and constraints.
- PDA derivations.
- Events and error definitions.
- Integration examples.
- Solana transaction construction guidance.

All integration examples must match the current published interface and intended deployment.

### Anchor IDL and TypeScript Types

The `idl-and-types/` directory contains public interface artifacts intended for developer reuse.

Treat generated interface artifacts as authoritative outputs of the corresponding program build, not as narrative documentation to edit freely.

Do not manually change instruction discriminators, account discriminators, account layouts, field names, argument types, enum variants, events, or error definitions without an authoritative interface update.

When the program interface changes:

1. Obtain the updated authoritative IDL.
2. Generate the corresponding TypeScript types.
3. Verify that both artifacts describe the same interface.
4. Review affected developer documentation.
5. Update examples and references where necessary.
6. Verify deployment compatibility before publication.

Do not claim that separate deployments use identical interfaces unless verified.

### Code Examples

- Use accurate Solana and Anchor terminology.
- Preserve integer precision for lamports, token base units, basis points, and other scaled values.
- Avoid unsafe floating-point arithmetic for precision-sensitive blockchain calculations.
- Use the correct instruction arguments, accounts, signers, and PDA seeds.
- Distinguish complete runnable examples from illustrative pseudocode.
- Do not invent instructions, fields, SDK functions, or program addresses.
- Do not embed private keys, wallet recovery phrases, credentials, or internal service secrets.

Do not publish proprietary implementation source code merely to explain an integration.

## Public and Proprietary Boundaries

RugFreePump intentionally publishes documentation and developer integration artifacts for public reuse.

The public documentation repository is licensed under MIT, subject to applicable third-party notices and trademark rights.

Unpublished proprietary implementation source code is not part of that license.

Do not disclose private source code from:

- The Solana on-chain program.
- Frontend and administrative applications.
- Backend services.
- Indexers and workers.
- Internal APIs and operational services.
- Deployment and infrastructure systems.
- Internal administration and recovery tools.

Do not publish credentials, private keys, sensitive infrastructure details, or privileged operational procedures.

Public interface information is permitted when intentionally approved for publication.

## Security and Risk Accuracy

RugFreePump is designed to reduce certain risks associated with unrestricted bonding-curve selling, but it does not eliminate all technical, financial, or operational risks.

Do not claim or imply:

- Guaranteed project success.
- Guaranteed token prices, profits, or returns.
- Guaranteed liquidity or market demand.
- Complete protection against scams or malicious creators.
- Immunity from smart-contract vulnerabilities.
- Independent audits that have not occurred.
- Immutable program code while upgrade authority remains active.
- Multisignature governance before it has been implemented.

Preserve distinctions between protocol-enforced protections, platform-level safeguards, third-party dependencies, and participant responsibilities.

Potential vulnerabilities should be handled through the published security disclosure process.

Do not publicly disclose confidential vulnerability details without authorization.

## Legal and Compliance Documentation

The platform's wallet-based consent process covers three required documents:

- Terms of Service.
- Privacy Policy.
- Risk Disclosure.

The repository also contains separate Copyright Policy and Trademark Guidelines.

Maintain the boundaries between these documents.

Do not:

- Change legal obligations or liability provisions as an incidental editorial improvement.
- Introduce an unsupported governing jurisdiction.
- Change legal contact information without verification.
- Change document versions or publication dates without authorization.
- Suggest that database-level content moderation can erase immutable blockchain records.
- Merge independent legal policies without explicit approval.

Changes to consent-controlled documents must follow the platform's legal-document versioning process.

Substantive legal changes should receive appropriate review before publication.

## Writing and Editorial Standards

- Use clear, professional, accurate English.
- Prefer active voice and direct explanations.
- Use sentence case for headings.
- Preserve established terminology.
- Use **bold** for interface labels and important concepts.
- Use inline code formatting for commands, paths, program identifiers, and field names.
- Keep examples, tables, and calculations consistent with current protocol behavior.
- Avoid unsupported promotional, security, or financial claims.
- Explain limitations when they materially affect user understanding.

Preserve the intended audience, explanatory flow, paragraph structure, tone, and level of detail of existing documentation.

Do not unnecessarily shorten, rewrite, or reorganize finalized pages.

## Content Organization and Cross-References

Prefer a clear primary location for each topic:

- Fundraising concepts and token sale models belong in Overview.
- Step-by-step platform operations belong in User Guides.
- Reward qualification and distribution belong in Reward Program.
- Program execution belongs in On-Chain Program.
- Public integration interfaces belong in Developer Guide.
- Security limitations belong in Security & Risks.
- Legal rights and obligations belong in Legal & Compliance.

Other pages may provide relevant summaries and link to the primary explanation.

Do not remove useful context solely to eliminate repetition.

## Navigation and Links

`docs.json` is the source of truth for the current documentation navigation.

Before changing page paths:

1. Check the current navigation configuration.
2. Confirm the target MDX file exists.
3. Search for references to the old path.
4. Update affected internal links.
5. Preserve existing public URLs where practical.
6. Add redirects when appropriate and supported.

Use root-relative paths for internal documentation links.

Use `https://rugfreepump.com` for official platform references.

Do not invent production URLs or replace unconfirmed placeholders with guessed destinations.

## Change Management

For documentation changes:

1. Identify the exact requested change.
2. Read the affected page and relevant related pages.
3. Preserve unrelated content.
4. Apply only necessary changes.
5. Check terminology and cross-references.
6. Validate formatting, links, and navigation.
7. Report unresolved uncertainty.

For changes affecting protocol parameters, developer interfaces, security disclosures, or legal content, verify the authoritative source before publication.

## Local Validation

From the repository root, run:

```bash
mint dev
```

Check documentation links:

```bash
mint broken-links
```

Also verify that:

- `docs.json` is valid JSON.
- Navigation entries reference existing pages.
- Referenced local assets exist.
- Public integration artifacts are present.
- No obsolete starter content remains in published pages.
- No private or sensitive files have been added.

## Final Principle

RugFreePump documentation must accurately describe the public platform and its on-chain interface while keeping unpublished proprietary implementation details private.

Preserve technical correctness, transparent risk disclosures, consistent terminology, and the existing finalized documentation.
