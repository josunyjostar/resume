import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import styled, { ThemeProvider } from "styled-components";
import Resume from "./page/Resume";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
  border: none;
`;

const App = () => {
  return (
    <Layout>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Resume />
      </ThemeProvider>
    </Layout>
  );
};

export default App;
