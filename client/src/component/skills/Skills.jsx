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
    line-height: 1.8;

    .category {
      font-weight: 550;
      padding-right: 0.5rem;
    }
    .desc {
      font-weight: 550;
      padding-right: 0.5rem;
    }
  }
`;

function Skills({ data }) {
  const { subject, contents } = data;
  console.log(contents);
  return (
    <React.Fragment>
      <Container>
        <div className="container">
          <h2 className="subject">{subject}</h2>
          <Hr t={1} b={1} width={80} />
          <ul className="content">
            {contents.map((v, i) => {
              return (
                <div key={i}>
                  <span className="category">{v.category}</span>
                  {v.desc.map((stack, i) => {
                    return (
                      <span key={i} className="desc">
                        {i !== v.desc.length - 1 ? stack + "," : stack}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </ul>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Skills;
