export default function Manifesto() {
    return (
        <section
            data-testid="manifesto"
            className="section-x section-y relative"
            style={{ background: "var(--navy)", color: "#fff" }}
        >
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-12 lg:col-span-9">
                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                        A Practice, Not a Firm
                    </p>
                    <h2
                        className="font-display mt-8"
                        style={{
                            fontSize: "clamp(40px, 5.4vw, 88px)",
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

                <div className="col-span-12 lg:col-span-3 flex lg:justify-end">
                    <div className="font-display tabular" style={{ fontSize: "clamp(120px, 14vw, 220px)", lineHeight: 0.85, color: "rgba(255,255,255,0.10)", fontWeight: 600, letterSpacing: "-0.04em" }}>
                        20<span style={{ color: "rgba(255,255,255,0.06)" }}>—</span>30
                    </div>
                </div>
            </div>
        </section>
    );
}
