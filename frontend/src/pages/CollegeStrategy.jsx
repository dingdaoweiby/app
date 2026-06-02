import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ClosingCTA from "@/components/ClosingCTA";
import { Compass, ShieldCheck, CalendarRange, HeartHandshake, GraduationCap, Users, Award } from "lucide-react";
import { useT, useLang } from "@/i18n/LanguageContext";

const SPECIALISTS = {
    en: [
        { Icon: Compass,        role: "Strategic Counselor",  sub: "Direction and long-term planning", bullets: [
            "Builds the Comprehensive Student Evaluation",
            "Sets Ivy / Top 15 targets and defines the ideal school profile",
            "Designs the College Roadmap across Grades 9–12",
            "Recalibrates the strategy every year as your child grows",
        ]},
        { Icon: ShieldCheck,    role: "Admissions Officer",   sub: "Quality and institutional perspective", bullets: [
            "Former admissions officer from a top-tier university",
            "Reviews every deliverable with a critical institutional lens",
            "Pressure-tests the narrative, school list, and application materials",
            "Catches weaknesses long before submission",
        ]},
        { Icon: CalendarRange,  role: "Resource Manager",     sub: "Execution and opportunities", bullets: [
            "Sources research placements, summer programs, and competitions",
            "Manages AP and SAT timelines, scholarships, and awards calendars",
            "Tracks every milestone across three years",
            "Turns strategy into concrete, scheduled action",
        ]},
        { Icon: HeartHandshake, role: "Family Coach",         sub: "Mental health and family dynamics", bullets: [
            "Monitors teen mental health throughout high-pressure periods",
            "Supports parent-child communication and expectation alignment",
            "Helps the family navigate stress without damaging relationships",
            "ICF-certified — a role no other consulting practice offers",
        ]},
    ],
    zh: [
        { Icon: Compass,        role: "战略顾问",  sub: "方向与长期规划", bullets: [
            "完成《综合学生评估》",
            "设定常春藤 / Top 15 目标，并定义理想学校画像",
            "规划 9–12 年级的《升学路线图》",
            "随孩子成长每年动态调整策略",
        ]},
        { Icon: ShieldCheck,    role: "前招生官",  sub: "质量与院校视角", bullets: [
            "来自顶尖大学的前任招生官",
            "以院校审阅的视角审查每份产出",
            "对叙事、选校名单与申请材料进行压力测试",
            "在递交之前就发现弱点",
        ]},
        { Icon: CalendarRange,  role: "资源经理",  sub: "执行与机会", bullets: [
            "对接科研实习、夏校与竞赛资源",
            "管理 AP 与 SAT 时间线、奖学金与奖项日历",
            "在三年中追踪每一个里程碑",
            "把战略变成可执行、有日程的行动",
        ]},
        { Icon: HeartHandshake, role: "家庭教练",  sub: "心理健康与家庭关系", bullets: [
            "在高压期监测青少年心理健康",
            "协助亲子沟通与期望对齐",
            "帮助家庭穿越压力期而不损伤关系",
            "ICF 认证 —— 行业内独一份的角色",
        ]},
    ],
};

