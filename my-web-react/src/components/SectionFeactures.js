import styled from "styled-components";
import webIlustration from "../assets/img/panelWeb.svg";
import NavService from "./NavService";

const StyleFeatures = styled.div``;

export default function SectionFeatures() {
  return (
    <StyleFeatures>
      <section className="features">
        <div className="service">
          <img src={webIlustration}></img>
        </div>
        <article>
          <h3>Hacemos la mejore web para ti</h3>
          <p>Los mejores diseños y funcionalidad a tu medida</p>
          <NavService />
        </article>
      </section>
    </StyleFeatures>
  );
}
