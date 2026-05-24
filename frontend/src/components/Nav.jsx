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
            className="sticky top-0 z-50 backdrop-blur-md transition-colors"
            style={{
                backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.78)",
                borderBottom: "1px solid var(--line)",
            }}
        >
            <div className="section-x flex items-center justify-between" style={{ height: 74 }}>
                <a href="#top" data-testid="nav-logo" className="flex items-center gap-3">
                    {/* Mini crest */}
                    <svg width="26" height="32" viewBox="0 0 26 32" aria-hidden="true">
                        <path d="M1 1 H25 V21 L13 31 L1 21 Z" fill="none" stroke="var(--navy)" strokeWidth="1.5" />
                        <path d="M13 7 V25 M7 13 H19" stroke="var(--orange)" strokeWidth="1.5" />
                    </svg>
                    <span className="font-display tracking-tight" style={{ fontSize: 21, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.01em" }}>
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
                                color: "var(--navy)",
                                fontWeight: 500,
                            }}
                        >
                            {l}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <a href="#contact" data-testid="nav-cta" className="btn-primary hidden md:inline-flex">
                        Schedule a Conversation
                    </a>
                    <a href="#contact" data-testid="nav-cta-mobile" className="btn-primary md:hidden" style={{ padding: "10px 14px", fontSize: 10 }}>
                        Schedule
                    </a>
                </div>
            </div>
        </header>
    );
}
