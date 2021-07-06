import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../utils/numericalFieldHandler';
import translateLabel from '../../utils/translateLabel';
import * as Styled from './styles';

const EndAfter = ({ id, after, handleChange, translations }) => (
    <Styled.OptionWrapper>
        <div>
            <input
                id={id}
                name="end.after"
                aria-label="End after"
                value={after}
                onChange={numericalFieldHandler(handleChange)}
            />
        </div>
        <div>{translateLabel(translations, 'end.executions')}</div>
    </Styled.OptionWrapper>
);

EndAfter.propTypes = {
    id: PropTypes.string.isRequired,
    after: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
        .isRequired
};

export default EndAfter;
