import React from 'react';
import styled from 'styled-components';
import "./footer.component.css";


const FooterStyle = styled.div`
  color: #fffdfd;
  font-family: "Saira Stencil One", cursive;
  p{
    font-size: 20px;
  }
  min-height: 50vh;
`;

export default function Footer1() {
  return (
    <FooterStyle id="footer1">
        <p>
        ‘Well done is better than well said.’
        </p>
    </FooterStyle>
  );
}
