import react from "react";
import styled from "styled-components";
import CardService from "./CardService";
import {
  faLayerGroup,
  faMobile,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
const StyleSection = styled.div`
  .cards-container {
    display: flex;
    flex-direction: rows;
    justify-content: space-evenly;
  }
`;
export default function SectionServices() {
  return (
    <StyleSection>
      <section className="About">
        <h3>Tenemos asombrosos servicios</h3>
        <p>Todos nuestros servicios son los mejores</p>
        <div className="cards-container">
          <CardService
            textTitle="Diseño Exlusivo"
            textBody="Los mejores diseños adaptados a tus necesidades"
            iconName={faLayerGroup}
          />
          <CardService
            textTitle="Diseño Exlusivo"
            textBody="Los mejores diseños adaptados a tus necesidades"
            iconName={faMobile}
          />
          <CardService
            textTitle="Diseño Exlusivo"
            textBody="Los mejores diseños adaptados a tus necesidades"
            iconName={faChartBar}
          />
        </div>
      </section>
    </StyleSection>
  );
}
