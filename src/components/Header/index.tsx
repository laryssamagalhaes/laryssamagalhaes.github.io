import React from "react";

import logo from "../../logo.svg";

import { StyledHeader, UL } from "./styles";

const Header = () => (
  <StyledHeader>
    <nav>
      <UL>
        <li>
          <img src={logo} alt="logo com símbolo de </>" />
        </li>
        <li>
          <a target="_blank" href="https://github.com/laryssamagalhaes">
            Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UC-6IyiRunjGl0acqL_mKBQg"
          >
            Youtube
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/laryssa-magalhaes/"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a target="_blank" href="https://medium.com/@larymagal">
            Blog
          </a>
        </li>
      </UL>
    </nav>
  </StyledHeader>
);

export default Header;
