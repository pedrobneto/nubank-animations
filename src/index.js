import React, { useRef } from 'react'
import { Animated, PanResponder } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
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

const MAX_CARD_SCROLL = 380

const MainScreen = (props) => {

    let offset = 0
    const translateY = useRef(new Animated.Value(0)).current

    const animatedEvent = Animated.event(
        [{ nativeEvent: { translationY: translateY } }],
        { useNativeDriver: true }
    )

    const onHandlerStateChange = ({ nativeEvent }) => {
        if (nativeEvent.oldState === State.ACTIVE) {
            let open = false
            const { translationY } = nativeEvent

            offset += translationY

            if (translationY >= 100) {
                open = true
            } else {
                translateY.setValue(offset)
                translateY.setOffset(0)
                offset = 0
            }

            Animated.timing(translateY, {
                toValue: open ? 380 : 0,
                duration: 200,
                useNativeDriver: true
            }).start(() => {
                offset = open ? 380 : 0
                translateY.setOffset(offset)
                translateY.setValue(0)
            })

        }
    }

    const cardY = translateY.interpolate({
        inputRange: [-200, 0, MAX_CARD_SCROLL],
        outputRange: [-25, 0, MAX_CARD_SCROLL],
        extrapolate: 'clamp'
    })

    return (
        <Container>
            <Header translateY={translateY} />
            <Content>
                <Menu translateY={translateY} />
                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChange}
                >
                    <Card style={{
                        transform: [{ translateY: cardY }]
                    }}>
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
                </PanGestureHandler>
            </Content>
            <Tabs translateY={translateY} />
        </Container>
    )
}
export default MainScreen