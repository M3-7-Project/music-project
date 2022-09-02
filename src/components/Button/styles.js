import styled from "styled-components";

export const ButtonStyle = styled.button`
    height: ${({heigth}) => heigth}px;
    width: ${({width}) => width}px;
    background-color: var(${({backgroundColor}) => backgroundColor});
    border: none;
    box-sizing: border-box;
    border-radius: ${({heigth}) => heigth/2}px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: Poppins;
    font-size: 22;
    font-weight: 500;
    color: var(--grey-03);
`