import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;

    justify-content: center;
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
    }

    .title {
        font-family: "Roboto-Bold";
        font-size: 1.2rem;
        color: var(--primary);
        margin-bottom: 20px;
        width: 100%;
        margin: 10px 0;
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
`;

export const Card = styled.div<{ $completed: boolean }>`
    width: 200px;
    height: 230px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-right: 30px;
    margin-bottom: 30px;

    -webkit-box-shadow: 0px 0px 4px -2px rgba(110, 110, 110, 1);
    -moz-box-shadow: 0px 0px 4px -2px rgba(110, 110, 110, 1);
    box-shadow: 0px 0px 4px -2px rgba(110, 110, 110, 1);

    .card-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .checkmark-position {
        width: 95%;
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
        overflow: hidden;

        .checkmark {
            visibility: ${(props) => (props.$completed ? "visible" : "hidden")};
            width: 20px;
            height: 20px;
            filter: var(--green-filter);
        }
    }

    .card-icon {
        width: 60px;
        height: 60px;
        filter: ${(props) =>
            props.$completed ? "var(--green-filter)" : "var(--primary-filter)"};
        margin: 10px 0;
    }

    .card-title {
        font-family: "Roboto-Bold";
        font-size: 1.2rem;
        color: ${(props) =>
            props.$completed ? "var(--green)" : "var(--primary)"};
        text-align: center;
        width: 95%;
        height: 60px;
    }

    .card-info {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .card-progress {
            display: flex;
            flex-direction: column;
            align-items: center;

            .progress-title {
                font-family: "Roboto-Regular";
                font-size: 0.7rem;
                color: black;
                opacity: 0.7;
            }
            .progress-value {
                font-family: "Roboto-Bold";
                font-size: 0.6rem;
                color: black;
                opacity: 0.5;
            }
        }

        .button {
            font-family: "Roboto-Bold";
            width: 70px;
            height: 30px;
            color: white;
            background-color: ${(props) =>
                props.$completed ? "var(--green)" : "var(--primary)"};
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`;
