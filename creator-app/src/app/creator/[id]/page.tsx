"use client";

import { use, useState } from "react";
import Link from "next/link";
import { creators, avatarGradients, coverGradients } from "@/lib/mockData";

export default function CreatorProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const creator = creators.find((c) => c.id === id) || creators[0];
    const index = creators.indexOf(creator);
    const [activeTab, setActiveTab] = useState("public");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const tabs = [
        { id: "public", label: "Público" },
        { id: "premium", label: "Premium" },
        { id: "shop", label: "Loja" },
        { id: "lives", label: "Lives" },
    ];

    return (
        <div className="pb-24">
            {/* Back Button */}
            <Link
                href="/"
                className="fixed top-4 left-4 z-50 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-all"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
            </Link>

            {/* Cover Image */}
            <div
                className="relative h-72 w-full"
                style={{ background: coverGradients[index % coverGradients.length] }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900" />

                {/* Live badge */}
                {creator.isLive && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-live-red/90 backdrop-blur-sm rounded-full px-4 py-1.5 animate-pulse-live">
                        <span className="w-2 h-2 bg-white rounded-full" />
                        <span className="text-xs font-bold text-white">AO VIVO</span>
                    </div>
                )}
            </div>

            {/* Profile Info */}
            <div className="px-4 -mt-16 relative z-10">
                {/* Avatar */}
                <div className="flex items-end gap-4 mb-4">
                    {creator.avatar ? (
                        <img
                            src={creator.avatar}
                            alt={creator.name}
                            className="w-28 h-28 rounded-full border-4 border-dark-900 object-cover shadow-xl"
                        />
                    ) : (
                        <div
                            className="w-28 h-28 rounded-full border-4 border-dark-900 flex items-center justify-center text-white font-bold text-3xl shadow-xl"
                            style={{ background: avatarGradients[index % avatarGradients.length] }}
                        >
                            {creator.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                    )}
                    <div className="flex-1 pb-2">
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-bold text-white">{creator.name}</h1>
                            {creator.isVerified && (
                                <div className="w-6 h-6 gradient-purple rounded-full flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            <span className="text-sm text-white/60">{creator.location}</span>
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="flex gap-6 mb-4">
                    <div className="text-center">
                        <div className="text-lg font-bold text-white">{(creator.subscribers / 1000).toFixed(1)}K</div>
                        <div className="text-xs text-white/40">Assinantes</div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold text-gold flex items-center gap-1">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                            {creator.rating}
                        </div>
                        <div className="text-xs text-white/40">{creator.reviews} reviews</div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold text-purple-400">{creator.categories.length}</div>
                        <div className="text-xs text-white/40">Categorias</div>
                    </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-white/60 mb-4">{creator.bio}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {creator.categories.map((cat) => (
                        <span key={cat} className="text-xs font-semibold text-purple-400 border border-purple-500/40 rounded-full px-3 py-1 bg-purple-500/10">
                            {cat}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mb-6">
                    <button
                        onClick={() => setIsSubscribed(!isSubscribed)}
                        className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${isSubscribed
                            ? "bg-dark-700 text-white/60 border border-white/10"
                            : "gradient-purple text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                            }`}
                    >
                        {isSubscribed ? "✓ Inscrito" : `Assinar · R$${creator.monthlyPrice}`}
                    </button>
                    {creator.isLive && (
                        <Link
                            href={`/live/${creator.id}`}
                            className="flex items-center gap-2 bg-live-red/90 text-white font-bold text-sm rounded-xl px-5 py-3 hover:bg-live-red transition-all animate-pulse-live"
                        >
                            <span className="w-2 h-2 bg-white rounded-full" />
                            Assistir Live
                        </Link>
                    )}
                </div>

                {/* Tabs */}
                <div className="flex border-b border-white/10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-3 text-sm font-semibold transition-all border-b-2 ${activeTab === tab.id
                                ? "text-purple-400 border-purple-500"
                                : "text-white/40 border-transparent hover:text-white/60"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-4 animate-fade-in">
                    {activeTab === "public" && (
                        <div className="grid grid-cols-3 gap-1.5">
                            {[...Array(9)].map((_, i) => (
                                <div
                                    key={i}
                                    className="aspect-square rounded-lg overflow-hidden"
                                    style={{ background: coverGradients[(i + index) % coverGradients.length] }}
                                >
                                    <div className="w-full h-full flex items-center justify-center text-white/20 text-2xl hover:text-white/40 transition-colors cursor-pointer">
                                        📸
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "premium" && (
                        <div className="grid grid-cols-3 gap-1.5">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="aspect-square rounded-lg overflow-hidden relative"
                                    style={{ background: coverGradients[(i + 3 + index) % coverGradients.length] }}
                                >
                                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.5">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                        <span className="text-[10px] text-white/40 mt-1">Premium</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "shop" && (
                        <div className="space-y-3">
                            {[
                                { name: "Ensaio Completo (20 fotos)", price: 15 },
                                { name: "Vídeo Exclusivo Behind-the-Scenes", price: 8 },
                                { name: "Pack Tutorial Profissional", price: 25 },
                            ].map((item) => (
                                <div key={item.name} className="bg-dark-700 rounded-xl p-4 flex items-center justify-between border border-white/5 hover:border-purple-500/20 transition-all">
                                    <div>
                                        <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                                        <span className="text-xs text-white/40">{item.price} créditos</span>
                                    </div>
                                    <button className="gradient-purple text-white text-xs font-bold rounded-lg px-4 py-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                                        Comprar
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "lives" && (
                        <div className="space-y-3">
                            {creator.isLive && (
                                <Link href={`/live/${creator.id}`} className="block bg-live-red/10 border border-live-red/30 rounded-xl p-4 hover:bg-live-red/20 transition-all">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-2 h-2 bg-live-red rounded-full animate-pulse" />
                                        <span className="text-sm font-bold text-live-red">AO VIVO AGORA</span>
                                    </div>
                                    <h4 className="text-sm font-semibold text-white">Stream do dia ✨</h4>
                                    <p className="text-xs text-white/40 mt-1">Começou há 15 minutos · 234 assistindo</p>
                                </Link>
                            )}
                            {[
                                { title: "Q&A com seguidores", date: "Amanhã, 20h", replays: false },
                                { title: "Tutorial ao vivo", date: "23/02, 19h", replays: true },
                            ].map((live) => (
                                <div key={live.title} className="bg-dark-700 rounded-xl p-4 border border-white/5">
                                    <h4 className="text-sm font-semibold text-white">{live.title}</h4>
                                    <p className="text-xs text-white/40 mt-1">{live.date}</p>
                                    {live.replays && (
                                        <span className="inline-block mt-2 text-[10px] text-purple-400 bg-purple-500/10 rounded-full px-2 py-0.5">
                                            Replay disponível · 5 créditos
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
