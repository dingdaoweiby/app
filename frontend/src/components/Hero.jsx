const HERO_IMG = "https://static.prod-images.emergentagent.com/jobs/718a1430-805c-4227-88dc-2b6915a64a52/images/0eaa009623dbe16cf50f1e1b30efe8254b82f444b2d9e8d8d17e2c20d4ed06f9.png";

export default function Hero() {
    return (
        <section data-testid="hero" id="top" className="section-x relative" style={{ paddingTop: "clamp(60px, 9vw, 120px)", paddingBottom: "clamp(80px, 10vw, 140px)" }}>
            {/* Eyebrow */}
            <div className="rise flex items-center gap-4 mb-12">
                <span className="eyebrow">Est. Livingston · New Jersey</span>
                <span className="block" style={{ width: 56, height: 1, background: "var(--ash)" }} />
                <span className="eyebrow" style={{ color: "var(--crimson)" }}>A Practice in Admissions</span>
            </div>

            <div className="grid grid-cols-12 gap-x-8 gap-y-12">
                {/* Headline column */}
                <div className="col-span-12 lg:col-span-8">
                    <h1
                        data-testid="hero-headline"
                        className="rise delay-1 font-serif"
                        style={{
                            fontSize: "clamp(46px, 7.6vw, 116px)",
                            lineHeight: 0.94,
                            letterSpacing: "-0.025em",
                            fontWeight: 400,
                            color: "var(--ink)",
                        }}
                    >
                        Growth Mindset.
                        <br />
                        <em style={{ fontStyle: "italic", color: "var(--crimson)", fontWeight: 500 }}>Clear Goals.</em>
                        <br />
                        Consistent Effort.
                    </h1>

                    <h2
                        className="rise delay-2 font-sc mt-8"
                        style={{
                            fontSize: "clamp(22px, 2.6vw, 34px)",
                            lineHeight: 1.35,
                            fontWeight: 400,
                            color: "var(--graphite)",
                            letterSpacing: "0.04em",
                        }}
                    >
                        成长思维 · 清晰目标 · 持续努力
                    </h2>
                </div>

                {/* Image column */}
                <div className="col-span-12 lg:col-span-4 rise delay-3">
                    <div className="img-bordered overflow-hidden" style={{ aspectRatio: "4/5" }}>
                        <img
                            src={HERO_IMG}
                            alt="Ink wash editorial mark"
                            className="w-full h-full object-cover"
                            style={{ display: "block" }}
                        />
                    </div>
                    <p className="eyebrow mt-3" style={{ color: "var(--graphite)" }}>
                        Plate I — A Quiet Discipline
                    </p>
                </div>
            </div>

            {/* Body + CTA */}
            <div className="grid grid-cols-12 gap-x-8 mt-16 rise delay-4">
                <div className="col-span-12 lg:col-span-7 lg:col-start-1">
                    <p
                        className="font-serif"
                        style={{
                            fontSize: "clamp(18px, 1.45vw, 22px)",
                            lineHeight: 1.6,
                            color: "var(--ink)",
                            maxWidth: 680,
                        }}
                    >
                        Through personalized guidance and genuine understanding, we help students build
                        meaningful academic and extracurricular profiles, tell their authentic stories,
                        and navigate admissions with clarity and confidence — from <em>K–9 private school</em> to
                        the <em>Ivy League</em> and <em>Top 15</em> colleges.
                    </p>
                    <p
                        className="font-sc mt-5"
                        style={{
                            fontSize: 17,
                            lineHeight: 1.85,
                            color: "var(--graphite)",
                            maxWidth: 640,
                        }}
                    >
                        通过个性化指导与真诚的理解，我们帮助学生建立扎实的学术与课外履历，讲述真实可信的故事，并以清晰与自信走过申请全程——从 K–9 私立学校到常春藤与全美前 15 所大学。
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-6">
                        <a href="#contact" data-testid="hero-cta-primary" className="btn-primary">
                            Schedule a Conversation
                            <span style={{ fontFamily: "serif", marginLeft: 4 }}>→</span>
                        </a>
                        <div>
                            <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--graphite)" }}>
                                预约诊断式对话
                            </p>
                            <p className="font-serif italic mt-1" style={{ fontSize: 15, color: "var(--ink)" }}>
                                No sales pitch — only a clearer picture of your child.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
