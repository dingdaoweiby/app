import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useT, useLang } from "@/i18n/LanguageContext";

const ROLES = {
    en: ["Parent", "Guardian"],
    zh: ["家长", "监护人"],
};

const GRADES = {
    en: [
        "Pre-K / Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade",
        "6th Grade", "7th Grade", "8th Grade", "9th Grade", "10th Grade", "11th Grade", "12th Grade",
        "Gap Year", "Undergraduate", "Graduate",
    ],
    zh: [
        "学前 / 幼儿园", "1 年级", "2 年级", "3 年级", "4 年级", "5 年级",
        "6 年级", "7 年级", "8 年级", "9 年级", "10 年级", "11 年级", "12 年级",
        "Gap Year", "本科", "研究生",
    ],
};

const INTERESTS = {
    en: [
        "K–12 Private School Admissions",
        "9–11th Grade Strategic Planning",
        "College Admissions Consulting",
        "Graduate Admissions",
        "Research Mentorship",
        "International Programs",
        "Not sure yet — just exploring",
    ],
    zh: [
        "K–12 私立学校升学",
        "9–11 年级战略规划",
        "本科申请咨询",
        "研究生申请",
        "学术研究指导",
        "国际学生项目",
        "暂未确定 —— 想先了解",
    ],
};

const CONTACT_METHODS = {
    en: [
        { key: "phone",  label: "Phone",     placeholder: "+1 (___) ___ — ____" },
        { key: "wechat", label: "WeChat ID", placeholder: "Your WeChat ID" },
        { key: "email",  label: "Email",     placeholder: "name@example.com" },
    ],
    zh: [
        { key: "phone",  label: "电话",  placeholder: "+1 (___) ___ — ____" },
        { key: "wechat", label: "微信",  placeholder: "你的微信号" },
        { key: "email",  label: "邮箱",  placeholder: "name@example.com" },
    ],
};

const STEPS = {
    en: [
        { n: "01", t: "You reach out",                    b: "Submit the form. Include your student's grade and a brief note about what you'd like to discuss." },
        { n: "02", t: "We respond within 24 hours",       b: "A brief reply with two or three time options for an introductory call." },
        { n: "03", t: "Diagnostic conversation (45 min)", b: "Free, no sales pitch. You'll leave having learned something about your child you didn't know before." },
        { n: "04", t: "Engagement decision",              b: "If we're a fit, we'll send a written proposal. If we're not, we'll recommend who is." },
    ],
    zh: [
        { n: "01", t: "你联系我们",            b: "提交表单。请简要说明孩子的年级，以及你希望讨论的内容。" },
        { n: "02", t: "我们在 24 小时内回复", b: "一封简短回复，附上两到三个可用的初次电话时间。" },
        { n: "03", t: "诊断式对话（45 分钟）", b: "免费，不推销。你会带着对孩子全新的认识离开。" },
        { n: "04", t: "是否合作的决定",       b: "如果契合，我们会发送正式方案；如不契合，我们会推荐更合适的人。" },
    ],
};

