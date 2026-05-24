import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";
import ProgramSection from "@/components/ProgramSection";

const IMG_VISA  = "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1200&q=85&auto=format&fit=crop";
const IMG_HOME  = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=85&auto=format&fit=crop";
const IMG_GUARD = "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&q=85&auto=format&fit=crop";

export default function International() {
    return (
        <main data-testid="page-international" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow="§ Program · International Families"
                title="Coming to America,"
                italicWord="prepared."
                subtitle="For international families placing children in U.S. private schools or universities, the application is only half the work. The other half is everything that happens after the offer arrives — visas, housing, guardianship, and a soft landing."
                breadcrumb={[{ label: "International" }]}
            />

            <section className="section-x" style={{ paddingTop: "clamp(64px, 7vw, 110px)", paddingBottom: "clamp(40px, 5vw, 80px)", background: "var(--paper)" }}>
                <div className="grid grid-cols-12 gap-x-10 gap-y-10">
                    <div className="col-span-12 lg:col-span-8">
                        <p className="eyebrow mb-5">For Families Outside the U.S.</p>
                        <p className="font-serif" style={{ fontSize: "clamp(19px, 1.55vw, 24px)", lineHeight: 1.55, color: "var(--ink)" }}>
                            We work with families from East Asia, Southeast Asia, the Middle East, and Latin
                            America. Some are bringing children to U.S. boarding school as early as eighth
                            grade; some are placing university students. Across all of them, the operational
                            details — visa, residency, daily life — matter as much as the academic placement.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="rule-left pl-6" style={{ borderLeftWidth: 2, borderLeftColor: "var(--orange)" }}>
                            <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                Languages Spoken
                            </p>
                            <p className="font-display mt-3" style={{ fontSize: 17, lineHeight: 1.5, color: "var(--navy)", fontWeight: 500 }}>
                                English · Mandarin · Cantonese · Spanish · Arabic (via partners)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ProgramSection
                index={1}
                eyebrow="Service I"
                title="Visa Support"
                body="F-1 student visas, J-1 exchange visas, and the I-20 process require precise documentation and timing. We coordinate with school international offices, prepare families for embassy interviews, and walk parents through every form. We do not provide legal counsel — we work alongside immigration attorneys when complex cases require it."
                bullets={[
                    "I-20 issuance coordination with admitting institution.",
                    "DS-160 preparation and embassy interview readiness sessions.",
                    "Financial documentation strategy — bank letters, sponsor affidavits.",
                    "Referral to vetted immigration attorneys for complex cases.",
                ]}
                deliverable="Visa-Ready Family · Embassy Interview Preparation"
                image={IMG_VISA}
                imageCaption="Plate I-I — The Documents"
            />

            <ProgramSection
                index={2}
                eyebrow="Service II"
                title="Homestay Placement"
                body="For day-school students whose families remain abroad, finding the right host family is the single most important decision after school selection. We work with a hand-vetted network of homestay families in the New York metro area, Boston, and select California regions. Every placement is built around the student's age, school, and family preferences."
                bullets={[
                    "Vetted homestay families — background-checked, interviewed, and visited in person.",
                    "Match based on student age, gender, dietary needs, and school proximity.",
                    "Quarterly check-ins with student, host family, and biological parents.",
                    "Backup placement available if the original match is not working.",
                ]}
                deliverable="Confirmed Homestay · Ongoing Family Liaison"
                image={IMG_HOME}
                imageCaption="Plate I-II — A Second Home"
                reverse
            />

            <ProgramSection
                index={3}
                eyebrow="Service III"
                title="Educational Guardianship"
                body="Boarding schools require an in-country educational guardian for international students under eighteen. We provide formal guardianship services — emergency contact, school liaison, holiday transport, weekend accommodation, and the soft work of being someone an adolescent can call when they need an adult. This is the role most international families underestimate, and it matters more than any other."
                bullets={[
                    "Legal educational guardian status with the student's school.",
                    "24-hour emergency contact for medical, academic, or personal situations.",
                    "Holiday transport and weekend accommodation when school is closed.",
                    "Quarterly written reports to biological parents on academic and personal wellbeing.",
                ]}
                deliverable="Legal Guardianship · Ongoing Adolescent Support"
                image={IMG_GUARD}
                imageCaption="Plate I-III — The Phone Call"
            />

            <PageCTA
                title="Everything that happens after the offer arrives."
                note="For international families, the work of getting your child to America is often more complicated than the application itself. We have done this for many families before yours."
            />
            <Footer />
        </main>
    );
}
