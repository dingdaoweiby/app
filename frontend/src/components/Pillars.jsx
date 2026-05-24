const pillars = [
    {
        n: "01",
        title: "Personalized Guidance, Rooted in Potential",
        zh: "以潜力为根基的个性化引导",
        body: "We guide students based on their unique strengths and aspirations. Deep expertise in U.S. admissions translates into individualized strategy — from course selection to essay development — aligned with who your student truly is and where they're headed.",
        zhBody: "我们根据每个学生独特的优势和志向引导他们。深厚的美国升学经验转化为个性化策略，与孩子真实的自我和未来方向深度契合。",
    },
    {
        n: "02",
        title: "Goal-Oriented, Results-Driven",
        zh: "目标导向，结果驱动",
        body: "Clear objectives from day one. We establish concrete milestones and strategic timelines that lead to measurable outcomes. Every step is purposeful; every decision intentional — a coherent path from where students are to where they want to be.",
        zhBody: "从第一天起就有清晰目标。我们建立具体的里程碑和战略时间线，通向可衡量的成果，为学生搭建一条从现在到理想目标的连贯路径。",
    },
    {
        n: "03",
        title: "Mental Well-Being and Holistic Development",
        zh: "心理健康与全面发展",
        body: "Beyond academics, we prioritize character growth, emotional resilience, and psychological health. The application journey should build confidence and self-awareness — not anxiety. We create an environment where students thrive throughout the process.",
        zhBody: "超越学业，我们重视品格成长、情绪韧性和心理健康。申请之旅应该建立自信和自我认知，而非焦虑——我们创造一个支持性的环境。",
    },
];

export default function Pillars() {
    return (
        <section
            data-testid="pillars"
            id="approach"
            className="section-x section-y rule-top"
            style={{ background: "var(--alabaster)" }}
        >
            <div className="grid grid-cols-12 gap-x-8">
                <div className="col-span-12 lg:col-span-5">
                    <p className="eyebrow">Why Now · 为何此时</p>
                    <h2
                        className="font-serif mt-5"
                        style={{
                            fontSize: "clamp(40px, 4.8vw, 68px)",
                            lineHeight: 1,
                            letterSpacing: "-0.02em",
                            fontWeight: 400,
                            color: "var(--ink)",
                        }}
                    >
                        Three things <em style={{ fontStyle: "italic", color: "var(--crimson)" }}>we believe</em>
                        <br />— and build around.
                    </h2>
                    <p className="font-sc mt-5" style={{ color: "var(--graphite)", fontSize: 17, lineHeight: 1.8 }}>
                        我们相信的三件事——也是我们围绕它们构建的。
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-16 rule-top">
                {pillars.map((p, i) => (
                    <article
                        key={p.n}
                        data-testid={`pillar-${i}`}
                        className={`p-8 lg:p-12 ${i < pillars.length - 1 ? "md:rule-right" : ""} ${i < pillars.length - 1 ? "rule-bottom md:border-b-0" : ""}`}
                        style={{ background: "var(--paper)" }}
                    >
                        <div className="flex items-start justify-between mb-10">
                            <span
                                className="font-serif"
                                style={{
                                    fontSize: "clamp(56px, 6vw, 96px)",
                                    lineHeight: 0.85,
                                    color: "var(--crimson)",
                                    fontWeight: 300,
                                    fontStyle: "italic",
                                }}
                            >
                                {p.n}
                            </span>
                            <span className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--graphite)", marginTop: 12 }}>
                                Pillar
                            </span>
                        </div>

                        <h3
                            className="font-serif"
                            style={{
                                fontSize: "clamp(24px, 1.9vw, 30px)",
                                lineHeight: 1.15,
                                color: "var(--ink)",
                                fontWeight: 500,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {p.title}
                        </h3>
                        <p className="font-sc mt-2" style={{ fontSize: 15, color: "var(--graphite)" }}>
                            {p.zh}
                        </p>

                        <div className="mt-6" style={{ width: 36, height: 1, background: "var(--ash)" }} />

                        <p className="font-serif mt-6" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink)" }}>
                            {p.body}
                        </p>
                        <p className="font-sc mt-4" style={{ fontSize: 14, lineHeight: 1.85, color: "var(--graphite)" }}>
                            {p.zhBody}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
