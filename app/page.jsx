"use client";

import { useState } from "react";

const markets = {
  Crypto: [
    ["BTC", "Bitcoin"],
    ["ETH", "Ethereum"],
    ["SOL", "Solana"],
    ["BNB", "BNB"],
    ["XRP", "XRP"],
    ["ADA", "Cardano"],
    ["DOGE", "Dogecoin"],
    ["AVAX", "Avalanche"],
    ["LINK", "Chainlink"],
    ["DOT", "Polkadot"]
  ],
  Forex: [
    ["EURUSD", "Euro / US Dollar"],
    ["GBPUSD", "British Pound / US Dollar"],
    ["USDJPY", "US Dollar / Japanese Yen"],
    ["USDCHF", "US Dollar / Swiss Franc"],
    ["AUDUSD", "Australian Dollar / US Dollar"]
  ],
  Futures: [
    ["ES", "S&P 500 Futures"],
    ["NQ", "Nasdaq Futures"],
    ["YM", "Dow Futures"],
    ["GC", "Gold Futures"],
    ["CL", "Crude Oil Futures"]
  ]
};

const timeframes = ["1D", "4H", "1H", "15M", "5M"];

export default function Home() {
  const [category, setCategory] = useState("Crypto");
  const [selected, setSelected] = useState(null);

  const currentMarkets = markets[category];

  return (
    <main className="min-h-screen bg-[#07101d] text-white">
      <header className="border-b border-white/10 bg-[#0b1626]">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                SMC Alpha Trading Bot
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                Smart Money Concepts Market Scanner
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Scanner Online
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard title="Markets" value="95" subtitle="70 Crypto • 20 Forex • 5 Futures" />
          <StatCard title="Active Setups" value="0" subtitle="Waiting for confirmation" />
          <StatCard title="System Status" value="LIVE" subtitle="SMC engine monitoring" />
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b1626] p-4">
          <div className="flex flex-wrap gap-2">
            {Object.keys(markets).map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                  category === item
                    ? "bg-white text-black"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1626]">
          <div className="border-b border-white/10 px-4 py-4">
            <h2 className="text-lg font-semibold">{category} Scanner</h2>
            <p className="mt-1 text-xs text-slate-500">
              Multi-timeframe SMC analysis
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="border-b border-white/10 bg-white/[0.02] text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3">Market</th>
                  {timeframes.map((tf) => (
                    <th key={tf} className="px-4 py-3">
                      {tf}
                    </th>
                  ))}
                  <th className="px-4 py-3">SMC Status</th>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Chart</th>
                </tr>
              </thead>

              <tbody>
                {currentMarkets.map(([symbol, name]) => (
                  <tr
                    key={symbol}
                    className="border-b border-white/5 transition hover:bg-white/[0.03]"
                  >
                    <td className="px-4 py-4">
                      <div className="font-semibold">{symbol}</div>
                      <div className="text-xs text-slate-500">{name}</div>
                    </td>

                    {timeframes.map((tf) => (
                      <td key={tf} className="px-4 py-4">
                        <span className="rounded-lg bg-slate-500/10 px-2 py-1 text-xs text-slate-400">
                          WAIT
                        </span>
                      </td>
                    ))}

                    <td className="px-4 py-4">
                      <span className="rounded-lg bg-amber-500/10 px-2 py-1 text-xs text-amber-400">
                        SCANNING
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span className="text-slate-500">—</span>
                    </td>

                    <td className="px-4 py-4">
                      <button
                        onClick={() => setSelected({ symbol, name })}
                        className="rounded-lg bg-white/10 px-3 py-2 text-xs font-medium hover:bg-white/15"
                      >
                        View Chart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b1626] p-5">
          <h2 className="text-lg font-semibold">SMC Trade Logic</h2>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            {[
              "Strong Liquidity",
              "Supply / Demand",
              "Price Action",
              "FVG / IFVG",
              "BOS",
              "Retest",
              "Confirmation",
              "Trade Plan"
            ].map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-300">
                  {step}
                </span>
                {index < 7 && <span className="text-slate-600">→</span>}
              </div>
            ))}
          </div>
        </div>

        {selected && (
          <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">
                  {selected.symbol} — Live Chart
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  {selected.name}
                </p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="rounded-lg bg-white/10 px-3 py-2 text-xs hover:bg-white/15"
              >
                Close
              </button>
            </div>

            <div className="mt-5 flex h-72 items-center justify-center rounded-xl border border-dashed border-white/10 bg-black/20">
              <div className="text-center">
                <div className="text-sm font-medium text-slate-300">
                  Live chart will appear here
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  Liquidity → Zone → FVG → BOS → Retest → Entry
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function StatCard({ title, value, subtitle }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1626] p-5">
      <div className="text-sm text-slate-400">{title}</div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
      <div className="mt-1 text-xs text-slate-500">{subtitle}</div>
    </div>
  );
}
