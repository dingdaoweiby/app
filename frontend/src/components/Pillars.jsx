const pillars = [
    {
        n: "I",
        roman: "01",
        title: "Personalized Guidance, Rooted in Potential",
        body: "We guide students based on their unique strengths and aspirations. Deep expertise in U.S. admissions translates into individualized strategy — from course selection to essay development — aligned with who your student truly is and where they're headed.",
    },
    {
        n: "II",
        roman: "02",
        title: "Goal-Oriented, Results-Driven",
        body: "Clear objectives from day one. We establish concrete milestones and strategic timelines that lead to measurable outcomes. Every step is purposeful; every decision intentional — a coherent path from where students are to where they want to be.",
    },
    {
        n: "III",
        roman: "03",
        title: "Mental Well-Being and Holistic Development",
        body: "Beyond academics, we prioritize character growth, emotional resilience, and psychological health. The application journey should build confidence and self-awareness — not anxiety — through a supportive environment where students thrive.",
    },
];

export default function Pillars() {
    return (
        <section
            data-testid="pillars"
            id="approach"
            className="section-x section-y"
            style={{ background: "var(--paper)" }}
        >
            <div className="grid grid-cols-12 gap-x-10">
                <div className="col-span-12 lg:col-span-7">
                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                        § II · Approach
                    </p>
                    <h2
                        className="font-display mt-6"
                        style={{
                            fontSize: "clamp(40px, 5vw, 72px)",
                            lineHeight: 1,
                            letterSpacing: "-0.02em",
                            fontWeight: 500,
                            color: "var(--navy)",
                        }}
                    >
                        Three convictions —<br />
                        and the practice we built around them.
                    </h2>
                </div>
                <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-8 lg:mt-0 flex items-end">
                    <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--steel)", fontStyle: "italic" }}>
                        These principles shape every decision we make on behalf of a family — from first conversation to submitted application.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-16" style={{ borderTop: "2px solid var(--navy)" }}>
                {pillars.map((p, i) => (
                    <article
                        key={p.n}
                        data-testid={`pillar-${i}`}
                        className="p-10 lg:p-12"
                        style={{
                            background: "var(--mist)",
                            borderRight: i < pillars.length - 1 ? "1px solid var(--line)" : "none",
                            borderBottom: i < pillars.length - 1 ? "1px solid var(--line)" : "none",
                        }}
                    >
                        <div className="flex items-start justify-between mb-12">
                            <span
                                className="font-display"
                                style={{
                                    fontSize: "clamp(56px, 6vw, 96px)",
                                    lineHeight: 0.85,
                                    color: "var(--orange)",
                                    fontWeight: 600,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {p.n}
                            </span>
                            <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", color: "var(--steel)", marginTop: 10, textTransform: "uppercase" }}>
                                Pillar {p.roman}
                            </span>
                        </div>

                        <h3
                            className="font-display"
                            style={{
                                fontSize: "clamp(22px, 1.75vw, 26px)",
                                lineHeight: 1.2,
                                color: "var(--navy)",
                                fontWeight: 600,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {p.title}
                        </h3>

                        <div className="mt-6" style={{ width: 36, height: 1, background: "var(--orange)" }} />

                        <p className="font-serif mt-6" style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink)" }}>
                            {p.body}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
