import styled from "styled-components";
import CardPrice from "./CardPrice";


const StylePrices = styled.div`
  background: #f2f2f2;
  h3{
    padding-top: 40px;
  }
  .container-prices{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export default function SectionPrices() {
  return (
    <StylePrices>
      <section className="prices">
          <h3>Tabla de Precios</h3>
          <div className="container-prices">
                <CardPrice
                    class="card"
                    titleBody="Basico"
                    priceBody="$10"
                    options={['Option1','Option2','Option3']}
                />
                <CardPrice
                    class="card" 
                    titleBody="Basico"
                    priceBody="$10"
                    options={['Option1','Option2','Option3']}
                />
                <CardPrice
                    class="card"
                    titleBody="Basico"
                    priceBody="$10"
                    options={['Option1','Option2','Option3']}
                />
          </div>
      </section>
    </StylePrices>
  );
}
