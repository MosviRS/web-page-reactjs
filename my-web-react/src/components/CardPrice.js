import react from "react";
import styled from "styled-components";
import Button from "./Button";

const StyleCardPrice = styled.div``;

export default function CardPrice({ titleBody, priceBody, options }) {
  return (
    <StyleCardPrice>
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
            btnText="Comprar"
        />
      </div>
    </StyleCardPrice>
  );
}
