import styled from "styled-components";
import webIlustration from "../assets/img/panelWeb.svg";
import NavService from "./NavService";

const StyleFeatures = styled.div`
  padding: 80px 0;
  .features {
    padding: 30px 0;
    display: flex;
    justify-content: space-around;
    margin: auto;
    flex-wrap: wrap;
    background: #f2f2f2;
    width: 100%;
  }
  .feature-content {
    width: 30%;
    padding-left: 30px;
    h3 {
      text-align: justify;
    }
    p {
      text-align: justify;
      width: 90%;
      color: #774c4c;
    }
  }
  .img-service {
    width: 30%;
    img {
      width: 100%;
      vertical-align: top;
    }
  }
`;

export default function SectionFeatures() {
  return (
    <StyleFeatures>
      <section className="features">
        <div className="img-service">
          <img src={webIlustration}></img>
        </div>
        <article className="feature-content">
          <h3>Hacemos la mejor web para ti</h3>
          <p>Los mejores diseños y funcionalidad a tu medida</p>
          <NavService />
        </article>
      </section>
    </StyleFeatures>
  );
}
