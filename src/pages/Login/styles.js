import styled from "styled-components";
import loginImg from "../../assets/loginImage.jpg";

export const LoginStyled = styled.div`
  display: flex;
  justify-content: center;

  padding: 0 1rem;

  width: 100vw;
  height: 100vh;

  background: url(${loginImg});
  background-size: cover;

  .loginFormSection {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    padding: 2rem;
    box-shadow: 0 100% 40px 0 white;

    background-color: var(--grey-00);

    div {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      img {
        margin-bottom: 4rem;
      }

      h2 {
        font-weight: 500;
        font-size: 1.375rem;
        color: #ffffff;

        margin-bottom: 1.188rem;
      }

      a {
        font-weight: 300;
        font-size: 0.875rem;
        text-decoration: none;
        color: #f8f9fa;

        margin-top: 1.188rem;

        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          color: var(--emphasis-1);
        }
      }
    }
  }

  @media screen and (min-width: 900px) {
    justify-content: initial;
    padding: initial;

    .loginFormSection {
      width: 35rem;
    }
  }

  @media screen and (min-width: 500px) and (max-width: 900px) {
    padding: initial;

    .loginFormSection {
      width: 30rem;
      padding: 3rem;
    }
  }
`;
