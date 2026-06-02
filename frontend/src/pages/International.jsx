import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ClosingCTA from "@/components/ClosingCTA";
import { Plane, Home, ShieldCheck } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const ICONS = [Plane, Home, ShieldCheck];

export default function International() {
    const t = useT();
    const p = t.pages.international;
    return (
        <main data-testid="page-international" className="min-h-screen">
            <Nav />

            <PageHeader
                eyebrow={p.eyebrow}
                title={p.title}
                italicWord={p.italic}
                subtitle={p.subtitle}
                breadcrumb={[{ label: p.crumb }]}
                background="var(--paper)"
                nowrap
            />

            {/* Services */}
            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {p.services.map((s, i) => {
                        const Icon = ICONS[i];
                        return (
                            <article
                                key={i}
                                className="p-7 lg:p-8 flex flex-col lift"
                                style={{ background: "var(--paper)", border: "1px solid var(--line)" }}
                                data-testid={`intl-service-${i}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center pulse-circle"
                                        style={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: "50%",
                                            background: "var(--orange)",
                                            color: "#fff",
                                            boxShadow: "0 4px 14px rgba(255,152,0,0.28)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Icon size={26} strokeWidth={1.75} />
                                    </div>
                                    <h3
                                        className="font-display"
                                        style={{ fontSize: 22, lineHeight: 1.2, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}
                                    >
                                        {s.h}
                                    </h3>
                                </div>
                                <p
                                    className="font-mono mt-3"
                                    style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                                >
                                    {s.sub}
                                </p>
                                <div className="my-4" style={{ width: 28, height: 2, background: "var(--orange)" }} />
                                <ul className="space-y-2.5">
                                    {s.items.map((it, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <span
                                                aria-hidden="true"
                                                style={{
                                                    marginTop: 9,
                                                    width: 5,
                                                    height: 5,
                                                    background: "var(--navy)",
                                                    flexShrink: 0,
                                                    borderRadius: "50%",
                                                }}
                                            />
                                            <p className="font-serif" style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--ink)" }}>
                                                {it}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                {s.footnote && (
                                    <p
                                        className="font-serif italic mt-5 pt-4"
                                        style={{ fontSize: 13, lineHeight: 1.5, color: "var(--steel)", borderTop: "1px solid var(--line)" }}
                                    >
                                        {s.footnote}
                                    </p>
                                )}
                            </article>
                        );
                    })}
                </div>
            </section>

            <ClosingCTA />
            <Footer />
        </main>
    );
}
