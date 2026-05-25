import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";

const HERO_IMG = "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1200&q=85&auto=format&fit=crop";

const fields = [
    {
        h: "STEM",
        items: [
            "Biology & Biomedical Sciences",
            "Computer Science & Artificial Intelligence",
            "Engineering & Robotics",
            "Mathematics & Applied Statistics",
            "Chemistry & Environmental Science",
            "Physics & Astronomy",
        ],
    },
    {
        h: "Business",
        items: [
            "Finance & Economics",
            "Marketing & Consumer Behavior",
            "Entrepreneurship & Innovation",
            "Data Analytics & Business Intelligence",
        ],
    },
    {
        h: "Social Sciences",
        items: [
            "Psychology & Behavioral Science",
            "Political Science & Public Policy",
            "Sociology & Education",
            "International Relations",
        ],
    },
    {
        h: "Humanities",
        items: [
            "History & Philosophy",
            "Literature & Cultural Studies",
            "Linguistics & Communication",
            "Art History & Visual Culture",
        ],
    },
];

const formats = [
    {
        h: "Format A — One-on-One Mentorship",
        sub: "Paired directly with a PhD-level research instructor for individualized guidance.",
        items: [
            "One-on-one online research method and paper-writing instruction with assigned mentor",
            "Research topic assigned based on student's academic level and interests",
            "Full paper development: literature review → methodology → drafting → revision",
            "Submission to an internationally recognized conference (Scopus / EI / CPCI indexed)",
            "Student listed as first author",
            "Recommendation letter from research mentor available upon completion",
            "Paper acceptance guaranteed within agreed timeline",
        ],
    },
    {
        h: "Format B — Team Research Project",
        sub: "Collaborative research in a small cohort (3–5 students), guided by a lead researcher.",
        items: [
            "Structured team project with assigned roles and shared deliverables",
            "Weekly group sessions with mentor supervision",
            "Individual contribution clearly defined and documented",
            "Co-authored paper with individual contribution credit",
            "Submission to a recognized conference or academic journal",
            "Builds teamwork, peer review, and academic collaboration skills",
            "Lower cost entry point with the same publication standard",
        ],
    },
];

const projects = [
    {
        field: "Business — Finance & Economics / Digital Economy & Development Economics",
        title: "Next Generation Economic Modalities: How emerging economic modalities shape carbon reduction and sharing mechanisms",
        mentor: "Robert Lyon, NYU Stern School of Business Professor",
        time: "Course starts 2026/03/13 · Paper deadline 2026/07/10",
        img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    },
    {
        field: "Business — Sustainable Development Economics",
        title: "Sustainable Business Transformation under Circular Economy and Carbon Reduction Goals",
        mentor: "Robert Lyon, NYU Stern School of Business Professor",
        time: "Paper deadline 2026/07/10",
        img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    },
    {
        field: "STEM — Computer Science & AI / Data Science",
        title: "From Linear Programming to ‘Learning Well & Computing Stable’ in Neural Networks",
        mentor: "David Woodruff, Carnegie Mellon University (Tenured Professor)",
        time: "Paper deadline 2026/06/26",
        img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    },
    {
        field: "STEM — Computer Science & AI / Operations Research",
        title: "The Secrets of Optimization & AI Algorithms",
        mentor: "David Woodruff, Carnegie Mellon University (Tenured Professor)",
        time: "Paper deadline 2026/06/26",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
        field: "STEM — Artificial Intelligence & Machine Learning",
        title: "Algorithms for Big Data",
        mentor: "David Woodruff, Carnegie Mellon University (Tenured Professor)",
        time: "Paper deadline 2026/06/26",
        img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    },
    {
        field: "STEM — AI & Operations Research",
        title: "Optimal Control and Planning via Dynamic Programming and Reinforcement Learning",
        mentor: "Peter Zhang, Carnegie Mellon University Professor",
        time: "Paper deadline 2026/07/10",
        img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    },
    {
        field: "STEM — Data Science / Computer Science",
        title: "Network Social Data Mining & User Behavior Pattern Analysis",
        mentor: "O.Y., Carnegie Mellon University (Tenured Professor, Electrical & Computer Engineering)",
        time: "Course starts 2026/07/12",
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
        field: "STEM — Data Science / Computer Science",
        title: "Data Science Classification Techniques and Algorithms",
        mentor: "O.Y., Carnegie Mellon University (Tenured Professor, Electrical & Computer Engineering)",
        time: "Course starts 2026/08/02",
        img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    },
];

