const TRACK_IMG = "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=85&auto=format&fit=crop";

const ivy = [
    { school: "Harvard", round: "RD", initials: "E.W.", note: "Prospective Economics; research in behavioral finance, published 2024." },
    { school: "Yale", round: "RD", initials: "M.L.", note: "Molecular Biology; 2× Regeneron STS semifinalist." },
    { school: "Princeton", round: "RD", initials: "A.C.", note: "Computer Science + Mathematics." },
    { school: "Columbia", round: "ED", initials: "J.H.", note: "Engineering; USAMO qualifier." },
    { school: "Penn (Wharton)", round: "ED", initials: "S.Z.", note: "Debater; raised $50K+ in fundraising." },
    { school: "Cornell", round: "ED", initials: "R.K.", note: "College of Engineering." },
    { school: "Brown (PLME)", round: "RD", initials: "D.W.", note: "8-year combined BS / MD program." },
    { school: "Dartmouth", round: "ED", initials: "N.P.", note: "Government + Asian Studies." },
];

export default function TrackRecord() {
    return (
        <section
            data-testid="track-record"
            id="track-record"
            className="section-x section-y"
        >
            <div className="grid grid-cols-12 gap-x-8 gap-y-10">
                <div className="col-span-12 lg:col-span-4">
                    <p className="eyebrow">Track Record · 录取榜单</p>
                    <h2
                        className="font-serif mt-5"
                        style={{
                            fontSize: "clamp(40px, 4.8vw, 68px)",
                            lineHeight: 0.98,
                            letterSpacing: "-0.02em",
                            fontWeight: 400,
                            color: "var(--ink)",
                        }}
                    >
                        Ivy League<br />
                        <em style={{ fontStyle: "italic", color: "var(--crimson)" }}>Class of 2026.</em>
                    </h2>
                    <p className="font-sc mt-4" style={{ color: "var(--graphite)", fontSize: 16 }}>
                        常春藤盟校 · 2026 届录取
                    </p>

                    <div className="mt-10 img-bordered overflow-hidden" style={{ aspectRatio: "4/5" }}>
                        <img
                            src={TRACK_IMG}
                            alt="Ivy League gothic architecture"
                            className="w-full h-full object-cover"
                            style={{ display: "block", filter: "grayscale(40%) contrast(1.05)" }}
                        />
                    </div>
                    <p className="eyebrow mt-3">Plate II — Where Letters Arrive</p>
                </div>

                <div className="col-span-12 lg:col-span-8">
                    <ol className="rule-top">
                        {ivy.map((r, i) => (
                            <li
                                key={r.school}
                                data-testid={`ivy-row-${i}`}
                                className="rule-bottom grid grid-cols-12 gap-x-6 py-7 items-baseline group"
                                style={{ transition: "background-color 220ms ease" }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--alabaster)")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                            >
                                <div className="col-span-1 font-mono" style={{ fontSize: 11, color: "var(--graphite)" }}>
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div className="col-span-5 lg:col-span-4">
                                    <p
                                        className="font-serif"
                                        style={{
                                            fontSize: "clamp(22px, 2.1vw, 30px)",
                                            lineHeight: 1.1,
                                            fontWeight: 500,
                                            color: "var(--ink)",
                                        }}
                                    >
                                        {r.school}
                                    </p>
                                    <p className="font-mono mt-1" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--crimson)" }}>
                                        {r.round} · Class of 2026
                                    </p>
                                </div>
                                <div className="col-span-6 lg:col-span-7">
                                    <p className="font-serif" style={{ fontSize: 18, lineHeight: 1.5, color: "var(--ink)" }}>
                                        <span style={{ fontStyle: "italic", color: "var(--graphite)", marginRight: 8 }}>{r.initials}</span>
                                        {r.note}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <p className="font-mono mt-8" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--graphite)" }}>
                        + Top 15 · Stanford · MIT · Caltech · Duke · Northwestern · Johns Hopkins · Williams
                    </p>
                </div>
            </div>
        </section>
    );
}
