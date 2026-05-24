import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";
import ProgramSection from "@/components/ProgramSection";

const IMG_R1 = "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=85&auto=format&fit=crop";
const IMG_R2 = "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1200&q=85&auto=format&fit=crop";

export default function Research() {
    return (
        <main data-testid="page-research" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow="§ Program · Research Mentorship"
                title="Original work,"
                italicWord="with a real mentor."
                subtitle="A serious research project — paired with the right mentor and pursued with discipline over twelve to eighteen months — is the single most powerful signal a high school student can send to elite admissions committees."
                breadcrumb={[{ label: "Research" }]}
            />

            <section className="section-x" style={{ paddingTop: "clamp(64px, 7vw, 110px)", paddingBottom: "clamp(40px, 5vw, 80px)", background: "var(--paper)" }}>
                <div className="grid grid-cols-12 gap-x-10 gap-y-10">
                    <div className="col-span-12 lg:col-span-8">
                        <p className="eyebrow mb-5">What Research Mentorship Is</p>
                        <p className="font-serif" style={{ fontSize: "clamp(19px, 1.55vw, 24px)", lineHeight: 1.55, color: "var(--ink)" }}>
                            We pair high school students with active researchers — graduate students, postdocs,
                            and faculty — across STEM, social science, and humanities. Together they design
                            and execute a real research project: literature review, methodology, data, and a
                            written output. Some produce a paper for publication. Some compete in Regeneron
                            STS or ISEF. All emerge with work that is unambiguously their own.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="rule-left pl-6" style={{ borderLeftWidth: 2, borderLeftColor: "var(--orange)" }}>
                            <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                Recent Outcomes
                            </p>
                            <p className="font-display mt-3" style={{ fontSize: 17, lineHeight: 1.5, color: "var(--navy)", fontWeight: 500 }}>
                                2× Regeneron STS Semifinalist · Publication in AJP · ISEF Finalist · Stanford Research Reviewer
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ProgramSection
                index={1}
                eyebrow="How It Works"
                title="The 12-Month Arc"
                body="Mentorship engagements run twelve to eighteen months — long enough to do real work, short enough to fit a high school student's life. Months one through three are exploratory: identifying a question worth asking and a mentor whose expertise matches. Months four through ten are execution. The final months are output — a paper, a presentation, a competition submission."
                bullets={[
                    "Mentor matching from a curated network of researchers at universities including MIT, Stanford, Columbia, Yale, and JHU.",
                    "Weekly check-ins with mentor; monthly check-ins with our team.",
                    "Methodology design and ethical review (IRB where applicable).",
                    "Final output — paper, conference submission, or competition entry.",
                ]}
                deliverable="Original Research Paper · Conference / Competition Submission"
                image={IMG_R1}
                imageCaption="Plate R-I — The Bench"
            />

            <ProgramSection
                index={2}
                eyebrow="Fields We Support"
                title="STEM · Social Science · Humanities"
                body="We don't push every student toward biomedical research. The strongest research projects come from a student's genuine curiosity — whether that's a question in molecular biology, behavioral economics, computer science, history of science, or political theory. We've placed students in labs and with faculty across every major field."
                bullets={[
                    "STEM — molecular biology, physics, computer science, applied mathematics, engineering.",
                    "Social Science — psychology, economics, public health, sociology, behavioral research.",
                    "Humanities — history of science, philosophy of mind, comparative literature, art history.",
                    "Interdisciplinary — when the question crosses fields, we find a mentor who can hold it.",
                ]}
                deliverable="Field-Matched Mentor · Real Research Question"
                image={IMG_R2}
                imageCaption="Plate R-II — Field Notes"
                reverse
            />

            <PageCTA
                title="Do real work. The application takes care of itself."
                note="Students who complete a serious research project don't have to invent application narratives — they already lived one. That difference is unmistakable to admissions committees at elite universities."
            />
            <Footer />
        </main>
    );
}
