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
    transition: 0.5s;

    &:hover {
        background-color: ${({backgroundColor}) => backgroundColor === '--emphasis-0' ? 'var(--emphasis-1)' : 'var(--emphasis-0)'};
        transform: scale(1.05);
        transition: 0.5s;
    }

    @media screen and (max-width:800px){
        &{
            height: ${({heigth}) => heigth/1.2}px;
            width: ${({width}) => width/1.5}px;
        }
    }
`