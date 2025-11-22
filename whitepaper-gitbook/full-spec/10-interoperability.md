# Interoperability & Bridges

## 11.1 Canonical Bridge (Ethereum ↔ Oureum L2)
*   A native bridge will connect the Oureum Network with Ethereum Mainnet.
*   **Functionality**:
    *   Transfer OUREUM (gas token) between Ethereum and Oureum.
    *   Transfer OUMG (gold-backed stablecoin) with 1:1 peg enforcement across chains.
*   **Security**:
    *   Multi-sig + external validator set.
    *   Future roadmap: migration to zk-proof based bridge for stronger trust minimization.

## 11.2 Wrapped Assets Policy
*   External stablecoins & tokens (e.g., USDT, USDC, ETH) can be bridged into Oureum as wrapped tokens (wUSDT, wUSDC, wETH).
*   **Compliance Layer applies even to wrapped assets**:
    *   Transfers subject to allow/deny lists.
    *   Sanctioned addresses are blocked automatically.

## 11.3 OUMG Cross-Chain Listings
*   OUMG will be deployed on major L1/L2 chains (Ethereum, BSC, Polygon, Solana) via wrapped representations.
*   **Use Cases**:
    *   DeFi liquidity pools.
    *   Gold-backed trading pairs (e.g., OUMG/USDT, OUMG/ETH).
    *   Institutional settlement rails.
*   **Compliance Preserved**:
    *   OUMG contracts on external chains will enforce transfer rules via proxy contracts connected to Oureum compliance oracles.

## 11.4 FX & Pricing Normalization
*   **Primary Pricing Base**: MYR (Malaysian Ringgit), converted oz → gram → OUMG.
*   **Secondary Pricing**: USD reference (for global exchanges).
*   **Cross-Chain Oracles**: Chainlink + Oureum internal oracle system with deviation guards to prevent manipulation.

## 11.5 Interoperability Roadmap
*   **Phase 1 (Testnet)**: Canonical Ethereum bridge, simple OUMG transfers.
*   **Phase 2 (Mainnet)**: Wrapped OUMG contracts on Polygon/BSC; liquidity pools with compliance.
*   **Phase 3 (Expansion)**: Integration with cross-chain DEXs (e.g., Thorchain, LayerZero), ensuring compliant swaps.
