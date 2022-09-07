import styled from "styled-components";

export const Launchs = styled.section`
    width: 100%;

    & > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & h3 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 40px;
        color: var(--grey-03);
    }

    @media screen and (max-width: 800px) {
        & h3{
            font-size: 28px;
        }
    }
`

export const Controls = styled.div`
    display: flex;
    gap: 20px;

    & > button {
        padding: 0;
        cursor: pointer;
        background-color: transparent;
        border: none;
    }
`
export const List = styled.ul`
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;

    & li {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & button {
        padding: 0;
        background-color: transparent;
        border: none;
        border-radius: 10px;
        outline: 0;
        overflow: hidden;
    }

    & img {
        width: 20vw;
        max-width: 240px;
        height: 240px;
        border-radius: 10px;
        object-fit: cover;
        cursor: pointer;
        transition: 0.3s;
    }

    & img:hover{
        transform: scale(110%);
        transition: 0.3s;
    }

    & h4 {
        font-weight: 500;
        font-size: 14px;
        line-height: 32px;
        color: var(--grey-03);
    }

    @media screen and (max-width: 1200px) {
        & img {
            width: 18vw;
        }
    }

    @media screen and (max-width: 1000px) {
        & {
            flex-direction: column;
        }

        & img {
            width: 100vw;
        }
    }
`