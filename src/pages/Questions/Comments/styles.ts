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

    .comments {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;

        .comment {
            display: flex;
            margin-bottom: 10px;

            .text-border {
                display: row;
                flex: 1;
                background-color: var(--secondary);
                border-radius: 10px;
                min-height: 70px;
                padding: 10px;
                
                .info {
                    // display: flex;
                    // flex-direction: row;

                    .name {
                        font-family: "Roboto-Bold", sans-serif;
                        font-size: 0.8rem;
                        margin-right: 5px;
                    }
    
                    .role {
                        font-family: "Roboto-Bold", sans-serif;
                        font-size: 0.6rem;
                        color: black ;
                        opacity: 0.5;
                    }
                }

                

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
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 100px;
            border-radius: 5px;
            margin-top: 10px;
            font-family: "Roboto-Bold";
            border: none;
            color: white;
            background-color: var(--primary);
            font-size: 1rem;
            cursor: pointer;
        }

        .button:hover {
            opacity: 0.8;
        }
    }
`;
