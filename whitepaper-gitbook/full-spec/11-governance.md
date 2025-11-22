# Governance

## 12.1 Oureum DAO
*   **DAO Scope**:
    *   Oversees protocol parameters (block time, gas targets, compliance rule updates).
    *   Manages treasury funds (collected from gas fees and OUMG redemption fees).
    *   Approves vault custodians, oracle operators, and auditors.
*   **Proposal Lifecycle**:
    *   Proposal drafted by any OUREUM staker.
    *   Initial screening by governance council (technical + compliance check).
    *   On-chain voting by OUREUM stakers.
    *   If quorum & threshold are met, upgrade is executed via governance contracts.
*   **Voting Power**: Proportional to OUREUM tokens staked.

## 12.2 Role-Based Permissions
*   **Compliance Admins**: Maintain allow/deny lists, sanction rules, jurisdictional configs.
*   **Vault Admins**: Approve vault additions/removals, verify custodian attestations.
*   **Oracle Admins**: Manage pricing feeds (MYR/oz → per gram), set deviation guards.
*   **Technical Council**: Review & ratify code upgrades before DAO vote.

## 12.3 Emergency Powers (Fail-Safe)
*   **Time-Boxed Authority**: In cases of critical bugs, regulatory interventions, or custody risks.
*   **Mechanism**:
    *   Controlled by multi-sig wallet (Foundation + Bank Partner + Independent Auditor).
    *   Powers include: pausing bridge contracts, halting new OUMG mints, circuit-breakers on transfers.
*   **Duration**: Emergency controls expire within 72 hours unless ratified by DAO.
*   **Transparency**: All emergency actions are logged on-chain and subject to post-incident DAO audit.

## 12.4 Governance Roadmap
*   **Phase 0 (Testnet)**: Foundation-led governance (manual overrides).
*   **Phase 1 (Mainnet)**: Semi-decentralized governance: DAO votes + multi-sig emergency controls.
*   **Phase 2 (Maturity)**: Fully decentralized governance with DAO-managed compliance rule sets and minimal Foundation involvement.
