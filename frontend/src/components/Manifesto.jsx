const ARCH_IMG = "https://static.prod-images.emergentagent.com/jobs/718a1430-805c-4227-88dc-2b6915a64a52/images/4b7ef68e9343101bf57c98eb1e40219eb7f77b477fb4e5ac65b8da786de9a76a.png";

export default function Manifesto() {
    return (
        <section data-testid="manifesto" className="relative" style={{ background: "var(--ink)" }}>
            <div className="relative">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${ARCH_IMG})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.55,
                        filter: "grayscale(60%)",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to right, rgba(26,27,38,0.85) 0%, rgba(26,27,38,0.55) 50%, rgba(26,27,38,0.85) 100%)" }}
                />
                <div className="section-x relative" style={{ paddingTop: "clamp(100px, 14vw, 200px)", paddingBottom: "clamp(100px, 14vw, 200px)" }}>
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-12 lg:col-span-8">
                            <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#d8d1c7" }}>
                                A Practice, Not a Firm
                            </p>
                            <h2
                                className="font-serif mt-8"
                                style={{
                                    fontSize: "clamp(40px, 5.6vw, 88px)",
                                    lineHeight: 1.04,
                                    letterSpacing: "-0.02em",
                                    fontWeight: 400,
                                    color: "var(--paper)",
                                }}
                            >
                                We take <em style={{ fontStyle: "italic", color: "#e8b3c3" }}>twenty to thirty</em> families
                                <br />at a time.
                            </h2>
                            <p
                                className="font-sc mt-8"
                                style={{
                                    fontSize: 22,
                                    lineHeight: 1.6,
                                    color: "#d8d1c7",
                                    letterSpacing: "0.02em",
                                }}
                            >
                                我们每年只服务 20 到 30 个家庭。
                            </p>

                            <div className="my-10" style={{ width: 80, height: 1, background: "#d8d1c7" }} />

                            <p
                                className="font-serif"
                                style={{
                                    fontSize: "clamp(18px, 1.5vw, 22px)",
                                    lineHeight: 1.6,
                                    color: "#f3eee5",
                                    fontStyle: "italic",
                                    maxWidth: 720,
                                }}
                            >
                                Real coaching doesn't scale like traditional consulting. We've chosen depth over
                                volume — because the kind of relationship we're describing can only happen in one
                                place at a time.
                            </p>
                            <p className="font-sc mt-5" style={{ fontSize: 15, color: "#bdb7ac", lineHeight: 1.85, maxWidth: 640 }}>
                                真正的教练关系无法像传统咨询那样扩张。我们选择深度而非数量——因为这里描述的关系，一次只能认真发生在一处。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
