import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1000px;
  height: 140px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.3);
  background-color: ${(props) => props.theme.subColor};

  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: ${(props) => props.theme.paddingLR};

  font-size: 1.2rem;
`;

function Header({ data }) {
  const { name, desc } = data;
  return (
    <React.Fragment>
      <Container>
        <h1>{`${desc} ${name}`}</h1>
      </Container>
    </React.Fragment>
  );
}

export default Header;
