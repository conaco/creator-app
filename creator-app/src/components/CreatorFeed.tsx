"use client";

import { useSearchParams } from "next/navigation";
import CreatorCard from "@/components/CreatorCard";
import { creators } from "@/lib/mockData";

export default function CreatorFeed() {
    const searchParams = useSearchParams();
    const filter = searchParams.get("category") || "All";

    const filteredCreators = filter === "All"
        ? creators
        : creators.filter((c) =>
            c.categories.some((cat) => cat.toLowerCase() === filter.toLowerCase())
        );

    return (
        <div className="mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCreators.map((creator, index) => (
                    <CreatorCard key={creator.id} creator={creator} index={index} />
                ))}
            </div>

            {filteredCreators.length === 0 && (
                <div className="text-center py-20">
                    <div className="text-4xl mb-4">🔍</div>
                    <p className="text-white/40 text-sm">
                        Nenhum criador encontrado nesta categoria
                    </p>
                </div>
            )}
        </div>
    );
}
