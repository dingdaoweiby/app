import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";
import ProgramSection from "@/components/ProgramSection";

const IMG_PREP    = "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=85&auto=format&fit=crop";
const IMG_PRIVATE = "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=85&auto=format&fit=crop";

export default function K12() {
    return (
        <main data-testid="page-k12" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow="§ Program · K–12 Admissions"
                title="Foundation years,"
                italicWord="built with intention."
                subtitle="Long before the college process begins, the right school and the right rhythm shape who a student becomes. We work with families from elementary through eighth grade — and through the private school admissions cycle."
                breadcrumb={[{ label: "K–12" }]}
            />

            <section className="section-x" style={{ paddingTop: "clamp(64px, 7vw, 110px)", paddingBottom: "clamp(40px, 5vw, 80px)", background: "var(--paper)" }}>
                <div className="grid grid-cols-12 gap-x-10 gap-y-10">
                    <div className="col-span-12 lg:col-span-8">
                        <p className="eyebrow mb-5">Overview</p>
                        <p className="font-serif" style={{ fontSize: "clamp(19px, 1.55vw, 24px)", lineHeight: 1.55, color: "var(--ink)" }}>
                            Two distinct paths — test preparation and private school placement — that often
                            run in parallel. We help families navigate both with the same depth of attention
                            we bring to college admissions.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="rule-left pl-6" style={{ borderLeftWidth: 2, borderLeftColor: "var(--orange)" }}>
                            <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                Recent K–12 Admits
                            </p>
                            <p className="font-display mt-3" style={{ fontSize: 17, lineHeight: 1.5, color: "var(--navy)", fontWeight: 500 }}>
                                Phillips Exeter · Lawrenceville · Deerfield · Groton · Horace Mann · Dalton · Newark Academy · Pingry · Harvard-Westlake
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ProgramSection
                index={1}
                eyebrow="K–12 · Service One"
                title="ISEE & SSAT Preparation"
                body="Standardized testing is the threshold to nearly every private school worth applying to — and the difference between a strong score and an exceptional one is rarely about intelligence. It's about strategy, pacing, and the specific habits of mind each test rewards. We pair students with veteran tutors and build a preparation plan around their actual diagnostic, not a generic curriculum."
                bullets={[
                    "Diagnostic assessment to identify exact strengths, gaps, and target percentile.",
                    "Weekly 1-on-1 tutoring with section specialists (Verbal · Quantitative · Reading · Essay).",
                    "Full-length proctored practice tests with section-by-section debriefs.",
                    "Test-day strategy and anxiety management — students walk in confident, not nervous.",
                ]}
                deliverable="Score Improvement of 8–15 Percentile Points · Average"
                image={IMG_PREP}
                imageCaption="Plate K-I — The Study Carrel"
            />

            <ProgramSection
                index={2}
                eyebrow="K–12 · Service Two"
                title="Private School Admissions"
                body="Top-tier day and boarding schools — Phillips Exeter, Lawrenceville, Dalton, Horace Mann — admit fewer students than many Ivy League colleges. The application asks a student to be self-aware at thirteen in ways most adults still struggle with. Our work is to find what is real and interesting about each child, and help them say it clearly."
                bullets={[
                    "School list strategy — day vs. boarding, single-sex vs. coed, fit and financial aid realities.",
                    "Application narrative — student essays, parent statements, teacher recommendation guidance.",
                    "Interview preparation — mock interviews with feedback recorded and reviewed.",
                    "Decision support — comparing offers, financial aid letters, and post-acceptance steps.",
                ]}
                deliverable="School List · Application Portfolio · Final Offer"
                image={IMG_PRIVATE}
                imageCaption="Plate K-II — Reading Room"
                reverse
            />

            <PageCTA
                title="The right school changes everything."
                note="K–12 placement is rarely about prestige — it's about finding the environment where your child becomes the person they're capable of becoming. Begin with a conversation."
            />
            <Footer />
        </main>
    );
}
