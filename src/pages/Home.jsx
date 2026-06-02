import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import WhatWeTeach from "../sections/WhatWeTeach";
import MapSection from "../sections/MapSection";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeTeach />
      <MapSection />
      <Contact />
    </>
  );
}
