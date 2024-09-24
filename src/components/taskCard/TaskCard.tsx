"use client";

import Image from "next/image";
import trashIcon from "@/assets/icons/trash.png";
import "./styles.scss";
import { useModalContext } from "@/context/providers/modal-provider";
import { useTaskContext } from "@/context/providers/task-provider";

interface DataProps {
  data: string;
}

const TaskCard = ({ data }: DataProps) => {
  const { callDeleteModal, setCallDeleteModal } = useModalContext();
  const {
    setTaskToDelete,
    setTasks,
    setDoneTasks,
    tasks,
    doneTasks,
    addStorage,
    removeStorage,
  } = useTaskContext();

  const handleClick = () => {
    setTaskToDelete(data);
    setCallDeleteModal(!callDeleteModal);
  };

  const handleCheck = ({ target }: any) => {
    const newTasks = tasks.filter((item) => item !== target.value);
    setTasks(newTasks);
    removeStorage("tasks", target.value);
    setDoneTasks([...doneTasks, target.value]);
    addStorage("doneTasks", target.value);
  };

  return (
    <section className="card-task">
      <input
        type="checkbox"
        name={data}
        onClick={handleCheck}
        value={data}
        id="checkTask"
      />
      <label htmlFor="checkTask">{data}</label>
      <button type="button" className="trash-btn" onClick={handleClick}>
        <Image src={trashIcon} alt="Icon to delete task" />
      </button>
    </section>
  );
};

export default TaskCard;
