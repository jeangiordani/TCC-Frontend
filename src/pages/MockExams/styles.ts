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
    width: 95%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        font-family: "Roboto-Bold";
        font-size: 1.2rem;
        color: var(--primary);
        margin-bottom: 1rem;
        width: 100%;
        margin: 10px 0;
        overflow: hidden;
    }
`;

export const Cards = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    .card {
        width: 200px;
        height: 300px;
        border-radius: 10px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;

        .card-icon {
            margin: 0 auto;
            width: 50px;
            height: 50px;
            filter: var(--primary-filter);
        }

        .card-title {
            font-family: "Roboto-Bold";
            font-size: 1.2rem;
            color: var(--primary);
            text-align: center;
        }
    }
`;
