import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import translateLabel from '../../../utils/translateLabel';
import * as Styled from './styles';

const RepeatMonthlyOn = ({
    id,
    mode,
    on,
    hasMoreModes,
    handleChange,
    translations
}) => {
    const isActive = mode === 'on';

    return (
        <Styled.OptionWrapper isActive={isActive}>
            <div>
                {hasMoreModes && (
                    <input
                        id={id}
                        type="radio"
                        name="repeat.monthly.mode"
                        aria-label="Repeat monthly on"
                        value="on"
                        checked={isActive}
                        onChange={handleChange}
                    />
                )}
            </div>
            <div>{translateLabel(translations, 'repeat.monthly.on_day')}</div>

            <div>
                <select
                    id={`${id}-day`}
                    name="repeat.monthly.on.day"
                    aria-label="Repeat monthly on a day"
                    value={on.day}
                    disabled={!isActive}
                    onChange={numericalFieldHandler(handleChange)}
                >
                    {[...new Array(31)].map((day, i) => (
                        <option key={i} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
            </div>
        </Styled.OptionWrapper>
    );
};
RepeatMonthlyOn.propTypes = {
    id: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    on: PropTypes.shape({
        day: PropTypes.number.isRequired
    }).isRequired,
    hasMoreModes: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
        .isRequired
};

export default RepeatMonthlyOn;
