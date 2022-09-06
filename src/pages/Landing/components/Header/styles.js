import styled from "styled-components";

export const HeaderSection = styled.header`
  width: 100vw;
  height: 60px;

  background: #272C31;
  color: #FFFFFF;
  box-shadow: 8px 3px 22px 10px rgba(0, 0, 0, 0.13);

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 22px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderContainer = styled.header`
  width: 85%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    position: relative;
    top: 30px;

    @media (max-width: 424px) {
      position: static;
      width: 90px;
    }
  }

  div {
    display: flex;
    gap: 42px;

    @media (max-width: 424px) {
      gap: 10px;
    }

    a {
      cursor: pointer;

      &:hover {
        color: rgba(255, 255, 255, .75);
        text-decoration: underline 0.75px;
      }
    }
  }
`