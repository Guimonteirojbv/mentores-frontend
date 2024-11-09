import styled from 'styled-components';



export const Container = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 16px;

    border: none;
    margin-top: 24px;

`
export const FieldsetTitle = styled.legend`
  font-size: 1rem;
  line-height: 22px;
  color: ${props => props.theme.colors.black[200]};

  .asterisk {
    color: ${props => props.theme.colors.blue[700]};
  }

  &.disabled,
  &.disabled .asterisk {
    color: ${props => props.theme.colors.gray[600]};
  }
  margin-bottom: 16px;
`;


export const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    
`

export const InputRadio = styled.input`
    width: 16px;
    height: 16px;
`

export const Label = styled.label`
    font-weight: 400;
    font-size: 0.87rem;
    line-height: 16px;
`


