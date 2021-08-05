import React from 'react'

import {
    Container,
    Top,
    Logo,
    Title
} from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import logo from '../../assets/Nubank_Logo.png'
import colors from '../../../util/colors'

const Header = (props) => {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Pedro</Title>
            </Top>
            <MaterialIcons name="keyboard-arrow-down" size={20} color={colors.white} />
        </Container>
    )
}
export default Header