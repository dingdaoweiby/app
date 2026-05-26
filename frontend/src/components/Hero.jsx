const HERO_IMG = "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=85&auto=format&fit=crop";

export default function Hero() {
    return (
        <section
            data-testid="hero"
            id="top"
            className="section-x relative"
            style={{
                paddingTop: "clamp(40px, 5vw, 76px)",
                paddingBottom: "clamp(48px, 6vw, 88px)",
                background: "var(--mist)",
            }}
        >
            <div className="grid grid-cols-12 gap-x-10 gap-y-10 items-center">
                <div className="col-span-12 lg:col-span-7">
                    <h1
                        data-testid="hero-headline"
                        className="rise delay-1 font-display"
                        style={{
                            fontSize: "clamp(38px, 5.4vw, 78px)",
                            lineHeight: 1.02,
                            letterSpacing: "-0.02em",
                            fontWeight: 500,
                            color: "var(--navy)",
                        }}
                    >
                        Growth Mindset.<br />
                        <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>Clear Goals.</em><br />
                        Consistent Effort.
                    </h1>

                    <p
                        className="rise delay-2 font-mono mt-7"
                        style={{
                            fontSize: 12,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "var(--orange)",
                            fontWeight: 500,
                        }}
                    >
                        K–12 · Ivy League · Top 15 Admissions
                    </p>
                </div>

                <div className="col-span-12 lg:col-span-5 rise delay-3">
                    <div className="px-7 py-7" style={{ background: "var(--paper)", border: "1px solid var(--line)" }}>
                        <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                            Outcomes
                        </p>
                        <div className="mt-2 mb-4" style={{ width: 32, height: 2, background: "var(--orange)" }} />
                        <ul>
                            {[
                                { num: "70%",  label: "Placement in Top 25" },
                                { num: "95%",  label: "Admitted to Reach School" },
                                { num: "100%", label: "Overall Acceptance Rate" },
                                { num: "3 : 1", label: "Student-to-Specialist Ratio" },
                            ].map((s, i, arr) => (
                                <li
                                    key={s.label}
                                    data-testid={`hero-stat-${i}`}
                                    className="flex items-center justify-between gap-4 py-3.5"
                                    style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none" }}
                                >
                                    <span className="font-display tabular" style={{ fontSize: 32, lineHeight: 1, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.01em" }}>
                                        {s.num}
                                    </span>
                                    <span className="font-mono text-right" style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--steel)", lineHeight: 1.4, maxWidth: 220 }}>
                                        {s.label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-x-10 mt-12 rise delay-4 rule-top pt-10">
                <div className="col-span-12 lg:col-span-7">
                    <p
                        className="font-serif"
                        style={{
                            fontSize: "clamp(19px, 1.5vw, 24px)",
                            lineHeight: 1.55,
                            color: "var(--ink)",
                            maxWidth: 720,
                            fontWeight: 400,
                        }}
                    >
                        Through personalized guidance and genuine understanding, we help students build
                        meaningful academic and extracurricular profiles, tell their authentic stories, and
                        navigate admissions with clarity and confidence — from K–9 private school to the
                        Ivy League and Top 15 colleges.
                    </p>

                    <div className="mt-12 flex flex-wrap items-center gap-8">
                        <a href="/contact" data-testid="hero-cta-primary" className="btn-primary">
                            Schedule a Conversation
                            <span style={{ fontFamily: "serif", marginLeft: 6 }}>→</span>
                        </a>
                        <p className="font-mono" style={{ fontSize: 12, color: "var(--steel)", lineHeight: 1.6, letterSpacing: "0.04em" }}>
                            No sales pitch. A diagnostic conversation —<br />
                            you leave with a clearer picture of your child.
                        </p>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-10 lg:mt-0">
                    <div className="rule-left pl-6" style={{ borderLeftWidth: 2, borderLeftColor: "var(--orange)" }}>
                        <p className="eyebrow" style={{ color: "var(--navy)" }}>Trusted Approach</p>
                        <p className="font-serif mt-3" style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink)", fontStyle: "italic" }}>
                            “Real coaching, not consulting. We work with twenty to thirty families a year — and we know each of them by name.”
                        </p>
                        <p className="font-mono mt-4" style={{ fontSize: 11, color: "var(--steel)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                            — Founding Principal
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
