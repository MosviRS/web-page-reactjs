import styled from "styled-components";
const StyledItemService = styled.div``;

export default function ItemNav({ textItem }) {
  return (
    <StyledItemService>
      <li>{textItem}</li>
    </StyledItemService>
  );
}
