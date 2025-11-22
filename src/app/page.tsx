"use client";

import { ArrowRight, ShieldCheck, Globe, Activity, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LaunchAppModal } from "@/components/launch-app-modal";

export default function Home() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center text-center">

                {/* Hero Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
                >
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Oureum Internal Testnet Live
                </motion.div>

                {/* Hero Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-6"
                >
                    DIGITAL <span className="text-primary">GOLD</span>
                    <br />
                    STANDARD
                </motion.h1>

                {/* Hero Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                >
                    The first Layer 2 blockchain dedicated to Real World Assets (RWA) and metal tokenization.
                    Secure, scalable, and backed by physical gold.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 items-center"
                >
                    <LaunchAppModal>
                        <button className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            Launch App
                        </button>
                    </LaunchAppModal>

                    <Link href="/whitepaper" className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                        Read Whitepaper
                    </Link>
                </motion.div>

                {/* Feature Grid (Bento Style) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl"
                >
                    {/* Card 1 */}
                    <div className="group relative overflow-hidden rounded-3xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8 hover:bg-primary/10 dark:hover:bg-white/10 transition-colors">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Proof of Reserve</h3>
                        <p className="text-muted-foreground">Real-time on-chain verification of physical gold reserves stored in secure vaults.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative overflow-hidden rounded-3xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8 hover:bg-primary/10 dark:hover:bg-white/10 transition-colors md:col-span-2">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    <Globe className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Global Liquidity</h3>
                                <p className="text-muted-foreground max-w-md">Instant settlement and trading of tokenized metals across borders with near-zero fees.</p>
                            </div>
                            <div className="relative h-32 w-full md:w-48 rounded-2xl overflow-hidden border border-white/5">
                                <Image
                                    src="/global-liquidity.png"
                                    alt="Global Liquidity"
                                    fill
                                    className="object-cover opacity-80"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative overflow-hidden rounded-3xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8 hover:bg-primary/10 dark:hover:bg-white/10 transition-colors md:col-span-2">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">High Performance L2</h3>
                                <p className="text-muted-foreground max-w-md">Built on OP Stack, ensuring Ethereum security with sub-second block times.</p>
                            </div>
                            <div className="relative h-32 w-full md:w-48 rounded-2xl overflow-hidden border border-white/5">
                                <Image
                                    src="/high-performance-l2.png"
                                    alt="High Performance L2"
                                    fill
                                    className="object-cover opacity-80"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="group relative overflow-hidden rounded-3xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8 hover:bg-primary/10 dark:hover:bg-white/10 transition-colors flex flex-col justify-between">
                        <div>
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                <ChevronRight className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Developer Ready</h3>
                        </div>
                        <Link href="/networks" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mt-4">
                            View Documentation <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                </motion.div>

            </div>
        </main>
    );
}
