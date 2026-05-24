import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PageCTA from "@/components/PageCTA";
import ProgramSection from "@/components/ProgramSection";

const IMG_LIST   = "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=1200&q=85&auto=format&fit=crop";
const IMG_ESSAY  = "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=85&auto=format&fit=crop";
const IMG_INT    = "https://images.unsplash.com/photo-1565687981296-535f09db714e?w=1200&q=85&auto=format&fit=crop";
const IMG_DEC    = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=85&auto=format&fit=crop";

export default function CollegeAdmissions() {
    return (
        <main data-testid="page-college-admissions" className="min-h-screen">
            <Nav />
            <PageHeader
                eyebrow="§ Program · College — Application Year"
                title="Senior year,"
                italicWord="done with conviction."
                subtitle="From August of senior year through April decisions — the most consequential nine months of a student's academic life. We work alongside your child, not over them."
                breadcrumb={[{ label: "College", to: "/college/admissions-consulting" }, { label: "Admissions Consulting" }]}
            />

            <section className="section-x" style={{ paddingTop: "clamp(64px, 7vw, 110px)", paddingBottom: "clamp(40px, 5vw, 80px)", background: "var(--paper)" }}>
                <div className="grid grid-cols-12 gap-x-10 gap-y-10">
                    <div className="col-span-12 lg:col-span-8">
                        <p className="eyebrow mb-5">What This Looks Like</p>
                        <p className="font-serif" style={{ fontSize: "clamp(19px, 1.55vw, 24px)", lineHeight: 1.55, color: "var(--ink)" }}>
                            Weekly or bi-weekly meetings from late summer through the regular decision deadline.
                            We work on essays in real drafts, not bullet points; we plan school lists with
                            financial aid in view; we prepare for interviews until they feel like conversations.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="rule-left pl-6" style={{ borderLeftWidth: 2, borderLeftColor: "var(--orange)" }}>
                            <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--orange)", fontWeight: 500 }}>
                                Class of 2026 Outcomes
                            </p>
                            <p className="font-display mt-3" style={{ fontSize: 17, lineHeight: 1.5, color: "var(--navy)", fontWeight: 500 }}>
                                Harvard · Yale · Princeton · Columbia · Penn · Cornell · Brown · Dartmouth · Stanford · MIT
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ProgramSection
                index={1}
                eyebrow="Phase I · August — September"
                title="School List & Application Strategy"
                body="A school list is not a wish list. We build a curated set of 10 to 14 schools matched to your student's profile — reach, target, and likely — with attention to financial aid realities, honors programs, and ED / EA strategy. The list reflects who your student is, not where their friends are applying."
                bullets={[
                    "Data-grounded school list across reach, target, and likely tiers.",
                    "ED / EA / REA strategy — when binding decisions help, when they hurt.",
                    "Honors program and direct-admit pathway analysis.",
                    "Financial aid and merit scholarship landscape — the conversation most consultants skip.",
                ]}
                deliverable="Final School List · ED / EA Decision Memo"
                image={IMG_LIST}
                imageCaption="Plate A-I — The Long List"
            />

            <ProgramSection
                index={2}
                eyebrow="Phase II · September — November"
                title="Essay Development"
                body="The Common App essay and supplemental essays are where admissions officers meet your student as a person. We work in real drafts — five, six, sometimes ten — until the essay sounds like your student on their clearest day. We never write for students; we help them write the version of themselves they didn't know they could."
                bullets={[
                    "Common App personal statement — concept, drafts, line edits.",
                    "Supplemental essays for each school (often 6–15 short essays per applicant).",
                    "‘Why this school’ research and authentic articulation.",
                    "Resume / activity descriptions — the 150-character versions that admissions officers actually read.",
                ]}
                deliverable="Complete Essay Portfolio · 8–15 Polished Pieces"
                image={IMG_ESSAY}
                imageCaption="Plate A-II — The Sixth Draft"
                reverse
            />

            <ProgramSection
                index={3}
                eyebrow="Phase III · November — January"
                title="Interview Preparation & Submission"
                body="Alumni interviews, evaluative interviews, video questions — increasingly common, often decisive. We run mock interviews, record them, and walk through them line by line. Students arrive at their actual interviews having already had the hard questions, twice."
                bullets={[
                    "Mock interviews with school-specific preparation (Harvard ABCs, Yale-style, MIT video).",
                    "Recorded review of body language, pacing, and content.",
                    "Application submission audit — every field, every attachment, every deadline.",
                    "Mid-year report coordination and supplemental material strategy.",
                ]}
                deliverable="Interview-Ready Student · Submitted Applications"
                image={IMG_INT}
                imageCaption="Plate A-III — The Conversation"
            />

            <ProgramSection
                index={4}
                eyebrow="Phase IV · March — April"
                title="Decisions & Yield"
                body="Decisions arrive between mid-March and early April. We help families read offers carefully — financial aid letters, honors program invitations, waitlist strategy, comparing merit packages. The choice is real and significant, and you shouldn't make it alone."
                bullets={[
                    "Side-by-side comparison of offers (academics, cost, fit, post-graduate outcomes).",
                    "Financial aid appeal and negotiation when appropriate.",
                    "Waitlist strategy — letters of continued interest that actually move the needle.",
                    "Final decision conversation and matriculation planning.",
                ]}
                deliverable="Final College Decision · Transition Plan"
                image={IMG_DEC}
                imageCaption="Plate A-IV — Acceptance Day"
                reverse
            />

            <PageCTA
                title="The application year, done right."
                note="If you have a rising senior — or a 12th grader already in the process — we can step in now. The most important essays are written in October. Let's start before then."
            />
            <Footer />
        </main>
    );
}
