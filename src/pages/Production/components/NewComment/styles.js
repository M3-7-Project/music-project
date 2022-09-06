import styled from "styled-components";
import { DefaultComment } from "../Comments/styles";

export const Content = styled(DefaultComment)`
    textarea {
        width: 60%;
        height: 100%;
        resize: none;
        background-color: transparent;
        border: 0;
        font-family: inherit;
        color: white;
    }
    textarea:focus {
        outline: none;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25%;
        max-width: 90px;
        height: 30px;
        background-color: var(--emphasis-0);
        border: 0;
        border-radius: 15px;
        color: white;
        font-family: inherit;
    }
`;
