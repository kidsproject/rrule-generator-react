import React from 'react';
import PropTypes from 'prop-types';
import StartOnDate from './OnDate';
import * as Styled from './styles';

import translateLabel from '../../utils/translateLabel';

const Start = ({ id, start: { onDate }, handleChange, translations }) => (
    <Styled.Wrapper>
        <Styled.LabelWrapper>
            <label htmlFor={id} className="col-form-label">
                <strong>{translateLabel(translations, 'start.label')}</strong>
            </label>
        </Styled.LabelWrapper>
        <StartOnDate
            id={id}
            onDate={onDate}
            handleChange={handleChange}
            translations={translations}
        />
    </Styled.Wrapper>
);

Start.propTypes = {
    id: PropTypes.string.isRequired,
    start: PropTypes.shape({
        onDate: PropTypes.object.isRequired
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
        .isRequired
};

export default Start;
