import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';

import Dashboard from './Pages/Dashboard/Index';

const App: React.FC =() => {
    return (
        <>
            <GlobalStyles />
            <Dashboard />
        </>
    );
}

export default App;