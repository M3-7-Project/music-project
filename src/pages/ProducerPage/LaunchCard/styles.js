import styled from "styled-components";

export const Launch = styled.section`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  background-color: var(--grey-01);
  box-shadow: 8px 3px 22px 10px rgba(0, 0, 0, 0.13);
  padding: 20px;
  display: flex;
  gap: 20px;

  @media screen and (max-width: 1000px) {
    & {
      height: 50vw;
    }
  }

  @media screen and (max-width: 800px) {
    & {
      flex-direction: column;
      align-items: center;
      min-height: 550px;
    }
  }

  @media screen and (max-width: 500px) {
    & {
      min-height: 800px;
    }
  }
`;
export const ImageDiv = styled.div`
  flex: 3;
  width: 400px;
  max-width: 400px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  }

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.3s;
  }

  &:hover {
    img {
      height: 120%;
    }
  }

  @media screen and (max-width: 800px) {
    & {
      width: 100%;
      max-width: 100%;
      height: 200px;
      min-height: 200px;
    }
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Content = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  & > p {
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    text-align: justify;
    color: var(--grey-03);
  }

  @media screen and (max-width: 800px) {
    & > p {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const Title = styled.div`
  & h2 {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 40px;
    color: var(--grey-03);
  }

  & h4 {
    margin-top: 10px;
    font-weight: 400;
    font-size: 16px;
    color: var(--grey-03);
  }

  @media screen and (max-width: 800px) {
    & > h2 {
      font-size: 28px;
    }
    & > h4 {
      font-size: 14px;
      margin-top: 5px;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
