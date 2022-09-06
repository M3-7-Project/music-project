import styled from "styled-components";
import albumImage from '../../assets/album-example.png'

export const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    background-color: var(--grey-00);

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const DefaultMargin = styled.div`
    margin: 0 15px;
`;

const DefaultContent = styled(DefaultMargin)`
    display: flex;
    width: 100%;
    max-width: 1000px;
`;

export const AlbumImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50vh;
    background-image: url(${({url}) => url});
    background-position: 50% 50%;

    @media (min-width: 800px) {
        height: 70vh;
    }
`;

export const AlbumImageContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px 0;
`;

export const AlbumImageContentTop = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60%;
    svg {
        color: white;
    }
`;

export const AlbumImageContentBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40%;

    div {
        color: white;
        h1 {
            font-family: 'Roboto', sans-serif;
            font-size: 40px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        h3 {
            font-size: 12px;
            font-weight: 300;
        }
    }

    svg {
        color: white;
    }
`;

export const FlexContent = styled(DefaultContent)`
    flex-direction: column;

    @media(min-width: 800px) {
        flex-direction: row-reverse;
        padding: 20px 0;
    }
`;

export const MidContent = styled(DefaultMargin)`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    color: white;
    font-size: 12px;
    line-height: 18px;

    @media(min-width: 800px) {
        width: 30%;
        padding: 0;
    }
`;

export const AlbumDescription = styled.div`
    margin-bottom: 15px;
`;

export const SocialMedia = styled.div`
    font-size: 16px;
`;

export const SocialMedias = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 25px 0;
    svg {
        width: 15%;
        max-width: 43px;
        height: 15%;
    }
`;

export const PeopleWaiting = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    h2 {
        width: 40%;
        font-size: 40px;
        font-weight: 700;
    }
    p {
        width: 40%;
    }
`;

export const MusicList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 15px;
    gap: 15px;

    @media (min-width: 800px) {
        padding: 0;
    }
`;

