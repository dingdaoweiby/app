const HERO_IMG = "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=85&auto=format&fit=crop";

export default function Hero() {
    return (
        <section data-testid="hero" id="top" className="section-x relative" style={{ paddingTop: "clamp(56px, 8vw, 110px)", paddingBottom: "clamp(72px, 10vw, 140px)" }}>
            {/* Eyebrow with locator */}
            <div className="rise flex flex-wrap items-center gap-4 mb-14">
                <span className="eyebrow">Est. Livingston · New Jersey</span>
                <span style={{ width: 56, height: 1, background: "var(--line-strong)" }} />
                <span className="eyebrow" style={{ color: "var(--orange)" }}>A Practice in Admissions Counsel</span>
            </div>

            <div className="grid grid-cols-12 gap-x-10 gap-y-14">
                <div className="col-span-12 lg:col-span-8">
                    <h1
                        data-testid="hero-headline"
                        className="rise delay-1 font-display"
                        style={{
                            fontSize: "clamp(48px, 7.4vw, 112px)",
                            lineHeight: 0.96,
                            letterSpacing: "-0.025em",
                            fontWeight: 500,
                            color: "var(--navy)",
                        }}
                    >
                        Growth Mindset.<br />
                        Clear Goals.<br />
                        Consistent Effort.
                    </h1>

                    <p
                        className="rise delay-2 font-mono mt-10"
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

                <div className="col-span-12 lg:col-span-4 rise delay-3">
                    <div className="img-bordered overflow-hidden" style={{ aspectRatio: "4/5" }}>
                        <img
                            src={HERO_IMG}
                            alt="Collegiate gothic library archway"
                            className="w-full h-full object-cover"
                            style={{ display: "block", filter: "grayscale(85%) contrast(1.06)" }}
                        />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="eyebrow">Plate I — The Reading Room</p>
                        <p className="font-mono" style={{ fontSize: 10, color: "var(--steel)", letterSpacing: "0.18em" }}>№ 001</p>
                    </div>
                </div>
            </div>

            {/* Body + CTA */}
            <div className="grid grid-cols-12 gap-x-10 mt-20 rise delay-4 rule-top pt-14">
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
                        <a href="#contact" data-testid="hero-cta-primary" className="btn-primary">
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
