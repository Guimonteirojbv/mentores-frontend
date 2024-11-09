import { InputForm } from '@/components/atoms/InputForm';
import { Container } from '@/components/atoms/Radio/styles';
import { SelectItem } from '@/components/atoms/Select/SelectItem';
import styled from 'styled-components';



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
export const FieldSet = styled(Container)`


`
    



