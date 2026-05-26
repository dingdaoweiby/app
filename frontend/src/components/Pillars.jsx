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
            <div>
                <div className="flex items-center gap-3">
                    <div style={{ width: 32, height: 1, background: "var(--orange)" }} />
                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                        Approach
                    </p>
                </div>
                <h2
                    className="font-display mt-6"
                    style={{
                        fontSize: "clamp(32px, 3.4vw, 50px)",
                        lineHeight: 1.12,
                        letterSpacing: "-0.02em",
                        fontWeight: 500,
                        color: "var(--navy)",
                        maxWidth: 880,
                    }}
                >
                    Three convictions —<br />
                    <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>the practice we built around them.</em>
                </h2>
                <div className="mt-8" style={{ width: 56, height: 2, background: "var(--navy)" }} />
                <p className="font-serif italic mt-6" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--steel)", maxWidth: 620 }}>
                    These principles shape every decision we make on behalf of a family — from first conversation to submitted application.
                </p>
            </div>

            <div className="mt-16">
                {/* Circles with connecting line */}
                <div className="relative grid grid-cols-3 gap-6 md:gap-10">
                    {/* horizontal connector line behind circles */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            top: 36,
                            left: "16.66%",
                            right: "16.66%",
                            height: 1,
                            background: "var(--orange)",
                            opacity: 0.5,
                            zIndex: 0,
                        }}
                    />
                    {pillars.map((p, i) => (
                        <div
                            key={p.n}
                            data-testid={`pillar-${i}`}
                            className="relative flex flex-col items-center text-center"
                            style={{ zIndex: 1 }}
                        >
                            <div
                                style={{
                                    width: 72,
                                    height: 72,
                                    borderRadius: "50%",
                                    background: "var(--orange)",
                                    color: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 4px 14px rgba(255,152,0,0.28)",
                                }}
                            >
                                <span
                                    className="font-display"
                                    style={{
                                        fontSize: 30,
                                        lineHeight: 1,
                                        color: "#fff",
                                        fontWeight: 600,
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {i + 1}
                                </span>
                            </div>
                            <h3
                                className="font-display mt-7"
                                style={{
                                    fontSize: "clamp(20px, 1.6vw, 24px)",
                                    lineHeight: 1.2,
                                    color: "var(--navy)",
                                    fontWeight: 600,
                                    letterSpacing: "-0.01em",
                                    maxWidth: 320,
                                }}
                            >
                                {p.title}
                            </h3>
                            <div className="mt-4" style={{ width: 28, height: 2, background: "var(--orange)" }} />
                            <p
                                className="font-serif mt-5"
                                style={{
                                    fontSize: 15.5,
                                    lineHeight: 1.65,
                                    color: "var(--ink)",
                                    maxWidth: 320,
                                }}
                            >
                                {p.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
