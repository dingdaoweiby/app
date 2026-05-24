const stats = [
    { num: "70%", label: "Placement in Top 25", zh: "进入 Top 25" },
    { num: "95%", label: "Admitted to Reach School", zh: "至少一所冲刺校录取" },
    { num: "100%", label: "Overall Acceptance Rate", zh: "至少一所录取" },
    { num: "3 : 1", label: "Student-to-Specialist Ratio", zh: "申请年师生比例" },
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
                            className={`py-12 lg:py-16 px-2 lg:px-8 ${i < stats.length - 1 ? "lg:rule-right" : ""} ${i % 2 === 0 ? "rule-right lg:rule-right" : ""} ${i < 2 ? "rule-bottom lg:border-b-0" : ""}`}
                        >
                            <div
                                className="font-serif"
                                style={{
                                    fontSize: "clamp(48px, 5.6vw, 84px)",
                                    lineHeight: 1,
                                    fontWeight: 400,
                                    letterSpacing: "-0.02em",
                                    color: "var(--ink)",
                                }}
                            >
                                {s.num}
                            </div>
                            <div className="mt-5 flex items-start gap-3">
                                <span style={{ display: "inline-block", width: 22, height: 1, background: "var(--crimson)", marginTop: 8 }} />
                                <div>
                                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ink)" }}>
                                        {s.label}
                                    </p>
                                    <p className="font-sc mt-1" style={{ fontSize: 13, color: "var(--graphite)" }}>
                                        {s.zh}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
