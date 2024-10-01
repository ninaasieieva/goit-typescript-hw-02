import Modal from "react-modal";
import css from "../ImageModal/ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({
  dataForModal,
  onCloseModal,
  modalIsOpen,
}) {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      dataForModal={dataForModal}
    >
      <img src={dataForModal.src} alt={dataForModal.alt} />
    </Modal>
  );
}