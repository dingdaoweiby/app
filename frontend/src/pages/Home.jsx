import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Marquee from "@/components/Marquee";
import Pillars from "@/components/Pillars";
import Methodology from "@/components/Methodology";
import StudentStories from "@/components/StudentStories";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

// Link import is kept to ensure react-router context is intact for nested anchors.
void Link;

export default function Home() {
    return (
        <main data-testid="home-page" className="min-h-screen">
            <Nav />
            <Hero />
            <StatsStrip />
            <Marquee />
            <Pillars />
            <Methodology />
            <StudentStories />
            <ClosingCTA />
            <Footer />
        </main>
    );
}
