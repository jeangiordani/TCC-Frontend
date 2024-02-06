import styled from "styled-components";
import { device } from "../../utils/breakpoints";

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
        .option::after {
            content: "asas";
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;

    .center-button {
        display: flex;
        align-items: center;

        .button {
            background-color: rgba(0, 0, 0, 0.1);
            width: 120px;
            height: 40px;
            border: none;
            cursor: pointer;
            font-family: "Roboto-Bold", sans-serif;
            color: rgba(0, 0, 0, 0.7);
            border-radius: 5px;
            margin: 0 5px;
        }

        .prev::before {
            content: "<";
        }

        .next::after {
            content: ">";
        }

        .disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    }

    .comments-button {
        display: flex;
        align-items: center;

        .comments {
            border: none;
            cursor: pointer;
            font-family: "Roboto-Bold", sans-serif;
            color: rgba(0, 0, 0, 0.7);
            font-size: 0.9rem;
            width: 120px;
            margin: 0 5px;
        }

        .answer-button {
            width: 120px;
            height: 40px;
            border: none;
            cursor: pointer;
            font-family: "Roboto-Bold", sans-serif;
            color: white;
            border-radius: 5px;
            margin: 0 5px;
            background-color: var(--primary);
        }
    }
    @media ${device.md} {
        flex-direction: column;

        .comments-button {
            margin: 10px;
        }
    }
`;
