import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { Container, ContentWrapper, Table } from "./styles";
import { useFetch } from "../../hooks/useFetch";

import checkmark from "../../assets/icons/check-circle-svgrepo-com.svg";
import errorIcon from "../../assets/icons/close-ellipse-svgrepo-com.svg";
import { api } from "../../api/api";
import { Loading } from "../../components/Spinner";

type Alternative = {
    id: string;
    letter: string;
    description: string;
    correct: boolean;
};

type Answer = {
    id: number;
    correct: boolean;
    alternativeId: string;
};   

type CommentType = {
    id: number;
    text: string;   
};

type Question = {
    id: string;
    statement: string;
    postStatement?: string;
    alternatives: Array<Alternative>;
    answer: Answer;
    image: string;
    comments: Array<CommentType>;
    knowledgeArea: string;
};

interface MockExamProps {
    id: string;
    title: string;
    isCompleted: boolean;
    progress: number;
    qty_questions: number;
    qty_answered: number;
    qty_correct: number;
    qty_incorrect?: number;
}

const Result = () => {
    const { id } = useParams<{ id: string }>();
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const { data, loading, error, refetch } = useFetch("/mock-exams/" + id);
    const [currentMockExam, setCurrentMockExam] = React.useState<MockExamProps>({
        id: "",
        title: "",
        isCompleted: false,
        progress: 0,
        qty_questions: 0,
        qty_answered: 0,
        qty_correct: 0,
    });
    const navigate = useNavigate();
    const [passed, setPassed] = React.useState<boolean | null>(false);
    const [loadingData, setLoadingData] = React.useState(true);
    const [completed, setCompleted] = React.useState<boolean | null>(null);

    React.useEffect(() => {
        api.get(`/mock-exams/${id}/answers`).then((response) => {
            const progress = Math.floor(
                (response.data.data.qty_answered / response.data.data.qty_questions) * 100
            );
            setCurrentMockExam({
                id: response.data.data.id,
                title: response.data.data.title,
                isCompleted: response.data.data.qty_answered === response.data.data.qty_questions,
                progress,
                qty_questions: response.data.data.qty_questions,
                qty_answered: response.data.data.qty_answered,
                qty_correct: response.data.data.qty_correct,
                qty_incorrect: response.data.data.qty_incorrect,
            });
            setLoadingData(false);
        });

        if (data && data.questions) {
            setCompleted(data.is_completed);
            const newQuestions = data.questions.map((question: any) => {
                const alternatives = question.alternatives.map((alternative: any) => ({
                    id: alternative.id,
                    letter: alternative.letter,
                    description: alternative.description,
                    correct: alternative.is_correct,
                }));

                return {
                    id: question.id,
                    statement: question.statement,
                    postStatement: question.post_statement,
                    alternatives,
                    knowledgeArea: question.knowledge_area,
                    answer: {
                        id: question.answer.id,
                        correct: question.answer.is_correct,
                        alternativeId: question.answer.alternative_id,
                    },
                    image: question.image,
                    comments: question.comments,
                };
            });
            setQuestions(newQuestions);
        }
    }, [data, id]);

    React.useEffect(() => {
        if (currentMockExam) {
            setPassed(currentMockExam.qty_correct / currentMockExam.qty_questions >= 0.7);
        }
    }, [currentMockExam]);

    React.useEffect(() => {
        if (completed != null) {
            if (completed === false) {
                navigate("/simulados");
            }
        }
    }, [completed, navigate]);

    if (loadingData) {
        return (<div style={{width: "100%", height:"100vh", display: "flex", justifyContent: "center", alignItems:"center"}}>
            <Loading color="var(--primary)" size={100} />;
        </ div>);
    }

    return (
        <>
            <Header />
            <Container>
                <ContentWrapper $color={passed ? "green" : "red"}>
                    <div className="content">
                        <h1 className="title">Resultado das questões</h1>
                        <img src={passed ? checkmark : errorIcon} alt="Feito" className="icon" />
                        <h2 className="title-result">{passed ? "Você passou" : "Você não passou"}</h2>
                        <div className="boxes">
                            <div className="box">
                                <span className="box-title">Porcentagem</span>
                                <span className="box-info">{currentMockExam && ((currentMockExam.qty_correct / currentMockExam.qty_questions) * 100 || 0)}%</span>
                            </div>
                            <div className="box">
                                <span className="box-title">Acertos</span>
                                <span className="box-info right">{currentMockExam && (currentMockExam.qty_correct || 0)}</span>
                            </div>
                            <div className="box">
                                <span className="box-title">Erros</span>
                                <span className="box-info wrong">{currentMockExam && (currentMockExam.qty_incorrect || 0)}</span>
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
                <div style={{ width: "70%" }}>
                    <h1 className="title">Resultados</h1>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th className="border-radius-top-left">Questão</th>
                            <th>Alternativa Correta</th>
                            <th>Alternativa Marcada</th>
                            <th className="border-radius-top-right">Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question, index) => (
                            <tr key={question.id}>
                                <td>{index + 1}</td>
                                <td>{question.alternatives.find((alternative) => alternative.correct)?.letter}</td>
                                <td>{question.alternatives.find((alternative) => alternative.id === question.answer.alternativeId)?.letter}</td>
                                <td className={question.answer.correct ? "correct" : "wrong"}>{question.answer.alternativeId != null && question.answer.correct ? "Correta" : "Errada"}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default Result;
