import styled from "styled-components";

export const Launch = styled.section`
    width: 100%;
    height: 400px;
    border-radius: 20px;
    background-color: var(--grey-01);
    box-shadow: 8px 3px 22px 10px rgba(0, 0, 0, 0.13);
    padding: 20px;
    display: flex;
    gap: 20px;
`
export const ImageDiv = styled.div`
    flex: 3;
    width: 400px;
    max-width: 400px;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    & > div {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    }

    & > img {
        height: 100%;
    }
`

export const Content = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    & > p {
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        text-align: justify;
        color: var(--grey-03);
    }

`

export const Title = styled.div`
    & h2 {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 40px;
        color: var(--grey-03);
    }

    & h4 {
        margin-top: 10px;
        font-weight: 400;
        font-size: 16px;
        color: var(--grey-03);
    }
`

export const Controls = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`