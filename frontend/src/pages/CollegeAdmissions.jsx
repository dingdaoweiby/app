import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ClosingCTA from "@/components/ClosingCTA";
import SchoolLogo from "@/components/SchoolLogo";

const stages = [
    {
        h: "Student Assessment and Strategy",
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
        h: "Submission Review and Financial Aid Support",
        items: [
            "Comprehensive final review of every essay, form, and supporting document",
            "Coordinated submission across Common App, UC, Coalition, and school portals",
            "FAFSA and CSS Profile preparation and submission guidance",
            "Scholarship identification — institutional, merit-based, and external awards",
            "Financial aid appeal letters and net-cost comparison support",
        ],
    },
    {
        h: "Interview Preparation",
        items: [
            "Mock interviews with targeted, school-specific feedback",
            "Storytelling, presence, and composure coaching",
            "Alumni and admissions-officer interview formats",
            "Wardrobe, body language, and on-camera readiness for virtual interviews",
        ],
    },
    {
        h: "Decision Support",
        items: [
            "Application status tracking and follow-up with colleges",
            "Decision release support — reviewing offers, waitlists, and deferrals",
            "Waitlist strategy — letters of continued interest and timing",
            "Enrollment decision advising — comparing offers and final school selection",
            "Pre-matriculation guidance — housing, course planning, and transition support",
        ],
    },
];

const stories = [
    {
        name: "L.W.",
        school: "Harvard University",
        domain: "harvard.edu",
        tag: "Ivy League · ED",
        body: "A first-generation applicant from a competitive public high school whose teachers described her as 'quietly extraordinary.' Her academic record was elite but her activity list looked similar to thousands of other strong candidates. We helped her surface the through-line connecting her interest in computational linguistics, her side project translating literary fiction, and her work with refugee families. The application read like a thesis statement on who she was becoming, not a portfolio of accomplishments. Admitted ED.",
    },
    {
        name: "K.N.",
        school: "MIT",
        domain: "mit.edu",
        tag: "Elite Technical · EA",
        body: "An IMO-level mathematician whose parents were convinced he needed more 'leadership' to stand out. We made the opposite case — depth, not breadth — and rebuilt the essay strategy around his original research with a university faculty mentor. The MIT application showed admissions exactly what they hoped to see: a thinker already operating like one of their PhD students. Admitted EA.",
    },
    {
        name: "S.H.",
        school: "Brown University — PLME",
        domain: "brown.edu",
        tag: "BS / MD",
        body: "A pre-med applicant to one of the most selective combined BS/MD programs in the country. She had strong stats but the essays from her previous consultant read like a checklist of pre-med clichés. We started over — surfaced the family story, the hospital volunteering moment that actually changed her, and the philosophy of medicine she had been quietly forming. Admitted to PLME and three other BS/MD programs.",
    },
    {
        name: "R.K.",
        school: "Stanford University",
        domain: "stanford.edu",
        tag: "REA",
        body: "An applicant with strong but not record-breaking stats, applying REA in a year of historically low acceptance rates. We made the strategic call to lean into his unusual combination — competitive ballroom dance and quantitative finance — rather than minimize either. The Stanford essays connected the discipline of one to the precision of the other. Admitted REA.",
    },
];

const placements = {
    "Ivy League": [
        { school: "Harvard", domain: "harvard.edu" },
        { school: "Yale", domain: "yale.edu" },
        { school: "Princeton", domain: "princeton.edu" },
        { school: "Columbia", domain: "columbia.edu" },
        { school: "Penn", domain: "upenn.edu" },
        { school: "Cornell", domain: "cornell.edu" },
        { school: "Brown", domain: "brown.edu" },
        { school: "Dartmouth", domain: "dartmouth.edu" },
    ],
    "Top 15 and Elite Technical": [
        { school: "Stanford", domain: "stanford.edu" },
        { school: "MIT", domain: "mit.edu" },
        { school: "Caltech", domain: "caltech.edu" },
        { school: "Duke", domain: "duke.edu" },
        { school: "UChicago", domain: "uchicago.edu" },
        { school: "Northwestern", domain: "northwestern.edu" },
        { school: "Johns Hopkins", domain: "jhu.edu" },
        { school: "Vanderbilt", domain: "vanderbilt.edu" },
        { school: "Rice", domain: "rice.edu" },
        { school: "WashU", domain: "wustl.edu" },
        { school: "Notre Dame", domain: "nd.edu" },
        { school: "Emory", domain: "emory.edu" },
    ],
    "Top Public and Liberal Arts": [
        { school: "UC Berkeley", domain: "berkeley.edu" },
        { school: "UCLA", domain: "ucla.edu" },
        { school: "UMich", domain: "umich.edu" },
        { school: "UNC Chapel Hill", domain: "unc.edu" },
        { school: "UVA", domain: "virginia.edu" },
        { school: "Williams", domain: "williams.edu" },
        { school: "Amherst", domain: "amherst.edu" },
        { school: "Pomona", domain: "pomona.edu" },
        { school: "Swarthmore", domain: "swarthmore.edu" },
        { school: "Wellesley", domain: "wellesley.edu" },
    ],
};

