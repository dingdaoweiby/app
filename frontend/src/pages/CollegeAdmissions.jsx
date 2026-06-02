import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ClosingCTA from "@/components/ClosingCTA";
import SchoolLogo from "@/components/SchoolLogo";
import { useT, useLang } from "@/i18n/LanguageContext";

const STAGES = {
    en: [
        { h: "Student Assessment and Strategy", items: [
            "Holistic student evaluation — academic profile, interests, strengths, and long-term goals",
            "Individualized college counseling plan aligned with evolving interests and aspirations",
            "Strategic positioning — identifying and developing the applicant's most compelling narrative",
            "Major and career direction advising",
        ]},
        { h: "School Selection", items: [
            "Balanced college list development — reach, match, and safety schools",
            "School-specific research: culture, program strengths, admissions preferences",
            "Living list — recalibrated as the student's profile develops",
            "Up to 15 school applications (UC system counted as one)",
        ]},
        { h: "Application Execution", items: [
            "Step-by-step guidance with clear timelines, milestones, and accountability",
            "Direct assistance with Common App, UC Application, Coalition, and school-specific portals",
            "Activities list and resume development — formatting, editing, and refinement",
            "Transcript and official document preparation, review, and submission guidance",
            "SAT/ACT/AP score submission strategy and coordination",
        ]},
        { h: "Essays", items: [
            "Personal statement coaching — brainstorming, authentic voice, storytelling, and personal insight",
            "Multi-round, in-depth revision — structural editing, narrative refinement, and line-by-line feedback",
            "Supplemental essays tailored to each school's specific prompts and expectations",
            "Final polishing, proofreading, and submission readiness for every application",
        ]},
        { h: "Submission Review and Financial Aid Support", items: [
            "Comprehensive final review of every essay, form, and supporting document",
            "Coordinated submission across Common App, UC, Coalition, and school portals",
            "FAFSA and CSS Profile preparation and submission guidance",
            "Scholarship identification — institutional, merit-based, and external awards",
            "Financial aid appeal letters and net-cost comparison support",
        ]},
        { h: "Interview Preparation", items: [
            "Mock interviews with targeted, school-specific feedback",
            "Storytelling, presence, and composure coaching",
            "Alumni and admissions-officer interview formats",
            "Wardrobe, body language, and on-camera readiness for virtual interviews",
        ]},
        { h: "Decision Support", items: [
            "Application status tracking and follow-up with colleges",
            "Decision release support — reviewing offers, waitlists, and deferrals",
            "Waitlist strategy — letters of continued interest and timing",
            "Enrollment decision advising — comparing offers and final school selection",
            "Pre-matriculation guidance — housing, course planning, and transition support",
        ]},
    ],
    zh: [
        { h: "学生评估与战略", items: [
            "全人评估 —— 学术档案、兴趣、优势与长期目标",
            "随兴趣与志向变化而动态调整的个性化升学方案",
            "战略定位 —— 找到并塑造申请人最有说服力的叙事主线",
            "专业方向与职业发展建议",
        ]},
        { h: "选校", items: [
            "均衡的选校名单 —— 冲刺、匹配、保底",
            "针对学校的深度研究：文化、专业强项、录取偏好",
            "动态名单 —— 随学生成长不断调整",
            "最多 15 所学校（UC 系统计为一所）",
        ]},
        { h: "申请执行", items: [
            "节奏清晰、里程碑明确、责任到人的逐步推进",
            "直接协助 Common App、UC、Coalition 以及各校独立申请系统",
            "活动列表与简历 —— 排版、修改与精炼",
            "成绩单与官方材料的准备、审阅与递送指导",
            "SAT / ACT / AP 成绩递送策略与协调",
        ]},
        { h: "文书", items: [
            "主文书辅导 —— 头脑风暴、真实声音、叙事建构、个人洞察",
            "多轮深度修改 —— 结构性编辑、叙事打磨、逐句反馈",
            "针对每所学校具体题目的补充文书",
            "每份申请的最终润色、校对与提交前检查",
        ]},
        { h: "递交审阅与奖助金支持", items: [
            "对每篇文书、每张表格、每份材料的最终全面审阅",
            "在 Common App、UC、Coalition 及各校系统的协同递交",
            "FAFSA 与 CSS Profile 的准备与递交指导",
            "奖学金识别 —— 校内、Merit 与校外奖项",
            "奖助金申诉信与净成本对比支持",
        ]},
        { h: "面试准备", items: [
            "模拟面试，针对每所学校给出反馈",
            "叙事、台风与从容感的辅导",
            "校友与招生官两种面试形式",
            "线上面试的着装、肢体语言与镜头感",
        ]},
        { h: "录取决策支持", items: [
            "申请状态追踪与对学校的跟进",
            "放榜支持 —— 解读 Offer、Waitlist 与 Defer",
            "Waitlist 策略 —— 持续兴趣信与时机",
            "入读决策建议 —— Offer 对比与最终选校",
            "入学前指导 —— 住宿、选课与过渡",
        ]},
    ],
};

