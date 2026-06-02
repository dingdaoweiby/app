import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer data-testid="footer" style={{ background: "var(--navy)", color: "#fff" }}>
            <div className="section-x" style={{ paddingTop: 80, paddingBottom: 48 }}>
                <div className="grid grid-cols-12 gap-x-10 gap-y-12">
                    <div className="col-span-12 md:col-span-5">
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="/logo-seed.png"
                                alt="Supernova Education"
                                style={{ height: 88, width: "auto", display: "block", mixBlendMode: "lighten" }}
                            />
                            <span className="flex flex-col" style={{ lineHeight: 1.05 }}>
                                <span
                                    className="font-display"
                                    style={{ fontSize: 26, color: "#fff", fontWeight: 700, letterSpacing: "-0.01em" }}
                                >
                                    Supernova
                                </span>
                                <span
                                    className="font-display"
                                    style={{ fontSize: 26, color: "rgba(255,255,255,0.92)", fontWeight: 400, letterSpacing: "-0.005em", marginTop: 2 }}
                                >
                                    Education
                                </span>
                            </span>
                        </div>
                        <p
                            className="font-mono"
                            style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500, marginBottom: 12 }}
                        >
                            Supernova Elite Education Destination, LLC
                        </p>
                        <p className="font-serif" style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", lineHeight: 1.55, fontStyle: "italic", maxWidth: 380 }}>
                            Growth Mindset. Clear Goals. Consistent Effort.
                        </p>
                    </div>

                    <div className="col-span-6 md:col-span-2">
                        <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>Studio</p>
                        <p className="font-serif mt-4" style={{ fontSize: 16, color: "#fff", lineHeight: 1.65 }}>
                            Livingston<br />New Jersey 07039<br />
                            <span style={{ color: "rgba(255,255,255,0.62)", fontSize: 14 }}>In-person and online</span>
                        </p>
                    </div>

                    <div className="col-span-6 md:col-span-3">
                        <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>Contact</p>
                        <ul className="mt-4 space-y-2 font-serif" style={{ fontSize: 16, color: "#fff" }}>
                            <li>
                                <a href="mailto:info@supernovaedu.com" className="link-underline" data-testid="footer-email">
                                    info@supernovaedu.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+19087583488" className="link-underline tabular" data-testid="footer-phone">
                                    +1 (908) 758 · 3488
                                </a>
                            </li>
                            <li style={{ color: "rgba(255,255,255,0.78)" }}>
                                WeChat <span style={{ color: "var(--orange)", marginLeft: 6 }}>supernova-seed</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-12 md:col-span-2 md:text-right">
                        <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>Hours</p>
                        <p className="font-serif mt-4" style={{ fontSize: 16, color: "#fff" }}>
                            Mon — Sat<br />
                            <span style={{ color: "rgba(255,255,255,0.62)" }}>By appointment</span>
                        </p>
                    </div>
                </div>

                <div className="mt-16 pt-6 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.18)" }}>
                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
                        © 2018 Supernova Elite Education Destination · All Rights Reserved
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="/privacy" data-testid="footer-privacy" className="link-underline font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Privacy</Link>
                        <Link to="/terms" data-testid="footer-terms" className="link-underline font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
