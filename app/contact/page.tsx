"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const locations = [
  "amsterdam",
  "shanghai",
  "hong kong",
  "frankfurt",
  "dubai",
  "melbourne",
];

const locationData: Record<string, any> = {
  amsterdam: {
    visiting: "Stadhouderskade 113 1073 AX Amsterdam \n The Netherlands",
    post: "PO Box 75381 1070 AS Amsterdam \n The Netherlands",
    phone: "T +31 20 570 20 40 \n F +31 20 570 20 41",
    email: "info@4ward.studio",
    hr: "hr@4ward.studio",
    map: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Stadhouderskade%20113,%20Amsterdam&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    parking: "Indoor car park: Nicole de van der Helststraat (200m from 4WARD office). Open 24 hours a day / 7 days a week. € 2.00 per 15mins or part thereof. Maximum day rate €60.",
    transport: "Tram number 4 \n Stop: Stadhouderskade",
  },
  shanghai: {
    visiting: "No. 800 Changde Road, Jing'an District \n Shanghai, China",
    post: "No. 800 Changde Road, Jing'an District \n Shanghai, China",
    phone: "T +86 21 6135 1900 \n F +86 21 6135 1901",
    email: "shanghai@4ward.studio",
    hr: "hr.shanghai@4ward.studio",
    map: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=800%20Changde%20Road,%20Shanghai&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    parking: "On-site parking available at 800 Changde Road compound. Hourly rates apply.",
    transport: "Metro Line 7 \n Station: Changping Road",
  },
  "hong kong": {
    visiting: "Unit 2, 12/F, 69 Jervois Street \n Sheung Wan, Hong Kong",
    post: "Unit 2, 12/F, 69 Jervois Street \n Sheung Wan, Hong Kong",
    phone: "T +852 3468 5350 \n F +852 3468 5351",
    email: "hk@4ward.studio",
    hr: "hr.hk@4ward.studio",
    map: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=69%20Jervois%20Street,%20Hong%20Kong&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    parking: "Public parking available at The Center or Rumsey Street Multi-storey Car Park.",
    transport: "MTR Island Line \n Station: Sheung Wan (Exit A2)",
  },
  frankfurt: {
    visiting: "Hanauer Landstraße 135-137 \n 60314 Frankfurt am Main, Germany",
    post: "Hanauer Landstraße 135-137 \n 60314 Frankfurt am Main, Germany",
    phone: "T +49 69 900 286 0 \n F +49 69 900 286 66",
    email: "frankfurt@4ward.studio",
    hr: "hr.frankfurt@4ward.studio",
    map: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Hanauer%20Landstrasse%20135,%20Frankfurt&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    parking: "Visitor parking spaces in the courtyard entrance Hanauer Landstraße 135.",
    transport: "Tram 11 or 12 \n Stop: Osthafenplatz",
  },
  dubai: {
    visiting: "Office 102, Building 6, Dubai Design District \n Dubai, UAE",
    post: "PO Box 333240 \n Dubai, UAE",
    phone: "T +971 4 564 5840 \n F +971 4 564 5841",
    email: "dubai@4ward.studio",
    hr: "hr.dubai@4ward.studio",
    map: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Dubai%20Design%20District&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    parking: "Multi-story basement parking in d3. Free for first 3 hours.",
    transport: "Bus Line 66, 67 \n Stop: Dubai Design District",
  },
  melbourne: {
    visiting: "Level 4, 11-19 Bank Place \n Melbourne VIC 3000, Australia",
    post: "Level 4, 11-19 Bank Place \n Melbourne VIC 3000, Australia",
    phone: "T +61 3 9600 0010 \n F +61 3 9600 0011",
    email: "melbourne@4ward.studio",
    hr: "hr.melbourne@4ward.studio",
    map: "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=19%20Bank%20Place,%20Melbourne&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    parking: "Public car parks available at 459 Collins Street or Galleria Parking.",
    transport: "Train to Flinders Street Station \n Tram 19, 57 or 59 to Elizabeth St",
  },
};

