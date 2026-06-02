import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const SECTIONS = [
    {
        n: "01",
        t: "Acceptance of these Terms",
        body: [
            "These Terms and Conditions (the \"Terms\") govern your access to and use of the website, services, and educational consulting programs offered by Supernova Elite Education Destination LLC (\"Supernova,\" \"we,\" \"us,\" or \"our\"). By browsing this site, requesting a consultation, or enrolling in any of our programs, you agree to be bound by these Terms.",
            "If you are entering into these Terms on behalf of a minor (a student under 18), you represent that you are the parent or legal guardian, that you have read these Terms, and that you accept them on the minor's behalf.",
            "If you do not agree with any part of these Terms, please do not use our website or services.",
        ],
    },
    {
        n: "02",
        t: "Our Services",
        body: [
            "Supernova provides educational consulting and mentorship services, including K–12 private school admissions support, 9–11th grade strategic planning, college admissions consulting, graduate admissions advising, research mentorship, and international student support (visa coordination, homestay, and guardianship).",
            "Our services are advisory in nature. We help students and families navigate complex admissions processes, refine applications, and present their strongest authentic selves. We do not guarantee admission to any specific school, program, scholarship, visa, or outcome. Final admission and visa decisions are made solely by the respective institutions and government agencies.",
            "Specific deliverables, timelines, and fees for any engagement are described in a separate written proposal or service agreement signed by both parties (an \"Engagement Letter\"). In the event of a conflict between an Engagement Letter and these Terms, the Engagement Letter prevails for that engagement.",
        ],
    },
    {
        n: "03",
        t: "Eligibility and Family Responsibilities",
        body: [
            "You must provide accurate, current, and complete information about the student, family, academic record, and any other matter relevant to the services. Misrepresentation — including fabricated activities, ghostwritten essays submitted as the student's own work, or falsified transcripts — is grounds for immediate termination without refund.",
            "The student is expected to participate actively, complete assigned work in good faith, meet agreed deadlines, and own the final content of all submitted applications. Parents and guardians are expected to support the process and respect the consultant–student working relationship.",
        ],
    },
    {
        n: "04",
        t: "Fees, Payment, and Refunds",
        body: [
            "Fees are set out in your Engagement Letter and are payable on the schedule stated there. Unless otherwise specified, fees are quoted in U.S. dollars and do not include taxes, bank fees, or third-party costs (testing fees, application fees, travel, etc.).",
            "Because consulting time is reserved exclusively for your family from the moment an engagement begins, fees are generally non-refundable once work has commenced. Where a refund applies, it will be calculated pro rata based on services not yet delivered, as set out in your Engagement Letter.",
            "Late payments may result in a pause of services until the account is brought current. We reserve the right to terminate any engagement with unpaid balances.",
        ],
    },
    {
        n: "05",
        t: "Intellectual Property",
        body: [
            "All website content, frameworks, worksheets, curricula, internal essays, brainstorming materials, and methodologies developed by Supernova are the intellectual property of Supernova Elite Education Destination LLC and are protected by U.S. and international copyright laws.",
            "You receive a limited, non-transferable license to use materials we share with you solely for the personal educational purpose of the named student. You may not reproduce, redistribute, resell, or publish our materials — in whole or in part — without prior written consent.",
            "Final application essays and personal statements are the student's own work and remain the student's property.",
        ],
    },
    {
        n: "06",
        t: "Third-Party Services and Schools",
        body: [
            "Our website and services may reference or link to third-party institutions, testing services, visa authorities, or other providers. We do not control, endorse, or assume responsibility for any third party. Your dealings with third parties — including any payment, application, or correspondence — are solely between you and that party.",
            "Mentions of schools, universities, scholarships, or programs are for informational and reference purposes and do not imply any partnership, sponsorship, or endorsement.",
        ],
    },
    {
        n: "07",
        t: "Disclaimer of Warranties",
        body: [
            "Our services and this website are provided on an \"as is\" and \"as available\" basis. To the fullest extent permitted by law, Supernova disclaims all warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.",
            "We do not warrant that any specific admission outcome, scholarship, visa, or test score will be achieved, nor that the website will be uninterrupted, error-free, or free of harmful components.",
        ],
    },
    {
        n: "08",
        t: "Limitation of Liability",
        body: [
            "To the maximum extent permitted by law, Supernova, its officers, employees, consultants, and affiliates shall not be liable for any indirect, incidental, consequential, special, or punitive damages — including loss of admission, loss of scholarship, loss of opportunity, or emotional distress — arising out of or relating to your use of our website or services.",
            "Our aggregate liability for any direct damages, regardless of the form of action, shall not exceed the total fees paid by you to Supernova for the specific engagement giving rise to the claim during the twelve (12) months preceding the event.",
        ],
    },
    {
        n: "09",
        t: "Termination",
        body: [
            "Either party may terminate an engagement in writing, subject to the terms of the relevant Engagement Letter. We reserve the right to terminate immediately, without refund, in cases of misrepresentation, plagiarism, ghostwriting requests, harassment of staff, or any conduct that compromises the integrity of an application or the safety of our team.",
            "Termination does not relieve the family of fees owed for work already performed.",
        ],
    },
    {
        n: "10",
        t: "Governing Law and Disputes",
        body: [
            "These Terms are governed by the laws of the State of New Jersey, without regard to its conflict-of-laws principles. Any dispute arising out of or relating to these Terms or our services shall be resolved exclusively in the state or federal courts located in Essex County, New Jersey, and you consent to the personal jurisdiction of those courts.",
            "Before initiating any formal proceeding, you agree to attempt in good faith to resolve the dispute by contacting us at the address below and allowing thirty (30) days for response.",
        ],
    },
    {
        n: "11",
        t: "Changes to these Terms",
        body: [
            "We may update these Terms from time to time to reflect changes to our services, technology, or applicable law. The current version is always posted on this page with an updated \"Last revised\" date. Material changes will be highlighted at the top of the page or communicated to active clients by email.",
            "Your continued use of the website or services after a change becomes effective constitutes your acceptance of the revised Terms.",
        ],
    },
    {
        n: "12",
        t: "Contact",
        body: [
            "Questions about these Terms can be directed to:",
            "Supernova Elite Education Destination LLC · Livingston, New Jersey 07039 · info@supernovaedu.com · +1 (908) 758 · 3488",
        ],
    },
];

export default function Terms() {
    return (
        <main data-testid="page-terms" className="min-h-screen">
            <Nav />

            <PageHeader
                eyebrow="Legal"
                title="Terms and"
                italicWord="Conditions."
                subtitle="The agreement between your family and Supernova when you engage our services."
                breadcrumb={[{ label: "Terms" }]}
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
                    Please read these Terms carefully. They form a binding agreement between you (the parent, guardian, or adult student) and
                    Supernova Elite Education Destination LLC. Where you have signed an individual Engagement Letter for a specific service,
                    that letter sits alongside these Terms.
                </p>

                <div className="mt-12 space-y-10">
                    {SECTIONS.map((s) => (
                        <article
                            key={s.n}
                            data-testid={`terms-section-${s.n}`}
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
