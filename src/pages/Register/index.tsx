import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Header } from "../../components/Header";
import { Container, Form } from "./styles";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { registrationSchema } from "../../validations/registration";
import { Link } from "react-router-dom";

type IFormInputs = yup.InferType<typeof registrationSchema>;

const Register = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInputs>({
        resolver: yupResolver(registrationSchema),
    });

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        if (data.role === "true") {
            data.role = "ROLE_TEACHER";
        } else {
            data.role = "ROLE_STUDENT";
        }
        console.log(data.role);
    };
    return (
        <>
            <Header />
            <Container>
                <BackButton />
                <h1 className="title">Cadastre-se no site</h1>
                <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-wrapper">
                        <label className="label" htmlFor="name">
                            Nome
                        </label>
                        <input
                            {...register("name")}
                            id="name"
                            className={`input ${
                                errors.name?.message ? "error-input" : ""
                            }`}
                            placeholder="Digite seu nome"
                        />
                        <div className="error">{errors.name?.message}</div>
                    </div>
                    <div className="input-wrapper">
                        <label className="label" htmlFor="email">
                            Email
                        </label>
                        <input
                            {...register("email")}
                            id="email"
                            className={`input ${
                                errors.email?.message ? "error-input" : ""
                            }`}
                            placeholder="Digite seu email"
                        />
                        <div className="error">{errors.email?.message}</div>
                    </div>
                    <div className="input-wrapper">
                        <label className="label" htmlFor="password">
                            Senha
                        </label>
                        <input
                            {...register("password")}
                            id="password"
                            className={`input ${
                                errors.password?.message ? "error-input" : ""
                            }`}
                            type="password"
                            placeholder="Digite seu senha"
                        />
                        <div className="error">{errors.password?.message}</div>
                    </div>
                    <div className="input-wrapper">
                        <label className="input-checkbox" htmlFor="role">
                            <input
                                {...register("role")}
                                id="role"
                                type="checkbox"
                                className="checkbox"
                            />
                            <span className="label-checkbox">
                                Sou professor
                            </span>
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <span className="label">
                            Já tem uma conta?{" "}
                            <Link to="/login" className="link">
                                Faça login
                            </Link>
                        </span>
                        <input
                            type="submit"
                            className="button"
                            value="Cadastrar"
                        />
                    </div>
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default Register;
