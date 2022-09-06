import styled from "styled-components";

export const SearchedProductionCard = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;

  padding: 0.5rem;
  border-radius: 8px;

  background-color: var(--grey-01);
  color: var(--grey-03);
  transition: all 0.3s;

  &:hover {
    filter: brightness(110%);
  }

  @media screen and (max-width: 620px) {
    gap: 0;
  }
`;

export const SearchedProductionInfo = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: var(--grey-03);
    text-transform: capitalize;

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  @media screen and (max-width: 620px) {
    a {
      gap: 0.4rem;
      p {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 0.8rem;
        height: 50px;
        width: 100px;
      }
    }
  }

  @media screen and (max-width: 330px) {
    a {
      gap: 0.7rem;
      p {
        height: 50px;
        width: 50px;
      }
    }
  }
`;

export const SearchedProductionDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: capitalize;

  p {
    display: flex;
    font-size: 0.8rem;
    align-items: center;
  }

  @media screen and (max-width: 620px) {
    gap: 0.3rem;

    p {
      font-size: 0.7rem;
      height: 100%;
      overflow: auto;
    }
  }

  @media screen and (max-width: 330px) {
    p {
      height: 50px;
      width: 50px;
    }
  }

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
