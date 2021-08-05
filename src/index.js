import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import Header from './components/Header'
import Tabs from './components/Tabs'
import Menu from './components/Menu'
import colors from '../util/colors'

import {
    Container,
    Annotation,
    Card,
    CardContent,
    CardFooter,
    Saldo,
    SaldoTitle,
    CardHeader,
    Content
} from './styles'

const MainScreen = (props) => {
    return (
        <Container>
            <Header />
            <Content>
                <Menu />
                <Card>
                    <CardHeader>
                        <MaterialIcons name='attach-money' size={24} color='#666' />
                        <MaterialIcons name='visibility-off' size={24} color='#666' />
                    </CardHeader>
                    <CardContent>
                        <SaldoTitle>Saldo disponível</SaldoTitle>
                        <Saldo>R$ 7.611,32</Saldo>
                    </CardContent>
                    <CardFooter>
                        <Annotation>Transferência de R$6,00 recebida de Pedro há 25 minutos</Annotation>
                    </CardFooter>
                </Card>
            </Content>
            <Tabs />
        </Container>
    )
}
export default MainScreen