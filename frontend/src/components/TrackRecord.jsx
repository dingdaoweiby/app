const ivy = [
    { school: "Harvard",   round: "RD",        initials: "E.W.", note: "Prospective Economics; Research in behavioral finance, published 2024" },
    { school: "Yale",      round: "RD",        initials: "M.L.", note: "Molecular Biology; 2× Regeneron STS semifinalist" },
    { school: "Princeton", round: "RD",        initials: "A.C.", note: "Computer Science + Math" },
    { school: "Columbia",  round: "ED",        initials: "J.H.", note: "Engineering; USAMO qualifier" },
    { school: "Penn",      round: "ED",        initials: "S.Z.", note: "Wharton; debater, raised $50K+ fundraising" },
    { school: "Cornell",   round: "ED",        initials: "R.K.", note: "College of Engineering" },
    { school: "Brown",     round: "RD (PLME)", initials: "D.W.", note: "8-year BS/MD program" },
    { school: "Dartmouth", round: "ED",        initials: "N.P.", note: "Government + Asian Studies" },
];

const top15 = [
    { school: "Stanford",       round: "RD", initials: "L.T.", note: "CS + AI research" },
    { school: "MIT",            round: "EA", initials: "K.Y.", note: "EECS; robotics world finalist" },
    { school: "Caltech",        round: "RD", initials: "B.X.", note: "Physics; published in AJP" },
    { school: "Duke",           round: "ED", initials: "T.G.", note: "Trinity; Policy research" },
    { school: "Northwestern",   round: "ED", initials: "P.Q.", note: "Medill; investigative journalism" },
    { school: "Johns Hopkins",  round: "ED", initials: "C.L.", note: "BME; pre-med track" },
    { school: "Georgetown",     round: "RD", initials: "W.F.", note: "SFS; international relations" },
    { school: "Williams",       round: "RD", initials: "H.M.", note: "Economics + Philosophy" },
];

const k12 = [
    { school: "Newark Academy",          tag: "Day · 4th Grade",           note: "Student M. — Newark Academy" },
    { school: "Pingry (NJ)",             tag: "Day · 7th Grade",           note: "Student S. — Middle school admission" },
    { school: "Harvard-Westlake",        tag: "Day · 9th Grade (CA)",      note: "Student R. — Transfer from NYC" },
    { school: "Phillips Exeter",         tag: "Boarding · 9th Grade",      note: "Student A. — Financial aid" },
    { school: "Princeton Day School",    tag: "Private school admit",      note: "—" },
    { school: "Blair Academy",           tag: "Private school admit",      note: "—" },
    { school: "Horace Mann School",      tag: "Private school admit",      note: "—" },
    { school: "The Dalton School",       tag: "Private school admit",      note: "—" },
    { school: "Groton School",           tag: "Private school admit",      note: "—" },
    { school: "The Lawrenceville School",tag: "Private school admit",      note: "—" },
    { school: "The Peddie School",       tag: "Private school admit",      note: "—" },
    { school: "Deerfield Academy",       tag: "Private school admit",      note: "—" },
];

function GroupHeader({ title }) {
    return (
        <div className="mt-10 mb-3 flex items-end justify-between" style={{ borderBottom: "2px solid var(--navy)", paddingBottom: 8 }}>
            <h3 className="font-display" style={{ fontSize: "clamp(22px, 2vw, 28px)", color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}>{title}</h3>
            <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}>Class of 2026</p>
        </div>
    );
}

function Row({ idx, school, round, initials, note }) {
    return (
        <li className="grid grid-cols-12 gap-x-4 py-5" style={{ borderBottom: "1px solid var(--line)" }} data-testid={`tr-row-${school.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
            <div className="col-span-1 font-mono tabular" style={{ fontSize: 10, color: "var(--orange)", fontWeight: 500, letterSpacing: "0.05em" }}>
                {String(idx + 1).padStart(2, "0")}.
            </div>
            <div className="col-span-5 lg:col-span-3">
                <p className="font-display" style={{ fontSize: 18, color: "var(--navy)", fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.005em" }}>{school}</p>
                <p className="font-mono mt-1" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--steel)" }}>{round}</p>
            </div>
            <div className="col-span-6 lg:col-span-8">
                <p className="font-serif" style={{ fontSize: 15, lineHeight: 1.5, color: "var(--ink)" }}>
                    <span style={{ fontWeight: 600, color: "var(--navy)", marginRight: 8 }}>{initials}</span>
                    {note}
                </p>
            </div>
        </li>
    );
}

export default function TrackRecord() {
    return (
        <section
            data-testid="track-record"
            id="track-record"
            className="section-x section-y"
            style={{ background: "var(--paper)" }}
        >
            <div className="grid grid-cols-12 gap-x-10 mb-12">
                <div className="col-span-12 lg:col-span-7">
                    <p className="eyebrow">§ II · Track Record</p>
                    <h2
                        className="font-display mt-5"
                        style={{
                            fontSize: "clamp(40px, 5vw, 72px)",
                            lineHeight: 1,
                            letterSpacing: "-0.02em",
                            fontWeight: 500,
                            color: "var(--navy)",
                        }}
                    >
                        Where our students<br />
                        <em style={{ fontStyle: "italic", color: "var(--orange)" }}>actually went.</em>
                    </h2>
                </div>
                <div className="col-span-12 lg:col-span-5 flex items-end">
                    <p className="font-serif italic" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--steel)", maxWidth: 460 }}>
                        Class of 2026 admissions outcomes — Ivy League, Top 15 and elite technical, and K–12 private schools. Initials shown out of respect for privacy.
                    </p>
                </div>
            </div>

            <GroupHeader title="Ivy League" />
            <ol>
                {ivy.map((r, i) => <Row key={r.school} idx={i} {...r} />)}
            </ol>

            <GroupHeader title="Top 15 & Elite Technical" />
            <ol>
                {top15.map((r, i) => <Row key={r.school} idx={i} {...r} />)}
            </ol>

            <GroupHeader title="K–12 Private School" />
            <ol>
                {k12.map((r, i) => (
                    <li key={r.school} className="grid grid-cols-12 gap-x-4 py-5" style={{ borderBottom: "1px solid var(--line)" }} data-testid={`tr-row-k12-${i}`}>
                        <div className="col-span-1 font-mono tabular" style={{ fontSize: 10, color: "var(--orange)", fontWeight: 500, letterSpacing: "0.05em" }}>
                            {String(i + 1).padStart(2, "0")}.
                        </div>
                        <div className="col-span-5 lg:col-span-4">
                            <p className="font-display" style={{ fontSize: 18, color: "var(--navy)", fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.005em" }}>{r.school}</p>
                            <p className="font-mono mt-1" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--steel)" }}>{r.tag}</p>
                        </div>
                        <div className="col-span-6 lg:col-span-7">
                            <p className="font-serif" style={{ fontSize: 15, lineHeight: 1.5, color: "var(--ink)" }}>{r.note}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
