import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 30px;
`;

export const UL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  a {
    font-weight: 700;

    &:hover {
      border-bottom: 2px solid #f85f8b;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 35px;
    }

    a {
      font-size: 13px;
    }
  }
`;
