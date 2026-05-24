const stats = [
    { num: "70%", label: "Placement in Top 25" },
    { num: "95%", label: "Admitted to Reach School" },
    { num: "100%", label: "Overall Acceptance Rate" },
    { num: "3 : 1", label: "Student-to-Specialist Ratio" },
];

export default function StatsStrip() {
    return (
        <section
            data-testid="stats-strip"
            className="rule-top rule-bottom"
            style={{ background: "var(--paper)" }}
        >
            <div className="section-x">
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            data-testid={`stat-${i}`}
                            className="py-12 lg:py-16 px-4 lg:px-8"
                            style={{
                                borderRight: i < stats.length - 1 ? "1px solid var(--line)" : "none",
                                borderBottom: i < 2 ? "1px solid var(--line)" : "none",
                            }}
                        >
                            <p className="font-mono mb-5" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                Figure 0{i + 1}
                            </p>
                            <div
                                className="font-display tabular"
                                style={{
                                    fontSize: "clamp(52px, 5.8vw, 88px)",
                                    lineHeight: 0.95,
                                    fontWeight: 500,
                                    letterSpacing: "-0.02em",
                                    color: "var(--navy)",
                                }}
                            >
                                {s.num}
                            </div>
                            <div className="mt-5 flex items-start gap-3">
                                <span style={{ display: "inline-block", width: 22, height: 1, background: "var(--orange)", marginTop: 8 }} />
                                <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--steel)", fontWeight: 500 }}>
                                    {s.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
