import { useT } from "@/i18n/LanguageContext";

export default function Hero() {
    const t = useT();
    const h = t.home.hero;
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
                        {h.line1}<br />
                        <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>{h.line2}</em><br />
                        {h.line3}
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
                        {h.tag}
                    </p>
                </div>

                <div className="col-span-12 lg:col-span-5 rise delay-3">
                    <div className="px-7 py-7" style={{ background: "var(--paper)", border: "1px solid var(--line)" }}>
                        <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                            {h.outcomesLabel}
                        </p>
                        <div className="mt-2 mb-4" style={{ width: 32, height: 2, background: "var(--orange)" }} />
                        <ul>
                            {h.stats.map((s, i, arr) => (
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
                        {h.body}
                    </p>

                    <div className="mt-12 flex flex-wrap items-center gap-8">
                        <a href="/contact" data-testid="hero-cta-primary" className="btn-primary">
                            {h.ctaPrimary}
                            <span style={{ fontFamily: "serif", marginLeft: 6 }}>→</span>
                        </a>
                        <p className="font-mono" style={{ fontSize: 12, color: "var(--steel)", lineHeight: 1.6, letterSpacing: "0.04em" }}>
                            {h.ctaSubLine1}<br />
                            {h.ctaSubLine2}
                        </p>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 lg:col-start-9 mt-10 lg:mt-0">
                    <div className="rule-left pl-6" style={{ borderLeftWidth: 2, borderLeftColor: "var(--orange)" }}>
                        <p className="eyebrow" style={{ color: "var(--navy)" }}>{h.trustedEyebrow}</p>
                        <p className="font-serif mt-3" style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink)", fontStyle: "italic" }}>
                            {h.trustedQuote}
                        </p>
                        <p className="font-mono mt-4" style={{ fontSize: 11, color: "var(--steel)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                            {h.trustedAttribution}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
