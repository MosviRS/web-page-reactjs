import styled from "styled-components";
import ItemNav from "./ItemNav";

const StyleNavService = styled.div`
    ul {
      padding-left: 10px;
      width: 70%;
      padding-top: 1.5rem;
    }
`;

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
