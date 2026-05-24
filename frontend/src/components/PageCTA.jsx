import { Link } from "react-router-dom";

export default function PageCTA({ title = "Start with a diagnostic conversation.", note }) {
    return (
        <section
            data-testid="page-cta"
            className="section-x section-y"
            style={{ background: "var(--paper)" }}
        >
            <div className="grid grid-cols-12 gap-x-10 items-end">
                <div className="col-span-12 lg:col-span-8">
                    <p className="eyebrow">Begin · A Practice in Admissions Counsel</p>
                    <h2
                        className="font-display mt-6"
                        style={{
                            fontSize: "clamp(38px, 5.2vw, 80px)",
                            lineHeight: 1,
                            letterSpacing: "-0.025em",
                            fontWeight: 500,
                            color: "var(--navy)",
                        }}
                    >
                        {title}
                    </h2>
                </div>
                <div className="col-span-12 lg:col-span-4 mt-10 lg:mt-0">
                    <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink)" }}>
                        {note || "No sales pitch. Just a real conversation. You'll leave having learned something about your child you didn't know before."}
                    </p>
                    <Link to="/contact" className="btn-primary mt-8" data-testid="page-cta-btn">
                        Schedule a Conversation
                        <span style={{ fontFamily: "serif", marginLeft: 6 }}>→</span>
                    </Link>
                    <p className="font-mono mt-5" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--steel)" }}>
                        Response within 24 hours · Livingston, NJ
                    </p>
                </div>
            </div>
        </section>
    );
}
