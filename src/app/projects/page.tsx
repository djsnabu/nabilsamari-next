const projects = [
  {
    title: "Pällkäneen Kesäpäivät",
    category: "Festivaali",
    year: "2025",
    url: "https://palkaneenkesapaivat.fi",
    desc: "2000 hengen kesäfestivaali Pälkäneellä – rakennettu nollasta. Artistibookkaus, tuotanto, lipunmyynti, markkinointi ja tekninen toteutus. Next.js + Cloudflare Pages.",
    gradient: "linear-gradient(135deg, #FF6B35 0%, #c94b35 100%)",
    tech: ["Next.js", "Cloudflare Pages", "D1 Database"]
  },
  {
    title: "jollyjoker.fi",
    category: "Web-kehitys",
    year: "2024",
    url: "https://jollyjoker.fi",
    desc: "Verkkosivusto Jolly Jokerille. Räätälöity toteutus asiakkaan tarpeisiin.",
    gradient: "linear-gradient(135deg, #c9a84c 0%, #8b6914 100%)",
    tech: ["WordPress", "Custom theme"]
  },
  {
    title: "kivamedia.fi",
    category: "Web-kehitys",
    year: "2024",
    url: "https://kivamedia.fi",
    desc: "Kiva Median verkkosivusto. Astro-pohjainen staattinen sivusto, nopea ja hakukoneoptimoitu.",
    gradient: "linear-gradient(135deg, #00C9A7 0%, #007a65 100%)",
    tech: ["Astro", "Cloudflare Pages", "SCSS"]
  },
  {
    title: "niceevents.fi",
    category: "Web-kehitys",
    year: "2024",
    url: "https://niceevents.fi",
    desc: "Nice Eventsin yrityssivusto. Astro SSR, blogi, tapahtumakalenteri ja yhteydenottolomake.",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #4a3abf 100%)",
    tech: ["Astro", "Cloudflare Pages", "MDX"]
  },
  {
    title: "djsnabu.com",
    category: "Web-kehitys",
    year: "2024",
    url: "https://djsnabu.com",
    desc: "DJ Snabu – artisti- ja keikkavaraussivusto. Astro-pohjainen, nopea lataus ja mobiilioptimioitu.",
    gradient: "linear-gradient(135deg, #FF3366 0%, #991f3d 100%)",
    tech: ["Astro", "Cloudflare Pages", "Docker"]
  },
  {
    title: "Nice Events CRM",
    category: "Web-sovellus",
    year: "2024",
    url: null,
    desc: "Sisäinen CRM-järjestelmä asiakkuuksien, tarjousten ja projektien hallintaan. Astro SSR + PocketBase, self-hosted.",
    gradient: "linear-gradient(135deg, #FFB800 0%, #a07800 100%)",
    tech: ["Astro SSR", "PocketBase", "TypeScript", "Docker"]
  },
];

export default function Projects() {
  return (
    <>
      <div style={{ height: 64 }} />
      <section style={{ padding: "80px 24px 60px", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: 16 }}>Työnäytteitä</p>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>Projektit</h1>
        </div>
      </section>
      <section style={{ padding: "60px 24px 100px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          {projects.map((p, i) => (
            <div key={i} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column" }}>
              <div style={{ height: 180, background: p.gradient, display: "flex", alignItems: "flex-end", padding: 20 }}>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", background: "rgba(0,0,0,0.4)", padding: "4px 10px", borderRadius: 20, backdropFilter: "blur(4px)" }}>
                    {p.url.replace("https://", "")} ↗
                  </a>
                )}
              </div>
              <div style={{ padding: 28, background: "#111", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c" }}>{p.category}</span>
                  <span style={{ fontSize: 12, color: "#444" }}>{p.year}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, margin: 0, flex: 1 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                  {p.tech.map((t, j) => (
                    <span key={j} style={{ fontSize: 11, color: "#666", padding: "3px 8px", borderRadius: 4, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
