# Appendix

## Comparative Landscape

| Feature / Network | Oureum (OUM/OUMG) | Tether Gold (XAUt) | PAX Gold (PAXG) | Digix Gold (DGX) | “Compliance-less” Chains |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Compliance** | Native protocol-level AML/KYC with verifiable credentials and sanctions screening | Off-chain issuer only | Off-chain issuer only | Limited issuer-based compliance | None |
| **Proof-of-Reserves** | Real-time on-chain PoR + monthly independent audits | Regular issuer audits | NYDFS audits | Monthly issuer reports | None |
| **Custody** | Multi-jurisdiction vaults (Malaysia, Singapore, Switzerland) | Swiss vaults | London vaults | Singapore vaults | Not applicable |
| **Peg Unit** | 1g gold = 1 OUMG | 1 troy ounce gold | 1 troy ounce gold | 1g gold | Not applicable |
| **Redemption** | Fiat or physical gold (50g+) | Physical gold (min redemption) | Physical gold (London) | Physical gold (Singapore) | Not applicable |
| **Target Audience** | Banks, regulators, compliant DeFi, governments | General crypto users | US-based institutions | - | - |

## Specifications

### Token Contracts (OUM / OUMG)
*   **OUREUM (OUM)**
    *   Standard: ERC-20 (EVM-compatible)
    *   Functions: transfer, approve, stake, vote
    *   Events: Transfer, Stake, VoteCast
*   **Oureum Gold (OUMG)**
    *   Standard: ERC-20 with mint/burn controls
    *   Functions: mint, burn, redeem
    *   Events: Mint, Burn, Redeem

### Oracle Specification
*   **Primary Source**: Bank Negara Malaysia (BNM) daily gold price (MYR/oz)
*   **Conversion**: Ounce → Gram → OUMG
*   **Tolerance Band**: ±1% deviation guard
*   **Update Cadence**: Daily (higher frequency if required)
*   **Backup Sources**: LBMA reference feeds, Chainlink oracles

### Network Parameters
*   **Testnet Chain ID**: 828828 (PoA → PoS transition)
*   **Block Time**: ~2s (PoA/PoS), ~12s (Ethereum L2 settlement)
*   **Gas Policy**: Minimum 1 gwei, payable in OUM
*   **TPS Target**: 1,000+ (on Layer-2)

## Glossary & References

### Glossary
*   **AML (Anti-Money Laundering)**: Global regulatory standards to prevent money laundering.
*   **CFT (Combating the Financing of Terrorism)**: Safeguards against terrorism financing.
*   **BNM**: Bank Negara Malaysia, the central bank of Malaysia.
*   **LBMA**: London Bullion Market Association, governing body for gold standards.
*   **OUREUM (OUM)**: Native gas, staking, and governance token of the Oureum Network.
*   **OUMG**: Stablecoin pegged 1:1 to one gram of LBMA-standard gold.
*   **PoA (Proof-of-Authority)**: Consensus algorithm relying on approved validators.
*   **PoS (Proof-of-Stake)**: Consensus algorithm where validators stake tokens.
*   **Rollup**: Layer-2 scaling solution for Ethereum, bundling transactions for efficiency.
*   **Proof-of-Reserves (PoR)**: Mechanism to verify that circulating tokens are fully backed by audited reserves.

### References
*   LBMA Gold Price Index
*   Bank Negara Malaysia – Official Gold Price Feeds
*   European Union – MiCA Regulatory Framework
*   Chainlink Documentation – Decentralized Oracle Networks
*   Oureum Network Internal Testnet Specifications & DAO Governance Documents
