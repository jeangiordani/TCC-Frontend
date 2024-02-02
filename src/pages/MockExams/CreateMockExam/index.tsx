import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, Form } from "./styles";
import { mockExamSchema } from "../../../validations/mockExam";

type IFormInputs = yup.InferType<typeof mockExamSchema>;

const options = [
    { id: 1, label: "Mátematica" },
    { id: 2, label: "Literatura" },
    { id: 3, label: "Português" },
];

const CreateMockExam = () => {
    const [selectedOption, setSelectedOption] = React.useState<number>(0);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInputs>({
        resolver: yupResolver(mockExamSchema),
    });

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        data.disciplineId = selectedOption;
        console.log(data);
    };
    return (
        <>
            <Container>
                <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-wrapper">
                        <label className="label" htmlFor="nome">
                            Nome
                        </label>
                        <input
                            {...register("name")}
                            id="nome"
                            className={`input ${
                                errors.name?.message ? "error-input" : ""
                            }`}
                            placeholder="Digite o nome do simulado"
                        />
                        <div className="error">{errors.name?.message}</div>
                    </div>
                    <div className="input-wrapper">
                        <label className="label" htmlFor="descricao">
                            Descrição
                        </label>
                        <textarea
                            {...register("description")}
                            id="descricao"
                            className={`input long-text${
                                errors.description?.message ? "error-input" : ""
                            }`}
                            placeholder="Digite a descrição do simulado"
                        />
                        <div className="error">
                            {errors.description?.message}
                        </div>
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
                                    type="number"
                                    {...register("quantity")}
                                    id="quantidade"
                                    className={`input-quantity ${
                                        errors.quantity?.message
                                            ? "error-input"
                                            : ""
                                    }`}
                                    defaultValue={1}
                                />
                                <div className="error">
                                    {errors.quantity?.message}
                                </div>
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
                                    defaultValue={selectedOption}
                                    onChange={(e) =>
                                        setSelectedOption(+e.target.value)
                                    }
                                >
                                    <option value={0}>Aleatório</option>
                                    {options.map((option) => (
                                        <option
                                            key={option.id}
                                            value={option.id}
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
