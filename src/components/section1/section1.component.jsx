import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Wrapper from '../wrapper/wrapper.component';
import "./section1.component.css";



const Section1Styled = styled.div`
  .active {
    border-bottom: 1px solid white;
  }
  font-family: "Saira Stencil One", cursive;
 h1{
    font-weight: 1;
    color: #f8f8f8;
    margin-top: 0;
    font-size: 120px;
 }
  p{
  color: #f8f8f8;
  font-size: 25px; 
  }
a{
  font-weight: 500;
  color: #f8f8f8;
  font-size: 20px;
  }
`;

export default function Section1() {
  return (
    <Section1Styled id="section1">
      <Wrapper>
        <h1>SAM QI</h1>
        <p>
        ‘If you want something you’ve never had, you must be willing to do something you’ve never done.’
        </p>
        <a>— Thomas Jefferson</a>
        <div className="social-media">
          <FacebookIcon style={{ fontSize: 50}}/>
          <GitHubIcon style={{ fontSize: 50}}/>
          <LinkedInIcon style={{ fontSize: 50}}/>
          <InstagramIcon style={{ fontSize: 50}}/>
        </div>
      </Wrapper>
    </Section1Styled>
  );
}
