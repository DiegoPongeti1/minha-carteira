import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Styles/GlobalStyles';

import Layout from './Layout/Index';
import Dark from './Styles/Themes/Dark';

const App: React.FC =() => {
    return (
        <ThemeProvider theme={Dark}>
            <GlobalStyles />
            <Layout />
        </ThemeProvider>
    );
}

export default App;