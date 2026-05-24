const TRACK_IMG = "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=85&auto=format&fit=crop";

const ivy = [
    { school: "Harvard",           round: "RD", initials: "E.W.", note: "Prospective Economics; research in behavioral finance, published 2024." },
    { school: "Yale",              round: "RD", initials: "M.L.", note: "Molecular Biology; 2× Regeneron STS semifinalist." },
    { school: "Princeton",         round: "RD", initials: "A.C.", note: "Computer Science + Mathematics." },
    { school: "Columbia",          round: "ED", initials: "J.H.", note: "Engineering; USAMO qualifier." },
    { school: "Penn — Wharton",    round: "ED", initials: "S.Z.", note: "Debater; raised $50K+ in fundraising." },
    { school: "Cornell",           round: "ED", initials: "R.K.", note: "College of Engineering." },
    { school: "Brown — PLME",      round: "RD", initials: "D.W.", note: "8-year combined BS / MD program." },
    { school: "Dartmouth",         round: "ED", initials: "N.P.", note: "Government + Asian Studies." },
];

export default function TrackRecord() {
    return (
        <section
            data-testid="track-record"
            id="track-record"
            className="section-x section-y"
        >
            <div className="grid grid-cols-12 gap-x-10 gap-y-12">
                <div className="col-span-12 lg:col-span-4">
                    <p className="eyebrow">§ I · Track Record</p>
                    <h2
                        className="font-display mt-5"
                        style={{
                            fontSize: "clamp(40px, 4.8vw, 68px)",
                            lineHeight: 0.98,
                            letterSpacing: "-0.02em",
                            fontWeight: 500,
                            color: "var(--navy)",
                        }}
                    >
                        The Ivy League<br />
                        Class of 2026.
                    </h2>
                    <p className="font-serif mt-6" style={{ fontSize: 17, color: "var(--steel)", lineHeight: 1.55, maxWidth: 360 }}>
                        Where this season's students have earned a place. Initials shown out of respect for privacy.
                    </p>

                    <div className="mt-10 img-bordered overflow-hidden" style={{ aspectRatio: "4/5" }}>
                        <img
                            src={TRACK_IMG}
                            alt="Collegiate gothic stonework"
                            className="w-full h-full object-cover"
                            style={{ display: "block", filter: "grayscale(60%) contrast(1.05)" }}
                        />
                    </div>
                    <p className="eyebrow mt-3">Plate II — Stonework, Morningside</p>
                </div>

                <div className="col-span-12 lg:col-span-8">
                    <ol className="rule-top" style={{ borderTopWidth: 2, borderTopColor: "var(--navy)" }}>
                        {ivy.map((r, i) => (
                            <li
                                key={r.school}
                                data-testid={`ivy-row-${i}`}
                                className="rule-bottom grid grid-cols-12 gap-x-6 py-7 items-baseline"
                                style={{ transition: "background-color 220ms ease" }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--mist)")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                            >
                                <div className="col-span-1 font-mono tabular" style={{ fontSize: 11, color: "var(--orange)", fontWeight: 500, letterSpacing: "0.06em" }}>
                                    {String(i + 1).padStart(2, "0")}.
                                </div>
                                <div className="col-span-5 lg:col-span-4">
                                    <p
                                        className="font-display"
                                        style={{
                                            fontSize: "clamp(22px, 2.1vw, 30px)",
                                            lineHeight: 1.1,
                                            fontWeight: 500,
                                            color: "var(--navy)",
                                            letterSpacing: "-0.01em",
                                        }}
                                    >
                                        {r.school}
                                    </p>
                                    <p className="font-mono mt-2" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}>
                                        {r.round} · Class of 2026
                                    </p>
                                </div>
                                <div className="col-span-6 lg:col-span-7">
                                    <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink)" }}>
                                        <span style={{ fontWeight: 600, color: "var(--navy)", marginRight: 8 }}>{r.initials}</span>
                                        {r.note}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
                        <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--steel)" }}>
                            + Top 15 — Stanford · MIT · Caltech · Duke · Northwestern · Johns Hopkins · Williams
                        </p>
                        <a href="#" className="font-mono link-underline" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--navy)", fontWeight: 500 }}>
                            View Full Record →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
