# SMC Alpha Trading Bot — Project Blueprint

## 1. Objective

Build a responsive web-based SMC trading analysis platform for:

- Top 70 Crypto
- Top 20 Forex pairs
- Top 5 Futures

The system will continuously monitor live market data and generate trade plans only when the defined SMC setup is fully confirmed.

---

## 2. Core SMC Setup

The primary trade sequence is:

Strong Liquidity
→ Strong Supply/Demand Zone
→ Strong Price Action
→ FVG / IFVG / Imbalance
→ Valid BOS
→ Retest
→ Retest Confirmation
→ Trade Plan

If any major confirmation is missing:

WAIT / NO TRADE

---

## 3. Strong Liquidity

The system should identify important liquidity areas such as:

- Previous swing high
- Previous swing low
- Equal highs
- Equal lows
- Major liquidity pools
- Previous day high
- Previous day low

Liquidity should be considered in the context of the selected timeframe.

---

## 4. Strong Supply / Demand Zone

A zone should not be created from every minor candle.

A valid zone should have:

- Clear price reaction
- Strong displacement/originating move
- Structural relevance
- Relationship with liquidity
- Sufficient price-action strength

Weak or insignificant zones should be ignored.

---

## 5. FVG / IFVG

After the strong zone and price action are identified, the system should detect:

- Fair Value Gap (FVG)
- Inverse Fair Value Gap (IFVG)
- Imbalance

The FVG/IFVG should support the setup and should NOT independently generate a trade.

---

## 6. BOS

Break of Structure must be meaningful.

Ignore:

- Tiny internal breaks
- Weak/no-displacement breaks
- Random candle highs/lows

A valid BOS should demonstrate meaningful structural displacement.

---

## 7. Retest

After BOS:

- Wait for price to return toward the relevant Supply/Demand Zone.
- Do not enter immediately after BOS.
- Zone touch alone is not enough.
- Retest must receive confirmation.

---

## 8. Dead Zone Rule

If price decisively breaks through a Supply/Demand Zone:

- Mark the zone as DEAD.
- Stop generating setups from that zone.
- Do not reuse the invalidated zone.
- Wait for a new strong Supply/Demand Zone.

---

## 9. Multi-Timeframe Analysis

Monitor:

- 1D
- 4H
- 1H
- 15M
- 5M

Higher timeframes provide directional context.

Lower timeframes provide execution confirmation.

If major timeframe structure is conflicting:

WAIT / NO TRADE

---

## 10. Trade Direction

Every valid setup must clearly state:

LONG

or

SHORT

The direction must be derived from the complete SMC sequence, not from a single indicator.

---

## 11. Entry

Entry should only become active after:

- Valid zone
- Strong price action
- FVG/IFVG/imbalance
- Valid BOS
- Retest
- Confirmation
- Directional alignment

---

## 12. Stop Loss

For LONG:

SL should be slightly below the relevant Demand Zone / structural invalidation point.

For SHORT:

SL should be slightly above the relevant Supply Zone / structural invalidation point.

SL must respect the actual market structure.

---

## 13. Take Profit

Take Profit should be placed slightly before the relevant opposing liquidity / swing target.

For LONG:

Target should generally be before the relevant swing high / liquidity.

For SHORT:

Target should generally be before the relevant swing low / liquidity.

The system must calculate risk/reward before producing a trade plan.

---

## 14. Break Even

The system must track:

- Entry
- Initial SL
- TP
- Break-even level
- Break-even status

When the predefined BE condition is reached, the trade record should reflect:

BE ACTIVE

---

## 15. Trade Plan Status

Possible setup statuses:

- SCANNING
- WAITING
- ZONE FOUND
- BOS CONFIRMED
- WAITING FOR RETEST
- RETEST CONFIRMED
- TRADE ACTIVE
- TP HIT
- SL HIT
- BREAK EVEN
- INVALIDATED
- DEAD ZONE

---

## 16. Live Chart

Every generated setup should have:

VIEW LIVE CHART

The chart should visually mark:

- Liquidity
- Supply/Demand Zone
- FVG/IFVG
- BOS
- Retest
- Entry
- SL
- TP
- Break Even
- Relevant swing
- LONG / SHORT direction

---

