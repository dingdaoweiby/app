import { Link } from "react-router-dom";
import { useT } from "@/i18n/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export default function Footer() {
    const t = useT();
    const f = t.footer;

    const colHeading = {
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--orange)",
        fontWeight: 500,
        marginBottom: 18,
    };

    return (
        <footer data-testid="footer" style={{ background: "var(--navy)", color: "#fff" }}>
            <div className="section-x" style={{ paddingTop: 88, paddingBottom: 40 }}>
                {/* TOP — BRAND + COLUMNS */}
                <div className="grid grid-cols-12 gap-x-10 gap-y-14">
                    {/* Brand block */}
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
                            style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500, marginBottom: 14 }}
                        >
                            {f.brandSub}
                        </p>

                        <p
                            className="font-serif"
                            style={{ fontSize: 18, color: "rgba(255,255,255,0.86)", lineHeight: 1.55, fontStyle: "italic", maxWidth: 380, marginBottom: 24 }}
                        >
                            {f.tagline}
                        </p>

                        {/* Language toggle */}
                        <div className="flex flex-col items-start gap-3">
                            <p
                                className="font-mono"
                                style={{ fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}
                            >
                                {f.language}
                            </p>
                            <LanguageToggle />
                        </div>
                    </div>

                    {/* Studio */}
                    <div className="col-span-6 md:col-span-2 self-center">
                        <p style={colHeading}>{f.studio}</p>
                        <p className="font-serif" style={{ fontSize: 16, color: "#fff", lineHeight: 1.7 }}>
                            {f.studioCity}<br />{f.studioState}
                        </p>
                        <p className="font-serif mt-2" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
                            {f.studioMode}
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="col-span-6 md:col-span-3 self-center">
                        <p style={colHeading}>{f.contact}</p>
                        <ul className="space-y-3 font-serif" style={{ fontSize: 16, color: "#fff" }}>
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
                            <li className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.85)" }}>
                                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{f.wechat}</span>
                                <span style={{ color: "var(--orange)" }}>supernova-seed</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="col-span-12 md:col-span-2 self-center">
                        <p style={colHeading}>{f.hours}</p>
                        <p className="font-serif" style={{ fontSize: 16, color: "#fff", lineHeight: 1.7 }}>
                            {f.hoursLine}
                        </p>
                        <p className="font-serif mt-2" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
                            {f.hoursMode}
                        </p>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div
                    className="mt-20 pt-7 flex flex-wrap items-center justify-between gap-5"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.18)" }}
                >
                    <p
                        className="font-mono"
                        style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}
                    >
                        {f.rights}
                    </p>
                    <div className="flex items-center gap-7">
                        <Link
                            to="/privacy"
                            data-testid="footer-privacy"
                            className="link-underline font-mono"
                            style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.78)" }}
                        >
                            {f.privacy}
                        </Link>
                        <Link
                            to="/terms"
                            data-testid="footer-terms"
                            className="link-underline font-mono"
                            style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.78)" }}
                        >
                            {f.terms}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
