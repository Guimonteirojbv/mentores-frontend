import {
  Container,
  FieldsetTitle,
  InputRadio,
  Label,
  RadioWrapper,
} from './styles';

interface RadioInputProps {
  options: string[];
  label?: string;
  isRequired?: boolean;
  disabled?: boolean;
}

export function RadioInput({
  options,
  label,
  isRequired,
  disabled,
}: RadioInputProps) {
  return (
    <Container>
      <FieldsetTitle className={disabled ? 'disabled' : ''}>
        {label} {isRequired && <span className="asterisk">*</span>}
      </FieldsetTitle>
      {options.map(option => (
        <RadioWrapper>
          <InputRadio type="radio" id={option} value={option} name="opcao" />
          <Label htmlFor={option}>{option}</Label>
        </RadioWrapper>
      ))}
    </Container>
  );
}
