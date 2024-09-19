"use client";
import { useModalContext } from "@/context/modal-provider";
import "./styles.scss";

const AddTaskModal = () => {
  const { callAddModal, setCallAddModal } = useModalContext();

  const handleClick = () => {
    console.log("clickou");
  };

  return (
    <section className="modal-container">
      <h3>Nova tarefa</h3>
      <fieldset>
        <label htmlFor="title">Título</label>
        <input type="text" name="" id="title" placeholder="Digite" />
      </fieldset>
      <div>
        <button type="button" onClick={() => setCallAddModal(!callAddModal)}>
          Cancelar
        </button>
        <button className="add-btn" type="button" onClick={handleClick}>
          Adicionar
        </button>
      </div>
    </section>
  );
};

export default AddTaskModal;
