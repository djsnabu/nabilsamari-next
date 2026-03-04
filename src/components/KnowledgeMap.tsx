"use client";
import { useState, useEffect } from "react";

const DOMAINS = [
  { id: "events", label: "Tapahtumatuotanto", color: "#FF6B35", skills: ["Festivaalien rakentaminen nollasta","Artistien bookkaus & sopimukset","Ääni- & valotekniikka","Sponsori- & yhteistyömyynti","Turvallisuus & viranomaisvelvoitteet","Myyntipaikkasopimusten hallinta","Tiimien koordinointi & työnjako"], emoji: "🎪" },
  { id: "tech", label: "Teknologia & Automaatio", color: "#00C9A7", skills: ["n8n-automaatiot","API-integraatiot","Projektinhallinta järjestelmät","Laskutuksen automatisointi","Digitaalinen infrastruktuuri","TypeScript","JavaScript","Astro","Next.js / React","HTML & CSS / SCSS","Shell & PowerShell","Dockerfile","Linux","macOS","Windows","VSCode","Neovim"], emoji: "⚡" },
  { id: "performance", label: "Esiintyminen & Viestintä", color: "#7B61FF", skills: ["17v juontajakokemus","DJ / muusikko","Kouluttaminen & webinaarit","Myyntitekstit & pitchit","Sosiaalisen median sisällöt"], emoji: "🎤" },
  { id: "business", label: "Liiketoiminta & Myynti", color: "#FF3366", skills: ["16v yrittäjäkokemus","B2B-myynti & tarjoukset","Yhteistyösopimusten neuvottelu","Hinnoittelu & budjetointi","Asiakashankinta & liidit","Markkinointi & brändistrategia"], emoji: "💼" },
  { id: "creative", label: "Luova tuotanto", color: "#FFB800", skills: ["Konseptien kehittäminen","Sisältömarkkinointi (blogit, some)","Videotuotanto","DJ-settien kuratointi","Tapahtumabrändäys","Valo- ja videokuvaus"], emoji: "🎨" },
];

const CONNECTIONS = [
  { from: "events", to: "tech", label: "Tapahtuma × Koodi", insight: "Nabil tuottaa festivaaleja ja rakentaa automaatioita – sama ihminen, sama projekti. Harvalla on molemmat: ymmärrys siitä mitä kentällä tapahtuu ja kyky rakentaa järjestelmät sen ympärille." },
  { from: "performance", to: "tech", label: "Lava × Logiikka", insight: "17 vuotta lavalla tarkoittaa, että teknologia ei ole teoriaa vaan työkalu jonka täytyy toimia paineessa. Hän osaa myös selittää monimutkaiset asiat selkeästi – oli kyse koulutuksesta, pitchistä tai käyttöönottopalaverista." },
  { from: "business", to: "creative", label: "Myynti × Luovuus", insight: "Konsepti syntyy, se myydään ja toteutetaan – saman katon alla. Ei erillistä luovaa tiimiä ja erillistä myyntitiimiä. Nabil vie idean asiakkaalle ja tekee sen valmiiksi." },
  { from: "events", to: "performance", label: "Tuottaja × Esiintyjä", insight: "Hän on ollut sekä lavalla että lavan takana. Tämä tarkoittaa käytännössä, että hän ymmärtää sekä esiintyjän että tuottajan tarpeet – ja pystyy toimimaan molemmissa rooleissa samassa projektissa." },
  { from: "tech", to: "business", label: "Rakentaja × Yrittäjä", insight: "Automaatiot jotka Nabil rakentaa eivät ole demoja – ne pyörivät hänen omassa liiketoiminnassaan ja asiakkaiden prosesseissa. 16 vuotta yrittäjänä tarkoittaa, että hän tietää mikä oikeasti säästää aikaa ja rahaa." },
];

const BLIND_SPOTS = [
  { area: "Data & Analytiikka", note: "Sinulla on dataa mutta ei systemaattista analytiikkaa. Iso vipuvarsi.", icon: "📊" },
  { area: "Skaalautuvat tuotteet", note: "Kaikki palvelupohjaista. Entä digitaalinen tuote, kurssi tai SaaS tapahtumatuottajille?", icon: "🚀" },
  { area: "Kansainvälistyminen", note: "Vahva Suomi-osaaminen. Neljä kieltä – olisiko aika laajentaa kansainvälisesti?", icon: "🌍" },
];

const positions: Record<string, { x: number; y: number }> = {
  events: { x: 300, y: 100 },
  tech: { x: 520, y: 200 },
  performance: { x: 80, y: 200 },
  business: { x: 440, y: 370 },
  creative: { x: 160, y: 370 },
};

