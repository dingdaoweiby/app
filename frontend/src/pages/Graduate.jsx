import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ClosingCTA from "@/components/ClosingCTA";
import { Stethoscope, FlaskConical, Briefcase, Compass } from "lucide-react";
import { useT, useLang } from "@/i18n/LanguageContext";

const TRACKS = {
    en: [
        {
            Icon: Stethoscope,
            label: "Medical School — MD / DO",
            intro: "Strategic advising for pre-med students applying to US allopathic and osteopathic programs — from academic planning through primary applications and interviews.",
            items: [
                "Course and activity planning aligned with med school expectations",
                "MCAT timing, research and clinical exposure strategy",
                "Primary and secondary application narrative development",
                "Interview preparation and school list optimization",
            ],
        },
        {
            Icon: FlaskConical,
            label: "Doctoral Programs — Ph.D.",
            intro: "Research-fit analysis, statement of purpose development, and outreach strategy for competitive PhD programs in STEM, social sciences, and humanities.",
            items: [
                "Identifying programs and faculty aligned with your research interests",
                "SOP and research statement structure, drafting, and revision",
                "CV, publications, and recommendation narrative coordination",
                "Interview and campus visit preparation",
            ],
        },
        {
            Icon: Briefcase,
            label: "Business School — MBA",
            intro: "Story-first positioning for top business school candidates — essays, recommendations, and interview prep grounded in your leadership trajectory.",
            items: [
                "Career goals clarity and program fit articulation",
                "Resume and leadership story development",
                "Essay brainstorming, structure, and multi-round editing",
                "Recommendation strategy and mock interviews",
            ],
        },
    ],
    zh: [
        {
            Icon: Stethoscope,
            label: "医学院 — MD / DO",
            intro: "为申请美国 MD 与 DO 项目的医学预科学生提供战略指导——从学术规划到主申、二申与面试。",
            items: [
                "贴合医学院期望的课程与活动规划",
                "MCAT 时间规划、科研与临床实习路径",
                "主申与二申文书的叙事建构",
                "面试辅导与选校名单优化",
            ],
        },
        {
            Icon: FlaskConical,
            label: "博士项目 — Ph.D.",
            intro: "面向 STEM、社会科学与人文领域顶尖博士项目的研究契合度分析、研究计划撰写与套磁策略。",
            items: [
                "识别与研究兴趣相符的项目与导师",
                "SOP 与研究计划的结构、起草与修改",
                "CV、论文发表与推荐信叙事协调",
                "面试与校访准备",
            ],
        },
        {
            Icon: Briefcase,
            label: "商学院 — MBA",
            intro: "以叙事为先的顶级商学院申请定位——文书、推荐信与面试辅导，扎根于你的领导力轨迹。",
            items: [
                "职业目标清晰化与项目契合度阐释",
                "Resume 与领导力故事构建",
                "文书头脑风暴、结构搭建与多轮润色",
                "推荐人策略与模拟面试",
            ],
        },
    ],
};

const SELF_DIRECTED = {
    en: {
        Icon: Compass,
        label: "Self-Directed Applicants (DIY Support)",
        intro: "On-demand coaching for self-directed graduate applicants who want expert feedback at key decision points — without committing to a full-service package.",
        items: [
            "Targeted reviews of drafts — SOP, CV, or essay supplements",
            "School list sanity checks and application timeline audits",
            "Hour-based or milestone-based engagements",
            "Ideal for candidates managing most of the process independently",
        ],
    },
    zh: {
        Icon: Compass,
        label: "自驱型申请人（DIY 支持）",
        intro: "为愿意自行掌控大部分流程、但希望在关键节点获得专家反馈的申请人提供按需辅导——无需承诺全程包。",
        items: [
            "针对性审阅文书草稿 —— SOP、CV 或补充文书",
            "选校名单复核与申请时间线审查",
            "按小时或按里程碑计费",
            "适合大部分流程自行推进的申请人",
        ],
    },
};

const PLACEMENTS = {
    en: [
        { region: "Medical School",  programs: ["Harvard Medical School", "Johns Hopkins SOM", "UCSF", "Stanford SOM", "Columbia VP&S", "Yale SOM", "Perelman / Penn", "Weill Cornell", "NYU Grossman", "Mount Sinai Icahn"] },
        { region: "Doctoral Programs", programs: ["MIT EECS PhD", "Stanford Bioengineering", "Harvard GSAS", "Princeton Politics", "Yale Economics", "Caltech Physics", "Berkeley Chemistry", "Cornell CS", "Chicago Sociology"] },
        { region: "MBA Programs",    programs: ["Harvard Business School", "Stanford GSB", "Wharton", "Chicago Booth", "MIT Sloan", "Kellogg", "Columbia Business", "Yale SOM", "Tuck", "Haas"] },
    ],
    zh: [
        { region: "医学院",   programs: ["Harvard Medical School", "Johns Hopkins SOM", "UCSF", "Stanford SOM", "Columbia VP&S", "Yale SOM", "Perelman / Penn", "Weill Cornell", "NYU Grossman", "Mount Sinai Icahn"] },
        { region: "博士项目", programs: ["MIT EECS PhD", "Stanford Bioengineering", "Harvard GSAS", "Princeton Politics", "Yale Economics", "Caltech Physics", "Berkeley Chemistry", "Cornell CS", "Chicago Sociology"] },
        { region: "MBA 项目", programs: ["Harvard Business School", "Stanford GSB", "Wharton", "Chicago Booth", "MIT Sloan", "Kellogg", "Columbia Business", "Yale SOM", "Tuck", "Haas"] },
    ],
};

