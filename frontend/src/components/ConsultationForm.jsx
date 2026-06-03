import { useState } from "react";

// Web3Forms access key — replace with the key emailed to you after registering
// yingban2013@gmail.com at https://web3forms.com. Submissions are delivered to
// the inbox bound to this key.
const WEB3FORMS_ACCESS_KEY = "88941cf7-947e-4099-ad69-46d06f19d3ea";

const GRADES = [
    "Kindergarten – Grade 5",
    "Grade 6 – 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
    "Graduate / Other",
];

const inputStyle = {
    width: "100%",
    background: "#fff",
    border: "1px solid var(--line)",
    color: "var(--ink)",
    fontFamily: "'Source Serif 4', Georgia, serif",
    fontSize: 16,
    lineHeight: 1.5,
    padding: "12px 14px",
    outline: "none",
};

const labelStyle = {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--steel)",
    fontWeight: 500,
    marginBottom: 8,
    display: "block",
};

export default function ConsultationForm({ onSuccess, compact = false }) {
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting");
        setErrorMsg("");

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        // Honeypot: if filled, silently treat as success without sending.
        if (data.botcheck) {
            setStatus("success");
            return;
        }

        const payload = {
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: "New Consultation Request — Supernova Education",
            from_name: "Supernova Education Website",
            name: data.name,
            email: data.email,
            phone: data.phone || "—",
            grade: data.grade || "—",
            message: data.message || "—",
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(payload),
            });

            let result = null;
            try {
                result = await res.json();
            } catch {
                result = null;
            }

            if (res.ok && result && result.success) {
                setStatus("success");
                form.reset();
                if (onSuccess) onSuccess();
            } else {
                setStatus("error");
                setErrorMsg(
                    (result && result.message) ||
                    "Something went wrong. Please try again, or email us directly."
                );
            }
        } catch (err) {
            setStatus("error");
            setErrorMsg("Network error. Please check your connection and try again.");
        }
    }

    if (status === "success") {
        return (
            <div data-testid="consultation-success" style={{ padding: compact ? "8px 0" : "24px 0" }}>
                <p className="font-mono" style={{ fontSize: 10.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                    Message sent
                </p>
                <h3 className="font-display mt-4" style={{ fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: 1.1, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.01em" }}>
                    Thank you — we&apos;ll be in touch.
                </h3>
                <p className="font-serif mt-4" style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink)", maxWidth: 460 }}>
                    We&apos;ve received your request and will respond within 24 hours with a few times for an introductory diagnostic conversation.
                </p>
            </div>
        );
    }

    return (
        <form data-testid="consultation-form" onSubmit={handleSubmit}>
            <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="cf-name" style={labelStyle}>Name *</label>
                    <input id="cf-name" name="name" type="text" required style={inputStyle} placeholder="Parent or student name" />
                </div>
                <div>
                    <label htmlFor="cf-email" style={labelStyle}>Email *</label>
                    <input id="cf-email" name="email" type="email" required style={inputStyle} placeholder="you@example.com" />
                </div>
                <div>
                    <label htmlFor="cf-phone" style={labelStyle}>Phone</label>
                    <input id="cf-phone" name="phone" type="tel" style={inputStyle} placeholder="Optional" />
                </div>
                <div>
                    <label htmlFor="cf-grade" style={labelStyle}>Student Grade</label>
                    <select id="cf-grade" name="grade" style={{ ...inputStyle, appearance: "auto" }} defaultValue="">
                        <option value="" disabled>Select a grade</option>
                        {GRADES.map((g) => (
                            <option key={g} value={g}>{g}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="mt-5">
                <label htmlFor="cf-message" style={labelStyle}>What would you like to discuss?</label>
                <textarea id="cf-message" name="message" rows={compact ? 3 : 4} style={{ ...inputStyle, resize: "vertical" }} placeholder="A brief note about your child and your goals." />
            </div>

            {status === "error" && (
                <p data-testid="consultation-error" className="font-mono mt-5" style={{ fontSize: 12, color: "#b00020", letterSpacing: "0.02em" }}>
                    {errorMsg}
                </p>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-6">
                <button type="submit" data-testid="consultation-submit" className="btn-primary" disabled={status === "submitting"} style={status === "submitting" ? { opacity: 0.6, cursor: "wait" } : undefined}>
                    {status === "submitting" ? "Sending…" : "Send Request"}
                    {status !== "submitting" && <span style={{ fontFamily: "serif", marginLeft: 4 }}>→</span>}
                </button>
                <p className="font-mono" style={{ fontSize: 11, color: "var(--steel)", lineHeight: 1.6, letterSpacing: "0.04em" }}>
                    No sales pitch. We respond within 24 hours.
                </p>
            </div>
        </form>
    );
}
