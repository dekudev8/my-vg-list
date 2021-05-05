import React from "react";
import styled from "styled-components";
import { SiteLink } from "../../common/components";

const TopHeader = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

export const HomePage: React.FC = () => {
  return (
    <>
      <TopHeader>HEY THERE GAMERS ARE YOU READY TO GAME</TopHeader>
      <SiteLink to='/'>Go back to the landing page</SiteLink>
    </>
  );
};
