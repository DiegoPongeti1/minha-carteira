import React, {useMemo} from 'react';

import Toggle from '../Components/Toggle';
import emojis from '../utils/emojis';

import { Container, Profile, Welcome, UserName} from './Styles';

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    },[]);
    return (
        <Container>
            <Toggle />

             <Profile>
                <Welcome> Olá, {emoji}</Welcome>
                <UserName>Diego Pongeti</UserName>
             </Profile>
        </Container>
    );
}

export default MainHeader;