import styled from "styled-components";

export const ModalStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;

  section {
    width: 85%;
    max-width: 100%;

    margin: 0 auto;

    h2 {
      font-weight: 300;
      font-size: 1.125rem;
      color: #f8f9fa;
      text-align: center;

      margin-top: 2.5rem;
    }

    h3 {
      font-weight: 500;
      font-size: 1.375rem;
      color: #f8f9fa;
      text-align: center;

      margin: 1.875rem 0 2.5rem 0;
    }
  }

  > div {
    width: 30rem;
    background-color: #212529;
    border-radius: 0.625rem;

    > div {
      > div {
        position: relative;
        > img {
          width: 4.375rem;
          position: absolute;
          left: -30px;
          top: -28px;
        }

        > button {
          position: absolute;
          right: 0;
          top: 4px;
        }
        display: flex;
      }
    }

    form {
      > div {
        width: 100%;
        display: flex;
        align-items: center;

        margin-top: 0.625rem;
      }
    }
  }
`;
