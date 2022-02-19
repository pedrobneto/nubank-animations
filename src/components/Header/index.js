import React from 'react'

import {
    Container,
    Top,
    Logo,
    Title,
    Arrow
} from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import logo from '../../assets/Nubank_Logo.png'
import colors from '../../../util/colors'

const Header = ({ translateY }) => {

    const rotate = translateY.interpolate({
        inputRange: [0, 380],
        outputRange: ['0deg', '180deg'],
        extrapolate: 'clamp'
    })

    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Pedro</Title>
            </Top>
            <Arrow style={{
                transform: [{ rotate: rotate }]
            }}>
                <MaterialIcons name="keyboard-arrow-down" size={20} color={colors.white} />
            </Arrow>
        </Container>
    )
}
export default Header