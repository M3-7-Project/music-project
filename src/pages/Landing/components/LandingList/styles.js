import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.5rem;
    color: var(--grey-03);
    font-weight: 600;
  }
`;

export const ProductionList = styled.ul`
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
