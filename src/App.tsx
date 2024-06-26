import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Styles/GlobalStyles';

import Layout from './Layout/Index';
import Dashboard from './Pages/Dashboard/Index';
//import List from './Pages/List/Index';
import Dark from './Styles/Themes/Dark';

const App: React.FC =() => {
    return (
        <ThemeProvider theme={Dark}>
            <GlobalStyles />
            {/* <Layout>
                <List/>
            </Layout> */}
        </ThemeProvider>
    );
}

export default App;