const LABELS = {
    en: {
        title: "Schedule a Consultation",
        received: "Received",
        thankTitle: "Thank you — your inquiry is in.",
        thankBody: "We'll respond within 24 hours with two or three time options for an introductory call.",
        iAmA: "I am a",
        firstName: "First name",
        lastName: "Last name",
        country: "Country",
        countryPh: "United States",
        state: "State / region",
        statePh: "New Jersey",
        currentSchool: "Current school",
        currentSchoolPh: "School your student currently attends",
        gradeFall: "Grade this fall",
        gradePh: "Select grade level…",
        interest: "What are you most interested in?",
        interestPh: "Select an area…",
        discuss: "What would you like to discuss?",
        discussPh: "Anything you'd like us to know before our first conversation — questions, goals, current concerns…",
        preferred: "Preferred contact",
        submit: "Submit",
        respondNote: "We respond within 24 hours.",
        nextEyebrow: "What Happens Next",
        nextTitlePre: "From inquiry",
        nextTitleItalic: "to first meeting.",
    },
    zh: {
        title: "预约咨询",
        received: "已收到",
        thankTitle: "感谢 —— 您的预约已收到。",
        thankBody: "我们将在 24 小时内回复，并附上两到三个可用的初次电话时间。",
        iAmA: "我是",
        firstName: "名",
        lastName: "姓",
        country: "国家 / 地区",
        countryPh: "United States",
        state: "州 / 省",
        statePh: "New Jersey",
        currentSchool: "目前就读学校",
        currentSchoolPh: "孩子目前就读的学校",
        gradeFall: "今秋年级",
        gradePh: "请选择年级…",
        interest: "您最感兴趣的方向是？",
        interestPh: "请选择方向…",
        discuss: "您想讨论什么？",
        discussPh: "任何在我们初次对话前希望我们知道的内容 —— 疑问、目标、当前的担心…",
        preferred: "首选联络方式",
        submit: "提交",
        respondNote: "我们将在 24 小时内回复。",
        nextEyebrow: "接下来会发生什么",
        nextTitlePre: "从询问",
        nextTitleItalic: "到第一次会面。",
    },
};

const fieldLabelStyle = {
    display: "block",
    fontFamily: "'Source Serif Pro', Georgia, serif",
    fontSize: 16,
    color: "var(--navy)",
    fontWeight: 600,
    marginBottom: 10,
    letterSpacing: "-0.005em",
};

function Field({ label, required, children }) {
    return (
        <label className="block">
            <span style={fieldLabelStyle}>
                {label}
                {required && <span style={{ color: "var(--orange)", marginLeft: 4 }}>*</span>}
            </span>
            {children}
        </label>
    );
}

const baseInput = {
    width: "100%",
    padding: "12px 14px",
    background: "var(--paper)",
    border: "1px solid var(--line-strong)",
    fontFamily: "'Source Serif Pro', Georgia, serif",
    fontSize: 16,
    color: "var(--navy)",
    outline: "none",
    transition: "border-color 180ms ease",
};

