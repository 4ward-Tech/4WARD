import React from "react";
import MeetTheTeam from "../components/MeetTheTeam";
import CollaboratorsSection from "../components/CollaboratorsSection";
import PartnersSection from "../components/PartnersSection";

export default function TeamPage() {
    return (
        <main className="min-h-screen grid-bg bg-[#f8f8f8] overflow-x-hidden font-jost">
            <MeetTheTeam />
            <CollaboratorsSection />
            <PartnersSection />
        </main>
    );
}
