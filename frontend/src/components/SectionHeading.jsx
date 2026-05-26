export default function SectionHeading({
    eyebrow,
    title,
    italic,
    subtitle,
    align = "left",
    maxTitle = 880,
    maxSubtitle = 620,
}) {
    const alignCls = align === "center" ? "items-center text-center" : "items-start";
    return (
        <div className={`flex flex-col ${alignCls}`}>
            <div className="flex items-center gap-3">
                <div style={{ width: 32, height: 1, background: "var(--orange)" }} />
                <p
                    className="font-mono"
                    style={{
                        fontSize: 11,
                        letterSpacing: "0.24em",
                        textTransform: "uppercase",
                        color: "var(--orange)",
                        fontWeight: 500,
                    }}
                >
                    {eyebrow}
                </p>
            </div>
            <h2
                className="font-display mt-6"
                style={{
                    fontSize: "clamp(32px, 3.4vw, 50px)",
                    lineHeight: 1.12,
                    letterSpacing: "-0.02em",
                    fontWeight: 500,
                    color: "var(--navy)",
                    maxWidth: maxTitle,
                }}
            >
                {title}
                {italic && (
                    <> <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>{italic}</em></>
                )}
            </h2>
            <div className="mt-8" style={{ width: 56, height: 2, background: "var(--navy)" }} />
            {subtitle && (
                <p
                    className="font-serif italic mt-6"
                    style={{
                        fontSize: 17,
                        lineHeight: 1.65,
                        color: "var(--steel)",
                        maxWidth: maxSubtitle,
                    }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
