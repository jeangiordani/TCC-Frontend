import React from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";

const Register = () => {
    return (
        <>
            <Header />
            <Container>
                <BackButton />
            </Container>
            <Footer />
        </>
    );
};

export default Register;
