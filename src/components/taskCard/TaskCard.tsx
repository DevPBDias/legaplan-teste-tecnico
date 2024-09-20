"use client";

import Image from "next/image";
import trashIcon from "@/assets/icons/trash.png";
import "./styles.scss";
import { useModalContext } from "@/context/modal-provider";
import { useTaskContext } from "@/context/task-provider";

interface DataProps {
  data: string;
}

const TaskCard = ({ data }: DataProps) => {
  const { callDeleteModal, setCallDeleteModal } = useModalContext();
  const { setTaskToDelete } = useTaskContext();

  const handleClick = () => {
    setTaskToDelete(data);
    setCallDeleteModal(!callDeleteModal);
  };

  return (
    <section>
      <label htmlFor="checkTask">
        <input type="checkbox" name={data} value={data} id="checkTask" />
        {data}
      </label>
      <button type="button" className="trash-btn" onClick={handleClick}>
        <Image src={trashIcon} alt="Icon to delete task" />
      </button>
    </section>
  );
};

export default TaskCard;