export default function Contact() {
    const tt = useT();
    const { lang } = useLang();
    const L = LABELS[lang];
    const roles = ROLES[lang];
    const grades = GRADES[lang];
    const interests = INTERESTS[lang];
    const methods = CONTACT_METHODS[lang];
    const steps = STEPS[lang];

    const [role, setRole] = useState(roles[0]);
    const [contactMethod, setContactMethod] = useState("email");
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main data-testid="page-contact" className="min-h-screen">
            <Nav />

            {/* FORM SECTION */}
            <section className="section-x" style={{ background: "var(--mist)", paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: 32 }}>
                <nav
                    className="flex items-center gap-2 mb-10 font-mono"
                    style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}
                >
                    <a href="/" className="link-underline" data-testid="breadcrumb-home">{tt.breadcrumb.home}</a>
                    <span style={{ color: "var(--line-strong)" }}>/</span>
                    <span style={{ color: "var(--orange)" }}>{tt.pages.contact.crumb}</span>
                </nav>

                {submitted ? (
                    <div
                        className="p-10 lg:p-14 mx-auto"
                        style={{ background: "var(--paper)", border: "1px solid var(--line)", maxWidth: 760 }}
                        data-testid="contact-success"
                    >
                        <div className="flex items-center gap-3">
                            <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                            <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                {L.received}
                            </p>
                        </div>
                        <h2 className="font-display mt-5" style={{ fontSize: "clamp(26px, 2.4vw, 34px)", lineHeight: 1.15, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.01em" }}>
                            {L.thankTitle}
                        </h2>
                        <div className="mt-6" style={{ width: 36, height: 2, background: "var(--orange)" }} />
                        <p className="font-serif mt-6" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink)" }}>
                            {L.thankBody}
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={onSubmit}
                        data-testid="contact-form"
                        className="p-8 lg:p-12 mx-auto"
                        style={{ background: "var(--paper)", border: "1px solid var(--line)", maxWidth: 920 }}
                    >
                        <h2 className="font-display" style={{ fontSize: "clamp(26px, 2.4vw, 34px)", lineHeight: 1.2, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 8 }}>
                            {L.title}
                        </h2>
                        <div className="mb-7" style={{ width: 36, height: 2, background: "var(--orange)" }} />

                        {/* Role */}
                        <div className="mb-6">
                            <p style={fieldLabelStyle}>
                                {L.iAmA} <span style={{ color: "var(--orange)" }}>*</span>
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {roles.map((r, idx) => {
                                    const active = role === r;
                                    return (
                                        <button
                                            key={r}
                                            type="button"
                                            data-testid={`role-${idx}`}
                                            onClick={() => setRole(r)}
                                            className="font-display"
                                            style={{
                                                padding: "10px 22px",
                                                background: active ? "var(--orange)" : "var(--paper)",
                                                border: `1px solid ${active ? "var(--orange)" : "var(--line-strong)"}`,
                                                color: active ? "#fff" : "var(--navy)",
                                                fontSize: 15,
                                                fontWeight: 500,
                                                cursor: "pointer",
                                                transition: "all 180ms ease",
                                            }}
                                        >
                                            {r}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Names */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <Field label={L.firstName} required>
                                <input data-testid="input-firstname" name="firstName" required type="text" style={baseInput} />
                            </Field>
                            <Field label={L.lastName} required>
                                <input data-testid="input-lastname" name="lastName" required type="text" style={baseInput} />
                            </Field>
                        </div>

                        {/* Location */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <Field label={L.country} required>
                                <input data-testid="input-country" name="country" required type="text" placeholder={L.countryPh} style={baseInput} />
                            </Field>
                            <Field label={L.state} required>
                                <input data-testid="input-state" name="state" required type="text" placeholder={L.statePh} style={baseInput} />
                            </Field>
                        </div>

                        {/* School + Grade */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <Field label={L.currentSchool}>
                                <input data-testid="input-school" name="school" type="text" placeholder={L.currentSchoolPh} style={baseInput} />
                            </Field>
                            <Field label={L.gradeFall} required>
                                <select
                                    data-testid="input-grade"
                                    name="grade"
                                    required
                                    defaultValue=""
                                    style={{ ...baseInput, appearance: "none", backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"12\\" height=\\"8\\" viewBox=\\"0 0 12 8\\"><path d=\\"M1 1L6 7L11 1\\" stroke=\\"%230f1a30\\" stroke-width=\\"1.5\\" fill=\\"none\\"/></svg>")', backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: 40 }}
                                >
                                    <option value="" disabled>{L.gradePh}</option>
                                    {grades.map((g) => <option key={g} value={g}>{g}</option>)}
                                </select>
                            </Field>
                        </div>

                        {/* Interest */}
                        <div className="mb-5">
                            <Field label={L.interest} required>
                                <select
                                    data-testid="input-interest"
                                    name="interest"
                                    required
                                    defaultValue=""
                                    style={{ ...baseInput, appearance: "none", backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"12\\" height=\\"8\\" viewBox=\\"0 0 12 8\\"><path d=\\"M1 1L6 7L11 1\\" stroke=\\"%230f1a30\\" stroke-width=\\"1.5\\" fill=\\"none\\"/></svg>")', backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: 40 }}
                                >
                                    <option value="" disabled>{L.interestPh}</option>
                                    {interests.map((g) => <option key={g} value={g}>{g}</option>)}
                                </select>
                            </Field>
                        </div>

                        {/* Message */}
                        <div className="mb-7">
                            <Field label={L.discuss}>
                                <textarea
                                    data-testid="input-message"
                                    name="message"
                                    rows={4}
                                    placeholder={L.discussPh}
                                    style={{ ...baseInput, resize: "vertical", lineHeight: 1.5 }}
                                />
                            </Field>
                        </div>

                        {/* Preferred Contact */}
                        <div className="mb-7">
                            <p style={fieldLabelStyle}>
                                {L.preferred} <span style={{ color: "var(--orange)" }}>*</span>
                            </p>
                            <div className="flex flex-wrap gap-3 mb-4">
                                {methods.map((m) => {
                                    const active = contactMethod === m.key;
                                    return (
                                        <button
                                            key={m.key}
                                            type="button"
                                            data-testid={`contact-method-${m.key}`}
                                            onClick={() => setContactMethod(m.key)}
                                            className="font-display"
                                            style={{
                                                padding: "10px 22px",
                                                background: active ? "var(--orange)" : "var(--paper)",
                                                border: `1px solid ${active ? "var(--orange)" : "var(--line-strong)"}`,
                                                color: active ? "#fff" : "var(--navy)",
                                                fontSize: 15,
                                                fontWeight: 500,
                                                cursor: "pointer",
                                                transition: "all 180ms ease",
                                            }}
                                        >
                                            {m.label}
                                        </button>
                                    );
                                })}
                            </div>
                            <input
                                data-testid="input-contact-value"
                                name={`contact_${contactMethod}`}
                                key={contactMethod}
                                required
                                type={contactMethod === "email" ? "email" : "text"}
                                placeholder={methods.find((m) => m.key === contactMethod).placeholder}
                                style={baseInput}
                            />
                        </div>

                        <button
                            type="submit"
                            data-testid="submit-consultation"
                            className="font-display"
                            style={{
                                background: "var(--navy)",
                                color: "#fff",
                                fontSize: 16,
                                fontWeight: 500,
                                padding: "16px 32px",
                                border: "1px solid var(--navy)",
                                cursor: "pointer",
                                letterSpacing: "-0.005em",
                                transition: "all 220ms ease",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.borderColor = "var(--orange)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--navy)"; e.currentTarget.style.borderColor = "var(--navy)"; }}
                        >
                            {L.submit}
                        </button>
                        <p className="font-serif italic mt-4" style={{ fontSize: 14, color: "var(--steel)" }}>
                            {L.respondNote}
                        </p>
                    </form>
                )}
            </section>

            {/* WHAT HAPPENS NEXT */}
            <section className="section-x" style={{ background: "var(--paper)", paddingTop: 40, paddingBottom: "clamp(48px, 6vw, 88px)" }}>
                <div className="flex items-center gap-3">
                    <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                        {L.nextEyebrow}
                    </p>
                </div>
                <h2 className="font-display mt-5" style={{ fontSize: "clamp(32px, 3vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.01em", fontWeight: 500, color: "var(--navy)", maxWidth: 880 }}>
                    {L.nextTitlePre} <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>{L.nextTitleItalic}</em>
                </h2>
                <div className="mt-8" style={{ width: 56, height: 2, background: "var(--navy)" }} />

                <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((s) => (
                        <li
                            key={s.n}
                            className="p-6"
                            style={{ background: "var(--mist)", border: "1px solid var(--line)" }}
                            data-testid={`whats-next-${s.n}`}
                        >
                            <span className="font-display" style={{ fontSize: 28, lineHeight: 1, color: "var(--orange)", fontWeight: 600, letterSpacing: "-0.02em" }}>
                                {s.n}
                            </span>
                            <div className="my-3" style={{ width: 24, height: 2, background: "var(--orange)" }} />
                            <p className="font-display" style={{ fontSize: 17, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}>
                                {s.t}
                            </p>
                            <p className="font-serif mt-2" style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)" }}>
                                {s.b}
                            </p>
                        </li>
                    ))}
                </ol>
            </section>

            <Footer />
        </main>
    );
}
