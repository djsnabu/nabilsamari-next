"use client";
import Image from "next/image";

const clients = [
  { name: "NoHo Partners Oyj", logo: "/logos/noho.png" },
  { name: "OmaSp Stadion", logo: "/logos/omaspstadion.png" },
  { name: "Night People Group", logo: null },
  { name: "Jolly Joker", logo: "/logos/jollyjoker.png" },
  { name: "Itä-Helsingin Ravintolat Oy", logo: null },
  { name: "Wall Invest", logo: null },
  { name: "Kiva Media", logo: null },
  { name: "HesaÄijä", logo: "/logos/hesaaija.jpg" },
  { name: "Nice Events", logo: null },
  { name: "Pällkäneen Kesäpäivät", logo: null },
];

const track = [...clients, ...clients, ...clients];

export default function ClientLogos() {
  return (
    <section style={{
      padding: "56px 0",
      background: "#000",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      overflow: "hidden",
    }}>
      <p style={{
        textAlign: "center", fontSize: 11, fontWeight: 700,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: "#333", marginBottom: 32,
      }}>
        Asiakkaita &amp; yhteistyökumppaneita
      </p>
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Left fade */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to right, #000, transparent)", zIndex: 2, pointerEvents: "none" }} />
        {/* Right fade */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to left, #000, transparent)", zIndex: 2, pointerEvents: "none" }} />

        <div style={{
          display: "flex",
          gap: 72,
          width: "max-content",
          animation: "marquee-rtl 40s linear infinite",
          alignItems: "center",
        }}>
          {track.map((client, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", height: 48, flexShrink: 0,
            }}>
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={48}
                  style={{
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.35,
                    maxHeight: 48,
                    width: "auto",
                  }}
                />
              ) : (
                <span style={{
                  fontSize: 14, fontWeight: 700,
                  color: "rgba(255,255,255,0.2)",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontFamily: "Inter, sans-serif",
                }}>
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
