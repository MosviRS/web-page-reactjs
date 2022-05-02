import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { MdMenu } from "react-icons/md";
import ImagePanel from "../assets/img/panel.svg";

const NavStyles = styled.nav`
  position: relative;
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    rgba(74, 0, 224, 0.7),
    #8e2de2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: auto;
  width: 100%;

  .shape-div {
    position: relative;
    bottom: 0px;
    height: 150px;
    width: 100%;
    overflow: hidden;

    .svg-shape {
      height: 100%;
      width: 100%;
    }
    path {
      stroke: none;
      fill: white;
    }
  }
  .container-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 90%;
    height: 20rem;
    color: white;
    overflow: hidden;
    .container-text {
      transform: translateY(0);
      opacity: 1;
      animation: animation2 1s ease-out;
      width: 50%;
    }
    h1 {
      font-size: 3em;
    }

    h2 {
      font-size: 2.2em;
    }
  }
  .menu-header {
    position: fixed;
    cursor: pointer;
    top: 2rem;
    right: 2rem;
    font-size: 2rem;
    width: 3rem;
    padding: 0.5rem;
    height: 3rem;
    text-align: center;
    background-color: turquoise;
    border-radius: 100%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    transform: scale(1);
    transition: transform 0.3s;
    z-index: 20;
    animation: escalar 0.5s 3 alternate;
  }
  .menu-header:active {
    transform: scale(0.6);
  }
  @keyframes escalar {
    0% {
      transform: scale(0.1);
    }
  }
  .img-header {
    width: 50%;
    transform: translateX(0);
    opacity: 1;
    animation: animation1 1s ease-out;

    img {
      max-width: 800px;
      width: 100%;
      height: 300px;
    }
  }
  @keyframes animation1 {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  @keyframes animation2 {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
  }
`;

export default function NavMenu() {
  return (
    <NavStyles>
      <nav>
        <div className="menu-header">
          <MdMenu />
        </div>
        <ul className="enlaces-header">
          <li>
            <NavLink to="\">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="\">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="\">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="\">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="\">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="\">Inicio</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container-header">
        <div className="container-text">
          <h1>Las Mejores Soluciones para ti</h1>
          <h2>Bitsware</h2>
          <Button btnText="Go" />
        </div>
        <div className="img-header">
          <img src={ImagePanel} alt=""></img>
        </div>
      </div>
      <div className="shape-div">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="svg-shape"
        >
          <path d="M0.00,49.98 C172.96,162.33 287.52,10.36 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>
    </NavStyles>
  );
}
