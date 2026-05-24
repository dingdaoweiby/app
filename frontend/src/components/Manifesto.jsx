const ARCH_IMG = "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1800&q=85&auto=format&fit=crop";

export default function Manifesto() {
    return (
        <section data-testid="manifesto" className="relative" style={{ background: "var(--navy-deep)" }}>
            <div className="relative">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${ARCH_IMG})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.42,
                        filter: "grayscale(80%) contrast(1.06)",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(120deg, rgba(6,22,52,0.92) 0%, rgba(10,35,66,0.72) 50%, rgba(6,22,52,0.92) 100%)" }}
                />
                <div className="section-x relative" style={{ paddingTop: "clamp(110px, 14vw, 200px)", paddingBottom: "clamp(110px, 14vw, 200px)" }}>
                    <div className="grid grid-cols-12 gap-10">
                        <div className="col-span-12 lg:col-span-9">
                            <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                § IV · A Practice, Not a Firm
                            </p>
                            <h2
                                className="font-display mt-8"
                                style={{
                                    fontSize: "clamp(40px, 5.6vw, 92px)",
                                    lineHeight: 1.02,
                                    letterSpacing: "-0.025em",
                                    fontWeight: 500,
                                    color: "#fff",
                                }}
                            >
                                We take twenty to thirty<br />families at a time.
                            </h2>

                            <div className="my-10" style={{ width: 80, height: 2, background: "var(--orange)" }} />

                            <p
                                className="font-serif"
                                style={{
                                    fontSize: "clamp(18px, 1.45vw, 22px)",
                                    lineHeight: 1.6,
                                    color: "rgba(255,255,255,0.86)",
                                    maxWidth: 740,
                                }}
                            >
                                Real coaching doesn't scale like traditional consulting. We've chosen depth
                                over volume — because the kind of relationship we're describing can only
                                happen in one place at a time.
                            </p>

                            <div className="mt-12 flex flex-wrap items-center gap-6">
                                <a href="#contact" className="btn-light" data-testid="manifesto-cta">
                                    Inquire About This Cohort
                                </a>
                                <p className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.62)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                                    Class of 2027 · Currently Interviewing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
