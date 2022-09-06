import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 500px;
    position: relative;
    display: flex;
    padding: 20px 90px;
    align-items: flex-end;
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
`
export const HeaderButton = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    justify-content: end;
    margin-bottom: 40px;
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
`