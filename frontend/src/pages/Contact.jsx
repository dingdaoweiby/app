import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ROLES = ["Parent", "Guardian"];
const GRADES = [
    "Pre-K / Kindergarten",
    "1st Grade",
    "2nd Grade",
    "3rd Grade",
    "4th Grade",
    "5th Grade",
    "6th Grade",
    "7th Grade",
    "8th Grade",
    "9th Grade",
    "10th Grade",
    "11th Grade",
    "12th Grade",
    "Gap Year",
    "Undergraduate",
    "Graduate",
];
const CONTACT_METHODS = [
    { key: "phone",  label: "Phone",     placeholder: "+1 (___) ___ — ____" },
    { key: "wechat", label: "WeChat ID", placeholder: "Your WeChat ID" },
    { key: "email",  label: "Email",     placeholder: "name@example.com" },
];

const INTERESTS = [
    "K–12 Private School Admissions",
    "9–11th Grade Strategic Planning",
    "College Admissions Consulting",
    "Graduate Admissions",
    "Research Mentorship",
    "International Programs",
    "Not sure yet — just exploring",
];

const STEPS = [
    { n: "01", t: "You reach out",                       b: "Submit the form. Include your student's grade and a brief note about what you'd like to discuss." },
    { n: "02", t: "We respond within 24 hours",          b: "A brief reply with two or three time options for an introductory call." },
    { n: "03", t: "Diagnostic conversation (45 min)",    b: "Free, no sales pitch. You'll leave having learned something about your child you didn't know before." },
    { n: "04", t: "Engagement decision",                 b: "If we're a fit, we'll send a written proposal. If we're not, we'll recommend who is." },
];

function Field({ label, required, children }) {
    return (
        <label className="block">
            <span
                className="font-mono"
                style={{
                    display: "block",
                    fontSize: 13,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--navy)",
                    fontWeight: 600,
                    marginBottom: 10,
                }}
            >
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

const groupLabel = {
    fontSize: 13,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--navy)",
    fontWeight: 600,
    marginBottom: 10,
};

