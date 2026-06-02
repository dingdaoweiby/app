import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ClosingCTA from "@/components/ClosingCTA";
import SchoolLogo from "@/components/SchoolLogo";
import { useT, useLang } from "@/i18n/LanguageContext";

// School lists kept in English (proper nouns / brand names).
const schoolGroups = [
    { regionKey: "boarding", schools: [
        "Phillips Academy Andover",
        "Phillips Exeter Academy",
        "St. Paul's School",
        "Deerfield Academy",
        "The Lawrenceville School",
        "The Hotchkiss School",
        "Choate Rosemary Hall",
        "Groton School",
        "Middlesex School",
        "Milton Academy",
    ]},
    { regionKey: "nj", schools: [
        "Newark Academy",
        "The Pingry School",
        "Princeton Day School",
        "Gill St. Bernard's",
        "Kent Place School",
        "Montclair Kimberley Academy",
        "Dwight-Englewood School",
        "Saddle River Day School",
    ]},
    { regionKey: "ny", schools: [
        "Trinity School",
        "Horace Mann School",
        "Collegiate School",
        "Dalton School",
        "Brearley School",
        "Spence School",
        "Chapin School",
        "Riverdale Country School",
        "Poly Prep Country Day School",
        "Rye Country Day School",
        "Ethical Culture Fieldston School",
        "Hackley School",
    ]},
    { regionKey: "ca", schools: [
        "Harvard-Westlake School",
        "The Harker School",
        "Castilleja School",
        "Marlborough School",
        "The Bishop's School",
        "Chadwick School",
        "Crystal Springs Uplands School",
        "Menlo School",
        "Head-Royce School",
        "Polytechnic School",
    ]},
];

const REGION_LABELS = {
    en: { boarding: "Top Boarding Schools", nj: "New Jersey", ny: "New York", ca: "California" },
    zh: { boarding: "顶尖寄宿学校",         nj: "新泽西",     ny: "纽约",     ca: "加州" },
};

const stories = {
    en: [
        { name: "E.D.", school: "Phillips Exeter Academy", domain: "exeter.edu", tag: "Boarding",
          body: "A quiet, math-driven 8th grader with strong test scores but a flat activity list that looked like every other high-achieving applicant. We helped the family step back from resume-padding and instead built the application around his genuine obsession with topology puzzles and the math club he started in his garage. Exeter's admissions team saw a thinker, not a template. Admitted with financial aid." },
        { name: "J.W.", school: "The Pingry School", domain: "pingry.org", tag: "NJ Day School",
          body: "A 5th grader applying for 6th-grade entry whose parents were convinced she needed more trophies. We redirected the narrative toward what was already there — a deep love of environmental science and a quiet leadership style her teachers adored but her parents hadn't noticed. Her parent essay and interview reflected a family that truly understood their child. Admitted to Pingry and Newark Academy; enrolled at Pingry." },
        { name: "J.C.", school: "Trinity School", domain: "trinityschoolnyc.org", tag: "NY Day School",
          body: "A Kindergarten applicant in a hyper-competitive Manhattan cycle. The family had been coached by another consultant to rehearse interview answers. We undid that entirely — helped the parents relax, reframed the parent essay around their actual parenting values, and let the child show up as herself in the playgroup observation. Admitted on the first round." },
        { name: "S.L.", school: "The Harker School", domain: "harker.org", tag: "CA Day School",
          body: "A 7th grader transferring from public school with no private school network, no legacy, and parents who spoke limited English. We handled the full application architecture — school selection, ISEE prep, essay development, interview coaching in both English and Mandarin — and positioned the student's robotics work and Mandarin debate experience as distinctive strengths. Admitted to Harker and Castilleja." },
    ],
    zh: [
        { name: "E.D.", school: "Phillips Exeter Academy", domain: "exeter.edu", tag: "Boarding",
          body: "一个安静、数学突出的八年级学生，标化分数很强，但活动列表平平无奇，看起来和其他高分申请者没什么两样。我们让家庭停下来不再刷简历，转而把申请围绕他真正痴迷的拓扑学谜题，和他在自家车库里组建的数学社展开。Exeter 的招生官看到的是一个真正在思考的孩子，而非一个模板化的申请人。最终带奖录取。" },
        { name: "J.W.", school: "The Pingry School", domain: "pingry.org", tag: "NJ Day School",
          body: "一个五年级女孩申请六年级入学，家长一度坚信她需要更多奖项。我们把叙事调回了她身上本来就有的东西——对环境科学的深爱，以及她老师们喜欢、但父母没注意到的低调领导力。家长文书与面试呈现出一个真正读懂孩子的家庭。最终被 Pingry 与 Newark Academy 同时录取，入读 Pingry。" },
        { name: "J.C.", school: "Trinity School", domain: "trinityschoolnyc.org", tag: "NY Day School",
          body: "曼哈顿超高竞争年份的一位幼儿园申请人。家庭此前被另一位顾问指导反复演练面试答案。我们把这套全部拆掉——让父母放松下来，把家长文书重写到他们真实的育儿理念上，让孩子在小组观察中以本来的样子出现。第一轮即录取。" },
        { name: "S.L.", school: "The Harker School", domain: "harker.org", tag: "CA Day School",
          body: "一个从公立学校转私立的七年级学生，没有私校人脉，没有家族背景，父母英文有限。我们承担了完整的申请架构——选校、ISEE 备考、文书、英文与中文双语面试辅导，并把孩子的机器人项目与中文辩论经历定位为独特优势。最终被 Harker 与 Castilleja 同时录取。" },
    ],
};

