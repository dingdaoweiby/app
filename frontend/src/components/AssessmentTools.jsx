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
            <div className="grid grid-cols-12 gap-x-10 mb-14">
                <div className="col-span-12 lg:col-span-7">
                    <p className="eyebrow">§ III · Assessment Tools</p>
                    <h2
                        className="font-display mt-5"
                        style={{
                            fontSize: "clamp(38px, 4.6vw, 64px)",
                            lineHeight: 1.02,
                            letterSpacing: "-0.02em",
                            fontWeight: 500,
                            color: "var(--navy)",
                        }}
                    >
                        Start with <em style={{ fontStyle: "italic", color: "var(--orange)" }}>diagnosis</em>,
                        <br />not templates.
                    </h2>
                    <p className="font-serif italic mt-6" style={{ fontSize: 18, lineHeight: 1.5, color: "var(--steel)", maxWidth: 560 }}>
                        Every student's path is uniquely theirs. The frameworks below guide our partnership — from the first session through application submission.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-5 flex items-end">
                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)", lineHeight: 1.6, maxWidth: 360 }}>
                        Six structured frameworks · one coordinated practice
                    </p>
                </div>
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
