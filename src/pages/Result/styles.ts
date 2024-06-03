import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 80vh;
    height: 100%;
    width: 100%;
    align-items: center;
    flex-direction: column;
`;

export const ContentWrapper = styled.div<{$color?:string}>`
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: center;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 500px;
    }

    .icon {
        width: 100%;
        max-width: 100px;
        margin-bottom: 20px;
        filter: ${props => props.$color == "red" ? "var(--red-filter)" : "var(--green-filter)"};
    }

    .title {
        font-size: 2rem;
        margin-top: 20px;
        font-family: "Roboto-Bold";
    }

    .title-result {
        font-size: 2rem;
        color: ${props => props.$color == "red" ? "var(--red)" : "var(--green)"};
        margin-bottom: 20px;
        font-family: "Roboto-Bold";
    }
`;