export default function KnowledgeMap() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [activeConn, setActiveConn] = useState<number | null>(null);
  const [view, setView] = useState<"map" | "connections">("map");
  const [animIn, setAnimIn] = useState(false);

  useEffect(() => { setTimeout(() => setAnimIn(true), 100); }, []);

  const activeDomain = DOMAINS.find(d => d.id === activeNode);
  const activeConnObj = activeConn !== null ? CONNECTIONS[activeConn] : null;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#e0e0e0", padding: "24px 0" }}>
      {/* Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 24 }}>
        {[{ id: "map", label: "🗺 Kartta" }, { id: "connections", label: "⚡ Yhteydet" }].map(tab => (
          <button key={tab.id} onClick={() => { setView(tab.id as "map"|"connections"); setActiveNode(null); setActiveConn(null); }} style={{
            padding: "8px 16px", borderRadius: 20, border: view === tab.id ? "1px solid #7B61FF" : "1px solid rgba(255,255,255,0.1)",
            background: view === tab.id ? "rgba(123,97,255,0.12)" : "transparent",
            color: view === tab.id ? "#c4b5ff" : "#666", fontSize: 12, fontWeight: 600, cursor: "pointer",
          }}>{tab.label}</button>
        ))}
      </div>

      {view === "map" && (
        <div style={{ opacity: animIn ? 1 : 0, transition: "opacity 0.6s ease" }}>
          <svg viewBox="0 0 600 460" style={{ width: "100%", maxWidth: 600, margin: "0 auto", display: "block" }}>
            {CONNECTIONS.map((conn, i) => {
              const p1 = positions[conn.from], p2 = positions[conn.to];
              const d1 = DOMAINS.find(d => d.id === conn.from)!;
              const mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2;
              const isActive = activeConn === i;
              return (
                <g key={i} onClick={() => setActiveConn(activeConn === i ? null : i)} style={{ cursor: "pointer" }}>
                  <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
                    stroke={isActive ? d1.color : "rgba(255,255,255,0.08)"}
                    strokeWidth={isActive ? 2.5 : 1} strokeDasharray={isActive ? "none" : "4 6"} />
                  {isActive && (
                    <g transform={`translate(${mx},${my})`}>
                      <rect x={-55} y={-10} width={110} height={20} rx={10} fill="#1a1a2e" stroke={d1.color} strokeWidth={1} />
                      <text textAnchor="middle" dy={4} fill="#e0e0e0" style={{ fontSize: 9, fontWeight: 600 }}>{conn.label}</text>
                    </g>
                  )}
                </g>
              );
            })}
            {DOMAINS.map(domain => {
              const { x, y } = positions[domain.id];
              const isActive = activeNode === domain.id;
              return (
                <g key={domain.id} onClick={() => { setActiveNode(activeNode === domain.id ? null : domain.id); setActiveConn(null); }} style={{ cursor: "pointer" }}
                  transform={`translate(${x},${y}) scale(${isActive ? 1.15 : 1})`}>
                  <circle r={44} fill={domain.color + "18"} stroke={domain.color} strokeWidth={isActive ? 3 : 1.5}
                    style={{ filter: isActive ? `drop-shadow(0 0 12px ${domain.color}60)` : "none", transition: "all 0.3s" }} />
                  <text textAnchor="middle" dy={-8} style={{ fontSize: 28, pointerEvents: "none" }}>{domain.emoji}</text>
                  <text textAnchor="middle" dy={18} fill="#e0e0e0" style={{ fontSize: 11, fontWeight: 600, pointerEvents: "none" }}>{domain.label}</text>
                  <text textAnchor="middle" dy={32} fill={domain.color} style={{ fontSize: 10, opacity: 0.7, pointerEvents: "none" }}>{domain.skills.length} taitoa</text>
                </g>
              );
            })}
          </svg>

          {activeDomain && (
            <div style={{ marginTop: 16, padding: 20, borderRadius: 16, background: "rgba(255,255,255,0.04)", border: `1px solid ${activeDomain.color}30`, maxWidth: 600, margin: "16px auto 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 22 }}>{activeDomain.emoji}</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: activeDomain.color }}>{activeDomain.label}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {activeDomain.skills.map((skill, i) => (
                  <span key={i} style={{ padding: "6px 12px", borderRadius: 20, background: activeDomain.color + "15", border: `1px solid ${activeDomain.color}30`, color: activeDomain.color, fontSize: 12, fontWeight: 500 }}>{skill}</span>
                ))}
              </div>
            </div>
          )}

          {activeConnObj && (
            <div style={{ marginTop: 16, padding: 20, borderRadius: 16, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(123,97,255,0.3)", maxWidth: 600, margin: "16px auto 0" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#c4b5ff", marginBottom: 8 }}>⚡ {activeConnObj.label}</div>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "#bbb", margin: 0 }}>{activeConnObj.insight}</p>
            </div>
          )}

          {!activeDomain && !activeConnObj && (
            <p style={{ textAlign: "center", color: "#444", fontSize: 12, marginTop: 12, fontStyle: "italic" }}>Klikkaa solmua tai viivaa nähdäksesi tiedot</p>
          )}
        </div>
      )}

      {view === "connections" && (
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          {CONNECTIONS.map((conn, i) => {
            const d1 = DOMAINS.find(d => d.id === conn.from)!;
            const d2 = DOMAINS.find(d => d.id === conn.to)!;
            return (
              <div key={i} style={{ padding: 20, borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
                  <span style={{ padding: "4px 10px", borderRadius: 12, background: d1.color + "20", color: d1.color, fontSize: 11, fontWeight: 600 }}>{d1.emoji} {d1.label}</span>
                  <span style={{ color: "#555" }}>×</span>
                  <span style={{ padding: "4px 10px", borderRadius: 12, background: d2.color + "20", color: d2.color, fontSize: 11, fontWeight: 600 }}>{d2.emoji} {d2.label}</span>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "#bbb", margin: 0 }}>{conn.insight}</p>
              </div>
            );
          })}
        </div>
      )}


    </div>
  );
}
