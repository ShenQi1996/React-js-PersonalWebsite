import React from 'react';
import styled from 'styled-components';
import "./section2.component.css"
import Wrapper from '../wrapper/wrapper.component';
import profile from "./profile.svg";

const Section2Styled = styled.div`
  /** font-family: 'Bebas Neue', cursive; */
  
`;

export default function Section2() {
  return (
    <Section2Styled id="section2">
      <Wrapper>
        <h1 >About Me</h1>
            <img className="proImage" src={profile}/>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="bio">
                My attached resume outlines all that I could offer your organization. Here's the overview:
  My educational background has prepared me for the role of becoming a member of organization.  In particular, my study of Computer Science has given me a solid background so that I can perform basic programming. I am eager to contribute my enthusiasm and up-to-date skills to your organization.
  I am certain that my resume will give you a greater understanding of my qualifications for this exciting opportunity.
  I would greatly appreciate the opportunity to work with and learn from you. I look forward to speaking with you soon.
                  </p>
                </div>
                <div class="flip-card-back">
                <p className="bio">
                My attached resume outlines all that I could offer your organization. Here's the overview:
  My educational background has prepared me for the role of becoming a member of organization.  In particular, my study of Computer Science has given me a solid background so that I can perform basic programming. I am eager to contribute my enthusiasm and up-to-date skills to your organization.
  I am certain that my resume will give you a greater understanding of my qualifications for this exciting opportunity.
  I would greatly appreciate the opportunity to work with and learn from you. I look forward to speaking with you soon.
                  </p>
                </div>
              </div>
            </div>
      </Wrapper>
    </Section2Styled>
  );
}
