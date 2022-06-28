import React from "react";
import styled from "styled-components";
import Header from "../component/header/Header";

const Container = styled.div`
  /* width: 990px;
  margin: 0 auto;
  height: inherit; */
  /* background: rgba(255, 255, 255, 0.3); */

  width: 100%;
  overflow-x: hidden;

  .contact {
    width: 100%;
    height: 320px;
    background-color: #ffe1e4;
  }

  .introduction {
    width: 100%;
    height: 220px;
    background-color: #fbd6e3;
  }

  .skills {
    width: 100%;
    height: 220px;
    background-color: #ead5ee;
  }

  .portpolio {
    width: 100%;
    height: 220px;
    background-color: #d6ebfd;
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

function Resume() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <div className="contact">contact</div>
        <div className="introduction">introduction</div>
        <div className="skills">skills</div>
        <div className="portpolio">portpolio</div>
        <div className="education">education</div>
        <div className="study">study</div>
        <div className="footer">footer</div>
      </Container>
    </React.Fragment>
  );
}

export default Resume;
