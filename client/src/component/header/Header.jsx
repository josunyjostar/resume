import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1000px;
  height: 220px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.3);
  background-color: #4dd0e1;

  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <React.Fragment>
      <Container>
        <div>Header</div>
      </Container>
    </React.Fragment>
  );
}

export default Header;
