import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const IntervalWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 10px;
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
            padding-bottom: 10px;
        }
        div::last-child {
            padding-bottom: 0;
        }
    }
`;
export const ByDayWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
export const DayLabel = styled.label`
    padding: 0 10px;

    @media (max-width: 576px) {
        padding: 10px;
        flex: 0 0 calc(25% - 20px);
    }
`;
