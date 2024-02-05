import React from "react";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Container, QuestionContainer } from "./styles";

const options = [
    { id: "1", value: "2" },
    { id: "2", value: "3" },
    { id: "3", value: "6" },
    { id: "4", value: "12" },
    { id: "5", value: "24" },
];

const Questions = () => {
    const [selectedOption, setSelectedOption] = React.useState<number>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(Number(event.target.value));
    };

    return (
        <>
            <Header />
            <BackButton />
            <Container>
                <QuestionContainer>
                    <div className="statement">
                        <h1 className="question-title">Questão 1</h1>
                        <p className="question-text">
                            Uma cozinheira produz docinhos especiais por
                            encomenda. Usando uma receita-base de massa, ela
                            prepara uma porção, com a qual produz 50 docinhos
                            maciços de formato esférico, com 2 cm de diâmetro.
                            Um cliente encomenda 150 desses docinhos, mas pede
                            que cada um tenha formato esférico com 4 cm de
                            diâmetro. A cozinheira pretende preparar o número
                            exato de porções da receita-base de massa necessário
                            para produzir os docinhos dessa encomenda.
                        </p>
                        <div className="question-text">
                            Quantas porções da receita-base de massa ela deve
                            preparar para atender esse cliente?
                        </div>
                    </div>

                    <form className="options">
                        {options.map((option) => (
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
            </Container>
        </>
    );
};

export default Questions;
