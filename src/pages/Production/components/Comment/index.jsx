import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../../../contexts/UserContext";
import { deleteCommentRequest, getProfileRequest } from "../../../../services/api";
import { CommentPhoto } from "../Comments/styles";
import { ButtonContainer, CommentData, Content } from "./styles";

const Comment = ({ comment, updateComments, setIsLoading }) => {

    const [user, setUser] = useState({});
    const { userInfo } = useContext(UserContext);

    useEffect(() => {
        getProfileRequest(comment.userId)
            .then(res => {
                setUser(res.data);
            })
    }, []);

    const handleDeleteButton = () => {
        setIsLoading(true);
        deleteCommentRequest(comment.id, localStorage.getItem("@onflow:token"))
            .then(() => {
                setIsLoading(false);
                toast.success('Comentário apagado com sucesso!');
                updateComments();
            })
            .catch((err) => {
                setIsLoading(false);
                toast.error('O comentário não foi apagado.')
            })
    }
    return (
        <>
            <Content isMyComment={comment.userId === userInfo.userId}>
                <CommentPhoto url={user.profile_picture} />
                <CommentData>
                    <h2>{user.name}</h2>
                    <p>{comment.body}</p>
                </CommentData>
                <ButtonContainer onClick={handleDeleteButton}>
                    <button>X</button>
                </ButtonContainer>
            </Content>
        </>
    );
}

export default Comment;