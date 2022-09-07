import styled from "styled-components";

export const ProducerUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;

  @media screen and (max-width: 620px) {
    justify-content: center;
  }
`;
