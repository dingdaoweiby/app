import { Link } from "react-router-dom";

export default function PageHeader({ eyebrow, title, italicWord, subtitle, breadcrumb }) {
    return (
        <section
            data-testid="page-header"
            className="section-x relative"
            style={{
                paddingTop: "clamp(48px, 6vw, 88px)",
                paddingBottom: "clamp(40px, 5vw, 72px)",
                background: "var(--mist)",
                borderBottom: "1px solid var(--line)",
            }}
        >
            {breadcrumb && (
                <nav
                    className="flex items-center gap-2 mb-10 font-mono"
                    style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}
                >
                    <Link to="/" className="link-underline" data-testid="breadcrumb-home">Home</Link>
                    {breadcrumb.map((b, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span style={{ color: "var(--line-strong)" }}>/</span>
                            {b.to ? (
                                <Link to={b.to} className="link-underline">{b.label}</Link>
                            ) : (
                                <span style={{ color: "var(--orange)" }}>{b.label}</span>
                            )}
                        </span>
                    ))}
                </nav>
            )}

            <div className="flex items-center gap-3">
                <div style={{ width: 32, height: 1, background: "var(--orange)" }} />
                {eyebrow && (
                    <p
                        className="font-mono"
                        style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                    >
                        {eyebrow}
                    </p>
                )}
            </div>

            <h1
                className="font-display mt-6"
                style={{
                    fontSize: "clamp(40px, 5.4vw, 78px)",
                    lineHeight: 1.02,
                    letterSpacing: "-0.025em",
                    fontWeight: 500,
                    color: "var(--navy)",
                    maxWidth: 1000,
                }}
            >
                {title}
                {italicWord && (
                    <> <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>{italicWord}</em></>
                )}
            </h1>

            <div className="mt-8" style={{ width: 56, height: 2, background: "var(--navy)" }} />

            {subtitle && (
                <p
                    className="font-serif italic mt-6"
                    style={{
                        fontSize: 18,
                        lineHeight: 1.6,
                        color: "var(--steel)",
                        maxWidth: 720,
                    }}
                >
                    {subtitle}
                </p>
            )}
        </section>
    );
}
