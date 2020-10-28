import React from 'react';
import styled from 'styled-components';

import Wrapper from '../wrapper/wrapper.component';
import "./footer.component.css";


const FooterStyle = styled.div`
  color: #fffdfd;
  font-family: 'Libre Baskerville', serif;
  p{
    font-weight: 900;
  }
`;

export default function Footer1() {
  return (
    <FooterStyle id="footer1">
      <Wrapper>
        <p>
        ‘Well done is better than well said.’
        </p>
      </Wrapper>
    </FooterStyle>
  );
}
