import styled from "styled-components";

export const LoadingStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(18, 18, 20, 0.6);

  .container {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  .column {
    width: 10px;
    height: 70px;
    background: #fff;
    display: inline-block;
    transform-origin: bottom center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    animation: loader 1.2s linear infinite;
  }
  .column1 {
    animation-delay: 0.1s;
  }
  .column2 {
    animation-delay: 0.2s;
  }
  .column3 {
    animation-delay: 0.3s;
  }
  .column4 {
    animation-delay: 0.4s;
  }
  .column5 {
    animation-delay: 0.5s;
  }
  .column6 {
    animation-delay: 0.6s;
  }
  .column7 {
    animation-delay: 0.7s;
  }
  .column8 {
    animation-delay: 0.8s;
  }

  @keyframes loader {
    0% {
      transform: scaleY(0.1);
      background: transparent;
    }
    50% {
      transform: scaleY(1);
      background: #4D194D;
    }
    100% {
      transform: scaleY(0.1);
      background: transparent;
    }
  }
`;
