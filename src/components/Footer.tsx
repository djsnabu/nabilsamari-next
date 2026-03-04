"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px 24px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <p style={{ color: "#666", fontSize: 13, marginBottom: 8 }}>Projekti mielessä?</p>
          <a href="mailto:nabil.samari@gmail.com" style={{ fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={e => (e.currentTarget.style.color = "#fff")}>
            nabil.samari@gmail.com
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24 }}>
          <p style={{ color: "#444", fontSize: 13 }}>© 2025 Nabil Samari</p>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="https://www.linkedin.com/in/nabilsamari/" target="_blank" rel="noopener noreferrer" style={{ color: "#555", fontSize: 13, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={e => (e.currentTarget.style.color = "#555")}>LinkedIn</a>
            <Link href="/contact" style={{ color: "#555", fontSize: 13 }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