export default function ContactPage() {
  const [activeLocation, setActiveLocation] = useState("amsterdam");
  const data = locationData[activeLocation];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 grid-bg font-jost overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.8] uppercase tracking-tighter text-[#1a1a1a] mb-8">
            CONTACT
          </h1>

          {/* Location Tabs */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-12">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={`text-[10px] md:text-[12px] font-black uppercase tracking-widest transition-all duration-300 ${
                  activeLocation === loc
                    ? "text-[#d32f2f]"
                    : "text-[#1a1a1a]/40 hover:text-[#1a1a1a]"
                }`}
              >
                {activeLocation === loc ? `[${loc}]` : loc}
              </button>
            ))}
          </div>

          <p className="max-w-3xl text-lg md:text-xl font-bold leading-tight text-[#1a1a1a] mb-16 uppercase tracking-tight">
            A full-service branding and digital design network in six locations
            in Amsterdam, Shanghai, Hong Kong, Frankfurt, Dubai and Melbourne.
          </p>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 border-t border-[#e5e5e5] pt-12">
          {/* Address Section */}
          <div className="md:col-span-4 text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40">
            Address
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-[#1a1a1a]">
            <div>
              <h3 className="text-[9px] font-black uppercase text-[#1a1a1a]/60 mb-3 tracking-widest">
                Visiting address
              </h3>
              <p className="text-[13px] font-bold leading-normal uppercase whitespace-pre-line">
                {data.visiting}
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-black uppercase text-[#1a1a1a]/60 mb-3 tracking-widest">
                Post address
              </h3>
              <p className="text-[13px] font-bold leading-normal uppercase whitespace-pre-line">
                {data.post}
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="md:col-start-5 md:col-span-8 my-8 transition-all duration-500">
            <div className="relative aspect-[16/7] bg-[#eee] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 rounded-sm group">
                <div className="absolute inset-0 bg-[#d32f2f]/5 mix-blend-multiply transition-opacity group-hover:opacity-0 pointer-events-none" />
                <iframe 
                    key={activeLocation}
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src={data.map}
                    className="filter contrast-125 brightness-105"
                ></iframe>
            </div>
          </div>

          {/* Communications Section */}
          <div className="md:col-span-4 text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40 mt-12">
            Communications
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12 text-[#1a1a1a]">
            <div>
              <h3 className="text-[9px] font-black uppercase text-[#1a1a1a]/60 mb-3 tracking-widest">
                Phone
              </h3>
              <p className="text-[13px] font-bold leading-normal uppercase whitespace-pre-line">
                {data.phone}
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-black uppercase text-[#1a1a1a]/60 mb-3 tracking-widest">
                General Information
              </h3>
              <p className="text-[13px] font-bold leading-normal uppercase text-[#d32f2f] hover:underline cursor-pointer">
                {data.email}
              </p>
            </div>
            <div className="sm:col-start-2">
              <h3 className="text-[9px] font-black uppercase text-[#1a1a1a]/60 mb-3 tracking-widest">
                Human Resources
              </h3>
              <p className="text-[13px] font-bold leading-normal uppercase text-[#d32f2f] hover:underline cursor-pointer">
                {data.hr}
              </p>
            </div>
          </div>

          {/* Statutory Section */}
          <div className="md:col-span-4 text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40 mt-12 border-t border-[#e5e5e5] pt-12">
            Statutory company name
          </div>
          <div className="md:col-span-8 mt-12 border-t border-[#e5e5e5] pt-12">
            <p className="text-[13px] font-bold leading-normal uppercase">
              U-Studio B.V. <br /> 4WARD Design Network
            </p>
          </div>

          {/* How to get to us Section */}
          <div className="md:col-span-4 text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]/40 mt-12 border-t border-[#e5e5e5] pt-12 pb-24">
            How to get to us
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 border-t border-[#e5e5e5] pt-12 pb-24 text-[#1a1a1a]">
            <div>
              <h3 className="text-[9px] font-black uppercase text-[#1a1a1a]/60 mb-3 tracking-widest">
                Parking facilities
              </h3>
              <p className="text-[13px] font-bold leading-relaxed uppercase whitespace-pre-line">
                {data.parking}
              </p>
            </div>
            <div>
              <h3 className="text-[9px] font-black uppercase text-[#1a1a1a]/60 mb-3 tracking-widest">
                Public Transport
              </h3>
              <p className="text-[13px] font-bold leading-relaxed uppercase whitespace-pre-line">
                {data.transport}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="fixed top-0 bottom-0 left-[33.33%] w-[1px] bg-[#1a1a1a]/5 -z-10 hidden md:block" />
    </main>
  );
}
