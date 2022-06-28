import React from "react";
import styled from "styled-components";
import Hr from "../common/Hr";

const Container = styled.div`
  /* border: 1px red solid; */
  width: ${(props) => props.theme.webWidth};
  margin: 0 auto;
  background-color: ${(props) => props.theme.subColor};
  padding-top: 1rem;

  .content {
    font-size: 0.9rem;
    li {
      list-style: none;
      font-weight: 550;
      line-height: 1.8;
      margin-top: 0.3rem;
    }
  }
`;

function Skills({ data }) {
  const { subject, desc1, desc2 } = data;
  return (
    <React.Fragment>
      <Container>
        <div className="container">
          <h2 className="subject">{subject}</h2>
          <Hr t={1} b={1} width={80} />
          <ul className="content">
            <li>{desc1}</li>
            <li>{desc2}</li>
          </ul>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Skills;
