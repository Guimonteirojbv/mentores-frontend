import { motivations } from '@/data/static-info';
import * as yup from 'yup';
import { TabContainer } from '../styles';
import {
  ButtonbackAcction,
  ButtonContainer,
  CancelButton,
  Container,
  DescriptionTab,
  DisableButton,
  DisableInfoTab,
  DividerContent,
  FormContainer,
  TitleTab,
} from './styles';

import { Modal } from '@/components/atoms/Modal';
import ModalDisableAccount from '@/components/atoms/ModalDisableAccount';
import ModalDiscarChanges from '@/components/atoms/ModalDiscarChanges';
import { FormikProvider, useFormik } from 'formik';
import { ArrowLeft } from 'phosphor-react';
import React from 'react';
import { FormFields } from './FormFields/FormFields';

const desativationSchema = yup.object({
  motivation: yup.string().oneOf(motivations).optional(),
  password: yup.string(),
});

export type DesativationFormData = yup.InferType<typeof desativationSchema>;

interface IDisableAccountTab {
  handleChangeTab(value: string): void;
}
export function DisableAccountTab({ handleChangeTab }: IDisableAccountTab) {
  const [openModalDiscardChanges, setOpenModalDiscardChanges] =
    React.useState(false);
  const [openModalDisableAccount, setOpenModalDisableAccount] =
    React.useState(false);

  const formik = useFormik<DesativationFormData>({
    initialValues: {},
    validationSchema: desativationSchema,
    onSubmit: () => {},
    validateOnChange: true,
  });

  function handleOpenModalDiscardChanges() {
    setOpenModalDiscardChanges(true);
  }

  function handleOpenModalDisableAccount() {
    setOpenModalDisableAccount(true);
  }

  function handleClearForm() {
    formik.resetForm({ values: { password: '', motivation: '' } });
    setOpenModalDiscardChanges(false);
  }

  return (
    <TabContainer value="disable-account">
      <ButtonbackAcction onClick={() => handleChangeTab('account-management')}>
        <ArrowLeft size={24} weight="bold" />
        Voltar
      </ButtonbackAcction>
      <TitleTab>Desativação de Conta</TitleTab>

      <Modal.Root
        open={openModalDiscardChanges}
        onOpenChange={() => setOpenModalDiscardChanges(false)}
      >
        <ModalDiscarChanges
          resetForm={handleClearForm}
          setOpenModal={setOpenModalDiscardChanges}
        />
      </Modal.Root>

      <Modal.Root
        open={openModalDisableAccount}
        onOpenChange={() => setOpenModalDisableAccount(false)}
      >
        <ModalDisableAccount
          resetForm={handleClearForm}
          setOpenModal={setOpenModalDisableAccount}
        />
      </Modal.Root>

      <span>Para desativar a conta, responda à pergunta de satisfação</span>
      <Container>
        <DescriptionTab>
          Ao desativar sua conta ela será temporariamente suspensa, mantendo
          seus dados e permitindo reativação a qualquer momento.
        </DescriptionTab>

        <DisableInfoTab>
          <span>*</span>
          Indica um campo obrigatório
        </DisableInfoTab>

        <FormContainer>
          <FormikProvider value={formik}>
            <FormFields />
          </FormikProvider>
        </FormContainer>

        <DividerContent />

        <ButtonContainer>
          <CancelButton
            disabled={
              formik.values.motivation && formik.values.password ? false : true
            }
            onClick={handleOpenModalDiscardChanges}
          >
            Cancelar
          </CancelButton>
          <DisableButton
            disabled={
              formik.values.motivation && formik.values.password ? false : true
            }
            onClick={handleOpenModalDisableAccount}
          >
            Desativar conta
          </DisableButton>
        </ButtonContainer>
      </Container>
    </TabContainer>
  );
}
