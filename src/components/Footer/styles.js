import styled from "styled-components";

export const Player = styled.footer`
    width: 100vw;
    height: 150px;
    background-color: #272C31;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    padding:  0 90px;
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
`

export const Img = styled.img`
    height: 100px;
    width: 100px;
    border-radius : 50%;
`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
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
`

export const TimerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--grey-03);
    font-size: 13px;
    font-weight: 500;
    box-sizing: border-box;
`

export const Constrols = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
`