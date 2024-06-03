import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Bounce, ToastContainer, toast } from 'react-toastify';


import { Header } from "../../components/Header";
import { Container, Form } from "./styles";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { registrationSchema } from "../../validations/registration";
import { Link } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import { Loading } from "../../components/Spinner";
import 'react-toastify/dist/ReactToastify.css';

type IFormInputs = yup.InferType<typeof registrationSchema>;

const Register = () => {
    const {postData, loading: loadingPost, error: errorPost} = usePost();
    const [success, setSuccess] = React.useState<boolean>(false);
    const notify = () => toast.success('Cadastrado com successo', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                        });

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInputs>({
        resolver: yupResolver(registrationSchema),
    });
    // const [preview, setPreview] = React.useState("");

    const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
        if (data.role === "true") {
            data.role = "TEACHER";
        } else {
            data.role = "STUDENT";
        }
        const response = await postData("/auth/register", {
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role,
        });
        if (response.status === 201) {
            setSuccess(true);
        }
    };
    
    if (success) {
        notify();
    }
    

    // const handleUploadedFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files ? event.target.files[0] : undefined;

    //     if (file !== undefined) {
    //         const urlImage = URL.createObjectURL(file);

    //         setPreview(urlImage);
    //     }
    // };
    return (
        <>
            <Header />
            <Container>
                <BackButton />
                <h1 className="title">Cadastre-se no site</h1>
                <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <ToastContainer />
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
                        {errorPost && (<div className="error">Email já existe</div>)}
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
                    {/* <div className="input-wrapper">
                        <img src={preview} alt="" className="image-input" />
                        <label className="label" htmlFor="image">
                            Imagem
                        </label>
                        <input
                            {...register("image")}
                            id="image"
                            className={`input`}
                            type="file"
                            onChange={handleUploadedFile}
                        />
                    </div> */}
                    <div className="input-wrapper">
                        <span className="label">
                            Já tem uma conta?{" "}
                            <Link to="/login" className="link">
                                Faça login
                            </Link>
                        </span>
                        {/* <input
                            type="submit"
                            className="button"
                            value="Cadastrar"
                        /> */}
                        <button type="submit" className="button" disabled={loadingPost}>
                            {loadingPost ? <Loading color="#fff" /> : "Cadastrar"}
                        </button>
                        
                    </div>
                </Form>
                
            </Container>
            <Footer />
        </>
    );
};

export default Register;
