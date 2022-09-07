import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 500px;
    position: relative;
    display: flex;
    padding: 20px 90px;
    align-items: flex-end;

    @media screen and (max-width: 1000px) {
        & {
            padding: 20px 50px;
        }
    }
    @media screen and (max-width: 800px) {
        & {
            height: 350px;
            padding: 20px 25px
        }
    }
`

export const Cover = styled.img`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 50%;
`

export const HeaderImage = styled.div`
   flex: 1;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   & > img {
        height: 170px;
        width: 170px;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 8px 3px 22px 10px rgba(0, 0, 0, 0.13);
    }

    @media screen and (max-width: 800px) {
        & > img{
            height: 95px;
            width: 95px;
        }
    }
`

export const HeaderContent = styled.div`
   flex: 4;
   margin-bottom: 25px;

   & > h1 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 80px;
    color: var(--grey-03);
   }

   & > h4 {
    margin-top: 10px;
    font-weight: 300;
    font-size: 18px;
    color: var(--grey-03);
   }

   @media screen and (max-width: 800px) {
        & {
            flex: 3;
            margin-bottom: 20px;
        }
        & > h1{
            font-size: 32px;
            white-space: nowrap;
        }
        & > h4 {
            font-size: 14px;
            margin-top: 5px;
            white-space: nowrap;
        }
    }
`
export const HeaderButton = styled.div`
    flex: 1;
    position: relative;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: end;
    margin-bottom: 40px;

    @media screen and (max-width: 800px) {
        & > button{
            position: absolute;
            top: 40px;
            right: 25px;
        }
    }
`

export const DropDown = styled.div`
    width: 250px;
    height: 180px;
    border-radius: 10px;
    background-color: var(--grey-00);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    padding: 10px;
    bottom: 75px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    animation: ${({animation}) => animation } 0.6s forwards;

    & > button {
        background-color: transparent;
        border: none;
        color: var(--grey-03);
        cursor: pointer;
    }

    @keyframes open {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    @keyframes close {
        from{
            opacity: 1;
        }
        to{
            opacity: 0;
        }
    }

    @media screen and (max-width: 800px) {
        & {
            width: 150px;
            height: 120px;
            bottom: 135px;
        }
    }
`

export const Line = styled.div` 
    width: 100%;
    height: 2px;
    background-color: #272C31;
`
export const Triangle = styled.div` 
    position: absolute;
    bottom: -20px;
    right: 10px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 30px solid var(--grey-00);

    @media screen and (max-width: 800px) {
        & {
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 20px solid var(--grey-00);
            transform: rotateX(180deg);
            bottom: 115px;
        }
    }
`

export const Main = styled.main`
    box-sizing: border-box;
    width: 100%;
    padding: 20px 90px 170px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media screen and (max-width: 1000px) {
        & {
            padding: 20px 50px 170px;
        }
    }
    @media screen and (max-width: 800px) {
        & {
            padding: 20px 25px 100px;
        }
    }
`

export const Bio = styled.section`
    display: flex;
    width: 100%;
    gap: 25px;

    & > p {
        flex: 3;
        font-weight: 300;
        font-size: 18px;
        line-height: 25px;
        text-align: justify;
        color: var(--grey-03);
    }

    @media screen and (max-width: 800px) {
        &{
            flex-direction: column;
        }
        & p{
            font-size: 14px;
            line-height: 18px;
        }
    }
`

export const Contact = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;

    & > p{
        font-weight: 300;
        font-size: 18px;
        line-height: 25px;
        text-align: justify;
        color: var(--grey-03);
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & a {
        padding: 0;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        & {
            gap: 20px;
        }
        & p{
            font-size: 14px;
            line-height: 18px;
        }

        & > div {
            justify-content: space-around;
        }
    }
`