export default function K12() {
    const t = useT();
    const { lang } = useLang();
    const p = t.pages.k12;
    const phasesNumbers = ["01", "02", "03"];
    const regionLabels = REGION_LABELS[lang];
    const storyList = stories[lang];
    return (
        <main data-testid="page-k12" className="min-h-screen">
            <Nav />

            <PageHeader
                eyebrow={p.eyebrow}
                title={p.title}
                italicWord={p.italic}
                subtitle={p.subtitle}
                breadcrumb={[{ label: p.crumb }]}
                background="var(--paper)"
            />

            {/* WHAT WE DO */}
            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <SectionHeading
                    eyebrow={p.whatWeDo.eyebrow}
                    title={p.whatWeDo.title}
                    subtitle={p.whatWeDo.subtitle}
                />

                <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-12" style={{ borderTop: "2px solid var(--navy)", paddingTop: 40 }}>
                    {p.phases.map((ph, i) => (
                        <div key={i} data-testid={`k12-phase-${i}`}>
                            <div className="flex flex-col items-center text-center">
                                <div
                                    className="flex items-center justify-center"
                                    style={{
                                        width: 56,
                                        height: 56,
                                        background: "var(--orange)",
                                        color: "#fff",
                                        flexShrink: 0,
                                        borderRadius: "50%",
                                        boxShadow: "0 4px 14px rgba(255,152,0,0.28)",
                                    }}
                                >
                                    <span
                                        className="font-display"
                                        style={{
                                            fontSize: 24,
                                            lineHeight: 1,
                                            color: "#fff",
                                            fontWeight: 600,
                                            letterSpacing: "-0.01em",
                                        }}
                                    >
                                        {phasesNumbers[i]}
                                    </span>
                                </div>
                                <p
                                    className="font-mono mt-5"
                                    style={{
                                        fontSize: 14,
                                        letterSpacing: "0.22em",
                                        textTransform: "uppercase",
                                        color: "var(--navy)",
                                        fontWeight: 600,
                                    }}
                                >
                                    {ph.label}
                                </p>
                                <div className="mt-4" style={{ width: 32, height: 2, background: "var(--orange)" }} />
                            </div>

                            <ul className="mt-6 space-y-3.5">
                                {ph.items.map((it, j) => (
                                    <li
                                        key={j}
                                        className="flex items-start gap-3"
                                        data-testid={`k12-phase-${i}-item-${j}`}
                                    >
                                        <span
                                            aria-hidden="true"
                                            style={{
                                                marginTop: 9,
                                                width: 6,
                                                height: 6,
                                                background: "var(--navy)",
                                                flexShrink: 0,
                                                borderRadius: "50%",
                                            }}
                                        />
                                        <p
                                            className="font-serif"
                                            style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}
                                        >
                                            {it}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHERE STUDENTS GO */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <SectionHeading
                    eyebrow={p.whereGo.eyebrow}
                    title={p.whereGo.title}
                    subtitle={p.whereGo.subtitle}
                />

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--line)", border: "1px solid var(--line)" }}>
                    {schoolGroups.map((g, i) => (
                        <article
                            key={g.regionKey}
                            className="p-8 lg:p-10 lift"
                            style={{ background: "var(--mist)" }}
                            data-testid={`k12-region-${i}`}
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
                                    {regionLabels[g.regionKey]}
                                </p>
                            </div>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {g.schools.map((s, j) => (
                                    <span
                                        key={s}
                                        data-testid={`k12-region-${i}-school-${j}`}
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

            {/* STUDENT STORIES */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <SectionHeading
                    eyebrow={p.stories.eyebrow}
                    title={p.stories.title}
                    subtitle={p.stories.subtitle}
                />

                <ol className="mt-12 grid grid-cols-1 gap-px" style={{ background: "var(--line)", border: "1px solid var(--line)" }}>
                    {storyList.map((s, i) => (
                        <li
                            key={s.school + i}
                            className="grid grid-cols-12 gap-x-6 p-8 lg:p-10"
                            style={{ background: "var(--mist)" }}
                            data-testid={`k12-story-${i}`}
                        >
                            <div className="col-span-12 lg:col-span-3">
                                <SchoolLogo domain={s.domain} name={s.school} size={56} imgSize={40} />
                                <p
                                    className="font-mono mt-4"
                                    style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                                >
                                    {s.tag}
                                </p>
                                <h3
                                    className="font-display mt-2"
                                    style={{ fontSize: 20, color: "var(--navy)", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.005em" }}
                                >
                                    {s.school}
                                </h3>
                                <p
                                    className="font-mono mt-3"
                                    style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--steel)", textTransform: "uppercase" }}
                                >
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
            </section>

            <ClosingCTA />
            <Footer />
        </main>
    );
}
