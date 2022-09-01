import styled from "styled-components";

export const ButtonStyle = styled.button`
    height: ${({radius}) => radius}px;
    width: ${({radius}) => radius}px;
    background-color: var(--emphasis-0);
    border: none;
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`