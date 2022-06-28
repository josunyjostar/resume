import React from "react";
import styled from "styled-components";
import Hr from "../common/Hr";

const Container = styled.div`
  /* border: 1px red solid; */

  .content {
    font-size: 0.9rem;
    padding-left: 1.5rem;
    li {
      line-height: 1.8;
    }
  }
`;

function Contact({ data }) {
  const { subject, email, mobile } = data;
  return (
    <React.Fragment>
      <Container>
        <div className="container">
          <h2 className="subject">{subject}</h2>
          <Hr t={1} b={1} width={80} />
          <ul className="content">
            <li className="strong">{`Mobile: ${mobile}`}</li>
            <li className="strong">{`E-mail: ${email}`}</li>
          </ul>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Contact;
