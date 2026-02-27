"use client";

import { useState } from "react";
import Link from "next/link";
import { Creator, coverGradients, avatarGradients } from "@/lib/mockData";

interface CreatorCardProps {
    creator: Creator;
    index: number;
}

export default function CreatorCard({ creator, index }: CreatorCardProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <Link href={`/creator/${creator.id}`} className="block group">
            <div className="relative bg-dark-800 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-purple-500/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                {/* Image Area */}
                <div
                    className="relative w-full aspect-[3/4] overflow-hidden"
                    style={{ background: coverGradients[index % coverGradients.length] }}
                >
                    {/* Placeholder Avatar */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-5xl opacity-80 shadow-2xl"
                            style={{ background: avatarGradients[index % avatarGradients.length] }}
                        >
                            {creator.name.split(" ").map(n => n[0]).join("")}
                        </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 gradient-card" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-card-hover" />

                    {/* Favorite Button */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsFavorite(!isFavorite);
                        }}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-all hover:scale-110 z-10"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill={isFavorite ? "#A855F7" : "none"}
                            stroke={isFavorite ? "#A855F7" : "white"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </button>

                    {/* Live Badge */}
                    {creator.isLive && (
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-live-red/90 backdrop-blur-sm rounded-full px-3 py-1 animate-pulse-live">
                            <span className="w-2 h-2 bg-white rounded-full" />
                            <span className="text-xs font-bold text-white">LIVE</span>
                        </div>
                    )}

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                        {/* Rating */}
                        <div className="flex items-center gap-1.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                            <span className="text-sm font-semibold text-gold">
                                {creator.rating}
                            </span>
                            <span className="text-xs text-white/50">
                                ({creator.reviews} reviews)
                            </span>
                        </div>

                        {/* Name */}
                        <h3 className="text-xl font-bold text-white leading-tight">
                            {creator.name}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="text-sm text-white/60">{creator.location}</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-1">
                            {creator.categories.map((cat) => (
                                <span
                                    key={cat}
                                    className="text-xs font-semibold text-purple-400 border border-purple-500/40 rounded-full px-3 py-1 bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