const STORIES = {
    en: [
        { name: "L.W.", school: "Harvard University", domain: "harvard.edu", tag: "Ivy League · ED",
          body: "A first-generation applicant from a competitive public high school whose teachers described her as 'quietly extraordinary.' Her academic record was elite but her activity list looked similar to thousands of other strong candidates. We helped her surface the through-line connecting her interest in computational linguistics, her side project translating literary fiction, and her work with refugee families. The application read like a thesis statement on who she was becoming, not a portfolio of accomplishments. Admitted ED." },
        { name: "K.N.", school: "MIT", domain: "mit.edu", tag: "Elite Technical · EA",
          body: "An IMO-level mathematician whose parents were convinced he needed more 'leadership' to stand out. We made the opposite case — depth, not breadth — and rebuilt the essay strategy around his original research with a university faculty mentor. The MIT application showed admissions exactly what they hoped to see: a thinker already operating like one of their PhD students. Admitted EA." },
        { name: "S.H.", school: "Brown University — PLME", domain: "brown.edu", tag: "BS / MD",
          body: "A pre-med applicant to one of the most selective combined BS/MD programs in the country. She had strong stats but the essays from her previous consultant read like a checklist of pre-med clichés. We started over — surfaced the family story, the hospital volunteering moment that actually changed her, and the philosophy of medicine she had been quietly forming. Admitted to PLME and three other BS/MD programs." },
        { name: "R.K.", school: "Stanford University", domain: "stanford.edu", tag: "REA",
          body: "An applicant with strong but not record-breaking stats, applying REA in a year of historically low acceptance rates. We made the strategic call to lean into his unusual combination — competitive ballroom dance and quantitative finance — rather than minimize either. The Stanford essays connected the discipline of one to the precision of the other. Admitted REA." },
    ],
    zh: [
        { name: "L.W.", school: "Harvard University", domain: "harvard.edu", tag: "Ivy League · ED",
          body: "来自竞争激烈公立高中的第一代大学生申请人，老师形容她“安静却出众”。学术记录顶尖，但活动列表看上去与数千名强有力的申请者并无二致。我们帮她把计算语言学的兴趣、翻译文学小说的小项目，以及她服务难民家庭的工作，串成一条清晰的内在主线。最终的申请读起来像是一份关于“她正在成为谁”的论点陈述，而不是一份成就清单。ED 录取。" },
        { name: "K.N.", school: "MIT", domain: "mit.edu", tag: "Elite Technical · EA",
          body: "一位 IMO 级别的数学少年，父母坚信他需要更多“领导力”才能脱颖而出。我们做了相反的判断——深度而非广度——并把文书策略围绕他与大学导师合作的原创科研重新构建。MIT 的申请呈现给招生官的正是他们想看到的：一个已经像他们博士生那样思考的人。EA 录取。" },
        { name: "S.H.", school: "Brown University — PLME", domain: "brown.edu", tag: "BS / MD",
          body: "申请全美最严苛 BS/MD 项目之一的预医学生。分数过硬，但前一位顾问写的文书像是一张“预医套话”清单。我们推倒重来——挖出她的家庭故事、真正改变她的医院志愿者瞬间，以及她默默形成的医学哲学。最终被 PLME 与另外三个 BS/MD 项目同时录取。" },
        { name: "R.K.", school: "Stanford University", domain: "stanford.edu", tag: "REA",
          body: "分数过硬但并非顶尖的申请人，在一个录取率历史最低的年份选择 REA。我们做出战略判断：放大他不寻常的组合——竞技国标舞与量化金融——而非弱化任何一边。Stanford 的文书把前者的纪律与后者的精度连了起来。REA 录取。" },
    ],
};