## 17. Why This Trade?

Each trade setup must provide a simple explanation.

Example:

1. Strong liquidity identified.
2. Liquidity was swept.
3. Strong Demand Zone formed.
4. Strong bullish displacement occurred.
5. FVG detected.
6. BOS confirmed.
7. Price returned to the zone.
8. Retest confirmed.
9. LONG trade plan generated.

The explanation must use actual detected market events.

---

## 18. False Trade Protection

The system should prioritize quality over quantity.

Do NOT generate a trade when:

- Liquidity context is weak.
- Supply/Demand zone is weak.
- BOS is insignificant.
- FVG is weak or irrelevant.
- Retest has not occurred.
- HTF structure strongly conflicts.
- Zone has already been invalidated.
- Risk/reward is unacceptable.
- The same setup was already generated.

When conditions are incomplete:

WAIT

---

## 19. Duplicate Protection

The same market setup should not generate repeated trade plans.

Each setup should have a unique identifier based on:

- Symbol
- Direction
- Timeframe
- Zone
- Setup timestamp

---

## 20. Dashboard

Main dashboard should include:

### Crypto
Top 70

### Forex
Top 20

### Futures
Top 5

Each market row should show:

- Symbol
- Logo
- Live Price
- 1D Trend
- 4H Trend
- 1H Trend
- 15M Trend
- 5M Trend
- SMC Status
- Long / Short / Wait
- Setup Status
- Risk/Reward
- Chart button

---

## 21. Market Categories

Use separate categories:

- Crypto
- Forex
- Futures

Performance and trade history must also be separated by category.

---

## 22. Trade History

Save:

- Symbol
- Category
- Direction
- Timeframe
- Entry
- SL
- TP
- Break Even
- Risk/Reward
- Setup reason
- Setup timestamp
- Trade status
- Final result
- Profit/Loss
- Duration

---

## 23. Performance

Category-wise statistics:

### Crypto
- Total setups
- Active trades
- TP hits
- SL hits
- Break-even trades
- Win rate
- Loss rate
- Total R

### Forex
Same metrics.

### Futures
Same metrics.

---

## 24. Background Monitoring

The backend should continue monitoring markets independently from the browser.

Browser closed:

Monitoring continues.

Browser reopened:

Latest saved state is loaded.

The system should prevent duplicate trades/setups after reconnecting.

---

## 25. Responsive Design

The website must work properly on:

- Desktop
- Laptop
- Tablet
- Mobile

Mobile interface must remain usable without requiring desktop mode.

---

## 26. UI

Required interface:

- Professional trading dashboard
- Dark mode
- Light mode
- Live market status
- Clean cards/tables
- Original market logos where legally/technically available
- Clear LONG / SHORT / WAIT states
- Clear setup status
- Live chart access
- Trade history
- Performance dashboard

---

## 27. Architecture

Initial architecture should remain simple.

Recommended structure:

frontend/
backend/
engine/
data/
charts/
README.md
project.md

Core responsibilities:

Frontend:
Dashboard, charts, trade history and performance.

Backend:
API, persistence and market-data communication.

Engine:
SMC detection and trade-plan generation.

Data:
Market symbols, configuration and saved trade records.

---

## 28. Important Development Rule

The system must NOT generate a trade simply because one condition is detected.

The complete setup should be validated in sequence:

Liquidity
→ Zone
→ Price Action
→ FVG/IFVG
→ BOS
→ Retest
→ Confirmation
→ HTF Alignment
→ Risk Check
→ Trade Plan

If the sequence is incomplete:

WAIT.

---

## 29. Initial Development Priority

Development should proceed in this order:

1. Project foundation
2. Market-data layer
3. Symbol/category management
4. Multi-timeframe analysis
5. SMC detection engine
6. Supply/Demand detection
7. Liquidity detection
8. FVG/IFVG detection
9. BOS detection
10. Retest detection
11. Confirmation filters
12. Risk management
13. Trade-plan engine
14. Live charts
15. Persistent trade history
16. Performance dashboard
17. Background monitoring
18. Mobile optimization

---

## 30. Safety / Execution Rule

Initial version should generate and track TRADE PLANS only.

Real-money automatic order execution should remain disabled until the signal engine has been tested and validated.
