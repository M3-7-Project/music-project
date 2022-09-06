import { Content } from "./styles";

const NewComment = () => {
    return (
        <>
            <Content>
                <div></div>
                <textarea placeholder='Escreva seu comentário...'></textarea>
                <button>Enviar</button>
            </Content>
        </>
    );
}

export default NewComment;