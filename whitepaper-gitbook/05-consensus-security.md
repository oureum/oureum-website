# Consensus & Security

Oureum’s consensus mechanism follows a progressive path aligned with its network evolution: starting with Proof-of-Authority (PoA) for controlled pilots, migrating to Proof-of-Stake (PoS) for decentralized validator participation, and eventually inheriting security directly from Ethereum Layer-2 rollup architecture.

## 6.1 Proof-of-Authority (PoA) – Testnet / Early Pilots
*   **Consensus Model**: Clique-based PoA.
*   **Block Producers**: Small set of pre-approved signers operated by the Oureum team.
*   **Use Case**:
    *   Rapid testnet iterations.
    *   Demo environments for institutional partners.
*   **Risks**: Centralization of trust; not suitable for open mainnet.

## 6.2 Proof-of-Stake (PoS) – Transitional Network
*   **Consensus Model**: Validators stake OUREUM tokens to participate in block production.
*   **Validator Set**:
    *   Entry requires a staking threshold (e.g., 32,000 OUREUM).
    *   Validators subject to slashing for misbehavior (double-signing, downtime).
*   **Governance Control**: DAO manages validator onboarding/offboarding.
*   **Benefits**:
    *   Increased decentralization.
    *   Aligns incentives between network health and token holders.

## 6.3 Rollup Security – Final Mainnet (Ethereum L2)
*   **Execution**: Transactions executed on Oureum L2 nodes.
*   **Settlement**: Transaction data posted to Ethereum for dispute resolution.
*   **Fraud/Validity Proofs**:
    *   Optimistic Rollup path: 7-day dispute window.
    *   zkRollup path: zero-knowledge proofs ensure instant finality.
*   **Outcome**: Oureum inherits Ethereum-grade security while maintaining its compliance layer.

## 6.4 Threat Model & Mitigations

### Consensus Risks
*   **PoA**: Signer collusion → mitigated by multisig control and audit trails.
*   **PoS**: Sybil attacks → mitigated by high staking threshold + slashing.

### Bridge Risks
*   **Exploits in cross-chain contracts** → mitigated by audited contracts and circuit breakers.

### Custody Risks
*   **Vault insolvency** → mitigated by multi-vault redundancy + insurance.

### Compliance Risks
*   **Circumvention of AML/KYC** → mitigated by on-chain transfer rules + verifiable credentials.

## 6.5 Monitoring & Incident Response
*   **On-chain Monitoring**: Automatic detection of abnormal validator behavior.
*   **Incident Response**: Emergency pause mechanism (DAO/multi-sig) with strict time limits.
*   **Transparency**: All governance and incident actions recorded on-chain.
