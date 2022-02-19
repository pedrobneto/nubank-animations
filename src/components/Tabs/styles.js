import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(Animated.View)`
    height: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
`
export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {
        paddingLeft: 10,
        paddingRight: 20,
    },
    showsHorizontalScrollIndicator: false
})``

export const Tab = styled.TouchableOpacity`
    height: 100px;
    width: 100px;
    justify-content: space-between;
    padding: 10px;
    margin-left: 10px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.2);
`

export const Icon = styled.View`
`

export const Text = styled.Text`
    color: #FFF;
    font-size: 13px;
`