const DIMENSIONS = {
    en: [
        { title: "Comprehensive Student Evaluation", tagline: "The foundation. Before any planning begins, we map who your child actually is.", items: [
            "Personality, learning style and executive function assessment",
            "Gallup StrengthsFinder — full 34-dimension talent profile",
            "Academic interest mapping and potential major recommendations",
            "Career trajectory — a 20-year directional read",
            "Student profile: strengths, gaps, and risk points",
            "Family education style assessment — expectations, involvement, alignment",
        ], deliverable: "Comprehensive Student Report" },
        { title: "College Strategy Planning", tagline: "Where to aim — and why. A living strategy, not a static list.", items: [
            "Dream schools (Ivy League / Top 15) target setting — data-grounded, no false promises",
            "Ideal school profile: academic fit, culture, activities, location",
            "Reach / Match / Safety portfolio — balanced, risk-managed",
            "Major–school alignment logic",
            "Annual recalibration — the list evolves as your child grows",
        ], deliverable: "College Selection Strategy" },
        { title: "College Roadmap (Grades 9–12)", tagline: "The operational plan. Five parallel tracks, running simultaneously across three years.", items: [
            "GPA targets, AP sequencing, SAT milestones and testing timeline",
            "Retake planning and score optimization",
            "Clubs: participate → contribute → lead",
            "Sports: recreational vs. recruit track",
            "Arts: portfolio development and competitions",
            "Volunteering: long-term, impact-driven projects",
            "Pre-college courses, online learning, and summer programs",
            "Research: independent or mentor-led, with publishable output",
            "Projects: engineering, business, or social impact",
            "Competitions: AMC, ISEF, DECA, and equivalents",
            "Awards and honors: National / State / School pipeline with hit-rate strategy",
        ], deliverable: "College Roadmap with milestone tracking" },
        { title: "Progress Report + Regular Follow-Up Meetings", tagline: "The accountability structure. Strategy means nothing without execution.", groups: [
            { h: "1) Core Academics", items: ["Course selection", "Academic criteria — GPA and rigor balance", "Standardized tests — SAT / AP planning"] },
            { h: "2) Extracurricular Activity", items: ["Required activities — matched to target direction", "Optional activities — interest exploration", "Annual activity goal: Explore → Develop → Lead", "Activity depth design: participate → deepen → impact"] },
            { h: "3) Academics Theme and Achievement", items: ["Research / Projects — output-driven", "Summer programs", "Specialties — Art / Athlete / Talent"] },
            { h: "4) Personal Growth and Family Relationships", items: ["Basic skills: writing, public speaking, STEM fluency", "Interest exploration: videos, seminars, external exposure", "Career path — aligned with the evaluation report", "Family relationships", "Teenagers' mental health"] },
        ], deliverable: "Annual Plan + Monthly Progress Report" },
    ],
    zh: [
        { title: "综合学生评估", tagline: "一切的基础。在任何规划开始之前，我们先看清孩子真正是谁。", items: [
            "性格、学习风格与执行功能评估",
            "Gallup StrengthsFinder —— 34 维度天赋画像",
            "学术兴趣地图与潜在专业建议",
            "职业轨迹 —— 一份未来 20 年的方向解读",
            "学生画像：优势、短板与风险点",
            "家庭教育风格评估 —— 期望、参与度与一致性",
        ], deliverable: "综合学生评估报告" },
        { title: "升学战略规划", tagline: "瞄准哪里 —— 以及为什么。一份动态战略，而不是一张静态名单。", items: [
            "Dream 校（常春藤 / Top 15）目标设定 —— 基于数据，绝不空许承诺",
            "理想学校画像：学术契合、文化、活动、地理位置",
            "Reach / Match / Safety 组合 —— 均衡且管控风险",
            "专业与学校的对齐逻辑",
            "每年动态校准 —— 名单随孩子成长演化",
        ], deliverable: "升学选校战略" },
        { title: "升学路线图（9–12 年级）", tagline: "执行层面的蓝图。五条并行轨道，三年同时推进。", items: [
            "GPA 目标、AP 排序、SAT 节点与考试时间线",
            "重考规划与分数优化",
            "社团：参与 → 贡献 → 领导",
            "体育：兴趣型 vs Recruit 路径",
            "艺术：作品集与比赛",
            "志愿服务：长期、有影响力的项目",
            "Pre-college 课程、在线学习与夏校",
            "科研：独立或导师带领，产出可发表的成果",
            "项目：工程、商业或社会影响",
            "竞赛：AMC、ISEF、DECA 等",
            "奖项与荣誉：国家 / 州 / 校级路径与命中率策略",
        ], deliverable: "带里程碑追踪的升学路线图" },
        { title: "进度报告 + 定期回访", tagline: "问责结构。没有执行，战略毫无意义。", groups: [
            { h: "1) 核心学术",          items: ["课程选择", "学术标准 —— GPA 与课程难度的平衡", "标化考试 —— SAT / AP 规划"] },
            { h: "2) 课外活动",          items: ["必选活动 —— 与目标方向匹配", "可选活动 —— 兴趣探索", "年度活动目标：探索 → 发展 → 领导", "活动深度设计：参与 → 深耕 → 影响"] },
            { h: "3) 学术主题与成果",    items: ["科研 / 项目 —— 以成果为导向", "夏校", "特长 —— 艺术 / 体育 / 才艺"] },
            { h: "4) 个人成长与家庭关系", items: ["基础能力：写作、公开表达、STEM 素养", "兴趣探索：观看视频、研讨会、外部接触", "职业方向 —— 与评估报告对齐", "家庭关系", "青少年心理健康"] },
        ], deliverable: "年度计划 + 月度进度报告" },
    ],
};

