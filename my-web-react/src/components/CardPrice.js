import react,{ useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyleCardPrice = styled.div`
    border: var(--border);
    background:var(--back-table);
    text-align: center;
    width: 29%;
    border-radius: 4px;
    padding: 40px;
    box-shadow: var(--box-shadow);
    color: var(--color);
    transform: scale(1);
    transition: transform 0.5s;
    :hover{
      transform: scale(1.05);
      border: 1px dotted #fff;
      background-color: var(--back-card);
      cursor:pointer;
    }
    :hover p{
      color: #fff;
    }
    h5{
      text-align:center;
      margin-bottom:10px;
      font-size: 28px;
    }
    .price{
      color: var(--color-price);
      font-weight: bold;
      margin-bottom: 30px;
      span{
        font-size: 24px;
      }
    }
    ul li{
      display:block;
      list-style:none;
      border-bottom: var(--border);
      margin-bottom: 20px;
      padding-bottom: 20px;
    }
  
`;

export default function CardPrice({ titleBody, priceBody, options }) {
  const [hoverControl, setHoverControl] = useState(false);
  const handleMouseOver = (e) => {
    setHoverControl(true);
  };
  const handleMouseOut= (e) => {
    setHoverControl(false);
  }
  return (
    <StyleCardPrice onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div>
        <h5>{titleBody}</h5>
        <p className="price">
          <span>{priceBody}</span>/ por mes
        </p>
        <ul>
          {options.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
        <Button
            width="7rem"
            background="linear-gradient( to right, rgba(74,0,224,0.7), #8e2de2 );"
            isHover={hoverControl}
            fontSize= "1rem" 
            btnText="Comprar ahora"
        />
      </div>
    </StyleCardPrice>
  );
}
