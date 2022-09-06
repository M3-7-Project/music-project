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
  align-items: center;
  justify-content: space-between;

  padding: 1rem 5rem;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  svg {
    color: var(--grey-03);
    cursor: pointer;
  }

  #menu-button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    background-color: var(--emphasis-0);
    outline: 0;
    border: 0;
    border-radius: 100%;

    transition: all 0.5s;

    &:hover {
      filter: brightness(135%);
    }
  }
`;

export const HeaderNavigationInput = styled.div`
  form {
    display: flex;
    align-items: center;
    background-color: var(--grey-01);
    padding: 0.5rem;
    border-radius: 8px;

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
  padding: 2rem 5rem;
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
`;

export const HottestProductionList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  list-style: none;
`;

export const HottestProductionCard = styled.li`
  a {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-decoration: none;

    width: 180px;
    color: var(--grey-03);

    img {
      border-radius: 8px;
      width: 180px;
      height: 180px;
      object-fit: cover;
    }

    p {
      text-align: center;
      padding: 0.2rem;
      overflow: hidden;
    }
  }
`;

export const DashboardInfo = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  color: var(--grey-03);
`;

export const VotedMusics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 55%;
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
    color: #a5a5a5;
    font-size: 0.85rem;
  }
`;

export const MusicCard = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  padding: 0.5rem;
  border-radius: 8px;

  background-color: var(--grey-01);
  color: var(--grey-03);

  img {
    width: 50px;
    border-radius: 8px;
  }
`;

export const MusicCardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: capitalize;
`;

export const MusicCardDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 0.8rem;
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
    width: 40px;
    height: 40px;
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
`;

export const FeaturedArtists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 400px;
`;

export const ArtistList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const ArtistCard = styled.li`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
    color: var(--grey-03);
    text-decoration: none;
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
`;

export const DashboardSearchArtist = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  small {
    color: #a5a5a5;
    font-size: 0.85rem;
  }
`;
