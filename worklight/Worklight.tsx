"use client";

import React, { useState, useEffect } from "react";
const WA_LINK = `https://wa.me/6287736786969?text=Hi%20Worklight%2C%20I%27d%20like%20to%20discuss%20a%20project.`;

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

const SERVICES = [
  {
    num: "01",
    title: "Web & App Development",
    desc: "Scalable, high-performance web and mobile applications built with modern frameworks. From MVPs to enterprise-grade platforms.",
    tags: ["React", "Next.js", "React Native"],
  },
  {
    num: "02",
    title: "AI Integration",
    desc: "Embed intelligent features into your product — LLM pipelines, smart recommendations, document processing, and custom AI agents.",
    tags: ["OpenAI", "Claude", "LangChain"],
  },
  {
    num: "03",
    title: "Automation & n8n",
    desc: "End-to-end workflow automation that eliminates manual tasks. Connect your tools, trigger actions, and scale operations effortlessly.",
    tags: ["n8n", "Zapier", "Make"],
  },
  {
    num: "04",
    title: "Backend & API",
    desc: "Reliable server architecture, REST and GraphQL APIs, database design, and seamless third-party integrations.",
    tags: ["Node.js", "Python", "PostgreSQL"],
  },
  {
    num: "05",
    title: "AI Chatbots",
    desc: "Conversational AI for support, sales, and onboarding — trained on your data, integrated into your existing stack.",
    tags: ["RAG", "Fine-tuning", "Intercom"],
  },
  {
    num: "06",
    title: "Tech Consulting",
    desc: "Strategic guidance on architecture, stack selection, and product roadmap. We think before we build.",
    tags: ["Audit", "Roadmap", "Advisory"],
  },
];

const PROJECTS = [
  {
    title: "SaaS Analytics Dashboard",
    desc: "Real-time data visualization platform for a fintech startup. Handles 50k+ daily events with sub-second queries.",
    client: "Fintech · United States",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "#EAF3EE",
    dot: "#1A7A5E",
  },
  {
    title: "AI Customer Support System",
    desc: "LLM-powered support bot trained on 10k+ tickets. Resolved 72% of queries autonomously within 3 months.",
    client: "E-commerce · Australia",
    tags: ["OpenAI", "Python", "n8n"],
    color: "#EEF0FB",
    dot: "#4338CA",
  },
  {
    title: "Ops Automation Suite",
    desc: "Connected CRM, billing, email, and Slack into a unified automation layer. Saved 40+ hours/week for the team.",
    client: "Agency · United Kingdom",
    tags: ["n8n", "Zapier", "REST API"],
    color: "#FDF3EA",
    dot: "#B45309",
  },
  {
    title: "B2B Services Marketplace",
    desc: "Matching platform with AI-powered recommendations. Launched to 1,200 users in the first month.",
    client: "Marketplace · Singapore",
    tags: ["Next.js", "Supabase", "AI"],
    color: "#EAF3FB",
    dot: "#0369A1",
  },
];

const STEPS = [
  { num: "01", title: "Discovery Call", desc: "We listen first. Understand your goals, constraints, timeline, and budget. No pitch — just conversation." },
  { num: "02", title: "Proposal & Scope", desc: "Clear deliverables, fixed pricing, and a realistic timeline. No surprises, no scope creep." },
  { num: "03", title: "Build & Iterate", desc: "Weekly check-ins, demos, and progress reports. You're always in the loop." },
  { num: "04", title: "Launch & Support", desc: "Deployment handled end-to-end. Ongoing support available post-launch." },
];

const STACK = ["React", "Next.js", "Node.js", "Python", "OpenAI", "Claude AI", "n8n", "Supabase", "PostgreSQL", "AWS", "Vercel", "TypeScript"];

const TESTIMONIALS = [
  {
    quote: "Worklight delivered a production-ready platform in 6 weeks. Communication was seamless and the quality exceeded our expectations.",
    name: "James R.",
    role: "CTO, Fintech Startup — USA",
  },
  {
    quote: "The AI chatbot they built cut our support tickets by 70%. Their ability to understand business context alongside tech is rare.",
    name: "Sarah M.",
    role: "Head of Product — Australia",
  },
  {
    quote: "They automated our entire client onboarding flow with n8n. We went from 3 days to 4 hours. Remarkable outcome.",
    name: "Tom H.",
    role: "Operations Director — UK",
  },
];

const WaIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.849L.057 23.5l5.797-1.522A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.497-5.188-1.366l-.371-.22-3.44.903.918-3.352-.242-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

