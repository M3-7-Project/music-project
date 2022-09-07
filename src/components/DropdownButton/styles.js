import styled from "styled-components";

export const StyledDropdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  background-color: var(--emphasis-0);
  outline: 0;
  border: 0;
  border-radius: 100%;
  cursor: pointer;
  color: var(--grey-03);

  transition: all 0.5s;

  &:hover {
    filter: brightness(135%);
  }
`;
