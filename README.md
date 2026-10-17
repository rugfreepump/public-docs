# RugFreePump Documentation

Official public documentation for [RugFreePump](https://rugfreepump.com), a Solana-native, high-conviction crowdfunded token launch platform.

RugFreePump provides a structured bonding-curve fundraising environment in which creators and contributors work toward a defined fundraising threshold.

During the active fundraising phase, RugFreePump does not provide a standard bonding-curve sell-back operation. This separates the fundraising process from unrestricted public token trading.

When a sale successfully reaches its threshold, it can proceed to liquidity migration on Raydium CPMM. The LP tokens generated during migration are burned by the protocol.

When a sale expires without reaching its threshold, contributors may withdraw eligible SOL contributions under the protocol's withdrawal rules.

RugFreePump supports two token sale models:

- **Token Unlocked (TU):** Buyers can claim their entire purchased token allocation after successful liquidity migration.
- **Token Locked (TL):** Buyers can claim purchased tokens gradually according to the unlock schedule recorded when the sale was created.

The platform also provides project discovery, profiles, statistics, analytics, real-time information, developer integration resources, and an ecosystem reward program.

## Official Links

- **Website:** [rugfreepump.com](https://rugfreepump.com)
- **Documentation:** [rugfreepump.com/docs](https://docs.rugfreepump.com)
- **Public Documentation Repository:** [github.com/rugfreepump/public-docs](https://github.com/rugfreepump/public-docs)

## Documentation Navigation

The documentation is organized into nine sections.

### Welcome

- [Welcome](https://rugfreepump.com/docs)

### Overview

- [Overview](https://rugfreepump.com/docs/overview/overview)
- [Token Sale Models](https://rugfreepump.com/docs/overview/token-sale-models)
- [Protocol Fees](https://rugfreepump.com/docs/overview/protocol-fees)

### User Guides

General guides:

- [Getting Started](https://rugfreepump.com/docs/user-guides/getting-started)
- [Trust & Safety](https://rugfreepump.com/docs/user-guides/trust-and-safety)
- [RugFreePump Consent](https://rugfreepump.com/docs/user-guides/rugfreepump-consent)

For token creators:

- [Creating a Bonding Curve Sale](https://rugfreepump.com/docs/user-guides/for-token-creators/creating-a-bonding-curve-sale)
- [Migrating Raised Liquidity](https://rugfreepump.com/docs/user-guides/for-token-creators/migrating-raised-liquidity)

For token buyers:

- [Buying Bonding Curve Sale Tokens](https://rugfreepump.com/docs/user-guides/for-token-buyers/buying-bonding-curve-sale-tokens)
- [Claiming Purchased Tokens](https://rugfreepump.com/docs/user-guides/for-token-buyers/claiming-purchased-tokens)
- [Withdrawing Contributed SOL](https://rugfreepump.com/docs/user-guides/for-token-buyers/withdrawing-contributed-sol)

Additional guide:

- [Frequently Asked Questions](https://rugfreepump.com/docs/user-guides/faq)

### Reward Program

- [Reward Program](https://rugfreepump.com/docs/reward-program/reward-program)

### On-Chain Program

- [Proof of Execution](https://rugfreepump.com/docs/on-chain-program/proof-of-execution)

### Security & Risks

- [Security](https://rugfreepump.com/docs/security-and-risk/security)
- [Risks](https://rugfreepump.com/docs/security-and-risk/risks)
- [Security Disclosure](https://rugfreepump.com/docs/security-and-risk/security-disclosure)

### Developer Guide

- [Building on RugFreePump](https://rugfreepump.com/docs/developer-guide/building-on-rugfreepump)
- [On-Chain Integration — Buy](https://rugfreepump.com/docs/developer-guide/on-chain-integration/buy)
- [Anchor IDL & Types](https://rugfreepump.com/docs/developer-guide/anchor-idl-and-types)
- [Developer Limitations](https://rugfreepump.com/docs/developer-guide/developer-limitations)

### Legal & Compliance

- [Terms of Service](https://rugfreepump.com/docs/legal-and-compliance/terms-of-service)
- [Privacy Policy](https://rugfreepump.com/docs/legal-and-compliance/privacy-policy)
- [Risk Disclosure](https://rugfreepump.com/docs/legal-and-compliance/risk-disclosure)
- [Copyright Policy](https://rugfreepump.com/docs/legal-and-compliance/copyright-policy)
- [Trademark Guidelines](https://rugfreepump.com/docs/legal-and-compliance/trademark-guidelines)

### Announcements

- [Announcements](https://rugfreepump.com/docs/announcements/announcements)

These paths follow the repository's supplied `docs.json` navigation configuration.

## Developer Integration

RugFreePump's on-chain program provides a public Solana interface that developers can integrate with independently.

The documentation provides information about the program's public instructions, accounts, interface types, and integration limitations.

Developers can use the published Anchor IDL and generated TypeScript types to construct compatible integrations.

### Public Interface Artifacts

| Artifact | Source |
| --- | --- |
| Anchor IDL | [rug_free_pump.json](https://github.com/rugfreepump/public-docs/blob/main/idl-and-types/rug_free_pump.json) |
| TypeScript Types | [rug_free_pump.ts](https://github.com/rugfreepump/public-docs/blob/main/idl-and-types/rug_free_pump.ts) |

The files are maintained in the repository's `idl-and-types/` directory.

Developers should verify that the published interface artifacts are compatible with the intended program deployment.

For implementation guidance, see:

- [Building on RugFreePump](https://rugfreepump.com/docs/developer-guide/building-on-rugfreepump)
- [On-Chain Integration — Buy](https://rugfreepump.com/docs/developer-guide/on-chain-integration/buy)
- [Anchor IDL & Types](https://rugfreepump.com/docs/developer-guide/anchor-idl-and-types)
- [Developer Limitations](https://rugfreepump.com/docs/developer-guide/developer-limitations)

### Public Interface vs. Proprietary Implementation

The public documentation and interface artifacts are intentionally published for developer use.

RugFreePump's unpublished on-chain and off-chain implementation source code remains proprietary.

This repository does not provide the source code for:

- The RugFreePump Solana program.
- Frontend applications.
- Backend services.
- Indexers and workers.
- Administrative systems.
- Infrastructure implementations.

Publication of an interface definition does not mean the underlying implementation source code has been published or licensed under MIT.

## Repository Structure

The public documentation repository is organized as follows:

```text
public-docs/
├── announcements/
├── developer-guide/
├── idl-and-types/
├── legal-and-compliance/
├── logo/
├── on-chain-program/
├── overview/
├── reward-program/
├── security-and-risk/
├── user-guides/
├── .mintignore
├── AGENTS.md
├── LICENSE
├── README.md
├── docs.json
├── favicon.svg
└── index.mdx
```

### Main Files

| File | Purpose |
| --- | --- |
| `docs.json` | Mintlify site configuration, navigation, branding, and links |
| `index.mdx` | Documentation welcome page |
| `AGENTS.md` | Instructions for documentation maintenance and AI agents |
| `LICENSE` | MIT License for applicable public repository materials |
| `README.md` | Repository overview and development instructions |
| `.mintignore` | Files and directories excluded from Mintlify processing |

### Public Interface Files

The `idl-and-types/` directory contains the published Anchor IDL and generated TypeScript types used by developers.

These artifacts are public integration resources, not the source code of the proprietary RugFreePump on-chain implementation.

## Local Development

This documentation is built with [Mintlify](https://mintlify.com).

### Requirements

- Node.js
- npm
- Mintlify CLI

### Install the Mintlify CLI

```bash
npm install -g mint
```

### Run the Documentation Locally

From the repository root, where `docs.json` is located:

```bash
mint dev
```

Open the local address displayed by the CLI.

### Validate the Documentation

Run:

```bash
mint validate
```

### Check for Broken Links

Run:

```bash
mint broken-links
```

These commands help identify documentation configuration problems, invalid pages, and broken internal links.

## Documentation Maintenance

The documentation is maintained as the public reference for RugFreePump users, token creators, contributors, and developers.

Updates should:

- Reflect verified protocol and platform behavior.
- Preserve the established documentation structure.
- Use consistent TU and TL terminology.
- Keep developer artifacts aligned with the published program interface.
- Keep navigation paths synchronized with `docs.json`.
- Preserve accurate security and risk disclosures.
- Avoid changing legal-document versions without authorization.
- Avoid publishing private implementation details or sensitive information.
- Preserve finalized documentation content unless changes are necessary and authorized.

For detailed maintenance rules, see [AGENTS.md](./AGENTS.md).

## Security and Risk

RugFreePump's on-chain program enforces defined protocol rules, but it does not guarantee the success, legitimacy, market performance, or safety of projects launched through the platform.

The program is upgradeable and subject to administrative controls.

Users and developers should understand the associated technical, operational, wallet, liquidity, and market risks.

Relevant documentation:

- [Security](https://rugfreepump.com/docs/security-and-risk/security)
- [Risks](https://rugfreepump.com/docs/security-and-risk/risks)
- [Security Disclosure](https://rugfreepump.com/docs/security-and-risk/security-disclosure)
- [Risk Disclosure](https://rugfreepump.com/docs/legal-and-compliance/risk-disclosure)

Security vulnerabilities should be reported through the process described in the Security Disclosure documentation rather than disclosed through public issues containing sensitive exploit information.

## Legal and Compliance

The platform maintains separate legal and compliance documents governing platform use, privacy, risks, intellectual property, and branding.

The three documents associated with RugFreePump's wallet-based consent process are:

- [Terms of Service](https://rugfreepump.com/docs/legal-and-compliance/terms-of-service)
- [Privacy Policy](https://rugfreepump.com/docs/legal-and-compliance/privacy-policy)
- [Risk Disclosure](https://rugfreepump.com/docs/legal-and-compliance/risk-disclosure)

Additional policies:

- [Copyright Policy](https://rugfreepump.com/docs/legal-and-compliance/copyright-policy)
- [Trademark Guidelines](https://rugfreepump.com/docs/legal-and-compliance/trademark-guidelines)

For legal inquiries, contact:

legal@rugfreepump.com

## License

This public repository is distributed under the [MIT License](./LICENSE) for materials RugFreePump owns or is authorized to license.

This includes the intentionally published:

- Documentation content.
- Anchor IDL.
- Generated TypeScript types.
- Developer integration examples.
- Other applicable public repository materials.

Developers may copy, modify, distribute, and reuse these materials according to the applicable license terms.

The license does not extend to RugFreePump's unpublished proprietary on-chain or off-chain source code.

Third-party materials remain subject to their respective licenses and notices.

The RugFreePump name, logos, and other brand identifiers remain subject to applicable trademark rights and the published [Trademark Guidelines](https://rugfreepump.com/docs/legal-and-compliance/trademark-guidelines).

## Contact

**Official Website:** https://rugfreepump.com

**Documentation:** https://rugfreepump.com/docs

**Legal Contact:** legal@rugfreepump.com

For security reports, follow the official [Security Disclosure](https://rugfreepump.com/docs/security-and-risk/security-disclosure) process.

For general support, use the official support channels linked from the RugFreePump website.
