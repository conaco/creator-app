"use client";

import { useState } from "react";
import Link from "next/link";
import { Creator, coverGradients, avatarGradients } from "@/lib/mockData";
import { HeartIcon, StarIcon, LocationIcon } from "@/components/Icons";

interface CreatorCardProps {
    creator: Creator;
    index: number;
}

export default function CreatorCard({ creator, index }: CreatorCardProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    const initials = creator.name.split(" ").map(n => n[0]).join("");

    return (
        <Link href={`/creator/${creator.id}`} className="block group" aria-label={`Ver perfil de ${creator.name}`}>
            <div className="relative bg-dark-800 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-purple-500/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                {/* Image Area */}
                <div
                    className="relative w-full aspect-[3/4] overflow-hidden"
                    style={{ background: coverGradients[index % coverGradients.length] }}
                >
                    {/* Avatar / Photo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {creator.avatar ? (
                            <img
                                src={creator.avatar}
                                alt={creator.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div
                                className="w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-5xl opacity-80 shadow-2xl"
                                style={{ background: avatarGradients[index % avatarGradients.length] }}
                            >
                                {initials}
                            </div>
                        )}
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
                        aria-label={isFavorite ? `Remover ${creator.name} dos favoritos` : `Adicionar ${creator.name} aos favoritos`}
                        aria-pressed={isFavorite}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 active:scale-90 transition-all hover:scale-110 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
                    >
                        <HeartIcon
                            fill={isFavorite ? "#A855F7" : "none"}
                            stroke={isFavorite ? "#A855F7" : "white"}
                        />
                    </button>

                    {/* Live Badge */}
                    {creator.isLive && (
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-live-red/90 backdrop-blur-sm rounded-full px-3 py-1 animate-pulse-live">
                            <span className="w-2 h-2 bg-white rounded-full" aria-hidden="true" />
                            <span className="text-xs font-bold text-white">LIVE</span>
                        </div>
                    )}

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                        {/* Rating */}
                        <div className="flex items-center gap-1.5">
                            <StarIcon />
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
                            <LocationIcon />
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
