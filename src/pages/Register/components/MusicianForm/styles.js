import styled from "styled-components";
import { DefaultForm } from "../../styles";

export const MusicianFormStyles = styled(DefaultForm)`
  textarea {
    height: 150px;
    resize: none;
  }

  h4 {
    margin-bottom: 15px;
  }

  label {
    font-size: 12px;
    margin-left: 2px;
    margin-right: 10px;
  }

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

  a {
    font-weight: 300;
    font-size: 0.875rem;
    text-decoration: none;
    color: #f8f9fa;

    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: var(--emphasis-1);
    }
  }
`;

export const MusicalStyles = styled.div`
  display: flex;
  align-items: center;

  input {
    color: red;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px;
  margin: 15px 0;
  background-color: #4d194d;
  border: 0;
  border-radius: 50px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    filter: brightness(135%);
  }
`;
