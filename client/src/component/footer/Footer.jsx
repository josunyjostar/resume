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
`;

function Footer() {
  return (
    <React.Fragment>
      <Container></Container>
    </React.Fragment>
  );
}

export default Footer;
