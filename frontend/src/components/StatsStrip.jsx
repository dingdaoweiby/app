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
            style={{ background: "var(--navy)" }}
        >
            <div className="section-x">
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            data-testid={`stat-${i}`}
                            className={`py-14 lg:py-20 px-4 lg:px-8`}
                            style={{
                                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.14)" : "none",
                                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.14)" : "none",
                            }}
                        >
                            <p className="font-mono mb-6" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)" }}>
                                Figure 0{i + 1}
                            </p>
                            <div
                                className="font-display tabular"
                                style={{
                                    fontSize: "clamp(52px, 5.8vw, 90px)",
                                    lineHeight: 0.95,
                                    fontWeight: 500,
                                    letterSpacing: "-0.02em",
                                    color: "#fff",
                                }}
                            >
                                {s.num}
                            </div>
                            <div className="mt-6 flex items-start gap-3">
                                <span style={{ display: "inline-block", width: 22, height: 1, background: "var(--orange)", marginTop: 8 }} />
                                <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.82)", fontWeight: 400 }}>
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
