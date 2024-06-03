import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, ContentContainer, Content, Cards, Card } from "./styles";
import { Sidebar } from "../../components/Sidebar";
import CustomModal from "../../components/Modal";
import CreateMockExam from "./CreateMockExam";

import mockExamIcon from "../../assets/icons/file-done-svgrepo-com.svg";
import checkmark from "../../assets/icons/done-1478-svgrepo-com.svg";
import { useFetch } from "../../hooks/useFetch";

interface MockExamProps {
    id: string;
    title: string;
    isCompleted: boolean;
    progress: number;
}

const MockExams = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [mockExams, setMockExams] = React.useState<MockExamProps[]>([]);

    const { data, loading, refetch } = useFetch("/mock-exams");

    React.useEffect(() => {
        if (data) {
            const newMockExams = data.data.map((mockExam: any) => {
                const progress = Math.floor(
                    (mockExam.qty_answered / mockExam.qty_questions) * 100
                );
                return {
                    id: mockExam.id,
                    title: mockExam.title,
                    isCompleted: mockExam.qty_answered === mockExam.qty_questions,
                    progress,
                };
            });
            setMockExams(newMockExams);
        }
    }, [data]);
    
    

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        refetch();
    };

    return (
        <>
            <CustomModal
                isOpen={isOpen}
                closeModal={closeModal}
                Content={CreateMockExam}
                title="Criar um Simulado"
            />
            <Header />
            <Container>
                <Sidebar />
                <ContentContainer>
                    <Content>
                        <span className="title-wrapper">
                            <h2 className="title">Simulados</h2>
                            <button className="button" onClick={openModal}>
                                Iniciar Simulado
                            </button>
                        </span>
                        {mockExams.length === 0 && !loading && <div style={{fontSize: "1.5rem", 
                        fontFamily: "Roboto-Bold", color: "var(--primary"}}>Você não iniciou nenhum simulado</div>}
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
                                            {mockExam.title}
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
                                                to={mockExam.isCompleted ? `/simulados/${mockExam.id}/resultado` : `/simulados/${mockExam.id}/questao`}
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
