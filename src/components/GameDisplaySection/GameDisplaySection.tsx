import React from "react";
import styled from "styled-components";
import { getGameTitles } from "../../functions";

const SectionContainer = styled.div``;
const GamesSectionHeader = styled.h1``;

export const GameDisplaySection: React.FC = () => {
  const marioGames = getGameTitles();

  return (
    <>
      <SectionContainer>
        <GamesSectionHeader>Check these games out!</GamesSectionHeader>
        <div>{marioGames}</div>
      </SectionContainer>
    </>
  );
};
