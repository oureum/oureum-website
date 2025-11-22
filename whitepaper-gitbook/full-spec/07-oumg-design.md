# Oureum Gold (OUMG) Design

Oureum Gold (OUMG) is the flagship gold-backed stablecoin of the Oureum ecosystem, designed as a compliant, transparent, and redeemable digital representation of physical gold.

## 8.1 Peg Mechanism
*   **1 OUMG = 1 gram of LBMA-standard gold.**
*   Vaulted gold bars are broken down conceptually into gram-based units.
*   Conversion between troy ounces (as priced globally) and grams is automated by oracles.
*   **Peg maintenance**:
    *   Mint only when physical gold is deposited or fiat equivalent received.
    *   Burn when redeemed for physical gold or fiat.

## 8.2 Mint & Burn Lifecycle

### Minting Process
1.  KYC’d users deposit fiat (MYR, USD) or request gold purchase.
2.  Vault partner confirms allocated gold weight.
3.  Smart contract mints equivalent OUMG tokens.

### Burning Process
1.  User initiates a redemption request (cash-out or gold redemption).
2.  Tokens are sent to burn contracts.
3.  Vault partner releases fiat or physical gold.

This ensures circulating supply = audited vault reserves at all times.

## 8.3 Pricing Oracles
*   **Primary Pricing Source**:
    *   BNM (Bank Negara Malaysia) daily gold reference price (per oz).
*   **Conversion**:
    *   The system converts the price per ounce → per gram.
*   **Fallback Oracles**:
    *   LBMA gold price feeds, Chainlink oracles.
*   **Deviation Guards**:
    *   If oracle data deviates beyond ±1%, transactions are paused for review.

## 8.4 Fee Structure
*   **Network Fees (Gas)**:
    *   Paid in OUREUM, not OUMG.
    *   Keeps compliance and network ops sustainable.
*   **Transaction Fees**:
    *   Buy/sell spread (e.g., 0.2~0.5%) to cover custody + operations.
*   **Redemption Fees**:
    *   Fiat redemption: nominal service fee.
    *   Physical gold redemption: vault handling + logistics fee/offline store from designated partners.
*   **Transparency**:
    *   All fees published on official portal + encoded into smart contract.

## 8.5 Use Cases
*   **Store of Value**: Digital gold with full transparency, no storage fees.
*   **Cross-Border Settlement**: Move gold value internationally in seconds.
*   **Compliant DeFi Collateral**: Use OUMG in lending/borrowing protocols.
*   **Corporate Treasury**: Diversify reserves into tokenized gold, redeemable anytime.
