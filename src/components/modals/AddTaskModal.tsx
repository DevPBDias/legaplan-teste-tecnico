"use client";
import { useModalContext } from "@/context/modal-provider";
import "./styles.scss";
import { useState } from "react";
import { useTaskContext } from "@/context/task-provider";

const AddTaskModal = () => {
  const { callAddModal, setCallAddModal } = useModalContext();
  const { addNewTasks, addStorage } = useTaskContext();
  const [task, setTask] = useState<string>("");

  const handleClick = () => {
    addNewTasks(task);
    addStorage("tasks", task);
    setCallAddModal(!callAddModal);
  };

  return (
    <section className="modal-container">
      <h3 className="modal-title">Nova tarefa</h3>
      <fieldset>
        <label className="label-modal" htmlFor="title">
          Título
        </label>
        <input
          className="input-modal"
          type="text"
          name="task"
          value={task}
          onChange={({ target }) => setTask(target.value)}
          id="title"
          placeholder="Digite"
        />
      </fieldset>
      <div className="btns-container">
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
