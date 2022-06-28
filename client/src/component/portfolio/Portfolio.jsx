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
    width: 100%;
    display: flex;
    font-size: 0.9rem;
    padding-top: 1rem;

    h3 {
      font-size: 1.5rem;
    }

    .left {
      width: 20%;
      /* border: 1px red solid; */
      flex-direction: column;
      line-height: 2;
    }

    .right {
      width: 80%;
      line-height: 1.7;
      /* border: 1px green solid; */

      a {
        text-decoration: underline;
      }

      ul {
        padding-left: 1.2rem;
        line-height: 1.8;
      }
    }
  }
`;

function Portfolio({ data }) {
  const { subject, contents } = data;
  return (
    <React.Fragment>
      <Container>
        <div className="container">
          <h2 className="subject">{subject}</h2>
          <Hr t={1} b={1} width={80} />
          {contents.map((v, i) => {
            const { leftSection: l, rightSection: r } = v;
            return (
              <section className="section" key={i}>
                <div className="left">
                  <div>{l.period}</div>
                  <div>{l.institution}</div>
                  <div>{l.order}</div>
                  <div>{l.setup}</div>
                </div>
                <div className="right">
                  <h3>{r.title}</h3>
                  <div>
                    <span>{r.subtitle}</span>
                    <span> ( </span>
                    <a href={r.url} target="_blank" rel="noreferrer">
                      배포
                    </a>
                    <span> | </span>
                    <a href={r.github} target="_blank" rel="noreferrer">
                      깃헙
                    </a>
                    <span> | </span>
                    <a href={r.prototype} target="_blank" rel="noreferrer">
                      기획서
                    </a>
                    <span> ) </span>
                  </div>
                  <div>
                    <span className="strong">{`${r.role} ${r.skills}`}</span>
                    <Hr t={1} b={1} width={100} />
                    <div>{r.part}</div>
                    <ul>
                      {r.desc.map((v, i) => {
                        return (
                          <li key={i}>
                            {v.main}
                            {v.sub !== null ? <div>{v.sub}</div> : null}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Portfolio;