// Placement school names kept in English (proper nouns).
const placementsBase = {
    ivy: [
        { school: "Harvard", domain: "harvard.edu" },
        { school: "Yale", domain: "yale.edu" },
        { school: "Princeton", domain: "princeton.edu" },
        { school: "Columbia", domain: "columbia.edu" },
        { school: "Penn", domain: "upenn.edu" },
        { school: "Cornell", domain: "cornell.edu" },
        { school: "Brown", domain: "brown.edu" },
        { school: "Dartmouth", domain: "dartmouth.edu" },
    ],
    top15: [
        { school: "Stanford", domain: "stanford.edu" },
        { school: "MIT", domain: "mit.edu" },
        { school: "Caltech", domain: "caltech.edu" },
        { school: "Duke", domain: "duke.edu" },
        { school: "UChicago", domain: "uchicago.edu" },
        { school: "Northwestern", domain: "northwestern.edu" },
        { school: "Johns Hopkins", domain: "jhu.edu" },
        { school: "Vanderbilt", domain: "vanderbilt.edu" },
        { school: "Rice", domain: "rice.edu" },
        { school: "WashU", domain: "wustl.edu" },
        { school: "Notre Dame", domain: "nd.edu" },
        { school: "Emory", domain: "emory.edu" },
    ],
    publicLA: [
        { school: "UC Berkeley", domain: "berkeley.edu" },
        { school: "UCLA", domain: "ucla.edu" },
        { school: "UMich", domain: "umich.edu" },
        { school: "UNC Chapel Hill", domain: "unc.edu" },
        { school: "UVA", domain: "virginia.edu" },
        { school: "Williams", domain: "williams.edu" },
        { school: "Amherst", domain: "amherst.edu" },
        { school: "Pomona", domain: "pomona.edu" },
        { school: "Swarthmore", domain: "swarthmore.edu" },
        { school: "Wellesley", domain: "wellesley.edu" },
    ],
};

const PLACEMENT_LABELS = {
    en: { ivy: "Ivy League", top15: "Top 15 and Elite Technical", publicLA: "Top Public and Liberal Arts" },
    zh: { ivy: "常春藤盟校", top15: "Top 15 与精英理工",        publicLA: "顶尖公立与文理学院" },
};

const PAGE_LABELS = {
    en: {
        stage: "Stage",
        storiesEyebrow: "Student Stories",
        storiesTitle: "How our students",
        storiesItalic: "got in — and where.",
        storiesSub: "Short cases from recent admissions cycles. Initials shown out of respect for privacy.",
        placementsEyebrow: "A Representative Selection — Top 30 Admissions",
    },
    zh: {
        stage: "阶段",
        storiesEyebrow: "学生故事",
        storiesTitle: "我们的学生",
        storiesItalic: "如何被录取 —— 去到了哪里。",
        storiesSub: "近几届申请季的简短案例。出于隐私保护，以首字母呈现。",
        placementsEyebrow: "代表性选择 —— Top 30 录取",
    },
};

function PlacementCard({ region, schools, testidKey }) {
    return (
        <article
            className="p-7 lg:p-8 lift"
            style={{ background: "var(--mist)" }}
            data-testid={`ca-region-${testidKey}`}
        >
            <div className="flex items-center gap-3">
                <div style={{ width: 24, height: 1, background: "var(--orange)" }} />
                <p
                    className="font-mono"
                    style={{
                        fontSize: 11,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--orange)",
                        fontWeight: 500,
                    }}
                >
                    {region}
                </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
                {schools.map((s) => (
                    <div
                        key={s.school}
                        className="flex items-center gap-2"
                        style={{
                            padding: "6px 10px 6px 6px",
                            background: "var(--paper)",
                            border: "1px solid var(--line)",
                        }}
                    >
                        <SchoolLogo domain={s.domain} name={s.school} size={26} imgSize={20} />
                        <span
                            className="font-display"
                            style={{
                                fontSize: 13.5,
                                lineHeight: 1.2,
                                color: "var(--navy)",
                                fontWeight: 500,
                                letterSpacing: "-0.005em",
                            }}
                        >
                            {s.school}
                        </span>
                    </div>
                ))}
            </div>
        </article>
    );
}

