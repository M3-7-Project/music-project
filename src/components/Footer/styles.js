import styled from "styled-components";

export const Player = styled.footer`
    z-index: 10;
    width: 100vw;
    height: 150px;
    background-color: var(--grey-01);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    padding:  0 90px;

    & h3 {
        font-size: 25px;
        font-family: 'Roboto';
        font-weight: 700;
        color: var(--grey-03);
        margin: 0 auto;
    }

    @media screen and (max-width:800px){
        &{
            padding:  0 25px;
            height: 80px;
        }
    }
`
export const ContentPlayer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & h4 {
        color: var(--grey-03);
        font-weight: 500;
        font-size: 20px;
        margin-bottom: 10px;
    }

    @media screen and (max-width:800px){
        & h4{
            font-size: 14px;
            margin-bottom: 5px;
            margin-top: 15px;
        }
    }
`

export const Img = styled.img`
    height: 100px;
    width: 100px;
    border-radius : 50%;

    @media screen and (max-width:800px){
        &{
            height: 55px;
            width: 55px;
        }
    }
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
        height: 20px;
        width: 20px;
        color: var(--grey-03);
    }

    @media screen and (max-width:800px){

        & svg {
            height: 15px;
            width: 15px;
        }
    }
`
export const MusicTimer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const MusicNavigate = styled.div`
    width: 65vw;
    height: 5px;
    border-radius: 5px;
    background-color: #212529;
    cursor: pointer;
    display: flex;
    align-items: center;

    @media screen and (max-width:1200px){
        &{
            width: 50vw;
        }
    }
`
export const MusicBar = styled.div`
    width: ${({width}) => width}%;
    height: 5px;
    border-radius: 5px;
    box-shadow: 0 0 5px #2453B1, 0 0 5px #8A268A;
    background-image: linear-gradient(to right, var(--emphasis-0) , var(--emphasis-2));
`
export const CircleNavigate = styled.div`
    width: 12px;
    height: 12px;
    background-color: var(--emphasis-2);
    border-radius: 50%;
    position: relative;
    left: -5px;

    @media screen and (max-width:800px){
        &{
            height: 8px;
            width: 8px;
        }
    }
`

export const TimerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--grey-03);
    font-size: 13px;
    font-weight: 500;
    box-sizing: border-box;

    @media screen and (max-width:800px){
        &{
            font-size: 10px;
        }
    }
`

export const Constrols = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    
    @media screen and (max-width:800px){
        &{
            position: relative;
            top: -15px;
        }

        & svg {
            size: 10px;
        }
    }
`