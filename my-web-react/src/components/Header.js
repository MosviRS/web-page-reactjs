import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import {MdMenu} from 'react-icons/md';
import ImagePanel from '../assets/img/panel.svg';

const NavStyles = styled.nav`
  .shape-div{
    height:150px;
    overflow:hidden;
    
    .svg-shape{
      height: 100%; 
      width: 100%;
    }
    path{
      stroke: none; 
      fill: #08f;
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
      <div className="contenido-header">
        <div className="Textos-header">
          <h1>Las Mejores Soluciones para ti</h1>
          <h2>Bitsware</h2>
          <Button btnText="Go" />
        </div>
        <div className="img-header">
          <img src={ImagePanel} alt=""></img>
        </div>
        <div className="shape-div">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="svg-shape"
            > 
            <path
              d="M0.00,49.98 C172.96,162.33 287.52,10.36 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            ></path>
          </svg>
        </div>
      </div>
    </NavStyles>
  );
}
