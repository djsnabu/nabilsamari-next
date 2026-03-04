"use client";
import Image from "next/image";

const clients = [
  { name: "NoHo Partners Oyj", logo: "/logos/noho.png" },
  { name: "OmaSp Stadion", logo: "/logos/omaspstadion.png" },
  { name: "Night People Group", logo: null },
  { name: "Itä-Helsingin Ravintolat Oy", logo: null },
  { name: "Wall Invest", logo: null },
  { name: "Jolly Joker", logo: null },
  { name: "Kiva Media", logo: null },
];

// Duplicate for seamless loop
const track = [...clients, ...clients];

export default function ClientLogos() {
  return (
    <section style={{ padding: "64px 0", background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
      <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#444", marginBottom: 32 }}>
        Asiakkaita ja yhteistyökumppaneita
      </p>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{
          display: "flex",
          gap: 64,
          width: "max-content",
          animation: "marquee 30s linear infinite",
        }}>
          {track.map((client, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 48, flexShrink: 0 }}>
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={48}
                  style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.4, maxHeight: 48, width: "auto" }}
                />
              ) : (
                <span style={{ fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.25)", whiteSpace: "nowrap", letterSpacing: "0.02em" }}>
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
