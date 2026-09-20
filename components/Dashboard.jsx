"use client";

import { useState } from "react";

const markets = {
  Crypto: [
    ["BTC","Bitcoin"],["ETH","Ethereum"],["SOL","Solana"],["BNB","BNB"],["XRP","XRP"],
    ["ADA","Cardano"],["DOGE","Dogecoin"],["AVAX","Avalanche"],["LINK","Chainlink"],["DOT","Polkadot"]
  ],
  Forex: [
    ["EURUSD","Euro / US Dollar"],["GBPUSD","British Pound / US Dollar"],
    ["USDJPY","US Dollar / Japanese Yen"],["USDCHF","US Dollar / Swiss Franc"],
    ["AUDUSD","Australian Dollar / US Dollar"]
  ],
  Futures: [
    ["ES","S&P 500 Futures"],["NQ","Nasdaq Futures"],["YM","Dow Futures"],
    ["GC","Gold Futures"],["CL","Crude Oil Futures"]
  ]
};

const timeframes = ["1D","4H","1H","15M","5M"];

export default function Dashboard() {
  const [category,setCategory] = useState("Crypto");
  const [selected,setSelected] = useState(null);

  return (
    <main className="page">
      <header className="header"><div className="container headerInner">
        <div><h1 className="title">SMC Alpha Trading Bot</h1><p className="subtitle">Smart Money Concepts Market Scanner</p></div>
        <div className="live"><span className="dot"/> Scanner Online</div>
      </div></header>

      <section className="container content">
        <div className="stats">
          <Stat title="Markets" value="95" sub="70 Crypto • 20 Forex • 5 Futures"/>
          <Stat title="Active Setups" value="0" sub="Waiting for confirmation"/>
          <Stat title="System Status" value="LIVE" sub="SMC engine monitoring"/>
        </div>

        <section className="panel">
          <div className="tabs">{Object.keys(markets).map(item =>
            <button key={item} className={`tab ${category===item?"active":""}`} onClick={()=>setCategory(item)}>{item}</button>
          )}</div>
          <div className="panelHead"><h2>{category} Scanner</h2><p className="small">Multi-timeframe SMC analysis</p></div>
          <div className="tableWrap"><table><thead><tr>
            <th>Market</th>{timeframes.map(tf=><th key={tf}>{tf}</th>)}<th>SMC Status</th><th>Plan</th><th>Chart</th>
          </tr></thead><tbody>
            {markets[category].map(([symbol,name])=><tr key={symbol}>
              <td><div className="symbol">{symbol}</div><div className="marketName">{name}</div></td>
              {timeframes.map(tf=><td key={tf}><span className="badge">WAIT</span></td>)}
              <td><span className="badge scan">SCANNING</span></td><td>—</td>
              <td><button className="button" onClick={()=>setSelected({symbol,name})}>View Chart</button></td>
            </tr>)}
          </tbody></table></div>
        </section>

        <section className="panel logic"><h2>SMC Trade Logic</h2><div className="logicSteps">
          {["Strong Liquidity","Supply / Demand","Price Action","FVG / IFVG","BOS","Retest","Confirmation","Trade Plan"].map(step =>
            <span className="step" key={step}>{step}</span>
          )}
        </div></section>

        {selected && <section className="panel chartPanel">
          <h2>{selected.symbol} — Live Chart</h2><p className="small">{selected.name}</p>
          <div className="chartBox"><div><strong>Live chart integration</strong><div className="small">Liquidity → Zone → FVG → BOS → Retest → Entry</div></div></div>
        </section>}
      </section>
    </main>
  );
}

function Stat({title,value,sub}) {
  return <div className="card"><div className="label">{title}</div><div className="value">{value}</div><div className="small">{sub}</div></div>;
}
