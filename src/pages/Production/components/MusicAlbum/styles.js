import styled from "styled-components";

export const Container = styled.li`
    display: flex;
    width: 100%;
    height: 70px;
    padding: 10px;
    border-radius: 20px;
    background-color: var(--gray-01);
    box-shadow: 8px 3px 22px 10px rgba(0, 0, 0, 0.13);
`;
export const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    color: white;

    p:nth-child(2) {
        display: none;
    }

    @media (min-width: 800px) {
        p:nth-child(2) {
            display: block;
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 5px;
    svg {
        color: white;
    }
    
`;