export default function WorklightSite() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#FAFAF9", color: "#111110", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; }
        a { text-decoration: none; color: inherit; }
        ::selection { background: #D1FAE5; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ticker { 0% { transform:translateX(0); } 100% { transform:translateX(-50%); } }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.5;transform:scale(0.85);} }
        .fu { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .d1{animation-delay:0.05s;} .d2{animation-delay:0.18s;} .d3{animation-delay:0.32s;} .d4{animation-delay:0.46s;}
        .svc-card { transition: box-shadow 0.2s, border-color 0.2s; }
        .svc-card:hover { box-shadow: 0 2px 20px rgba(17,17,16,0.07); border-color: rgba(17,17,16,0.18) !important; }
        .proj-card { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s; }
        .proj-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(17,17,16,0.12); }
        .wa-float { transition: transform 0.2s, box-shadow 0.2s; }
        .wa-float:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(37,211,102,0.4) !important; }
        .btn-wa { transition: opacity 0.2s, transform 0.15s; }
        .btn-wa:hover { opacity: 0.9; }
        .btn-wa:active { transform: scale(0.98); }
        .btn-ghost { transition: background 0.2s, border-color 0.2s; }
        .btn-ghost:hover { background: rgba(17,17,16,0.04) !important; }
        .navlink { position:relative; transition: color 0.15s; }
        .navlink::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:#111110; transition:width 0.2s; }
        .navlink:hover { color: #111110 !important; }
        .navlink:hover::after { width:100%; }
        .tpill { background:rgba(17,17,16,0.05); border-radius:100px; padding:3px 11px; font-size:11px; font-weight:500; color:#888680; }
        @media (max-width:900px) {
          .dn { display:none !important; }
          .show-mob { display:flex !important; }
          .grid-2 { grid-template-columns:1fr !important; }
          .grid-3 { grid-template-columns:1fr !important; }
          .process-flex { flex-direction:column !important; }
          .hero-stats { flex-wrap:wrap; gap:28px !important; }
        }
        @media (max-width:600px) {
          .grid-2-sm { grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* FLOATING WA */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="wa-float"
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 999,
          background: "#25D366", color: "#fff",
          borderRadius: 100, padding: "12px 20px 12px 14px",
          display: "flex", alignItems: "center", gap: 9,
          fontSize: 13, fontWeight: 600,
          boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
        }}>
        <WaIcon size={18} />
        Chat with us
      </a>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 64, padding: "0 6vw",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(250,250,249,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(17,17,16,0.07)" : "none",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.3s",
      }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22 }}>
          Work<span style={{ color: "#1A7A5E" }}>light</span>
        </span>

        {/* Desktop nav links only — WA button removed */}
        <div className="dn" style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} className="navlink"
              onClick={() => go(id)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#6B6860", fontWeight: 400, padding: 0 }}>
              {label}
            </button>
          ))}
        </div>

        <button className="show-mob"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5 }}
          onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ width: 22, height: 1.5, background: "#111", display: "block", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none", transition: "transform 0.2s" }} />
          <span style={{ width: 22, height: 1.5, background: "#111", display: "block", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ width: 22, height: 1.5, background: "#111", display: "block", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none", transition: "transform 0.2s" }} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", top: 64, inset: "64px 0 0", zIndex: 98, background: "#FAFAF9", padding: "24px 6vw 40px", borderBottom: "1px solid rgba(17,17,16,0.08)" }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} onClick={() => go(id)}
              style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", borderBottom: "1px solid rgba(17,17,16,0.06)", cursor: "pointer", fontSize: 20, color: "#111110", padding: "14px 0", fontFamily: "'Instrument Serif', serif" }}>
              {label}
            </button>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ marginTop: 28, display: "flex", alignItems: "center", justifyContent: "center", gap: 9, background: "#25D366", color: "#fff", borderRadius: 12, padding: "15px", fontSize: 15, fontWeight: 600 }}>
            <WaIcon size={18} /> Open WhatsApp
          </a>
        </div>
      )}

      {/* HERO */}
      <section style={{ minHeight: "100vh", padding: "130px 6vw 100px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="fu d1" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EDFAF4", border: "1px solid #A7DFBF", borderRadius: 100, padding: "6px 14px 6px 8px", width: "fit-content", marginBottom: 36 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1A7A5E", display: "inline-block", animation: "pulse 2.5s ease infinite" }} />
          <span style={{ fontSize: 12, color: "#1A7A5E", fontWeight: 500 }}>Available for new projects</span>
        </div>

        <h1 className="fu d2" style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(46px, 8vw, 100px)",
          lineHeight: 0.95, letterSpacing: "-2px",
          marginBottom: 32, maxWidth: 840,
        }}>
          We build digital<br />
          <em style={{ fontStyle: "italic", color: "#1A7A5E" }}>products that work.</em>
        </h1>

        <p className="fu d3" style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "#6B6860", maxWidth: 500, lineHeight: 1.8, marginBottom: 44, fontWeight: 300 }}>
          Full-service digital agency for web applications, AI integration, and business automation — built to international standards, delivered on time.
        </p>

        <div className="fu d4" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa"
            style={{ background: "#000000", color: "#fff", borderRadius: 10, padding: "14px 26px", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 9 }}>
            <WaIcon size={16} />
            Get Free Consultation!
          </a>
          <button onClick={() => go("work")} className="btn-ghost"
            style={{ background: "transparent", color: "#111110", border: "1px solid rgba(17,17,16,0.14)", borderRadius: 10, padding: "14px 22px", fontSize: 14, fontWeight: 400, cursor: "pointer" }}>
            View our work
          </button>
        </div>

        <div className="hero-stats fu d4" style={{ display: "flex", gap: 56, marginTop: 88, paddingTop: 40, borderTop: "1px solid rgba(17,17,16,0.08)" }}>
          {[["30+", "Projects delivered"], ["98%", "Client satisfaction"], ["5×", "Faster with AI"], ["Global", "Client reach"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-1px", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 13, color: "#9B9890", marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TICKER */}
      <div style={{ background: "#111110", padding: "13px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div style={{ display: "inline-flex", animation: "ticker 24s linear infinite" }}>
          {[...STACK, ...STACK].map((s, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", color: "rgba(250,250,249,0.4)", borderRight: "1px solid rgba(255,255,255,0.07)", padding: "0 28px" }}>{s}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" style={{ padding: "110px 6vw" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "#9B9890", marginBottom: 16, fontWeight: 500 }}>CAPABILITIES</div>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "-1px", lineHeight: 1.08 }}>What we do</h2>
          </div>
          <p style={{ fontSize: 15, color: "#6B6860", maxWidth: 380, lineHeight: 1.75, fontWeight: 300 }}>End-to-end digital services under one roof. One team, full accountability.</p>
        </div>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(17,17,16,0.07)", border: "1px solid rgba(17,17,16,0.07)", borderRadius: 16, overflow: "hidden" }}>
          {SERVICES.map((s) => (
            <div key={s.num} className="svc-card"
              style={{ background: "#FAFAF9", padding: "40px 36px", border: "1px solid transparent", cursor: "default" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 13, color: "#C9C6BF" }}>{s.num}</span>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "flex-end" }}>
                  {s.tags.map(t => <span key={t} className="tpill">{t}</span>)}
                </div>
              </div>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(17px,2vw,21px)", letterSpacing: "-0.3px", marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#6B6860", lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ padding: "110px 6vw", background: "#111110" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "rgba(250,250,249,0.22)", marginBottom: 16, fontWeight: 500 }}>PORTFOLIO</div>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "-1px", lineHeight: 1.08, color: "#FAFAF9" }}>Selected work</h2>
          </div>
          <p style={{ fontSize: 15, color: "rgba(250,250,249,0.36)", maxWidth: 360, lineHeight: 1.75, fontWeight: 300 }}>Delivered for clients across the US, UK, Australia, and Singapore.</p>
        </div>
        <div className="grid-2 grid-2-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {PROJECTS.map((p) => (
            <div key={p.title} className="proj-card"
              style={{ background: "#1A1A19", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(250,250,249,0.06)", cursor: "default" }}>
              <div style={{ height: 176, background: p.color, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: p.dot, opacity: 0.16 }} />
                  <div style={{ width: 68, height: 5, borderRadius: 3, background: p.dot, opacity: 0.13 }} />
                  <div style={{ width: 44, height: 5, borderRadius: 3, background: p.dot, opacity: 0.09 }} />
                </div>
                <span style={{ position: "absolute", top: 14, left: 14, background: p.dot, color: "#fff", borderRadius: 6, padding: "3px 10px", fontSize: 10, fontWeight: 600, letterSpacing: "0.04em" }}>DELIVERED</span>
              </div>
              <div style={{ padding: "22px 22px 26px" }}>
                <div style={{ fontSize: 11, color: "rgba(250,250,249,0.3)", marginBottom: 7, letterSpacing: "0.02em", fontWeight: 500 }}>{p.client}</div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 19, color: "#FAFAF9", marginBottom: 9, lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(250,250,249,0.42)", lineHeight: 1.65, marginBottom: 16, fontWeight: 300 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ background: "rgba(250,250,249,0.05)", border: "1px solid rgba(250,250,249,0.08)", borderRadius: 6, padding: "3px 9px", fontSize: 11, color: "rgba(250,250,249,0.45)", fontWeight: 500 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "110px 6vw" }}>
        <div style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "#9B9890", marginBottom: 16, fontWeight: 500 }}>HOW WE WORK</div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 4vw, 50px)", letterSpacing: "-1px", lineHeight: 1.08 }}>
            Transparent process,<br />predictable results.
          </h2>
        </div>
        <div className="process-flex" style={{ display: "flex", border: "1px solid rgba(17,17,16,0.09)", borderRadius: 16, overflow: "hidden" }}>
          {STEPS.map((s, i) => (
            <div key={s.num} style={{
              flex: 1, padding: "44px 32px",
              borderLeft: i > 0 ? "1px solid rgba(17,17,16,0.09)" : "none",
              background: i === 0 ? "#111110" : "#FAFAF9",
              color: i === 0 ? "#FAFAF9" : "#111110",
            }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 13, color: "#1A7A5E", marginBottom: 18, letterSpacing: "0.04em" }}>{s.num}</div>
              <div style={{ width: 22, height: 1.5, background: "#1A7A5E", marginBottom: 22 }} />
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, marginBottom: 12, lineHeight: 1.2 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: i === 0 ? "rgba(250,250,249,0.48)" : "#6B6860", lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "0 6vw 110px" }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "#9B9890", marginBottom: 16, fontWeight: 500 }}>CLIENT FEEDBACK</div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-1px" }}>What clients say</h2>
        </div>
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: "#FAFAF9", border: "1px solid rgba(17,17,16,0.09)", borderRadius: 14, padding: "32px 28px" }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, color: "#1A7A5E", lineHeight: 1, marginBottom: 20, opacity: 0.5 }}>"</div>
              <p style={{ fontSize: 14, color: "#3A3A38", lineHeight: 1.75, marginBottom: 28, fontWeight: 300 }}>{t.quote}</p>
              <div style={{ borderTop: "1px solid rgba(17,17,16,0.08)", paddingTop: 18 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#111110", marginBottom: 3 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: "#9B9890" }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: "0 6vw 96px" }}>
        <div style={{ background: "#111110", borderRadius: 20, padding: "80px 8vw", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, right: -80, width: 280, height: 280, borderRadius: "50%", background: "rgba(26,122,94,0.07)" }} />
          <div style={{ position: "absolute", bottom: -50, left: -50, width: 200, height: 200, borderRadius: "50%", background: "rgba(26,122,94,0.05)" }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.14em", color: "rgba(250,250,249,0.25)", marginBottom: 20, fontWeight: 500 }}>GET IN TOUCH</div>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 5vw, 62px)", letterSpacing: "-1.5px", lineHeight: 0.97, color: "#FAFAF9", marginBottom: 20 }}>
              Ready to build<br />something great?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(250,250,249,0.42)", marginBottom: 48, fontWeight: 300, maxWidth: 440, margin: "0 auto 48px" }}>
              Message us on WhatsApp and we'll respond within a few hours. No long forms, no waiting.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa"
                style={{ background: "#25D366", color: "#fff", borderRadius: 10, padding: "15px 30px", fontSize: 15, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 10 }}>
                <WaIcon size={18} />
                Chat on WhatsApp
              </a>
              <button onClick={() => go("work")} className="btn-ghost"
                style={{ background: "transparent", color: "rgba(250,250,249,0.65)", border: "1px solid rgba(250,250,249,0.13)", borderRadius: 10, padding: "15px 26px", fontSize: 15, fontWeight: 400, cursor: "pointer" }}>
                View our work
              </button>
            </div>
            <p style={{ marginTop: 28, fontSize: 13, color: "rgba(250,250,249,0.22)" }}>
              Direct line: <span style={{ color: "rgba(250,250,249,0.48)", fontWeight: 500 }}>+62 877 3678 6969</span>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 6vw 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, borderTop: "1px solid rgba(17,17,16,0.07)" }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20 }}>Work<span style={{ color: "#1A7A5E" }}>light</span></span>
        <span style={{ fontSize: 12, color: "#9B9890" }}>© 2025 Worklight. All rights reserved.</span>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {[
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "WhatsApp", href: WA_LINK, green: true },
            { label: "hello@worklight.io", href: "mailto:hello@worklight.io" },
          ].map(({ label, href, green }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 12, color: "#9B9890", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = green ? "#25D366" : "#111110")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9B9890")}>
              {label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}