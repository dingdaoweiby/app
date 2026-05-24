const HERO_IMG = "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=85&auto=format&fit=crop";

export default function Hero() {
    return (
        <section
            data-testid="hero"
            id="top"
            className="section-x relative overflow-hidden"
            style={{
                paddingTop: "clamp(56px, 8vw, 110px)",
                paddingBottom: "clamp(72px, 10vw, 140px)",
                background: "var(--mist)",
            }}
        >
            {/* Letterhead watermark — large ghosted crest, ≤5% opacity */}
            <svg
                aria-hidden="true"
                width="780"
                height="900"
                viewBox="0 0 200 240"
                style={{
                    position: "absolute",
                    top: "-60px",
                    right: "-180px",
                    opacity: 0.045,
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            >
                {/* Shield outline */}
                <path
                    d="M20 12 H180 V120 Q180 180 100 226 Q20 180 20 120 Z"
                    fill="none"
                    stroke="#163e72"
                    strokeWidth="1.2"
                />
                {/* Inner shield */}
                <path
                    d="M32 22 H168 V118 Q168 168 100 210 Q32 168 32 118 Z"
                    fill="none"
                    stroke="#163e72"
                    strokeWidth="0.8"
                />
                {/* Cross */}
                <line x1="100" y1="40" x2="100" y2="170" stroke="#163e72" strokeWidth="1.4" />
                <line x1="50" y1="92" x2="150" y2="92" stroke="#163e72" strokeWidth="1.4" />
                {/* Star top — supernova reference */}
                <g transform="translate(100 56)">
                    <path d="M0 -14 L3 -4 L13 -4 L5 2 L8 12 L0 6 L-8 12 L-5 2 L-13 -4 L-3 -4 Z" fill="#163e72" />
                </g>
                {/* Open book at bottom */}
                <path d="M60 130 Q100 122 140 130 L140 154 Q100 146 60 154 Z" fill="none" stroke="#163e72" strokeWidth="1.2" />
                <line x1="100" y1="124" x2="100" y2="150" stroke="#163e72" strokeWidth="0.8" />
                {/* Sash / scroll */}
                <path d="M40 180 Q100 196 160 180" fill="none" stroke="#163e72" strokeWidth="1" />
            </svg>

            {/* Hairline 'paper edge' on the left, like a letterhead ruler */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "clamp(20px, 6vw, 96px)",
                    bottom: 0,
                    width: 1,
                    background: "linear-gradient(to bottom, transparent 0%, var(--line-strong) 12%, var(--line-strong) 88%, transparent 100%)",
                    opacity: 0.5,
                    pointerEvents: "none",
                    zIndex: 0,
                }}
                aria-hidden="true"
            />

            <div className="relative" style={{ zIndex: 1 }}>
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
            </div>
        </section>
    );
}
