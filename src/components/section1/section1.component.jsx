import React from 'react';
import styled from 'styled-components';

import Wrapper from '../wrapper/wrapper.component';
import "./section1.component.css";


const Section1Styled = styled.div`
  .active {
    border-bottom: 1px solid white;
  }
  color: #f8f8f8;
  font-family: 'Libre Baskerville', serif;
 h1{
  font-family: 'Abril Fatface', cursive;
  font-weight: 900;
 }
  p{
    font-weight: 900;
  }
  a{
    font-weight: 500;
  }
`;

export default function Section1() {
  return (
    <Section1Styled id="section1">
      <Wrapper>
        <h1>Sam Qi</h1>
        <a>Personal Trainer/ Font-End Programmer</a>
        <p>
        ‘If you want something you’ve never had, you must be willing to do something you’ve never done.’
        </p>
        <a>— Thomas Jefferson</a>
      </Wrapper>
    </Section1Styled>
  );
}
