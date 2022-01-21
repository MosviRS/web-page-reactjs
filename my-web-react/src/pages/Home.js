import styled from "styled-components";
import react from "react";
import SectionServices from "../components/SectionServices";
import SectionFeatures from "../components/SectionFeactures";
import GalerySection from "../components/GalerySections";
import SectionPrices from "../components/SectionPrices";

export default function Home() {
  return (
    <div>
      <h2>HOla</h2>
      <SectionServices />
      <SectionFeatures />
      <GalerySection />
      <SectionPrices/>
    </div>
  );
}