export default function Research() {
    return (
        <main data-testid="page-research" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow="§ Program · Research Mentorship"
                title="From curiosity to publication."
                italicWord="Real research. Real output."
                subtitle="We pair students with active researchers and PhD mentors. Every project produces a tangible academic output — a conference paper, a research report, or a competition submission."
                breadcrumb={[{ label: "Research" }]}
            />

            <section className="section-x" style={{ background: "var(--paper)", paddingTop: 48, paddingBottom: 0 }}>
                <div className="img-bordered overflow-hidden" style={{ aspectRatio: "16/7" }}>
                    <img src={HERO_IMG} alt="Student conducting research in a science lab" className="w-full h-full object-cover" style={{ filter: "grayscale(40%) contrast(1.05)" }} />
                </div>
                <p className="eyebrow mt-3">Plate R — The Lab</p>
            </section>

            {/* Fields */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <p className="eyebrow">§ I · Research Fields</p>
                <h2 className="font-display mt-5" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 500, color: "var(--navy)" }}>
                    What you can study.
                </h2>
                <p className="font-serif mt-6" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink)", maxWidth: 820 }}>
                    We match students with active researchers and PhD mentors across four broad disciplines. Every project is designed to produce a tangible academic output — a conference paper, a research report, or a competition submission.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0" style={{ borderTop: "2px solid var(--navy)" }}>
                    {fields.map((f, i) => (
                        <article key={f.h} className="p-8" style={{
                            background: "var(--paper)",
                            borderRight: i < fields.length - 1 ? "1px solid var(--line)" : "none",
                            borderBottom: "1px solid var(--line)",
                        }} data-testid={`research-field-${i}`}>
                            <h3 className="font-display" style={{ fontSize: 22, color: "var(--navy)", fontWeight: 600 }}>{f.h}</h3>
                            <div className="my-4" style={{ width: 30, height: 2, background: "var(--orange)" }} />
                            <ul className="space-y-2">
                                {f.items.map((it, j) => (
                                    <li key={j} className="font-serif" style={{ fontSize: 15, lineHeight: 1.5, color: "var(--ink)" }}>· {it}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            {/* Formats */}
            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <p className="eyebrow">§ II · Program Formats</p>
                <h2 className="font-display mt-5" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 500, color: "var(--navy)" }}>
                    Two formats.
                </h2>
                <p className="font-serif mt-6" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink)", maxWidth: 820 }}>
                    Two formats to fit different students and goals. Same standard across both: every student finishes with a publishable output and first-author credit.
                </p>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ borderTop: "2px solid var(--navy)" }}>
                    {formats.map((f, i) => (
                        <article key={f.h} className="p-10" style={{
                            background: "var(--paper)",
                            borderRight: i === 0 ? "1px solid var(--line)" : "none",
                            borderBottom: "1px solid var(--line)",
                        }} data-testid={`research-format-${i}`}>
                            <h3 className="font-display" style={{ fontSize: "clamp(22px, 1.9vw, 28px)", lineHeight: 1.15, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}>{f.h}</h3>
                            <p className="font-serif italic mt-3" style={{ fontSize: 16, lineHeight: 1.5, color: "var(--steel)" }}>{f.sub}</p>
                            <div className="my-6" style={{ width: 36, height: 2, background: "var(--orange)" }} />
                            <ul className="space-y-3">
                                {f.items.map((it, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <span className="font-mono" style={{ fontSize: 10, color: "var(--orange)", marginTop: 6 }}>▸</span>
                                        <p className="font-serif" style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}>{it}</p>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            {/* Current projects */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <p className="eyebrow">§ III · Current Projects</p>
                <h2 className="font-display mt-5" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 500, color: "var(--navy)" }}>
                    Open projects this cycle.
                </h2>
                <p className="font-serif mt-6" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink)", maxWidth: 820 }}>
                    The following projects are currently available for enrollment. Spots are limited per project. Contact us to confirm availability and begin matching.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <article key={i} className="" style={{ background: "var(--paper)", border: "1px solid var(--line)" }} data-testid={`research-project-${i}`}>
                            <div className="overflow-hidden" style={{ aspectRatio: "16/9", background: "var(--mist)" }}>
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover" style={{ filter: "grayscale(30%) contrast(1.05)" }} />
                            </div>
                            <div className="p-7">
                                <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>{p.field}</p>
                                <h3 className="font-display mt-3" style={{ fontSize: 19, lineHeight: 1.3, color: "var(--navy)", fontWeight: 600 }}>{p.title}</h3>
                                <div className="my-5" style={{ width: 28, height: 1, background: "var(--orange)" }} />
                                <p className="font-serif" style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink)" }}>
                                    <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--steel)", marginRight: 8 }}>Mentor</span>
                                    {p.mentor}
                                </p>
                                <p className="font-serif mt-3" style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink)" }}>
                                    <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--steel)", marginRight: 8 }}>Time</span>
                                    {p.time}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <p className="font-serif italic mt-14" style={{ fontSize: "clamp(20px, 2vw, 28px)", lineHeight: 1.4, color: "var(--navy)", maxWidth: 820 }}>
                    A research paper is more than a credential. It's proof that your child can think at the level colleges are looking for.
                </p>
            </section>

            <PageCTA />
            <Footer />
        </main>
    );
}
