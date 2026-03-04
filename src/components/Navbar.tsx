"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em", color: "#c9a84c" }}>
          NS
        </Link>
        {/* Desktop */}
        <div style={{ display: "flex", gap: 32 }} className="hidden-mobile">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: 14, fontWeight: 500,
              color: pathname === l.href ? "#c9a84c" : "#999",
              transition: "color 0.2s",
            }}>
              {l.label}
            </Link>
          ))}
        </div>
        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: 22 }} className="show-mobile">
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div style={{ background: "#0f0f0f", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontSize: 16, color: pathname === l.href ? "#c9a84c" : "#aaa" }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
      <style>{`
        @media (min-width: 768px) { .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </nav>
  );
}
