import styled  from "styled-components";
const StyleCardGalery = styled.div`
    text-align: center;
    width: 32%;
    height: 18rem;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.75);
    &:hover .extra-galeria{
      transform : translate(0);
    }
    .extra-galeria {
      position: absolute;
      top: 0;
      background:  rgba(74, 0, 224, 0.65);
      width: 100%;
      height: 100%;
      transform: translate(100%, -100%);
      transition: transform 0.8s;
      p{
        width: 90%;
        margin: 10px auto;
        color: white;
        font-weight: 300;
        text-align: justify;
      }
    }
    img {
        position: relative;
        width: 100%;
        height: 18rem;
        object-fit: cover;
        transform: scale(1);
        transition: transform 0.8s;
        vertical-align: top;
        &:hover{
          transform: scale(1.6);
        }
    }
`;

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