import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ClosingCTA from "@/components/ClosingCTA";
import { Compass, ShieldCheck, CalendarRange, HeartHandshake, GraduationCap, Users, Award } from "lucide-react";

const specialists = [
    {
        Icon: Compass,
        role: "Strategic Counselor",
        sub: "Direction and long-term planning",
        bullets: [
            "Builds the Comprehensive Student Evaluation",
            "Sets Ivy / Top 15 targets and defines the ideal school profile",
            "Designs the College Roadmap across Grades 9–12",
            "Recalibrates the strategy every year as your child grows",
        ],
    },
    {
        Icon: ShieldCheck,
        role: "Admissions Officer",
        sub: "Quality and institutional perspective",
        bullets: [
            "Former admissions officer from a top-tier university",
            "Reviews every deliverable with a critical institutional lens",
            "Pressure-tests the narrative, school list, and application materials",
            "Catches weaknesses long before submission",
        ],
    },
    {
        Icon: CalendarRange,
        role: "Resource Manager",
        sub: "Execution and opportunities",
        bullets: [
            "Sources research placements, summer programs, and competitions",
            "Manages AP and SAT timelines, scholarships, and awards calendars",
            "Tracks every milestone across three years",
            "Turns strategy into concrete, scheduled action",
        ],
    },
    {
        Icon: HeartHandshake,
        role: "Family Coach",
        sub: "Mental health and family dynamics",
        bullets: [
            "Monitors teen mental health throughout high-pressure periods",
            "Supports parent-child communication and expectation alignment",
            "Helps the family navigate stress without damaging relationships",
            "ICF-certified — a role no other consulting practice offers",
        ],
    },
];

const dimensions = [
    {
        title: "Comprehensive Student Evaluation",
        tagline: "The foundation. Before any planning begins, we map who your child actually is.",
        items: [
            "Personality, learning style and executive function assessment",
            "Gallup StrengthsFinder — full 34-dimension talent profile",
            "Academic interest mapping and potential major recommendations",
            "Career trajectory — a 20-year directional read",
            "Student profile: strengths, gaps, and risk points",
            "Family education style assessment — expectations, involvement, alignment",
        ],
        deliverable: "Comprehensive Student Report",
    },
    {
        title: "College Strategy Planning",
        tagline: "Where to aim — and why. A living strategy, not a static list.",
        items: [
            "Dream schools (Ivy League / Top 15) target setting — data-grounded, no false promises",
            "Ideal school profile: academic fit, culture, activities, location",
            "Reach / Match / Safety portfolio — balanced, risk-managed",
            "Major–school alignment logic",
            "Annual recalibration — the list evolves as your child grows",
        ],
        deliverable: "College Selection Strategy",
    },
    {
        title: "College Roadmap (Grades 9–12)",
        tagline: "The operational plan. Five parallel tracks, running simultaneously across three years.",
        items: [
            "GPA targets, AP sequencing, SAT milestones and testing timeline",
            "Retake planning and score optimization",
            "Clubs: participate → contribute → lead",
            "Sports: recreational vs. recruit track",
            "Arts: portfolio development and competitions",
            "Volunteering: long-term, impact-driven projects",
            "Pre-college courses, online learning, and summer programs",
            "Research: independent or mentor-led, with publishable output",
            "Projects: engineering, business, or social impact",
            "Competitions: AMC, ISEF, DECA, and equivalents",
            "Awards and honors: National / State / School pipeline with hit-rate strategy",
        ],
        deliverable: "College Roadmap with milestone tracking",
    },
    {
        title: "Progress Report + Regular Follow-Up Meetings",
        titleNode: (
            <>
                Progress Report +<br />
                Regular Follow-Up Meetings
            </>
        ),
        tagline: "The accountability structure. Strategy means nothing without execution.",
        groups: [
            { h: "1) Core Academics", items: ["Course selection", "Academic criteria — GPA and rigor balance", "Standardized tests — SAT / AP planning"] },
            { h: "2) Extracurricular Activity", items: ["Required activities — matched to target direction", "Optional activities — interest exploration", "Annual activity goal: Explore → Develop → Lead", "Activity depth design: participate → deepen → impact"] },
            { h: "3) Academics Theme and Achievement", items: ["Research / Projects — output-driven", "Summer programs", "Specialties — Art / Athlete / Talent"] },
            { h: "4) Personal Growth and Family Relationships", items: ["Basic skills: writing, public speaking, STEM fluency", "Interest exploration: videos, seminars, external exposure", "Career path — aligned with the evaluation report", "Family relationships", "Teenagers' mental health"] },
        ],
        deliverable: "Annual Plan + Monthly Progress Report",
    },
];

const partnership = [
    {
        Icon: GraduationCap,
        label: "Student Effort",
        body: "Curiosity, discipline, and the willingness to show up — the most important ingredient, and the only one we can't substitute.",
    },
    {
        Icon: Users,
        label: "Parent Engagement",
        body: "Calibrated expectations, steady support, and an honest dialogue at home — without which strategy quickly unravels.",
    },
    {
        Icon: Award,
        label: "Consulting Expertise",
        body: "Coordinated specialists, institutional insight, and an operating system that turns intention into outcomes.",
    },
];

