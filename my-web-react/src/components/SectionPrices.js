import styled from "styled-components";
import CardPrice from "./CardPrice";


const StylePrices = styled.div``;

export default function SectionPrices() {
  return (
    <StylePrices>
      <section className="prices">
          <h3>Tabla de Precios</h3>
          <div className="container-prices">
                <CardPrice
                    titleBody="Basico"
                    priceBody="$10"
                    options={['Option1','Option2','Option3']}
                />
          </div>
      </section>
    </StylePrices>
  );
}
