const ivy = [
    { school: "Harvard",        domain: "harvard.edu",       initials: "E.W.", note: "Economics" },
    { school: "Yale",           domain: "yale.edu",          initials: "M.L.", note: "Molecular Biology" },
    { school: "Princeton",      domain: "princeton.edu",     initials: "A.C.", note: "CS + Math" },
    { school: "Columbia",       domain: "columbia.edu",      initials: "J.H.", note: "Engineering" },
    { school: "Penn — Wharton", domain: "wharton.upenn.edu", initials: "S.Z.", note: "Business" },
    { school: "Cornell",        domain: "cornell.edu",       initials: "R.K.", note: "Engineering" },
    { school: "Brown — PLME",   domain: "brown.edu",         initials: "D.W.", note: "BS / MD" },
    { school: "Dartmouth",      domain: "dartmouth.edu",     initials: "N.P.", note: "Government" },
];

const top15 = [
    { school: "Stanford",      domain: "stanford.edu",     initials: "L.T.", note: "CS + AI" },
    { school: "MIT",           domain: "mit.edu",          initials: "K.Y.", note: "EECS" },
    { school: "Caltech",       domain: "caltech.edu",      initials: "B.X.", note: "Physics" },
    { school: "Duke",          domain: "duke.edu",         initials: "T.G.", note: "Public Policy" },
    { school: "Northwestern",  domain: "northwestern.edu", initials: "P.Q.", note: "Journalism" },
    { school: "Johns Hopkins", domain: "jhu.edu",          initials: "C.L.", note: "BME" },
    { school: "Georgetown",    domain: "georgetown.edu",   initials: "W.F.", note: "Intl Relations" },
    { school: "Williams",      domain: "williams.edu",     initials: "H.M.", note: "Econ + Phil" },
];

const k12 = [
    { school: "Newark Academy",        domain: "newarka.edu",        initials: "M.C.", note: "4th Grade" },
    { school: "Pingry",                domain: "pingry.org",         initials: "S.W.", note: "7th Grade" },
    { school: "Harvard-Westlake",      domain: "hw.com",             initials: "R.L.", note: "9th Grade" },
    { school: "Phillips Exeter",       domain: "exeter.edu",         initials: "A.Z.", note: "9th · Boarding" },
    { school: "Princeton Day School",  domain: "pds.org",            initials: "E.K.", note: "6th Grade" },
    { school: "Blair Academy",         domain: "blair.edu",          initials: "J.M.", note: "9th · Boarding" },
    { school: "Horace Mann",           domain: "horacemann.org",     initials: "L.X.", note: "9th Grade" },
    { school: "The Dalton School",     domain: "dalton.org",         initials: "C.H.", note: "Kindergarten" },
    { school: "Groton School",         domain: "groton.org",         initials: "T.W.", note: "8th · Boarding" },
    { school: "Lawrenceville",         domain: "lawrenceville.org",  initials: "B.Y.", note: "9th · Boarding" },
    { school: "Peddie School",         domain: "peddie.org",         initials: "N.S.", note: "9th · Boarding" },
    { school: "Deerfield Academy",     domain: "deerfield.edu",      initials: "K.R.", note: "9th · Boarding" },
];

function SchoolLogo({ domain, name }) {
    return (
        <div
            className="flex items-center justify-center"
            style={{
                width: 44,
                height: 44,
                background: "var(--paper)",
                border: "1px solid var(--line)",
                flexShrink: 0,
                overflow: "hidden",
            }}
        >
            <img
                src={`https://logo.clearbit.com/${domain}`}
                alt={`${name} logo`}
                loading="lazy"
                style={{ maxWidth: 32, maxHeight: 32, objectFit: "contain" }}
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
                }}
            />
        </div>
    );
}

function Group({ title, schools, columns = 4 }) {
    return (
        <div className="mt-14" data-testid={`tr-group-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
            <div className="flex items-end justify-between mb-6" style={{ borderBottom: "2px solid var(--navy)", paddingBottom: 10 }}>
                <h3 className="font-display" style={{ fontSize: "clamp(20px, 1.8vw, 26px)", color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}>{title}</h3>
                <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}>Class of 2026</p>
            </div>

            <div
                className="grid gap-px"
                style={{
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    background: "var(--line)",
                    border: "1px solid var(--line)",
                }}
            >
                {schools.map((s, i) => (
                    <div
                        key={s.school + i}
                        className="p-5 flex flex-col justify-between"
                        style={{ background: "var(--paper)", minHeight: 150 }}
                        data-testid={`tr-card-${s.school.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    >
                        <div className="flex items-start gap-3">
                            <SchoolLogo domain={s.domain} name={s.school} />
                            <p
                                className="font-display"
                                style={{
                                    fontSize: "clamp(15px, 1.25vw, 19px)",
                                    lineHeight: 1.15,
                                    color: "var(--navy)",
                                    fontWeight: 600,
                                    letterSpacing: "-0.005em",
                                }}
                            >
                                {s.school}
                            </p>
                        </div>
                        <div className="mt-4 pt-3" style={{ borderTop: "1px solid var(--line)" }}>
                            <p className="font-mono" style={{ fontSize: 10, color: "var(--orange)", letterSpacing: "0.12em", fontWeight: 500 }}>
                                {s.initials}
                            </p>
                            <p className="font-mono mt-1" style={{ fontSize: 9.5, color: "var(--steel)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                                {s.note}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
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
            <div className="mb-4">
                <div className="flex items-center gap-3">
                    <div style={{ width: 32, height: 1, background: "var(--orange)" }} />
                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                        Track Record
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
                        maxWidth: 880,
                    }}
                >
                    Where our students<br />
                    <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>actually went.</em>
                </h2>
                <div className="mt-8" style={{ width: 56, height: 2, background: "var(--navy)" }} />
                <p className="font-serif italic mt-6" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--steel)", maxWidth: 620 }}>
                    Class of 2026 admissions outcomes — Ivy League, Top 15 and Elite Technical, and K–12 Private Schools. Initials shown out of respect for privacy.
                </p>
            </div>

            <Group title="Ivy League"               schools={ivy}   columns={4} />
            <Group title="Top 15 and Elite Technical" schools={top15} columns={4} />
            <Group title="K–12 Private School"      schools={k12}   columns={4} />
        </section>
    );
}
