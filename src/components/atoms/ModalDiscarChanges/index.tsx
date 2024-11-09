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

interface IModalDiscardChanges {
  resetForm(): void;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalDiscarChanges({
  resetForm,
  setOpenModal,
  ...props
}: IModalDiscardChanges) {
  return (
    <ModalContainer {...props}>
      <TitleContainer>
        <TitleModal>Deseja descartar as alterações?</TitleModal>
        <Modal.Close asChild>
          <ButtonClose>
            <Close />
          </ButtonClose>
        </Modal.Close>
      </TitleContainer>

      <Description>As informações inseridas não serão salvas.</Description>

      <ButtonActionsContainer>
        <ButtonAction
          variant="default"
          onClick={() => setOpenModal(state => !state)}
        >
          Cancelar
        </ButtonAction>
        <ButtonAction variant="blue" onClick={resetForm}>
          Descartar
        </ButtonAction>
      </ButtonActionsContainer>
    </ModalContainer>
  );
}
