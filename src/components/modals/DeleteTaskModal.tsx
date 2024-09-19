"use client";
import { useModalContext } from "@/context/modal-provider";
import "./styles.scss";

const DeleteTaskModal = () => {
  const { callDeleteModal, setCallDeleteModal } = useModalContext();

  const handleClick = () => {
    console.log("clickou");
  };

  return (
    <section className="modal-container">
      <h3>Deletar tarefa</h3>
      <p className="subtitle-modal">
        Tem certeza que você deseja deletar essa tarefa?
      </p>
      <div className="btns-container">
        <button
          type="button"
          onClick={() => setCallDeleteModal(!callDeleteModal)}
        >
          Cancelar
        </button>
        <button className="delete-btn" type="button" onClick={handleClick}>
          Deletar
        </button>
      </div>
    </section>
  );
};

export default DeleteTaskModal;
