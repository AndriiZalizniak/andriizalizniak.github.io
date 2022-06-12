import React from "react";

import Hero from "@/template/Pages/About/Hero";
import Subhero from "@/template/Pages/About/Subhero";
import Solution from "@/template/Pages/About/Solution";

const About = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Hero />
      <Solution />
      <Subhero />
    </div>
  );
};

export default About;
