import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100vw;
  height: 220px;

  background: #272c31;
  color: #ffffff;
  box-shadow: 8px 3px 22px 10px rgba(0, 0, 0, 0.13);

  font-family: "Poppins";
  font-weight: 300;
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  width: 85%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  div {
    display: flex;
    gap: 40px;
  }
`;
