import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ClosingCTA from "@/components/ClosingCTA";
import { Plane, Home, ShieldCheck } from "lucide-react";

const services = [
    {
        Icon: Plane,
        h: "Visa Support",
        sub: "F-1 student visa, end to end.",
        items: [
            "Application strategy aligned with program start date and travel needs",
            "Document preparation — financial evidence, sponsor letters, transcripts, school correspondence",
            "Interview preparation — practice prompts, concise study plans, grounded answers",
            "Status tracking, renewals, travel signatures, and transfer coordination",
        ],
        footnote: "We provide educational consulting support; visa decisions are made solely by U.S. government agencies.",
    },
    {
        Icon: Home,
        h: "Homestay Program",
        sub: "A second home, carefully matched.",
        items: [
            "Detailed intake on routine, diet, commute, study habits, and house expectations",
            "Placement with hosts experienced in welcoming international students",
            "Orientation on house rules, communication norms, and points of contact",
            "Ongoing check-ins and calm mediation when adjustments are needed",
        ],
    },
    {
        Icon: ShieldCheck,
        h: "Guardian Program",
        sub: "A trusted local adult, on call.",
        items: [
            "Designated U.S.-based guardian for emergencies and required school meetings",
            "Authorized pickup, medical visits, and school conferences when parents are abroad",
            "Liaison with school nurses, deans, and residential offices",
            "Real-time updates to parents through the channels you already use",
        ],
    },
];

export default function International() {
    return (
        <main data-testid="page-international" className="min-h-screen">
            <Nav />

            <PageHeader
                eyebrow="International Student Support"
                title="A softer landing."
                italicWord="A stronger start."
                subtitle="We help international students settle into American life — visas, host families, and a guardian on the ground."
                breadcrumb={[{ label: "International" }]}
                background="var(--paper)"
                nowrap
            />

            {/* Services */}
            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((s, i) => {
                        const Icon = s.Icon;
                        return (
                            <article
                                key={s.h}
                                className="p-7 lg:p-8 flex flex-col"
                                style={{ background: "var(--paper)", border: "1px solid var(--line)" }}
                                data-testid={`intl-service-${i}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center"
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
