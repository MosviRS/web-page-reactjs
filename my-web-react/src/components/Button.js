import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  display: inline-block;
  color: white;
  border: 1px solid #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 300;
  margin-top: 1.5rem;
  padding: 5px 2px;
  text-align: center;
  width: 5rem;
  
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
