import { useEffect, useState } from "react";

const links = [
    { label: "Approach", zh: "教育理念" },
    { label: "Track Record", zh: "录取榜单" },
    { label: "Stories", zh: "学生故事" },
    { label: "Methodology", zh: "评估体系" },
    { label: "Contact", zh: "联系我们" },
];

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
            className={`sticky top-0 z-50 backdrop-blur-md transition-colors`}
            style={{
                backgroundColor: scrolled ? "rgba(249,248,246,0.92)" : "rgba(249,248,246,0.65)",
                borderBottom: "1px solid var(--ash)",
            }}
        >
            <div className="section-x flex items-center justify-between" style={{ height: 72 }}>
                <a
                    href="#top"
                    data-testid="nav-logo"
                    className="font-serif tracking-tight"
                    style={{ fontSize: 22, fontStyle: "italic", color: "var(--ink)" }}
                >
                    Supernova<span style={{ color: "var(--crimson)" }}>.</span> Education
                </a>

                <nav className="hidden md:flex items-center gap-9">
                    {links.map((l) => (
                        <a
                            key={l.label}
                            href={`#${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                            data-testid={`nav-link-${l.label.toLowerCase()}`}
                            className="link-underline font-mono"
                            style={{
                                fontSize: 11,
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                                color: "var(--ink)",
                            }}
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <a href="#contact" data-testid="nav-cta" className="btn-primary hidden md:inline-flex">
                    Schedule a Conversation
                </a>

                <a href="#contact" data-testid="nav-cta-mobile" className="btn-primary md:hidden" style={{ padding: "10px 14px", fontSize: 10 }}>
                    Schedule
                </a>
            </div>
        </header>
    );
}
