import styled from "styled-components";

export const Footer = styled.footer`
    border-top: 1px solid var(--secondary);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    max-height: 50px;

    div {
        font-family: "Roboto-Regular";
        font-size: 0.8rem;
        font-weight: 600;
        color: black;
        text-align: center;
        opacity: 0.5;
    }
`;
