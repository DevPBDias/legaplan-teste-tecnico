"use client";
import { useModalContext } from "@/context/modal-provider";
import "./styles.scss";
import { useTaskContext } from "@/context/task-provider";

const DeleteTaskModal = () => {
  const { callDeleteModal, setCallDeleteModal } = useModalContext();
  const { taskToDelete, deleteTasks, removeStorage, tasks, deleteDoneTasks } =
    useTaskContext();

  const handleClick = () => {
    const findInTasks = tasks.find((item) => item === taskToDelete);

    if (findInTasks) {
      deleteTasks(taskToDelete);
      removeStorage("tasks", taskToDelete);
      setCallDeleteModal(!callDeleteModal);
    } else {
      deleteDoneTasks(taskToDelete);
      removeStorage("doneTasks", taskToDelete);
      setCallDeleteModal(!callDeleteModal);
    }
  };

  return (
    <main className="modal-container">
      <section className="modal-content">
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
    </main>
  );
};

export default DeleteTaskModal;
