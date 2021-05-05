import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopHeader = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;
const SiteLink = styled(Link)``;

export const HomePage: React.FC = () => {
  return (
    <>
      <TopHeader>HEY THERE GAMERS ARE YOU READY TO GAME</TopHeader>
      <SiteLink to='/'>Go back to the LAMEding page</SiteLink>
    </>
  );
};
