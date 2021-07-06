import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { range } from 'lodash';

import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import { MONTHS } from '../../../constants/index';
import translateLabel from '../../../utils/translateLabel';
import * as Styled from './styles';

const RepeatYearlyOn = ({
    id,
    mode,
    on,
    hasMoreModes,
    handleChange,
    translations
}) => {
    const daysInMonth = moment(on.month, 'MMM').daysInMonth();
    const isActive = mode === 'on';

    return (
        <Styled.OptionWrapper isActive={isActive}>
            <div>
                {hasMoreModes && (
                    <input
                        id={id}
                        type="radio"
                        name="repeat.yearly.mode"
                        aria-label="Repeat yearly on"
                        value="on"
                        checked={isActive}
                        onChange={handleChange}
                    />
                )}
            </div>

            <div>{translateLabel(translations, 'repeat.yearly.on')}</div>

            <div>
                <select
                    id={`${id}-month`}
                    name="repeat.yearly.on.month"
                    aria-label="Repeat yearly on month"
                    value={on.month}
                    disabled={!isActive}
                    onChange={handleChange}
                >
                    {MONTHS.map((month) => (
                        <option key={month} value={month}>
                            {translateLabel(
                                translations,
                                `months.${month.toLowerCase()}`
                            )}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <select
                    id={`${id}-day`}
                    name="repeat.yearly.on.day"
                    aria-label="Repeat yearly on a day"
                    value={on.day}
                    disabled={!isActive}
                    onChange={numericalFieldHandler(handleChange)}
                >
                    {range(0, daysInMonth).map((i) => (
                        <option key={i} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
            </div>
        </Styled.OptionWrapper>
    );
};
RepeatYearlyOn.propTypes = {
    id: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    on: PropTypes.shape({
        month: PropTypes.oneOf(MONTHS).isRequired,
        day: PropTypes.number.isRequired
    }).isRequired,
    hasMoreModes: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
        .isRequired
};

export default RepeatYearlyOn;
