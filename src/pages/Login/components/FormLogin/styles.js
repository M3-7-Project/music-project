import styled from "styled-components";

export const FormStyled = styled.form`
  width: 25rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    height: 2.5rem;

    background-color: #272c31;
    border: none;
    border-radius: 0.625rem;
    outline: 0;

    margin-bottom: 1rem;

    &::placeholder {
      font-weight: 300;
      font-size: 0.875rem;
      color: #6c757d;
    }
  }

  button {
    width: 100%;
    height: 2.5rem;

    background-color: #4D194D;
    border: none;
    border-radius: 3.125rem;

    font-weight: 500;
    font-size: 1.375rem;
    color: #F8F9FA;
  }
`;
