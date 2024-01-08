import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, ContentContainer, Content, Cards } from "./styles";
import { Sidebar } from "../../components/Sidebar";

import mockExamIcon from "../../assets/icons/file-done-svgrepo-com.svg";

const MockExams = () => {
    return (
        <>
            <Header />
            <Container>
                <Sidebar />
                <ContentContainer>
                    <Content>
                        <h2 className="title">Simulados</h2>
                        <Cards>
                            <div className="card">
                                <img
                                    src={mockExamIcon}
                                    alt=""
                                    className="card-icon"
                                />
                                <div className="card-title">
                                    Meu primeiro simulado
                                </div>
                            </div>
                            <div className="card">
                                <img src="" alt="" className="card-icon" />
                                <div className="card-title">
                                    Meu primeiro simulado
                                </div>
                            </div>
                            <div className="card">
                                <img src="" alt="" className="card-icon" />
                                <div className="card-title">
                                    Meu primeiro simulado
                                </div>
                            </div>
                            <div className="card">
                                <img src="" alt="" className="card-icon" />
                                <div className="card-title">
                                    Meu primeiro simulado
                                </div>
                            </div>
                        </Cards>
                    </Content>
                </ContentContainer>
            </Container>
            <Footer />
        </>
    );
};

export default MockExams;
