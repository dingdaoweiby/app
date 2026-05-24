const schools = [
    "Harvard", "Yale", "Princeton", "Columbia", "Penn", "Cornell",
    "Brown", "Dartmouth", "Stanford", "MIT", "Caltech", "Duke",
    "Northwestern", "Johns Hopkins", "Williams", "Phillips Exeter",
    "Deerfield", "Harvard-Westlake", "Groton", "The Lawrenceville School",
];

export default function Marquee() {
    return (
        <section
            data-testid="marquee"
            className="rule-bottom no-scrollbar"
            style={{ background: "var(--alabaster)", overflow: "hidden" }}
        >
            <div className="py-6 overflow-hidden">
                <div className="marquee-track">
                    {[...schools, ...schools].map((s, i) => (
                        <span
                            key={i}
                            className="font-serif"
                            style={{
                                fontSize: 22,
                                fontStyle: "italic",
                                color: "var(--ink)",
                                opacity: 0.85,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {s}
                            <span style={{ color: "var(--crimson)", margin: "0 28px", fontStyle: "normal" }}>·</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
