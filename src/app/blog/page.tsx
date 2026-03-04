import Link from "next/link";
import { posts } from "./data";

export default function Blog() {
  return (
    <>
      <div style={{ height: 64 }} />
      <section style={{ padding: "80px 24px 60px", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: 16 }}>Ajatuksia</p>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>Blogi</h1>
        </div>
      </section>
      <section style={{ padding: "60px 24px 100px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: "block", padding: "40px", background: "#111", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", transition: "border-color 0.2s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c" }}>{post.category}</span>
                <span style={{ fontSize: 13, color: "#444" }}>{post.date}</span>
              </div>
              <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, marginBottom: 12, lineHeight: 1.2 }}>{post.title}</h2>
              <p style={{ fontSize: 15, color: "#888", lineHeight: 1.7, margin: "0 0 16px" }}>{post.excerpt}</p>
              <span style={{ fontSize: 14, color: "#c9a84c", fontWeight: 600 }}>Lue lisää →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
