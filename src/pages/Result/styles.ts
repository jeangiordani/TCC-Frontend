import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 80vh;
    height: 100%;
    width: 100%;
    align-items: center;
    flex-direction: column;

    .title {
        font-family: "Roboto-Bold";
        font-size: 1.5rem;
        color: var(--primary);
        margin-bottom: 20px;
        margin: 10px 0;
    
    }
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
        color: grey;
    }

    .title-result {
        font-size: 2rem;
        color: ${props => props.$color == "red" ? "var(--red)" : "var(--green)"};
        margin-bottom: 20px;
        font-family: "Roboto-Bold";
    }

    .boxes {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 20px;
        

        .box{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            // max-width: 100px;
            padding: 10px;
            border-radius: 10px;
            background-color: #f5f5f5;
            flex:1;
            margin: 0 10px;
        }

        .box-title {
            font-size: 1rem;
            text-align: center;
            font-family: "Roboto-Regular";
            color: grey;
        }

        .box-info {
            font-size: 2rem;
            text-align: center;
            font-family: "Roboto-Bold";
        }

        .right {
            color: var(--green);
        }

        .wrong {
            color: var(--red);
        }
    }
`;


export const Table = styled.table`
    width: 70%;
    border-collapse: collapse;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 4px -2px rgba(110, 110, 110, 1);
    -moz-box-shadow: 0px 0px 4px -2px rgba(110, 110, 110, 1);
    box-shadow: 0px 0px 4px -2px rgba(110, 110, 110, 1);
    padding: 10px;

    th {
        font-family: "Roboto-Regular";
        text-align: left;
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;
        background-color: var(--primary);
        color: white;
        -webkit-box-shadow: 0px 0px 4px -2px rgba(110, 110, 110, 1);
        -moz-box-shadow: 0px 0px 4px -2px rgba(110, 110, 110, 1);
        box-shadow: 0px 0px 4px -2px rgba(110, 110, 110, 1);
    }

    .border-radius-top-left {
        border-top-left-radius: 10px;
    }

    .border-radius-top-right {
        border-top-right-radius: 10px;
    }

    td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;
        font-family: "Roboto-Regular";
    }

    .correct {
        color: var(--green);
    }

    .wrong {
        color: var(--red);
    }
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Roboto-Bold";
        width: 70px;
        height: 30px;
        color: white;
        background-color: "var(--primary)";
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    tr:nth-child(even) {
    }

    .button {
            background-color: var(--primary);
            width: 50px;
            height: 30px;
            border: none;
            cursor: pointer;
            font-family: "Roboto-Bold", sans-serif;
            font-size: 0.8rem;
            color: white;
            border-radius: 5px;
            text-decoration: none;
            margin: 0 5px;
        }
`;
