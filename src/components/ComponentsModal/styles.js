import styled from "styled-components";

export const ButtonCriar = styled.button`
  width: 100%;
  height: 2.5rem;

  background-color: #4d194d;
  cursor: pointer;

  border: none;
  border-radius: 3.125rem;

  font-weight: 500;
  font-size: 1.375rem;
  color: #f8f9fa;

  margin-bottom: 0.87rem;
`;

export const InputModal = styled.input`
  width: 100%;
  height: 2.5rem;

  background-color: #272c31;

  border: none;
  border-radius: 0.625rem;

  outline: 0;
  margin-bottom: 0.3125rem;
  padding-left: 0.4375rem;

  &::placeholder {
    font-weight: 300;
    font-size: 0.875rem;
    color: #6c757d;
  }
`;

export const SpanModal = styled.span`
  font-weight: 300;
  font-size: 0.87rem;
  color: #ff2401;

  margin-bottom: 0.5rem;
`;

export const FormModal = styled.form`
  width: 85%;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
`;

export const ButtonModal = styled.button`
  background-color: transparent;

  cursor: pointer;

  border: none;

  > svg {
    color: #6c757d;
  }
`;

export const TitleModal = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  color: #f8f9fa;
  text-align: center;

  margin: 1.875rem 0 1.25rem 0;
`;
