import styled from "styled-components";
import { device } from "../../utils/breakpoints";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;

    justify-content: center;

    @media ${device.sm} {
        flex-direction: column;
    }
`;

export const ContentContainer = styled.main`
    flex-grow: 1;
    /* margin: 0 1.5rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    height: 100%;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title-wrapper {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        min-height: 40px;
        align-items: center;
        overflow-y: hidden;
        height: 30px;
    }

    .title {
        font-family: "Roboto-Bold";
        font-size: 1.2rem;
        color: var(--primary);
        margin-bottom: 20px;
        width: 100%;
        margin: 10px 0;
        overflow: hidden;
    }

    @media screen and (max-width: 1200px) {
        .title {
            overflow: hidden;
        }
    }

    .profile-area {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        box-sizing: border-box;

        .commom-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 40px;

            .profile-picture {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin-bottom: 10px;
                object-fit: cover;
            }

            .user-name {
                font-size: 30px;
                font-weight: 700;
                font-family: "Roboto-Bold";
            }

            .user-role {
                font-size: 20px;
                font-weight: 500;
                font-family: "Roboto-Regular";
                opacity: 0.5;
            }
        }

        .profile-info {
            margin: 0 auto;
            width: 95%;
            height: 100%;

            .email-wrapper {
                font-family: "Roboto-Bold";
                color: var(--primary);
                font-size: 1rem;
                margin-bottom: 10px;

                span {
                    color: black;
                    font-size: 0.8rem;
                    font-weight: 500;
                    font-family: "Roboto-Regular";
                    opacity: 0.5;
                }
            }
            .performance {
                font-family: "Roboto-Bold";
                overflow: hidden;


                h1 {
                    color: var(--primary);
                    font-size: 1rem;

                }

                .best {
                    font-family: "Roboto-Bold";
                    color: var(--green);
                    font-size: 0.8rem;
                    align-items: center;
                }

                .worst {
                    font-family: "Roboto-Bold";
                    color: var(--red);
                    font-size: 0.8rem;
                    align-items: center;
                }
            }

            .link {
                .button {
                    width: 110px;
                    height: 40px;
                    text-decoration: none;
                    font-family: "Roboto-Bold";
                    background-color: var(--primary);
                    color: #ffffff;
                    font-size: 16px;
                    font-weight: 700;
                    border-radius: 5px;
                    border: none;
                    cursor: pointer;
                }
            }

            .cards {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                max-width: 1200px;
                gap: 20px;
                margin-top: 20px;
                margin-bottom: 20px;

                .card {
                    width: 100%;
                    background-color: white;
                    border-radius: 10px;
                    padding: 10px 0px;
                    border: 1px solid var(--primary);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    
                    .numbers {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;
                        width: 100%;
                    }

                    .label {
                        font-family: "Roboto-Bold";
                        font-size: 0.8rem;
                        color: grey;
                        display: flex;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .profile-area {
            width: 95%;
            min-height: 500px;
        }
    }

    @media screen and (max-width: 500px) {
        .profile-area {
            width: 95%;
            min-height: 500px;

            .profile-info {
                margin: 0 auto;
                width: 95%;
                height: 60%;

                .performance {
                    .best {
                        font-size: 0.75rem;
                    }

                    .worst {
                        font-size: 0.75rem;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 400px) {
        .profile-area {
            width: 95%;
            min-height: 500px;

            .profile-info {
                margin: 0 auto;
                width: 95%;
                height: 60%;

                .performance {
                    .best {
                        width: 100%;
                    }

                    .worst {
                        width: 100%;
                    }
                }
            }
        }
    }
`;
