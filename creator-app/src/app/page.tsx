import { Suspense } from "react";
import TopBar from "@/components/TopBar";
import LiveCreatorsRow from "@/components/LiveCreatorsRow";
import FilterBar from "@/components/FilterBar";
import CreatorFeed from "@/components/CreatorFeed";

function FeedSkeleton() {
  return (
    <div className="px-4 space-y-4 mt-2">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="relative bg-dark-800 rounded-2xl overflow-hidden">
          <div className="w-full aspect-[3/4] shimmer" />
        </div>
      ))}
    </div>
  );
}

export default function FeedPage() {
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
      <Suspense>
        <FilterBar />
      </Suspense>

      {/* Creator Cards */}
      <Suspense fallback={<FeedSkeleton />}>
        <CreatorFeed />
      </Suspense>

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
