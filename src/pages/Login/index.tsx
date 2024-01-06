import React from "react";
// import { useForm } from "react-hook-form";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";

type LoginProps = {
    email: string;
    password: string;
};

export const Login = () => {
    return (
        <>
            <Header />
            <Container>a</Container>
            <Footer />
        </>
    );
};
