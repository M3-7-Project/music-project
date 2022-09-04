import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 2.5rem;
    color: var(--grey-03);

    background-color: #272c31;
    border: none;
    border-radius: 0.625rem;
    outline: 0;

    margin-bottom: 0.3rem;
    padding-left: 0.5rem;

    &::placeholder {
      font-weight: 300;
      font-size: 0.875rem;
      color: var(--grey-02);
    }
  }

  button {
    width: 100%;
    height: 2.5rem;

    background-color: #4d194d;
    border: none;
    border-radius: 3.125rem;

    font-size: 1rem;
    color: #f8f9fa;
    cursor: pointer;

    transition: all 0.5s;

    &:hover {
      filter: brightness(135%);
    }
  }

  span {
    font-weight: 300;
    font-size: 0.75rem;
    color: #ff2401;
    margin-bottom: 1rem;
  }
`;