const PLACEMENTS_HEADING = {
    en: { eyebrow: "Where Our Students Go", titlePre: "Graduate programs where our applicants have been", titleItalic: "admitted." },
    zh: { eyebrow: "他们去了哪里",           titlePre: "我们的申请人被",                                       titleItalic: "录取的研究生项目。" },
};

function TrackCard({ Icon, label, intro, items, fullWidth = false, testid }) {
    return (
        <article
            className="p-7 lg:p-8"
            style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
            }}
            data-testid={testid}
        >
            <div className={`flex items-center gap-4 ${fullWidth ? "justify-center" : ""}`}>
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
                    style={{
                        fontSize: 19,
                        lineHeight: 1.2,
                        color: "var(--navy)",
                        fontWeight: 600,
                        letterSpacing: "-0.005em",
                    }}
                >
                    {label}
                </h3>
            </div>
            <div className={`my-4 ${fullWidth ? "mx-auto" : ""}`} style={{ width: 32, height: 2, background: "var(--orange)" }} />
            <p className="font-serif" style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--ink)", textAlign: fullWidth ? "center" : "left" }}>
                {intro}
            </p>
            <ul className={`mt-5 ${fullWidth ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5" : "space-y-2.5"}`}>
                {items.map((it, j) => (
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
}

export default function Graduate() {
    const tt = useT();
    const { lang } = useLang();
    const p = tt.pages.graduate;
    const tracks = TRACKS[lang];
    const selfDirected = SELF_DIRECTED[lang];
    const placements = PLACEMENTS[lang];
    const ph = PLACEMENTS_HEADING[lang];

    return (
        <main data-testid="page-graduate" className="min-h-screen">
            <Nav />

            <PageHeader
                eyebrow={p.eyebrow}
                title={p.title}
                italicWord={p.italic}
                breadcrumb={[{ label: p.crumb }]}
                background="var(--paper)"
                nowrap
            />

            {/* TRACKS */}
            <section className="section-x" style={{ background: "var(--mist)", paddingTop: 56, paddingBottom: 64 }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tracks.map((t, i) => (
                        <TrackCard key={i} {...t} testid={`graduate-track-${i}`} />
                    ))}
                </div>

                <div className="mt-6">
                    <TrackCard {...selfDirected} fullWidth testid="graduate-track-self-directed" />
                </div>
            </section>

            {/* PLACEMENTS */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <div className="flex items-center gap-3 mb-6">
                    <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                    <p
                        className="font-mono"
                        style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                    >
                        {ph.eyebrow}
                    </p>
                </div>
                <h2
                    className="font-display"
                    style={{
                        fontSize: "clamp(28px, 2.8vw, 40px)",
                        lineHeight: 1.15,
                        letterSpacing: "-0.01em",
                        fontWeight: 500,
                        color: "var(--navy)",
                    }}
                >
                    {ph.titlePre}{" "}
                    <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>{ph.titleItalic}</em>
                </h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--line)", border: "1px solid var(--line)" }}>
                    {placements.map((g, i) => (
                        <article
                            key={i}
                            className="p-7 lg:p-8"
                            style={{ background: "var(--mist)" }}
                            data-testid={`graduate-placement-${i}`}
                        >
                            <div className="flex items-center gap-3">
                                <div style={{ width: 24, height: 1, background: "var(--orange)" }} />
                                <p
                                    className="font-mono"
                                    style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                                >
                                    {g.region}
                                </p>
                            </div>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {g.programs.map((s) => (
                                    <span
                                        key={s}
                                        className="font-display"
                                        style={{
                                            display: "inline-block",
                                            padding: "8px 12px",
                                            background: "var(--paper)",
                                            border: "1px solid var(--line)",
                                            color: "var(--navy)",
                                            fontSize: 13.5,
                                            lineHeight: 1.2,
                                            fontWeight: 500,
                                            letterSpacing: "-0.005em",
                                        }}
                                    >
                                        {s}
                                    </span>
                                ))}
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
