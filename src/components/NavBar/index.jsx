import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const NavBar = ({ children }) => {
  return <NavBarContainer>{children}</NavBarContainer>;
};

export default NavBar;
