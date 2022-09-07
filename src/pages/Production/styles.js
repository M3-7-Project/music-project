import styled from "styled-components";
import albumImage from "../../assets/album-example.png";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: var(--grey-00);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const DefaultMargin = styled.div`
  margin: 0 15px;
`;

const DefaultContent = styled(DefaultMargin)`
  display: flex;
  width: 100%;
  max-width: 1000px;
`;

export const AlbumImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50vh;
  background-image: url(${({ url }) => url});
  background-position: 50% 50%;

  @media (min-width: 800px) {
    height: 70vh;
  }
`;

export const AlbumImageContent = styled(DefaultContent)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px 0;
`;

export const AlbumImageContentTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  svg {
    color: white;
  }
`;

export const AlbumImageContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40%;

  section {
    flex: 1;
    z-index: 2;
    position: relative;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: end;
    margin-bottom: 40px;

    @media screen and (max-width: 800px) {
      & > button {
        position: absolute;
        top: 40px;
        right: 25px;
      }
    }
  }

  div {
    color: white;
    h1 {
      font-family: "Roboto", sans-serif;
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 12px;
      font-weight: 300;
    }
  }

  svg {
    color: white;
  }
`;

export const FlexContent = styled(DefaultContent)`
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row-reverse;
    padding: 20px 0;
  }
`;

export const MidContent = styled(DefaultMargin)`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  color: white;
  font-size: 12px;
  line-height: 18px;

  @media (min-width: 800px) {
    width: 30%;
    padding: 0;
  }
`;

export const AlbumDescription = styled.div`
  margin-bottom: 15px;
`;

export const SocialMedia = styled.div`
  font-size: 16px;
`;

export const SocialMedias = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 25px 0;
  svg {
    width: 15%;
    max-width: 43px;
    height: 15%;
  }
`;

export const PeopleWaiting = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  h2 {
    width: 40%;
    font-size: 40px;
    font-weight: 700;
  }
  p {
    width: 40%;
  }
`;

export const MusicList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  gap: 15px;
`;

export const DropDown = styled.div`
  width: 250px;
  height: 100px;
  border-radius: 10px;
  background-color: var(--grey-00);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  padding: 10px;
  bottom: 75px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  animation: ${({ animation }) => animation} 0.6s forwards;

  & > button {
    background-color: transparent;
    border: none;
    color: var(--grey-03);
    cursor: pointer;
  }

  @keyframes open {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes close {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @media screen and (max-width: 800px) {
    & {
      width: 150px;
      height: 120px;
      bottom: 135px;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #272c31;
`;
export const Triangle = styled.div`
  position: absolute;
  bottom: -20px;
  right: 10px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 30px solid var(--grey-00);

  @media screen and (max-width: 800px) {
    & {
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 20px solid var(--grey-00);
      transform: rotateX(180deg);
      bottom: 115px;
    }
  }
`;
