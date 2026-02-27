"use client";

import { use, useState } from "react";
import Link from "next/link";
import { creators, avatarGradients, sampleChatMessages } from "@/lib/mockData";

export default function LivePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const creator = creators.find((c) => c.id === id) || creators[0];
    const index = creators.indexOf(creator);
    const [message, setMessage] = useState("");
    const [showDonate, setShowDonate] = useState(false);

    return (
        <div className="h-screen flex flex-col bg-black relative overflow-hidden">
            {/* Video Area (simulated) */}
            <div className="flex-1 relative" style={{
                background: `radial-gradient(ellipse at center, rgba(139, 47, 201, 0.3) 0%, rgba(13, 13, 13, 0.95) 70%)`
            }}>
                {/* Top Bar */}
                <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4">
                    <Link
                        href={`/creator/${creator.id}`}
                        className="flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-full pr-4 pl-1 py-1"
                    >
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm live-ring"
                        >
                            <div
                                className="w-full h-full rounded-full flex items-center justify-center"
                                style={{ background: avatarGradients[index % avatarGradients.length] }}
                            >
                                {creator.name.charAt(0)}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white">{creator.name}</p>
                            <p className="text-[10px] text-white/50">{creator.location}</p>
                        </div>
                    </Link>

                    <div className="flex items-center gap-2">
                        {/* Viewer Count */}
                        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.6">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span className="text-xs font-semibold text-white/80">234</span>
                        </div>

                        {/* Live badge */}
                        <div className="flex items-center gap-1 bg-live-red/90 rounded-full px-3 py-1.5 animate-pulse-live">
                            <span className="w-1.5 h-1.5 bg-white rounded-full" />
                            <span className="text-xs font-bold text-white">LIVE</span>
                        </div>

                        {/* Close */}
                        <Link
                            href="/"
                            className="w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Center Content — Animated circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full animate-pulse" style={{
                            background: avatarGradients[index % avatarGradients.length],
                            boxShadow: "0 0 60px rgba(168, 85, 247, 0.3)"
                        }}>
                            <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-4xl">
                                {creator.name.split(" ").map(n => n[0]).join("")}
                            </div>
                        </div>
                        <div className="absolute -inset-4 rounded-full border border-purple-500/20 animate-ping" style={{ animationDuration: "3s" }} />
                        <div className="absolute -inset-8 rounded-full border border-purple-500/10 animate-ping" style={{ animationDuration: "4s" }} />
                    </div>
                </div>

                {/* Chat Messages Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 pb-2 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="space-y-2 max-h-48 overflow-y-auto no-scrollbar">
                        {sampleChatMessages.map((msg) => (
                            <div key={msg.id} className="flex items-start gap-2 animate-fade-in">
                                <div className="shrink-0 w-7 h-7 rounded-full bg-dark-600 flex items-center justify-center text-[10px] text-white/60 font-bold">
                                    {msg.user.charAt(0)}
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-purple-400">{msg.user}</span>
                                    {msg.credits && (
                                        <span className="ml-1 text-[10px] text-gold bg-gold/10 rounded-full px-1.5 py-0.5">
                                            💎 {msg.credits}
                                        </span>
                                    )}
                                    <p className="text-sm text-white/80">{msg.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Actions */}
            <div className="bg-dark-900 border-t border-white/5 p-3">
                {/* Donation Panel */}
                {showDonate && (
                    <div className="mb-3 bg-dark-700 rounded-xl p-3 border border-purple-500/20 animate-slide-up">
                        <p className="text-xs text-white/40 mb-2 font-semibold">Enviar Doação</p>
                        <div className="flex gap-2">
                            {[5, 10, 25, 50].map((amount) => (
                                <button
                                    key={amount}
                                    className="flex-1 bg-dark-600 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 rounded-lg py-2 text-center transition-all"
                                >
                                    <div className="text-sm font-bold text-white">{amount}</div>
                                    <div className="text-[9px] text-white/30">créditos</div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex items-center gap-2">
                    {/* Chat Input */}
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Enviar mensagem..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-dark-700 border border-white/10 rounded-full pl-4 pr-10 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/30"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 gradient-purple rounded-full flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </div>

                    {/* Donate Button */}
                    <button
                        onClick={() => setShowDonate(!showDonate)}
                        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${showDonate
                                ? "gradient-purple shadow-lg shadow-purple-500/20"
                                : "bg-dark-700 border border-white/10 hover:border-purple-500/30"
                            }`}
                    >
                        <span className="text-lg">💎</span>
                    </button>

                    {/* Request Button */}
                    <button className="w-11 h-11 rounded-full bg-dark-700 border border-white/10 flex items-center justify-center hover:border-purple-500/30 transition-all">
                        <span className="text-lg">🎁</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
