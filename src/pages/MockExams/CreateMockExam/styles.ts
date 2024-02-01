import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.form`
    width: 95%;
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
        min-width: 100%;
        max-width: 100%;
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

        .long-text {
            height: 90px;
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

        .link {
            font-family: "Roboto-Bold";
            color: var(--primary);
            font-size: 0.9rem;
            text-decoration: none;
        }

        .button {
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

        .inline {
            display: flex;
            width: 100%;
            flex-direction: row;
            flex: 1;
            margin-top: 20px;

            .inline-wrapper {
                width: 50%;
            }

            .label-inline {
                font-family: "Roboto-Bold";
                color: rgba(0, 0, 0, 0.7);
                font-size: 0.9rem;
            }

            .input-quantity {
                min-width: 25%;
                border: 1px solid rgba(0, 0, 0, 0.1);
                height: 30px;
                border-radius: 5px;

                color: rgba(0, 0, 0, 0.7);
                font-family: "Roboto-Regular";
                font-size: 1rem;
                padding-left: 10px;
            }

            .input-select {
                min-width: 50%;
                border: 1px solid rgba(0, 0, 0, 0.1);
                height: 30px;
                border-radius: 5px;

                color: rgba(0, 0, 0, 0.7);
                font-family: "Roboto-Regular";
                font-size: 1rem;
                padding-left: 10px;
            }
        }
    }
`;
