"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import CreatorCard from "@/components/CreatorCard";
import { creators, categories } from "@/lib/mockData";

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered = creators.filter((c) => {
        const matchesQuery =
            query === "" ||
            c.name.toLowerCase().includes(query.toLowerCase()) ||
            c.location.toLowerCase().includes(query.toLowerCase()) ||
            c.categories.some((cat) => cat.toLowerCase().includes(query.toLowerCase()));
        const matchesFilter =
            activeFilter === "All" ||
            c.categories.some((cat) => cat.toLowerCase() === activeFilter.toLowerCase());
        return matchesQuery && matchesFilter;
    });

    return (
        <div className="pb-24">
            <TopBar />
            <div className="h-16" />

            {/* Search Header */}
            <div className="px-4 pt-4 pb-3">
                <h1 className="text-2xl font-bold text-white mb-4">Explorar</h1>

                {/* Search Input */}
                <div className="relative">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#666"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute left-4 top-1/2 -translate-y-1/2"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Buscar criadores, categorias, cidades..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-dark-700 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                    />
                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            {/* Category Pills */}
            <div className="px-4 flex gap-2 overflow-x-auto no-scrollbar pb-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`shrink-0 text-xs font-semibold rounded-full px-4 py-2 transition-all ${activeFilter === cat
                                ? "gradient-purple text-white shadow-lg shadow-purple-500/20"
                                : "bg-dark-700 text-white/60 border border-white/10 hover:bg-dark-600"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Trending Section */}
            {query === "" && activeFilter === "All" && (
                <div className="px-4 py-3">
                    <h2 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3">
                        🔥 Em Alta
                    </h2>
                    <div className="flex gap-2 flex-wrap">
                        {["Fashion Week", "Fitness", "Live agora", "Novo Conteúdo", "São Paulo"].map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setQuery(tag)}
                                className="text-xs bg-dark-700 border border-white/10 text-white/70 rounded-full px-3 py-1.5 hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-purple-400 transition-all"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Results */}
            <div className="px-4 space-y-4 mt-2">
                <p className="text-xs text-white/30 font-medium">
                    {filtered.length} resultado{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
                </p>
                {filtered.map((creator, index) => (
                    <CreatorCard key={creator.id} creator={creator} index={index} />
                ))}
                {filtered.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-4xl mb-4">🔍</div>
                        <p className="text-white/40 text-sm">Nenhum resultado encontrado</p>
                        <p className="text-white/20 text-xs mt-1">Tente outra busca</p>
                    </div>
                )}
            </div>
        </div>
    );
}
