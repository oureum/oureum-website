import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t border-border/40 bg-background py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
                        OUREUM
                    </span>
                    <p className="text-sm text-muted-foreground mt-2">
                        The Standard for Metal Tokenization
                    </p>
                </div>

                <div className="flex space-x-6">
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                        Twitter
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                        Discord
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                        GitHub
                    </Link>
                </div>

                <div className="mt-4 md:mt-0 text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Oureum. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
