import { useEffect, useState } from "react";

const links = ["Approach", "Track Record", "Stories", "Methodology", "Contact"];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="top-nav"
            className="sticky top-0 z-50 transition-shadow"
            style={{
                backgroundColor: "var(--navy)",
                color: "#fff",
                boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.18)" : "none",
            }}
        >
            <div className="section-x flex items-center justify-between" style={{ height: 74 }}>
                <a href="#top" data-testid="nav-logo" className="flex items-center gap-3">
                    <svg width="26" height="32" viewBox="0 0 26 32" aria-hidden="true">
                        <path d="M1 1 H25 V21 L13 31 L1 21 Z" fill="none" stroke="#fff" strokeWidth="1.5" />
                        <path d="M13 7 V25 M7 13 H19" stroke="var(--orange)" strokeWidth="1.5" />
                    </svg>
                    <span
                        className="font-display tracking-tight"
                        style={{ fontSize: 21, color: "#fff", fontWeight: 600, letterSpacing: "-0.01em" }}
                    >
                        Supernova Education
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-9">
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                            data-testid={`nav-link-${l.toLowerCase().replace(/\s+/g, "-")}`}
                            className="link-underline font-mono"
                            style={{
                                fontSize: 11,
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.88)",
                                fontWeight: 500,
                            }}
                        >
                            {l}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-5">
                    <span
                        className="hidden lg:inline font-mono"
                        style={{ fontSize: 10, letterSpacing: "0.22em", color: "rgba(255,255,255,0.72)", textTransform: "uppercase" }}
                    >
                        <span style={{ color: "var(--orange)", fontWeight: 500 }}>EN</span>
                        <span style={{ margin: "0 8px", color: "rgba(255,255,255,0.45)" }}>·</span>
                        <a href="#" className="link-underline" data-testid="lang-toggle-zh">中文</a>
                    </span>

                    <a
                        href="#contact"
                        data-testid="nav-cta"
                        className="hidden md:inline-flex items-center"
                        style={{
                            background: "#fff",
                            color: "var(--navy)",
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: 11,
                            fontWeight: 500,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            padding: "13px 22px",
                            border: "1px solid #fff",
                            transition: "background-color 220ms ease, color 220ms ease, border-color 220ms ease",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.borderColor = "var(--orange)"; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.color = "var(--navy)"; }}
                    >
                        Schedule a Conversation
                    </a>

                    <a
                        href="#contact"
                        data-testid="nav-cta-mobile"
                        className="md:hidden inline-flex items-center"
                        style={{
                            background: "#fff",
                            color: "var(--navy)",
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: 10,
                            fontWeight: 500,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            padding: "10px 14px",
                            border: "1px solid #fff",
                        }}
                    >
                        Schedule
                    </a>
                </div>
            </div>
        </header>
    );
}
