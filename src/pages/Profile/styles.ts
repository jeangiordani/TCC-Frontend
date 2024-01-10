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
    }

    .title {
        font-family: "Roboto-Bold";
        font-size: 1.2rem;
        color: var(--primary);
        margin-bottom: 20px;
        width: 100%;
        margin: 10px 0;
    }

    @media screen and (max-width: 1200px) {
        .title {
            overflow: hidden;
        }
    }
`;
