import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 80vh;
    height: 100%;
    width: 100%;
    align-items: center;
    flex-direction: column;
`;

export const QuestionContainer = styled.div`
    width: 80%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;

    -webkit-box-shadow: 0px 0px 4px -2px rgba(110, 110, 110, 1);
    -moz-box-shadow: 0px 0px 4px -2px rgba(110, 110, 110, 1);
    box-shadow: 0px 0px 4px -2px rgba(110, 110, 110, 1);

    .statement {
        width: 95%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        .question-title {
            font-family: "Roboto-Bold", sans-serif;
            opacity: 0.5;
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .question-text {
            font-family: "Roboto-Regular", sans-serif;
            font-size: 0.9rem;
            margin-bottom: 10px;
            color: var(--primary);
            font-weight: 600;
        }
    }

    .options {
        width: 95%;

        .option {
            width: 100%;
            display: flex;
            margin-bottom: 10px;
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            padding: 10px;

            input {
                cursor: pointer;
            }

            label {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                transition: all 0.2s;
                margin-left: 10px;
                font-family: "Roboto-Regular", sans-serif;
                font-weight: 500;
                height: 100%;
            }

            &:hover {
                background-color: rgba(0, 0, 0, 0.1);
            }
        }
    }
`;
