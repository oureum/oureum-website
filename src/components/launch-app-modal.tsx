"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useState } from "react";

interface LaunchAppModalProps {
    children: React.ReactNode;
}

export function LaunchAppModal({ children }: LaunchAppModalProps) {
    const [open, setOpen] = useState(false);

    const handleContinue = () => {
        window.open("https://oumg.oureum.com", "_blank");
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px] border-yellow-500/20 bg-background/95 backdrop-blur-xl">
                <DialogHeader>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10">
                        <AlertTriangle className="h-6 w-6 text-yellow-500" />
                    </div>
                    <DialogTitle className="text-center text-xl text-foreground">
                        Internal Testnet Only
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground pt-2">
                        You are about to access the Oureum Internal Testnet environment.
                        <br /><br />
                        This is for testing purposes only. Assets have no real value.
                        Please ensure you are connected to the correct network.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-center gap-2 mt-4">
                    <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                        className="border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleContinue}
                        className="bg-yellow-500 text-black hover:bg-yellow-400"
                    >
                        I Understand, Continue
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
