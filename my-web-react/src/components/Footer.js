import React from 'react';
import styled from 'styled-components';
import {faFacebookF, faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterStyles = styled.nav`
  
  

`;

export default function Footer() {
  return (
    <FooterStyles>
        <div>
            <div class="footer-contact">
                <h6>Contactanos</h6>
                <p>Email: conatcta@yahoo.com</p>
                <p>Phone: +52 72637267</p>
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div class="footer-logo">
                
            </div>
        </div>
    </FooterStyles>
  );
}
