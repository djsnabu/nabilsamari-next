const projects = [
  { title: "Pällkäneen Kesäpäivät", category: "Festivaali", year: "2015–", desc: "Oma kesäfestivaali Pälkäneellä. Artistien bookkaus, tuotanto, markkinointi ja käytännön toteutus.", gradient: "linear-gradient(135deg, #FF6B35, #c94b35)" },
  { title: "Nice Events", category: "Tapahtumatuotanto", year: "2010–", desc: "Yritystapahtumat, konsertit ja tilaisuudet. Kokonaispalvelu suunnittelusta toteutukseen.", gradient: "linear-gradient(135deg, #c9a84c, #8b6914)" },
  { title: "Web-kehitys & automaatiot", category: "Teknologia", year: "2020–", desc: "Verkkosivustoja ja automaatioita yrityksille. Next.js, WordPress, n8n, API-integraatiot.", gradient: "linear-gradient(135deg, #00C9A7, #007a65)" },
  { title: "Valo- ja videokuvaus", category: "Sisällöntuotanto", year: "2018–", desc: "Tapahtuma- ja yrityskuvaus. Videotuotanto, editointi ja sosiaalisen median sisältö.", gradient: "linear-gradient(135deg, #7B61FF, #4a3abf)" },
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
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: 24 }}>
          {projects.map((p, i) => (
            <div key={i} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ height: 240, background: p.gradient }} />
              <div style={{ padding: 32, background: "#111" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c" }}>{p.category}</span>
                  <span style={{ fontSize: 13, color: "#444" }}>{p.year}</span>
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
