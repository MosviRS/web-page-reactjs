import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  background-color: white;
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
}) {
  return (
    <ButtonStyle>
      <Link to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
