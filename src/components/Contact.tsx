"use client";

import dynamic from "next/dynamic";
import Section from "./Section";
import { ALL_INFORMATIONS_QUERYResult } from "../../sanity.types";
import ContactDetails from "./ContactDetails";

// ✅ Renommage du composant Map pour éviter le conflit avec la classe Map de JS
const MapComponent = dynamic(() => import("./Map"), {
  ssr: false,
});

interface ContactProps {
  informations: ALL_INFORMATIONS_QUERYResult;
}

export default function Contact({ informations }: ContactProps) {
  return (
    <Section id="contact" title="Contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden z-30">
          <MapComponent />
        </div>

        <ContactDetails informations={informations} />
      </div>
    </Section>
  );
}
