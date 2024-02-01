import React from "react";
import { Container, Form } from "./styles";

const CreateMockExam = () => {
    return (
        <>
            <Container>
                <Form>
                    <div className="input-wrapper">
                        <label className="label" htmlFor="nome">
                            Nome
                        </label>
                        <input
                            // {...register("email")}
                            id="nome"
                            className={`input`}
                            // className={`input ${
                            //     errors.email?.message ? "error-input" : ""
                            // }`}
                            placeholder="Digite o nome do simulado"
                        />
                        {/* <div className="error">{errors.name?.message}</div> */}
                    </div>
                    <div className="input-wrapper">
                        <label className="label" htmlFor="descricao">
                            Descrição
                        </label>
                        <input
                            // {...register("email")}
                            id="descricao"
                            className={`input long-text`}
                            // className={`input ${
                            //     errors.email?.message ? "error-input" : ""
                            // }`}
                            placeholder="Digite a descrição do simulado"
                        />
                        {/* <div className="error">{errors.name?.message}</div> */}
                    </div>

                    <div className="input-wrapper">
                        <div className="inline">
                            <div className="inline-wrapper">
                                <label
                                    className="label-inline"
                                    htmlFor="quantidade"
                                >
                                    Quantidade:{" "}
                                </label>
                                <input
                                    // {...register("email")}
                                    id="quantidade"
                                    className={`input-quantity`}
                                    // className={`input ${
                                    //     errors.email?.message ? "error-input" : ""
                                    // }`}
                                />
                                {/* <div className="error">{errors.name?.message}</div> */}
                            </div>
                            <div className="inline-wrapper">
                                <label
                                    className="label-inline"
                                    htmlFor="Disciplinas"
                                >
                                    Quantidade:{" "}
                                </label>
                                <input
                                    // {...register("email")}
                                    id="disciplinas"
                                    className={`input-select`}
                                    // className={`input ${
                                    //     errors.email?.message ? "error-input" : ""
                                    // }`}
                                />
                                {/* <div className="error">{errors.name?.message}</div> */}
                            </div>
                        </div>
                    </div>
                </Form>
            </Container>
        </>
    );
};

export default CreateMockExam;
