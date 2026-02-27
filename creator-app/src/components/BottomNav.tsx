"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
    {
        id: "feed",
        label: "FEED",
        href: "/",
        icon: (active: boolean) => (
            <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#A855F7" : "none"} stroke={active ? "#A855F7" : "#666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="M9 22V12h6v10" stroke={active ? "#A855F7" : "#666"} fill="none" />
            </svg>
        ),
    },
    {
        id: "search",
        label: "SEARCH",
        href: "/search",
        icon: (active: boolean) => (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#A855F7" : "#666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
            </svg>
        ),
    },
    {
        id: "studio",
        label: "STUDIO",
        href: "/studio",
        icon: (active: boolean) => (
            <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#A855F7" : "none"} stroke={active ? "#A855F7" : "#666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="9" rx="1" />
                <rect x="14" y="3" width="7" height="5" rx="1" />
                <rect x="14" y="12" width="7" height="9" rx="1" />
                <rect x="3" y="16" width="7" height="5" rx="1" />
            </svg>
        ),
    },
    {
        id: "profile",
        label: "PROFILE",
        href: "/profile",
        icon: (active: boolean) => (
            <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#A855F7" : "none"} stroke={active ? "#A855F7" : "#666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <>
            {/* Floating Action Button */}
            <Link
                href="/search"
                className="fixed bottom-24 right-4 z-50 w-14 h-14 gradient-purple rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all animate-float"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="8" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                    <circle cx="6" cy="12" r="2" fill="white" />
                    <circle cx="18" cy="6" r="2" fill="white" />
                    <circle cx="14" cy="18" r="2" fill="white" />
                </svg>
            </Link>

            {/* Nav Bar */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 glass-heavy border-t border-white/5">
                <div className="max-w-lg mx-auto flex items-center justify-around px-2 py-2">
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href));
                        const isFeedActive = tab.href === "/" && pathname === "/";

                        return (
                            <Link
                                key={tab.id}
                                href={tab.href}
                                className={`flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl transition-all ${(isActive || isFeedActive) ? "text-purple-500" : "text-white/40 hover:text-white/60"
                                    }`}
                            >
                                {tab.icon(isActive || isFeedActive)}
                                <span className="text-[10px] font-bold tracking-wider">
                                    {tab.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
