import React from "react";
import { Container } from "../styles";
import { CommentsContainer } from "./styles";

import userPicture from "../../../assets/images/profile-picture.png";

interface CommentsProps {
    questionId: string;
}
const Comments: React.FC<CommentsProps> = (props) => {
    const { questionId } = props;

    return (
        <>
            <Container>
                <CommentsContainer $formVisible={true}>
                    <div className="comments">
                        <div className="comment">
                            <div className="text-border">
                                <img
                                    src={userPicture}
                                    alt="imagem"
                                    className="image"
                                />
                                <p className="text">
                                    Sabendo que uma porção da receita produz 50
                                    docinhos com o volume de 4,19 cm^3, podemos
                                    calcular o volume total de uma porção:
                                    Volume total de uma porção = 50 * 4,19 =
                                    209,5 cm^3 Agora, vamos calcular quantas
                                    porções são necessárias para atender ao
                                    cliente: Volume total necessário = 150 *
                                    33,51 = 5026,5 cm^3
                                </p>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="text-border">
                                <img
                                    src={userPicture}
                                    alt="imagem"
                                    className="image"
                                />
                                <p className="text">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Adipisci esse natus rerum,
                                    distinctio voluptate obcaecati culpa. Nihil
                                    dolor magni autem quaerat, repudiandae animi
                                    obcaecati tempora nulla ipsum dolore
                                    pariatur in. Lorem ipsum dolor sit, amet
                                    consectetur adipisicing elit. Adipisci esse
                                    natus rerum, distinctio voluptate obcaecati
                                    culpa. Nihil dolor magni autem quaerat,
                                    repudiandae animi obcaecati tempora nulla
                                    ipsum dolore pariatur in. Lorem ipsum dolor
                                    sit, amet consectetur adipisicing elit.
                                    Adipisci esse natus rerum, distinctio
                                    voluptate obcaecati culpa. Nihil dolor magni
                                    autem quaerat, repudiandae animi obcaecati
                                    tempora nulla ipsum dolore pariatur in.
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Adipisci esse natus rerum,
                                    distinctio voluptate obcaecati culpa. Nihil
                                    dolor magni autem quaerat, repudiandae animi
                                    obcaecati tempora nulla ipsum dolore
                                    pariatur in.
                                </p>
                            </div>
                        </div>
                    </div>
                    <form className="form">
                        <textarea name="" id="" className="input"></textarea>
                        <input
                            type="button"
                            className="button"
                            value="Enviar"
                        />
                    </form>
                </CommentsContainer>
            </Container>
        </>
    );
};

export default Comments;
