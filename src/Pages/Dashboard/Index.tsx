import React from 'react';

import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/Selectinput';

import { Container } from './styles'


const Dashboard: React.FC = () => {

    const options = [
        {value: 'Diego', label: "Diego"},
        {value: 'Joao', label: "Joao"},
        {value: 'Mariana', label: "Mariana"}
    ]

    return (
        <Container> 
            <ContentHeader title = "Dashboard" lineColor = "#f7931b">
               <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;