import React from "react";
import styled from "styled-components";
import { SiteLink } from "../../common/components";
import { GameDisplaySection } from "../../components/GameDisplaySection";

const PageContainer = styled.div``;
const TopHeader = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

const GamesSectionHeader = styled.h1``;

export const HomePage: React.FC = () => {
  return (
    <>
      <PageContainer>
        <TopHeader>HEY THERE GAMERS ARE YOU READY TO GAME</TopHeader>
        <SiteLink to='/'>Go back to the landing page</SiteLink>
        <GamesSectionHeader>Or check out these games!</GamesSectionHeader>
        <GameDisplaySection />
      </PageContainer>
    </>
  );
};
