import { FormikProvider, useFormik } from 'formik';
import { TabContainer } from '../styles';

import { FormFields } from './FormFields';
import {
  ButtonbackAcction,
  ButtonContainerActions,
  Container,
  ExcludeInfoTab,
  Information,
  Subtitle,
  Title,
  WrapperInformation,
} from './styles';

import { ButtonAcctionAccount } from '@/components/atoms/ActionAccount';
import { ButtonCancel } from '@/components/atoms/CancelButton';
import { motivations } from '@/data/static-info';
import * as yup from 'yup';

import { Modal } from '@/components/atoms/Modal';
import ModalDiscarChanges from '@/components/atoms/ModalDiscarChanges';
import { ArrowLeft } from 'phosphor-react';
import React from 'react';

const excludeSchema = yup.object({
  motivation: yup.string().oneOf(motivations).optional(),
  description: yup.string().nullable(),
  password: yup.string(),
});

export type ExcludeFormData = yup.InferType<typeof excludeSchema>;

interface IExcludeAccountTab {
  handleChangeTab(value: string): void;
}

export function ExcludeAccountTab({ handleChangeTab }: IExcludeAccountTab) {
  const [openModalDiscardChanges, setOpenModalDiscardChanges] =
    React.useState(false);
  const [openModalDisableAccount, setOpenModalDisableAccount] =
    React.useState(false);

  const formik = useFormik<ExcludeFormData>({
    initialValues: {},
    validationSchema: excludeSchema,
    onSubmit: () => {},
    validateOnChange: true,
  });

  function handleOpenModalDiscardChanges() {
    setOpenModalDiscardChanges(true);
  }

  function handleOpenModalExcludeAccount() {
    setOpenModalDisableAccount(true);
  }

  function handleClearForm() {
    formik.resetForm({
      values: { description: '', motivation: '', password: '' },
    });
    setOpenModalDiscardChanges(false);
  }

  return (
    <TabContainer value="exclude-account">
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
        {/* fazer modal de exclusao de conta */}

        <openModalDisableAccount
          // resetForm={handleClearForm}
          setOpenModal={setOpenModalDisableAccount}
        />
      </Modal.Root>

      <ButtonbackAcction onClick={() => handleChangeTab('account-management')}>
        <ArrowLeft size={24} weight="bold" />
        Voltar
      </ButtonbackAcction>
      <Container>
        <Title>Exclusão de conta</Title>
        <Subtitle>
          Para deletar a conta, responda ao nosso formulário de satisfação
        </Subtitle>

        <WrapperInformation>
          <Information>
            Ao excluir sua conta, seu perfil não ficará visível para
            agendamentos.
          </Information>

          <Information>
            Você terá 30 dias para reconsiderar antes da exclusão definitiva.
          </Information>

          <Information>
            Caso deseje reativar seu perfil, faça o login antes dos 30 dias.
          </Information>
        </WrapperInformation>

        <ExcludeInfoTab>
          <span>*</span>
          Indica um campo obrigatório
        </ExcludeInfoTab>

        <FormikProvider value={formik}>
          <FormFields />
        </FormikProvider>

        <ButtonContainerActions>
          <ButtonCancel
            disabled={
              formik.values.motivation && formik.values.password ? false : true
            }
            onClick={handleOpenModalDiscardChanges}
          >
            Cancelar
          </ButtonCancel>
          <ButtonAcctionAccount
            disabled={
              formik.values.motivation && formik.values.password ? false : true
            }
            onClick={handleOpenModalExcludeAccount}
          >
            Excluir conta
          </ButtonAcctionAccount>
        </ButtonContainerActions>
      </Container>
    </TabContainer>
  );
}
