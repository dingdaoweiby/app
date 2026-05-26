const stages = [
    {
        n: "I",
        title: "Diagnostic Intake",
        when: "Week 1",
        body: "We begin with a structured intake — academic profile, extracurricular depth, motivation style, and family dynamics. You leave the first conversation already knowing something new about your child.",
        deliverable: "Comprehensive Student Report",
    },
    {
        n: "II",
        title: "Strategic Roadmap",
        when: "Weeks 2–4",
        body: "Working from the diagnostic, we build a curated school list and a month-by-month execution plan — course selection, activity development, summer planning, and testing strategy aligned to your child's actual trajectory.",
        deliverable: "School List + Application Roadmap",
    },
    {
        n: "III",
        title: "Active Coaching",
        when: "Through Application Year",
        body: "Weekly or bi-weekly sessions across writing, interview preparation, supplemental essays, and decisions in real time. We work alongside your student, not over them.",
        deliverable: "Essay Portfolio + Submitted Application",
    },
    {
        n: "IV",
        title: "Decisions and Beyond",
        when: "Notification Season",
        body: "We help you read offers with clarity — financial aid letters, honors programs, post-acceptance choices, and the conversations that come next. The relationship doesn't end at submission.",
        deliverable: "Final Decision · Transition to Campus",
    },
];

export default function Methodology() {
    return (
        <section
            data-testid="methodology"
            id="methodology"
            className="section-x section-y"
            style={{ background: "var(--mist)" }}
        >
            <div className="grid grid-cols-12 gap-x-10 mb-16">
                <div className="col-span-12 lg:col-span-7">
                    <p className="eyebrow">Methodology</p>
                    <h2
                        className="font-display mt-5"
                        style={{
                            fontSize: "clamp(40px, 5vw, 72px)",
                            lineHeight: 1,
                            letterSpacing: "-0.02em",
                            fontWeight: 500,
                            color: "var(--navy)",
                        }}
                    >
                        What you'll <em style={{ fontStyle: "italic", color: "var(--orange)" }}>experience</em>
                        <br />— a four-stage partnership.
                    </h2>
                </div>
                <div className="col-span-12 lg:col-span-5 flex items-end">
                    <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--steel)", fontStyle: "italic", maxWidth: 480 }}>
                        Every family moves through the same disciplined arc — from understanding, to strategy,
                        to execution, to outcomes. Below is what that looks like, season by season.
                    </p>
                </div>
            </div>

            <ol
                className="rule-top"
                style={{ borderTopWidth: 2, borderTopColor: "var(--navy)" }}
            >
                {stages.map((s, i) => (
                    <li
                        key={s.n}
                        data-testid={`stage-${i}`}
                        className="rule-bottom grid grid-cols-12 gap-x-6 py-12 lg:py-14"
                    >
                        <div className="col-span-12 lg:col-span-2">
                            <span
                                className="font-display"
                                style={{
                                    fontSize: "clamp(56px, 6vw, 92px)",
                                    lineHeight: 0.85,
                                    color: "var(--orange)",
                                    fontWeight: 600,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {s.n}
                            </span>
                            <p className="font-mono mt-3" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}>
                                Stage 0{i + 1}
                            </p>
                        </div>

                        <div className="col-span-12 lg:col-span-4 mt-3 lg:mt-0">
                            <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                {s.when}
                            </p>
                            <h3
                                className="font-display mt-3"
                                style={{
                                    fontSize: "clamp(24px, 2.1vw, 32px)",
                                    lineHeight: 1.1,
                                    fontWeight: 600,
                                    color: "var(--navy)",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                {s.title}
                            </h3>
                        </div>

                        <div className="col-span-12 lg:col-span-5 mt-3 lg:mt-0">
                            <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink)" }}>
                                {s.body}
                            </p>
                            <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--line)" }}>
                                <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}>
                                    Deliverable
                                </p>
                                <p className="font-display mt-1" style={{ fontSize: 16, color: "var(--navy)", fontWeight: 600 }}>
                                    {s.deliverable}
                                </p>
                            </div>
                        </div>

                        <div className="hidden lg:flex col-span-1 items-center justify-end">
                            {i < stages.length - 1 && (
                                <span style={{ fontFamily: "serif", fontSize: 24, color: "var(--orange)" }}>↓</span>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
