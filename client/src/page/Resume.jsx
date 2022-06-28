import React from "react";
import styled from "styled-components";
import Header from "../component/header/Header";
import Contact from "../component/contact/Contact";
import Introduction from "../component/introduction/Introduction";
import Skills from "../component/skills/Skills";
import Portfolio from "../component/portfolio/Portfolio";

const Container = styled.div`
  /* width: 990px;
  margin: 0 auto;
  height: inherit; */
  /* background: rgba(255, 255, 255, 0.3); */

  width: 100%;
  overflow-x: hidden;

  .container {
    width: ${(props) => props.theme.webWidth};
    height: auto;
    margin: 0 auto;
    background-color: ${(props) => props.theme.subColor};

    display: flex;
    flex-direction: column;
    justify-content: left;

    padding-left: ${(props) => props.theme.containerPaddingLR};
    padding-right: ${(props) => props.theme.containerPaddingLR};
    font-size: ${(props) => props.theme.subjectFontSize};

    .subject {
      color: ${(props) => props.theme.subjectColor};
    }

    .strong {
      font-weight: bold;
    }
  }

  .education {
    width: 100%;
    height: 220px;
    background-color: #3e2723;
  }

  .study {
    width: 100%;
    height: 220px;
    background-color: #5d4037;
  }
  .footer {
    width: 100%;
    height: 220px;
    background-color: #6d4c41;
  }
`;

function Resume({ data }) {
  return (
    <React.Fragment>
      <Container>
        <Header data={data.get("header")} />
        <Contact data={data.get("contact")} />
        <Introduction data={data.get("introduction")} />
        <Skills data={data.get("skills")} />
        <Portfolio data={data.get("portfolio")} />
        <div className="education">education</div>
        <div className="study">study</div>
        <div className="footer">footer</div>
      </Container>
    </React.Fragment>
  );
}

export default Resume;
