import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { loginSchema } from "../../validations/login";
import { BackButton } from "../../components/BackButton";

type IFormInputs = yup.InferType<typeof loginSchema>;

export const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInputs>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        console.log(data);
    };

    return (
        <>
            <Header />
            <Container>
                <BackButton />
                <h1 className="title">Faça Login na sua conta</h1>
                <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
                        <span className="label">
                            Não tem uma conta ainda?{" "}
                            <Link to="/cadastrar" className="link">
                                Cadastre-se
                            </Link>
                        </span>
                        <input type="submit" className="button" value="Login" />
                    </div>
                </Form>
            </Container>
            <Footer />
        </>
    );
};
