import styled from "styled-components";
import {motion} from "framer-motion"

export const Motion = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(18, 18, 20, 0.5);
`

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
  height: 78vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  #multi-select {
    border-radius: 8px 0 0 8px;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 50%;
      background-color: #272c31;
    }
    ::-webkit-scrollbar-thumb {
      position: relative;
      left: 100px;
      border-radius: 2px;
      background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%);
    }
  }

  .styled-input {
    box-sizing: border-box;
    width: 100%;
    padding: 9px 8px;
    background-color: #272c31;
    border-radius: 10px;
    border: 0;
    color: #6c757d;
    font-family: "Poppins", sans-serif;
    font-size: 12px;
  }

  .styled-input:focus {
    outline: 0;
  }
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

export const ButtonDelete = styled.button`
  width: 100%;
  height: 2.5rem;

  background-color: #a76cb2;
  cursor: pointer;

  border: none;
  border-radius: 3.125rem;

  font-weight: 500;
  font-size: 1.375rem;
  color: #f8f9fa;

  margin-bottom: 0.87rem;
`;
