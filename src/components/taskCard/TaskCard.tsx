"use client";

import Image from "next/image";
import trashIcon from "@/assets/icons/trash.png";
import "./styles.scss";
import { useModalContext } from "@/context/modal-provider";

const TaskCard = () => {
  const { callDeleteModal, setCallDeleteModal } = useModalContext();

  return (
    <section>
      <label htmlFor="checkTask">
        <input type="checkbox" name="" id="checkTask" />
        Lavar as mãos
      </label>
      <button
        type="button"
        className="trash-btn"
        onClick={() => setCallDeleteModal(!callDeleteModal)}
      >
        <Image src={trashIcon} alt="Icon to delete task" />
      </button>
    </section>
  );
};

export default TaskCard;
