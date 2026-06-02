import { useLang } from "@/i18n/LanguageContext";

export default function LanguageToggle() {
    const { lang, setLang } = useLang();
    const next = lang === "en" ? "zh" : "en";
    const label = lang === "en" ? "中文" : "English";

    return (
        <button
            type="button"
            data-testid="language-toggle"
            aria-label={`Switch to ${label}`}
            onClick={() => setLang(next)}
            className="inline-flex items-center"
            style={{
                background: "transparent",
                color: "#fff",
                fontFamily: "'Source Serif Pro', Georgia, serif",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "-0.005em",
                padding: "12px 26px",
                border: "1px solid #fff",
                cursor: "pointer",
                transition: "background-color 220ms ease, color 220ms ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "var(--navy)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
        >
            {label}
        </button>
    );
}
