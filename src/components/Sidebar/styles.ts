import styled from "styled-components";

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    width: 250px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    height: 100%;

    .nav {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        list-style: none;
    }

    .nav-item {
        width: 100%;
        height: 50px;
        display: flex;
        cursor: pointer;
        align-items: center;
    }

    .icon {
        height: 20px;
        width: 20px;
        margin-left: 10px;
        filter: var(--primary-filter);
        margin-right: 10px;
    }
    .link {
        font-family: "Roboto-Regular";
        font-size: 1rem;
        font-weight: 600;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: var(--primary);
        padding: 10px;
        opacity: 0.7;
    }
    .active {
        color: var(--primary);
        border-right: 5px solid var(--primary);
        border-radius: 10px;
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        opacity: 1;
    }
`;
