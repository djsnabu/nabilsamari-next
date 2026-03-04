export default function Contact() {
  return (
    <>
      <div style={{ height: 64 }} />
      <section style={{ padding: "80px 24px 60px", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: 16 }}>Yhteydenotto</p>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 700 }}>Tehdään jotain hienoa yhdessä.</h1>
        </div>
      </section>
      <section style={{ padding: "60px 24px 100px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 18, color: "#888", lineHeight: 1.8, marginBottom: 40 }}>
              Onko sinulla projekti mielessä? Tarvitsetko apua tapahtumatuotannossa, web-kehityksessä, automaatioissa tai sisällöntuotannossa? Ota yhteyttä – vastataan nopeasti.
            </p>
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontSize: 12, color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Sähköposti</p>
              <a href="mailto:nabil.samari@gmail.com" style={{ fontSize: 18, color: "#c9a84c", fontWeight: 600 }}>nabil.samari@gmail.com</a>
            </div>
            <div>
              <p style={{ fontSize: 12, color: "#444", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>LinkedIn</p>
              <a href="https://www.linkedin.com/in/nabilsamari/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 18, color: "#c9a84c", fontWeight: 600 }}>linkedin.com/in/nabilsamari</a>
            </div>
          </div>
          <div>
            <form action="https://formspree.io/f/xpwzgkqv" method="POST" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, color: "#666", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Nimi</label>
                <input name="name" required placeholder="Matti Meikäläinen" style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, color: "#fff", fontSize: 15, outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, color: "#666", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Sähköposti</label>
                <input name="email" type="email" required placeholder="sinä@esimerkki.fi" style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, color: "#fff", fontSize: 15, outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, color: "#666", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Viesti</label>
                <textarea name="message" required rows={6} placeholder="Kerro projektistasi..." style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, color: "#fff", fontSize: 15, outline: "none", resize: "vertical" }} />
              </div>
              <button type="submit" style={{ padding: "16px 32px", background: "#c9a84c", color: "#000", fontWeight: 700, fontSize: 16, borderRadius: 4, border: "none", cursor: "pointer", transition: "opacity 0.2s" }}>
                Lähetä viesti →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
