import react from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledCardServices = styled.div`
    background: #f2f2f2;
    width: 30%;
    border-radius: 3px;
    padding: 20px 10px;
    .icons {
      margin-bottom: 1.5rem;
      color: rgba(74, 0, 224, 0.7);
    }
    p {
      font-weight: 300;
      margin-bottom: 1rem;
      color: #585858;
    }
`;

export default function CardService({ textTitle, textBody, iconName }) {
  return (
    <StyledCardServices>
      <FontAwesomeIcon icon={iconName}  className="icons" size="3x" />
      <h4>{textTitle}</h4>
      <p>{textBody}</p>
    </StyledCardServices>
  );
}
