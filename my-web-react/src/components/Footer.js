import React from "react";
import styled from "styled-components";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterStyles = styled.nav`
  position: relative;
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, rgba(74, 0, 224, 0.7), #8e2de2);
  height: auto;
  width: 100%;
  h2 {
    color: white;
    display: block;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 23px 0px;
    font-size: 3em;
  }
  .footer-container {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 2rem;
    flex-direction: row;
    justify-content: space-between;
    .footer-overview {
      display: flex;
      width: 70%;
      height: 100%;
      justify-content: space-between;
      box-sizing: border-box;
    }
    .footer-sublist,
    .footer-list {
      display: flex;
      width: auto;
      flex-direction: column;
      color: white;
      h1 {
        font-size: 1rem;
      }
      li {
        padding: 5px 0;
      }
      a {
        position: relative;
        cursor: pointer;
        font-size: 1rem;
        color: royalblue;
        overflow: hidden;
        background: linear-gradient(
          to right,
          midnightblue,
          midnightblue 50%,
          white 50%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 100%;
        background-position: 100%;
        transition: background-position 275ms ease;
        text-decoration: none;
        &:hover {
          background-position: 0 100%;
        }
      }
    }
    .footer-contact {
      color: white;
      h1 {
        font-size: 2rem;
      }
      p {
        font-weight: bold;
        font-size: 1rem;
      }
    }
    .footer-sublist {
      margin-top: 1rem;
    }
    .footer-social {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      margin-top: 1rem;
      .icons-media {
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <h2>Bitsware</h2>
      <div class="footer-container">
        <div class="footer-overview">
          <div class="footer-list">
            <h1>Explore new Properties</h1>
            <ul>
              <li>
                <a>Fandom</a>
              </li>
              <li>
                <a>Gamepedia</a>
              </li>
              <li>
                <a>D&B and Beyond</a>
              </li>
            </ul>
            <div class="footer-social">
              <h1>Follow Us</h1>
              <div class="icons-media">
                <FontAwesomeIcon icon={faFacebookF} size="3x" />
                <FontAwesomeIcon icon={faInstagram} size="3x" />
                <FontAwesomeIcon icon={faTwitter} size="3x" />
                <FontAwesomeIcon icon={faYoutube} size="3x" />
              </div>
            </div>
          </div>
          <div class="footer-list">
            <h1>Overview</h1>
            <ul>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Press</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div class="footer-list">
            <h1>Comunity</h1>
            <ul>
              <li>
                <a>Comunity Central</a>
              </li>
              <li>
                <a>Support</a>
              </li>
              <li>
                <a>Help</a>
              </li>
              <li>
                <a>Do not Sell my info</a>
              </li>
            </ul>
            <div class="footer-sublist">
              <h1>Adversite</h1>
              <ul>
                <li>
                  <a>Media Kit</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-contact">
          <h1>Contactanos</h1>
          <p>Email: conatcta@yahoo.com</p>
          <p>Phone: +52 72637267</p>
        </div>
      </div>
    </FooterStyles>
  );
}
