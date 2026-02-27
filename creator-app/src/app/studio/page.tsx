"use client";

import TopBar from "@/components/TopBar";

export default function StudioPage() {
    const metrics = [
        { label: "Ganhos do Mês", value: "R$ 2.450,00", icon: "💰", change: "+12%", color: "text-green" },
        { label: "Novos Assinantes", value: "84", icon: "👥", change: "+23%", color: "text-green" },
        { label: "Visualizações", value: "12.4K", icon: "👁️", change: "+8%", color: "text-green" },
        { label: "Rating Médio", value: "4.9", icon: "⭐", change: "+0.1", color: "text-gold" },
    ];

    const recentActivity = [
        { type: "sub", text: "Novo assinante: Pedro_BR", time: "2m atrás" },
        { type: "credit", text: "Doação de 10 créditos de Ana_RJ", time: "15m atrás" },
        { type: "view", text: "Seu vídeo atingiu 1K views", time: "1h atrás" },
        { type: "sale", text: "Pack vendido para Lucas_SP", time: "3h atrás" },
        { type: "live", text: "Live teve 234 espectadores", time: "1 dia atrás" },
    ];

    return (
        <div className="pb-24">
            <TopBar />
            <div className="h-16" />

            <div className="px-4 pt-4">
                <h1 className="text-2xl font-bold text-white mb-1">Studio</h1>
                <p className="text-sm text-white/40 mb-6">Gerencie seu conteúdo e métricas</p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {metrics.map((m) => (
                        <div key={m.label} className="bg-dark-700 rounded-xl p-4 border border-white/5 hover:border-purple-500/20 transition-all group">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xl">{m.icon}</span>
                                <span className={`text-xs font-semibold ${m.color}`}>{m.change}</span>
                            </div>
                            <div className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                                {m.value}
                            </div>
                            <div className="text-xs text-white/40 mt-1">{m.label}</div>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <button className="bg-live-red/20 border border-live-red/30 rounded-xl p-4 text-center hover:bg-live-red/30 transition-all group">
                        <div className="text-2xl mb-2">🎥</div>
                        <span className="text-sm font-bold text-white group-hover:text-live-red transition-colors">
                            Iniciar Live
                        </span>
                    </button>
                    <button className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-4 text-center hover:bg-purple-500/30 transition-all group">
                        <div className="text-2xl mb-2">📤</div>
                        <span className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                            Upload
                        </span>
                    </button>
                </div>

                {/* Badges / Gamification */}
                <div className="mb-6">
                    <h2 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3">Seus Selos</h2>
                    <div className="flex gap-3 overflow-x-auto no-scrollbar">
                        {[
                            { name: "Verificada", icon: "✅", active: true },
                            { name: "Top Seller", icon: "🏆", active: true },
                            { name: "Popular", icon: "🔥", active: false },
                            { name: "Rising Star", icon: "🌟", active: false },
                            { name: "Live Queen", icon: "👑", active: false },
                        ].map((badge) => (
                            <div
                                key={badge.name}
                                className={`shrink-0 flex flex-col items-center gap-1.5 p-3 rounded-xl border ${badge.active
                                        ? "bg-purple-500/10 border-purple-500/30"
                                        : "bg-dark-700 border-white/5 opacity-40"
                                    }`}
                            >
                                <span className="text-2xl">{badge.icon}</span>
                                <span className="text-[10px] font-semibold text-white/70 whitespace-nowrap">{badge.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Revenue Chart Placeholder */}
                <div className="mb-6">
                    <h2 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3">Receita Semanal</h2>
                    <div className="bg-dark-700 rounded-xl p-4 border border-white/5">
                        <div className="flex items-end gap-1 h-32">
                            {[35, 52, 45, 78, 62, 90, 85].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                    <div
                                        className="w-full rounded-t-lg gradient-purple transition-all hover:opacity-80"
                                        style={{ height: `${h}%` }}
                                    />
                                    <span className="text-[9px] text-white/30">
                                        {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][i]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div>
                    <h2 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3">Atividade Recente</h2>
                    <div className="space-y-2">
                        {recentActivity.map((activity, i) => (
                            <div key={i} className="bg-dark-700 rounded-xl p-3 flex items-center gap-3 border border-white/5 hover:border-purple-500/10 transition-all">
                                <div className="w-8 h-8 rounded-full bg-dark-600 flex items-center justify-center text-sm">
                                    {activity.type === "sub" && "👤"}
                                    {activity.type === "credit" && "💎"}
                                    {activity.type === "view" && "👁️"}
                                    {activity.type === "sale" && "🛒"}
                                    {activity.type === "live" && "🎥"}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-white/80">{activity.text}</p>
                                    <p className="text-xs text-white/30">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
