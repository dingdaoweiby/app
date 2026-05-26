import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ClosingCTA from "@/components/ClosingCTA";

const tracks = [
    {
        phase: "01",
        label: "Medical School — MD / DO",
        intro: "Strategic advising for pre-med students applying to US allopathic and osteopathic programs — from academic planning through primary applications and interviews.",
        items: [
            "Course and activity planning aligned with med school expectations",
            "MCAT timing, research and clinical exposure strategy",
            "Primary and secondary application narrative development",
            "Interview preparation and school list optimization",
        ],
    },
    {
        phase: "02",
        label: "Doctoral Programs — Ph.D.",
        intro: "Research-fit analysis, statement of purpose development, and outreach strategy for competitive PhD programs in STEM, social sciences, and humanities.",
        items: [
            "Identifying programs and faculty aligned with your research interests",
            "SOP and research statement structure, drafting, and revision",
            "CV, publications, and recommendation narrative coordination",
            "Interview and campus visit preparation",
        ],
    },
    {
        phase: "03",
        label: "Business School — MBA",
        intro: "Story-first positioning for top business school candidates — essays, recommendations, and interview prep grounded in your leadership trajectory.",
        items: [
            "Career goals clarity and program fit articulation",
            "Resume and leadership story development",
            "Essay brainstorming, structure, and multi-round editing",
            "Recommendation strategy and mock interviews",
        ],
    },
    {
        phase: "04",
        label: "Self-Directed Applicants",
        intro: "On-demand coaching for self-directed graduate applicants who want expert feedback at key decision points without a full-service package.",
        items: [
            "Targeted reviews of drafts — SOP, CV, or essay supplements",
            "School list sanity checks and application timeline audits",
            "Hour-based or milestone-based engagements",
            "Ideal for candidates managing most of the process independently",
        ],
    },
];

const placements = [
    { region: "Medical School", programs: ["Harvard Medical School", "Johns Hopkins SOM", "UCSF", "Stanford SOM", "Columbia VP&S", "Yale SOM", "Perelman / Penn", "Weill Cornell", "NYU Grossman", "Mount Sinai Icahn"] },
    { region: "Doctoral Programs", programs: ["MIT EECS PhD", "Stanford Bioengineering", "Harvard GSAS", "Princeton Politics", "Yale Economics", "Caltech Physics", "Berkeley Chemistry", "Cornell CS", "Chicago Sociology"] },
    { region: "MBA Programs", programs: ["Harvard Business School", "Stanford GSB", "Wharton", "Chicago Booth", "MIT Sloan", "Kellogg", "Columbia Business", "Yale SOM", "Tuck", "Haas"] },
];

export default function Graduate() {
    return (
        <main data-testid="page-graduate" className="min-h-screen">
            <Nav />

            <PageHeader
                eyebrow="Graduate Admissions"
                title="The next chapter."
                italicWord="Made deliberate."
                subtitle="Strategic guidance for medical school, doctoral, MBA, and self-directed applicants."
                breadcrumb={[{ label: "Graduate" }]}
            />

            {/* WHAT WE DO */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <SectionHeading
                    eyebrow="What We Do"
                    title="A focused advisory practice for graduate admissions."
                    subtitle="From research fit to interview prep, our work spans the full graduate application year — across four distinct tracks."
                />

                <div
                    className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-14"
                    style={{ borderTop: "2px solid var(--navy)", paddingTop: 48 }}
                >
                    {tracks.map((p, i) => (
                        <div key={p.phase} data-testid={`graduate-track-${i}`}>
                            <div className="flex flex-col items-center text-center">
                                <div
                                    className="flex items-center justify-center"
                                    style={{
                                        width: 56,
                                        height: 56,
                                        background: "var(--orange)",
                                        color: "#fff",
                                        borderRadius: "50%",
                                        boxShadow: "0 4px 14px rgba(255,152,0,0.28)",
                                    }}
                                >
                                    <span
                                        className="font-display"
                                        style={{ fontSize: 24, lineHeight: 1, color: "#fff", fontWeight: 600, letterSpacing: "-0.01em" }}
                                    >
                                        {p.phase}
                                    </span>
                                </div>
                                <p
                                    className="font-mono mt-5"
                                    style={{
                                        fontSize: 14,
                                        letterSpacing: "0.22em",
                                        textTransform: "uppercase",
                                        color: "var(--navy)",
                                        fontWeight: 600,
                                    }}
                                >
                                    {p.label}
                                </p>
                                <div className="mt-4" style={{ width: 32, height: 2, background: "var(--orange)" }} />
                            </div>

                            <p
                                className="font-serif mt-6"
                                style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink)", maxWidth: 560, margin: "24px auto 0" }}
                            >
                                {p.intro}
                            </p>

                            <ul className="mt-6 space-y-3.5" style={{ maxWidth: 560, margin: "24px auto 0" }}>
                                {p.items.map((it, j) => (
                                    <li
                                        key={j}
                                        className="flex items-start gap-3"
                                        data-testid={`graduate-track-${i}-item-${j}`}
                                    >
                                        <span
                                            aria-hidden="true"
                                            style={{
                                                marginTop: 9,
                                                width: 6,
                                                height: 6,
                                                background: "var(--navy)",
                                                flexShrink: 0,
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <p
                                            className="font-serif"
                                            style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--ink)" }}
                                        >
                                            {it}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHERE STUDENTS GO */}
            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <SectionHeading
                    eyebrow="Where Our Students Go"
                    title="Graduate programs where our applicants have been admitted."
                    subtitle="A representative selection across medicine, doctoral research, and business."
                />

                <div
                    className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px"
                    style={{ background: "var(--line)", border: "1px solid var(--line)" }}
                >
                    {placements.map((g, i) => (
                        <article
                            key={g.region}
                            className="p-8 lg:p-10"
                            style={{ background: "var(--paper)" }}
                            data-testid={`graduate-placement-${i}`}
                        >
                            <div className="flex items-center gap-3">
                                <div style={{ width: 24, height: 1, background: "var(--orange)" }} />
                                <p
                                    className="font-mono"
                                    style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                                >
                                    {g.region}
                                </p>
                            </div>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {g.programs.map((s, j) => (
                                    <span
                                        key={s}
                                        data-testid={`graduate-placement-${i}-school-${j}`}
                                        className="font-display"
                                        style={{
                                            display: "inline-block",
                                            padding: "8px 12px",
                                            background: "var(--mist)",
                                            border: "1px solid var(--line)",
                                            color: "var(--navy)",
                                            fontSize: 13.5,
                                            lineHeight: 1.2,
                                            fontWeight: 500,
                                            letterSpacing: "-0.005em",
                                        }}
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <ClosingCTA />
            <Footer />
        </main>
    );
}
