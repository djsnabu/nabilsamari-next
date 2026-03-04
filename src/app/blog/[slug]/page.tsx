import { posts } from "../data";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <div style={{ height: 64 }} />
      <section style={{ padding: "80px 24px 40px", background: "#000" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Link href="/blog" style={{ fontSize: 13, color: "#555", marginBottom: 24, display: "inline-block", transition: "color 0.2s" }}>← Takaisin blogiin</Link>
          <div style={{ display: "flex", gap: 16, alignItems: "center", margin: "16px 0 24px", flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c" }}>{post.category}</span>
            <span style={{ fontSize: 13, color: "#444" }}>{post.date}</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{post.title}</h1>
          <p style={{ fontSize: 18, color: "#888", lineHeight: 1.7, marginTop: 16 }}>{post.excerpt}</p>
        </div>
      </section>
      <section style={{ padding: "40px 24px 100px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: 17, color: "#ccc", lineHeight: 1.9 }}>
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) return <h2 key={i} style={{ fontSize: 24, fontWeight: 700, margin: "40px 0 16px", color: "#fff" }}>{line.replace("## ", "")}</h2>;
              if (line.startsWith("- ")) return <li key={i} style={{ marginLeft: 20, marginBottom: 8, color: "#aaa" }}>{line.replace("- ", "")}</li>;
              if (line === "") return <br key={i} />;
              return <p key={i} style={{ marginBottom: 16, color: "#aaa" }}>{line}</p>;
            })}
          </div>
          <div style={{ marginTop: 60, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ fontSize: 13, color: "#555", marginBottom: 4 }}>Kirjoittanut</p>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#c9a84c" }}>Nabil Samari</p>
            </div>
            <Link href="/contact" style={{ padding: "12px 24px", background: "#c9a84c", color: "#000", fontWeight: 700, fontSize: 14, borderRadius: 4 }}>Ota yhteyttä</Link>
          </div>
        </div>
      </section>
    </>
  );
}
