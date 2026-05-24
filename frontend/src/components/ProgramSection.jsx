export default function ProgramSection({ index, eyebrow, title, body, bullets, deliverable, image, imageCaption, reverse }) {
    return (
        <section
            data-testid={`program-section-${index}`}
            className="section-x"
            style={{
                paddingTop: "clamp(72px, 8vw, 120px)",
                paddingBottom: "clamp(72px, 8vw, 120px)",
                background: index % 2 === 1 ? "var(--mist)" : "var(--paper)",
                borderTop: "1px solid var(--line)",
            }}
        >
            <div className={`grid grid-cols-12 gap-x-10 gap-y-12 items-start ${reverse ? "lg:flex-row-reverse" : ""}`}>
                <div className={`col-span-12 lg:col-span-7 ${reverse ? "lg:col-start-6" : ""}`}>
                    <div className="flex items-baseline gap-4 mb-5">
                        <span className="font-display" style={{ fontSize: 36, color: "var(--orange)", fontWeight: 600, lineHeight: 1 }}>
                            {String(index).padStart(2, "0")}
                        </span>
                        <span className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)", fontWeight: 500 }}>
                            {eyebrow}
                        </span>
                    </div>
                    <h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(30px, 3.6vw, 52px)",
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                            fontWeight: 500,
                            color: "var(--navy)",
                        }}
                    >
                        {title}
                    </h2>

                    <div className="my-6" style={{ width: 48, height: 2, background: "var(--orange)" }} />

                    <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink)", maxWidth: 640 }}>
                        {body}
                    </p>

                    {bullets && bullets.length > 0 && (
                        <ul className="mt-8 space-y-3">
                            {bullets.map((b, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--orange)", marginTop: 6 }}>
                                        ▸
                                    </span>
                                    <p className="font-serif" style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)", maxWidth: 600 }}>
                                        {b}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}

                    {deliverable && (
                        <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--line)", maxWidth: 480 }}>
                            <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}>
                                Outcome
                            </p>
                            <p className="font-display mt-1" style={{ fontSize: 17, color: "var(--navy)", fontWeight: 600 }}>
                                {deliverable}
                            </p>
                        </div>
                    )}
                </div>

                {image && (
                    <div className={`col-span-12 lg:col-span-4 ${reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-9"}`}>
                        <div className="img-bordered overflow-hidden" style={{ aspectRatio: "4/5" }}>
                            <img
                                src={image}
                                alt={imageCaption || title}
                                className="w-full h-full object-cover"
                                style={{ filter: "grayscale(60%) contrast(1.05)", display: "block" }}
                            />
                        </div>
                        {imageCaption && (
                            <p className="eyebrow mt-3">{imageCaption}</p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
