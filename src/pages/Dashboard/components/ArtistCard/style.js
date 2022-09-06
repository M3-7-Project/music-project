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

    .imageWrapper {
      width: 180px;
      height: 180px;
      overflow: hidden;
      border-radius: 100%;
    }

    img {
      width: 180px;
      height: 180px;
      object-fit: cover;
      transition: all 0.3s;
    }

    &:hover {
      color: var(--emphasis-1);

      img {
        transform: scale(110%);
      }
    }
  }
`;
