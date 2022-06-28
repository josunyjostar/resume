import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import styled, { ThemeProvider } from "styled-components";
import Resume from "./page/Resume";
import data from "./resources/resume";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
  position: absolute;

  background-color: ${(props) => props.theme.mainColor};
`;

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Layout>
          <Resume data={data} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
