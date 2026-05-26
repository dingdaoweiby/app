import { Link } from "react-router-dom";

export default function ClosingCTA() {
    return (
        <section
            data-testid="closing-cta"
            id="contact"
            className="section-x section-y"
            style={{ background: "var(--mist)", borderTop: "1px solid var(--line)" }}
        >
            <div className="max-w-3xl mx-auto text-center">
                <p className="eyebrow" style={{ color: "var(--orange)" }}>Begin</p>

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
                    Start with a diagnostic conversation.
                </h2>

                <p
                    className="font-serif mt-6 mx-auto"
                    style={{
                        fontSize: 17,
                        lineHeight: 1.6,
                        color: "var(--ink)",
                        fontStyle: "italic",
                        maxWidth: 560,
                    }}
                >
                    No sales pitch. Just a real conversation. You'll leave having learned something about your child you didn't know before.
                </p>

                <div className="mt-10 inline-flex flex-col items-center gap-3">
                    <Link
                        to="/contact"
                        data-testid="closing-cta-btn"
                        className="btn-primary"
                        style={{ padding: "16px 32px" }}
                    >
                        Begin the Conversation
                        <span style={{ fontFamily: "serif", marginLeft: 6 }}>→</span>
                    </Link>
                    <p
                        className="font-mono"
                        style={{
                            fontSize: 11,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "var(--steel)",
                        }}
                    >
                        Response within 24 hours
                    </p>
                </div>
            </div>
        </section>
    );
}
