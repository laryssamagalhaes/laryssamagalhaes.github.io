import styled, { keyframes } from "styled-components";

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const Background = styled.div`
  background-color: #f85f8b;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  svg {
    max-width: 100%;
  }

  svg line {
    fill: none;
    stroke: #000;
    stroke-width: 1;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${dash} 5s linear forwards;
    animation-delay: 0.5s;
  }

  @media (max-width: 480px) {
    height: auto;
  }
`;
