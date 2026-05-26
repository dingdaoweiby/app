import { Link } from "react-router-dom";

export default function ClosingCTA() {
    return (
        <section
            data-testid="closing-cta"
            id="contact"
            className="section-x section-y rule-bottom"
            style={{ background: "var(--paper)" }}
        >
            <div className="grid grid-cols-12 gap-x-10 items-end">
                <div className="col-span-12 lg:col-span-8">
                    <h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(28px, 3.4vw, 52px)",
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                            fontWeight: 500,
                            color: "var(--navy)",
                        }}
                    >
                        Start with a diagnostic conversation.
                    </h2>
                </div>
                <div className="col-span-12 lg:col-span-4 mt-10 lg:mt-0">
                    <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink)" }}>
                        No sales pitch. Just a real conversation. You'll leave having learned something about your child you didn't know before.
                    </p>
                    <Link to="/contact" className="btn-primary mt-8" data-testid="closing-cta-btn">
                        Begin the conversation. Response within 24 hours.
                        <span style={{ fontFamily: "serif", marginLeft: 6 }}>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
