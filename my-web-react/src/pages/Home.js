import styled from "styled-components";
import react from "react";
import SectionServices from "../components/SectionServices";
import SectionFeatures from "../components/SectionFeactures";
import GalerySection from "../components/GalerySections";
import SectionPrices from "../components/SectionPrices";
const StyledHome = styled.div`
    padding: 50px 0;
    margin: auto;
    width: 90%;
    overflow: hidden;
    max-width: 100rem;
`;
export default function Home() {
  return (
    <div>
      <StyledHome>
          <SectionServices />
          <SectionFeatures />
          <GalerySection />
          <SectionPrices/>
      </StyledHome>
    </div>
  );
}
