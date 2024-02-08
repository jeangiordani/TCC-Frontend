import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CommentsContainer = styled.div<{ $formVisible?: boolean }>`
    display: flex;
    flex-direction: column;
    width: 95%;
    align-items: center;
    margin-top: 20px;
    height: 100%;

    .comments {
        width: 100%;
        display: flex;
        flex-direction: column;

        .comment {
            display: flex;
            margin-bottom: 10px;

            .text-border {
                display: flex;
                flex: 1;
                background-color: var(--secondary);
                border-radius: 10px;
                min-height: 70px;
                padding: 10px;

                .text {
                    font-family: "Roboto-Regular", sans-serif;
                    font-size: 0.8rem;
                }
                .image {
                    min-width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-right: 10px;
                }
            }
        }
    }

    .form {
        width: 100%;
        visibility: ${(props) => (props.$formVisible ? "visible" : "hidden")};
        .input {
            min-width: 100%;
            max-width: 100%;
            min-height: 50px;
            padding: 10px;
            border-radius: 10px;
            font-family: "Roboto-Regular", sans-serif;
        }

        .input:focus {
            outline: none;
        }

        .button {
            width: 100px;
            height: 40px;
            border-radius: 10px;
            border: none;
            font-family: "Roboto-Bold", sans-serif;
            cursor: pointer;
            color: white;
            background-color: var(--primary);
        }

        .button:hover {
            opacity: 0.8;
        }
    }
`;
