import { useEffect } from "react";
import ConsultationForm from "@/components/ConsultationForm";

export default function ConsultationModal({ open, onClose }) {
    useEffect(() => {
        if (!open) return undefined;
        const onKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            data-testid="consultation-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Schedule a consultation"
            onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 100,
                background: "rgba(15,26,48,0.55)",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                overflowY: "auto",
                padding: "clamp(16px, 5vh, 64px) 16px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: 720,
                    background: "var(--paper)",
                    border: "1px solid var(--line)",
                    boxShadow: "0 24px 60px rgba(15,26,48,0.28)",
                }}
            >
                <div className="flex items-start justify-between" style={{ padding: "24px 28px", borderBottom: "1px solid var(--line)", background: "var(--mist)" }}>
                    <div>
                        <p className="font-mono" style={{ fontSize: 10.5, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                            Schedule a Consultation
                        </p>
                        <h2 className="font-display mt-2" style={{ fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: 1.1, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.01em" }}>
                            Start with a diagnostic conversation.
                        </h2>
                    </div>
                    <button
                        type="button"
                        data-testid="consultation-modal-close"
                        onClick={onClose}
                        aria-label="Close"
                        style={{
                            background: "transparent",
                            border: "1px solid var(--line)",
                            color: "var(--steel)",
                            width: 36,
                            height: 36,
                            fontSize: 18,
                            lineHeight: 1,
                            cursor: "pointer",
                            flexShrink: 0,
                            marginLeft: 16,
                        }}
                    >
                        ×
                    </button>
                </div>

                <div style={{ padding: "28px" }}>
                    <ConsultationForm compact onSuccess={() => {}} />
                </div>
            </div>
        </div>
    );
}
