import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../../components/Header";
import { ButtonContainer, Container, QuestionContainer } from "./styles";
import CustomModal from "../../../components/Modal";
import Comments from "../Comments";
import { useFetch } from "../../../hooks/useFetch";
import { useAnswerQuestion } from "../../../hooks/useAnswerQuestion";
import { Loading } from "../../../components/Spinner";
import { api } from "../../../api/api";

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
}


const Question = () => {
    const { id, questionId, questionNumber } = useParams<{ id: string, questionId: string, questionNumber: string }>();
    
    const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
    const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const [isLastQuestion, setIsLastQuestion] = React.useState<boolean>(false);
    const [isFirstQuestion, setIsFirstQuestion] = React.useState<boolean>(true);
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentQuestionId, setCurrentQuestionId] = React.useState<string>("");
    const [currentMockExam, setCurrentMockExam] = React.useState<MockExamProps>({
        id: "",
        title: "",
        isCompleted: false,
        progress: 0,
        qty_questions: 0,
        qty_answered: 0,
    });
    
    const { data, loading, error } = useFetch("/mock-exams/" + id + "/question/"+questionId);
    const { loading: loadingAnswer } = useAnswerQuestion();
    
    React.useEffect(() => {
        if (data && data.questions) {
            console.log(data.questions);
            
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
                });
                
            });
        }
    }, [data, loadingAnswer]);

    React.useEffect(() => {
        setIsLastQuestion(currentQuestion === questions.length - 1);
        setIsFirstQuestion(currentQuestion === 0);
        if (questions[currentQuestion]) {
            setCurrentQuestionId(questions[currentQuestion].id);
        }
    }, [currentQuestion, questions]);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    const currentQuestionData = questions[currentQuestion];
    if (loading) {
        return (<div style={{width: "100%", height:"100vh", display: "flex", justifyContent: "center", alignItems:"center"}}>
            <Loading color="var(--primary)" size={100} />;
        </ div>);
    }

    return (
        <>
            <CustomModal
                isOpen={isOpen}
                closeModal={closeModal}
                Content={() => <Comments questionId={currentQuestionId} />}
                title="Comentários"
            />
            <Header />
            <Container>
                {loading ? (
                    <Loading color="var(--primary)" size={100}/>
                ) : error ? (
                    <p>Error loading data</p>
                ) : currentQuestionData ? (
                    <QuestionContainer>
                        <div className="statement">
                            <h1 className="question-title">
                                Questão {questionNumber}
                            </h1>
                            <p style={{whiteSpace: "pre-wrap"}} className="question-text">
                                {currentQuestionData.statement}
                            </p>
                            {currentQuestionData.image != null && <img className="question-image" src={currentQuestionData.image} />}
                            <div style={{whiteSpace: "pre-wrap"}} className="question-text">
                                {currentQuestionData.postStatement}
                            </div>
                        </div>
                        <form className="options">
                            {currentQuestionData.alternatives.map((option) => (
                                <div className={"option " + 
                                (currentQuestionData.answer.alternativeId == option.id ? (currentQuestionData.answer.correct ? "right" : "wrong") : "") + " " +
                                (currentQuestionData.answer.alternativeId != null ? (option.correct == true ? "right" : "") : "")
                                } key={option.id}>

                                    <input
                                        type="radio"
                                        value={option.id}
                                        checked={currentQuestionData.answer.alternativeId == null ? selectedOption == option.id : currentQuestionData.answer.alternativeId == option.id}
                                        id={option.id}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor={option.id}>
                                        <div className="letter">{option.letter+")"}</div>
                                        {option.description}
                                    </label>
                                </div>
                            ))}
                        </form>
                    </QuestionContainer>
                ) : null}
                <ButtonContainer>
                    {/* <div className="center-button">
                        <button
                            className={`prev button ${isFirstQuestion ? "disabled" : ""}`}
                            onClick={handlePrevQuestion}
                        >
                            Anterior
                        </button>
                        <button
                            className={`next button ${isLastQuestion ? "disabled" : ""}`}
                            onClick={handleNextQuestion}
                        >
                            Próximo
                        </button>
                    </div> */}
                    <div className="comments-button">
                        <div className="comments" onClick={openModal}>
                            Comentários ({currentQuestionData && (currentQuestionData.comments.length || 0)})
                        </div>
                        {/* {currentQuestionData && (  
                            currentQuestionData.answer.alternativeId == null ? (
                                <button
                                className="answer-button"
                                onClick={() => handleAnswer(currentQuestionData.answer.id+"", selectedOption)}
                                disabled={loadingAnswer}
                            >
                            {loadingAnswer ? <Loading color="#fff" /> : "Responder"}
                            </button>
                            ) : (
                                <div></div>
                            )
                        )}

                        {isLastQuestion && currentMockExam && currentMockExam.isCompleted && (
                            <button
                                className="answer-button"
                                onClick={() => handleFinalAnswer(currentMockExam.id+"", null)}
                            >
                                Finalizar Simulado
                            </button>
                        )} */}
                    </div>
                </ButtonContainer>
            </Container>
        </>
    );
};

export default Question;
