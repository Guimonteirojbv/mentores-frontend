import styled from "styled-components"

export const CancelButton = styled.button<{disabled?: boolean}>`
    padding: 10px;
    color: ${props => props.disabled  ? props.theme.colors.gray[500] : props.theme.colors.blue[800]};
    background-color: transparent;
    
    font-weight: bold;

    border: none;

    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    
`