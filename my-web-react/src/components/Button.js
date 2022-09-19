import React from 'react';
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';

const ButtonStyle = styled.div`
  display: inline-block;
  color: white;
  border: 1px solid #fff;
  border-radius: 5px;
  text-decoration: none;
  box-sizing: border-box;
  font-weight: 300;
  margin-top: 1.5rem;
  padding: 5px 2px;
  text-align: center;
  width: ${(props) => props.width};
  ${(props) =>
    props.backgroundButton &&
    css`
      background: ${props.backgroundButton};
    `};
  a{
    font-size:${(props) => props.fontSize};
  }
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
  background = "transparent",
  fontSize = "1rem",
  width = "5rem"
}) {
  return (
    <ButtonStyle width={width} fontSize={fontSize} backgroundButton={background}>
      <Link to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
