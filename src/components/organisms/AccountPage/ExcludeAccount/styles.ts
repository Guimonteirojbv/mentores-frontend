import styled, { css } from 'styled-components'
import { ButtonContainer, DisableInfoTab } from '../DisableAccountTab/styles'

export const Container = styled.div`
    max-width: 37rem;
    margin-top: 23px;
`


export const Title = styled.h2`
    font-weight: 600;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.black[200]};
    line-height: 28px;
`
export const Subtitle = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 22px;
    color: ${props => props.theme.colors.gray[700]};
    margin-top: 8px;
`
export const WrapperInformation = styled.div`
    margin-top: 24px;

`

export const Information = styled.p`
    font-size: 1rem;
    line-height: 22.4px;
    font-weight: 400;
    color: ${props => props.theme.colors.gray[700]};
`

export const ExcludeInfoTab = styled(DisableInfoTab)`
    margin-bottom: 24px;
`

export const ButtonContainerActions = styled(ButtonContainer)``

export const ButtonbackAcction = styled.a`
    ${({theme}) => css`
        color: ${theme.colors.blue[800]};
        font-size: ${theme.fontSizes.sm};
    `}
    display: flex;
    max-width:5rem;
    padding: 5px;

    gap: 8px;
    align-items: center;


    line-height: 19.2px;
    font-weight: 500;

    margin-top: 16px;
`
