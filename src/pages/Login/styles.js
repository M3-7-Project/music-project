import styled from "styled-components";

export const LoginStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #212529;

  section {
    width: 100%;
    height: 100%;
    display: flex;

    div {
      width: 40%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      img {
        margin-bottom: 4rem;
      }

      h2 {
        width: 25rem;
        max-width: 100%;
        font-weight: 500;
        font-size: 1.375rem;
        color: #ffffff;

        margin-bottom: 1.188rem;
      }

      a {
        font-weight: 300;
        font-size: 0.875rem;
        color: #f8f9fa;

        margin-top: 1.188rem;

        cursor: pointer;
      }
    }

    div + div {
      display: block;
      width: 60%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0;
        margin: 0;
      }
    }
  }
`;
