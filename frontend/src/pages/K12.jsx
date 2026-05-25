import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";

const HERO_IMG = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=85&auto=format&fit=crop";

const services = [
    "Personalized student assessment — strengths, interests, learning style, and areas for growth",
    "Family education philosophy development — articulating what matters to you",
    "School selection guidance — curated list based on your child's profile, not rankings alone",
    "Application timeline and step-by-step planning",
    "School visit strategy — what to look for, what to ask, how to prepare",
    "ISEE / SSAT preparation — diagnostic, study plan, practice tests, and score tracking",
    "Parent and student essay guidance — brainstorming, drafting, and editing",
    "Interview and visit day coaching — for both parents and students",
    "Recommender strategy — who to ask, how to communicate with current schools",
    "Application review and submission management",
    "Waitlist strategy and post-decision advising",
    "Enrollment transition guidance",
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
        name: "Emily D.",
        school: "Phillips Exeter Academy",
        tag: "Boarding",
        body: "A quiet, math-driven 8th grader with strong test scores but a flat activity list that looked like every other high-achieving applicant. We helped the family step back from resume-padding and instead built the application around his genuine obsession with topology puzzles and the math club he started in his garage. Exeter's admissions team saw a thinker, not a template. Admitted with financial aid.",
    },
    {
        name: "Junxian W.",
        school: "The Pingry School",
        tag: "NJ Day School",
        body: "A 5th grader applying for 6th-grade entry whose parents were convinced she needed more trophies. We redirected the narrative toward what was already there — a deep love of environmental science and a quiet leadership style her teachers adored but her parents hadn't noticed. Her parent essay and interview reflected a family that truly understood their child. Admitted to Pingry and Newark Academy; enrolled at Pingry.",
    },
    {
        name: "John C.",
        school: "Trinity School",
        tag: "NY Day School",
        body: "A Kindergarten applicant in a hyper-competitive Manhattan cycle. The family had been coached by another consultant to rehearse interview answers. We undid that entirely — helped the parents relax, reframed the parent essay around their actual parenting values, and let the child show up as herself in the playgroup observation. Admitted on the first round.",
    },
    {
        name: "Sophie L.",
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
                eyebrow="§ Program · K–9 Private School Admissions"
                title="The right school. The right fit."
                italicWord="From the very beginning."
                subtitle=""
                breadcrumb={[{ label: "K–12" }]}
            />

            {/* Hero image */}
            <section className="section-x" style={{ background: "var(--paper)", paddingTop: 48, paddingBottom: 0 }}>
                <div className="img-bordered overflow-hidden" style={{ aspectRatio: "16/7" }}>
                    <img src={HERO_IMG} alt="Young students learning in a bright classroom" className="w-full h-full object-cover" style={{ filter: "grayscale(35%) contrast(1.05)" }} />
                </div>
                <p className="eyebrow mt-3">Plate K — The Classroom</p>
            </section>

            {/* What we do */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <div className="grid grid-cols-12 gap-x-10 gap-y-10">
                    <div className="col-span-12 lg:col-span-5">
                        <p className="eyebrow">§ I · What We Do</p>
                        <h2 className="font-display mt-5" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 500, color: "var(--navy)" }}>
                            Full-service private school admissions.
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                        <p className="font-serif" style={{ fontSize: "clamp(18px, 1.45vw, 22px)", lineHeight: 1.6, color: "var(--ink)" }}>
                            We guide families through every stage of the private school admissions process — day schools and boarding schools, Kindergarten through 9th grade. Our work goes beyond checklists and timelines. We help families understand who their child is, identify the schools that genuinely fit, and present an application that lets the admissions officer see your child clearly.
                        </p>
                    </div>
                </div>

                <div className="mt-16 pt-10" style={{ borderTop: "2px solid var(--navy)" }}>
                    <p className="eyebrow mb-8">Our Consulting Package Includes</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                        {services.map((s, i) => (
                            <li key={i} className="flex items-start gap-3 py-2" style={{ borderBottom: "1px solid var(--line)" }} data-testid={`k12-service-${i}`}>
                                <span className="font-mono" style={{ fontSize: 11, color: "var(--orange)", marginTop: 4, fontWeight: 500 }}>{String(i + 1).padStart(2, "0")}</span>
                                <p className="font-serif" style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}>{s}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Where students go */}
            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <p className="eyebrow">§ II · Where Our Students Go</p>
                <h2 className="font-display mt-5" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 500, color: "var(--navy)", maxWidth: 820 }}>
                    Schools our families have been admitted to.
                </h2>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {schoolGroups.map((g, i) => (
                        <article key={g.region} className="p-8" style={{ background: "var(--paper)", border: "1px solid var(--line)" }} data-testid={`k12-region-${i}`}>
                            <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>{g.region}</p>
                            <div className="my-5" style={{ width: 36, height: 2, background: "var(--orange)" }} />
                            <p className="font-display" style={{ fontSize: 18, lineHeight: 1.55, color: "var(--navy)", fontWeight: 500, letterSpacing: "-0.005em" }}>
                                {g.schools}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Student stories */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <p className="eyebrow">§ III · Student Stories</p>
                <h2 className="font-display mt-5" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 500, color: "var(--navy)" }}>
                    How families found the right fit.
                </h2>

                <ol className="mt-14" style={{ borderTop: "2px solid var(--navy)" }}>
                    {stories.map((s, i) => (
                        <li key={s.name} className="grid grid-cols-12 gap-x-8 py-10" style={{ borderBottom: "1px solid var(--line)" }} data-testid={`k12-story-${i}`}>
                            <div className="col-span-12 lg:col-span-3">
                                <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>{s.tag}</p>
                                <h3 className="font-display mt-2" style={{ fontSize: 22, color: "var(--navy)", fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.005em" }}>
                                    {s.school}
                                </h3>
                                <p className="font-mono mt-3" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--steel)", textTransform: "uppercase" }}>{s.name}</p>
                            </div>
                            <div className="col-span-12 lg:col-span-9 mt-3 lg:mt-0">
                                <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink)" }}>{s.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <p className="font-serif italic mt-12" style={{ fontSize: "clamp(20px, 2vw, 28px)", lineHeight: 1.4, color: "var(--navy)", maxWidth: 820 }}>
                    “Every child deserves to be seen clearly. We make sure the right school sees them.”
                </p>
            </section>

            <PageCTA />
            <Footer />
        </main>
    );
}
