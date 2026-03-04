const services = [
  {
    num: "01", emoji: "🎪", title: "Tapahtumatuotanto",
    desc: "Lähes 100 tapahtumaa tuotettuna – Pällkäneen Kesäpäivät (2000 hlö), OmaSp Stadionfest, NoHo Partners, Night People Group, Wall Invest. Koko ketju artistibookkingista lavapurkuun.",
    items: ["Festivaalien rakentaminen nollasta", "Artistien bookkaus & sopimukset", "Ääni- & valotekniikka", "Sponsori- & yhteistyömyynti", "Tiimien koordinointi", "Pällkäneen Kesäpäivät -festivaali"],
  },
  {
    num: "02", emoji: "🎬", title: "Valo- ja videokuvaus",
    desc: "Markkinointimateriaalia, tuotekuvausta, some-sisältöä ja tapahtumakuvausta. Referenssejä: Seinäjoen kauppakeskukset, NoHo Partnersin ravintolat, tapahtumat.",
    items: ["Tapahtumakuvaus", "Videotuotanto", "Tuotekuvaus", "Adobe Premiere Pro / Lightroom", "DaVinci Resolve", "Sosiaalisen median sisältö"],
  },
  {
    num: "03", emoji: "🌐", title: "Web-kehitys & AI",
    desc: "Viisi tuotannossa olevaa sivustoa: jollyjoker.fi, kivamedia.fi, niceevents.fi, djsnabu.com, palkaneenkesapaivat.fi. Rakennettuna oikeille tarpeille, ei templateille.",
    items: ["Next.js / Astro / React", "WordPress", "Cloudflare Pages", "Docker", "AI-integraatiot", "SEO-optimointi"],
  },
  {
    num: "04", emoji: "⚡", title: "Automaatiot & integraatiot",
    desc: "Keikkamyyntiputki, sopimukset, laskutus ja CRM – kaikki automaattisesti. Myös liidien hankinta-automaatio. Säästöjä dokumentoitu 300–10 000 €/kk.",
    items: ["n8n-automaatiot", "REST API -integraatiot", "CRM-automaatio (HubSpot / Odoo)", "Laskutus & sopimukset", "Liidien hankinta", "Taloushallinto-integraatiot"],
  },
];

export default function Services() {
  return (
    <>
      <div style={{ height: 64 }} />
      <section style={{ padding: "80px 24px 60px", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: 16 }}>Mitä teen</p>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 700 }}>Palvelut</h1>
        </div>
      </section>
      <section style={{ padding: "60px 24px 100px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {services.map((s, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, padding: "60px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", alignItems: "start" }}>
              <div>
                <span style={{ fontSize: 13, color: "#444", fontWeight: 600, marginRight: 16 }}>{s.num}</span>
                <span style={{ fontSize: 32 }}>{s.emoji}</span>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, margin: "16px 0 16px", letterSpacing: "-0.02em" }}>{s.title}</h2>
                <p style={{ fontSize: 16, color: "#888", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignContent: "flex-start" }}>
                {s.items.map((item, j) => (
                  <span key={j} style={{ fontSize: 13, color: "#aaa", padding: "8px 16px", borderRadius: 4, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
