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

export const WrapperInput = styled.div`
  position: relative;
  margin-bottom: 20px;

  label {
    span:first-child {
      color: ${props => props.theme.colors.black[200]};

      .asterisk {
        color: ${props => props.theme.colors.blue[700]};
      }
    }

    input {
      font-size: 1rem;
      padding-right: 2rem;
    }
  }

  // Eye visibility
  button {
    right: 1rem;
    top: 1.3rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
