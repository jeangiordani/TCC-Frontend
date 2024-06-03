import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const Container = styled.main`
    display: flex;
    min-height: 80vh;
    height: 100%;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;

    .title {
        margin-top: 10px;
        font-family: "Roboto-Bold";
        color: var(--primary);
        font-size: 2rem;
    }

    @media ${device.xs} {
        .title {
            font-size: 1.5rem;
        }
    }
`;

export const Form = styled.form`
    width: 700px;

    height: 100%;

    display: flex;

    flex-direction: column;
    align-items: center;

    .error {
        font-family: "Roboto-Bold";
        color: red;
        font-size: 0.9rem;
        margin-top: 5px;
    }

    .input-wrapper {
        min-width: 50%;
        max-width: 50%;
        display: flex;
        flex-direction: column;

        .label {
            font-family: "Roboto-Bold";
            color: rgba(0, 0, 0, 0.7);
            font-size: 0.9rem;
            margin-top: 20px;
        }

        .input {
            min-width: 100%;
            border: 1px solid rgba(0, 0, 0, 0.1);
            height: 45px;
            border-radius: 5px;

            color: rgba(0, 0, 0, 0.7);
            font-family: "Roboto-Regular";
            font-size: 1rem;
            padding-left: 10px;
            margin-top: 10px;
        }

        .input::placeholder {
            font-family: "Roboto-Regular";
            color: black;
            opacity: 0.3;
            font-size: 1rem;
        }

        .input:focus {
            border: 1px solid var(--secondary);
            outline: none;
            background-color: rgba(0, 0, 0, 0.02);
        }

        .input-checkbox {
            display: flex;
            margin-top: 10px;
            align-items: center;

            .checkbox {
                height: 25px;
                width: 25px;
                background-color: #eee;
            }
            .label-checkbox {
                font-family: "Roboto-Regular";
                color: rgba(0, 0, 0, 0.7);
                font-size: 0.9rem;
                margin-left: 10px;
            }
        }

        .image-input {
            margin-top: 10px;
            width: 100%;
        }

        .link {
            font-family: "Roboto-Bold";
            color: var(--primary);
            font-size: 0.9rem;
            text-decoration: none;
        }

        .button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 45px;
            border-radius: 5px;
            margin-top: 10px;
            font-family: "Roboto-Bold";
            border: none;
            color: white;
            background-color: var(--primary);
            font-size: 1rem;
          }

        .button:hover {
            opacity: 0.8;
            cursor: pointer;
        }

        .error-input {
            border: 1px solid red;
        }
    }

    @media ${device.xs} {
        width: 500px;
    }
`;