export default function Contact() {
    const [role, setRole] = useState("Parent");
    const [contactMethod, setContactMethod] = useState("email");
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main data-testid="page-contact" className="min-h-screen">
            <Nav />

            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <nav
                    className="flex items-center gap-2 mb-10 font-mono"
                    style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}
                >
                    <a href="/" className="link-underline" data-testid="breadcrumb-home">Home</a>
                    <span style={{ color: "var(--line-strong)" }}>/</span>
                    <span style={{ color: "var(--orange)" }}>Contact</span>
                </nav>

                <div className="grid grid-cols-12 gap-x-12 gap-y-12 items-start">
                    {/* LEFT: What Happens Next */}
                    <div className="col-span-12 lg:col-span-5">
                        <div className="flex items-center gap-3">
                            <div style={{ width: 36, height: 1, background: "var(--orange)" }} />
                            <p
                                className="font-mono"
                                style={{ fontSize: 13, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                            >
                                What Happens Next
                            </p>
                        </div>
                        <h2
                            className="font-display mt-6"
                            style={{
                                fontSize: "clamp(32px, 3.4vw, 52px)",
                                lineHeight: 1.08,
                                letterSpacing: "-0.02em",
                                fontWeight: 500,
                                color: "var(--navy)",
                            }}
                        >
                            From inquiry <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>to first meeting.</em>
                        </h2>
                        <div className="mt-8" style={{ width: 56, height: 2, background: "var(--navy)" }} />

                        <ol className="mt-10 space-y-7">
                            {STEPS.map((s) => (
                                <li
                                    key={s.n}
                                    className="grid grid-cols-12 gap-4"
                                    data-testid={`whats-next-${s.n}`}
                                >
                                    <span
                                        className="col-span-2 font-display"
                                        style={{ fontSize: 26, lineHeight: 1, color: "var(--orange)", fontWeight: 600, letterSpacing: "-0.02em" }}
                                    >
                                        {s.n}
                                    </span>
                                    <div className="col-span-10">
                                        <p className="font-display" style={{ fontSize: 18, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}>
                                            {s.t}
                                        </p>
                                        <p className="font-serif mt-2" style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--ink)" }}>
                                            {s.b}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* RIGHT: Form */}
                    <div className="col-span-12 lg:col-span-7">
                        {submitted ? (
                            <div
                                className="p-10 lg:p-12"
                                style={{ background: "var(--paper)", border: "1px solid var(--line)" }}
                                data-testid="contact-success"
                            >
                                <div className="flex items-center gap-3">
                                    <div style={{ width: 28, height: 1, background: "var(--orange)" }} />
                                    <p
                                        className="font-mono"
                                        style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}
                                    >
                                        Received
                                    </p>
                                </div>
                                <h2
                                    className="font-display mt-5"
                                    style={{ fontSize: "clamp(26px, 2.4vw, 34px)", lineHeight: 1.15, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.01em" }}
                                >
                                    Thank you — your inquiry is in.
                                </h2>
                                <div className="mt-6" style={{ width: 36, height: 2, background: "var(--orange)" }} />
                                <p className="font-serif mt-6" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink)" }}>
                                    We'll respond within 24 hours with two or three time options for an introductory call.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={onSubmit}
                                data-testid="contact-form"
                                className="p-8 lg:p-10"
                                style={{ background: "var(--paper)", border: "1px solid var(--line)" }}
                            >
                                <h2
                                    className="font-display"
                                    style={{ fontSize: "clamp(22px, 1.9vw, 28px)", lineHeight: 1.2, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: 24 }}
                                >
                                    Schedule a Consultation
                                </h2>

                                {/* Role */}
                                <div className="mb-7">
                                    <p className="font-mono" style={groupLabel}>
                                        I am a <span style={{ color: "var(--orange)" }}>*</span>
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {ROLES.map((r) => {
                                            const active = role === r;
                                            return (
                                                <button
                                                    key={r}
                                                    type="button"
                                                    data-testid={`role-${r.toLowerCase()}`}
                                                    onClick={() => setRole(r)}
                                                    className="font-display"
                                                    style={{
                                                        padding: "10px 22px",
                                                        background: active ? "var(--navy)" : "var(--paper)",
                                                        border: `1px solid ${active ? "var(--navy)" : "var(--line-strong)"}`,
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
                                    <Field label="First Name" required>
                                        <input data-testid="input-firstname" name="firstName" required type="text" style={baseInput} />
                                    </Field>
                                    <Field label="Last Name" required>
                                        <input data-testid="input-lastname" name="lastName" required type="text" style={baseInput} />
                                    </Field>
                                </div>

                                {/* Location */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                    <Field label="Country" required>
                                        <input data-testid="input-country" name="country" required type="text" placeholder="United States" style={baseInput} />
                                    </Field>
                                    <Field label="State / Region" required>
                                        <input data-testid="input-state" name="state" required type="text" placeholder="New Jersey" style={baseInput} />
                                    </Field>
                                </div>

                                {/* School */}
                                <div className="mb-5">
                                    <Field label="Current School">
                                        <input data-testid="input-school" name="school" type="text" placeholder="School your student currently attends" style={baseInput} />
                                    </Field>
                                </div>

                                {/* Grade */}
                                <div className="mb-5">
                                    <Field label="Grade this Fall" required>
                                        <select
                                            data-testid="input-grade"
                                            name="grade"
                                            required
                                            defaultValue=""
                                            style={{ ...baseInput, appearance: "none", backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"12\\" height=\\"8\\" viewBox=\\"0 0 12 8\\"><path d=\\"M1 1L6 7L11 1\\" stroke=\\"%230f1a30\\" stroke-width=\\"1.5\\" fill=\\"none\\"/></svg>")', backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: 40 }}
                                        >
                                            <option value="" disabled>Select grade level…</option>
                                            {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
                                        </select>
                                    </Field>
                                </div>

                                {/* Interest */}
                                <div className="mb-5">
                                    <Field label="What are you most interested in?" required>
                                        <select
                                            data-testid="input-interest"
                                            name="interest"
                                            required
                                            defaultValue=""
                                            style={{ ...baseInput, appearance: "none", backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"12\\" height=\\"8\\" viewBox=\\"0 0 12 8\\"><path d=\\"M1 1L6 7L11 1\\" stroke=\\"%230f1a30\\" stroke-width=\\"1.5\\" fill=\\"none\\"/></svg>")', backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: 40 }}
                                        >
                                            <option value="" disabled>Select an area…</option>
                                            {INTERESTS.map((g) => <option key={g} value={g}>{g}</option>)}
                                        </select>
                                    </Field>
                                </div>

                                {/* Message */}
                                <div className="mb-7">
                                    <Field label="What would you like to discuss?">
                                        <textarea
                                            data-testid="input-message"
                                            name="message"
                                            rows={4}
                                            placeholder="Anything you'd like us to know before our first conversation — questions, goals, current concerns…"
                                            style={{ ...baseInput, resize: "vertical", lineHeight: 1.5 }}
                                        />
                                    </Field>
                                </div>

                                {/* Preferred Contact */}
                                <div className="mb-7">
                                    <p className="font-mono" style={groupLabel}>
                                        Preferred Contact <span style={{ color: "var(--orange)" }}>*</span>
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        {CONTACT_METHODS.map((m) => {
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
                                        placeholder={CONTACT_METHODS.find((m) => m.key === contactMethod).placeholder}
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
                                    Schedule a Consultation
                                </button>
                                <p className="font-serif italic mt-4" style={{ fontSize: 14, color: "var(--steel)" }}>
                                    We respond within 24 hours.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
