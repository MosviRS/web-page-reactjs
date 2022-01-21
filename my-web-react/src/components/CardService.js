import react from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledCardServices = styled.div``;

export default function CardService({ textTitle, textBody, iconName }) {
  return (
    <StyledCardServices>
      <FontAwesomeIcon icon={iconName} />
      <h4>{textTitle}</h4>
      <p>{textBody}</p>
    </StyledCardServices>
  );
}
