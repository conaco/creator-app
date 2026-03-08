"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/lib/mockData";

export default function FilterBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const active = searchParams.get("category") || "All";

    const handleFilter = (cat: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (cat === "All") {
            params.delete("category");
        } else {
            params.set("category", cat);
        }
        router.push(`/?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="px-4 py-2">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1" role="tablist" aria-label="Filtrar por categoria">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        role="tab"
                        aria-selected={active === cat}
                        onClick={() => handleFilter(cat)}
                        className={`shrink-0 text-xs font-semibold rounded-full px-4 py-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 ${active === cat
                            ? "gradient-purple text-white shadow-lg shadow-purple-500/20"
                            : "bg-dark-700 text-white/60 border border-white/10 hover:bg-dark-600 hover:text-white/80 hover:border-white/20"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}
