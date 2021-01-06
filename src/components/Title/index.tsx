import React from "react";
import styled from "styled-components";

type PropsType = {
  text: string;
};

const H1 = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const Title = ({ text }: PropsType) => <H1>{text}</H1>;

export default Title;
