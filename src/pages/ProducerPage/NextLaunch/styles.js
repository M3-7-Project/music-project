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
    display: flex;
    align-items: center;
    justify-content: space-between;

    & li {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & button {
        padding: 0;
        background-color: transparent;
        border: none;
    }

    & img {
        width: 240px;
        height: 240px;
        border-radius: 10px;
        object-fit: cover;
        cursor: pointer;
    }

    & h4 {
        font-weight: 500;
        font-size: 14px;
        line-height: 32px;
        color: var(--grey-03);
    }
`