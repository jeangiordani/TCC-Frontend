import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Container, ContentWrapper } from "./styles";
import { useFetch } from "../../hooks/useFetch";

import checkmark from "../../assets/icons/check-circle-svgrepo-com.svg";
import errorIcon from "../../assets/icons/close-ellipse-svgrepo-com.svg";

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


const Result = () => {
    const { id } = useParams<{ id: string }>();
    
    const [questions, setQuestions] = React.useState<Question[]>([]);
    
    const { data, loading, error, refetch } = useFetch("/mock-exams/" + id);
    const navigate = useNavigate();
    
    
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
    }, [data]);



    

    return (
        <>
            <Header />
            <Container>
                <ContentWrapper>
                    <div className="content">
                        <h1 className="title">Resulado das questões</h1>
                        <img src={checkmark} alt="Feito" className="icon" />
                        <h2 className="title-result">Você passou!</h2>
                    </div>
                </ContentWrapper>
            </Container>
        </>
    );
};

export default Result;