export default function CollegeStrategy() {
    return (
        <main data-testid="page-college-strategy" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow="9–11th Grade Cultivation"
                title="Real capability. Real growth."
                italicWord="The offer is the proof."
                subtitle="Skills, mindset, substance — built through three years of authentic development, not just application tactics."
                breadcrumb={[{ label: "College", to: "/college/strategic-planning" }, { label: "9–11th Grade Strategic Planning" }]}
                background="var(--paper)"
            />

            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <div className="grid grid-cols-12 gap-x-12 gap-y-10 items-start">
                    <aside className="col-span-12 lg:col-span-5">
                        <div
                            className="overflow-hidden"
                            style={{
                                aspectRatio: "1/1",
                                border: "1px solid var(--line)",
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=85&auto=format&fit=crop"
                                alt="Open book on a quiet desk — a symbol of authentic study"
                                className="w-full h-full object-cover"
                                style={{ filter: "grayscale(40%) contrast(1.05)" }}
                            />
                        </div>
                        <p className="eyebrow mt-3">Authentic Growth</p>
                    </aside>

                    <div className="col-span-12 lg:col-span-7 lg:pl-2">
                        <div className="flex items-center gap-3">
                            <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                            <p
                                className="font-mono"
                                style={{
                                    fontSize: 11,
                                    letterSpacing: "0.24em",
                                    textTransform: "uppercase",
                                    color: "var(--orange)",
                                    fontWeight: 500,
                                }}
                            >
                                Our Belief
                            </p>
                        </div>

                        <p
                            className="font-display mt-6"
                            style={{
                                fontSize: "clamp(20px, 1.7vw, 26px)",
                                lineHeight: 1.4,
                                color: "var(--orange)",
                                fontWeight: 500,
                                fontStyle: "italic",
                            }}
                        >
                            “Motivation cannot be imposed. It must be awakened.
                            <br />
                            We build students for themselves, not simply for an application.”
                        </p>

                        <div className="mt-7" style={{ width: 36, height: 2, background: "var(--navy)" }} />

                        <p className="font-serif mt-7" style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--ink)" }}>
                            Through challenge, guidance, and genuine belief in each child, we cultivate what no consultant can manufacture: discipline that comes from within, a sense of direction that belongs to them, and the quiet confidence that doesn't need to perform to be seen.
                        </p>
                        <p className="font-serif mt-5" style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--ink)" }}>
                            By the time application season arrives, nothing needs to be forced. What colleges see is the result of years of authentic growth — and what your child carries forward is far more valuable than any acceptance letter.
                        </p>
                    </div>
                </div>
            </section>

            {/* Specialists */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-3">
                        <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                        <p
                            className="font-mono"
                            style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                        >
                            Who Serves Your Family
                        </p>
                    </div>
                    <h2
                        className="font-display mt-5"
                        style={{
                            fontSize: "clamp(32px, 3vw, 44px)",
                            lineHeight: 1.15,
                            letterSpacing: "-0.01em",
                            fontWeight: 500,
                            color: "var(--navy)",
                            maxWidth: 880,
                        }}
                    >
                        <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>Four experts</em>{" "}
                        for one student <span style={{ color: "var(--navy)" }}>/ one family.</span>
                    </h2>
                    <p
                        className="font-serif mt-5"
                        style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--ink)", maxWidth: 720 }}
                    >
                        Every decision passes through all four. Your child is never handed off.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {specialists.map((s, i) => {
                        const Icon = s.Icon;
                        // Pairings:
                        // Strategic Counselor (0) + Family Coach (3) → mist
                        // Admissions Officer (1) + Resource Manager (2) → mist-deep
                        const palettes = [
                            { bg: "var(--mist)",      accent: "var(--orange)" },
                            { bg: "var(--mist-deep)", accent: "var(--orange)" },
                            { bg: "var(--mist-deep)", accent: "var(--orange)" },
                            { bg: "var(--mist)",      accent: "var(--orange)" },
                        ];
                        const palette = palettes[i % palettes.length];
                        return (
                            <article
                                key={s.role}
                                className="p-7 lg:p-8 relative overflow-hidden"
                                style={{
                                    background: palette.bg,
                                    border: "1px solid var(--line)",
                                }}
                                data-testid={`specialist-${i}`}
                            >
                                {/* Decorative corner accent */}
                                <div
                                    aria-hidden="true"
                                    style={{
                                        position: "absolute",
                                        right: -36,
                                        top: -36,
                                        width: 120,
                                        height: 120,
                                        borderRadius: "50%",
                                        background: "var(--paper)",
                                        opacity: 0.6,
                                    }}
                                />
                                <div className="relative">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="flex items-center justify-center"
                                            style={{
                                                width: 52,
                                                height: 52,
                                                borderRadius: "50%",
                                                background: palette.accent,
                                                color: "#fff",
                                                boxShadow: "0 4px 14px rgba(255,152,0,0.25)",
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Icon size={24} strokeWidth={1.75} />
                                        </div>
                                        <h3
                                            className="font-display"
                                            style={{
                                                fontSize: 22,
                                                lineHeight: 1.2,
                                                color: "var(--navy)",
                                                fontWeight: 600,
                                                letterSpacing: "-0.005em",
                                            }}
                                        >
                                            {s.role}
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
                                        {s.bullets.map((b, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <span
                                                    aria-hidden="true"
                                                    style={{
                                                        marginTop: 8,
                                                        width: 5,
                                                        height: 5,
                                                        background: "var(--navy)",
                                                        flexShrink: 0,
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                                <p className="font-serif" style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink)" }}>
                                                    {b}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <p className="font-serif italic mt-10" style={{ fontSize: 18, lineHeight: 1.5, color: "var(--navy)", maxWidth: 900 }}>
                    Four specialists. One coordinated team. A combined perspective no single consultant can match — and a level of care your child will feel for three years.
                </p>
            </section>

            {/* How We Help You */}
            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <SectionHeading
                    eyebrow="How We Help You"
                    title="Our four-part workflow,"
                    italic="built for the long run."
                    subtitle="A coordinated practice — assessment, strategy, roadmap, and accountability — repeated and refined year after year, from Grade 9 through application season."
                    nowrap
                />

                <ol className="mt-12" style={{ borderTop: "2px solid var(--navy)" }}>
                    {dimensions.map((d, i) => (
                        <li key={d.title} className="py-8" style={{ borderBottom: "1px solid var(--line)" }} data-testid={`dimension-${i}`}>
                            <div className="grid grid-cols-12 gap-x-8 gap-y-4">
                                <div className="col-span-12 lg:col-span-4">
                                    <span className="font-display" style={{ fontSize: 40, lineHeight: 0.9, color: "var(--orange)", fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                                    <h3 className="font-display mt-3" style={{ fontSize: "clamp(20px, 1.6vw, 24px)", lineHeight: 1.2, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}>{d.titleNode || d.title}</h3>
                                    <p className="font-serif italic mt-3" style={{ fontSize: 15, lineHeight: 1.5, color: "var(--steel)" }}>{d.tagline}</p>
                                </div>
                                <div className="col-span-12 lg:col-span-8">
                                    {d.items && (
                                        <ul className="space-y-1.5">
                                            {d.items.map((it, j) => (
                                                <li key={j} className="flex items-start gap-3">
                                                    <span className="font-mono" style={{ fontSize: 10, color: "var(--orange)", marginTop: 6 }}>▸</span>
                                                    <p className="font-serif" style={{ fontSize: 15, lineHeight: 1.5, color: "var(--ink)" }}>{it}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {d.groups && (
                                        <div className="space-y-4">
                                            {d.groups.map((g, j) => (
                                                <div key={j}>
                                                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>{g.h}</p>
                                                    <ul className="mt-1.5 space-y-1.5">
                                                        {g.items.map((it, k) => (
                                                            <li key={k} className="flex items-start gap-3">
                                                                <span className="font-mono" style={{ fontSize: 10, color: "var(--orange)", marginTop: 6 }}>▸</span>
                                                                <p className="font-serif" style={{ fontSize: 15, lineHeight: 1.5, color: "var(--ink)" }}>{it}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <div className="mt-4 pt-3" style={{ borderTop: "1px solid var(--line)" }}>
                                        <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}>→ Deliverable</p>
                                        <p className="font-display mt-1" style={{ fontSize: 16, color: "var(--navy)", fontWeight: 600 }}>{d.deliverable}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Our Partnership — 3-way cooperation */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <SectionHeading
                    eyebrow="Our Partnership"
                    title="Three forces,"
                    italic="one shared mission."
                    subtitle="Outcomes don't come from any single party. They come from the way three groups work together — month after month, year after year."
                />

                <div
                    className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-12"
                    style={{ borderTop: "2px solid var(--navy)", paddingTop: 48 }}
                >
                    {partnership.map((p, i) => {
                        const Icon = p.Icon;
                        return (
                            <div key={p.label} data-testid={`partnership-${i}`}>
                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className="flex items-center justify-center"
                                        style={{
                                            width: 64,
                                            height: 64,
                                            background: "var(--orange)",
                                            color: "#fff",
                                            borderRadius: "50%",
                                            boxShadow: "0 4px 14px rgba(255,152,0,0.28)",
                                        }}
                                    >
                                        <Icon size={30} strokeWidth={1.75} />
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
                                    style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--ink)", textAlign: "center", maxWidth: 360, margin: "24px auto 0" }}
                                >
                                    {p.body}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <ClosingCTA />
            <Footer />
        </main>
    );
}
