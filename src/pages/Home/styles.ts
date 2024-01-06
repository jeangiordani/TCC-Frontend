import styled from "styled-components";

import { device } from "../../utils/breakpoints";

export const Container = styled.section`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    flex-direction: column;

    @media ${device.sm} {
        .info {
            flex-direction: column;
            align-items: center;
        }
        .greetings {
            min-width: 100%;

            align-items: center;

            .welcome {
                font-size: 2rem;
                width: 100%;
                text-align: center;
            }

            .info-paragraph {
                min-width: 100%;
                text-align: center;
            }
        }
        .image {
            min-width: 100%;
            order: -1;
        }
    }

    @media ${device.lg} {
        .info {
            margin-top: 30px;
        }
    }
`;

export const Content = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    height: 100%;
    flex-direction: column;
    /* min-height: 80vh; */
    .info {
        display: flex;
        flex: 1;
    }

    .greetings {
        width: 50%;
        /* background-color: red; */
        display: flex;
        flex-direction: column;
        justify-content: center;

        .welcome {
            font-family: "Roboto-Regular", sans-serif;
            font-size: 2.5rem;
            color: var(--primary);
            text-shadow: 1px 2px 3px rgba(15, 47, 129, 0.22);
        }

        .info-paragraph {
            font-family: "Roboto-Regular";
            font-size: 1.25rem;
            width: 80%;
            color: black;
            opacity: 50%;
            margin-top: 20px;
        }
    }

    .image {
        width: 50%;
        display: flex;
        align-items: center;

        .home-image {
            min-width: 300px;
            min-height: 70%;
            height: 90%;
            width: 100%;
        }
    }

    @media ${device.xs} {
        .greetings {
            .info-paragraph {
                font-family: "Roboto-Regular";
                font-size: 0.8rem;
                min-width: 100%;
                color: black;
                opacity: 50%;
                margin-top: 20px;
            }
        }
    }
`;

export const ButtonArea = styled.div`
    display: flex;
    margin-top: 40px;

    .margin-left {
        margin-left: 14px;
    }

    .button-colored {
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
    }

    .button-colored:hover {
        cursor: pointer;
        background-color: var(--secondary);
        color: var(--primary);
    }

    .button-uncolored {
        width: 110px;
        height: 40px;
        text-decoration: none;
        font-family: "Roboto-Bold";
        background-color: #ffffff;
        color: var(--primary);
        font-size: 16px;
        font-weight: 700;
        border-radius: 5px;
        border: 1px solid var(--secondary);
    }

    .button-uncolored:hover {
        cursor: pointer;
        background-color: var(--secondary);
        color: var(--primary);
    }

    @media ${device.sm} {
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    @media ${device.lg} {
        margin-top: 20px;
    }
`;

export const CardArea = styled.div`
    width: 100%;
    border-top: 1px solid var(--secondary);

    height: 250px;

    ul {
        height: 100%;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    li {
        border: 2px solid var(--secondary);
        /* background-color: var(--secondary); */
        width: 30%;
        padding: 20px;
        height: 150px;
        border-radius: 5px;
    }

    .title {
        font-family: "Roboto-Bold";
        font-size: 1.5rem;
        color: var(--primary);
        margin-bottom: 20px;
    }

    .text {
        font-family: "Roboto-Regular";
        font-size: 1rem;
        color: black;
        opacity: 50%;
    }

    @media ${device.md} {
        margin-top: 20px;
        ul {
            flex-direction: column;
            align-items: center;
            height: auto;
        }

        li {
            margin-top: 20px;
            width: 80%;
            height: auto;
        }
    }
`;
