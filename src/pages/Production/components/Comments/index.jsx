import Comment from "../Comment";
import NewComment from "../NewComment";
import { Container, Content } from "./styles";

const Comments = ({comments}) => {
    return (
        <>
            <Container>
                <h2>Comentários</h2>
                <Content>
                    <NewComment />
                    {
                        comments?.map((comment, id) => <Comment comment={comment} key={id} />)
                    }
                </Content>
            </Container>
        </>
    );
}

export default Comments;