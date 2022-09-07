import { CommentPhoto } from "../Comments/styles";
import { Content, NewCommentForm } from "./styles";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { useEffect } from "react";
import { createCommentRequest } from "../../../../services/api";
import toast from "react-hot-toast";

const NewComment = ({updateComments, productionId, setIsLoading}) => {

    const {userInfo} = useContext(UserContext);

    const schema = yup.object().shape({
        body: yup.string().required('O campo de comentário não pode estar vazio!')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setIsLoading(true);
        const newCommentObjRequest = {
            userId: userInfo.userId,
            profileId: userInfo.userId,
            name: userInfo.name,
            body: data.body,
            productionId: productionId,
        }

        createCommentRequest(newCommentObjRequest, localStorage.getItem("@onflow:token"))
            .then((res) => {
                setIsLoading(false);
                toast.success('Comentário enviado com sucesso!');
                updateComments();
            })
            .catch(err => {
                setIsLoading(false);
                toast.error('O comentário não pode ser entregue.');
            });
    }

    return (
        <>
            <Content>
                <CommentPhoto url={userInfo.profile_picture} />
                <NewCommentForm onSubmit={handleSubmit(onSubmit)}>
                    <textarea placeholder='Escreva seu comentário...' {...register('body')}></textarea>
                    <button>Enviar</button>
                </NewCommentForm>
            </Content>
        </>
    );
}

export default NewComment;