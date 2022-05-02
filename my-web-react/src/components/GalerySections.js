import styled from "styled-components";
import CardGalery from "./CardGalery";
import sunsetImg from "../assets/img/sunset.jpeg";
import sandImg from "../assets/img/sand.jpeg";
import wallImg from "../assets/img/wall.jpeg";

const StyleGalery = styled.div`
  .galery-container {
    display: flex;
    margin-top: 30px;
    justify-content: space-around;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
  }
`;

export default function GalerySection() {
  return (
    <StyleGalery>
      <h3>Conoce nuestro trabajo</h3>
      <p>Hecha un vistazo a nuestra galeria</p>
      <div className="galery-container">
        <CardGalery imgCard={wallImg} textGalery="Foto tomada en Guanajuato" />
        <CardGalery imgCard={sunsetImg} textGalery="Foto tomada en Guanajuato" />
        <CardGalery imgCard={sandImg} textGalery="Foto tomada en Guanajuato" />
      </div>
    </StyleGalery>
  );
}
