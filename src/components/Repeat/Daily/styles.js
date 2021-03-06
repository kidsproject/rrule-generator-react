import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
        padding-right: 10px;
        ::last-child {
            padding-right: 0;
        }
    }

    @media (max-width: 576px) {
        flex-direction: column;
        align-items: flex-start;
        div {
            padding-right: 0;
            padding-bottom: 10px;
        }
        div::last-child {
            padding-bottom: 0;
        }
    }
`;
