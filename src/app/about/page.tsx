import KnowledgeMap from "@/components/KnowledgeMap";

const experience = [
  { period: "2010 – nykyhetki", title: "Yrittäjä / Creative Technologist", company: "Nice Events (Kivat Tapahtumat Oy)", desc: "Perusti ja rakentaa edelleen omaa tapahtuma- ja teknologiayhtiötä. Asiakkaina yritykset, artistit ja ravintolat. Vastaa myynnistä, tuotannosta, web-kehityksestä ja automaatioista. Perusti Pällkäneen Kesäpäivät -festivaalin." },
  { period: "2021 – 2024", title: "Tapahtuma- ja markkinointipäällikkö", company: "Night People Group Oy (Wall Invest)", desc: "Vastasi koko ravintolaketjun tapahtumista ja digitaalisesta markkinoinnista. Otti käyttöön markkinoinnin automaatiot, koulutti tiimin ja rakensi prosessit skaalautuviksi." },
  { period: "2008 – nykyhetki", title: "Muusikko, DJ & juontaja", company: "Freelance", desc: "Kitaristi mm. HesaÄijässä, DJ-keikkoja ja juontamista ympäri Suomea. Esiintynyt mm. OmaSp Stadionfestillä. 17+ vuotta lavalla on opettanut enemmän ihmisten lukemisesta kuin mikään kurssi." },
  { period: "2008 – 2017", title: "Ammattikitaristi", company: "HesaÄijä", desc: "9 vuotta ammattikitaristina yhdessä Suomen tunnetuimmista iskelmäyhtyeistä. Satoja keikkoja ympäri Suomen – isoista lavoista intiimeihin klubeihin. Antoi vankan pohjan esiintymiselle, paineensietokyvylle ja ihmisten kanssa toimimiselle." },
];

const skills = [
  { cat: "Web & Tekniikka", items: ["WordPress", "Docker", "DNS", "Cloudflare", "Next.js", "React"] },
  { cat: "Automaatiot", items: ["n8n", "Zapier", "REST API", "Webhooks", "Make"] },
  { cat: "Markkinointi", items: ["Google Ads", "Meta Business Suite", "TikTok", "SEO", "Sähköpostimarkkinointi"] },
  { cat: "Luovat työkalut", items: ["Adobe Photoshop", "Premiere Pro", "Lightroom", "DaVinci Resolve"] },
  { cat: "Liiketoiminta", items: ["HubSpot", "Odoo", "Trello", "Notion", "Netvisor", "Procountor"] },
  { cat: "Kielet", items: ["Suomi (äidinkieli)", "Englanti (sujuva)", "Arabia (sujuva)", "Venäjä (sujuva)"] },
];

export default function About() {
  return (
    <>
      <div style={{ height: 64 }} />

      {/* HERO */}
      <section style={{ padding: "80px 24px 60px", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: 16 }}>Tietoa minusta</p>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 800 }}>
            Yrittäjä, muusikko ja teknologia-entusiasti.
          </h1>
        </div>
      </section>

      {/* BIO */}
      <section style={{ padding: "60px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontSize: 20, lineHeight: 1.8, color: "#ccc" }}>
            Olen Nabil Samari. Olen tuottanut lähes 100 tapahtumaa, rakentanut kuusi verkkosivustoa ja automatisoinut liiketoimintaprosesseja joista osa säästää 10 000 € kuussa. Seinäjoelta käsin, mutta töissä ympäri Suomen.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.8, color: "#888", marginTop: 24 }}>
            Minua ei tarvitse valita luovuuden ja tekniikan väliltä – tuon molemmat samaan pakettiin. Olen yhtä lailla kotona festivaalilavan takapuolella kuin terminaalissa tai asiakasneuvottelussa. Puhun sujuvasti suomea, englantia, arabiaa ja venäjää.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={{ padding: "80px 24px", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: 48 }}>Kokemus</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {experience.map((e, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, padding: "40px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div>
                  <span style={{ fontSize: 13, color: "#c9a84c", fontWeight: 600 }}>{e.period}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{e.title}</h3>
                  <p style={{ fontSize: 14, color: "#c9a84c", marginBottom: 12 }}>{e.company}</p>
                  <p style={{ fontSize: 15, color: "#888", lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KNOWLEDGE MAP */}
      <section style={{ padding: "80px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: 16 }}>Osaaminen</h2>
          <p style={{ fontSize: 15, color: "#666", marginBottom: 40 }}>Interaktiivinen osaamiskartta – klikkaa solmuja</p>
          <KnowledgeMap />
        </div>
      </section>

      {/* SKILLS GRID */}
      <section style={{ padding: "80px 24px", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: 48 }}>Työkalut & teknologiat</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {skills.map((s, i) => (
              <div key={i} style={{ padding: 24, background: "#111", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)" }}>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: "#c9a84c", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>{s.cat}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.items.map((item, j) => (
                    <span key={j} style={{ fontSize: 13, color: "#aaa", padding: "4px 10px", borderRadius: 20, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
