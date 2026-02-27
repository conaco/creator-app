"use client";

import { useState } from "react";
import { categories } from "@/lib/mockData";

interface FilterBarProps {
    onFilter?: (category: string) => void;
}

export default function FilterBar({ onFilter }: FilterBarProps) {
    const [active, setActive] = useState("All");

    return (
        <div className="px-4 py-2">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setActive(cat);
                            onFilter?.(cat);
                        }}
                        className={`shrink-0 text-xs font-semibold rounded-full px-4 py-2 transition-all duration-200 ${active === cat
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
