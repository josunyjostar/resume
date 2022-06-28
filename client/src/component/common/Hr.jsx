import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;

  padding-top: ${(props) => props.t + "vh"};
  padding-bottom: ${(props) => props.b + "vh"};

  width: 100%;

  .hr {
    width: 100%;
  }
`;

const Hr = ({ className = "", t = 1, b = 1, width = 100 }) => {
  return (
    <Wrapper className={className} t={t} b={b} width={width}>
      <hr className="hr" />
    </Wrapper>
  );
};

export default Hr;
