import { Eye } from '@/components/atoms/Eye';
import { InputForm } from '@/components/atoms/InputForm';
import { Select } from '@/components/atoms/Select';
import { motivations } from '@/data/static-info';
import { useFormikContext } from 'formik';
import { useState } from 'react';
import { DesativationFormData } from '../index';
import { SelectInputContainer, SelectItemStyled, WrapperInput } from './styles';

export function FormFields() {
  const [isPassword, setIsPassword] = useState({
    current: false,
    new: false,
    confirmNew: false,
  });

  function handlePasswordVisible(pressed: boolean, name: string) {
    setIsPassword(state => ({ ...state, [name]: pressed }));
  }

  const formik = useFormikContext<DesativationFormData>();

  return (
    <>
      <SelectInputContainer>
        <span>
          O que o motivou a desativar sua conta na plataforma para mentores?
          <span className="asterisk">*</span>
        </span>
        <Select
          placeholder=""
          value={formik.values.motivation ?? ''}
          onValueChange={value => formik.setFieldValue('motivation', value)}
        >
          {motivations.map((motivation, index) => (
            <SelectItemStyled
              key={motivation}
              value={motivation}
              isLast={index === motivations.length - 1}
            >
              {motivation}
            </SelectItemStyled>
          ))}
        </Select>
      </SelectInputContainer>

      <WrapperInput>
        {formik.values.motivation === 'Outro' && (
          <InputForm
            type="textarea"
            inputType={isPassword.current ? 'text' : 'password'}
            name="password"
            placeholder="*******"
            label=""
          />
        )}
      </WrapperInput>

      <WrapperInput>
        <InputForm
          type="input"
          inputType={isPassword.current ? 'text' : 'password'}
          name="password"
          placeholder="Senha*"
          isRequired={false}
          label=""
        />

        <Eye
          aria-label="Mostrar senha"
          pressed={isPassword.current}
          onPressedChange={pressed => handlePasswordVisible(pressed, 'current')}
        />
      </WrapperInput>
    </>
  );
}