export default function CollegeAdmissions() {
    const t = useT();
    const { lang } = useLang();
    const p = t.pages.admissions;
    const stages = STAGES[lang];
    const stories = STORIES[lang];
    const placementLabels = PLACEMENT_LABELS[lang];
    const labels = PAGE_LABELS[lang];

    return (
        <main data-testid="page-college-admissions" className="min-h-screen">
            <Nav />

            <PageHeader
                eyebrow={p.eyebrow}
                title={p.title}
                italicWord={p.italic}
                subtitle={p.subtitle}
                breadcrumb={[{ label: p.crumbCollege, to: "/college/strategic-planning" }, { label: p.crumbSelf }]}
                background="var(--paper)"
                nowrap
            />

            {/* SEVEN STAGES */}
            <section className="section-x" style={{ background: "var(--mist)", paddingTop: 56, paddingBottom: 56 }}>
                <ol style={{ borderTop: "2px solid var(--navy)" }}>
                    {stages.map((b, i) => (
                        <li
                            key={i}
                            className="py-5"
                            style={{ borderBottom: "1px solid var(--line)" }}
                            data-testid={`college-admissions-stage-${i}`}
                        >
                            <div className="grid grid-cols-12 gap-x-8 gap-y-4 items-start">
                                <div className="col-span-12 lg:col-span-3">
                                    <div className="flex items-baseline gap-3">
                                        <span
                                            className="font-display"
                                            style={{ fontSize: 32, lineHeight: 0.9, color: "var(--orange)", fontWeight: 600 }}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <p
                                            className="font-mono"
                                            style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}
                                        >
                                            {labels.stage} {i + 1}
                                        </p>
                                    </div>
                                    <h3
                                        className="font-display mt-2"
                                        style={{ fontSize: "clamp(20px, 1.6vw, 24px)", lineHeight: 1.2, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}
                                    >
                                        {b.h}
                                    </h3>
                                </div>
                                <div className="col-span-12 lg:col-span-9">
                                    <ul className="space-y-2.5">
                                        {b.items.map((it, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <span aria-hidden="true" style={{ marginTop: 10, width: 6, height: 6, background: "var(--navy)", flexShrink: 0, borderRadius: "50%" }} />
                                                <p className="font-serif" style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ink)" }}>
                                                    {it}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            {/* STUDENT STORIES + WHERE THEY GOT IN */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <SectionHeading
                    eyebrow={labels.storiesEyebrow}
                    title={labels.storiesTitle}
                    italic={labels.storiesItalic}
                    subtitle={labels.storiesSub}
                />

                <ol className="mt-12" style={{ borderTop: "2px solid var(--navy)" }}>
                    {stories.map((s, i) => (
                        <li
                            key={s.school + i}
                            className="grid grid-cols-12 gap-x-6 py-8"
                            style={{ borderBottom: "1px solid var(--line)" }}
                            data-testid={`college-story-${i}`}
                        >
                            <div className="col-span-12 lg:col-span-3">
                                <SchoolLogo domain={s.domain} name={s.school} size={56} imgSize={40} />
                                <p className="font-mono mt-4" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                    {s.tag}
                                </p>
                                <h3 className="font-display mt-2" style={{ fontSize: 20, color: "var(--navy)", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.005em" }}>
                                    {s.school}
                                </h3>
                                <p className="font-mono mt-3" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--steel)", textTransform: "uppercase" }}>
                                    {s.name}
                                </p>
                            </div>
                            <div className="col-span-12 lg:col-span-9 mt-3 lg:mt-0">
                                <p className="font-serif" style={{ fontSize: 16.5, lineHeight: 1.65, color: "var(--ink)" }}>
                                    {s.body}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>

                {/* Placements grouped by tier */}
                <div className="mt-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                        <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                            {labels.placementsEyebrow}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-px" style={{ background: "var(--line)", border: "1px solid var(--line)" }}>
                        <PlacementCard region={placementLabels.ivy}      schools={placementsBase.ivy}      testidKey="ivy" />
                        <PlacementCard region={placementLabels.top15}    schools={placementsBase.top15}    testidKey="top15" />
                        <PlacementCard region={placementLabels.publicLA} schools={placementsBase.publicLA} testidKey="public-la" />
                    </div>
                </div>
            </section>

            <ClosingCTA />
            <Footer />
        </main>
    );
}
