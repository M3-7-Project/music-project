import styled from "styled-components";

export const ProductionCard = styled.li`
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
`;
