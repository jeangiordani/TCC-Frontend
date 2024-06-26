import styled from "styled-components";

export const Container = styled.div`
    min-height: 80px;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledHeader = styled.header`
    width: 95%;
    /* background-color: red; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .height {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .logo {
        width: 150px;
        height: 80px;
        cursor: pointer;
    }

    .svg-color {
        filter: var(--primary-filter);
    }

    ul {
        list-style: none;
        display: flex;
        align-items: center;
    }

    li {
        margin-left: 20px;
        cursor: pointer;
    }

    .nav-item {
        width: 20px;
        height: 20px;
    }

    .user {
        display: flex;
    }

    .user-info {
        display: flex;
        margin-left: 5px;
        flex-direction: column;
        justify-content: center;
        cursor: default;
    }

    .user-photo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid var(--primary);
        object-fit: cover;
    }

    .name {
        font-size: 15px;
        font-weight: 700;
        font-family: "Roboto-Bold";
    }

    .role {
        font-size: 10px;
        font-weight: 500;
        font-family: "Roboto-Regular";
        opacity: 0.5;
    }
`;

export const AuthButton = styled.div`
    display: flex;
    height: 100%;
    align-items: center;

    .margin-left {
        margin-left: 14px;
    }

    .button-login {
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

    .button-login:hover {
        cursor: pointer;
        background-color: var(--secondary);
        color: var(--primary);
    }

    .button-register {
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

    .button-register:hover {
        cursor: pointer;
        background-color: var(--secondary);
        color: var(--primary);
    }
`;
