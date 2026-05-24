import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function Contact() {
    return (
        <main data-testid="page-contact" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow="§ Begin · Contact"
                title="We would love to meet"
                italicWord="your family."
                subtitle="The first conversation is always diagnostic, never a sales call. We respond within 24 hours to find a time that works."
                breadcrumb={[{ label: "Contact" }]}
            />

            {/* Three ways to reach */}
            <section className="section-x section-y" style={{ background: "var(--paper)" }}>
                <p className="eyebrow mb-10">Three Ways to Reach Us</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ borderTop: "2px solid var(--navy)" }}>
                    {[
                        {
                            n: "I",
                            label: "By Email",
                            primary: "info@supernovaedu.com",
                            href: "mailto:info@supernovaedu.com",
                            note: "Best for detailed inquiries. Include your child's grade and a brief note about what you'd like to discuss.",
                        },
                        {
                            n: "II",
                            label: "By Phone",
                            primary: "+1 (908) 758 · 3488",
                            href: "tel:+19087583488",
                            note: "Best for time-sensitive questions. Mon–Sat, 9am–7pm ET. We return missed calls within the business day.",
                        },
                        {
                            n: "III",
                            label: "By WeChat",
                            primary: "supernova-seed",
                            href: "#",
                            note: "Best for families based outside the U.S. or who prefer messaging. We respond in English and Mandarin.",
                        },
                    ].map((c, i) => (
                        <article
                            key={c.label}
                            data-testid={`contact-method-${i}`}
                            className="p-10 lg:p-12"
                            style={{
                                background: i === 1 ? "var(--mist)" : "var(--paper)",
                                borderRight: i < 2 ? "1px solid var(--line)" : "none",
                                borderBottom: "1px solid var(--line)",
                            }}
                        >
                            <div className="flex items-start justify-between mb-8">
                                <span className="font-display" style={{ fontSize: 56, lineHeight: 0.85, color: "var(--orange)", fontWeight: 600 }}>{c.n}</span>
                                <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)", marginTop: 10 }}>
                                    {c.label}
                                </span>
                            </div>
                            <a
                                href={c.href}
                                data-testid={`contact-link-${i}`}
                                className="link-underline font-display"
                                style={{ fontSize: "clamp(20px, 1.8vw, 26px)", color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}
                            >
                                {c.primary}
                            </a>
                            <p className="font-serif mt-6" style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}>
                                {c.note}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Studio + What happens next */}
            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <div className="grid grid-cols-12 gap-x-10 gap-y-14">
                    <div className="col-span-12 lg:col-span-5">
                        <p className="eyebrow mb-5">The Studio</p>
                        <h2
                            className="font-display"
                            style={{
                                fontSize: "clamp(32px, 3.6vw, 52px)",
                                lineHeight: 1.05,
                                letterSpacing: "-0.02em",
                                fontWeight: 500,
                                color: "var(--navy)",
                            }}
                        >
                            Livingston, New Jersey.
                        </h2>
                        <div className="my-6" style={{ width: 48, height: 2, background: "var(--orange)" }} />
                        <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink)", maxWidth: 480 }}>
                            We meet families in-person at our Livingston studio for diagnostic
                            conversations and quarterly check-ins. The majority of ongoing coaching
                            happens online — Zoom, shared docs, recorded essay reviews.
                        </p>
                        <p className="font-mono mt-8" style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--steel)" }}>
                            Mon — Sat · By Appointment
                        </p>
                    </div>

                    <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                        <p className="eyebrow mb-5">What Happens Next</p>
                        <h3
                            className="font-display"
                            style={{
                                fontSize: "clamp(28px, 2.6vw, 36px)",
                                lineHeight: 1.1,
                                fontWeight: 500,
                                color: "var(--navy)",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            From inquiry to first meeting.
                        </h3>

                        <ol className="mt-10 space-y-8" style={{ borderTop: "1px solid var(--line)", paddingTop: 32 }}>
                            {[
                                { n: "01", t: "You reach out", b: "Email, phone, or WeChat. Include your child's grade and what you'd like to discuss." },
                                { n: "02", t: "We respond within 24 hours", b: "A brief reply with two or three time options for an introductory call." },
                                { n: "03", t: "Diagnostic conversation (45 min)", b: "Free, no sales pitch. You'll leave having learned something about your child you didn't know before." },
                                { n: "04", t: "Engagement decision", b: "If we're a fit, we'll send a written proposal. If we're not, we'll recommend who is." },
                            ].map((s) => (
                                <li key={s.n} className="grid grid-cols-12 gap-4">
                                    <span className="col-span-2 font-mono tabular" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--orange)", fontWeight: 500 }}>
                                        {s.n}
                                    </span>
                                    <div className="col-span-10">
                                        <p className="font-display" style={{ fontSize: 18, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.005em" }}>
                                            {s.t}
                                        </p>
                                        <p className="font-serif mt-1" style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}>
                                            {s.b}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
