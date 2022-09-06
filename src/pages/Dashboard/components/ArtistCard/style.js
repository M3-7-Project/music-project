import styled from "styled-components";

export const ProducerCard = styled.li`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: var(--grey-03);
    transition: all 0.3s;

    img {
      border-radius: 100%;
      width: 180px;
      height: 180px;
      object-fit: cover;
    }

    &:hover {
      color: var(--emphasis-1);
    }
  }
`;
