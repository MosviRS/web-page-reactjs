import React from 'react';
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';

const ButtonStyle = styled.div`
  display: inline-block;
  border: 1px solid #fff;
  border-radius: 5px;
  text-decoration: none;
  box-sizing: border-box;
  font-weight: 300;
  margin-top: 1.5rem;
  padding: 5px 2px;
  text-align: center;
  box-shadow: var(--box-shadow);
  width: ${(props) => props.width};
  a{
    color: white;
    font-size:${(props) => props.fontSize};
  }
  ${(props) =>
    props.backgroundButton &&
    css`
      background: ${props.backgroundButton};
    `};
  ${(props) => props.isHover &&   
    css`
      a{
        color:#331A71;
      }
      background: #FFFFFF;
    ` 
    };
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
  background = "transparent",
  fontSize = "1rem",
  width = "5rem",
  isHover = false
}) {
  return (
    <ButtonStyle width={width} fontSize={fontSize} backgroundButton={background} isHover={isHover}>
      <Link to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
