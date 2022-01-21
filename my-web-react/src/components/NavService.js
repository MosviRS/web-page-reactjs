import styled from "styled-components";
import ItemNav from "./ItemNav";

const StyleNavService = styled.div``;

export default function NavService() {
  return (
    <StyleNavService>
      <ul>
        <ItemNav textItem="Servicio de Diseño Web" />
        <ItemNav textItem="Hosting web" />
      </ul>
    </StyleNavService>
  );
}
