import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    opacity: ${(props) => (!props.isActive ? 0.5 : null)};
    padding-bottom: 10px;

    div {
        padding-right: 10px;
    }
    div::last-child {
        padding-right: 0;
    }

    @media (max-width: 576px) {
        flex-direction: column;
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
`;
