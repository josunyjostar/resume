import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.theme.webWidth};
  height: 140px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.subColor};

  display: flex;
  justify-content: left;
  align-items: center;
  padding: 3rem ${(props) => props.theme.containerPaddingLR} 1.5rem ${(props) => props.theme.containerPaddingLR};

  font-size: 1.2rem;

  .date {
    width: 100%;
    height: 100%;
    font-size: 0.1rem;

    display: flex;
    flex-direction: row-reverse;

    > div {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;

function Footer({ data }) {
  const { updated_at } = data;
  return (
    <React.Fragment>
      <Container>
        <div className="date">
          <div>{updated_at}</div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Footer;
