import styled from "styled-components";
import background from '../../assets/register-img.png';

export const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px 0;
    background-image: url(${background});
    background-position: 50%;

    .styled-input {
        box-sizing: border-box;
        width: 100%;
        padding: 9px 8px;
        background-color: #272C31;
        border-radius: 10px;
        border: 0;
        color: #6C757D;
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
    }

    .styled-input:focus {
        outline: 0;
    }

    @media(min-width: 1000px) {
        flex-direction: row;
        justify-content: right;
        padding: 0;
        background-position: 0%;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 530px;
    gap: 15px;
    width: 95%;
    padding: 30px 20px;
    border-radius: 8px;
    background-color: #212529;;
    color: white;

    h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 26px;
        font-weight: 700;
    }

    @media(min-width: 1000px) {
        justify-content: center;
        width: 40%;
        max-width: none;
        min-height: 100%;
        border-radius: 0;

        img {
            position: relative;
            right: 53%;
        }
    }
`;

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    label {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 300;
    }

    #profile {
        width: 35%;
    }
`;

export const DefaultForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: 'Poppins', sans-serif;

    span {
        width: 100%;
        height: 15px;
        color: red;
        font-size: 8px;
    }
`;

export const LoadingModal = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.4);
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
`;

