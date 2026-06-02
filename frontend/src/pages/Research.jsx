import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ClosingCTA from "@/components/ClosingCTA";
import { FlaskConical, LineChart, BookOpen, Landmark, User, Users } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const fields = [
    {
        Icon: FlaskConical,
        h: "STEM",
        items: [
            "Biology and Biomedical Sciences",
            "Computer Science and Artificial Intelligence",
            "Engineering and Robotics",
            "Mathematics and Applied Statistics",
            "Chemistry and Environmental Science",
            "Physics and Astronomy",
        ],
    },
    {
        Icon: LineChart,
        h: "Business",
        items: [
            "Finance and Economics",
            "Marketing and Consumer Behavior",
            "Entrepreneurship and Innovation",
            "Data Analytics and Business Intelligence",
        ],
    },
    {
        Icon: Landmark,
        h: "Social Sciences",
        items: [
            "Psychology and Behavioral Science",
            "Political Science and Public Policy",
            "Sociology and Education",
            "International Relations",
        ],
    },
    {
        Icon: BookOpen,
        h: "Humanities",
        items: [
            "History and Philosophy",
            "Literature and Cultural Studies",
            "Linguistics and Communication",
            "Art History and Visual Culture",
        ],
    },
];

const formats = [
    {
        Icon: User,
        h: "One-on-One Mentorship",
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
        Icon: Users,
        h: "Team Research Project",
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
        field: "Business — Finance and Economics / Digital Economy and Development Economics",
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
        field: "STEM — Computer Science and AI / Data Science",
        title: "From Linear Programming to ‘Learning Well and Computing Stable’ in Neural Networks",
        mentor: "David Woodruff, Carnegie Mellon University (Tenured Professor)",
        time: "Paper deadline 2026/06/26",
        img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    },
    {
        field: "STEM — Computer Science and AI / Operations Research",
        title: "The Secrets of Optimization and AI Algorithms",
        mentor: "David Woodruff, Carnegie Mellon University (Tenured Professor)",
        time: "Paper deadline 2026/06/26",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
        field: "STEM — Artificial Intelligence and Machine Learning",
        title: "Algorithms for Big Data",
        mentor: "David Woodruff, Carnegie Mellon University (Tenured Professor)",
        time: "Paper deadline 2026/06/26",
        img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    },
    {
        field: "STEM — AI and Operations Research",
        title: "Optimal Control and Planning via Dynamic Programming and Reinforcement Learning",
        mentor: "Peter Zhang, Carnegie Mellon University Professor",
        time: "Paper deadline 2026/07/10",
        img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    },
    {
        field: "STEM — Data Science / Computer Science",
        title: "Network Social Data Mining and User Behavior Pattern Analysis",
        mentor: "O.Y., Carnegie Mellon University (Tenured Professor, Electrical and Computer Engineering)",
        time: "Course starts 2026/07/12",
        img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
        field: "STEM — Data Science / Computer Science",
        title: "Data Science Classification Techniques and Algorithms",
        mentor: "O.Y., Carnegie Mellon University (Tenured Professor, Electrical and Computer Engineering)",
        time: "Course starts 2026/08/02",
        img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    },
    {
        field: "Humanities — Literature and Cultural Studies",
        title: "Identity, Memory, and Voice: Reading Contemporary Diaspora Literature",
        mentor: "M.K., Columbia University (Associate Professor, Comparative Literature)",
        time: "Paper deadline 2026/07/10",
        img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80",
    },
    {
        field: "Humanities — History and Philosophy",
        title: "Reason and Revolution: Tracing the Enlightenment's Legacy in Modern Democracies",
        mentor: "J.B., University of Chicago (Professor, Intellectual History)",
        time: "Paper deadline 2026/07/10",
        img: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80",
    },
    {
        field: "Humanities — Art History and Visual Culture",
        title: "From Patronage to Pixels: The Changing Economy of Art across Five Centuries",
        mentor: "E.R., NYU Institute of Fine Arts (Senior Lecturer)",
        time: "Paper deadline 2026/06/26",
        img: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=800&q=80",
    },
    {
        field: "Humanities — Linguistics and Communication",
        title: "Language as Power: Rhetoric, Framing, and Modern Political Discourse",
        mentor: "S.T., Georgetown University (Assistant Professor, Linguistics)",
        time: "Paper deadline 2026/07/10",
        img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80",
    },
];

