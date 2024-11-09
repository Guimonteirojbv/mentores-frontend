import { FormikProvider, useFormik } from 'formik';
import { TabContainer } from '../styles';

import { FormFields } from './FormFields';
import { Container, Subtitle, Title } from './styles';

import { motivations } from '@/data/static-info';
import * as yup from 'yup';

const excludeSchema = yup.object({
  motivation: yup.string().oneOf(motivations).optional(),
  password: yup.string(),
});

export type ExcludeFormData = yup.InferType<typeof excludeSchema>;

export function ExcludeAccountTab() {
  const formik = useFormik<ExcludeFormData>({
    initialValues: {},
    validationSchema: excludeSchema,
    onSubmit: () => {},
    validateOnChange: true,
  });

  return (
    <TabContainer value="exclude-account">
      <Container>
        <Title>Exclusão de conta</Title>
        <Subtitle>
          Para deletar a conta, responda ao nosso formulário de satisfação
        </Subtitle>

        <FormikProvider value={formik}>
          <FormFields />
        </FormikProvider>
      </Container>
    </TabContainer>
  );
}
