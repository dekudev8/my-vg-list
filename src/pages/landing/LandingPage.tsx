import React from "react";
import logo from "../../logo.svg";
import styled from "styled-components";
import { SiteLink } from "../../common/components";

const LandingPageContainer = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const Logo = styled.img``;
const Intro = styled.p``;

export const LandingPage: React.FC = () => {
  return (
    <>
      <LandingPageContainer>
        <Logo src={logo} />
        <Intro>
          Edit <code>src/App.js</code> and save to reload.
        </Intro>
        <SiteLink to='/main'>Go to real site</SiteLink>
      </LandingPageContainer>
    </>
  );
};
