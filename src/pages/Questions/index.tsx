import React from "react";
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { ButtonContainer, Container, QuestionContainer } from "./styles";
import CustomModal from "../../components/Modal";
import Comments from "./Comments";
import { useFetch } from "../../hooks/useFetch";
import { useAnswerQuestion } from "../../hooks/useAnswerQuestion";

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

type Question = {
    id: string;
    statement: string;
    postStatement?: string;
    alternatives: Array<Alternative>;
    answer: Answer;
    image: string;
};

const Questions = () => {
    const { id } = useParams<{ id: string }>();
    
    const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
    const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const [isLastQuestion, setIsLastQuestion] = React.useState<boolean>(false);
    const [isFirstQuestion, setIsFirstQuestion] = React.useState<boolean>(true);
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentQuestionId, setCurrentQuestionId] = React.useState<string>("");
    
    const { data, loading, error, refetch } = useFetch("/mock-exams/" + id);
    const { answerQuestion, loading: loadingAnswer } = useAnswerQuestion();
    
    
    React.useEffect(() => {
        if (data && data.questions) {
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
                    answer: {
                        id: question.answer.id,
                        correct: question.answer.is_correct,
                        alternativeId: question.answer.alternative_id,
                    },
                    image: question.image,
                };
            });
            setQuestions(newQuestions);
            console.log(newQuestions);
            
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
    
    const handleNextQuestion = () => {
        if (!isLastQuestion) {
            setCurrentQuestion((prev) => prev + 1);
        }
    };
    
    const handlePrevQuestion = () => {
        if (!isFirstQuestion) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };

    const handleAnswer = async (mockExamId: string | undefined, alternativeId: string | null) => {
        if (alternativeId) {
            await answerQuestion(mockExamId+"", alternativeId);
            refetch();
            
        }
    };

    const currentQuestionData = questions[currentQuestion];

    return (
        <>
            <CustomModal
                isOpen={isOpen}
                closeModal={closeModal}
                Content={() => <Comments questionId={currentQuestionId} />}
                title="Comentários"
            />
            <Header />
            <BackButton />
            <Container>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error loading data</p>
                ) : currentQuestionData ? (
                    <QuestionContainer>
                        <div className="statement">
                            <h1 className="question-title">
                                Questão {currentQuestion + 1}
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
                                        <div style={{marginRight: "5px", fontWeight: "bold"}}>{option.letter})</div>
                                        {option.description}
                                    </label>
                                </div>
                            ))}
                        </form>
                    </QuestionContainer>
                ) : null}
                <ButtonContainer>
                    <div className="center-button">
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
                    </div>
                    <div className="comments-button">
                        <div className="comments" onClick={openModal}>
                            Comentários (2)
                        </div>
                        {currentQuestionData && (  
                            currentQuestionData.answer.alternativeId == null ? (
                                <button
                                className="answer-button"
                                onClick={() => handleAnswer(currentQuestionData.answer.id+"", selectedOption)}
                            >
                            {loadingAnswer ? "Respondendo..." : "Responder"}
                            </button>
                            ) : (
                                <div></div>
                            )
                        )}
                    </div>
                </ButtonContainer>
            </Container>
        </>
    );
};

export default Questions;
