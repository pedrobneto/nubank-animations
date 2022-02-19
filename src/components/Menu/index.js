import React from 'react'
import QRCode from 'react-native-qrcode-svg'
import { MaterialIcons } from '@expo/vector-icons'

import colors from '../../../util/colors'
import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles'

const Menu = ({ translateY }) => {

    const menuOpacity = translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })

    return (
        <Container style={{
            opacity: menuOpacity
        }}>
            <Code>
                <QRCode
                    value="http://nubank.com"
                    size={80}
                    backgroundColor={colors.white}
                    color={colors.primary}
                />
            </Code>

            <Nav>
                <NavItem>
                    <MaterialIcons name='help-outline' size={20} color={colors.white} />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <MaterialIcons name='person-outline' size={20} color={colors.white} />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <MaterialIcons name='credit-card' size={20} color={colors.white} />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <MaterialIcons name='smartphone' size={20} color={colors.white} />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton>
                <SignOutButtonText>
                    Sair do app
                </SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}

export default Menu