const PARTNERSHIP = {
    en: [
        { Icon: GraduationCap, label: "Student Effort",      body: "Curiosity, discipline, and the willingness to show up — the most important ingredient, and the only one we can't substitute." },
        { Icon: Users,         label: "Parent Engagement",   body: "Calibrated expectations, steady support, and an honest dialogue at home — without which strategy quickly unravels." },
        { Icon: Award,         label: "Consulting Expertise", body: "Coordinated specialists, institutional insight, and an operating system that turns intention into outcomes." },
    ],
    zh: [
        { Icon: GraduationCap, label: "学生的努力",   body: "好奇、纪律与每天到位的意愿 —— 最重要的一环，也是我们无法替代的那一环。" },
        { Icon: Users,         label: "家长的参与",   body: "校准的期望、稳定的支持、家中坦诚的对话 —— 没有这些，再好的战略也会迅速失效。" },
        { Icon: Award,         label: "我们的专业",   body: "协同的专家团队、院校层面的洞察，以及把意图变为结果的运营系统。" },
    ],
};

const LABELS = {
    en: {
        beliefEyebrow: "Our Belief",
        beliefAuth: "Authentic Growth",
        beliefQuoteLine1: "\u201CMotivation cannot be imposed. It must be awakened.",
        beliefQuoteLine2: "We build students for themselves, not simply for an application.\u201D",
        beliefBody1: "Through challenge, guidance, and genuine belief in each child, we cultivate what no consultant can manufacture: discipline that comes from within, a sense of direction that belongs to them, and the quiet confidence that doesn't need to perform to be seen.",
        beliefBody2: "By the time application season arrives, nothing needs to be forced. What colleges see is the result of years of authentic growth — and what your child carries forward is far more valuable than any acceptance letter.",
        specialistsEyebrow: "Who Serves Your Family",
        specialistsTitlePre: "for one student",
        specialistsTitlePost: "/ one family.",
        specialistsTitleItalic: "Four experts",
        specialistsBody: "Every decision passes through all four. Your child is never handed off.",
        specialistsFootnote: "Four specialists. One coordinated team. A combined perspective no single consultant can match — and a level of care your child will feel for three years.",
        workflowEyebrow: "How We Help You",
        workflowTitle: "Our four-part workflow,",
        workflowItalic: "built for the long run.",
        workflowSub: "A coordinated practice — assessment, strategy, roadmap, and accountability — repeated and refined year after year, from Grade 9 through application season.",
        deliverable: "→ Deliverable",
        partnershipEyebrow: "Our Partnership",
        partnershipTitle: "Three forces,",
        partnershipItalic: "one shared mission.",
        partnershipSub: "Outcomes don't come from any single party. They come from the way three groups work together — month after month, year after year.",
    },
    zh: {
        beliefEyebrow: "我们的信念",
        beliefAuth: "真实的成长",
        beliefQuoteLine1: "\u201C动力无法被强加。它必须被唤醒。",
        beliefQuoteLine2: "我们培养的是孩子本身，而不仅仅是一份申请。\u201D",
        beliefBody1: "通过挑战、引导以及对每一个孩子真实的相信，我们培养出顾问公司无法制造的东西：发自内心的自律、属于他自己的方向感，以及不靠表演也能被看见的那种安静的自信。",
        beliefBody2: "当申请季到来时，没有什么需要硬撑。大学看到的，是这几年真实成长的结果——而孩子真正带走的，比任何一封录取信都更有价值。",
        specialistsEyebrow: "谁在服务你的家庭",
        specialistsTitlePre: "服务一个学生",
        specialistsTitlePost: "/ 一个家庭。",
        specialistsTitleItalic: "四位专家",
        specialistsBody: "每一个决定都经过四位专家共同把关。你的孩子从未被“转手”过。",
        specialistsFootnote: "四位专家 · 一个协同的团队。单一顾问无法企及的组合视角 —— 以及孩子能在三年里持续感受到的关怀。",
        workflowEyebrow: "我们如何帮助你",
        workflowTitle: "四段式工作流，",
        workflowItalic: "为长期而构建。",
        workflowSub: "一个协同的实践 —— 评估、战略、路线图与问责 —— 年复一年地重复与精炼，从九年级直到申请季。",
        deliverable: "→ 产出物",
        partnershipEyebrow: "我们的合作",
        partnershipTitle: "三股力量，",
        partnershipItalic: "一个共同的使命。",
        partnershipSub: "成果不来自任何一方。它来自三方共同的合作 —— 月复一月，年复一年。",
    },
};

