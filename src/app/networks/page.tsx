"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, CheckCircle2, AlertTriangle, Wallet } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NetworksPage() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string, key: string) => {
        navigator.clipboard.writeText(text);
        setCopied(key);
        setTimeout(() => setCopied(null), 2000);
    };

    const addNetwork = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: '0xCA3DC', // 828828 in hex
                            chainName: 'Oureum Internal Testnet',
                            nativeCurrency: {
                                name: 'Oureum',
                                symbol: 'OUM',
                                decimals: 18,
                            },
                            rpcUrls: ['https://testnet-rpc.oureum.com'],
                            blockExplorerUrls: ['https://explorer-testnet.oureum.com'],
                        },
                    ],
                });
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("MetaMask is not installed!");
        }
    };

    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Network Information</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Connect to Oureum networks. Currently, the Internal Testnet is live for authorized testing.
                    </p>
                </motion.div>

                <Tabs defaultValue="testnet" className="max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="testnet">Internal Testnet</TabsTrigger>
                        <TabsTrigger value="mainnet">Mainnet (Coming Soon)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="testnet">
                        <div className="grid gap-6">
                            {/* Status Card */}
                            <Card className="border-yellow-500/20 bg-yellow-500/5">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-yellow-500">
                                        <AlertTriangle className="h-5 w-5" />
                                        Internal Testnet Environment
                                    </CardTitle>
                                    <CardDescription>
                                        This network is for internal testing and development purposes only.
                                        Assets on this network have no real-world value.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            {/* Connection Details */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>RPC Configuration</CardTitle>
                                    <CardDescription>Use these details to connect your wallet manually.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Network Name</label>
                                            <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-border">
                                                <span className="font-mono">Oureum Internal Testnet</span>
                                                <Button variant="ghost" size="icon" onClick={() => copyToClipboard("Oureum Internal Testnet", "name")}>
                                                    {copied === "name" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">RPC URL</label>
                                            <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-border">
                                                <span className="font-mono truncate">https://testnet-rpc.oureum.com</span>
                                                <Button variant="ghost" size="icon" onClick={() => copyToClipboard("https://testnet-rpc.oureum.com", "rpc")}>
                                                    {copied === "rpc" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Chain ID</label>
                                            <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-border">
                                                <span className="font-mono">828828</span>
                                                <Button variant="ghost" size="icon" onClick={() => copyToClipboard("828828", "chainid")}>
                                                    {copied === "chainid" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-muted-foreground">Currency Symbol</label>
                                            <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-border">
                                                <span className="font-mono">OUM</span>
                                                <Button variant="ghost" size="icon" onClick={() => copyToClipboard("OUM", "symbol")}>
                                                    {copied === "symbol" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 flex justify-center">
                                        <Button onClick={addNetwork} className="w-full md:w-auto gap-2">
                                            <Wallet className="h-4 w-4" />
                                            Add to MetaMask
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Token Contracts */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Token Contracts</CardTitle>
                                    <CardDescription>Official contract addresses on the Testnet.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-muted-foreground">OUMG (Oureum Gold)</label>
                                        <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 border border-border">
                                            <span className="font-mono text-sm truncate">0x86ea31421e159a9020378df039c23d55c6d0c62b</span>
                                            <Button variant="ghost" size="icon" onClick={() => copyToClipboard("0x86ea31421e159a9020378df039c23d55c6d0c62b", "oumg")}>
                                                {copied === "oumg" ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                            </Button>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Pegged to 1g Gold. Price derived from Intl. Gold Oz via BNM FX rates + Admin Premium.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Useful Links */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <a href="https://explorer-testnet.oureum.com" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:bg-accent transition-colors">
                                    <span className="font-medium">Block Explorer</span>
                                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                </a>
                                <a href="https://oureum-testnet.tryethernal.com/faucet" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:bg-accent transition-colors">
                                    <span className="font-medium">Testnet Faucet</span>
                                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                </a>
                            </div>

                        </div>
                    </TabsContent>

                    <TabsContent value="mainnet">
                        <Card className="text-center py-12">
                            <CardContent>
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                                    <Wallet className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Mainnet Launching Soon</h3>
                                <p className="text-muted-foreground max-w-md mx-auto">
                                    The Oureum Mainnet is currently in final security audits.
                                    Join our community to get notified when we launch.
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
}
