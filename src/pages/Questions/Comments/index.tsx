import React from "react";
import { Container } from "./styles";
import { CommentsContainer } from "./styles";

import userPicture from "../../../assets/images/profile-picture.png";
import { useAuth } from "../../../context/auth";
import { useFetch } from "../../../hooks/useFetch";
import { set } from "react-hook-form";
import { Loading } from "../../../components/Spinner";
import { usePost } from "../../../hooks/usePost";

interface CommentsProps {
    questionId: string;
}

type CommentType = {
    id: number;
    text: string;
    user: {
        id: number;
        name: string;
        role: string;
    };    
};


const Comments: React.FC<CommentsProps> = (props) => {
    const { questionId } = props;
    const [inputComment, setInputComment] = React.useState("");
    const {user} = useAuth();
    const [comments, setComments] = React.useState<CommentType[]>([]);
    const { postData, loading:loadingPost } = usePost();

    const { data, loading, refetch } = useFetch(`/comments/${questionId}`);

    const handleInputCommet = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setInputComment(event.target.value);
        console.log(inputComment);
    };


    React.useEffect(() => {
        if(data){
            const newComments = data.map((comment: CommentType) => {
                return {
                    id: comment.id,
                    text: comment.text,
                    user: {
                        id: comment.user.id,
                        name: comment.user.name,
                        role: comment.user.role,
                    },
                };
            
            });
            setComments(newComments);
        }
        
    }, [data]);

    const handleSaveComment = async () => {
        console.log("Comentário salvo");
        await postData("/comments", {
            text: inputComment,
            question_id: questionId,
            user_id: user.id,
        });
        setInputComment("");
        refetch();
    };

    return (
        <>
            <Container>
                {loading && <Loading color="var(--primary)" />}
                <CommentsContainer $formVisible={true}>
                    <div className="comments">
                        {comments.map((comment) => (
                            <div className="comment" key={comment.id}>
                                <div className="text-border">
                                    <div className="info">
                                        <div className="name">{comment.user.name}</div>
                                        <div className="role">{comment.user.role == "PROFESSOR" ? "Professor" : "Estudante"}</div>
                                    </div>
                                    <p className="text">{comment.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {user.role == "PROFESSOR" && 
                        <form className="form">
                            <textarea
                                name=""
                                id=""
                                className="input"
                                onChange={handleInputCommet}
                                value={inputComment}
                            ></textarea>
                            {/* <input
                                type="button"
                                className="button"
                                value="Enviar"
                                onClick={handleSaveComment}
                            /> */}
                            <button
                                className="button"
                                onClick={handleSaveComment}
                                disabled={loadingPost}
                            >
                                {loadingPost ? <Loading color="#fff" /> : "Enviar"}
                            </button>
                        </form>
                    }
                </CommentsContainer>
            </Container>
        </>
    );
};

export default Comments;
