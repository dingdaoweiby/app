import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";

const tracks = [
    {
        h: "Med School",
        sub: "MD / DO Programs",
        intro: "Strategic advising for pre-med students applying to US allopathic and osteopathic programs — from academic planning through primary applications and interviews.",
        items: [
            "Course and activity planning aligned with med school expectations",
            "MCAT timing, research and clinical exposure strategy",
            "Primary and secondary application narrative development",
            "Interview preparation and school list optimization",
        ],
    },
    {
        h: "Ph.D.",
        sub: "Doctoral Programs",
        intro: "Research fit analysis, statement of purpose development, and outreach strategy for competitive PhD programs in STEM, social sciences, and humanities.",
        items: [
            "Identifying programs and faculty aligned with your research interests",
            "SOP / research statement structure, drafting, and revision",
            "CV, publications, and recommendation narrative coordination",
            "Interview and campus visit preparation",
        ],
    },
    {
        h: "MBA",
        sub: "Business School",
        intro: "Story-first positioning for top business school candidates — essays, recommendations, and interview prep grounded in your leadership trajectory.",
        items: [
            "Career goals clarity and program fit articulation",
            "Resume and leadership story development",
            "Essay brainstorming, structure, and multi-round editing",
            "Recommendation strategy and mock interviews",
        ],
    },
    {
        h: "DIY Support",
        sub: "Self-Directed Applicants",
        intro: "On-demand coaching for self-directed graduate applicants who want expert feedback at key decision points without a full-service package.",
        items: [
            "Targeted reviews of drafts — SOP, CV, or essay supplements",
            "School list sanity checks and application timeline audits",
            "Hour-based or milestone-based engagements",
            "Ideal for candidates managing most of the process independently",
        ],
    },
];

export default function Graduate() {
    return (
        <main data-testid="page-graduate" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow="Graduate Admissions"
                title="Graduate Admissions"
                italicWord="Support."
                subtitle="Strategic guidance for medical school, doctoral, MBA, and self-directed applicants — structured support at every stage of the graduate application process."
                breadcrumb={[{ label: "Graduate" }]}
            />

            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <ol style={{ borderTop: "2px solid var(--navy)" }}>
                    {tracks.map((t, i) => (
                        <li key={t.h} className="py-14" style={{ borderBottom: "1px solid var(--line)", background: i % 2 === 1 ? "var(--mist)" : "var(--paper)", marginLeft: "calc(-1 * max(clamp(20px, 4vw, 40px), (100vw - 1200px) / 2))", marginRight: "calc(-1 * max(clamp(20px, 4vw, 40px), (100vw - 1200px) / 2))", paddingLeft: "max(clamp(20px, 4vw, 40px), calc((100vw - 1200px) / 2))", paddingRight: "max(clamp(20px, 4vw, 40px), calc((100vw - 1200px) / 2))" }} data-testid={`graduate-track-${i}`}>
                            <div className="grid grid-cols-12 gap-x-10">
                                <div className="col-span-12 lg:col-span-4">
                                    <span className="font-display" style={{ fontSize: 56, lineHeight: 0.85, color: "var(--orange)", fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                                    <h3 className="font-display mt-4" style={{ fontSize: "clamp(26px, 2.4vw, 36px)", lineHeight: 1.1, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.01em" }}>{t.h}</h3>
                                    <p className="font-mono mt-2" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)" }}>{t.sub}</p>
                                </div>
                                <div className="col-span-12 lg:col-span-8 mt-6 lg:mt-0">
                                    <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink)", maxWidth: 720 }}>{t.intro}</p>
                                    <div className="my-6" style={{ width: 36, height: 2, background: "var(--orange)" }} />
                                    <ul className="space-y-3">
                                        {t.items.map((it, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <span className="font-mono" style={{ fontSize: 10, color: "var(--orange)", marginTop: 6 }}>▸</span>
                                                <p className="font-serif" style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}>{it}</p>
                                            </li>
                                        ))}
                                    </ul>
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
