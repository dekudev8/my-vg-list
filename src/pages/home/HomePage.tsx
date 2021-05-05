import React from "react";
import styled from "styled-components";

const HomePageContainer = styled.div``;
const TopHeader = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

export const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <TopHeader>HEY THERE GAMERS ARE YOU READY TO GAME</TopHeader>
    </HomePageContainer>
  );
};
