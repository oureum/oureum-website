"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function RoadmapPage() {
    const phases = [
        {
            id: "phase-1",
            title: "Phase 1: Foundation",
            subtitle: "Q3 2024",
            description: "Laying the groundwork for the world's first gold-backed L2 network.",
            items: [
                "Project Inception & Legal Framework",
                "Core Team Assembly",
                "Architecture Design",
                "Strategic Partnerships"
            ],
            active: false
        },
        {
            id: "phase-2",
            title: "Phase 2: Alpha Access",
            subtitle: "Q4 2024",
            description: "Private testing of the Oureum Network and Gold Tokenization Standard.",
            items: [
                "Internal Testnet Launch",
                "OUMG (Gold Token) Prototype",
                "Private Wallet Beta",
                "Smart Contract Security Audits"
            ],
            active: true // Current phase
        },
        {
            id: "phase-3",
            title: "Phase 3: Public Beta & Presale",
            subtitle: "Q1 2025",
            description: "Opening the network to the community and early adopters.",
            items: [
                "Public Testnet Live",
                "OUM Token Presale (Base Network)",
                "Community Bug Bounty Program",
                "Block Explorer Release"
            ],
            active: false
        },
        {
            id: "phase-4",
            title: "Phase 4: Security & Compliance",
            subtitle: "Q2 2025",
            description: "Ensuring institutional-grade security and regulatory compliance before mainnet.",
            items: [
                "Institutional Custody Integration",
                "Advanced KYC/AML Compliance Layer",
                "Final Security Hardening",
                "Mobile App Public Beta"
            ],
            active: false
        },
        {
            id: "phase-5",
            title: "Phase 5: Mainnet Launch",
            subtitle: "Q3 2025",
            description: "The official launch of the Oureum Mainnet and Token Generation Event.",
            items: [
                "Oureum Mainnet Genesis",
                "Token Generation Event (TGE)",
                "Tier-1 Exchange Listings",
                "Cross-Chain Bridge Activation"
            ],
            active: false
        },
        {
            id: "phase-6",
            title: "Phase 6: Ecosystem Growth",
            subtitle: "Q4 2025+",
            description: "Expanding the Oureum ecosystem with dApps, DeFi, and real-world adoption.",
            items: [
                "DeFi Protocol Integrations",
                "RWA Asset Expansion (Silver, Platinum)",
                "Global Merchant Adoption",
                "DAO Governance Launch"
            ],
            active: false
        }
    ]

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <main className="flex-1 pt-32 pb-24">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-heading font-bold mb-6"
                        >
                            The <span className="text-primary">Path</span> Forward
                        </motion.h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Our strategic roadmap to revolutionizing the global metal market.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Central Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:bg-border/50 -translate-x-1/2" />

                        <div className="space-y-24">
                            {phases.map((phase, index) => (
                                <TimelineItem key={phase.id} phase={phase} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

function TimelineItem({ phase, index }: { phase: any, index: number }) {
    const isEven = index % 2 === 0

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
                "relative flex flex-col md:flex-row gap-8 md:gap-0 items-center",
                isEven ? "md:flex-row-reverse" : ""
            )}
        >
            {/* Center Node */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border border-border z-10 flex items-center justify-center shadow-lg">
                <div className={cn(
                    "w-4 h-4 rounded-full transition-all duration-500",
                    phase.active ? "bg-primary shadow-[0_0_20px_rgba(212,175,55,0.8)] scale-125" : "bg-muted-foreground/30"
                )} />
            </div>

            {/* Content Card */}
            <div className="ml-12 md:ml-0 md:w-1/2 md:px-16 w-full">
                <div className={cn(
                    "group relative p-8 rounded-2xl border bg-card/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1",
                    phase.active
                        ? "border-primary/50 shadow-lg"
                        : "border-border hover:border-primary/30"
                )}>
                    {/* Glow Effect */}
                    {phase.active && (
                        <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl -z-10" />
                    )}

                    <div className="flex items-center justify-between mb-4">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase">{phase.subtitle}</span>
                        {phase.active && (
                            <span className="flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                        )}
                    </div>

                    <h3 className="text-2xl font-heading font-bold mb-3 text-foreground">{phase.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                        {phase.description}
                    </p>

                    <ul className="space-y-3">
                        {phase.items.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <div className={cn(
                                    "w-1.5 h-1.5 rounded-full mt-1.5 shrink-0",
                                    phase.active ? "bg-primary" : "bg-muted-foreground/30"
                                )} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}
