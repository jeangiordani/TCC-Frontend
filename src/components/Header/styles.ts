import styled from "styled-components";

export const Container = styled.div`
    height: 80px;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
`;

export const StyledHeader = styled.header`
    width: 95%;
    /* background-color: red; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .height{
        height: 100%;
        display: flex;
        align-items: center;
    }

    .logo {
        width: 120px;
        height: 60px;
        cursor: pointer;
    }

    .svg-color {
        filter: invert(14%) sepia(57%) saturate(3117%) hue-rotate(211deg) brightness(95%) contrast(94%);
    }

    ul {
        list-style: none;
        display: flex;
    }

    li {
        margin-left: 20px;
        cursor: pointer;
    }

    .nav-item {
        width: 20px;
        height: 20px;
    }

    .user-info {
        display: flex;
        
    }

    .photo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;