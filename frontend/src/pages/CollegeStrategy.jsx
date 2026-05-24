import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";
import ProgramSection from "@/components/ProgramSection";

const IMG_COURSE = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=85&auto=format&fit=crop";
const IMG_EC     = "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=85&auto=format&fit=crop";
const IMG_SUMMER = "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1200&q=85&auto=format&fit=crop";

export default function CollegeStrategy() {
    return (
        <main data-testid="page-college-strategy" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow="§ Program · College — 9th to 11th Grade"
                title="Strategy"
                italicWord="before the application."
                subtitle="The strongest college applications are not written senior year — they're lived from ninth grade onward. Three years of deliberate course selection, activity development, and narrative direction."
                breadcrumb={[{ label: "College", to: "/college/strategic-planning" }, { label: "Strategic Planning" }]}
            />

            <section className="section-x" style={{ paddingTop: "clamp(64px, 7vw, 110px)", paddingBottom: "clamp(40px, 5vw, 80px)", background: "var(--paper)" }}>
                <div className="grid grid-cols-12 gap-x-10 gap-y-10">
                    <div className="col-span-12 lg:col-span-8">
                        <p className="eyebrow mb-5">Why Start Early</p>
                        <p className="font-serif" style={{ fontSize: "clamp(19px, 1.55vw, 24px)", lineHeight: 1.55, color: "var(--ink)" }}>
                            By the time most families think about college consulting, half the decisions
                            that shape an application have already been made. Course load is set. Activities
                            are chosen. The story is half-written. Starting in ninth grade — or even tenth —
                            gives a student room to choose deliberately rather than retrofit.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="rule-left pl-6" style={{ borderLeftWidth: 2, borderLeftColor: "var(--orange)" }}>
                            <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                Best Fit For
                            </p>
                            <p className="font-display mt-3" style={{ fontSize: 17, lineHeight: 1.5, color: "var(--navy)", fontWeight: 500 }}>
                                Families with students entering 9th, 10th, or early 11th grade who want a strategic plan — not last-minute application help.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ProgramSection
                index={1}
                eyebrow="Pillar I"
                title="Course Selection & Academic Trajectory"
                body="The transcript is the single most important document in a college application — and most students build it accidentally. We map four years of course choices with attention to rigor, major direction, and how admissions offices will read the path. AP and dual-enrollment decisions are made with strategy, not anxiety."
                bullets={[
                    "Year-by-year course mapping aligned to intended major and college tier.",
                    "Honest assessment of where to push for rigor and where to protect GPA.",
                    "Summer course planning — for credit, depth, or competitive advantage.",
                ]}
                deliverable="4-Year Course Map · Grade-by-Grade Plan"
                image={IMG_COURSE}
                imageCaption="Plate C-I — The Schedule"
            />

            <ProgramSection
                index={2}
                eyebrow="Pillar II"
                title="Extracurricular Development"
                body="Top colleges read activity lists looking for one thing: evidence of authentic, sustained engagement. A student who started a club in tenth grade and led it for three years is more compelling than a student with twelve scattered activities. We help students go deep on what they actually care about — and document it well."
                bullets={[
                    "Identify two or three genuine passion areas; eliminate the rest.",
                    "Build leadership opportunities — clubs, research, fundraising, community projects.",
                    "Create a tangible record — publications, founded organizations, measurable impact.",
                ]}
                deliverable="Activity Portfolio · Documented Track Record"
                image={IMG_EC}
                imageCaption="Plate C-II — The Project"
                reverse
            />

            <ProgramSection
                index={3}
                eyebrow="Pillar III"
                title="Summer Strategy & Testing"
                body="Summers between sophomore and junior year are where applications are quietly won or lost. We plan summers to either advance a student's signature work, expose them to a field they're considering, or build the credentials top programs look for. Test prep timing — SAT, ACT, subject tests — is sequenced to remove pressure from senior year."
                bullets={[
                    "Summer program selection — research, pre-college, internships, competitions.",
                    "SAT / ACT diagnostic and a 12-month preparation plan with target test dates.",
                    "Junior summer capstone — a project that becomes the heart of the application narrative.",
                ]}
                deliverable="Summer Plan · Test Calendar · Capstone Project"
                image={IMG_SUMMER}
                imageCaption="Plate C-III — The Long Days"
            />

            <PageCTA
                title="Three years of intention beats one year of urgency."
                note="If your student is in 9th, 10th, or early 11th grade, the most valuable thing we can offer is time. Let's talk about what a thoughtful three-year plan could look like for your family."
            />
            <Footer />
        </main>
    );
}
