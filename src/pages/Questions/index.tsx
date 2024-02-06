import React from "react";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { ButtonContainer, Container, QuestionContainer } from "./styles";

type Question = {
    id: string;
    statement: string;
    preStatement?: string;
    options: Array<{ id: string; value: number }>;
};

const questionsPayload: Question[] = [
    {
        id: "1",
        statement:
            "Uma cozinheira produz docinhos especiais por encomenda. Usando uma receita-base de massa, ela prepara uma porção, com a qual produz 50 docinhos maciços de formato esférico, com 2 cm de diâmetro. Um cliente encomenda 150 desses docinhos, mas pede que cada um tenha formato esférico com 4 cm de diâmetro. A cozinheira pretende preparar o número exato de porções da receita-base de massa necessário para produzir os docinhos dessa encomenda.",
        preStatement:
            "Quantas porções da receita-base de massa ela deve preparar para atender esse cliente?",
        options: [
            { id: "1", value: 2 },
            { id: "2", value: 3 },
            { id: "3", value: 6 },
            { id: "4", value: 12 },
            { id: "5", value: 24 },
        ],
    },
    {
        id: "2",
        statement:
            "Em um concurso de beleza, a vencedora foi escolhida por meio de votação. Cada jurado podia votar em uma das três candidatas. A candidata vencedora recebeu 50% dos votos, a segunda colocada recebeu 30% e a terceira, 20%. O número de jurados que votaram na candidata vencedora foi igual a 3/4 do número de jurados que votaram na segunda colocada. O número de jurados que votaram na terceira colocada foi igual a 2/3 do número de jurados que votaram na segunda colocada. O número total de jurados que votaram na candidata vencedora foi igual a 60.",
        preStatement: "Quantos jurados votaram na segunda colocada?",
        options: [
            { id: "1", value: 20 },
            { id: "2", value: 30 },
            { id: "3", value: 40 },
            { id: "4", value: 50 },
            { id: "5", value: 60 },
        ],
    },
];

const Questions = () => {
    const [selectedOption, setSelectedOption] = React.useState<number | null>(
        null,
    );
    const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
    const [questions, setQuestions] = React.useState(questionsPayload);
    const [isLastQuestion, setIsLastQuestion] = React.useState<boolean>();
    const [isFirstQuestion, setIsFirstQuestion] = React.useState<boolean>();

    React.useEffect(() => {
        setIsLastQuestion(currentQuestion === questions.length - 1);
        setIsFirstQuestion(currentQuestion === 0);
    }, [currentQuestion, questions]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(Number(event.target.value));
    };

    const handleNextQuestion = () => {
        if (isLastQuestion) return;
        setCurrentQuestion((prev) => prev + 1);
    };

    const handlePrevQuestion = () => {
        if (isFirstQuestion) return;
        setCurrentQuestion((prev) => prev - 1);
    };

    return (
        <>
            <Header />
            <BackButton />
            <Container>
                <QuestionContainer>
                    {currentQuestion < questions.length && (
                        <div className="statement">
                            <h1 className="question-title">
                                Questão {currentQuestion + 1}
                            </h1>
                            <p className="question-text">
                                {questions[currentQuestion].statement}
                            </p>
                            <div className="question-text">
                                {questions[currentQuestion].preStatement}
                            </div>
                        </div>
                    )}
                    <form className="options">
                        {questions[currentQuestion].options.map((option) => (
                            <div className="option" key={option.id}>
                                <input
                                    type="radio"
                                    value={option.value}
                                    checked={selectedOption === option.value}
                                    id={option.value + ""}
                                    onChange={handleChange}
                                />
                                <label htmlFor={option.value + ""}>
                                    {option.value}
                                </label>
                            </div>
                        ))}
                    </form>
                </QuestionContainer>
                <ButtonContainer>
                    <div className="center-button">
                        <button
                            className={
                                "prev button " + (isFirstQuestion && "disabled")
                            }
                            onClick={() => handlePrevQuestion()}
                        >
                            Anterior
                        </button>
                        <button
                            className={
                                "next button " + (isLastQuestion && "disabled")
                            }
                            onClick={() => handleNextQuestion()}
                        >
                            Próximo
                        </button>
                    </div>
                    <div className="comments-button">
                        <div className="comments">Comentários (2)</div>
                        <button className="answer-button">Responder</button>
                    </div>
                </ButtonContainer>
            </Container>
        </>
    );
};

export default Questions;
