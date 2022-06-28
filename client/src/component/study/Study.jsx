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
    padding-left: 1.5rem;
    li {
      line-height: 1.8;
    }
  }
`;

function Study({ data }) {
  const { subject, contents } = data;
  console.log(contents);
  return (
    <React.Fragment>
      <Container>
        <div className="container">
          <h2 className="subject">{subject}</h2>
          <Hr t={1} b={1} width={100} />
          <ul className="content">
            {contents.map((v, i) => {
              return <li key={i}>{v}</li>;
            })}
          </ul>
          <Hr t={1} b={1} width={100} />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Study;
