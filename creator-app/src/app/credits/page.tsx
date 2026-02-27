"use client";

import TopBar from "@/components/TopBar";
import { creditPackages } from "@/lib/mockData";

export default function CreditsPage() {
    return (
        <div className="pb-24">
            <TopBar />
            <div className="h-16" />

            <div className="px-4 pt-4">
                {/* Balance Hero */}
                <div className="gradient-purple rounded-2xl p-6 mb-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
                    <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
                    <div className="relative z-10 text-center">
                        <p className="text-sm text-white/70 mb-2">Seu Saldo</p>
                        <h1 className="text-5xl font-bold text-white mb-1">1,250</h1>
                        <p className="text-sm text-white/60">créditos disponíveis</p>
                        <p className="text-xs text-white/40 mt-2">≈ R$ 625,00 em valor</p>
                    </div>
                </div>

                {/* Credit Packages */}
                <h2 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3">
                    Comprar Créditos
                </h2>
                <div className="space-y-3 mb-8">
                    {creditPackages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`relative bg-dark-700 rounded-xl p-4 border transition-all hover:border-purple-500/40 cursor-pointer ${pkg.popular
                                    ? "border-purple-500/40 shadow-lg shadow-purple-500/10"
                                    : "border-white/5"
                                }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-2.5 right-4 gradient-purple text-white text-[10px] font-bold rounded-full px-3 py-0.5">
                                    MAIS POPULAR
                                </div>
                            )}
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-bold text-white">{pkg.credits} créditos</span>
                                        {pkg.bonus && (
                                            <span className="text-xs text-green bg-green/10 rounded-full px-2 py-0.5 font-semibold">
                                                {pkg.bonus}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-white/40 mt-1">
                                        R$ {(pkg.price / pkg.credits).toFixed(2)} por crédito
                                    </p>
                                </div>
                                <button className={`text-sm font-bold rounded-xl px-5 py-2.5 transition-all ${pkg.popular
                                        ? "gradient-purple text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                                        : "bg-dark-600 text-white/80 border border-white/10 hover:bg-dark-500"
                                    }`}>
                                    R$ {pkg.price.toFixed(2)}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Payment Methods */}
                <h2 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3">
                    Formas de Pagamento
                </h2>
                <div className="grid grid-cols-3 gap-3 mb-8">
                    {[
                        { name: "Cartão", icon: "💳" },
                        { name: "Pix", icon: "⚡" },
                        { name: "Boleto", icon: "📄" },
                    ].map((method) => (
                        <button
                            key={method.name}
                            className="bg-dark-700 rounded-xl p-4 text-center border border-white/5 hover:border-purple-500/20 transition-all"
                        >
                            <div className="text-2xl mb-1">{method.icon}</div>
                            <span className="text-xs text-white/60 font-medium">{method.name}</span>
                        </button>
                    ))}
                </div>

                {/* Transaction History */}
                <h2 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3">
                    Histórico Recente
                </h2>
                <div className="space-y-2">
                    {[
                        { desc: "Assinatura — Mila Kunis", credits: -10, date: "Hoje" },
                        { desc: "Doação na Live — Elena", credits: -5, date: "Ontem" },
                        { desc: "Compra de pacote", credits: 25, date: "18/02" },
                        { desc: "Pack de fotos — Sarah", credits: -15, date: "17/02" },
                        { desc: "Compra de pacote", credits: 50, date: "15/02" },
                    ].map((tx, i) => (
                        <div key={i} className="bg-dark-700 rounded-xl p-3 flex items-center justify-between border border-white/5">
                            <div>
                                <p className="text-sm text-white/80">{tx.desc}</p>
                                <p className="text-xs text-white/30">{tx.date}</p>
                            </div>
                            <span className={`text-sm font-bold ${tx.credits > 0 ? "text-green" : "text-white/50"}`}>
                                {tx.credits > 0 ? "+" : ""}{tx.credits}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="text-xs text-white/20 text-center mt-6">
                    Créditos nunca expiram · Suporte 24h
                </p>
            </div>
        </div>
    );
}