function PlacementCard({ region, schools }) {
    return (
        <article
            className="p-7 lg:p-8"
            style={{ background: "var(--paper)" }}
            data-testid={`ca-region-${region.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        >
            <div className="flex items-center gap-3">
                <div style={{ width: 24, height: 1, background: "var(--orange)" }} />
                <p
                    className="font-mono"
                    style={{
                        fontSize: 11,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--orange)",
                        fontWeight: 500,
                    }}
                >
                    {region}
                </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
                {schools.map((s) => (
                    <div
                        key={s.school}
                        className="flex items-center gap-2"
                        style={{
                            padding: "6px 10px 6px 6px",
                            background: "var(--mist)",
                            border: "1px solid var(--line)",
                        }}
                    >
                        <SchoolLogo domain={s.domain} name={s.school} size={26} imgSize={20} />
                        <span
                            className="font-display"
                            style={{
                                fontSize: 13.5,
                                lineHeight: 1.2,
                                color: "var(--navy)",
                                fontWeight: 500,
                                letterSpacing: "-0.005em",
                            }}
                        >
                            {s.school}
                        </span>
                    </div>
                ))}
            </div>
        </article>
    );
}

export default function CollegeAdmissions() {
    return (
        <main data-testid="page-college-admissions" className="min-h-screen">
            <Nav />

            <PageHeader
                eyebrow="College Admissions Consulting"
                title="Full-cycle college"
                italicWord="admissions consulting."
                subtitle="Expert-led, full-service guidance for students applying to top US universities."
                breadcrumb={[{ label: "College", to: "/college/strategic-planning" }, { label: "Admissions Consulting" }]}
            />

            {/* FIVE STAGES */}
            <section className="section-x" style={{ background: "var(--paper)", paddingTop: 56, paddingBottom: 56 }}>
                <ol style={{ borderTop: "2px solid var(--navy)" }}>
                    {stages.map((b, i) => (
                        <li
                            key={b.h}
                            className="py-5"
                            style={{ borderBottom: "1px solid var(--line)" }}
                            data-testid={`college-admissions-stage-${i}`}
                        >
                            <div className="grid grid-cols-12 gap-x-8 gap-y-4 items-start">
                                <div className="col-span-12 lg:col-span-3">
                                    <div className="flex items-baseline gap-3">
                                        <span
                                            className="font-display"
                                            style={{
                                                fontSize: 32,
                                                lineHeight: 0.9,
                                                color: "var(--orange)",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <p
                                            className="font-mono"
                                            style={{
                                                fontSize: 10,
                                                letterSpacing: "0.22em",
                                                textTransform: "uppercase",
                                                color: "var(--steel)",
                                            }}
                                        >
                                            Stage {i + 1}
                                        </p>
                                    </div>
                                    <h3
                                        className="font-display mt-2"
                                        style={{
                                            fontSize: "clamp(20px, 1.6vw, 24px)",
                                            lineHeight: 1.2,
                                            color: "var(--navy)",
                                            fontWeight: 600,
                                            letterSpacing: "-0.005em",
                                        }}
                                    >
                                        {b.h}
                                    </h3>
                                </div>
                                <div className="col-span-12 lg:col-span-9">
                                    <ul className="space-y-2">
                                        {b.items.map((it, j) => (
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
                                                <p className="font-serif" style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--ink)" }}>
                                                    {it}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            {/* STUDENT STORIES + WHERE THEY GOT IN */}
            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <SectionHeading
                    eyebrow="Student Stories"
                    title="How our students"
                    italic="got in — and where."
                    subtitle="Short cases from recent admissions cycles. Initials shown out of respect for privacy."
                />

                <ol className="mt-12" style={{ borderTop: "2px solid var(--navy)" }}>
                    {stories.map((s, i) => (
                        <li
                            key={s.school + i}
                            className="grid grid-cols-12 gap-x-6 py-8"
                            style={{ borderBottom: "1px solid var(--line)" }}
                            data-testid={`college-story-${i}`}
                        >
                            <div className="col-span-12 lg:col-span-3">
                                <SchoolLogo domain={s.domain} name={s.school} size={56} imgSize={40} />
                                <p
                                    className="font-mono mt-4"
                                    style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                                >
                                    {s.tag}
                                </p>
                                <h3
                                    className="font-display mt-2"
                                    style={{ fontSize: 20, color: "var(--navy)", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.005em" }}
                                >
                                    {s.school}
                                </h3>
                                <p
                                    className="font-mono mt-3"
                                    style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--steel)", textTransform: "uppercase" }}
                                >
                                    {s.name}
                                </p>
                            </div>
                            <div className="col-span-12 lg:col-span-9 mt-3 lg:mt-0">
                                <p className="font-serif" style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--ink)" }}>
                                    {s.body}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>

                {/* Placements grouped by tier */}
                <div className="mt-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                        <p
                            className="font-mono"
                            style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                        >
                            A Representative Selection — Top 30 Admissions
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-px" style={{ background: "var(--line)", border: "1px solid var(--line)" }}>
                        {Object.entries(placements).map(([region, schools]) => (
                            <PlacementCard key={region} region={region} schools={schools} />
                        ))}
                    </div>
                </div>
            </section>

            <ClosingCTA />
            <Footer />
        </main>
    );
}
