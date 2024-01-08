import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, Content } from "./styles";

const MockExams = () => {
    return (
        <>
            <Header />
            <Container>
                <Sidebar />
                <Content>a</Content>
            </Container>
            <Footer />
        </>
    );
};

export default MockExams;
