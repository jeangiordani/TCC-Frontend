import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, Form } from "./styles";
import { mockExamSchema } from "../../../validations/mockExam";
import { useFetch } from "../../../hooks/useFetch";
import { usePost } from "../../../hooks/usePost";
import { useAuth } from "../../../context/auth";
import { Loading } from "../../../components/Spinner";

type IFormInputs = yup.InferType<typeof mockExamSchema>;
type Option = {
    id: number;
    name: string;
};

const CreateMockExam = () => {
    const { user } = useAuth();
    const [options, setOptions] = React.useState<Option[]>([]);
    const {data} = useFetch("/knowledge-areas");
    const [selectedOption, setSelectedOption] = React.useState<number>(0);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInputs>({
        resolver: yupResolver(mockExamSchema),
    });
    const {postData, loading: loadingPost} = usePost();

    React.useEffect(() => {
        if (data) {
            setOptions(data);
        }
    }, [data]);

    const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
        data.disciplineId = selectedOption;
        await postData("/mock-exams", {
            title: data.name,
            description: data.description,
            qty_questions: data.quantity,
            user_id: user.id,
            knowledge_area_id: data.disciplineId,
        });
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
                                    <option value={null}>Aleatório</option>
                                    {options.map((option) => (
                                        <option
                                            key={option.id}
                                            value={option.id}
                                        >
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        {/* <input
                            type="submit"
                            className="button"
                            value={loadingPost ? "Enviando..." : "Iniciar"}
                            disabled={loadingPost}
                        /> */}
                        <button
                            type="submit"
                            className="button"
                            disabled={loadingPost}
                        >
                            {loadingPost ? <Loading color="#fff" /> : "Iniciar"}
                        </button>
                    </div>
                </Form>
            </Container>
        </>
    );
};

export default CreateMockExam;
