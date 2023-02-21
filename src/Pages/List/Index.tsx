import React from 'react';

import ContentHeader from '../../Components/ContentHeader';
import Selectinput from '../../Components/Selectinput';

import { TitleContainer } from '../../Components/ContentHeader/styles';

import { Container } from './styles'

const List: React.FC = () => {
    return (
    <Container>
        <ContentHeader title = "Dashboard" lineColor = "#f7931b">
            <SelectInput options={options} />
        </ContentHeader>
    </ Container > 
    );
}

export default List;