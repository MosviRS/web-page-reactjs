import styled  from "styled-components";
const StyleCardGalery = styled.div``;

export default function CardGalery({ imgCard, textGalery }) {
  return (
    <StyleCardGalery>
      <div>
        <img src={imgCard}></img>
        <div className="extra-galeria">
          <p>{textGalery}</p>
        </div>
      </div>
    </StyleCardGalery>
  );
}