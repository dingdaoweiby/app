import { ClipboardList, CalendarCheck, FileText, Target, Map, MessagesSquare } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const ICONS = [ClipboardList, CalendarCheck, FileText, Target, Map, MessagesSquare];

export default function AssessmentTools() {
    const t = useT();
    const a = t.home.assessment;
    return (
        <section
            data-testid="assessment-tools"
            id="methodology"
            className="section-x section-y"
            style={{ background: "var(--mist)" }}
        >
            <div className="mb-14">
                <div className="flex items-center gap-3">
                    <div style={{ width: 32, height: 1, background: "var(--orange)" }} />
                    <p className="font-mono" style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                        {a.eyebrow}
                    </p>
                </div>
                <h2
                    className="font-display mt-6"
                    style={{
                        fontSize: "clamp(32px, 3.4vw, 50px)",
                        lineHeight: 1.12,
                        letterSpacing: "-0.02em",
                        fontWeight: 500,
                        color: "var(--navy)",
                        maxWidth: 880,
                    }}
                >
                    {a.titlePre} <em style={{ fontStyle: "italic", color: "var(--orange)", fontWeight: 500 }}>{a.titleItalic}</em>{a.titlePost}
                </h2>
                <div className="mt-8" style={{ width: 56, height: 2, background: "var(--navy)" }} />
                <p className="font-serif italic mt-6" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--steel)", maxWidth: 620 }}>
                    {a.subtitle}
                </p>
                <p className="font-mono mt-5" style={{ fontSize: 10.5, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--steel)", fontWeight: 500 }}>
                    {a.footnote}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0" style={{ borderTop: "2px solid var(--navy)" }}>
                {a.items.map((item, i) => {
                    const Icon = ICONS[i];
                    return (
                        <article
                            key={i}
                            data-testid={`tool-${i}`}
                            className="p-6 lg:p-7"
                            style={{
                                background: "var(--paper)",
                                borderRight: (i % 3) !== 2 ? "1px solid var(--line)" : "none",
                                borderBottom: "1px solid var(--line)",
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex items-center justify-center"
                                    style={{
                                        width: 52,
                                        height: 52,
                                        background: "var(--mist)",
                                        border: "1px solid var(--line)",
                                        color: "var(--orange)",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Icon size={28} strokeWidth={1.75} />
                                </div>
                                <h3
                                    className="font-display"
                                    style={{
                                        fontSize: 18,
                                        lineHeight: 1.2,
                                        color: "var(--navy)",
                                        fontWeight: 600,
                                        letterSpacing: "-0.005em",
                                    }}
                                >
                                    {item.title}
                                </h3>
                            </div>
                            <div className="my-4" style={{ width: 24, height: 2, background: "var(--orange)" }} />
                            <p className="font-serif" style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)" }}>
                                {item.body}
                            </p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
