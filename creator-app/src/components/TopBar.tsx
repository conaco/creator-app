"use client";

import Link from "next/link";
import { LogoIcon, CreditIcon } from "@/components/Icons";

export default function TopBar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-heavy border-b border-white/5 flex justify-center">
            <div className="w-full max-w-[1024px] flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group" aria-label="Ir para o feed">
                    <div className="w-9 h-9 gradient-purple rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
                        <LogoIcon />
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        <span className="text-white">CREA</span>
                        <span className="text-gradient">TOR</span>
                    </span>
                </Link>

                {/* Credits Badge */}
                <Link href="/credits" className="flex items-center gap-2 bg-purple-900/40 hover:bg-purple-900/60 border border-purple-500/30 rounded-full px-4 py-2 transition-all hover:border-purple-500/50 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900" aria-label="Ver saldo de créditos: 1.250">
                    <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                        <CreditIcon />
                    </div>
                    <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        1,250 Credits
                    </span>
                </Link>
            </div>
        </header>
    );
}
