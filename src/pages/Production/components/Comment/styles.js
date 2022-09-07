import styled from "styled-components";
import { DefaultComment } from "../Comments/styles";

export const Content = styled(DefaultComment)`
    align-items: flex-start;

    button {
        display: ${({isMyComment}) => isMyComment ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: var(--grey-02);
        border: 0;
    }
`;

export const ButtonContainer = styled.div`
    width: 20px;
`;

export const CommentData = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;

    h2 {
        margin: 0;
        margin-bottom: 8px;
    }

    p{
        font-family: inherit;
        font-size: 12px;
        color: white;
    }
`;
