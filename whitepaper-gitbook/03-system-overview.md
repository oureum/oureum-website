# System Overview

The Oureum ecosystem is designed as a compliance-native financial infrastructure, combining blockchain execution, regulatory oversight, and gold-backed stability. Its architecture consists of several interconnected components that enable secure asset issuance, transfer, and redemption.

## 4.1 Core Components

### Oureum Network (Blockchain Layer)
*   Base chain (currently PoA testnet, evolving into an Ethereum L2 with PoS).
*   Provides EVM compatibility for dApps, wallets, and smart contracts.
*   Settles transactions in the native gas token OUREUM.

### Compliance Layer
*   On-chain modules for KYC, AML, and sanctions list screening.
*   Risk-based rules engine: configurable by institutions and regulators.
*   Supports verifiable credentials and selective permissioning.

### OUMG (Gold-Backed Stablecoin)
*   Each OUMG token = 1 gram of LBMA-standard physical gold.
*   Lifecycle: Mint when fiat/gold is deposited → Burn when redeemed.
*   Transparent reserve attestation via monthly audits and on-chain Proof-of-Reserve.

### Custody & Attestations
*   Multi-jurisdiction vault network for gold custody.
*   Independent auditors verify reserves and publish on-chain proofs.
*   Insurance-backed custody agreements for risk management.

### Bridges & Interoperability
*   Canonical bridge to Ethereum, enabling OUMG to trade on DEXs.
*   Wrapping mechanisms for cross-chain deployment (BSC, Polygon, Solana, etc.).
*   Guardrails to maintain compliance across bridges.

### Wallets & Applications
*   **User Wallets (MetaMask-compatible)** – store and transfer OUREUM and OUMG.
*   **Redemption App** – enables users to redeem OUMG for fiat or physical gold.
*   **Admin Console** – allows authorized institutions to configure compliance rules, monitor activity, and manage custody integrations.

### Regulator Console
*   A permissioned dashboard for regulators to view transactions, flagged risks, and Proof-of-Reserve attestations.
*   Provides audit trails and compliance visibility without breaching user privacy.

## 4.2 High-Level Data Flows

### Minting Flow (Gold → OUMG)
1.  The user deposits fiat or gold.
2.  Vault custodian confirms deposit.
3.  Smart contract mints equivalent OUMG tokens to the user wallet.

### Transfer Flow (User → User)
1.  User initiates OUMG transfer.
2.  Compliance Layer checks: wallet status, KYC, jurisdictional rules.
3.  If approved, the transaction executes on Oureum Network.

### Redemption Flow (OUMG → Gold/Fiat)
1.  The user submits a redemption request.
2.  Tokens are burned on-chain.
3.  Vault custodian or banking partner releases fiat or physical gold.
