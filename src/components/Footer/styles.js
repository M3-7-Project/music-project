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

`
export const MusicNavigate = styled.div`
    width: 50vw;
    margin: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: #212529;
    cursor: pointer;
`
export const MusicBar = styled.div`
    width: ${({width}) => width}%;
    height: 5px;
    border-radius: 5px;
    box-shadow: 0 0 5px #2453B1, 0 0 5px #8A268A;
    background-image: linear-gradient(to right, var(--emphasis-0) , var(--emphasis-2));
`
export const Constrols = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between
`