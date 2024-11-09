import styled from 'styled-components'

export const Container = styled.div`
    max-width: 37rem;
    margin-top: 32px;
`


export const Title = styled.h2`
    font-weight: 600;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.black[200]};
    line-height: 28px;
`
export const Subtitle = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 22px;
    color: ${props => props.theme.colors.gray[700]};

`

