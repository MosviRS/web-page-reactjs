import styled from "styled-components";
const StyledItemService = styled.div`
    border-bottom: 4px dotted rgba(74, 0, 224, 0.7);
    margin-bottom: 20px;
    padding-bottom: 10px;
    color: rgba(74, 0, 224, 0.7);
`;

export default function ItemNav({ textItem }) {
  return (
    <StyledItemService>
      <li>{textItem}</li>
    </StyledItemService>
  );
}
