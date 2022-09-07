import Comment from "../Comment";
import NewComment from "../NewComment";
import { Container, Content } from "./styles";

const Comments = ({comments, updateComments, setIsLoading, productionId}) => {
    return (
        <>
            <Container>
                <h2>Comentários</h2>
                <Content>
                    <NewComment updateComments={updateComments} productionId={productionId} setIsLoading={setIsLoading} />
                    {
                        comments?.map((comment, id) => <Comment updateComments={updateComments} comment={comment} setIsLoading={setIsLoading} key={id} />)
                    }
                </Content>
            </Container>
        </>
    );
}

export default Comments;