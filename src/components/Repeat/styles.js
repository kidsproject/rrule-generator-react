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
    align-items: flex-start;
    justify-content: flex-end;

    @media (max-width: 576px) {
        padding-right: 0;
        padding-bottom: 15px;
        justify-content: flex-start;
    }
`;
export const RepeatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 80%;
`;
export const FrequencyWrapper = styled.div`
    padding-bottom: 10px;
`;
