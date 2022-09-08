import styled from "styled-components";

export const DashboardWrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 10rem;

  background-color: var(--grey-00);

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--grey-03);
  }
`;

export const DashboardHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 10rem;

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    gap: 1.5rem;
  }

  @media screen and (max-width: 550px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 450px) {
    width: 100%;
    justify-content: center;
  }
`;

export const HeaderNavigationInput = styled.div`
  form {
    display: flex;
    align-items: center;
    background-color: var(--grey-01);
    padding: 0.5rem;
    border-radius: 8px;

    svg{
      color: white;
    }

    input {
      background-color: transparent;
      color: var(--grey-03);
      font-size: 0.9rem;

      &:placeholder {
        color: var(--grey-02);
      }

      &:focus {
        outline: none;
        border: none;
      }
    }

    @media screen and (max-width: 450px) {
      input {
        width: 100%;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      background-color: transparent;
      outline: none;
      border: none;
    }
  }
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  color: var(--grey-03);
  font-size: 0.9rem;

  svg {
    color: var(--grey-02);

    &:hover {
      transition: 400ms;
      color: var(--grey-03);
    }
  }

  button {
    background-color: transparent;

    border: none;

    cursor: pointer;
  }
`;

export const HeaderProfilePicture = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 100%;

  img {
    width: 100%;
  }
`;

export const DashboardMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 10rem;

  @media screen and (max-width: 580px) {
    padding: 1rem;
  }

  @media screen and (max-width: 840px) and (min-width: 580px) {
    padding: 2rem 8rem;
  }
`;

export const DashboardHottest = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const HottestTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 545px) {
    text-align: center;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ArrowButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    background-color: transparent;
    outline: none;
    border: none;
  }

  svg {
    color: var(--grey-03);
  }

  @media screen and (max-width: 545px) {
    gap: 2rem;
  }
`;

export const HottestProductionList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;

  list-style: none;

  small {
    color: #a5a5a5;
    font-size: 0.85rem;
  }

  @media screen and (max-width: 545px) {
    justify-content: center;
  }
`;

export const HottestProductionCard = styled.li`
  a {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-decoration: none;

    width: 180px;
    color: var(--grey-03);

    .imageWrapper {
      width: 180px;
      height: 180px;
      overflow: hidden;
      border-radius: 8px;
    }

    img {
      width: 180px;
      height: 180px;
      object-fit: cover;
      transition: all 0.3s;
    }

    p {
      text-align: center;
      padding: 0.2rem;
      overflow: hidden;
    }

    &:hover {
      img {
        transform: scale(110%);
      }
    }
  }
`;

export const DashboardInfo = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 2rem;
  color: var(--grey-03);

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

export const VotedMusics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 55%;

  @media screen and (max-width: 980px) {
    width: 100%;
  }

  @media screen and (max-width: 545px) {
    text-align: center;
  }
`;

export const VotedMusicList = styled.ul`
  a {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    text-decoration: none;
    color: var(--grey-03);
  }

  display: flex;
  flex-direction: column;
  max-height: 380px;
  overflow: auto;

  list-style: none;
  gap: 0.7rem;

  small {
    padding: 0.5rem 0;
    color: #a5a5a5;
    font-size: 0.85rem;
  }
`;

export const MusicCard = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;

  padding: 0.5rem;
  border-radius: 8px;

  background-color: var(--grey-01);
  color: var(--grey-03);

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 8px;
  }

  @media screen and (min-width: 400px) {
    gap: 1.5rem;
  }
`;

export const MusicCardInfo = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: capitalize;
  }

  p {
    width: 50px;
    font-size: 0.6rem;
    overflow: hidden;
  }

  @media screen and (min-width: 400px) {
    gap: 1rem;
    p {
      width: initial;
      font-size: initial;
    }
  }
`;

export const MusicCardDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  p {
    font-size: 0.6rem;
  }

  @media screen and (min-width: 400px) {
    gap: 1rem;
    p {
      font-size: 0.8rem;
    }
  }
`;

export const MusicButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 0;
    outline: 0;
    background-color: var(--emphasis-0);
    color: var(--grey-03);
    cursor: pointer;
    transition: all 0.3s;

    svg {
      width: 60%;
      height: 60%;
    }

    &:hover {
      filter: brightness(135%);
    }
  }

  @media screen and (min-width: 400px) {
    button {
      width: 40px;
      height: 40px;
    }
  }
`;

export const FeaturedArtists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 400px;

  @media screen and (max-width: 980px) {
    width: 100%;
  }

  @media screen and (max-width: 545px) {
    text-align: center;
  }
`;

export const ArtistList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;

  @media screen and (max-width: 545px) {
    justify-content: center;
  }
`;

export const ArtistCard = styled.li`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
    color: var(--grey-03);
    text-decoration: none;

    &:hover {
      img {
        transform: scale(110%);
      }
    }
  }
`;

export const ArtistImage = styled.figure`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 100%;
  object-fit: cover;

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    transition: all 0.3s;
  }
`;

export const DashboardSearchProduction = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  small {
    color: #a5a5a5;
    font-size: 0.85rem;
  }

  @media screen and (max-width: 545px) {
    text-align: center;
  }
`;

export const DashboardSearchArtist = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  small {
    color: #a5a5a5;
    font-size: 0.85rem;
  }

  @media screen and (max-width: 545px) {
    text-align: center;
  }
`;
