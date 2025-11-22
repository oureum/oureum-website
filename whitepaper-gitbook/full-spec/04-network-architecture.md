# Network Architecture

Oureum Network is designed with a phased architecture roadmap to balance fast prototyping with long-term institutional scalability. The technical foundation ensures compatibility with Ethereum, while progressively integrating compliance-first features at the protocol level.

## 5.1 Target Architecture: Layer-2 Rollup
*   **Long-term goal**: Oureum will operate as an Ethereum Layer-2 (L2) to inherit Ethereum’s security while offering lower fees and integrated compliance features.
*   **Candidate frameworks**: Optimistic Rollup (OP Stack) or zkRollup.
*   **Benefits**:
    *   Ethereum-grade security.
    *   Faster settlement finality with lower costs.
    *   Native bridges to Ethereum DeFi and institutional adoption.

## 5.2 Transitional Path: Proof-of-Authority → L2

### Current Phase (PoA Testnet)
*   Running on a Proof-of-Authority (Clique) consensus.
*   Used for demos, pilots, and developer testing.
*   Signers are controlled by the Oureum team.

### Interim Phase (PoS Testnet)
*   Migration to Proof-of-Stake consensus.
*   Validators stake OUREUM tokens to participate in block production.
*   Enables more decentralized participation while maintaining compliance controls.

### Future Phase (Ethereum L2 Rollup)
*   Transition to a rollup architecture.
*   Data availability secured on Ethereum mainnet.
*   Compliance checks remain embedded in the execution layer.

## 5.3 Execution Environment
*   **EVM Compatibility**: All Ethereum smart contracts and tools (MetaMask, Remix, Hardhat) run natively.
*   **Gas Model**:
    *   Fees paid in OUREUM.
    *   Configurable base gas price (currently 1 gwei testnet).
*   **Throughput & Latency Targets**:
    *   TPS target: 1,000+ transactions per second (on L2).
    *   Block time: ~2s on testnet; ~12s on Ethereum settlement.

## 5.4 Data Availability Approach
*   **Phase 1 (PoA/PoS)**: On-chain data stored directly in Oureum nodes.
*   **Phase 2 (Rollup)**: Transaction data posted to Ethereum as calldata.
*   **Future Options**:
    *   Modular Data Availability (DA) solutions (Celestia, EigenDA).
    *   Hybrid model: sensitive compliance proofs stored off-chain, hashed on-chain.
