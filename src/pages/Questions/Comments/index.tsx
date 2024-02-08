import React from "react";
import { Container } from "./styles";
import { CommentsContainer } from "./styles";

import userPicture from "../../../assets/images/profile-picture.png";

interface CommentsProps {
    questionId: string;
}

type CommentType = {
    id: number;
    text: string;
    picture: string;
};

const comments: CommentType[] = [
    {
        id: 1,
        text: "Sabendo que uma porção da receita produz 50 docinhos com o volume de 4,19 cm^3, podemos calcular o volume total de uma porção: Volume total de uma porção = 50 * 4,19 = 209,5 cm^3 Agora, vamos calcular quantas porções são necessárias para atender ao cliente: Volume total necessário = 150 * 33,51 = 5026,5 cm^3",
        picture: userPicture,
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci esse natus rerum, distinctio voluptate obcaecati culpa. Nihil dolor magni autem quaerat, repudiandae animi obcaecati tempora nulla ipsum dolore pariatur in. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci esse natus rerum, distinctio voluptate obcaecati culpa. Nihil dolor magni autem quaerat, repudiandae animi obcaecati tempora nulla ipsum dolore pariatur in. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci esse natus rerum, distinctio voluptate obcaecati culpa. Nihil dolor magni autem quaerat, repudiandae animi obcaecati tempora nulla ipsum dolore pariatur in. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci esse natus rerum, distinctio voluptate obcaecati culpa. Nihil dolor magni autem quaerat, repudiandae animi obcaecati tempora nulla ipsum dolore pariatur in.",
        picture: userPicture,
    },
];

const Comments: React.FC<CommentsProps> = (props) => {
    const { questionId } = props;
    const [inputComment, setInputComment] = React.useState("");

    const handleInputCommet = (
        event: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setInputComment(event.target.value);
        console.log(inputComment);
    };

    const handleSaveComment = () => {
        console.log("Comentário salvo");
    };

    return (
        <>
            <Container>
                <CommentsContainer $formVisible={true}>
                    <div className="comments">
                        {comments.map((comment) => (
                            <div className="comment" key={comment.id}>
                                <div className="text-border">
                                    <img
                                        src={comment.picture}
                                        alt="imagem"
                                        className="image"
                                    />
                                    <p className="text">{comment.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form className="form">
                        <textarea
                            name=""
                            id=""
                            className="input"
                            onChange={handleInputCommet}
                            value={inputComment}
                        ></textarea>
                        <input
                            type="button"
                            className="button"
                            value="Enviar"
                            onClick={handleSaveComment}
                        />
                    </form>
                </CommentsContainer>
            </Container>
        </>
    );
};

export default Comments;
