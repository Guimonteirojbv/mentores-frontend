import { Modal } from '@/components/atoms/Modal';

import styled, { css } from 'styled-components';



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

export const Container = styled.div`
    max-width: 37rem;
    margin-top: 32px;
`



export const TitleTab = styled.h2`
    font-size: ${props => props.theme.fontSizes.lg};
    margin-top: 32px;
`

export const info = styled.span`
    ${({theme}) => css`
        font-size: ${theme.fontSizes.xs};
        color: ${theme.colors.black[200]};
    `}

    font-weight: 400;
`
   


   


export const DescriptionTab = styled.p`
    ${({theme}) => css`
        color: ${theme.colors.gray[700]};
        font-size: ${theme.fontSizes.sm};
    `}
`

export const DisableInfoTab = styled.span`
    margin-left: 2px;
    span {
        color: ${({theme}) => theme.colors.blue[700]};
        margin-right: 2px;
    }
    display: block;
    margin-top: 20px;
    color: ${({theme}) => theme.colors.black[200]};;
`

export const FormContainer = styled.div`
    margin-top: 2rem;
`

export const DividerContent = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({theme}) => theme.colors.gray[600]};

    margin-top: 2rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    margin-top: 2rem;
`

export const CancelButton = styled.button<{disabled?: boolean}>`
    padding: 10px;
    color: ${props => props.disabled  ? props.theme.colors.gray[500] : props.theme.colors.blue[800]};
    background-color: transparent;
    
    font-weight: bold;

    border: none;

    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    
`

export const DisableButton = styled(CancelButton)`
    border: 2px solid ${props => props.disabled ? props.theme.colors.gray[500] : props.theme.colors.blue[800]};
    border-radius: 6px;
`

export const ModalContainer = styled(Modal.Content)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 50.125rem;
  width: 100%;
  border-radius: 1rem;
  padding: 2rem;

  button,
  a {
    width: max-content;
  }
`;
