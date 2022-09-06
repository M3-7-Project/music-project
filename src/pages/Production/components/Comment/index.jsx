import { Content } from "./styles";

const Comment = ({comment}) => {
    return (
        <>
            <Content>
                <div></div>
                <p>{comment.body}</p>
                <button>X</button>
            </Content>
        </>
    );
}

export default Comment;