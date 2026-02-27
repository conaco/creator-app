"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import LiveCreatorsRow from "@/components/LiveCreatorsRow";
import FilterBar from "@/components/FilterBar";
import CreatorCard from "@/components/CreatorCard";
import { creators } from "@/lib/mockData";

export default function FeedPage() {
  const [filter, setFilter] = useState("All");

  const filteredCreators = filter === "All"
    ? creators
    : creators.filter((c) =>
      c.categories.some((cat) => cat.toLowerCase() === filter.toLowerCase())
    );

  return (
    <div className="pb-24">
      <TopBar />

      {/* Spacer for fixed TopBar */}
      <div className="h-16" />

      {/* Live Creators Row */}
      <LiveCreatorsRow />

      {/* Divider */}
      <div className="h-px bg-white/5 mx-4" />

      {/* Filter Bar */}
      <FilterBar onFilter={setFilter} />

      {/* Creator Cards */}
      <div className="px-4 space-y-4 mt-2">
        {filteredCreators.map((creator, index) => (
          <CreatorCard key={creator.id} creator={creator} index={index} />
        ))}

        {filteredCreators.length === 0 && (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-white/40 text-sm">
              Nenhum criador encontrado nesta categoria
            </p>
          </div>
        )}
      </div>

      {/* Load More Indicator */}
      <div className="flex justify-center py-8">
        <div className="flex items-center gap-2 text-white/30 text-sm">
          <div className="w-6 h-6 border-2 border-white/20 border-t-purple-500 rounded-full animate-spin" />
          Carregando mais...
        </div>
      </div>
    </div>
  );
}
