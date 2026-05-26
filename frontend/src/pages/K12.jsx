import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ClosingCTA from "@/components/ClosingCTA";
import SchoolLogo from "@/components/SchoolLogo";

const servicePhases = [
    {
        phase: "01",
        label: "Discovery & Fit",
        items: [
            "Personalized student assessment — strengths, interests, learning style",
            "Family education philosophy — what matters most to your family",
            "School selection guidance — curated for fit, not just rankings",
            "School visit strategy — what to look for, what to ask",
        ],
    },
    {
        phase: "02",
        label: "Application & Preparation",
        items: [
            "Timeline and step-by-step application plan",
            "ISEE / SSAT preparation — diagnostic, study plan, practice tests",
            "Parent and student essay guidance — brainstorming, drafting, editing",
            "Interview and visit-day coaching — for parents and students",
            "Recommender strategy — who to ask and how to approach them",
        ],
    },
    {
        phase: "03",
        label: "Submission & Beyond",
        items: [
            "Final application review and submission management",
            "Waitlist strategy and post-decision advising",
            "Enrollment transition guidance — academic, social, logistical",
        ],
    },
];

const schoolGroups = [
    {
        region: "Top Boarding Schools",
        schools: [
            "Phillips Academy Andover",
            "Phillips Exeter Academy",
            "St. Paul's School",
            "Deerfield Academy",
            "The Lawrenceville School",
            "The Hotchkiss School",
            "Choate Rosemary Hall",
            "Groton School",
            "Middlesex School",
            "Milton Academy",
        ],
    },
    {
        region: "New Jersey",
        schools: [
            "Newark Academy",
            "The Pingry School",
            "Princeton Day School",
            "Gill St. Bernard's",
            "Kent Place School",
            "Montclair Kimberley Academy",
            "Dwight-Englewood School",
            "Saddle River Day School",
        ],
    },
    {
        region: "New York",
        schools: [
            "Trinity School",
            "Horace Mann School",
            "Collegiate School",
            "Dalton School",
            "Brearley School",
            "Spence School",
            "Chapin School",
            "Riverdale Country School",
            "Poly Prep Country Day School",
            "Rye Country Day School",
            "Ethical Culture Fieldston School",
            "Hackley School",
        ],
    },
    {
        region: "California",
        schools: [
            "Harvard-Westlake School",
            "The Harker School",
            "Castilleja School",
            "Marlborough School",
            "The Bishop's School",
            "Chadwick School",
            "Crystal Springs Uplands School",
            "Menlo School",
            "Head-Royce School",
            "Polytechnic School",
        ],
    },
];

const stories = [
    {
        name: "E.D.",
        school: "Phillips Exeter Academy",
        domain: "exeter.edu",
        tag: "Boarding",
        body: "A quiet, math-driven 8th grader with strong test scores but a flat activity list that looked like every other high-achieving applicant. We helped the family step back from resume-padding and instead built the application around his genuine obsession with topology puzzles and the math club he started in his garage. Exeter's admissions team saw a thinker, not a template. Admitted with financial aid.",
    },
    {
        name: "J.W.",
        school: "The Pingry School",
        domain: "pingry.org",
        tag: "NJ Day School",
        body: "A 5th grader applying for 6th-grade entry whose parents were convinced she needed more trophies. We redirected the narrative toward what was already there — a deep love of environmental science and a quiet leadership style her teachers adored but her parents hadn't noticed. Her parent essay and interview reflected a family that truly understood their child. Admitted to Pingry and Newark Academy; enrolled at Pingry.",
    },
    {
        name: "J.C.",
        school: "Trinity School",
        domain: "trinityschoolnyc.org",
        tag: "NY Day School",
        body: "A Kindergarten applicant in a hyper-competitive Manhattan cycle. The family had been coached by another consultant to rehearse interview answers. We undid that entirely — helped the parents relax, reframed the parent essay around their actual parenting values, and let the child show up as herself in the playgroup observation. Admitted on the first round.",
    },
    {
        name: "S.L.",
        school: "The Harker School",
        domain: "harker.org",
        tag: "CA Day School",
        body: "A 7th grader transferring from public school with no private school network, no legacy, and parents who spoke limited English. We handled the full application architecture — school selection, ISEE prep, essay development, interview coaching in both English and Mandarin — and positioned the student's robotics work and Mandarin debate experience as distinctive strengths. Admitted to Harker and Castilleja.",
    },
];

