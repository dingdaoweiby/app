import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 480);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <button
            type="button"
            data-testid="back-to-top"
            aria-label="Back to top"
            onClick={scrollTop}
            style={{
                position: "fixed",
                right: "max(clamp(20px, 4vw, 40px), calc((100vw - 1200px) / 2 + 8px))",
                bottom: "28vh",
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "var(--navy)",
                color: "#fff",
                border: "1px solid var(--navy)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? "auto" : "none",
                transform: visible ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 220ms ease, transform 220ms ease, background-color 200ms ease",
                boxShadow: "0 6px 20px rgba(15,26,48,0.28)",
                zIndex: 60,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.borderColor = "var(--orange)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--navy)"; e.currentTarget.style.borderColor = "var(--navy)"; }}
        >
            <ArrowUp size={20} strokeWidth={1.75} />
        </button>
    );
}
