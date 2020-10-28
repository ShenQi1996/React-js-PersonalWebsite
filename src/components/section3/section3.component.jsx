import React from 'react';
import styled from 'styled-components';
import "./section3.component.css";
import Wrapper from '../wrapper/wrapper.component';

const Section3Styled = styled.div``;

export default function Section3() {
  return (
    <Section3Styled id="section3">
      <Wrapper>
        <div className="prof-box">
          <div className="leftBox">
            <h2>Weight loss Program </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat blanditiis adipisci eaque animi repellat
            atque assumenda corporis quidem nostrum ea, nulla qui cupiditate suscipit, quisquam voluptas mollitia ex iusto
            voluptates.
          </p>
          </div>
          <div className="rightBot">
            <h2>Muscle gain Program</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat blanditiis adipisci eaque animi repellat
            atque assumenda corporis quidem nostrum ea, nulla qui cupiditate suscipit, quisquam voluptas mollitia ex iusto
            voluptates.
          </p>
          </div>     
        </div>
      </Wrapper>
    </Section3Styled>
  );
}
