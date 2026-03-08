"use client";

import Link from "next/link";
import { liveCreators, avatarGradients } from "@/lib/mockData";

export default function LiveCreatorsRow() {
    const onlineCount = liveCreators.length + 20; // simulate more

    return (
        <section className="px-4 py-3">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-bold text-white/90 tracking-wider uppercase">
                    Live Creators
                </h2>
                <span className="text-xs font-bold text-live-red flex items-center gap-1">
                    <span className="w-2 h-2 bg-live-red rounded-full animate-pulse-live inline-block" />
                    {onlineCount} ONLINE
                </span>
            </div>

            {/* Scrollable Avatar Row */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                {liveCreators.map((creator, index) => (
                    <Link
                        key={creator.id}
                        href={`/creator/${creator.id}`}
                        className="flex flex-col items-center gap-1.5 shrink-0 group"
                    >
                        {/* Avatar with live ring */}
                        <div className="live-ring animate-pulse-live">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-dark-900">
                                {creator.avatar ? (
                                    <img
                                        src={creator.avatar}
                                        alt={creator.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-lg"
                                        style={{ background: avatarGradients[index % avatarGradients.length] }}
                                    >
                                        {creator.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Name */}
                        <span className="text-xs text-white/70 font-medium group-hover:text-purple-400 transition-colors truncate max-w-[72px] text-center">
                            {creator.name.split(" ")[0]}
                        </span>
                    </Link>
                ))}

                {/* Extra placeholder avatars for scroll feel */}
                {[...Array(4)].map((_, i) => (
                    <div key={`placeholder-${i}`} className="flex flex-col items-center gap-1.5 shrink-0">
                        <div className="live-ring animate-pulse-live" style={{ animationDelay: `${i * 0.3}s` }}>
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-dark-900">
                                <div
                                    className="w-full h-full rounded-full flex items-center justify-center text-white/40 font-bold text-lg shimmer"
                                />
                            </div>
                        </div>
                        <span className="text-xs text-white/30 font-medium">...</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
