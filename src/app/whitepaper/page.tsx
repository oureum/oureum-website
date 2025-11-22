"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

export default function WhitepaperPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1 py-24 bg-background flex items-center justify-center">
                <div className="container px-4 mx-auto text-center">
                    <div className="max-w-2xl mx-auto">
                        <div className="mb-8 flex justify-center">
                            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                                <FileText className="h-12 w-12 text-primary" />
                            </div>
                        </div>

                        <h1 className="text-4xl font-bold mb-6">Whitepaper</h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            The technical specification for the Oureum Network and the Metal Tokenization Standard.
                        </p>

                        <div className="grid gap-4 md:grid-cols-2 max-w-md mx-auto">
                            <Button size="lg" className="w-full">
                                Read Online (GitBook)
                            </Button>
                            <Button size="lg" variant="outline" className="w-full">
                                <Download className="mr-2 h-4 w-4" />
                                Download PDF
                            </Button>
                        </div>

                        <p className="mt-12 text-sm text-muted-foreground">
                            Version 1.0 • Last updated November 2025
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
