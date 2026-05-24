import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Marquee from "@/components/Marquee";
import TrackRecord from "@/components/TrackRecord";
import Pillars from "@/components/Pillars";
import StudentStories from "@/components/StudentStories";
import Manifesto from "@/components/Manifesto";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main data-testid="home-page" className="min-h-screen">
            <Nav />
            <Hero />
            <StatsStrip />
            <Marquee />
            <TrackRecord />
            <Pillars />
            <StudentStories />
            <Manifesto />
            <ClosingCTA />
            <Footer />
        </main>
    );
}
