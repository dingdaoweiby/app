export default function SectionHeading({
    eyebrow,
    title,
    italic,
    subtitle,
    align = "left",
    maxTitle = 880,
    maxSubtitle = 720,
    nowrap = false,
}) {
    const alignCls = align === "center" ? "items-center text-center" : "items-start";
    return (
        <div className={`flex flex-col ${alignCls}`}>
            <div className="flex items-center gap-3">
                <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
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
                className="font-display mt-5"
                style={{
                    fontSize: "clamp(32px, 3vw, 44px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                    fontWeight: 500,
                    color: "var(--navy)",
                    maxWidth: maxTitle,
                    whiteSpace: nowrap ? "nowrap" : undefined,
                }}
            >
                {title}
                {italic && (
                    <> <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>{italic}</em></>
                )}
            </h2>
            {subtitle && (
                <p
                    className="font-serif mt-5"
                    style={{
                        fontSize: 16.5,
                        lineHeight: 1.65,
                        color: "var(--ink)",
                        maxWidth: maxSubtitle,
                    }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
