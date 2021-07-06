import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import translateLabel from '../../../utils/translateLabel';
import * as Styled from './styles';

const RepeatDaily = ({
    id,
    daily: { interval },
    handleChange,
    translations
}) => (
    <Styled.Wrapper>
        <div>{translateLabel(translations, 'repeat.daily.every')}</div>
        <div>
            <input
                id={`${id}-interval`}
                name="repeat.daily.interval"
                aria-label="Repeat daily interval"
                value={interval}
                onChange={numericalFieldHandler(handleChange)}
            />
        </div>
        <div>{translateLabel(translations, 'repeat.daily.days')}</div>
    </Styled.Wrapper>
);
RepeatDaily.propTypes = {
    id: PropTypes.string.isRequired,
    daily: PropTypes.shape({
        interval: PropTypes.number.isRequired
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
        .isRequired
};

export default RepeatDaily;
