import styled from 'styled-components'


export const AcctionAccountButton = styled.button`
   padding: 10px;
    color: ${props => props.disabled  ? props.theme.colors.gray[500] : props.theme.colors.blue[800]};
    background-color: transparent;
    
    font-weight: bold;

    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    border: 2px solid ${props => props.disabled ? props.theme.colors.gray[500] : props.theme.colors.blue[800]};
    border-radius: 6px;
`