import Close from '@mui/icons-material/Close';
import { Modal } from '../Modal';
import {
  ButtonAction,
  ButtonActionsContainer,
  ButtonClose,
  Description,
  ModalContainer,
  TitleContainer,
  TitleModal,
} from './styles';

interface IModalDisableAccount {
  resetForm(): void;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalDiscarChanges({
  resetForm,
  setOpenModal,
  ...props
}: IModalDisableAccount) {
  return (
    <ModalContainer {...props}>
      <TitleContainer>
        <TitleModal>Você tem certeza que deseja fazer isso?</TitleModal>
        <Modal.Close asChild>
          <ButtonClose>
            <Close />
          </ButtonClose>
        </Modal.Close>
      </TitleContainer>

      <Description>
        Se você tiver mentorias abertas no Calendly, elas continuarão ativas.
        Para encerrá-las, será necessário suspendê-las manualmente.
      </Description>
      <Description>
        Verifique no <span>Calendly</span> se há mentorias que precisam ser
        suspensas.
      </Description>

      <ButtonActionsContainer>
        <ButtonAction
          variant="default"
          onClick={() => setOpenModal(state => !state)}
        >
          Cancelar
        </ButtonAction>
        <ButtonAction variant="blue" onClick={resetForm}>
          Desativar conta
        </ButtonAction>
      </ButtonActionsContainer>
    </ModalContainer>
  );
}
