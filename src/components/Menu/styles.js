import { Animated } from 'react-native'
import { StyleSheet } from 'react-native'
import styled from 'styled-components'

export const Container = styled(Animated.ScrollView).attrs({
    contentContainerStyle: { alignItems: 'center' }
})`
    margin: 0 30px;
`

export const Code = styled.View`
    background: #FFF;
    padding: 10px;
`

export const Nav = styled.View`
    margin-top: 30px;
    align-self: stretch;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255, 255, 255, 0.8);
`
export const NavItem = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255, 255, 255, 0.8);
`

export const NavText = styled.Text`
    font-size: 15px;
    color: #FFF;
    margin-left: 15px;
`

export const SignOutButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    align-self: stretch;
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    margin-top: 15px;
    padding: 12px;
`

export const SignOutButtonText = styled.Text`
    font-size: 13px;
    color: #FFF;
    font-weight: bold;
`