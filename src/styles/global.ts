import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
    color: #000;
  }

  html {
    scroll-behavior: smooth;
  }

  main {
    display: flex;
  }

  .descriptionContainer {
    height: calc(100vh - 121px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 50px;
    max-width: 700px;
  }

  .flex-05 {
    flex: 0.5;
  }

  @media (max-width: 480px) {
    main {
      flex-direction: column;
    }

    .descriptionContainer {
      padding: 30px;
      height: auto;
    }
  }
`;

export default GlobalStyle;
