import styled, { createGlobalStyle } from 'styled-components';

export const Alert = styled.div`
    color: #fff;
    background-color: #e57373;
    padding: 6px 16px;
    border-radius: 5px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const GlobalStyle = createGlobalStyle`
    input, select {
        padding: 5px 10px;
    }
`;
