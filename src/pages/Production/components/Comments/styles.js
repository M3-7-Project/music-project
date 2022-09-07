import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;
    h2 {
        margin: 30px 15px 15px 15px;
        color: white;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 15px
`;

export const DefaultComment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 30px);
    padding: 15px;
    margin: 0 15px;
    background-color: var(--gray-01);
    box-shadow: 8px 3px 22px 10px rgba(0, 0, 0, 0.13);
    border-radius: 20px;
`;

export const CommentPhoto = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url(${({url}) => url});
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;

    @media (min-width: 800px) {
        width: 70px;
        height: 70px;
    }
`;