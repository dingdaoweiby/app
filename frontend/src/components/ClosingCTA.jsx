export default function ClosingCTA() {
    return (
        <section
            data-testid="closing-cta"
            id="contact"
            className="section-x section-y rule-bottom"
        >
            <div className="grid grid-cols-12 gap-x-8 items-end">
                <div className="col-span-12 lg:col-span-9">
                    <p className="eyebrow">Begin · 开始</p>
                    <h2
                        className="font-serif mt-6"
                        style={{
                            fontSize: "clamp(42px, 6vw, 96px)",
                            lineHeight: 0.98,
                            letterSpacing: "-0.025em",
                            fontWeight: 400,
                            color: "var(--ink)",
                        }}
                    >
                        Start with a
                        <br />
                        <em style={{ fontStyle: "italic", color: "var(--crimson)", fontWeight: 500 }}>
                            diagnostic conversation.
                        </em>
                    </h2>
                    <p className="font-sc mt-6" style={{ fontSize: 22, color: "var(--graphite)" }}>
                        从一次诊断式对话开始。
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-3 mt-10 lg:mt-0">
                    <p className="font-serif italic" style={{ fontSize: 18, lineHeight: 1.55, color: "var(--ink)" }}>
                        No sales pitch. Just a real conversation. You'll leave having learned something about your child you didn't know before.
                    </p>
                    <p className="font-sc mt-3" style={{ fontSize: 14, color: "var(--graphite)" }}>
                        不做销售。一次真实的交谈。
                    </p>
                    <a href="mailto:info@supernovaedu.com" className="btn-primary mt-8" data-testid="closing-cta-btn">
                        Begin the Conversation
                        <span style={{ fontFamily: "serif", marginLeft: 4 }}>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
