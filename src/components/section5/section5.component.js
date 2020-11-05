import React from "react";
import styled from "styled-components";

import Wrapper from "../wrapper/wrapper.component";
import "./section5.component.css";
import Contact from "../contact/Contact.js";

const Section1Styled = styled.div``;

export default function Section5() {
  return (
    <Section1Styled id="section5">
      <Wrapper>
        <Contact />
      </Wrapper>
    </Section1Styled>
  );
}
