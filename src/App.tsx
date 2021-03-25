import React from "react"
import logo from "./logo.svg"
import styled from "styled-components"
import { MainRouter } from "./routers"
import { Link } from "react-router-dom"

const AppContainer = styled.div``
const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const Logo = styled.img``
const Intro = styled.p``
const SiteLink = styled(Link)``

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header>
        <Logo src={logo} />
        <Intro>
          Edit <code>src/App.js</code> and save to reload.
        </Intro>
        <MainRouter>
          <SiteLink to='/main'>Go to real site</SiteLink>
        </MainRouter>
      </Header>
    </AppContainer>
  )
}

export default App
