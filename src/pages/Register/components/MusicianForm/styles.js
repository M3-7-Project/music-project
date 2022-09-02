import styled from "styled-components";
import { DefaultForm } from "../../styles";

export const MusicianFormStyles = styled(DefaultForm)`

    textarea {
        height: 150px;
        resize: none;
    }

    h4 {
        margin-bottom: 15px;
    }

    label {
        font-size: 12px;
        margin-left: 2px;
        margin-right: 10px;
    }
    
    #multi-select {
        border-radius: 8px 0 0 8px;
        ::-webkit-scrollbar {
            width: 4px;
        }
        ::-webkit-scrollbar-track {
            border-radius: 50%;
            background-color: #272C31;
        }
        ::-webkit-scrollbar-thumb {
            position: relative;
            left: 100px;
            border-radius: 2px;
            background-image: linear-gradient(180deg, #D0368A 0%, #708AD4 99%);
        }
    }
`;

export const MusicalStyles = styled.div`
    display: flex;
    align-items: center;

    input {
        color: red;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 8px;
    margin: 15px 0;
    background-color: #4D194D;
    border: 0;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: white;
`;