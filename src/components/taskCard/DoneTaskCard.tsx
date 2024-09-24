"use client";

import Image from "next/image";
import trashIcon from "@/assets/icons/trash.png";
import "./styles.scss";
import { useModalContext } from "@/context/providers/modal-provider";
import { useTaskContext } from "@/context/providers/task-provider";

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
      <div className="checkbox-container">
        <input
          type="checkbox"
          onClick={handleCheck}
          checked
          readOnly
          name={data}
          value={data}
          id="checkTask"
        />
        <label className="checked-doneTask" htmlFor="checkTask">
          {data}
        </label>
      </div>
      <button type="button" className="trash-btn" onClick={handleClick}>
        <Image src={trashIcon} alt="Icon to delete task" />
      </button>
    </section>
  );
};

export default DoneTaskCard;
