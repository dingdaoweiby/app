import { useT } from "@/i18n/LanguageContext";

export default function Pillars() {
    const t = useT();
    const p = t.home.pillars;
    return (
        <section
            data-testid="pillars"
            id="approach"
            className="section-x section-y"
            style={{ background: "var(--paper)" }}
        >
            <div>
                <div className="flex items-center gap-3">
                    <div style={{ width: 32, height: 1, background: "var(--orange)" }} />
                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                        {p.eyebrow}
                    </p>
                </div>
                <h2
                    className="font-display mt-6"
                    style={{
                        fontSize: "clamp(32px, 3.4vw, 50px)",
                        lineHeight: 1.12,
                        letterSpacing: "-0.02em",
                        fontWeight: 500,
                        color: "var(--navy)",
                        maxWidth: 880,
                    }}
                >
                    {p.titleLine1}<br />
                    <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>{p.titleLine2}</em>
                </h2>
                <div className="mt-8" style={{ width: 56, height: 2, background: "var(--navy)" }} />
                <p className="font-serif italic mt-6" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--steel)", maxWidth: 620 }}>
                    {p.subtitle}
                </p>
            </div>

            <div className="mt-16">
                <div className="relative grid grid-cols-3 gap-6 md:gap-10">
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            top: 36,
                            left: "16.66%",
                            right: "16.66%",
                            height: 1,
                            background: "var(--orange)",
                            opacity: 0.5,
                            zIndex: 0,
                        }}
                    />
                    {p.items.map((item, i) => (
                        <div
                            key={i}
                            data-testid={`pillar-${i}`}
                            className="relative flex flex-col items-center text-center"
                            style={{ zIndex: 1 }}
                        >
                            <div
                                style={{
                                    width: 72,
                                    height: 72,
                                    borderRadius: "50%",
                                    background: "var(--orange)",
                                    color: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 4px 14px rgba(255,152,0,0.28)",
                                }}
                            >
                                <span
                                    className="font-display"
                                    style={{
                                        fontSize: 30,
                                        lineHeight: 1,
                                        color: "#fff",
                                        fontWeight: 600,
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {i + 1}
                                </span>
                            </div>
                            <h3
                                className="font-display mt-7"
                                style={{
                                    fontSize: "clamp(20px, 1.6vw, 24px)",
                                    lineHeight: 1.2,
                                    color: "var(--navy)",
                                    fontWeight: 600,
                                    letterSpacing: "-0.01em",
                                    maxWidth: 320,
                                }}
                            >
                                {item.title}
                            </h3>
                            <div className="mt-4" style={{ width: 28, height: 2, background: "var(--orange)" }} />
                            <p
                                className="font-serif mt-5"
                                style={{
                                    fontSize: 15.5,
                                    lineHeight: 1.65,
                                    color: "var(--ink)",
                                    maxWidth: 320,
                                }}
                            >
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
