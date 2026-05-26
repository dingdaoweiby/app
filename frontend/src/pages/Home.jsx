import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TrackRecord from "@/components/TrackRecord";
import Pillars from "@/components/Pillars";
import AssessmentTools from "@/components/AssessmentTools";
import StudentStories from "@/components/StudentStories";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main data-testid="home-page" className="min-h-screen">
            <Nav />
            <Hero />
            <Marquee />
            <TrackRecord />
            <Pillars />
            <AssessmentTools />
            <StudentStories />
            <ClosingCTA />
            <Footer />
        </main>
    );
}