export default function K12() {
    return (
        <main data-testid="page-k12" className="min-h-screen">
            <Nav />

            <PageHeader
                eyebrow="K–12 Private School Admissions"
                title="The right school."
                italicWord="The right fit."
                subtitle="Every child deserves to be seen clearly. We make sure the right school sees them."
                breadcrumb={[{ label: "K–12" }]}
            />

            {/* WHAT WE DO */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <SectionHeading
                    eyebrow="What We Do"
                    title="A complete advisory practice for private school admissions."
                    subtitle="From first conversation to enrollment day, our work spans every stage of the application year — testing, narrative, interviews, school selection, and decision support."
                />

                <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-12" style={{ borderTop: "2px solid var(--navy)", paddingTop: 40 }}>
                    {servicePhases.map((p, i) => (
                        <div key={p.phase} data-testid={`k12-phase-${i}`}>
                            <div className="flex flex-col items-center text-center">
                                <div
                                    className="flex items-center justify-center"
                                    style={{
                                        width: 56,
                                        height: 56,
                                        background: "var(--orange)",
                                        color: "#fff",
                                        flexShrink: 0,
                                        borderRadius: "50%",
                                        boxShadow: "0 4px 14px rgba(255,152,0,0.28)",
                                    }}
                                >
                                    <span
                                        className="font-display"
                                        style={{
                                            fontSize: 24,
                                            lineHeight: 1,
                                            color: "#fff",
                                            fontWeight: 600,
                                            letterSpacing: "-0.01em",
                                        }}
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

                            <ul className="mt-6 space-y-3.5">
                                {p.items.map((it, j) => (
                                    <li
                                        key={j}
                                        className="flex items-start gap-3"
                                        data-testid={`k12-phase-${i}-item-${j}`}
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
                                            style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}
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
                    title="Day and boarding schools where our families have been admitted."
                    subtitle="A representative selection across the country — boarding programs and leading day schools in New Jersey, New York, and California."
                />

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--line)", border: "1px solid var(--line)" }}>
                    {schoolGroups.map((g, i) => (
                        <article
                            key={g.region}
                            className="p-8 lg:p-10"
                            style={{ background: "var(--paper)" }}
                            data-testid={`k12-region-${i}`}
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
                                    {g.region}
                                </p>
                            </div>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {g.schools.map((s, j) => (
                                    <span
                                        key={s}
                                        data-testid={`k12-region-${i}-school-${j}`}
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

            {/* STUDENT STORIES */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <SectionHeading
                    eyebrow="Student Stories"
                    title="How four families found the right fit."
                    subtitle="Short cases from recent admissions cycles. Initials shown out of respect for privacy."
                />

                <ol className="mt-12" style={{ borderTop: "2px solid var(--navy)" }}>
                    {stories.map((s, i) => (
                        <li
                            key={s.school + i}
                            className="grid grid-cols-12 gap-x-6 py-8"
                            style={{ borderBottom: "1px solid var(--line)" }}
                            data-testid={`k12-story-${i}`}
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

                <p
                    className="font-serif italic mt-12"
                    style={{ fontSize: "clamp(18px, 1.8vw, 24px)", lineHeight: 1.4, color: "var(--navy)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                >
                    “Every child deserves to be seen clearly. We make sure the right school sees them.”
                </p>
            </section>

            <ClosingCTA />
            <Footer />
        </main>
    );
}
