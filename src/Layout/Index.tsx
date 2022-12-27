import React from 'react';

import { Grid } from './Styles';

import MainHeader from '../MainHeader/Index'
import Aside from '../Components/Aside/Index';
import Content from '../Content/Index';


interface ChildrenProps {
	children: React.ReactNode;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <Grid>
             <MainHeader />
             <Aside />
             <Content>
                { children }
            </Content>
        </Grid>
    );
}

export default Layout;