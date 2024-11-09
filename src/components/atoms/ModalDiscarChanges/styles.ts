import styled from 'styled-components';
import { Modal } from '../Modal';

export const ModalContainer = styled(Modal.Content)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 30.125rem;
  width: 50%;
  border-radius: 1rem;
  padding: 2rem;

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
    color: black;
    
`

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;



export const Description = styled.span`
  font-size: 14px;
  color: #666666;
  line-height: 16.8px;
  text-align: center;

`;

export const ButtonActionsContainer = styled.div`
  width: 100%;
  display: flex;
  
  gap: 1.2rem;

  
`

export const ButtonAction = styled.button<{variant: 'default' | 'blue'}>`
  border: ${props => props.variant === 'default' ? `2px solid ${props.theme.colors.gray[600]}` : 'none'};
  color: ${props => props.variant === 'default' ? props.theme.colors.gray[700] : props.theme.colors.white};

  padding: 10px;
  background: ${props => props.variant === 'default' ? 'transparent': props.theme.colors.blue[800]};
  border-radius: 6px;
  
  flex-grow: 1;

`

export const ButtonClose = styled.button`
  all: unset;
  color: #cbcbcb;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  position: absolute;
  top: 5px;
  right: 5px;


  svg {
    width: 100%;
    height: 100%;
  }
`;
