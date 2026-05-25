import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";

const HERO_IMG = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=85&auto=format&fit=crop";

const blocks = [
    {
        h: "Student Assessment & Strategy",
        items: [
            "Holistic student evaluation — academic profile, interests, strengths, and long-term goals",
            "Individualized college counseling plan aligned with evolving interests and aspirations",
            "Strategic positioning — identifying and developing the applicant's most compelling narrative",
            "Major and career direction advising",
        ],
    },
    {
        h: "School Selection",
        items: [
            "Balanced college list development — reach, match, and safety schools",
            "School-specific research: culture, program strengths, admissions preferences",
            "Living list — recalibrated as the student's profile develops",
            "Up to 15 school applications (UC system counted as one)",
        ],
    },
    {
        h: "Application Execution",
        items: [
            "Step-by-step guidance with clear timelines, milestones, and accountability",
            "Direct assistance with Common App, UC Application, Coalition, and school-specific portals",
            "Activities list and resume development — formatting, editing, and refinement",
            "Transcript and official document preparation, review, and submission guidance",
            "SAT/ACT/AP score submission strategy and coordination",
        ],
    },
    {
        h: "Essays",
        items: [
            "Personal statement coaching — brainstorming, authentic voice, storytelling, and personal insight",
            "Multi-round, in-depth revision — structural editing, narrative refinement, and line-by-line feedback",
            "Supplemental essays tailored to each school's specific prompts and expectations",
            "Final polishing, proofreading, and submission readiness for every application",
        ],
    },
    {
        h: "Interview & Decision Support",
        items: [
            "Mock interviews with targeted feedback",
            "Application status tracking and follow-up with colleges",
            "Decision release support — reviewing offers, waitlists, and deferrals",
            "Scholarship identification and FAFSA / CSS Profile guidance",
        ],
    },
];

export default function CollegeAdmissions() {
    return (
        <main data-testid="page-college-admissions" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow="§ Program · College Admissions Consulting"
                title="Precision strategy."
                italicWord="Proven results."
                subtitle="Expert-led, full-service, every detail handled — for students applying to top US universities."
                breadcrumb={[{ label: "College", to: "/college/admissions-consulting" }, { label: "Admissions Consulting" }]}
            />

            <section className="section-x" style={{ background: "var(--paper)", paddingTop: 48, paddingBottom: 0 }}>
                <div className="img-bordered overflow-hidden" style={{ aspectRatio: "16/7" }}>
                    <img src={HERO_IMG} alt="Students collaborating on college applications" className="w-full h-full object-cover" style={{ filter: "grayscale(45%) contrast(1.05)" }} />
                </div>
                <p className="eyebrow mt-3">Plate A — The Application Year</p>
            </section>

            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <div className="grid grid-cols-12 gap-x-10 gap-y-10">
                    <div className="col-span-12 lg:col-span-5">
                        <p className="eyebrow">§ I · What We Do</p>
                        <h2 className="font-display mt-5" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 500, color: "var(--navy)" }}>
                            Full-cycle college admissions consulting.
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                        <p className="font-serif" style={{ fontSize: "clamp(18px, 1.45vw, 22px)", lineHeight: 1.6, color: "var(--ink)" }}>
                            Full-cycle undergraduate admissions consulting for students applying to top US universities — Ivy League, Top 15, UC system, liberal arts colleges, and specialized programs including BS/MD and Pre-Med tracks.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <ol style={{ borderTop: "2px solid var(--navy)" }}>
                    {blocks.map((b, i) => (
                        <li key={b.h} className="py-12" style={{ borderBottom: "1px solid var(--line)" }} data-testid={`college-admissions-block-${i}`}>
                            <div className="grid grid-cols-12 gap-x-10">
                                <div className="col-span-12 lg:col-span-4">
                                    <div className="flex items-baseline gap-4">
                                        <span className="font-display" style={{ fontSize: 48, lineHeight: 0.85, color: "var(--orange)", fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                                        <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}>Block {i + 1}</p>
                                    </div>
                                    <h3 className="font-display mt-4" style={{ fontSize: "clamp(22px, 2vw, 28px)", lineHeight: 1.15, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}>{b.h}</h3>
                                </div>
                                <div className="col-span-12 lg:col-span-8 mt-6 lg:mt-0">
                                    <ul className="space-y-3">
                                        {b.items.map((it, j) => (
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

            {/* Student Stories - placeholders per original site */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <p className="eyebrow">§ II · Student Stories</p>
                <h2 className="font-display mt-5" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 500, color: "var(--navy)" }}>
                    How our students got in.
                </h2>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-0" style={{ borderTop: "2px solid var(--navy)" }}>
                    {[1, 2, 3].map((i) => (
                        <article key={i} className="p-8 lg:p-10" style={{
                            background: i === 2 ? "var(--mist)" : "var(--paper)",
                            borderRight: i < 3 ? "1px solid var(--line)" : "none",
                            borderBottom: "1px solid var(--line)",
                        }} data-testid={`college-story-${i}`}>
                            <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)" }}>[Program type]</p>
                            <h3 className="font-display mt-3" style={{ fontSize: 22, color: "var(--navy)", fontWeight: 600 }}>[School name]</h3>
                            <div className="my-5" style={{ width: 36, height: 2, background: "var(--orange)" }} />
                            <p className="font-serif italic" style={{ fontSize: 16, lineHeight: 1.6, color: "var(--steel)" }}>
                                [Story text — placeholder for manual entry.]
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <PageCTA />
            <Footer />
        </main>
    );
}
