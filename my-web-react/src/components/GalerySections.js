import styled from "styled-components";
import CardGalery from "./CardGalery";
import sunsetImg from "../assets/img/sunset.jpeg";
import sandImg from "../assets/img/sand.jpeg";
import wallImg from "../assets/img/wall.jpeg";

const StyleGalery = styled.div`
  .galery-comtainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export default function GalerySection() {
  return (
    <StyleGalery>
      <h3>Conoce nuestro trabajo</h3>
      <p>Hecha un vistazo a nuestra galeria</p>
      <div className="galery-container">
        <CardGalery imgCard={wallImg} textGalery="Foto tomada en Guanajuato" />
        <CardGalery imgCard={sunsetImg} textGalery="" />
        <CardGalery imgCard={sandImg} textGalery="" />
      </div>
    </StyleGalery>
  );
}
