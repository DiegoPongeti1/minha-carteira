import React from 'react';

import { Grid } from './Styles';

import MainHeader from '../MainHeader/Index'
import Aside from '../Components/Aside/Index';
import Content from '../Content/Index';

const Layout: React.FC = () => {
    return (
        <Grid>
             <MainHeader />
             <Aside />
             <Content />
        </Grid>
    );
}

export default Layout;