import styled from "styled-components";

export const MainContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin: 90px auto;
  align-items: center;
  position: relative;

  @media (max-width: 424px) {
    margin: 40px auto;
  }

  @media (max-width: 950px) {
    flex-direction: column;
  }

  img {
    filter: blur(3px);
    opacity: 0.5;
    position: absolute;
    left: 50%;
    margin-left: -201px;

    @media (max-width: 425px) {
      width: 320px;
      margin-left: -160px;
    }
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  z-index: 1;
  color: #f8f9fa;
  font-family: "Roboto";

  @media (max-width: 950px) {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 600px;
  }

  h1 {
    font-size: 80px;
    font-weight: 700;
    text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.4);
    line-height: 94px;

    @media (max-width: 424px) {
      font-size: 40px;
      line-height: 55px;
    }

    @media (min-width: 425px) and (max-width: 950px) {
      font-size: 65px;
      line-height: 76px;
    }
  }

  p {
    margin-top: 1.5rem;
    width: 65%;
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;

    @media (max-width: 424px) {
    }

    @media (max-width: 950px) {
      width: 80%;
      text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.4);
      margin: auto;
    }
  }
`;

export const BaloonsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
  gap: 57px;
  z-index: 1;

  @media (max-width: 950px) {
    width: 100%;
    align-items: center;
    gap: 0;
  }

  div {
    width: 370px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4d194d;
    border-radius: 20px;

    color: #f8f9fa;

    padding: 5px;

    @media (max-width: 950px) {
      width: 320px;
      height: 90px;
      margin-top: 15px;
    }

    p {
      font-family: "Roboto";
      font-size: 22px;
      line-height: 33px;
      text-align: center;

      @media (max-width: 950px) {
        font-size: 18px;
      }
    }
  }

  button {
    width: 370px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #a76cb2;
    border-radius: 20px;
    color: #f8f9fa;
    border: none;

    padding: 5px;

    cursor: pointer;

    &:hover {
      background: rgba(167, 108, 178, 0.75);
    }

    @media (max-width: 950px) {
      width: 320px;
      height: 90px;
      margin-top: 15px;
    }
    p {
      font-family: "Roboto";
      font-size: 22px;
      line-height: 33px;
      text-align: center;

      @media (max-width: 950px) {
        font-size: 18px;
      }
    }
  }
`;
