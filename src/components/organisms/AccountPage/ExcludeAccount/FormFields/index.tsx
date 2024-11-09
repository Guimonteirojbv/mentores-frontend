import { RadioInput } from '@/components/atoms/Radio';
import { FieldsetTitle } from '@/components/atoms/Radio/styles';
import { Select } from '@/components/atoms/Select';
import { motivations } from '@/data/static-info';
import { useFormikContext } from 'formik';
import { ExcludeFormData } from '../index';
import { FieldSet, SelectInputContainer, SelectItemStyled } from './styles';

import mood from '@/assets/satisfaction/mood.svg';
import moodBad from '@/assets/satisfaction/mood_bad.svg';
import dissatisfied from '@/assets/satisfaction/sentiment_dissatisfied.svg';
import extremelyDissatisfied from '@/assets/satisfaction/sentiment_extremely_dissatisfied.svg';
import neutral from '@/assets/satisfaction/sentiment_neutral.svg';
import sentiment_satisfied from '@/assets/satisfaction/sentiment_satisfied.svg';
import verySatisfied from '@/assets/satisfaction/sentiment_very_satisfied.svg';

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
    mood.src,
    moodBad.src,
    dissatisfied.src,
    extremelyDissatisfied.src,
    neutral.src,
    sentiment_satisfied.src,
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

      <RadioInput
        options={options}
        label="Como você avaliaria a facilidade de uso da plataforma?"
        isRequired={true}
      />

      <FieldSet>
        <FieldsetTitle>
          Em uma escala de 1 a 7, o quão satisfeito você estava com a
          plataforma? *
        </FieldsetTitle>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {images.map(image => (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label for="image">
                <img src={image} alt="" />
              </label>
              <input type="radio" />
            </div>
          ))}
        </div>
      </FieldSet>
    </>
  );
}
