import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
    { label: "K–12", to: "/k-12" },
    {
        label: "College",
        children: [
            { label: "9–11th Grade Strategic Planning", to: "/college/strategic-planning" },
            { label: "Admissions Consulting", to: "/college/admissions-consulting" },
        ],
    },
    { label: "Graduate", to: "/graduate" },
    { label: "Research", to: "/research" },
    { label: "International", to: "/international" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [openCollege, setOpenCollege] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => { setMobileOpen(false); setOpenCollege(false); }, [location.pathname]);

    const linkBase = {
        fontFamily: "'Source Serif Pro', Georgia, serif",
        fontSize: 17,
        fontWeight: 500,
        letterSpacing: "-0.005em",
        color: "rgba(255,255,255,0.92)",
        transition: "color 180ms ease",
        padding: "10px 4px",
    };

    return (
        <header
            data-testid="top-nav"
            className="sticky top-0 z-50"
            style={{
                backgroundColor: "var(--navy)",
                color: "#fff",
                boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.18)" : "none",
                transition: "box-shadow 200ms ease",
            }}
        >
            <div
                className="flex items-center"
                style={{
                    height: 88,
                    paddingLeft: "clamp(24px, 4vw, 56px)",
                    paddingRight: "clamp(24px, 4vw, 56px)",
                    gap: 56,
                }}
            >
                <Link to="/" data-testid="nav-logo" className="flex items-center gap-2">
                    <img
                        src="/logo-seed.png"
                        alt="Supernova Education"
                        style={{ height: 72, width: "auto", display: "block", mixBlendMode: "lighten" }}
                    />
                    <span className="flex flex-col" style={{ lineHeight: 1.05 }}>
                        <span
                            className="font-display"
                            style={{ fontSize: 22, color: "#fff", fontWeight: 700, letterSpacing: "-0.01em" }}
                        >
                            Supernova
                        </span>
                        <span
                            className="font-display"
                            style={{ fontSize: 22, color: "rgba(255,255,255,0.92)", fontWeight: 400, letterSpacing: "-0.005em", marginTop: 2 }}
                        >
                            Education
                        </span>
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center ml-auto" style={{ gap: 44 }}>
                    {navItems.map((item) =>
                        item.children ? (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => setOpenCollege(true)}
                                onMouseLeave={() => setOpenCollege(false)}
                            >
                                <button
                                    data-testid="nav-college-trigger"
                                    className="flex items-center gap-1.5"
                                    style={{
                                        ...linkBase,
                                        background: "transparent",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    {item.label}
                                    <span style={{ fontSize: 11, color: "var(--orange)", marginTop: 2 }}>▾</span>
                                </button>

                                {openCollege && (
                                    <div
                                        data-testid="nav-college-menu"
                                        style={{
                                            position: "absolute",
                                            top: "100%",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            minWidth: 340,
                                            background: "#fff",
                                            border: "1px solid var(--line)",
                                            boxShadow: "0 16px 32px rgba(15,26,48,0.12)",
                                            padding: "8px 0",
                                        }}
                                    >
                                        <div className="px-6 py-3" style={{ borderBottom: "1px solid var(--line)" }}>
                                            <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                                College Admissions
                                            </p>
                                        </div>
                                        {item.children.map((c) => (
                                            <NavLink
                                                key={c.to}
                                                to={c.to}
                                                data-testid={`nav-college-${c.to.split("/").pop()}`}
                                                className="block px-6 py-4 font-display"
                                                style={{
                                                    fontSize: 16,
                                                    color: "var(--navy)",
                                                    fontWeight: 500,
                                                    letterSpacing: "-0.005em",
                                                    transition: "background-color 180ms ease, color 180ms ease",
                                                }}
                                                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--mist)"; e.currentTarget.style.color = "var(--orange)"; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--navy)"; }}
                                            >
                                                {c.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                data-testid={`nav-link-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                style={({ isActive }) => ({
                                    ...linkBase,
                                    color: isActive ? "var(--orange)" : "rgba(255,255,255,0.92)",
                                })}
                                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--orange)"; }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = e.currentTarget.classList.contains("active") ? "var(--orange)" : "rgba(255,255,255,0.92)";
                                }}
                            >
                                {item.label}
                            </NavLink>
                        )
                    )}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        to="/contact"
                        data-testid="nav-cta"
                        className="hidden md:inline-flex items-center"
                        style={{
                            background: "#fff",
                            color: "var(--navy)",
                            fontFamily: "'Source Serif Pro', Georgia, serif",
                            fontSize: 15,
                            fontWeight: 500,
                            letterSpacing: "-0.005em",
                            padding: "14px 26px",
                            border: "1px solid #fff",
                            transition: "background-color 220ms ease, border-color 220ms ease, color 220ms ease",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.borderColor = "var(--orange)"; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.color = "var(--navy)"; }}
                    >
                        Schedule a Consultation
                    </Link>

                    <button
                        data-testid="nav-mobile-trigger"
                        className="lg:hidden inline-flex items-center justify-center"
                        onClick={() => setMobileOpen((v) => !v)}
                        style={{
                            background: "transparent",
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,0.4)",
                            padding: "10px 14px",
                            fontFamily: "'Source Serif Pro', Georgia, serif",
                            fontSize: 14,
                            cursor: "pointer",
                        }}
                    >
                        {mobileOpen ? "Close" : "Menu"}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div
                    data-testid="nav-mobile-menu"
                    className="lg:hidden"
                    style={{ background: "var(--navy-deep)", padding: "16px 24px 24px", borderTop: "1px solid rgba(255,255,255,0.12)" }}
                >
                    <ul className="space-y-1">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                {item.children ? (
                                    <details>
                                        <summary
                                            className="font-display py-3 cursor-pointer"
                                            style={{ fontSize: 18, color: "#fff", fontWeight: 500 }}
                                        >
                                            {item.label} <span style={{ color: "var(--orange)", marginLeft: 6 }}>▾</span>
                                        </summary>
                                        <ul className="pl-4 mt-1 space-y-1" style={{ borderLeft: "1px solid rgba(255,255,255,0.2)" }}>
                                            {item.children.map((c) => (
                                                <li key={c.to}>
                                                    <NavLink
                                                        to={c.to}
                                                        className="block py-2 font-serif"
                                                        style={{ fontSize: 15, color: "rgba(255,255,255,0.85)" }}
                                                    >
                                                        {c.label}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                ) : (
                                    <NavLink
                                        to={item.to}
                                        className="block py-3 font-display"
                                        style={{ fontSize: 18, color: "#fff", fontWeight: 500 }}
                                    >
                                        {item.label}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
