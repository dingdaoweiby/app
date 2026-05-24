const FEATURE_IMG = "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1200&q=85&auto=format&fit=crop";

const stories = [
    {
        school: "Columbia University",
        tag: "Ivy League · ED",
        body: "A high-achieving NJ student with a 1560 SAT and strong APs — but an activity list indistinguishable from hundreds of other applicants. We repositioned her narrative around a two-year community health project she had dismissed as 'just volunteering.' Her Common App essay connected that fieldwork to her pre-med ambitions in a way no other applicant from her school could replicate.",
        outcome: "Admitted Early Decision.",
        featured: true,
    },
    {
        school: "Duke University",
        tag: "Top 15",
        body: "A student-athlete with Division III–level lacrosse talent and a genuine interest in public policy, but a scattered application. We streamlined the story — sport, policy, leadership — and built a supplemental essay set that showed Duke exactly how he would contribute beyond the field.",
        outcome: "Admitted to Trinity College of Arts & Sciences.",
    },
    {
        school: "Williams College",
        tag: "Liberal Arts",
        body: "A first-generation applicant from an immigrant family with limited knowledge of the U.S. admissions system. Strong writer, quiet presence, no flashy credentials. We helped her find schools that would value depth over noise — and built a financial aid strategy that made attendance possible.",
        outcome: "Admitted with a full-need scholarship.",
    },
    {
        school: "MIT",
        tag: "Top 15 · EA",
        body: "A robotics world finalist who had never thought carefully about his application narrative — he assumed strong stats would carry him. We helped him translate his technical fluency into a human story about what building things actually meant to him.",
        outcome: "Admitted Early Action.",
    },
];

export default function StudentStories() {
    return (
        <section
            data-testid="student-stories"
            id="stories"
            className="section-x section-y"
            style={{ background: "var(--mist)" }}
        >
            <div className="grid grid-cols-12 gap-x-10 mb-14">
                <div className="col-span-12 lg:col-span-8">
                    <p className="eyebrow">§ III · Student Stories</p>
                    <h2
                        className="font-display mt-5"
                        style={{
                            fontSize: "clamp(40px, 4.8vw, 68px)",
                            lineHeight: 1,
                            letterSpacing: "-0.02em",
                            fontWeight: 500,
                            color: "var(--navy)",
                        }}
                    >
                        How students found their path.
                    </h2>
                </div>
                <div className="col-span-12 lg:col-span-4 flex items-end">
                    <p className="font-serif mt-6 lg:mt-0" style={{ fontSize: 17, color: "var(--steel)", lineHeight: 1.55 }}>
                        Four representative cases drawn from this season's cohort. Names withheld; outcomes verified.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-10 rule-top pt-12" style={{ borderTopWidth: 2, borderTopColor: "var(--navy)" }}>
                {/* Featured */}
                <article
                    data-testid="story-featured"
                    className="col-span-12 lg:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    <div className="img-bordered overflow-hidden order-2 lg:order-1" style={{ aspectRatio: "4/5" }}>
                        <img
                            src={FEATURE_IMG}
                            alt="Student writing at a campus desk"
                            className="w-full h-full object-cover"
                            style={{ filter: "grayscale(60%) contrast(1.05)" }}
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                            {stories[0].tag}
                        </p>
                        <h3
                            className="font-display mt-3"
                            style={{
                                fontSize: "clamp(28px, 2.6vw, 38px)",
                                lineHeight: 1.05,
                                color: "var(--navy)",
                                fontWeight: 500,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {stories[0].school}
                        </h3>
                        <div className="my-6" style={{ width: 36, height: 2, background: "var(--orange)" }} />
                        <p className="font-serif dropcap" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink)" }}>
                            {stories[0].body}
                        </p>
                        <p
                            className="font-display mt-5"
                            style={{
                                fontSize: 19,
                                color: "var(--navy)",
                                fontWeight: 600,
                                letterSpacing: "-0.005em",
                            }}
                        >
                            {stories[0].outcome}
                        </p>
                    </div>
                </article>

                {/* Side cards */}
                <div className="col-span-12 lg:col-span-5 flex flex-col">
                    {stories.slice(1).map((s, i) => (
                        <article
                            key={s.school}
                            data-testid={`story-${i + 1}`}
                            className={`py-8 ${i < stories.length - 2 ? "rule-bottom" : ""} ${i === 0 ? "lg:pt-0" : ""}`}
                        >
                            <div className="flex items-baseline justify-between gap-4">
                                <h3
                                    className="font-display"
                                    style={{
                                        fontSize: "clamp(22px, 1.7vw, 26px)",
                                        lineHeight: 1.1,
                                        color: "var(--navy)",
                                        fontWeight: 500,
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    {s.school}
                                </h3>
                                <span className="font-mono whitespace-nowrap" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                    {s.tag}
                                </span>
                            </div>
                            <p className="font-serif mt-3" style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}>
                                {s.body}
                            </p>
                            <p className="font-display mt-3" style={{ fontSize: 16, color: "var(--navy)", fontWeight: 600 }}>
                                {s.outcome}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
