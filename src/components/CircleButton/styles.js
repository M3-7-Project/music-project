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
    transition: 0.5s;

    &:hover {
        background-color: var(--emphasis-1);
        transform: scale(1.05);
        transition: 0.5s;
    }

    @media screen and (max-width:800px){
        &{
            height: ${({radius}) => radius/1.5}px;
            width: ${({radius}) => radius/1.5}px;
        }
    }
`