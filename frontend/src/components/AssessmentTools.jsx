const tools = [
    {
        n: "01",
        title: "Student Diagnostic Questionnaire",
        body: "A structured intake questionnaire that maps a student's academic profile, extracurricular depth, motivation style, and family dynamics before our first session.",
    },
    {
        n: "02",
        title: "Quarterly Checkpoint",
        body: "A quarterly review framework we complete together — tracking academic progress, activity development, narrative clarity, and emotional wellbeing across each season.",
    },
    {
        n: "03",
        title: "Comprehensive Student Report",
        body: "A full profile of your child's strengths, gaps, learning style, and long-term direction.",
    },
    {
        n: "04",
        title: "School Selection Strategy",
        body: "A curated, data-grounded school list built around your child's profile and goals.",
    },
    {
        n: "05",
        title: "Application Roadmap with Milestone Tracking",
        body: "A structured, month-by-month execution plan from Grade 9 through submission.",
    },
    {
        n: "06",
        title: "Family Communication Audit",
        body: "A quarterly review of parent–child communication patterns and expectation alignment — helping families navigate the highest-pressure years without damaging the relationship.",
    },
];

export default function AssessmentTools() {
    return (
        <section
            data-testid="assessment-tools"
            id="methodology"
            className="section-x section-y"
            style={{ background: "var(--mist)" }}
        >
            <div className="mb-14">
                <div className="flex items-center gap-3">
                    <div style={{ width: 32, height: 1, background: "var(--orange)" }} />
                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                        Assessment Tools
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
                    Start with <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>diagnosis</em>,<br />
                    not templates.
                </h2>
                <div className="mt-8" style={{ width: 56, height: 2, background: "var(--navy)" }} />
                <p className="font-serif italic mt-6" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--steel)", maxWidth: 620 }}>
                    Every student's path is uniquely theirs. The frameworks below guide our partnership — from the first session through application submission.
                </p>
                <p className="font-mono mt-5" style={{ fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--steel)", fontWeight: 500 }}>
                    Six structured frameworks · one coordinated practice
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0" style={{ borderTop: "2px solid var(--navy)" }}>
                {tools.map((t, i) => (
                    <article
                        key={t.n}
                        data-testid={`tool-${i}`}
                        className="p-8 lg:p-10"
                        style={{
                            background: "var(--paper)",
                            borderRight: (i % 3) !== 2 ? "1px solid var(--line)" : "none",
                            borderBottom: "1px solid var(--line)",
                        }}
                    >
                        <span
                            className="font-display"
                            style={{
                                fontSize: 48,
                                lineHeight: 0.85,
                                color: "var(--orange)",
                                fontWeight: 600,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            {t.n}
                        </span>
                        <h3
                            className="font-display mt-5"
                            style={{
                                fontSize: 21,
                                lineHeight: 1.2,
                                color: "var(--navy)",
                                fontWeight: 600,
                                letterSpacing: "-0.005em",
                            }}
                        >
                            {t.title}
                        </h3>
                        <div className="my-5" style={{ width: 30, height: 2, background: "var(--orange)" }} />
                        <p className="font-serif" style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink)" }}>
                            {t.body}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