export default function Research() {
    const tt = useT();
    const p = tt.pages.research;
    return (
        <main data-testid="page-research" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow={p.eyebrow}
                title={p.title}
                italicWord={p.italic}
                subtitle={p.subtitle}
                breadcrumb={[{ label: p.crumb }]}
                background="var(--paper)"
                stack
            />

            {/* Fields */}
            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <div className="flex items-center gap-3">
                    <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                    <p
                        className="font-mono"
                        style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                    >
                        Research Fields
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {fields.map((f, i) => (
                        <article
                            key={f.h}
                            className="p-7 flex flex-col"
                            style={{
                                background: "var(--paper)",
                                border: "1px solid var(--line)",
                            }}
                            data-testid={`research-field-${i}`}
                        >
                            <h3
                                className="font-display"
                                style={{ fontSize: 22, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em", lineHeight: 1.2 }}
                            >
                                {f.h}
                            </h3>
                            <div className="my-4" style={{ width: 28, height: 2, background: "var(--orange)" }} />
                            <ul className="space-y-2.5">
                                {f.items.map((it, j) => (
                                    <li key={j} className="flex items-start gap-2.5">
                                        <span
                                            aria-hidden="true"
                                            style={{
                                                marginTop: 9,
                                                width: 5,
                                                height: 5,
                                                background: "var(--navy)",
                                                flexShrink: 0,
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <p className="font-serif" style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}>
                                            {it}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            {/* Formats */}
            <section className="section-x" style={{ background: "var(--paper)", paddingTop: 64, paddingBottom: 24 }}>
                <div className="flex items-center gap-3">
                    <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                    <p
                        className="font-mono"
                        style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                    >
                        Program Formats
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
                        maxWidth: 880,
                    }}
                >
                    Two formats. <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>One standard.</em>
                </h2>
                <div className="mt-8" style={{ width: 56, height: 2, background: "var(--navy)" }} />
                <p className="font-serif mt-6" style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--ink)", maxWidth: 820 }}>
                    Two formats to fit different students and goals. Same standard across both: every student finishes with a publishable output and first-author credit.
                </p>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {formats.map((f, i) => {
                        const Icon = f.Icon;
                        return (
                            <article
                                key={f.h}
                                className="p-8 lg:p-10"
                                style={{
                                    background: "var(--mist)",
                                    border: "1px solid var(--line)",
                                }}
                                data-testid={`research-format-${i}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="flex items-center justify-center"
                                        style={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: "50%",
                                            background: "var(--orange)",
                                            color: "#fff",
                                            boxShadow: "0 4px 14px rgba(255,152,0,0.28)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Icon size={28} strokeWidth={1.75} />
                                    </div>
                                    <h3
                                        className="font-display"
                                        style={{ fontSize: "clamp(22px, 1.8vw, 26px)", lineHeight: 1.2, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}
                                    >
                                        {f.h}
                                    </h3>
                                </div>
                                <p className="font-serif italic mt-4" style={{ fontSize: 16, lineHeight: 1.55, color: "var(--steel)" }}>
                                    {f.sub}
                                </p>
                                <div className="my-5" style={{ width: 32, height: 2, background: "var(--orange)" }} />
                                <ul className="space-y-2.5">
                                    {f.items.map((it, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <span
                                                aria-hidden="true"
                                                style={{
                                                    marginTop: 9,
                                                    width: 5,
                                                    height: 5,
                                                    background: "var(--navy)",
                                                    flexShrink: 0,
                                                    borderRadius: "50%",
                                                }}
                                            />
                                            <p className="font-serif" style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--ink)" }}>
                                                {it}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* Current projects */}
            <section className="section-x" style={{ background: "var(--paper)", paddingTop: 24, paddingBottom: 88 }}>
                <div className="flex items-center gap-3">
                    <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                    <p
                        className="font-mono"
                        style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                    >
                        Current Projects
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
                        maxWidth: 880,
                    }}
                >
                    Open projects / <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>this cycle.</em>
                </h2>
                <div className="mt-8" style={{ width: 56, height: 2, background: "var(--navy)" }} />
                <p className="font-serif mt-6" style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--ink)", maxWidth: 820 }}>
                    The following projects are currently available for enrollment. Spots are limited per project. Contact us to confirm availability and begin matching.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <article key={i} className="" style={{ background: "var(--paper)", border: "1px solid var(--line)" }} data-testid={`research-project-${i}`}>
                            <div className="overflow-hidden" style={{ aspectRatio: "16/10", background: "var(--mist)" }}>
                                <img src={p.img} alt={p.title} className="w-full h-full object-cover" style={{ filter: "grayscale(30%) contrast(1.05)" }} />
                            </div>
                            <div className="p-6">
                                <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>{p.field}</p>
                                <h3 className="font-display mt-3" style={{ fontSize: 18, lineHeight: 1.3, color: "var(--navy)", fontWeight: 600 }}>{p.title}</h3>
                                <div className="my-4" style={{ width: 28, height: 1, background: "var(--orange)" }} />
                                <p className="font-serif" style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)" }}>
                                    <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--steel)", marginRight: 8 }}>Mentor</span>
                                    {p.mentor}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <ClosingCTA />
            <Footer />
        </main>
    );
}
