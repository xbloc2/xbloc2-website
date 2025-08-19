"use client";

import React, { useMemo, useState } from "react";
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
} from "lucide-react";

/**
 * Xbloc² Landing Page — Next.js + Tailwind
 * Brand colors: Primary #203c79, Accent #e52634
 * Logo file: /public/xbloc2-logo.svg
 */

export default function Xbloc2LandingPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <ProofBar />
      <CTACluster />
      <ValueTiles />
      <Compare />
      <DosePacks />
      <Calculator />
      <RFQ />
      <Footer />
    </main>
  );
}

/* --------------------------------- UI Bits -------------------------------- */

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function BrandWordmark() {
  // Always use the image (no text fallback) so mobile shows the SVG wordmark
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
          <a href="#why" className="hover:text-neutral-900">Why AAC</a>
          <a href="#resources" className="hover:text-neutral-900">Resources</a>
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
        {/* Requested overlay: rgb(18,74,214) at ~0.7, plus subtle gradient */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(18,74,214,0.70)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div
          className="
            grid gap-5 sm:gap-6 md:gap-10
            py-10 sm:py-14 md:py-20
            md:grid-cols-2 md:items-start
          "
        >
          {/* Card 1 - Content */}
          <div
            className="
              rounded-3xl
              bg-neutral-900/65 ring-1 ring-white/15
              backdrop-blur-md
              p-5 sm:p-6 md:p-8
              text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]
            "
          >
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
                className="
                  inline-flex items-center justify-center
                  rounded-2xl px-5 py-3 text-sm font-semibold
                  text-[#203c79] bg-white shadow-md hover:shadow-lg hover:bg-white/95 transition
                "
              >
                Start Your Project Assessment
              </a>
              <a
                href="#resources"
                className="
                  inline-flex items-center justify-center
                  rounded-2xl px-5 py-3 text-sm font-semibold
                  text-white/95 ring-1 ring-white/25 hover:bg-white/10 transition
                "
              >
                Download the Technical Brochure
              </a>
            </div>

            {/* Bullets (original icons) */}
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

          {/* Card 2 - Stats (original icons) */}
          <div
            className="
              rounded-3xl
              bg-neutral-900/55 ring-1 ring-white/15
              backdrop-blur-md
              p-5 md:p-6 lg:p-7
              text-white
              shadow-[0_10px_30px_rgba(0,0,0,0.25)]
              md:justify-self-end
              w-full md:w-[460px] lg:w-[520px] xl:w-[560px]
            "
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <HeroStat
                label="Install speed"
                value="Fewer trades"
                icon={<Factory className="h-4 w-4 text-white" />}
              />
              <HeroStat
                label="Fire rating"
                value="Up to 4h"
                icon={<Flame className="h-4 w-4 text-white" />}
              />
              <HeroStat
                label="Typical cost"
                value="$3.12+/sf*"
                icon={<LineChart className="h-4 w-4 text-white" />}
              />
              <HeroStat
                label="Inspection"
                value="Single path"
                icon={<ClipboardList className="h-4 w-4 text-white" />}
              />
            </div>
            <p className="mt-4 text-xs text-white/75">
              * Example material + labor snapshot for thin cladding. Project
              conditions vary. Verify with engineering.
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
          <CTAButton
            href="#resources"
            label="Specify Xbloc² for Your Project"
            variant="ghost"
          />
          <CTAButton href="#rfq" label="Start Your Project Assessment" accent />
        </div>
      </Container>
    </section>
  );
}

function CTAButton({ href, label, variant = "solid", accent = false }) {
  const base =
    "rounded-2xl px-5 py-3 text-sm font-semibold shadow flex items-center justify-center";
  const styles = {
    solid: `${accent ? "bg-[#e52634]" : "bg-[#203c79]"} text-white hover:opacity-90`,
    outline: "border border-[#203c79] text-[#203c79] hover:bg-[#203c79]/5",
    ghost: "border border-transparent text-[#203c79] hover:bg-[#203c79]/5",
  }[variant];
  return (
    <a href={href} className={`${base} ${styles}`}>
      {label}
    </a>
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
          Technical. Code aligned. Straightforward install. We keep it simple
          and fast for builders, GCs, and design teams.
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
        <h2 id="compare-heading" className="text-3xl font-bold tracking-tight">
          AAC fire walls vs gypsum systems
        </h2>
        <p className="mt-2 max-w-3xl text-neutral-700">
          Typical differences shown for planning. Confirm final assemblies and
          details with your engineer and AHJ.
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
    {
      title: "Thinset upgrade",
      points: ["Higher compressive strength", "Better flexural performance", "Low permeability"],
    },
    {
      title: "Stucco + finish",
      points: ["Cleaner bond to AAC", "Fast cure profile", "No special equipment"],
    },
    {
      title: "Repair + patch",
      points: ["Field friendly", "Strong adhesion", "Consistent results"],
    },
  ];
  return (
    <section className="py-16" aria-labelledby="dose-heading">
      <Container>
        <h2 id="dose-heading" className="text-3xl font-bold tracking-tight">
          Xbloc<sup className="relative top-[-0.3em] text-[0.6em]">2</sup> dose packs
        </h2>
        <p className="mt-2 max-w-3xl text-neutral-700">
          Ready-to-use admixture packs that boost performance in thinset,
          stucco, repair, and finishes. No special gear.
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
          <h2 id="calc-heading" className="text-3xl font-bold tracking-tight">
            AAC wall calculator
          </h2>
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
      <div className={`text-xs uppercase tracking-wide ${highlight ? "text-neutral-200" : "text-neutral-500"}`}>
        {label}
      </div>
      <div className={`mt-1 text-2xl font-bold tabular-nums ${highlight ? "text-white" : "text-neutral-900"}`}>
        {value}
      </div>
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
                <a
                  href="#resources"
                  className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold hover:bg-neutral-100"
                >
                  <BookOpen className="h-4 w-4" /> Explore Case Studies
                </a>
                <a
                  href="#resources"
                  className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold hover:bg-neutral-100"
                >
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
          <option key={o} value={o}>
            {o}
          </option>
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
