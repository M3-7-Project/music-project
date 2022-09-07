import styled from "styled-components";

export const Body = styled.div`
  background: #212529;

  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const HottestTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 85%;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--grey-03);
  }

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