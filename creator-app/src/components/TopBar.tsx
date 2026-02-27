"use client";

import Link from "next/link";

export default function TopBar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-heavy border-b border-white/5">
            <div className="max-w-lg mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 gradient-purple rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L4 8L12 14L20 8L12 2Z" fill="white" opacity="0.9" />
                            <path d="M4 14L12 20L20 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 2V14" stroke="white" strokeWidth="1.5" opacity="0.5" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        <span className="text-white">CREA</span>
                        <span className="text-gradient">TOR</span>
                    </span>
                </Link>

                {/* Credits Badge */}
                <Link href="/credits" className="flex items-center gap-2 bg-purple-900/40 hover:bg-purple-900/60 border border-purple-500/30 rounded-full px-4 py-2 transition-all hover:border-purple-500/50 group">
                    <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                            <path d="M12 6V18M8 10H16M8 14H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        1,250 Credits
                    </span>
                </Link>
            </div>
        </header>
    );
}
