import React from "react";
import logo from "../../logo.svg";
import styled from "styled-components";
import { SiteLink } from "../../common/components";

const LandingPageContainer = styled.header`
  background-color: blanchedalmond;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const Logo = styled.img`
  transform: scale(0.5);
  margin-bottom: -80px;
`;
const Intro = styled.p`
  color: black;
`;

export const LandingPage: React.FC = () => {
  return (
    <>
      <LandingPageContainer>
        <Logo src={logo} />
        <Intro>
          Hey there! This is a website where you save a list of
          <br />
          video games you have played. Come build a collection!
        </Intro>
        <SiteLink to='/main'>Go to real site</SiteLink>
      </LandingPageContainer>
    </>
  );
};
