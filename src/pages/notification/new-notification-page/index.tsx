// Components
import { useState } from "react"
import BackToPageButton from "../../../components/buttons/back-to-page-button"
import LargeButton from "../../../components/buttons/large-button"
import MidButton from "../../../components/buttons/mid-button"
import WhiteBackground from "../../../components/extras-components/white-background"
import Input from "../../../components/inputs/input"
import TextArea from "../../../components/inputs/text-area"
import Modal from "../../../components/modals/modal"
import ConfirmationPopUp from "../../../components/modals/saved-notification"
import { ContentTitle } from "../../dashboard/style"

//Style
import * as S from './style'

// --- 

const NewNotificationPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [notificOpen, setNotificOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openNotification = () => {
    setNotificOpen(true);
  };

  const closeNotification = () => {
    setNotificOpen(false);
  };

  const closeModalAndNotification = () => {
    closeNotification();
    closeModal();
  };

  return (
    <>
    <S.ContentWrapper>
      <BackToPageButton link="/notificacoes" name="Nova notificação" />
      <WhiteBackground>
        <ContentTitle title="Dados da notificação" />
        <S.InputWrapper>
          <Input id="notification-title" placeholder="Insira o assunto da sua mensagem." label="Título" width="large" />
          <Input id="notification-date" placeholder="Insira a data de envio." label="Data de envio" width="large" />
        </S.InputWrapper>
        <S.InputWrapper>
          <TextArea id="message" label="Mensagem" width="large" placeholder="Insira a sua mensagem aqui."/>
        </S.InputWrapper>
        <S.InputWrapper>
          <LargeButton name="Salvar" type="submit" variant="DEFAULT" onClick={() => openModal()} />
        </S.InputWrapper>
      </WhiteBackground>

          {modalOpen && (
            <Modal onClose={closeModal}>
                <ContentTitle title="Confirme os dados da notificação" />
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <div onClick={() => closeModal()} style={{cursor: 'pointer'}}>&times;</div>
                  <div>Destinatário: <b>CONTRATANTE</b></div>
                </div>
                  <S.InputWrapper>
                    <Input id="notification-title" placeholder="" label="Título" width="large" />
                    <Input id="notification-date" placeholder="" label="Data de envio" width="large" />
                  </S.InputWrapper>
                  <S.InputWrapper>
                    <TextArea id="message" label="Mensagem" width="large" placeholder=""/>
                  </S.InputWrapper>
                  <S.ButtonsWrapper>
                    <S.Warning>
                      Esse procedimento <b>não pode ser desfeito.</b>
                    </S.Warning>
                    <MidButton name="Cancelar" variant="CANCEL" showIcon={false} />
                    <LargeButton
                      name="Confirmar e enviar notificação"
                      type="submit"
                      variant="DEFAULT"
                      onClick={() => {
                        setTimeout(() => openNotification(), 1000); 
                      }}
                    />
                    {notificOpen &&  <ConfirmationPopUp message="Notificação salva com sucesso!" onClose={closeModalAndNotification} />}
                  </S.ButtonsWrapper>
            </Modal>
          )}
    </S.ContentWrapper>
    </>
  )
}

export default NewNotificationPage
