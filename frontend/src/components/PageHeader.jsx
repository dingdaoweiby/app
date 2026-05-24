import { Link } from "react-router-dom";

export default function PageHeader({ eyebrow, title, italicWord, subtitle, breadcrumb }) {
    return (
        <section
            data-testid="page-header"
            className="section-x relative"
            style={{
                paddingTop: "clamp(56px, 7vw, 96px)",
                paddingBottom: "clamp(40px, 5vw, 72px)",
                background: "var(--mist)",
                borderBottom: "1px solid var(--line)",
            }}
        >
            {/* Breadcrumb */}
            {breadcrumb && (
                <nav className="flex items-center gap-2 mb-10 font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}>
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

            <div className="grid grid-cols-12 gap-x-10 gap-y-8">
                <div className="col-span-12 lg:col-span-8">
                    {eyebrow && (
                        <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                            {eyebrow}
                        </p>
                    )}
                    <h1
                        className="font-display mt-5"
                        style={{
                            fontSize: "clamp(40px, 5.8vw, 88px)",
                            lineHeight: 1,
                            letterSpacing: "-0.025em",
                            fontWeight: 500,
                            color: "var(--navy)",
                        }}
                    >
                        {title}
                        {italicWord && (
                            <> <em style={{ fontStyle: "italic", color: "var(--orange)" }}>{italicWord}</em></>
                        )}
                    </h1>
                </div>
                <div className="col-span-12 lg:col-span-4 flex items-end">
                    {subtitle && (
                        <p
                            className="font-serif"
                            style={{
                                fontSize: 18,
                                lineHeight: 1.55,
                                color: "var(--steel)",
                                fontStyle: "italic",
                                maxWidth: 480,
                            }}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
