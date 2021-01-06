import React from "react";
import styled from "styled-components";

type PropsType = {
  text: string;
};

const P = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 1px;
`;

const Description = ({ text }: PropsType) => <P>{text}</P>;

export default Description;
