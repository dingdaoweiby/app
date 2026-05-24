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
                    <p className="eyebrow">§ V · Begin</p>
                    <h2
                        className="font-display mt-6"
                        style={{
                            fontSize: "clamp(44px, 6.4vw, 104px)",
                            lineHeight: 0.98,
                            letterSpacing: "-0.025em",
                            fontWeight: 500,
                            color: "var(--navy)",
                        }}
                    >
                        Start with a diagnostic<br />conversation.
                    </h2>
                </div>
                <div className="col-span-12 lg:col-span-4 mt-10 lg:mt-0">
                    <p className="font-serif" style={{ fontSize: 18, lineHeight: 1.55, color: "var(--ink)" }}>
                        No sales pitch. Just a real conversation. You'll leave having learned something about your child you didn't know before.
                    </p>
                    <a href="mailto:info@supernovaedu.com" className="btn-primary mt-10" data-testid="closing-cta-btn">
                        Begin the Conversation
                        <span style={{ fontFamily: "serif", marginLeft: 6 }}>→</span>
                    </a>
                    <p className="font-mono mt-6" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--steel)" }}>
                        Response within 24 hours · Livingston, NJ
                    </p>
                </div>
            </div>
        </section>
    );
}
