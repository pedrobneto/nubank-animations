import styled from 'styled-components/native'
import colors from '../util/colors'

export const Container = styled.View`
    flex: 1;
    background: ${colors.primary};
    justify-content: center;
`

export const Content = styled.View`
    flex: 1;
    max-height: 400px;
    z-index: 5;
`

export const Card = styled.View`
    background: #FFF;
    border-radius: 4px;
    margin: 0 20px;
    overflow: hidden;
    height: 100% ;
    position: absolute;
    left: 0;
    right: 0;
    top: 380px;
`

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
`

export const CardContent = styled.View`
    flex: 1;
    justify-content: center;
    padding: 30px;
`

export const SaldoTitle = styled.Text`
    color: #999;
    font-size: 13px;
`

export const Saldo = styled.Text`
    font-size: 32px;
    margin-top: 3px;
    color: #333;
`

export const CardFooter = styled.View`
    height: 100px;
    background: #eee;
    padding: 30px;
    justify-content: center;
`

export const Annotation = styled.Text`
    font-size: 12px;
    color: #333;
`