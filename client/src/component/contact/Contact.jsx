import React from "react";
import styled from "styled-components";
import Hr from "../common/Hr";

const Container = styled.div`
  width: ${(props) => props.theme.webWidth};
  height: 340px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.subColor};

  display: flex;
  flex-direction: column;
  justify-content: left;

  padding-left: ${(props) => props.theme.containerPaddingLR};
  padding-right: ${(props) => props.theme.containerPaddingLR};
  font-size: ${(props) => props.theme.subjectFontSize};

  /* border: 1px red solid; */

  .subject {
    color: ${(props) => props.theme.subjectColor};
  }

  .content {
    font-size: 0.9rem;
    padding-left: 1.5rem;
    li {
      font-weight: 550;
      line-height: 1.8;
    }
  }
`;

function Contact({ data }) {
  console.log(data);
  const { subject, email, mobile } = data;
  return (
    <React.Fragment>
      <Container>
        <h2 className="subject">{subject}</h2>
        <Hr t={1} b={1} width={80} />
        <ul className="content">
          <li>{`Mobile: ${mobile}`}</li>
          <li>{`E-mail: ${email}`}</li>
        </ul>
      </Container>
    </React.Fragment>
  );
}

export default Contact;
