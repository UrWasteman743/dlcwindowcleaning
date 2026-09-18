import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import logo from "@/assets/dlc-logo.svg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Notice | DLC Window Cleaning" },
      { name: "description", content: "Privacy information for enquiries sent to DLC Window Cleaning." },
      { property: "og:title", content: "Privacy Notice | DLC Window Cleaning" },
      { property: "og:description", content: "Privacy information for enquiries sent to DLC Window Cleaning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Link to="/" aria-label="DLC Window Cleaning home">
          <img src={logo} alt="DLC Window Cleaning" className="h-14 w-auto" />
        </Link>
        <div className="mt-12 border-t border-border pt-12 sm:mt-16 sm:pt-16">
          <div className="mb-7 flex size-12 items-center justify-center rounded-md bg-primary text-primary-foreground"><ShieldCheck /></div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary">Your information</p>
          <h1 className="text-4xl font-semibold sm:text-6xl">Privacy notice</h1>
          <div className="mt-10 rounded-md border border-accent/60 bg-accent/15 p-5 text-sm">
            <strong>Draft notice:</strong> This needs the business email or postal contact, and the final enquiry service details, before publishing.
          </div>
          <div className="mt-10 space-y-9 text-base leading-8 text-muted-foreground">
            <section><h2 className="mb-3 text-xl font-semibold text-foreground">How information is used</h2><p>DLC Window Cleaning uses information submitted through this website only to answer enquiries, provide quotes and arrange services.</p></section>
            <section><h2 className="mb-3 text-xl font-semibold text-foreground">Information collected</h2><p>Your name, contact details, property or service information, and anything included in your message.</p></section>
            <section><h2 className="mb-3 text-xl font-semibold text-foreground">Contact</h2><p>The business email or postal contact will be added here before the website is published.</p></section>
            <section><h2 className="mb-3 text-xl font-semibold text-foreground">Enquiry service</h2><p>When an online enquiry provider is enabled, this notice will name that provider and link to its privacy information.</p></section>
          </div>
          <Button asChild variant="outline" className="mt-12 h-12 rounded-full px-6">
            <Link to="/"><ArrowLeft /> Back to website</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}