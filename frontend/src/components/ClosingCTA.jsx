import { Link } from "react-router-dom";
import { useT } from "@/i18n/LanguageContext";

export default function ClosingCTA() {
    const t = useT();
    const c = t.closingCta;
    return (
        <section
            data-testid="closing-cta"
            id="contact"
            className="section-x section-y"
            style={{ background: "var(--mist)", borderTop: "1px solid var(--line)" }}
        >
            <div className="max-w-3xl mx-auto text-center">
                <p className="eyebrow" style={{ color: "var(--orange)" }}>{c.eyebrow}</p>

                <h2
                    className="font-display mt-6"
                    style={{
                        fontSize: "clamp(28px, 3vw, 44px)",
                        lineHeight: 1.15,
                        letterSpacing: "-0.015em",
                        fontWeight: 500,
                        color: "var(--navy)",
                    }}
                >
                    {c.title}
                </h2>

                <p
                    className="font-serif mt-6 mx-auto"
                    style={{
                        fontSize: 17,
                        lineHeight: 1.6,
                        color: "var(--ink)",
                        fontStyle: "italic",
                        maxWidth: 640,
                    }}
                >
                    {c.sub1}
                    <br />
                    {c.sub2}
                </p>

                <div className="mt-10 inline-flex flex-col items-center gap-3">
                    <Link
                        to="/contact"
                        data-testid="closing-cta-btn"
                        className="btn-primary"
                        style={{ padding: "16px 32px" }}
                    >
                        {c.button}
                        <span style={{ fontFamily: "serif", marginLeft: 6 }}>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
