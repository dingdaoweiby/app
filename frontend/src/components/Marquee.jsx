const schools = [
    "Harvard", "Yale", "Princeton", "Columbia", "University of Pennsylvania",
    "Cornell", "Brown", "Dartmouth", "Stanford", "MIT", "Caltech", "Duke",
    "Northwestern", "Johns Hopkins", "Williams", "Phillips Exeter",
    "Deerfield Academy", "Harvard-Westlake", "Groton School", "Lawrenceville",
];

export default function Marquee() {
    return (
        <section
            data-testid="marquee"
            className="rule-bottom no-scrollbar"
            style={{ background: "var(--mist)", overflow: "hidden" }}
        >
            <div className="py-5 overflow-hidden">
                <div className="marquee-track">
                    {[...schools, ...schools].map((s, i) => (
                        <span
                            key={i}
                            className="font-display"
                            style={{
                                fontSize: 20,
                                color: "var(--navy)",
                                fontWeight: 500,
                                letterSpacing: "-0.005em",
                            }}
                        >
                            {s}
                            <span style={{ color: "var(--orange)", margin: "0 26px", fontWeight: 700 }}>·</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
