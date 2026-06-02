import { useLang } from "@/i18n/LanguageContext";

export default function LanguageToggle({ variant = "footer" }) {
    const { lang, setLang } = useLang();

    const base = {
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        fontWeight: 500,
        padding: "8px 14px",
        background: "transparent",
        border: "1px solid rgba(255,255,255,0.32)",
        cursor: "pointer",
        transition: "all 200ms ease",
    };

    const active = {
        background: "var(--orange)",
        borderColor: "var(--orange)",
        color: "#fff",
    };

    const idle = {
        color: "rgba(255,255,255,0.7)",
    };

    return (
        <div
            data-testid="language-toggle"
            role="group"
            aria-label="Language"
            className="inline-flex"
            style={{ gap: 0 }}
        >
            <button
                type="button"
                data-testid="lang-en"
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
                style={{ ...base, ...(lang === "en" ? active : idle), borderRight: "none" }}
                onMouseEnter={(e) => { if (lang !== "en") e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { if (lang !== "en") e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
            >
                EN
            </button>
            <button
                type="button"
                data-testid="lang-zh"
                aria-pressed={lang === "zh"}
                onClick={() => setLang("zh")}
                style={{ ...base, ...(lang === "zh" ? active : idle) }}
                onMouseEnter={(e) => { if (lang !== "zh") e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { if (lang !== "zh") e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
            >
                中文
            </button>
        </div>
    );
}
