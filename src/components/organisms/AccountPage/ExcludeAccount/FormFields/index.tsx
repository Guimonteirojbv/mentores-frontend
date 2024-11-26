import { RadioInput } from '@/components/atoms/Radio';
import { FieldsetTitle } from '@/components/atoms/Radio/styles';
import { Select } from '@/components/atoms/Select';
import { motivations } from '@/data/static-info';
import { useFormikContext } from 'formik';
import { ExcludeFormData } from '../index';
import {
  FieldSet,
  InputRadioMood,
  LabelInputMood,
  SelectInputContainer,
  SelectItemStyled,
  WrapperInputMood,
  WrapperInputPassword,
  WrapperMood,
  WrapperTextArea,
} from './styles';

import mood from '@/assets/satisfaction/mood.svg';
import moodBad from '@/assets/satisfaction/mood_bad.svg';
import dissatisfied from '@/assets/satisfaction/sentiment_dissatisfied.svg';
import extremelyDissatisfied from '@/assets/satisfaction/sentiment_extremely_dissatisfied.svg';
import neutral from '@/assets/satisfaction/sentiment_neutral.svg';
import sentiment_satisfied from '@/assets/satisfaction/sentiment_satisfied.svg';
import verySatisfied from '@/assets/satisfaction/sentiment_very_satisfied.svg';
import { InputForm } from '@/components/atoms/InputForm';

import { fadeIn } from '@/styles/animations';

export function FormFields() {
  const formik = useFormikContext<ExcludeFormData>();

  const options = [
    'Satisfatória',
    'Boa',
    'Normal',
    'Pouco Satisfatória',
    'Insatisfatória',
  ];

  const images = [
    extremelyDissatisfied.src,
    moodBad.src,
    dissatisfied.src,
    neutral.src,
    sentiment_satisfied.src,
    mood.src,
    verySatisfied.src,
  ];

  return (
    <>
      <SelectInputContainer>
        <span>
          O que o motivou a excluir sua conta na plataforma para mentores?
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

      {formik.values.motivation === 'Outro' && (
        <WrapperTextArea
          variants={fadeIn}
          animate={'animate'}
          initial={'initial'}
        >
          <InputForm
            type="textarea"
            label=""
            name="explanation"
            maxlength="600"
            isRequired={false}
            placeholder="Escreva seu motivo"
          />
          <span>
            {formik.values.description ? formik.values.description.length : 0}
            /600
          </span>
        </WrapperTextArea>
      )}

      <RadioInput
        options={options}
        label="Como você avaliaria a facilidade de uso da plataforma?"
        isRequired={true}
      />

      <FieldSet>
        <FieldsetTitle>
          Em uma escala de 1 a 7, o quão satisfeito você estava com a
          plataforma? <span className="asterisk">*</span>
        </FieldsetTitle>

        <WrapperMood>
          {images.map(image => (
            <WrapperInputMood>
              <LabelInputMood htmlFor="image">
                <img src={image} alt="" />
              </LabelInputMood>
              <InputRadioMood
                type="radio"
                name="satisfacao"
                id={image}
                value={image}
              />
            </WrapperInputMood>
          ))}
        </WrapperMood>
      </FieldSet>

      <WrapperTextArea>
        <InputForm
          type="textarea"
          label="Existe algo que você gostaria de compartilhar sobre sua experiência com a plataforma de mentores?"
          name="explanation"
          maxlength="600"
        />
        <span>0/600</span>
      </WrapperTextArea>

      <WrapperInputPassword>
        <InputForm
          type="input"
          label=""
          name="password"
          placeholder="Senha*"
          isRequired={false}
        />

        <span>Insira a senha para excluir sua conta</span>
      </WrapperInputPassword>
    </>
  );
}
