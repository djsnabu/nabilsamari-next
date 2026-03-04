import Link from "next/link";
import { EtherealShadow } from "@/components/ui/etheral-shadow";

const services = [
  { emoji: "🎪", title: "Tapahtumatuotanto", desc: "Lähes 100 tapahtumaa – pienistä yritystilaisuuksista 2000 hengen festivaaleihin. Töitä tehty NoHo Partnersille, Night People Groupille, Wall Investille ja OmaSp Stadionfestille." },
  { emoji: "🎬", title: "Valo- ja videokuvaus", desc: "Markkinointimateriaalia, tuotekuvausta, some-sisältöä ja tapahtumakuvausta. Referensseinä Seinäjoen kauppakeskukset ja NoHo Partnersin ravintolat." },
  { emoji: "🌐", title: "Web-kehitys & AI", desc: "Verkkosivustoja, web-sovelluksia ja tekoälyratkaisuja. Modernit teknologiat, käyttäjälähtöinen suunnittelu." },
  { emoji: "⚡", title: "Automaatiot & integraatiot", desc: "Keikkamyynti, sopimukset, laskutus ja CRM pyörivät automaattisesti. Dokumentoituja säästöjä 300–10 000 €/kk." },
];

const stats = [
  { value: "~100", label: "Tuotettua tapahtumaa" },
  { value: "2000", label: "Hengen festivaali" },
  { value: "300–10k€", label: "Säästöjä/kk automaatioilla" },
];

const blogPosts = [
  { slug: "festivaali-nollasta", title: "Miten rakensin festivaalin nollasta", date: "2026-02-15", category: "Tapahtumat" },
  { slug: "ai-automaatio-arjessa", title: "AI ja automaatio yrityksen arjessa", date: "2026-01-28", category: "Teknologia" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#000" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <EtherealShadow color="rgba(180,150,80,0.8)" animation={{ scale: 80, speed: 70 }} noise={{ opacity: 0.5, scale: 1 }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: 800 }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: 20 }}>Creative Technologist</p>
          <h1 style={{ fontSize: "clamp(52px, 10vw, 120px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, color: "#fff", marginBottom: 24 }}>
            Nabil<br />Samari
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
            Lähes 100 tapahtumaa tuotettuna. Viisi verkkosivustoa käytössä. Automaatiot jotka säästävät 300–10 000 €/kk. Ja ihminen joka osaa puhua sekä koodille että asiakkaalle.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ padding: "14px 32px", background: "#c9a84c", color: "#000", fontWeight: 700, fontSize: 15, borderRadius: 4, transition: "opacity 0.2s" }}>
              Ota yhteyttä
            </Link>
            <Link href="/projects" style={{ padding: "14px 32px", background: "transparent", color: "#fff", fontWeight: 600, fontSize: 15, borderRadius: 4, border: "1px solid rgba(255,255,255,0.2)" }}>
              Katso projektit
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "100px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 60 }}>Palvelut</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {services.map((s, i) => (
              <div key={i} style={{ padding: 32, background: "#111", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", transition: "border-color 0.2s" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{s.emoji}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "#fff" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "80px 24px", background: "#000", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 40 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(48px, 8vw, 80px)", fontWeight: 800, color: "#c9a84c", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 14, color: "#666", marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section style={{ padding: "100px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Blogi</h2>
            <Link href="/blog" style={{ fontSize: 14, color: "#c9a84c", fontWeight: 600 }}>Kaikki kirjoitukset →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {blogPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: "block", padding: 32, background: "#111", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", transition: "border-color 0.2s" }}>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c" }}>{post.category}</span>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "12px 0 8px", lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontSize: 13, color: "#555", margin: 0 }}>{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 24px", background: "#000", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ fontSize: 13, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Projekti, avoin paikka tai yhteistyö?</p>
          <a href="mailto:nabil.samari@gmail.com" style={{ fontSize: "clamp(28px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#fff", display: "block", marginBottom: 40, transition: "color 0.2s" }}>
            nabil.samari@gmail.com
          </a>
          <Link href="/contact" style={{ padding: "16px 40px", background: "#c9a84c", color: "#000", fontWeight: 700, fontSize: 16, borderRadius: 4 }}>
            Ota yhteyttä
          </Link>
        </div>
      </section>
    </>
  );
}
