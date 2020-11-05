import React from 'react';
import styled from 'styled-components';
import "./section2.component.css"
import Wrapper from '../wrapper/wrapper.component';
import profile2 from "./profile2.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Section2Styled = styled.div`
  /** font-family: 'Bebas Neue', cursive; */
`;

export default function Section2() {
  return (
    <Section2Styled id="section2">
      <Wrapper>
        <div  data-aos="zoom-in" className="card">
            <div  className="Box1">
              <div className="bio">
                <h1 >ABOUT ME</h1>
                <p>
                  <a className="small">  
                    A PROVEN LEADER WITH NUMBER OF YEARS OF EXPERIENCE WHO IS DRIVEN TO MAKE THE WORLD A BETTER PLACE ONE SOLUTION AT A TIME.
                   <br/>
                  </a>
                  <a className="small">  
                    CREATE  A PERSONAL BRAND THAT PEOPLE REMEMBER ME, BUILD THINGS THAT REPRESENT ME, AND APPRECIATE PEOPLE THAT HELPED ME.  
                    <br/>
                  </a>
                  <a className="big">  
                   DEVELOPING, STREAMLINING, AND DELIVERING SOFTWARE AND WEBSITES USED BY MANY BUSINESSS.
                   <br/>
                  </a>
                </p>
              </div>
              <img   className="proImage" src={profile2}/>
            </div>
        </div>
      </Wrapper>
    </Section2Styled>
  );
}
