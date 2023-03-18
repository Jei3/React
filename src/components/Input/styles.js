import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: #232129;
    color: #666360;

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: #F4EDE8;
        background: transparent;
        border: 0;

        &:placeholder {
            color: #666360;
        }
    }
    
    > svg {
            margin-left: 16px;
        }

    
`;