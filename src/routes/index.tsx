import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Building2, Check, Droplets, Home, MapPin, Menu, Phone, School, Sparkles, X } from "lucide-react";
import { FormEvent, useState } from "react";

import commercial from "@/assets/dlc-commercial-generated.jpg";
import conservatory from "@/assets/dlc-conservatory-generated.jpg";
import hero from "@/assets/dlc-hero-generated.jpg";
import logo from "@/assets/dlc-logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DLC Window Cleaning | Corsham & Surrounding Areas" },
      { name: "description", content: "Reliable window cleaning for homes, schools and commercial properties across Corsham and surrounding areas. Conservatories, fascias and pressure washing also available." },
      { property: "og:title", content: "DLC Window Cleaning | Corsham" },
      { property: "og:description", content: "Friendly, reliable window cleaning with more than 20 years of experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { number: "01", icon: Home, title: "Domestic windows", text: "Regular or one-off window cleaning for homes, completed carefully and with minimal disruption." },
  { number: "02", icon: School, title: "Commercial & schools", text: "Dependable cleaning for offices, shops, schools and managed sites, arranged around your needs." },
  { number: "03", icon: Sparkles, title: "Conservatories & fascias", text: "Cleaning for conservatory glass, frames, fascias and soffits to keep your property cared for." },
  { number: "04", icon: Droplets, title: "Pressure washing", text: "Pressure washing for suitable patios, paths and exterior surfaces. Ask about availability." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [comparison, setComparison] = useState(52);
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage("Online enquiries are being connected. Please call 07887 376762 for your free quote today.");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a href="#main" className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground focus:translate-y-0">Skip to content</a>
      <header className="glass-nav sticky top-0 z-50 border-b border-primary/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" aria-label="DLC Window Cleaning home"><img src={logo} alt="DLC Window Cleaning" className="h-12 w-auto sm:h-14" /></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            <a href="#services" className="text-sm font-semibold transition-colors hover:text-secondary">Services</a>
            <a href="#story" className="text-sm font-semibold transition-colors hover:text-secondary">Our story</a>
            <a href="#commercial" className="text-sm font-semibold transition-colors hover:text-secondary">Commercial</a>
            <a href="#contact" className="text-sm font-semibold transition-colors hover:text-secondary">Contact</a>
            <a href="tel:07887376762" className="flex items-center gap-2 text-sm font-bold"><span className="size-2 rounded-full bg-secondary" />07887 376762</a>
            <Button asChild className="h-11 rounded-full bg-accent px-6 text-accent-foreground shadow-none hover:bg-accent/85"><a href="#contact">Free quote</a></Button>
          </nav>
          <Button variant="ghost" size="icon" className="size-11 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav id="mobile-nav" className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-7xl flex-col gap-1">{[["Services","#services"],["Our story","#story"],["Commercial","#commercial"],["Contact","#contact"]].map(([label,href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-border py-3 font-semibold">{label}</a>)}<a href="tel:07887376762" className="mt-3 flex items-center gap-2 font-bold text-secondary"><Phone className="size-4" />07887 376762</a></div></nav>}
      </header>

      <main id="main">
        <section id="top" className="relative isolate flex min-h-[calc(100svh-9rem)] items-end overflow-hidden pb-10 pt-16 sm:min-h-[calc(100svh-5rem)] sm:pb-24 sm:pt-28 lg:items-center lg:py-24">
          <img src={hero} width={1536} height={1024} alt="A friendly window cleaner carefully cleaning a family home's exterior windows" className="absolute inset-0 -z-20 size-full object-cover object-[67%_center]" />
          <div className="image-wash absolute inset-0 -z-10" />
          <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl animate-fade-in">
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary"><span className="h-px w-10 bg-secondary" />Corsham & surrounding areas</p>
              <h1 className="text-4xl font-semibold leading-[1.02] min-[360px]:text-5xl sm:text-6xl lg:text-7xl">DLC Window Cleaning</h1>
              <p className="mt-6 max-w-xl text-xl font-medium leading-8 text-foreground/80 sm:text-2xl">A clearer view, from a local team you can rely on.</p>
              <p className="mt-4 max-w-xl text-base leading-7 text-foreground/70">Over 20 years of friendly, dependable cleaning for homes, schools and commercial properties.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-14 rounded-full px-7 text-base shadow-xl shadow-primary/15"><a href="#contact">Request a free quote <ArrowRight /></a></Button>
                <Button asChild variant="outline" className="h-14 rounded-full border-primary/15 bg-background/85 px-7 text-base backdrop-blur-sm"><a href="tel:07887376762"><Phone /> 07887 376762</a></Button>
              </div>
            </div>
          </div>
          <a href="#services" aria-label="Explore services" className="absolute bottom-5 right-5 hidden size-12 items-center justify-center rounded-full border border-primary/20 bg-background/70 backdrop-blur md:flex"><ArrowDown className="size-5" /></a>
        </section>

        <section aria-label="Why choose DLC" className="bg-primary py-8 text-primary-foreground">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-5 md:grid-cols-4 lg:px-8">
            {[['20+','years’ experience'],['Free','no-obligation quotes'],['Weekday','appointments'],['Local','friendly service']].map(([big,small]) => <div key={small} className="border-l border-primary-foreground/20 pl-4"><strong className="block font-display text-2xl text-accent">{big}</strong><span className="text-xs text-primary-foreground/70 sm:text-sm">{small}</span></div>)}
          </div>
        </section>

        <section id="services" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-6 border-b border-border pb-9 md:flex-row md:items-end">
              <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary">What we do</p><h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Care for every pane, frame and property.</h2></div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">Straightforward service for family homes, schools, offices, shops and managed sites.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
              {services.map(({number,icon: Icon,title,text}) => <article key={title} className="group border-b border-border p-7 transition-colors hover:bg-muted md:border-r lg:border-b-0"><div className="flex items-center justify-between"><span className="text-xs font-bold text-secondary">{number}</span><Icon className="size-5 text-secondary transition-transform group-hover:-translate-y-1" /></div><h3 className="mt-14 text-xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-muted py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
            <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary">The DLC standard</p><h2 className="text-4xl font-semibold leading-tight sm:text-5xl">See the difference.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Move the control to reveal a crisp, clear finish. It is a simple reflection of how we work: careful, efficient and focused on the result.</p><ul className="mt-8 space-y-4">{['Friendly, straightforward service','Minimal disruption to your day','Clear, no-obligation quotes'].map(item => <li key={item} className="flex items-center gap-3 font-semibold"><span className="grid size-7 place-items-center rounded-full bg-accent/30 text-accent-foreground"><Check className="size-4" /></span>{item}</li>)}</ul></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-primary">
              <img src={conservatory} loading="lazy" width={1536} height={1024} alt="A bright, professionally cleaned conservatory" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-y-0 left-0 overflow-hidden grayscale-[.9] contrast-75 brightness-75" style={{width: `${comparison}%`}}><img src={conservatory} loading="lazy" width={1536} height={1024} alt="" className="h-full max-w-none object-cover" style={{width: "min(90vw, 632px)"}} /></div>
              <div className="absolute inset-y-0 w-1 -translate-x-1/2 bg-accent shadow-lg" style={{left: `${comparison}%`}}><span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent font-bold text-accent-foreground">↔</span></div>
              <span className="absolute left-4 top-4 rounded bg-primary/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground">Before</span><span className="absolute right-4 top-4 rounded bg-background/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em]">After</span>
              <input aria-label="Compare before and after" type="range" min="8" max="92" value={comparison} onChange={e => setComparison(Number(e.target.value))} className="absolute inset-0 size-full cursor-ew-resize opacity-0" />
            </div>
          </div>
        </section>

        <section id="story" className="scroll-mt-20 py-20 sm:py-28"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8"><div className="relative"><img src={conservatory} loading="lazy" width={1536} height={1024} alt="Clean conservatory exterior" className="aspect-[4/3] w-full rounded-md object-cover" /><div className="absolute -bottom-5 right-4 bg-accent px-6 py-5 text-accent-foreground shadow-xl sm:right-[-1rem]"><strong className="font-display text-3xl">20+</strong><span className="ml-2 text-sm font-semibold">years serving locally</span></div></div><div className="lg:pl-10"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary">A local service</p><h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Dependable work. Friendly faces.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">DLC Window Cleaning has served customers in and around Corsham for more than 20 years. The aim is simple: turn up when agreed, work efficiently and leave every property looking its best.</p><Button asChild variant="link" className="mt-6 h-auto px-0 text-secondary"><a href="#contact">Request your free quote <ArrowRight /></a></Button></div></div></section>

        <section id="commercial" className="scroll-mt-20 bg-primary text-primary-foreground"><div className="mx-auto grid max-w-[1600px] lg:grid-cols-2"><div className="flex items-center px-5 py-20 sm:px-12 lg:px-[max(2rem,calc((100vw-80rem)/2))] lg:py-28"><div className="max-w-xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">Commercial work</p><h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Professional cleaning without the fuss.</h2><p className="mt-6 text-lg leading-8 text-primary-foreground/70">From shopfronts and offices to schools and managed properties, DLC provides a reliable service that fits around the site.</p><div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold"><span className="border border-primary-foreground/20 px-4 py-2">Offices</span><span className="border border-primary-foreground/20 px-4 py-2">Shops</span><span className="border border-primary-foreground/20 px-4 py-2">Schools</span></div></div></div><img src={commercial} loading="lazy" width={1536} height={1024} alt="A window cleaner working on a modern commercial building" className="h-full min-h-[430px] w-full object-cover" /></div></section>

        <section className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary">Customer feedback</p><h2 className="text-4xl font-semibold">A reputation built locally.</h2></div><p className="max-w-md rounded-md bg-accent/15 px-4 py-3 text-xs font-semibold text-accent-foreground">Review space ready for genuine customer feedback before publishing.</p></div><div className="grid gap-px bg-border md:grid-cols-3"><div className="min-h-52 bg-background p-8 md:col-span-2"><p className="font-display text-2xl leading-9 text-foreground/45">“Your customer’s experience will appear here — in their own words.”</p></div><div className="flex min-h-52 items-end bg-muted p-8"><p className="text-sm leading-7 text-muted-foreground">Genuine reviews can be added when names and wording are available.</p></div></div></div></section>

        <section id="contact" className="scroll-mt-20 bg-muted py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-8"><div className="lg:col-span-5"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary">Free quotes</p><h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Tell us what needs cleaning.</h2><p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">Call during weekday hours or leave your details ready for when online enquiries are connected.</p><div className="mt-9 space-y-6"><a href="tel:07887376762" className="group flex items-center gap-4"><span className="grid size-12 place-items-center rounded-full bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground"><Phone /></span><span><span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Call direct</span><strong className="text-xl">07887 376762</strong></span></a><div className="flex items-center gap-4"><span className="grid size-12 place-items-center rounded-full bg-secondary/10 text-secondary"><MapPin /></span><span><span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Service area</span><strong className="text-lg">Corsham & surrounding areas</strong></span></div></div></div><form onSubmit={handleSubmit} className="rounded-md border border-border bg-background p-6 shadow-xl shadow-primary/5 sm:p-9 lg:col-span-7"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Name<Input required name="name" autoComplete="name" className="mt-2 h-12 bg-muted/50" /></label><label className="text-sm font-semibold">Phone or email<Input required name="contact" className="mt-2 h-12 bg-muted/50" /></label></div><label className="mt-5 block text-sm font-semibold">Property / service<select name="service" className="mt-2 h-12 w-full rounded-md border border-input bg-muted/50 px-3 text-sm outline-none focus:ring-2 focus:ring-ring"><option>Domestic window cleaning</option><option>Commercial window cleaning</option><option>School / education site</option><option>Conservatory or fascia cleaning</option><option>Pressure washing</option><option>Other</option></select></label><label className="mt-5 block text-sm font-semibold">How can we help?<Textarea required name="message" rows={4} className="mt-2 bg-muted/50" /></label><Button type="submit" className="mt-6 h-13 w-full rounded-full text-base">Prepare enquiry <ArrowRight /></Button>{formMessage && <p role="status" className="mt-4 rounded-md bg-accent/20 p-4 text-sm font-semibold text-accent-foreground">{formMessage}</p>}</form></div></section>
      </main>

      <footer className="bg-primary pb-24 pt-12 text-primary-foreground md:pb-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 sm:flex-row sm:items-center lg:px-8"><img src={logo} alt="DLC Window Cleaning" className="h-14 w-auto rounded-sm bg-background p-1" /><p className="text-sm text-primary-foreground/60">Serving Corsham and surrounding areas.<br />© {new Date().getFullYear()} DLC Window Cleaning.</p><Link to="/privacy" className="text-sm font-semibold text-primary-foreground/70 hover:text-accent">Privacy notice</Link></div></footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/90 p-3 backdrop-blur-lg md:hidden"><Button asChild variant="outline" className="h-12 rounded-full"><a href="tel:07887376762"><Phone /> Call now</a></Button><Button asChild className="h-12 rounded-full bg-accent text-accent-foreground hover:bg-accent/85"><a href="#contact">Free quote</a></Button></div>
    </div>
  );
}