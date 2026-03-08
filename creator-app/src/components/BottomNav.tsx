"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, SearchIcon, StudioIcon, ProfileIcon, FilterIcon } from "@/components/Icons";

const tabs = [
    {
        id: "feed",
        label: "FEED",
        href: "/",
        icon: (active: boolean) => <HomeIcon active={active} />,
    },
    {
        id: "search",
        label: "SEARCH",
        href: "/search",
        icon: (active: boolean) => <SearchIcon active={active} />,
    },
    {
        id: "studio",
        label: "STUDIO",
        href: "/studio",
        icon: (active: boolean) => <StudioIcon active={active} />,
    },
    {
        id: "profile",
        label: "PROFILE",
        href: "/profile",
        icon: (active: boolean) => <ProfileIcon active={active} />,
    },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <>
            {/* Floating Action Button */}
            <Link
                href="/search"
                aria-label="Abrir filtros avançados"
                className="fixed bottom-24 right-4 z-50 w-14 h-14 gradient-purple rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all animate-float focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
            >
                <FilterIcon />
            </Link>

            {/* Nav Bar */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 glass-heavy border-t border-white/5" aria-label="Navegação principal">
                <div className="max-w-lg mx-auto flex items-center justify-around px-2 py-2">
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href));
                        const isFeedActive = tab.href === "/" && pathname === "/";

                        return (
                            <Link
                                key={tab.id}
                                href={tab.href}
                                aria-label={tab.label}
                                aria-current={(isActive || isFeedActive) ? "page" : undefined}
                                className={`flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 ${(isActive || isFeedActive) ? "text-purple-500" : "text-white/40 hover:text-white/60"
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
