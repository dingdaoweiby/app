import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";

const HERO_IMG = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=85&auto=format&fit=crop";

const services = [
    {
        h: "Visa Support",
        sub: "Guidance through US F-1 student visa applications, renewals, and status maintenance.",
        body: "A successful F-1 process depends on timing, clean documentation, and a coherent story at the interview — not only on completing forms. We help families build a realistic schedule that lines up school enrollment, I-20 issuance, SEVIS fee payment, and consular appointments, then walk through each deliverable so materials stay consistent across DS-160, financial evidence, and academic records.",
        bulletsHeader: "What we help with",
        items: [
            "Application strategy and milestone planning matched to your program start date and travel needs",
            "Document preparation: financial evidence, sponsor letters, transcripts, and school correspondence",
            "Interview preparation — practice prompts, concise study plans, and grounded answers that reflect your file",
            "Status tracking after submission, including guidance if administrative processing or extra evidence is requested",
            "Renewals, travel signatures, and transfer coordination when you change programs or schools",
            "Coordination with your school's international office and, when relevant, host-family logistics",
        ],
        footnote: "We provide educational consulting support; visa decisions are made solely by U.S. government agencies.",
    },
    {
        h: "Homestay Program",
        sub: "Carefully vetted homestay placements that feel like a second home for international students.",
        body: "Matching a student to the right household is part logistics and part chemistry. We collect detailed preferences on routine, diet, commute, study habits, and expectations on both sides, then place students with hosts who understand the responsibility of welcoming an international minor or young adult. Orientation covers house rules, communication norms, and who to contact when questions arise.",
        bulletsHeader: "How we work with families",
        items: [
            "Structured intake for student and host priorities, boundaries, and academic-year milestones",
            "Ongoing check-ins during the first weeks and periodic touchpoints when schedules shift",
            "Lightweight mediation when misunderstandings appear — early, calmly, and with clear next steps",
        ],
    },
    {
        h: "Guardian Program",
        sub: "Trusted local guardian services for international minors studying in the US.",
        body: "Many schools require a U.S.-based adult who can respond to emergencies, attend required meetings, and advocate for the student when parents are overseas. We designate experienced local guardians who know how to liaise with school nurses, deans, and residential offices while keeping parents informed in real time. The arrangement emphasizes safety, transparency, and age-appropriate independence — not replacing parents, but standing in responsibly when distance makes daily presence impossible.",
        bulletsHeader: "Typical responsibilities",
        items: [
            "Emergency contact availability aligned with school and host-family protocols",
            "Authorized pickup, medical visits, or school conferences when parental travel is not feasible",
            "Clear reporting rhythms — short updates after key events and channels parents already use",
        ],
    },
];

export default function International() {
    return (
        <main data-testid="page-international" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow="§ Program · International Student Support"
                title="From acceptance"
                italicWord="through the school year."
                subtitle="Visa guidance, homestay placement, and guardian services — structured so families, schools, and hosts stay aligned."
                breadcrumb={[{ label: "International" }]}
            />

            <section className="section-x" style={{ background: "var(--paper)", paddingTop: 48, paddingBottom: 0 }}>
                <div className="img-bordered overflow-hidden" style={{ aspectRatio: "16/7" }}>
                    <img src={HERO_IMG} alt="Students on a university campus" className="w-full h-full object-cover" style={{ filter: "grayscale(40%) contrast(1.05)" }} />
                </div>
                <p className="eyebrow mt-3">Plate INT — The Quad</p>
            </section>

            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <ol style={{ borderTop: "2px solid var(--navy)" }}>
                    {services.map((s, i) => (
                        <li key={s.h} className="py-14" style={{
                            borderBottom: "1px solid var(--line)",
                            background: i % 2 === 1 ? "var(--mist)" : "var(--paper)",
                            marginLeft: "calc(-1 * clamp(20px, 6vw, 96px))",
                            marginRight: "calc(-1 * clamp(20px, 6vw, 96px))",
                            paddingLeft: "clamp(20px, 6vw, 96px)",
                            paddingRight: "clamp(20px, 6vw, 96px)",
                        }} data-testid={`intl-service-${i}`}>
                            <div className="grid grid-cols-12 gap-x-10">
                                <div className="col-span-12 lg:col-span-4">
                                    <span className="font-display" style={{ fontSize: 56, lineHeight: 0.85, color: "var(--orange)", fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                                    <h3 className="font-display mt-4" style={{ fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: 1.1, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.01em" }}>{s.h}</h3>
                                    <p className="font-mono mt-3" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--orange)", lineHeight: 1.5 }}>{s.sub}</p>
                                </div>
                                <div className="col-span-12 lg:col-span-8 mt-6 lg:mt-0">
                                    <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink)" }}>{s.body}</p>
                                    <p className="font-mono mt-8 mb-4" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>{s.bulletsHeader}</p>
                                    <ul className="space-y-3">
                                        {s.items.map((it, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <span className="font-mono" style={{ fontSize: 10, color: "var(--orange)", marginTop: 6 }}>▸</span>
                                                <p className="font-serif" style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}>{it}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    {s.footnote && (
                                        <p className="font-serif italic mt-8 pt-4" style={{ fontSize: 14, lineHeight: 1.55, color: "var(--steel)", borderTop: "1px solid var(--line)" }}>
                                            {s.footnote}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            <PageCTA />
            <Footer />
        </main>
    );
}
