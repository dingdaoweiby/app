import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ClosingCTA from "@/components/ClosingCTA";

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
        schools: "Phillips Academy Andover · Phillips Exeter Academy · St. Paul's School · Deerfield Academy · The Lawrenceville School · The Hotchkiss School · Choate Rosemary Hall · Groton School · Middlesex School · Milton Academy",
    },
    {
        region: "New Jersey",
        schools: "Newark Academy · The Pingry School · Princeton Day School · Gill St. Bernard's · Kent Place School · Montclair Kimberley Academy · Dwight-Englewood School · Saddle River Day School",
    },
    {
        region: "New York",
        schools: "Trinity School · Horace Mann School · Collegiate School · Dalton School · Brearley School · Spence School · Chapin School · Riverdale Country School · Poly Prep Country Day School · Rye Country Day School · Ethical Culture Fieldston School · Hackley School",
    },
    {
        region: "California",
        schools: "Harvard-Westlake School · The Harker School · Castilleja School · Marlborough School · The Bishop's School · Chadwick School · Crystal Springs Uplands School · Menlo School · Head-Royce School · Polytechnic School",
    },
];

const stories = [
    {
        name: "E.D.",
        school: "Phillips Exeter Academy",
        tag: "Boarding",
        body: "A quiet, math-driven 8th grader with strong test scores but a flat activity list that looked like every other high-achieving applicant. We helped the family step back from resume-padding and instead built the application around his genuine obsession with topology puzzles and the math club he started in his garage. Exeter's admissions team saw a thinker, not a template. Admitted with financial aid.",
    },
    {
        name: "J.W.",
        school: "The Pingry School",
        tag: "NJ Day School",
        body: "A 5th grader applying for 6th-grade entry whose parents were convinced she needed more trophies. We redirected the narrative toward what was already there — a deep love of environmental science and a quiet leadership style her teachers adored but her parents hadn't noticed. Her parent essay and interview reflected a family that truly understood their child. Admitted to Pingry and Newark Academy; enrolled at Pingry.",
    },
    {
        name: "J.C.",
        school: "Trinity School",
        tag: "NY Day School",
        body: "A Kindergarten applicant in a hyper-competitive Manhattan cycle. The family had been coached by another consultant to rehearse interview answers. We undid that entirely — helped the parents relax, reframed the parent essay around their actual parenting values, and let the child show up as herself in the playgroup observation. Admitted on the first round.",
    },
    {
        name: "S.L.",
        school: "The Harker School",
        tag: "CA Day School",
        body: "A 7th grader transferring from public school with no private school network, no legacy, and parents who spoke limited English. We handled the full application architecture — school selection, ISEE prep, essay development, interview coaching in both English and Mandarin — and positioned the student's robotics work and Mandarin debate experience as distinctive strengths. Admitted to Harker and Castilleja.",
    },
];

export default function K12() {
    return (
        <main data-testid="page-k12" className="min-h-screen">
            <Nav />

            <PageHeader
                eyebrow="K–9 Private School Admissions"
                title="The right school."
                italicWord="The right fit."
                subtitle="Day schools and boarding schools, Kindergarten through 9th grade — guided by people who know how admissions offices actually read an application."
                breadcrumb={[{ label: "K–12" }]}
            />

            {/* WHAT WE DO */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <SectionHeading
                    eyebrow="What We Do"
                    title="Full-service private"
                    italic="school admissions."
                    subtitle="We help families understand who their child is, identify the schools that genuinely fit, and present an application that lets the admissions officer see your child clearly."
                />

                <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-12" style={{ borderTop: "2px solid var(--navy)", paddingTop: 40 }}>
                    {servicePhases.map((p, i) => (
                        <div key={p.phase} data-testid={`k12-phase-${i}`}>
                            <div className="flex items-baseline gap-3">
                                <span
                                    className="font-display"
                                    style={{
                                        fontSize: 32,
                                        lineHeight: 1,
                                        color: "var(--orange)",
                                        fontWeight: 600,
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {p.phase}
                                </span>
                                <p
                                    className="font-mono"
                                    style={{
                                        fontSize: 11,
                                        letterSpacing: "0.22em",
                                        textTransform: "uppercase",
                                        color: "var(--steel)",
                                        fontWeight: 500,
                                    }}
                                >
                                    {p.label}
                                </p>
                            </div>
                            <div className="mt-4" style={{ width: 32, height: 2, background: "var(--orange)" }} />

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
                    title="Schools our families"
                    italic="have been admitted to."
                    subtitle="A representative selection of day and boarding schools across the country."
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
                            <p
                                className="font-display mt-5"
                                style={{ fontSize: 17, lineHeight: 1.55, color: "var(--navy)", fontWeight: 500, letterSpacing: "-0.005em" }}
                            >
                                {g.schools}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* STUDENT STORIES */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <SectionHeading
                    eyebrow="Student Stories"
                    title="How families found"
                    italic="the right fit."
                    subtitle="Four short cases from recent admissions cycles. Initials shown out of respect for privacy."
                />

                <ol className="mt-12" style={{ borderTop: "2px solid var(--navy)" }}>
                    {stories.map((s, i) => (
                        <li
                            key={s.school + i}
                            className="grid grid-cols-12 gap-x-8 py-8"
                            style={{ borderBottom: "1px solid var(--line)" }}
                            data-testid={`k12-story-${i}`}
                        >
                            <div className="col-span-12 lg:col-span-4">
                                <p
                                    className="font-mono"
                                    style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                                >
                                    {s.tag}
                                </p>
                                <h3
                                    className="font-display mt-3"
                                    style={{ fontSize: 22, color: "var(--navy)", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.005em" }}
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
                            <div className="col-span-12 lg:col-span-8 mt-3 lg:mt-0">
                                <p className="font-serif" style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--ink)" }}>
                                    {s.body}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>

                <p
                    className="font-serif italic mt-12"
                    style={{ fontSize: "clamp(20px, 2vw, 28px)", lineHeight: 1.4, color: "var(--navy)", maxWidth: 820 }}
                >
                    “Every child deserves to be seen clearly. We make sure the right school sees them.”
                </p>
            </section>

            <ClosingCTA />
            <Footer />
        </main>
    );
}
