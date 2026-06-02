import { Link } from "react-router-dom";
import { useT } from "@/i18n/LanguageContext";

// Render title text breaking on ". " into spans + mobile-only <br />.
// Desktop: appears as one paragraph; mobile: each sentence on its own line.
function renderTitleLines(title) {
    if (!title) return null;
    const parts = title.split(/(?<=\. )/);
    return parts.map((p, i) => {
        const isLast = i === parts.length - 1;
        return (
            <span key={i}>
                {p}
                {!isLast && <br className="md:hidden" />}
            </span>
        );
    });
}

export default function PageHeader({ eyebrow, title, italicWord, subtitle, breadcrumb, background = "var(--mist)", nowrap = false, stack = false }) {
    const t = useT();
    return (
        <section
            data-testid="page-header"
            className="section-x relative"
            style={{
                paddingTop: "clamp(48px, 6vw, 88px)",
                paddingBottom: "clamp(40px, 5vw, 72px)",
                background: background,
                borderBottom: "1px solid var(--line)",
            }}
        >
            {breadcrumb && (
                <nav
                    className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-10 font-mono"
                    style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}
                >
                    <Link to="/" className="link-underline" data-testid="breadcrumb-home">{t.breadcrumb.home}</Link>
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
                <div style={{ width: 36, height: 1, background: "var(--orange)" }} />
                {eyebrow && (
                    <p
                        className="font-mono"
                        style={{ fontSize: 13, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                    >
                        {eyebrow}
                    </p>
                )}
            </div>

            <h1
                className={`font-display mt-6 ${nowrap ? "md:whitespace-nowrap" : ""}`}
                style={{
                    fontSize: "clamp(32px, 4vw, 60px)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.025em",
                    fontWeight: 500,
                    color: "var(--navy)",
                    maxWidth: nowrap ? "none" : 1000,
                }}
            >
                {renderTitleLines(title)}
                {italicWord && (
                    stack ? (
                        <><br /><em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>{italicWord}</em></>
                    ) : (
                        <>
                            <br className="md:hidden" />
                            <span className="hidden md:inline"> </span>
                            <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>{italicWord}</em>
                        </>
                    )
                )}
            </h1>

            <div className="mt-8" style={{ width: 56, height: 2, background: "var(--navy)" }} />

            {subtitle && (
                <p
                    className="font-serif italic mt-6"
                    style={{
                        fontSize: "clamp(16px, 1.7vw, 24px)",
                        lineHeight: 1.5,
                        color: "var(--navy)",
                        fontWeight: 500,
                        maxWidth: 920,
                    }}
                >
                    {subtitle}
                </p>
            )}
        </section>
    );
}
