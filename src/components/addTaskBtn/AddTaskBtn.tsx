"use client";
import "./styles.scss";
import { useModalContext } from "@/context/modal-provider";

const AddTaskBtn = () => {
  const { callAddModal, setCallAddModal } = useModalContext();

  return (
    <button
      type="button"
      className="add-task-btn"
      onClick={(): void => setCallAddModal(!callAddModal)}
    >
      Adicionar tarefa
    </button>
  );
};

export default AddTaskBtn;
