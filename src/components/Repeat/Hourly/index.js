import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import translateLabel from '../../../utils/translateLabel';
import * as Styled from './styles';

const RepeatHourly = ({
    id,
    hourly: { interval },
    handleChange,
    translations
}) => (
    <Styled.Wrapper>
        <div>{translateLabel(translations, 'repeat.hourly.every')}</div>
        <div>
            <input
                id={`${id}-interval`}
                name="repeat.hourly.interval"
                aria-label="Repeat hourly interval"
                value={interval}
                onChange={numericalFieldHandler(handleChange)}
            />
        </div>
        <div>{translateLabel(translations, 'repeat.hourly.hours')}</div>
    </Styled.Wrapper>
);
RepeatHourly.propTypes = {
    id: PropTypes.string.isRequired,
    hourly: PropTypes.shape({
        interval: PropTypes.number.isRequired
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
        .isRequired
};

export default RepeatHourly;
