import styled, { css } from 'styled-components';
import { Modal } from '../Modal';

export const ModalContainer = styled(Modal.Content)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 25.125rem;
  width: 60%;
  border-radius: 1rem;
  padding: 1rem;

  position: relative;

  button,
  a {
    width: max-content;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  
`;

export const TitleModal = styled.h3`
${({theme}) => css`

color: ${theme.colors.black[200]};
font-size: ${theme.fontSizes.md};
`}
    
    text-align: center;
    max-width: 12.875rem;
    line-height: 1.25rem;
    font-weight: 500;
   
`

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;



export const Description = styled.span`
    ${({theme}) => css`
        font-size: ${theme.fontSizes.xs};
        color: ${theme.colors.black[200]};
    `}

  font-size: 14px;
  
  line-height: 1.05rem;
  text-align: center;

  span {
    color: ${({theme}) => theme.colors.blue[800]};
    text-decoration: underline;
  }
`;

export const ButtonActionsContainer = styled.div`
  width: 100%;
  display: flex;
  
  gap: 1.2rem;

  
`

export const ButtonAction = styled.button<{variant: 'default' | 'blue'}>`
  ${({theme, variant}) => css`
    border: ${variant === 'default' ? `2px solid ${theme.colors.gray[700]}` : 'none'};
    color: ${variant === 'default' ? theme.colors.gray[700] : theme.colors.white};
  `}
  
 

  padding: 10px;
  background: ${props => props.variant === 'default' ? 'transparent': props.theme.colors.blue[800]};
  border-radius: 6px;
  
  flex-grow: 1;

  min-width: 11rem;

  font-weight: 500;
  font-size: 1rem;
  
`

export const ButtonClose = styled.button`
  all: unset;
  color: ${({theme}) => theme.colors.black[200]};
  width: 1rem;
  height: 1rem;
  cursor: pointer;

  position: absolute;
  top: 18px;
  right: 18px;


  svg {
    width: 100%;
    height: 100%;
  }
`;
