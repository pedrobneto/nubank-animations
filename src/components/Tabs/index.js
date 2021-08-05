import React from 'react'

import {
    Container,
    TabsContainer,
    Tab,
    Icon,
    Text
} from './styles'

import { MaterialIcons } from '@expo/vector-icons'
import colors from '../../../util/colors'

const Tabs = (props) => {
    return (
        <Container>
            <TabsContainer>
                <Tab>
                    <MaterialIcons name='person-add' size={24} color={colors.white} />
                    <Text>Indicar amigos</Text>
                </Tab>
                <Tab>
                    <MaterialIcons name='chat-bubble-outline' size={24} color={colors.white} />
                    <Text>Cobrar</Text>
                </Tab>
                <Tab>
                    <MaterialIcons name='arrow-downward' size={24} color={colors.white} />
                    <Text>Depositar</Text>
                </Tab>
                <Tab>
                    <MaterialIcons name='arrow-upward' size={24} color={colors.white} />
                    <Text>Transferir</Text>
                </Tab>
                <Tab>
                    <MaterialIcons name='block' size={24} color={colors.white} />
                    <Text>Bloquear cartão</Text>
                </Tab>
            </TabsContainer>
        </Container>
    )
}
export default Tabs