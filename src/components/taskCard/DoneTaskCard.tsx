"use client";

import Image from "next/image";
import trashIcon from "@/assets/icons/trash.png";
import "./styles.scss";
import { useModalContext } from "@/context/modal-provider";
import { useTaskContext } from "@/context/task-provider";

interface DataProps {
  data: string;
}

const DoneTaskCard = ({ data }: DataProps) => {
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
    const newTasks = doneTasks.filter((item) => item !== target.value);
    setDoneTasks(newTasks);
    removeStorage("doneTasks", target.value);
    setTasks([...tasks, target.value]);
    addStorage("tasks", target.value);
  };

  return (
    <section className="card-task">
      <input
        type="checkbox"
        onClick={handleCheck}
        checked
        name={data}
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

export default DoneTaskCard;
