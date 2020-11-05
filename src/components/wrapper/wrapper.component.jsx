import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: dashed;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  font-family: "Saira Stencil One", cursive;
  h1 {
    font-size: 90px;
  }
  p {
    font-size: 20px;
  }
`;

export default function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}
