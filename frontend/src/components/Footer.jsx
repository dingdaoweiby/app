export default function Footer() {
    return (
        <footer data-testid="footer" style={{ background: "var(--navy)", color: "#fff" }}>
            <div className="section-x" style={{ paddingTop: 80, paddingBottom: 48 }}>
                <div className="grid grid-cols-12 gap-x-10 gap-y-12">
                    <div className="col-span-12 md:col-span-5">
                        <div className="flex items-center gap-3 mb-5">
                            <svg width="28" height="34" viewBox="0 0 26 32" aria-hidden="true">
                                <path d="M1 1 H25 V21 L13 31 L1 21 Z" fill="none" stroke="#fff" strokeWidth="1.5" />
                                <path d="M13 7 V25 M7 13 H19" stroke="var(--orange)" strokeWidth="1.5" />
                            </svg>
                            <p className="font-display" style={{ fontSize: 24, color: "#fff", fontWeight: 600, letterSpacing: "-0.01em" }}>
                                Supernova Education
                            </p>
                        </div>
                        <p className="font-serif" style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", lineHeight: 1.55, fontStyle: "italic", maxWidth: 380 }}>
                            Clarity into outcomes — from discovery to college acceptance.
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
                        © {new Date().getFullYear()} Supernova Education · All Rights Reserved
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="link-underline font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Privacy</a>
                        <a href="#" className="link-underline font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
