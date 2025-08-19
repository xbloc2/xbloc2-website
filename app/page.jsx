"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import {
  Flame,
  Factory,
  ShieldCheck,
  ClipboardList,
  Calculator as CalcIcon,
  FileText,
  HardHat,
  LineChart,
  Ruler,
  Building2,
  Play,
  BookOpen,
  Image as ImageIcon,
  X as CloseIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/**
 * Xbloc² Landing Page — Next.js + Tailwind
 * Brand: Primary #203c79, Accent #e52634
 * Static assets:
 *   - /public/xbloc2-logo.svg
 *   - /public/icons/* (your uploaded icons)
 *   - /public/gallery/* (you will upload images/clips)
 */

export default function Xbloc2LandingPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <ProofBar />
      <CTACluster />
      <AudienceTabs />
      <Gallery />
      <ValueTiles />
      <Compare />
      <DosePacks />
      <Calculator />
      <RFQ />
      <Footer />
    </main>
  );
}

/* --------------------------------- Shared -------------------------------- */

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function BrandWordmark() {
  return (
    <div className="flex items-center">
      <img
        src="/xbloc2-logo.svg"
        alt="Xbloc²"
        className="h-9 w-auto"
        draggable={false}
      />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <BrandWordmark />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-700">
          <a href="#audiences" className="hover:text-neutral-900">Solutions</a>
          <a href="#why" className="hover:text-neutral-900">Why AAC</a>
          <a href="#gallery" className="hover:text-neutral-900">Gallery</a>
          <a href="#calc" className="hover:text-neutral-900">Calculator</a>
          <a href="#rfq" className="hover:text-neutral-900">Contact</a>
        </nav>
        <a
          href="#rfq"
          className="rounded-xl bg-[#203c79] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#193060] transition"
        >
          Request a Technical Consultation
        </a>
      </Container>
    </header>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section className="relative w-full overflow-hidden border-b">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/xbloc2-logo.svg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/Building-project_2.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,74,214,0.70)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="grid gap-5 sm:gap-6 md:gap-10 py-10 sm:py-14 md:py-20 md:grid-cols-2 md:items-start">
          {/* Card 1 - Content */}
          <div className="rounded-3xl bg-neutral-900/65 ring-1 ring-white/15 backdrop-blur-md p-5 sm:p-6 md:p-8 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Fire rated walls<br className="hidden sm:block" /> in one trade.
            </h1>

            <p className="mt-3 text-base sm:text-lg text-white/90">
              AAC panels and blocks with ready dose packs. Up to 4 hour UL-rated
              assemblies. Single wythe. Fewer trades. Faster close-in.
            </p>

            {/* CTAs */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#rfq"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-[#203c79] bg-white shadow-md hover:shadow-lg hover:bg-white/95 transition"
              >
                Start Your Project Assessment
              </a>
              <a
                href="#resources"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white/95 ring-1 ring-white/25 hover:bg-white/10 transition"
              >
                Download the Technical Brochure
              </a>
            </div>

            {/* Bullets */}
            <ul className="mt-5 grid gap-2 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white" />
                Non combustible envelope
              </li>
              <li className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-[#ff6b6b]" />
                Up to 4 hour fire rating
              </li>
              <li className="flex items-center gap-2">
                <HardHat className="h-4 w-4 text-white" />
                One inspection path
              </li>
            </ul>
          </div>

          {/* Card 2 - Stats */}
          <div className="rounded-3xl bg-neutral-900/55 ring-1 ring-white/15 backdrop-blur-md p-5 md:p-6 lg:p-7 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] md:justify-self-end w-full md:w-[460px] lg:w-[520px] xl:w-[560px]">
            <div className="grid gap-4 sm:grid-cols-2">
              <HeroStat label="Install speed" value="Fewer trades" icon={<Factory className="h-4 w-4 text-white" />} />
              <HeroStat label="Fire rating" value="Up to 4h" icon={<Flame className="h-4 w-4 text-white" />} />
              <HeroStat label="Typical cost" value="$3.12+/sf*" icon={<LineChart className="h-4 w-4 text-white" />} />
              <HeroStat label="Inspection" value="Single path" icon={<ClipboardList className="h-4 w-4 text-white" />} />
            </div>
            <p className="mt-4 text-xs text-white/75">
              * Example material + labor snapshot for thin cladding. Project conditions vary. Verify with engineering.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroStat({ label, value, icon }) {
  return (
    <div className="rounded-2xl ring-1 ring-white/15 bg-white/5 p-4 shadow-sm">
      <div className="flex items-center gap-2 text-white/75">
        {icon}
        <span className="text-[11px] uppercase tracking-wide">{label}</span>
      </div>
      <div className="mt-1.5 text-xl md:text-2xl font-bold text-white">{value}</div>
    </div>
  );
}

/* ------------------------------ Proof Strip ------------------------------- */

function ProofBar() {
  const items = [
    { icon: <ShieldCheck className="h-4 w-4" />, label: "UL assemblies" },
    { icon: <FileText className="h-4 w-4" />, label: "ASTM backed" },
    { icon: <Ruler className="h-4 w-4" />, label: "TMS 402/602" },
    { icon: <Building2 className="h-4 w-4" />, label: "ACI guidance" },
  ];
  return (
    <section className="border-b bg-neutral-50/60">
      <Container className="flex flex-wrap items-center justify-center gap-4 py-4 sm:gap-6">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm"
          >
            {it.icon}
            <span>{it.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}

/* ------------------------------- CTA Cluster ------------------------------ */

function CTACluster() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CTAButton href="#rfq" label="Request a Technical Consultation" />
          <CTAButton href="#rfq" label="Get Design Support" variant="outline" />
          <CTAButton href="#resources" label="Specify Xbloc² for Your Project" variant="ghost" />
          <CTAButton href="#rfq" label="Start Your Project Assessment" accent />
        </div>
      </Container>
    </section>
  );
}

function CTAButton({ href, label, variant = "solid", accent = false }) {
  const base = "rounded-2xl px-5 py-3 text-sm font-semibold shadow flex items-center justify-center";
  const styles = {
    solid: `${accent ? "bg-[#e52634]" : "bg-[#203c79]"} text-white hover:opacity-90`,
    outline: "border border-[#203c79] text-[#203c79] hover:bg-[#203c79]/5",
    ghost: "border border-transparent text-[#203c79] hover:bg-[#203c79]/5",
  }[variant];
  return (
    <a href={href} className={`${base} ${styles}`}>{label}</a>
  );
}

/* ------------------------------ Audience Tabs ----------------------------- */

const AUDIENCE_TABS = [
  { key: "Builders", icon: "/icons/builders.svg" },
  { key: "Installers", icon: "/icons/installers.svg" },
  { key: "Architects", icon: "/icons/architects.svg" },
  { key: "Homeowners", icon: "/icons/homeowners.svg" },
];

const AUDIENCE_CARDS = {
  Builders: [
    { title: "Proven and compliant systems", body: "UL assemblies aligned with ASTM, TMS, and ACI guidance." },
    { title: "Strong and solid", body: "Single wythe AAC for rigid, robust walls and shafts." },
    { title: "Quality and speed", body: "Fewer trades. One inspection path. Faster close-in." },
    { title: "Fire resistant", body: "Up to 4-hour assemblies for code required separations." },
  ],
  Installers: [
    { title: "Strong and solid", body: "Accurate modules with predictable handling on site." },
    { title: "Quality and speed", body: "Straightforward install flow with minimal steps." },
    { title: "Fire resistant", body: "Meets rated wall requirements with simple details." },
    { title: "Sustainable", body: "Lower embodied mass vs conventional alternatives." },
  ],
  Architects: [
    { title: "Proven and compliant systems", body: "Reference UL U-series and detail with CAD files." },
    { title: "Strong and solid", body: "Robust assemblies that simplify envelope coordination." },
    { title: "Energy efficient", body: "Thermal and acoustic benefits built into the wall." },
    { title: "Sustainable", body: "Material efficiency and lifecycle performance." },
  ],
  Homeowners: [
    { title: "Strong and solid", body: "Quiet, sturdy walls that feel finished out of the box." },
    { title: "Energy efficient", body: "Comfortable interiors with fewer thermal bridges." },
    { title: "Noise reduction", body: "Acoustic mass for calmer rooms and hallways." },
    { title: "Design versatility", body: "Accepts common finishes for clean interiors and exteriors." },
  ],
};

function AudienceTabs() {
  const [active, setActive] = useState("Builders");

  return (
    <section id="audiences" className="py-16 sm:py-20">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Solutions by audience</h2>
          <a href="#rfq" className="hidden sm:inline-block rounded-xl border border-[#203c79] px-4 py-2 text-sm font-semibold text-[#203c79] hover:bg-[#203c79]/5">
            Get Design Support
          </a>
        </div>

        {/* Tabs */}
        <div className="mt-6 overflow-x-auto">
          <div className="inline-flex gap-2 rounded-2xl border bg-white p-2 shadow-sm">
            {AUDIENCE_TABS.map((t) => {
              const isActive = active === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    isActive ? "bg-[#203c79] text-white" : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {/* Optional icon files you placed in /public/icons/ */}
                  <img src={t.icon} alt="" className="h-4 w-4" />
                  {t.key}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCE_CARDS[active].map((c) => (
            <div key={c.title} className="rounded-3xl border p-6 shadow-sm">
              <div className="flex items-center gap-2 text-neutral-500">
                <ImageIcon className="h-5 w-5" />
                <span className="text-xs uppercase tracking-wide">For {active}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-neutral-700">{c.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- Gallery --------------------------------- */

const GALLERY_ITEMS = [
  // Replace with your uploads in /public/gallery/
  { src: "/gallery/placement-crew-001.jpg", alt: "Panel placement with 3-person crew", tag: "Installers" },
  { src: "/gallery/facade-finished-002.webp", alt: "Finished facade close-up", tag: "Builders" },
  { src: "/gallery/shaftwall-003.jpg", alt: "AAC shaftwall assembly detail", tag: "Architects" },
  { src: "/gallery/plant-qc-004.jpg", alt: "Manufacturing QC check", tag: "Builders" },
  { src: "/gallery/interior-quiet-005.jpg", alt: "Quiet interior partition", tag: "Homeowners" },
  { src: "/gallery/fire-demo-006.jpg", alt: "Fire rating demo setup", tag: "Builders" },
  { src: "/gallery/placement-clip-007.mp4", alt: "Placement time-lapse", tag: "Installers", type: "video" },
  { src: "/gallery/finish-skim-008.jpg", alt: "Skim and finish step", tag: "Installers" },
  { src: "/gallery/section-detail-009.jpg", alt: "Section detail for spec review", tag: "Architects" },
  { src: "/gallery/exterior-010.webp", alt: "Exterior wall under daylight", tag: "Homeowners" },
];

const GALLERY_FILTERS = ["All", "Builders", "Installers", "Architects", "Homeowners"];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const items = useMemo(
    () => (filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.tag === filter)),
    [filter]
  );

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);

  // Keyboard controls for lightbox
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <section id="gallery" className="py-16 sm:py-20 border-t border-b bg-neutral-50/50">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Photo gallery</h2>
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-neutral-600">
            <span>Tap a tile to open</span>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {GALLERY_FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3 py-1 text-sm font-semibold ${
                  active ? "bg-[#203c79] text-white" : "text-[#203c79] hover:bg-[#203c79]/5"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {items.map((it, i) => (
            <figure
              key={it.src}
              className="mb-4 overflow-hidden break-inside-avoid rounded-2xl border bg-white shadow-sm cursor-zoom-in"
              onClick={() => openAt(i)}
            >
              {it.type === "video" ? (
                <video src={it.src} className="w-full h-auto" muted playsInline preload="metadata" />
              ) : (
                <img src={it.src} alt={it.alt} className="w-full h-auto" loading="lazy" />
              )}
              <figcaption className="p-3 text-sm text-neutral-700">{it.alt}</figcaption>
            </figure>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={close}
        >
          <button
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
          >
            <CloseIcon className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <button
            className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div className="max-w-6xl w-[92vw] max-h-[82vh]" onClick={(e) => e.stopPropagation()}>
            {items[index]?.type === "video" ? (
              <video
                src={items[index].src}
                className="max-h-[82vh] w-full rounded-xl"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={items[index].src}
                alt={items[index].alt}
                className="max-h-[82vh] w-full object-contain rounded-xl"
              />
            )}
            <div className="mt-3 text-center text-sm text-white/80">{items[index].alt}</div>
          </div>
        </div>
      )}
    </section>
  );
}

/* --------------------------------- Why AAC -------------------------------- */

function ValueTiles() {
  const tiles = [
    {
      title: "Faster build",
      desc: "Single wythe walls and shafts. Remove multi-layer fire walls from the critical path.",
      icon: <Factory className="h-5 w-5" />,
    },
    {
      title: "Safer envelope",
      desc: "Non combustible. Up to 4-hour assemblies. Wet area ready and mold resistant.",
      icon: <Flame className="h-5 w-5" />,
    },
    {
      title: "Lower total cost",
      desc: "Competitive material. Fewer steps. Lower energy over the life of the building.",
      icon: <LineChart className="h-5 w-5" />,
    },
  ];
  return (
    <section id="why" className="py-16 md:py-24">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight">
          Why AAC with Xbloc<sup className="relative top-[-0.3em] text-[0.6em]">2</sup>
        </h2>
        <p className="mt-2 max-w-3xl text-neutral-700">
          Technical. Code aligned. Straightforward install. We keep it simple and fast for builders, GCs, and design teams.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t) => (
            <div key={t.title} className="rounded-3xl border p-6 shadow-sm">
              <div className="flex items-center gap-2 text-neutral-500">
                {t.icon}
                <span className="text-xs uppercase tracking-wide">Benefit</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-neutral-700">{t.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- Comparison ------------------------------- */

function Compare() {
  const rows = [
    { label: "Fire rating", aac: "Up to 4h", gypsum: "2–4h with layers" },
    { label: "Assembly type", aac: "Single wythe", gypsum: "Multi-layer" },
    { label: "Inspections", aac: "Single path", gypsum: "Multiple" },
    { label: "Wet area ready", aac: "Yes", gypsum: "Often no" },
    { label: "Crew complexity", aac: "Fewer trades", gypsum: "More trades" },
    { label: "Schedule risk", aac: "Lower", gypsum: "Higher" },
  ];
  return (
    <section className="border-y bg-neutral-50/50 py-16" aria-labelledby="compare-heading">
      <Container>
        <h2 id="compare-heading" className="text-3xl font-bold tracking-tight">AAC fire walls vs gypsum systems</h2>
        <p className="mt-2 max-w-3xl text-neutral-700">
          Typical differences shown for planning. Confirm final assemblies and details with your engineer and AHJ.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#203c79] text-white">
              <tr>
                <th className="p-4">Criterion</th>
                <th className="p-4">AAC (U-series)</th>
                <th className="p-4">Gypsum shaftwall</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b last:border-b-0">
                  <td className="p-4 font-medium text-neutral-800">{r.label}</td>
                  <td className="p-4">{r.aac}</td>
                  <td className="p-4">{r.gypsum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- Dose Packs ------------------------------ */

function DosePacks() {
  const items = [
    { title: "Thinset upgrade", points: ["Higher compressive strength", "Better flexural performance", "Low permeability"] },
    { title: "Stucco + finish", points: ["Cleaner bond to AAC", "Fast cure profile", "No special equipment"] },
    { title: "Repair + patch", points: ["Field friendly", "Strong adhesion", "Consistent results"] },
  ];
  return (
    <section className="py-16" aria-labelledby="dose-heading">
      <Container>
        <h2 id="dose-heading" className="text-3xl font-bold tracking-tight">
          Xbloc<sup className="relative top-[-0.3em] text-[0.6em]">2</sup> dose packs
        </h2>
        <p className="mt-2 max-w-3xl text-neutral-700">
          Ready-to-use admixture packs that boost performance in thinset, stucco, repair, and finishes. No special gear.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card) => (
            <div key={card.title} className="rounded-3xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-neutral-700">
                {card.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#203c79]" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- Calculator ------------------------------ */

function Calculator() {
  const [wallArea, setWallArea] = useState(10000); // sf
  const [panelLen, setPanelLen] = useState(8); // ft
  const [panelHeight, setPanelHeight] = useState(2); // ft
  const [wastePct, setWastePct] = useState(5); // %
  const [matCostSf, setMatCostSf] = useState(3.12); // $/sf
  const [laborSf, setLaborSf] = useState(4.5); // $/sf

  const panelArea = useMemo(() => panelLen * panelHeight, [panelLen, panelHeight]);
  const count = useMemo(
    () => Math.ceil((wallArea / Math.max(panelArea, 0.01)) * (1 + wastePct / 100)),
    [wallArea, panelArea, wastePct]
  );
  const materialCost = useMemo(() => wallArea * matCostSf, [wallArea, matCostSf]);
  const laborCost = useMemo(() => wallArea * laborSf, [wallArea, laborSf]);
  const total = materialCost + laborCost;

  return (
    <section id="calc" className="border-y bg-neutral-50/50 py-16" aria-labelledby="calc-heading">
      <Container>
        <div className="flex items-center justify-between gap-6">
          <h2 id="calc-heading" className="text-3xl font-bold tracking-tight">AAC wall calculator</h2>
          <div className="hidden md:flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-semibold text-neutral-700">
            <CalcIcon className="h-4 w-4" /> Budgeting tool only
          </div>
        </div>
        <p className="mt-2 max-w-3xl text-neutral-700">
          Quick takeoffs for planning. Adjust the inputs to match local pricing and panel modules.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="rounded-3xl border bg-white p-6 shadow-sm lg:col-span-2">
            <h3 className="text-lg font-semibold">Inputs</h3>
            <div className="mt-4 grid gap-4">
              <NumberField label="Wall area (sf)" value={wallArea} onChange={setWallArea} step={100} />
              <div className="grid grid-cols-2 gap-4">
                <NumberField label="Panel length (ft)" value={panelLen} onChange={setPanelLen} step={1} />
                <NumberField label="Panel height (ft)" value={panelHeight} onChange={setPanelHeight} step={0.5} />
              </div>
              <NumberField label="Waste (%)" value={wastePct} onChange={setWastePct} step={1} />
              <div className="grid grid-cols-2 gap-4">
                <CurrencyField label="Material $/sf" value={matCostSf} onChange={setMatCostSf} step={0.1} />
                <CurrencyField label="Labor $/sf" value={laborSf} onChange={setLaborSf} step={0.1} />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm lg:col-span-3">
            <h3 className="text-lg font-semibold">Results</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <KPI label="Panel area (sf)" value={panelArea.toFixed(2)} />
              <KPI label="Estimated panels" value={Intl.NumberFormat().format(count)} />
              <KPI label="Material cost" value={toUSD(materialCost)} />
              <KPI label="Labor cost" value={toUSD(laborCost)} />
              <KPI label="Total" value={toUSD(total)} highlight />
            </div>
            <p className="mt-4 text-xs text-neutral-500">
              Assumes rectangular area and simple layout. Complex openings and staging not included. Verify final takeoff.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function KPI({ label, value, highlight = false }) {
  return (
    <div className={`rounded-2xl border p-4 shadow-sm ${highlight ? "bg-[#203c79] text-white" : "bg-white"}`}>
      <div className={`text-xs uppercase tracking-wide ${highlight ? "text-neutral-200" : "text-neutral-500"}`}>{label}</div>
      <div className={`mt-1 text-2xl font-bold tabular-nums ${highlight ? "text-white" : "text-neutral-900"}`}>{value}</div>
    </div>
  );
}

function NumberField({ label, value, onChange, step = 1 }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-neutral-700">{label}</span>
      <input
        type="number"
        step={step}
        value={Number.isFinite(value) ? value : 0}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full rounded-xl border px-3 py-2 text-sm shadow-sm outline-none ring-0 focus:border-[#203c79]"
      />
    </label>
  );
}

function CurrencyField({ label, value, onChange, step = 0.1 }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-neutral-700">{label}</span>
      <div className="mt-1 flex items-center gap-2">
        <span className="rounded-xl border bg-neutral-50 px-3 py-2 text-sm">$</span>
        <input
          type="number"
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full rounded-xl border px-3 py-2 text-sm shadow-sm outline-none ring-0 focus:border-[#203c79]"
        />
        <span className="rounded-xl border bg-neutral-50 px-3 py-2 text-sm">per sf</span>
      </div>
    </label>
  );
}

/* ----------------------------------- RFQ ---------------------------------- */

function RFQ() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    projectType: "Multifamily",
    area: "",
    message: "",
  });

  const onChange = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const mailtoHref = useMemo(() => {
    const to = "build@xbloc2.com";
    const subject = encodeURIComponent("RFQ – Xbloc²");
    const body = encodeURIComponent(
      `Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
Phone: ${form.phone}
Location: ${form.city}, ${form.state}
Project Type: ${form.projectType}
Wall Area (sf): ${form.area}

Notes:
${form.message}`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <section id="rfq" className="py-16" aria-labelledby="rfq-heading">
      <Container>
        <h2 id="rfq-heading" className="text-3xl font-bold tracking-tight">Request a quote</h2>
        <p className="mt-2 max-w-3xl text-neutral-700">
          Send plans or a quick scope. We reply with assemblies, quantities, and a schedule plan.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <form className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="Name" value={form.name} onChange={(v) => onChange("name", v)} />
              <TextField label="Company" value={form.company} onChange={(v) => onChange("company", v)} />
              <TextField label="Email" type="email" value={form.email} onChange={(v) => onChange("email", v)} />
              <TextField label="Phone" value={form.phone} onChange={(v) => onChange("phone", v)} />
              <TextField label="City" value={form.city} onChange={(v) => onChange("city", v)} />
              <TextField label="State" value={form.state} onChange={(v) => onChange("state", v)} />
              <SelectField
                label="Project type"
                value={form.projectType}
                onChange={(v) => onChange("projectType", v)}
                options={["Multifamily", "Industrial", "Commercial", "Hospitality", "Education", "Other"]}
              />
              <TextField label="Wall area (sf)" value={form.area} onChange={(v) => onChange("area", v)} />
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-medium text-neutral-700">Notes</span>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => onChange("message", e.target.value)}
                className="mt-1 w-full rounded-xl border px-3 py-2 text-sm shadow-sm outline-none ring-0 focus:border-[#203c79]"
                placeholder="Upload links to plans, required ratings, and dates"
              />
            </label>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={mailtoHref}
                className="rounded-2xl bg-[#e52634] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-90"
              >
                Request a Technical Consultation
              </a>
              <a
                href="#rfq"
                className="rounded-2xl border border-[#203c79] px-5 py-3 text-sm font-semibold text-[#203c79] hover:bg-[#203c79]/5"
              >
                Start Your Project Assessment
              </a>
            </div>
          </form>

          <div className="rounded-3xl border bg-neutral-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">What to include</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-neutral-700">
              <li>Plan pages and wall schedules</li>
              <li>Required fire ratings and STC goals</li>
              <li>Approximate wall areas</li>
              <li>Site location and dates</li>
              <li>Any preferred assemblies or details</li>
            </ul>
            <div className="mt-6 rounded-2xl border bg-white p-4 text-sm">
              <div className="flex items-center gap-2 text-neutral-500">
                <FileText className="h-4 w-4" />
                <span className="font-semibold">Spec library</span>
              </div>
              <p className="mt-2 text-neutral-700">
                Download the Technical Brochure, UL letters, CAD details, and install guides in Resources.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href="#resources" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold hover:bg-neutral-100">
                  <BookOpen className="h-4 w-4" /> Explore Case Studies
                </a>
                <a href="#resources" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold hover:bg-neutral-100">
                  <Play className="h-4 w-4" /> Watch Placement in Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TextField({ label, value, onChange, type = "text" }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-neutral-700">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl border px-3 py-2 text-sm shadow-sm outline-none ring-0 focus:border-[#203c79]"
      />
    </label>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-neutral-700">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm shadow-sm outline-none ring-0 focus:border-[#203c79]"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

/* ---------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer id="resources" className="border-t bg-neutral-50/50">
      <Container className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-neutral-800">
            <ShieldCheck className="h-5 w-5 text-[#203c79]" />
            <span className="text-sm font-semibold">Standards</span>
          </div>
          <ul className="mt-3 space-y-1 text-sm text-neutral-700">
            <li>UL U-series assemblies</li>
            <li>ASTM C1691, C1692, C1694</li>
            <li>TMS 402/602</li>
            <li>ACI masonry + plaster</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 text-neutral-800">
            <FileText className="h-5 w-5 text-[#203c79]" />
            <span className="text-sm font-semibold">Downloads</span>
          </div>
          <ul className="mt-3 space-y-1 text-sm text-neutral-700">
            <li>Technical Brochure (PDF)</li>
            <li>Spec sheets (PDF)</li>
            <li>CAD details (DWG)</li>
            <li>Install guides (PDF)</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 text-neutral-800">
            <CalcIcon className="h-5 w-5 text-[#203c79]" />
            <span className="text-sm font-semibold">Tools</span>
          </div>
          <ul className="mt-3 space-y-1 text-sm text-neutral-700">
            <li>Hydraulic Stability Calculator (lead gated)</li>
            <li>AAC wall calculator</li>
            <li>Panel count helper</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 text-neutral-800">
            <ClipboardList className="h-5 w-5 text-[#203c79]" />
            <span className="text-sm font-semibold">Contact</span>
          </div>
          <ul className="mt-3 space-y-1 text-sm text-neutral-700">
            <li>build@xbloc2.com</li>
            <li>Engineering support</li>
            <li>Mon–Fri</li>
          </ul>
          <a
            href="#rfq"
            className="mt-4 inline-block rounded-xl bg-[#e52634] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90"
          >
            Specify Xbloc² for Your Project
          </a>
        </div>
      </Container>
      <div className="border-t py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Xbloc². All rights reserved.
      </div>
    </footer>
  );
}

/* --------------------------------- Utils ---------------------------------- */

function toUSD(n) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n || 0);
}
