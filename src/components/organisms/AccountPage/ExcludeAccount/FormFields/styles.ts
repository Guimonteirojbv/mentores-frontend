import { InputForm } from '@/components/atoms/InputForm';
import { Container, Label } from '@/components/atoms/Radio/styles';
import { SelectItem } from '@/components/atoms/Select/SelectItem';
import styled from 'styled-components';

import { motion } from 'framer-motion';





export const SelectInputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;

  span {
    color: ${props => props.theme.colors.black[200]};
    font-size: ${props => props.theme.fontSizes.sm};
    line-height: 120%;

    .asterisk {
      color: ${props => props.theme.colors.blue[700]};
    }
  }

  .select-trigger {
    padding: 0.75rem 1rem;
    line-height: 1.5rem;
    font-size: 1rem;
  }


`;

export const SelectItemStyled = styled(SelectItem)<{isLast: boolean}>`

  margin: 0 !important;
 
  width: 100%;
  text-align: left;
  border-radius: 0;
  color: ${({theme}) => theme.colors.black[200]};

`;


export const InputFormVariant = styled(InputForm) `
    label {
        font-size: 1rem;
    }
 
 `
export const FieldSet = styled(Container)``

export const WrapperMood = styled.div`
  display: flex;
  justify-content: space-around;
`

export const LabelInputMood = styled(Label)`
  img {
    width: 20px;
    height: 20px;
  }

`


export const WrapperInputMood = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const InputRadioMood = styled.input`
  width: 16px;
  height: 16px;

`
    
export const WrapperTextArea = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: self-end;
  gap: 4px;

  margin-top: 16px;
  span {
    font-size: 0.875rem;
    font-weight: 400;
  }

`
export const WrapperInputPassword = styled(WrapperTextArea) `
  margin-top: 32px;
  align-items: self-start;

  padding-bottom: 32px;

  border-bottom: 1px solid ;
  border-color: ${props => props.theme.colors.gray[700]};
  span {
    font-weight: 500;
    font-size: 0.75rem;
  }
`

export const InputFormStyledLabel = styled(InputForm) `

  label { 
    font-size: 1rem;
    line-height: 22.4px;
    font-weight: 400;
    color: ${props => props.theme.colors.black[200]};
  }
`


