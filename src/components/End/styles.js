import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 20px;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

export const LabelWrapper = styled.div`
    display: flex;
    flex: 0 0 20%;
    padding-right: 15px;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 576px) {
        padding-right: 0;
        padding-bottom: 15px;
        justify-content: flex-start;
    }
`;
export const EndWrapper = styled.div`
    display: flex;
    flex: 0 0 80%;

    @media (max-width: 576px) {
        flex-direction: column;
        div {
            padding-bottom: 10px;
        }
    }
`;

export const OptionWrapper = styled.div`
    display: flex;
    padding-left: 10px;

    div {
        padding-right: 10px;
    }
    div::last-child {
        padding-right: 0;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        padding-left: 0;

        div {
            padding-right: 0;
            padding-bottom: 10px;
        }
        div::last-child {
            padding-right: 0;
        }
    }
`;
