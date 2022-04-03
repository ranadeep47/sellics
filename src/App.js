import { AppStateProvider  } from "./state";
import Home from './screens/Home'
import GlobalStyles from "./styles/global.css";
import styled from "styled-components";
import { devices } from "./styles/devices";

const Main = styled.main`
  background: #efefef;
`

const Layout = styled.div`
  @media ${devices.laptop} {
    width: 720px;  
  }
  min-height: 100vh;
  width: 100%;
  margin: auto;
  background: #fff;
`

export function App() {
  return (
    <AppStateProvider>
      <GlobalStyles />
      <Main>
        <Layout>
          <Home/>
        </Layout>
      </Main>
    </AppStateProvider>
  )
}