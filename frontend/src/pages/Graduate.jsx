import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";
import ProgramSection from "@/components/ProgramSection";

const IMG_MED  = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=85&auto=format&fit=crop";
const IMG_PHD  = "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&q=85&auto=format&fit=crop";
const IMG_MBA  = "https://images.unsplash.com/photo-1554224155-1696413565d3?w=1200&q=85&auto=format&fit=crop";
const IMG_DIY  = "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=85&auto=format&fit=crop";

export default function Graduate() {
    return (
        <main data-testid="page-graduate" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow="§ Program · Graduate Admissions"
                title="Graduate work,"
                italicWord="positioned with precision."
                subtitle="Medical school, doctoral programs, business school — each rewards a different kind of clarity. We work with applicants who know what they want and need help articulating why they're ready."
                breadcrumb={[{ label: "Graduate" }]}
            />

            <section className="section-x" style={{ paddingTop: "clamp(64px, 7vw, 110px)", paddingBottom: "clamp(40px, 5vw, 80px)", background: "var(--paper)" }}>
                <div className="grid grid-cols-12 gap-x-10 gap-y-10">
                    <div className="col-span-12 lg:col-span-8">
                        <p className="eyebrow mb-5">Overview</p>
                        <p className="font-serif" style={{ fontSize: "clamp(19px, 1.55vw, 24px)", lineHeight: 1.55, color: "var(--ink)" }}>
                            Four distinct tracks under one practice — medical school, doctoral programs,
                            business school, and a lighter DIY pathway for self-directed applicants who need
                            high-leverage strategic input without full-service consulting.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="rule-left pl-6" style={{ borderLeftWidth: 2, borderLeftColor: "var(--orange)" }}>
                            <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                Recent Outcomes
                            </p>
                            <p className="font-display mt-3" style={{ fontSize: 17, lineHeight: 1.5, color: "var(--navy)", fontWeight: 500 }}>
                                Harvard Med · Johns Hopkins BME · Stanford PhD CS · Wharton MBA · Columbia P&S
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ProgramSection
                index={1}
                eyebrow="Track I"
                title="Medical School (MD · MD-PhD)"
                body="AMCAS is unforgiving — fifteen experiences, three meaningful ones, a personal statement that has to be both clinical and human. We work with pre-meds from the personal statement through secondaries, mock MMI interviews, and the long wait of the rolling admissions cycle."
                bullets={[
                    "AMCAS personal statement (5,300 characters) — concept through final polish.",
                    "Activity descriptions and three ‘most meaningful’ experiences (the hardest part of the application).",
                    "Secondary essay strategy — typically 15–25 schools, 60+ essays in 6 weeks.",
                    "MMI and traditional interview preparation with simulated interview days.",
                ]}
                deliverable="Submitted AMCAS · Completed Secondaries · Interview-Ready"
                image={IMG_MED}
                imageCaption="Plate G-I — The White Coat"
            />

            <ProgramSection
                index={2}
                eyebrow="Track II"
                title="Doctoral Programs (PhD)"
                body="PhD admissions are about fit — between an applicant's research interests and a specific faculty member's lab. The personal statement is really a research statement; the strongest applicants name two or three faculty by name and explain why. We help applicants identify the right labs, draft statements of purpose, and prepare for the technical conversations that follow."
                bullets={[
                    "Faculty mapping — identifying two to four target labs at each program.",
                    "Statement of purpose — research questions, methodology, and articulated fit.",
                    "Recommendation strategy — guiding which professors to ask and how to brief them.",
                    "Interview / visit weekend preparation, including technical question rehearsal.",
                ]}
                deliverable="Refined School List · Statement of Purpose · Faculty Outreach"
                image={IMG_PHD}
                imageCaption="Plate G-II — The Lab"
                reverse
            />

            <ProgramSection
                index={3}
                eyebrow="Track III"
                title="Business School (MBA)"
                body="The top MBA programs admit applicants on three axes: career trajectory, leadership impact, and what they'll contribute to the class. Essays are short and ruthless. We work with candidates from career story development through GMAT/GRE timing, essays, and interview prep — usually over a six to nine month engagement."
                bullets={[
                    "Career story and ‘why MBA, why now’ articulation.",
                    "School fit — H/S/W vs. M7 vs. specialized programs (Tuck, Yale, Booth).",
                    "Essay drafts (typically 3–5 short essays per school × 6–8 schools).",
                    "Interview preparation including video and behavioral questions.",
                ]}
                deliverable="Application Portfolio Across 6–8 Programs"
                image={IMG_MBA}
                imageCaption="Plate G-III — The Boardroom"
            />

            <ProgramSection
                index={4}
                eyebrow="Track IV"
                title="DIY Support"
                body="Not every applicant needs full-service consulting. Some need a sharp pair of eyes on essays, a second opinion on school list, or strategic input at specific decision points. Our DIY engagement offers structured hourly consulting — focused, efficient, and respectful of self-directed applicants."
                bullets={[
                    "Personal statement / SOP review with one round of substantive feedback.",
                    "School list audit with research-backed recommendations.",
                    "Mock interview (one hour, recorded, debriefed).",
                    "Strategic checkpoint sessions at applicant's discretion.",
                ]}
                deliverable="Targeted Support · Hourly Engagement"
                image={IMG_DIY}
                imageCaption="Plate G-IV — At the Desk"
                reverse
            />

            <PageCTA
                title="Graduate admissions, with someone who has done it before."
                note="Each track has its own logic, vocabulary, and timing. Bring us the application that needs sharpening, and we'll bring you the experience to do it."
            />
            <Footer />
        </main>
    );
}
