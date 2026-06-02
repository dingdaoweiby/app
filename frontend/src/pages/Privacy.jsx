import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const SECTIONS = [
    {
        n: "01",
        t: "Who we are",
        body: [
            "Supernova Elite Education Destination LLC (\"Supernova,\" \"we,\" \"us,\" or \"our\") is an educational consulting firm based in Livingston, New Jersey. This Privacy Policy explains how we collect, use, and protect personal information when you visit our website, request a consultation, or engage our services.",
            "We are the controller of the personal information we collect from families and students. If you have any questions about this policy or our handling of your data, contact us at info@supernovaedu.com.",
        ],
    },
    {
        n: "02",
        t: "Information we collect",
        body: [
            "We collect information you give to us directly — for example, when you complete the \"Schedule a Consultation\" form, sign an Engagement Letter, share a transcript or résumé, or correspond with us by email, phone, or WeChat. This may include the student's name, date of birth, country, school, grade, academic records, test scores, activities, essays, family background, financial-aid context, and visa-related documents.",
            "We collect basic technical information automatically when you visit the website — for example, the device and browser you use, pages viewed, referral source, and approximate location derived from your IP address. We use this information to keep the site secure and to understand how it is used.",
            "We do not knowingly collect more than what is reasonably needed for the services you ask us to provide.",
        ],
    },
    {
        n: "03",
        t: "How we use information",
        body: [
            "We use the information we collect to deliver and improve our services: to respond to your inquiry, conduct a diagnostic conversation, prepare a proposal, build the student's strategy, support applications and visa coordination, communicate with you and (with consent) with schools, and to issue invoices and keep accurate records.",
            "We may also use information to operate, secure, and improve the website; to comply with legal, tax, and accounting obligations; and to defend our legal interests where necessary.",
            "We will only contact you with marketing or newsletter content if you have explicitly opted in. You can opt out at any time by replying to any such email or contacting us directly.",
        ],
    },
    {
        n: "04",
        t: "Children and minors",
        body: [
            "Many of our students are under 18. We collect a minor's information only with the involvement and consent of a parent or legal guardian. Parents can review the information we hold about their child, ask us to correct it, or request deletion (subject to legal and contractual record-keeping obligations) by writing to info@supernovaedu.com.",
            "Our website is intended for parents, guardians, and prospective adult students. We do not knowingly market to children under 13.",
        ],
    },
    {
        n: "05",
        t: "How we share information",
        body: [
            "We do not sell personal information. We share information only as needed to deliver the services you have asked us to provide, namely:",
            "• With schools, universities, scholarship programs, testing services, and visa authorities — at your direction, to support an application or required submission;",
            "• With trusted service providers who help us operate (for example, email hosting, secure document storage, payment processing, customer-relationship tools), under contractual confidentiality obligations;",
            "• With professional advisors (accountants, lawyers) where required;",
            "• Where required by law, court order, or regulator, or to protect the rights, property, or safety of Supernova, our clients, or others.",
        ],
    },
    {
        n: "06",
        t: "International transfers",
        body: [
            "Because we serve families globally and use cloud-based tools, your information may be processed in countries other than the one in which you live, including the United States. Where applicable, we use appropriate safeguards (such as standard contractual clauses) to protect your information when it is transferred internationally.",
        ],
    },
    {
        n: "07",
        t: "How long we keep information",
        body: [
            "We keep personal information for as long as we have an active relationship with your family, and for a reasonable period afterward to support alumni contact, address questions, defend legal claims, and meet our tax and accounting obligations. Visa-related and minor-related records may be retained for longer where required by law.",
            "When personal information is no longer needed, it is securely deleted or anonymized.",
        ],
    },
    {
        n: "08",
        t: "Your rights",
        body: [
            "Depending on where you live, you may have the right to access the personal information we hold about you, to correct it, to ask us to delete it, to restrict or object to certain processing, to withdraw consent, and to request a portable copy.",
            "To exercise any of these rights, write to info@supernovaedu.com from the email address we have on file. We will respond within a reasonable period and may need to verify your identity before acting on a request. You also have the right to lodge a complaint with the data-protection authority in your country.",
        ],
    },
    {
        n: "09",
        t: "Cookies and analytics",
        body: [
            "Our website uses a small number of cookies and similar technologies to keep the site secure, remember basic preferences, and understand aggregate site usage. We do not use cookies to build advertising profiles.",
            "You can disable cookies in your browser settings; some parts of the site may not function correctly without them.",
        ],
    },
    {
        n: "10",
        t: "Security",
        body: [
            "We use reasonable administrative, technical, and physical safeguards designed to protect personal information against loss, misuse, and unauthorized access — including access controls, encrypted document storage, and staff confidentiality obligations. No method of transmission or storage is perfectly secure, and we cannot guarantee absolute security.",
            "If we become aware of a breach affecting your personal information, we will notify you and, where required, the relevant authorities promptly.",
        ],
    },
    {
        n: "11",
        t: "Changes to this policy",
        body: [
            "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or applicable law. The current version is always posted on this page with an updated \"Last revised\" date. If we make material changes, we will highlight them at the top of the page or notify active clients by email.",
        ],
    },
    {
        n: "12",
        t: "Contact",
        body: [
            "Questions or requests about this Privacy Policy can be sent to:",
            "Supernova Elite Education Destination LLC · Livingston, New Jersey 07039 · info@supernovaedu.com · +1 (908) 758 · 3488",
        ],
    },
];

export default function Privacy() {
    return (
        <main data-testid="page-privacy" className="min-h-screen">
            <Nav />

            <PageHeader
                eyebrow="Legal"
                title="Privacy"
                italicWord="Policy."
                subtitle="How we collect, use, and protect the information you share with us."
                breadcrumb={[{ label: "Privacy" }]}
                background="var(--paper)"
            />

            <section className="section-x section-y" style={{ background: "var(--mist)" }}>
                <p
                    className="font-mono"
                    style={{ fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500, marginBottom: 8 }}
                >
                    Last revised · February 2026
                </p>
                <p className="font-serif" style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink)", maxWidth: 880 }}>
                    Families share sensitive information with us — transcripts, essays, financial context, visa documents. We take that
                    responsibility seriously. This policy describes, in plain language, what we collect, why, and the choices you have.
                </p>

                <div className="mt-12 space-y-10">
                    {SECTIONS.map((s) => (
                        <article
                            key={s.n}
                            data-testid={`privacy-section-${s.n}`}
                            className="p-7 lg:p-9"
                            style={{ background: "var(--paper)", border: "1px solid var(--line)" }}
                        >
                            <div className="flex items-baseline gap-5">
                                <span
                                    className="font-display"
                                    style={{ fontSize: 28, color: "var(--orange)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1 }}
                                >
                                    {s.n}
                                </span>
                                <h2
                                    className="font-display"
                                    style={{ fontSize: 23, lineHeight: 1.2, color: "var(--navy)", fontWeight: 600, letterSpacing: "-0.01em" }}
                                >
                                    {s.t}
                                </h2>
                            </div>
                            <div className="my-5" style={{ width: 36, height: 2, background: "var(--orange)" }} />
                            <div className="space-y-4">
                                {s.body.map((p, i) => (
                                    <p key={i} className="font-serif" style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink)" }}>
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
