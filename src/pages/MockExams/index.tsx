import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, ContentContainer, Content, Cards, Card } from "./styles";
import { Sidebar } from "../../components/Sidebar";

import mockExamIcon from "../../assets/icons/file-done-svgrepo-com.svg";
import checkmark from "../../assets/icons/done-1478-svgrepo-com.svg";
import { Link } from "react-router-dom";

interface MockExamProps {
    id: number;
    name: string;
    progress: number;
    isCompleted: boolean;
}

const mockExams: MockExamProps[] = [
    {
        id: 1,
        name: "Meu primeiro simulado",
        progress: 100,
        isCompleted: true,
    },
    {
        id: 2,
        name: "Meu segundo simulado",
        progress: 50,
        isCompleted: false,
    },
    {
        id: 3,
        name: "Meu terceiro simulado",
        progress: 0,
        isCompleted: false,
    },
    {
        id: 4,
        name: "Meu quarto simulado",
        progress: 0,
        isCompleted: false,
    },
    {
        id: 5,
        name: "Meu quinto simulado",
        progress: 0,
        isCompleted: false,
    },
    {
        id: 6,
        name: "Meu sexto simulado",
        progress: 0,
        isCompleted: false,
    },
    {
        id: 7,
        name: "Meu sétimo simulado",
        progress: 0,
        isCompleted: false,
    },
    {
        id: 8,
        name: "Meu oitavo simulado",
        progress: 0,
        isCompleted: false,
    },
];

const MockExams = () => {
    return (
        <>
            <Header />
            <Container>
                <Sidebar />
                <ContentContainer>
                    <Content>
                        <span className="title-wrapper">
                            <h2 className="title">Simulados</h2>
                        </span>
                        <Cards>
                            {mockExams.map((mockExam) => (
                                <Card
                                    key={mockExam.id}
                                    $completed={mockExam.isCompleted}
                                >
                                    <div className="card-content">
                                        <div className="checkmark-position">
                                            <img
                                                src={checkmark}
                                                alt=""
                                                className="checkmark"
                                            />
                                        </div>
                                        <img
                                            src={mockExamIcon}
                                            alt=""
                                            className="card-icon"
                                        />
                                        <div className="card-title">
                                            {mockExam.name}
                                        </div>
                                        <div className="card-info">
                                            <div className="card-progress">
                                                <h3 className="progress-title">
                                                    Progresso
                                                </h3>
                                                <h3 className="progress-value">
                                                    {mockExam.progress}%
                                                </h3>
                                            </div>
                                            <Link
                                                to={`/simulados/${mockExam.id}`}
                                            >
                                                <button className="button">
                                                    Ver
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </Cards>
                    </Content>
                </ContentContainer>
            </Container>
            <Footer />
        </>
    );
};

export default MockExams;
