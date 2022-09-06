import styled from "styled-components";
import { DefaultComment } from "../Comments/styles";

export const Content = styled(DefaultComment)`
    align-items: flex-start;
    p {
        width: 60%;
        font-family: inherit;
        font-size: 12px;
        line-height: 17px;
        color: white;

        @media (min-width: 800px) {
            width: 80%;
        }
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--grey-02);
        border: 0;
    }
`;
