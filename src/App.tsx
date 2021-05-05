import React from "react";
import styled from "styled-components";
import { MainRouter } from "./routers";

const AppContainer = styled.div``;

const App: React.FC = () => {
  return (
    <AppContainer>
      <MainRouter />
    </AppContainer>
  );
};

export default App;
