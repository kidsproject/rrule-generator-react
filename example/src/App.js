import React from 'react';

import RRuleGenerator from 'rrule-generator-react';
// import 'rrule-generator-react/dist/index.css'

const App = () => {
    return (
        <RRuleGenerator
            config={{ hideStart: false }}
            onChange={(rrule) => console.log(rrule)}
        />
    );
};

export default App;
