"use client";

import TopBar from "@/components/TopBar";
import Link from "next/link";

export default function ProfilePage() {
    return (
        <div className="pb-24">
            <TopBar />
            <div className="h-16" />

            <div className="px-4 pt-4">
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl"
                        style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
                    >
                        R
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white">Rodrigo</h1>
                        <p className="text-sm text-white/40">@rodrigo.creator</p>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-purple-400 bg-purple-500/10 rounded-full px-2 py-0.5 border border-purple-500/20">
                                Premium Member
                            </span>
                        </div>
                    </div>
                </div>

                {/* Credits Card */}
                <Link href="/credits" className="block mb-6">
                    <div className="gradient-purple rounded-2xl p-5 relative overflow-hidden group hover:shadow-xl hover:shadow-purple-500/20 transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-6 -translate-x-6" />
                        <div className="relative z-10">
                            <p className="text-sm text-white/70 mb-1">Saldo de Créditos</p>
                            <h2 className="text-3xl font-bold text-white mb-3">1,250</h2>
                            <div className="flex items-center gap-2">
                                <span className="text-xs bg-white/20 rounded-full px-3 py-1 font-medium">
                                    Recarregar →
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-dark-700 rounded-xl p-3 text-center border border-white/5">
                        <div className="text-lg font-bold text-white">5</div>
                        <div className="text-xs text-white/40">Assinaturas</div>
                    </div>
                    <div className="bg-dark-700 rounded-xl p-3 text-center border border-white/5">
                        <div className="text-lg font-bold text-white">23</div>
                        <div className="text-xs text-white/40">Favoritos</div>
                    </div>
                    <div className="bg-dark-700 rounded-xl p-3 text-center border border-white/5">
                        <div className="text-lg font-bold text-white">142</div>
                        <div className="text-xs text-white/40">Compras</div>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="space-y-2">
                    {[
                        { icon: "📦", label: "Minhas Compras", desc: "Fotos, vídeos e replays", href: "#" },
                        { icon: "💜", label: "Assinaturas Ativas", desc: "5 criadores", href: "#" },
                        { icon: "⭐", label: "Favoritos", desc: "23 criadores salvos", href: "#" },
                        { icon: "💳", label: "Carteira de Créditos", desc: "Histórico e recarga", href: "/credits" },
                        { icon: "🕐", label: "Lives Assistidas", desc: "Histórico de lives", href: "#" },
                        { icon: "⚙️", label: "Configurações", desc: "Conta, notificações, privacidade", href: "#" },
                        { icon: "📧", label: "Suporte", desc: "Central de ajuda", href: "#" },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-4 bg-dark-700 rounded-xl p-4 border border-white/5 hover:border-purple-500/20 transition-all group"
                        >
                            <span className="text-xl">{item.icon}</span>
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                                    {item.label}
                                </h3>
                                <p className="text-xs text-white/40">{item.desc}</p>
                            </div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </Link>
                    ))}
                </div>

                {/* Sign Out */}
                <button className="w-full mt-6 py-3 text-sm font-semibold text-live-red/70 hover:text-live-red transition-colors">
                    Sair da Conta
                </button>
            </div>
        </div>
    );
}
