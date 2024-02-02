import React from "react";
import { Container, Form } from "./styles";

const options = [
    { value: 1, label: "Mátematica" },
    { value: 2, label: "Literatura" },
    { value: 3, label: "Português" },
];

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
                                    htmlFor="disciplinas"
                                >
                                    Disciplina:{" "}
                                </label>

                                <select
                                    name="disciplinas"
                                    id="disciplinas"
                                    className="input-quantity"
                                    defaultValue={0}
                                >
                                    <option value={0}>Aleatório</option>
                                    {options.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>

                                {/* <div className="error">{errors.name?.message}</div> */}
                            </div>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <input
                            type="submit"
                            className="button"
                            value="Iniciar"
                        />
                    </div>
                </Form>
            </Container>
        </>
    );
};

export default CreateMockExam;
