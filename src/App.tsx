import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';

import Layout from './Layout/Index';

const App: React.FC =() => {
    return (
        <>
            <GlobalStyles />
            <Layout />
        </>
    );
}

export default App;