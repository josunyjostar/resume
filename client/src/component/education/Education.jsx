import React from "react";
import styled from "styled-components";
import Hr from "../common/Hr";

const Container = styled.div`
  /* border: 1px red solid; */
  width: ${(props) => props.theme.webWidth};
  margin: 0 auto;
  background-color: ${(props) => props.theme.subColor};
  padding-top: 1rem;

  .section {
    display: flex;
    font-size: 0.9rem;
    padding-top: 1rem;

    .left {
      width: 20%;
      /* border: 1px green solid; */
    }

    .right {
      width: 80%;
      /* border: 1px blue solid; */

      .organization {
        font-weight: bold;
        font-size: 1.2rem;
        padding-bottom: 0.3rem;
      }

      .subtitle {
        padding-bottom: 0.5rem;
      }
      .desc {
        padding-left: 1.3rem;
        line-height: 1.8;
      }
    }
  }
`;

function Education({ data }) {
  const { subject, contents } = data;
  return (
    <React.Fragment>
      <Container>
        <div className="container">
          <h2 className="subject">{subject}</h2>
          <Hr t={1} b={1} width={80} />
          {contents.map((v, i) => {
            const { period, organization, subtitle, desc } = v;
            return (
              <div className="section" key={i}>
                <div className="left">
                  <div>{period}</div>
                </div>
                <div className="right">
                  <div className="organization">{organization}</div>
                  <div className="subtitle">{subtitle}</div>
                  <ul className="desc">
                    {desc.map((content, idx) => {
                      return (
                        <li key={idx}>
                          {content.main}
                          {content.sub?.map((val, subIdx) => {
                            return <div key={subIdx}>{val}</div>;
                          })}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Education;
