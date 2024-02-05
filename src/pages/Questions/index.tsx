import React from "react";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";

const Questions = () => {
    return (
        <>
            <Header />
            <BackButton />
            <Container></Container>
            <Footer />
        </>
    );
};

export default Questions;
