import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ClosingCTA from "@/components/ClosingCTA";
import { Stethoscope, FlaskConical, Briefcase, Compass } from "lucide-react";

const tracks = [
    {
        Icon: Stethoscope,
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
        Icon: FlaskConical,
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
        Icon: Briefcase,
        label: "Business School — MBA",
        intro: "Story-first positioning for top business school candidates — essays, recommendations, and interview prep grounded in your leadership trajectory.",
        items: [
            "Career goals clarity and program fit articulation",
            "Resume and leadership story development",
            "Essay brainstorming, structure, and multi-round editing",
            "Recommendation strategy and mock interviews",
        ],
    },
];

const selfDirected = {
    Icon: Compass,
    label: "Self-Directed Applicants",
    intro: "On-demand coaching for self-directed graduate applicants who want expert feedback at key decision points — without committing to a full-service package.",
    items: [
        "Targeted reviews of drafts — SOP, CV, or essay supplements",
        "School list sanity checks and application timeline audits",
        "Hour-based or milestone-based engagements",
        "Ideal for candidates managing most of the process independently",
    ],
};

const placements = [
    { region: "Medical School",  programs: ["Harvard Medical School", "Johns Hopkins SOM", "UCSF", "Stanford SOM", "Columbia VP&S", "Yale SOM", "Perelman / Penn", "Weill Cornell", "NYU Grossman", "Mount Sinai Icahn"] },
    { region: "Doctoral Programs", programs: ["MIT EECS PhD", "Stanford Bioengineering", "Harvard GSAS", "Princeton Politics", "Yale Economics", "Caltech Physics", "Berkeley Chemistry", "Cornell CS", "Chicago Sociology"] },
    { region: "MBA Programs",    programs: ["Harvard Business School", "Stanford GSB", "Wharton", "Chicago Booth", "MIT Sloan", "Kellogg", "Columbia Business", "Yale SOM", "Tuck", "Haas"] },
];

function TrackCard({ Icon, label, intro, items, fullWidth = false, testid }) {
    return (
        <article
            className="p-7 lg:p-8"
            style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
            }}
            data-testid={testid}
        >
            <div className="flex items-center gap-4">
                <div
                    className="flex items-center justify-center"
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
                    <Icon size={28} strokeWidth={1.75} />
                </div>
                <h3
                    className="font-display"
                    style={{
                        fontSize: 19,
                        lineHeight: 1.2,
                        color: "var(--navy)",
                        fontWeight: 600,
                        letterSpacing: "-0.005em",
                    }}
                >
                    {label}
                </h3>
            </div>
            <div className="my-4" style={{ width: 32, height: 2, background: "var(--orange)" }} />
            <p className="font-serif" style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--ink)" }}>
                {intro}
            </p>
            <ul className={`mt-5 ${fullWidth ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5" : "space-y-2.5"}`}>
                {items.map((it, j) => (
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
        </article>
    );
}

export default function Graduate() {
    return (
        <main data-testid="page-graduate" className="min-h-screen">
            <Nav />

            <PageHeader
                eyebrow="Graduate Admissions"
                title="A focused advisory practice for"
                italicWord="graduate admissions."
                subtitle="Strategic guidance for medical school, doctoral, MBA, and self-directed applicants."
                breadcrumb={[{ label: "Graduate" }]}
                background="var(--paper)"
                nowrap
            />

            {/* TRACKS */}
            <section className="section-x" style={{ background: "var(--mist)", paddingTop: 56, paddingBottom: 64 }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tracks.map((t, i) => (
                        <TrackCard key={t.label} {...t} testid={`graduate-track-${i}`} />
                    ))}
                </div>

                <div className="mt-6">
                    <TrackCard {...selfDirected} fullWidth testid="graduate-track-self-directed" />
                </div>
            </section>

            {/* PLACEMENTS */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <div className="flex items-center gap-3 mb-6">
                    <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                    <p
                        className="font-mono"
                        style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                    >
                        Where Our Students Go
                    </p>
                </div>
                <h2
                    className="font-display"
                    style={{
                        fontSize: "clamp(28px, 2.8vw, 40px)",
                        lineHeight: 1.15,
                        letterSpacing: "-0.01em",
                        fontWeight: 500,
                        color: "var(--navy)",
                    }}
                >
                    Graduate programs where our applicants have been{" "}
                    <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>admitted.</em>
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--line)", border: "1px solid var(--line)" }}>
                    {placements.map((g, i) => (
                        <article
                            key={g.region}
                            className="p-7 lg:p-8"
                            style={{ background: "var(--mist)" }}
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
                                {g.programs.map((s) => (
                                    <span
                                        key={s}
                                        className="font-display"
                                        style={{
                                            display: "inline-block",
                                            padding: "8px 12px",
                                            background: "var(--paper)",
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
