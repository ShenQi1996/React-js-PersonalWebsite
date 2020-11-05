import React from 'react';
import styled from 'styled-components';
import "./section3.component.css";
import Wrapper from '../wrapper/wrapper.component';
import Button from '@material-ui/core/Button';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Section3Styled = styled.div`
h1{
  color: white;
  margin: 0;
}
`;

export default function Section3() {
  return (
    <Section3Styled id="section3">
      <Wrapper>
      <h1>PROJECTS</h1>
        <div className="prof-box">
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"  className="leftBox">
            <h2>WEATHER-APP </h2>
            <p>
            My first React App. This App allow the user to seach the temperature of any city or country.
          </p>
            <div className="test1">
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="rightBot">
            <h2>NETFLIX- CLONE</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat blanditiis adipisci eaque animi repellat
            atque assumenda corporis quidem nostrum ea, nulla qui cupiditate suscipit, quisquam voluptas mollitia ex iusto
            voluptates.
          </p>
            <div className="test2"></div>
          </div>
          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1050" className="leftBox">
            <h2>TODO APP</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat blanditiis adipisci eaque animi repellat
            atque assumenda corporis quidem nostrum ea, nulla qui cupiditate suscipit, quisquam voluptas mollitia ex iusto
            voluptates.
          </p>
            <div className="test3"></div>
          </div>
          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1050"  className="rightBot">
            <h2>WEBSITE</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat blanditiis adipisci eaque animi repellat
            atque assumenda corporis quidem nostrum ea, nulla qui cupiditate suscipit, quisquam voluptas mollitia ex iusto
            voluptates.
          </p>
            <div className="test4"></div>
          </div>       
        </div>
        <Button size="large"  href="https://github.com/ShenQi1996?tab=repositories" variant="contained">More Projects</Button>
      </Wrapper>
    </Section3Styled>
  );
}
