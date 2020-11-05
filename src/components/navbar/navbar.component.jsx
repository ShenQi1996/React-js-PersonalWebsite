import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-scroll';
import OnScreenScrolling from '../on-screen-scrolling/on-screen-scrolling.component';
import Wrapper from '../wrapper/wrapper.component';

const NavbarStyled = styled.div`
  font-size: 24px;
  position: fixed;
  width: 100%;
  z-index: 999;
  .header {
    background: black;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    margin: 0;
    color: white;
    font-family: "Saira Stencil One", cursive;
    * {
      cursor: pointer;
    }
    .active {
      border-bottom: 1px solid white;
    }
  }
  .scrolling-buttons {
    display: flex;
    flex-direction: column;
  }
  .logo{
    border-radius: 200px;
    height: 35px;
    width: 30px;
  }
`;




export default function Navbar() {

  return (
    <NavbarStyled>
      <div className="header">
        <Link activeClass="active" to="section2" spy={true} smooth={true} duration={1000}>
          ABOUT ME
        </Link>
        <Link activeClass="active" to="section3" spy={true} smooth={true} duration={1000}>
         PROJECTS
        </Link>
        <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
          <img src="https://images.cdn2.stockunlimited.net/clipart/side-view-of-a-silhouette-man_1358872.jpg" className="logo"/>  
        </Link>
        <Link activeClass="active" to="section4" spy={true} smooth={true} duration={1000}>
          EXPERIENCES
        </Link>
        <Link activeClass="active" to="section5" spy={true} smooth={true} duration={1000}>
          CONTACTS
        </Link>
      </div>
      {/**      <div className="scrolling-buttons">
        <Wrapper>
        <OnScreenScrolling />
        </Wrapper>
      </div> */}

    </NavbarStyled>
  );
}