export default function CollegeStrategy() {
    const t = useT();
    const { lang } = useLang();
    const p = t.pages.strategy;
    const specialists = SPECIALISTS[lang];
    const dimensions = DIMENSIONS[lang];
    const partnership = PARTNERSHIP[lang];
    const L = LABELS[lang];

    return (
        <main data-testid="page-college-strategy" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow={p.eyebrow}
                title={p.title}
                italicWord={p.italic}
                subtitle={p.subtitle}
                breadcrumb={[{ label: p.crumbCollege, to: "/college/strategic-planning" }, { label: p.crumbSelf }]}
                background="var(--paper)"
                stack
            />

            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <div className="grid grid-cols-12 gap-x-12 gap-y-10 items-start">
                    <aside className="col-span-12 lg:col-span-4">
                        <div className="overflow-hidden" style={{ aspectRatio: "1/1", border: "1px solid var(--line)", maxWidth: 360 }}>
                            <img
                                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=85&auto=format&fit=crop"
                                alt="Open book on a quiet desk"
                                className="w-full h-full object-cover"
                                style={{ filter: "grayscale(40%) contrast(1.05)" }}
                            />
                        </div>
                        <p className="eyebrow mt-3">{L.beliefAuth}</p>
                    </aside>

                    <div className="col-span-12 lg:col-span-8 lg:pl-2">
                        <div className="flex items-center gap-3">
                            <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                            <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                {L.beliefEyebrow}
                            </p>
                        </div>

                        <p className="font-display mt-6" style={{ fontSize: "clamp(20px, 1.7vw, 26px)", lineHeight: 1.4, color: "var(--orange)", fontWeight: 500, fontStyle: "italic" }}>
                            {L.beliefQuoteLine1}
                            <br />
                            {L.beliefQuoteLine2}
                        </p>

                        <div className="mt-7" style={{ width: 36, height: 2, background: "var(--navy)" }} />

                        <p className="font-serif mt-7" style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--ink)" }}>{L.beliefBody1}</p>
                        <p className="font-serif mt-5" style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--ink)" }}>{L.beliefBody2}</p>
                    </div>
                </div>
            </section>

            {/* Specialists */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-3">
                        <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                        <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                            {L.specialistsEyebrow}
                        </p>
                    </div>
                    <h2 className="font-display mt-5" style={{ fontSize: "clamp(32px, 3vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.01em", fontWeight: 500, color: "var(--navy)", maxWidth: 880 }}>
                        <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>{L.specialistsTitleItalic}</em>{" "}
                        {L.specialistsTitlePre} <span style={{ color: "var(--navy)" }}>{L.specialistsTitlePost}</span>
                    </h2>
                    <p className="font-serif mt-5" style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--ink)", maxWidth: 720 }}>{L.specialistsBody}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {specialists.map((s, i) => {
                        const Icon = s.Icon;
                        const palettes = [
                            { bg: "var(--mist)",      accent: "var(--orange)" },
                            { bg: "var(--mist-deep)", accent: "var(--orange)" },
                            { bg: "var(--mist-deep)", accent: "var(--orange)" },
                            { bg: "var(--mist)",      accent: "var(--orange)" },
                        ];
                        const palette = palettes[i % palettes.length];
                        return (
                            <article key={i} className="p-7 lg:p-8 relative overflow-hidden lift" style={{ background: palette.bg, border: "1px solid var(--line)" }} data-testid={`specialist-${i}`}>
                                <div aria-hidden="true" style={{ position: "absolute", right: -36, top: -36, width: 120, height: 120, borderRadius: "50%", background: "var(--paper)", opacity: 0.6 }} />
                                <div className="relative">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center justify-center pulse-circle" style={{ width: 52, height: 52, borderRadius: "50%", background: palette.accent, color: "#fff", boxShadow: "0 4px 14px rgba(255,152,0,0.25)", flexShrink: 0 }}>
                                            <Icon size={24} strokeWidth={1.75} />
                                        </div>
                                        <h3 className="font-display" style={{ fontSize: 22, lineHeight: 1.2, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}>{s.role}</h3>
                                    </div>
                                    <p className="font-mono mt-3" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>{s.sub}</p>
                                    <div className="my-4" style={{ width: 28, height: 2, background: "var(--orange)" }} />
                                    <ul className="space-y-2.5">
                                        {s.bullets.map((b, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <span aria-hidden="true" style={{ marginTop: 8, width: 5, height: 5, background: "var(--navy)", flexShrink: 0, borderRadius: "50%" }} />
                                                <p className="font-serif" style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink)" }}>{b}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <p className="font-serif italic mt-10" style={{ fontSize: 18, lineHeight: 1.5, color: "var(--navy)", maxWidth: 900 }}>
                    {L.specialistsFootnote}
                </p>
            </section>

            {/* How We Help You */}
            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <SectionHeading
                    eyebrow={L.workflowEyebrow}
                    title={L.workflowTitle}
                    italic={L.workflowItalic}
                    subtitle={L.workflowSub}
                    nowrap
                />

                <ol className="mt-12" style={{ borderTop: "2px solid var(--navy)" }}>
                    {dimensions.map((d, i) => (
                        <li key={i} className="py-8" style={{ borderBottom: "1px solid var(--line)" }} data-testid={`dimension-${i}`}>
                            <div className="grid grid-cols-12 gap-x-8 gap-y-4">
                                <div className="col-span-12 lg:col-span-4">
                                    <span className="font-display" style={{ fontSize: 40, lineHeight: 0.9, color: "var(--orange)", fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                                    <h3 className="font-display mt-3" style={{ fontSize: "clamp(20px, 1.6vw, 24px)", lineHeight: 1.2, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}>{d.title}</h3>
                                    <p className="font-serif italic mt-3" style={{ fontSize: 15, lineHeight: 1.5, color: "var(--steel)" }}>{d.tagline}</p>
                                </div>
                                <div className="col-span-12 lg:col-span-8">
                                    {d.items && (
                                        <ul className="space-y-1.5">
                                            {d.items.map((it, j) => (
                                                <li key={j} className="flex items-start gap-3">
                                                    <span className="font-mono" style={{ fontSize: 10, color: "var(--orange)", marginTop: 6 }}>▸</span>
                                                    <p className="font-serif" style={{ fontSize: 15, lineHeight: 1.5, color: "var(--ink)" }}>{it}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {d.groups && (
                                        <div className="space-y-4">
                                            {d.groups.map((g, j) => (
                                                <div key={j}>
                                                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>{g.h}</p>
                                                    <ul className="mt-1.5 space-y-1.5">
                                                        {g.items.map((it, k) => (
                                                            <li key={k} className="flex items-start gap-3">
                                                                <span className="font-mono" style={{ fontSize: 10, color: "var(--orange)", marginTop: 6 }}>▸</span>
                                                                <p className="font-serif" style={{ fontSize: 15, lineHeight: 1.5, color: "var(--ink)" }}>{it}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <div className="mt-4 pt-3" style={{ borderTop: "1px solid var(--line)" }}>
                                        <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}>{L.deliverable}</p>
                                        <p className="font-display mt-1" style={{ fontSize: 16, color: "var(--navy)", fontWeight: 600 }}>{d.deliverable}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Our Partnership */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <SectionHeading
                    eyebrow={L.partnershipEyebrow}
                    title={L.partnershipTitle}
                    italic={L.partnershipItalic}
                    subtitle={L.partnershipSub}
                />

                <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-12" style={{ borderTop: "2px solid var(--navy)", paddingTop: 48 }}>
                    {partnership.map((pp, i) => {
                        const Icon = pp.Icon;
                        return (
                            <div key={i} data-testid={`partnership-${i}`}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex items-center justify-center" style={{ width: 64, height: 64, background: "var(--orange)", color: "#fff", borderRadius: "50%", boxShadow: "0 4px 14px rgba(255,152,0,0.28)" }}>
                                        <Icon size={30} strokeWidth={1.75} />
                                    </div>
                                    <p className="font-mono mt-5" style={{ fontSize: 14, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--navy)", fontWeight: 600 }}>
                                        {pp.label}
                                    </p>
                                    <div className="mt-4" style={{ width: 32, height: 2, background: "var(--orange)" }} />
                                </div>
                                <p className="font-serif mt-6" style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--ink)", textAlign: "center", maxWidth: 360, margin: "24px auto 0" }}>
                                    {pp.body}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <ClosingCTA />
            <Footer />
        </main>
    );
}
