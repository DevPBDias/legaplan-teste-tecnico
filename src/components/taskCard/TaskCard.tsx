import Image from "next/image";
import trashIcon from "@/assets/icons/trash.png";
import "./styles.scss";

const TaskCard = () => {
  return (
    <section>
      <label htmlFor="checkTask">
        <input type="checkbox" name="" id="checkTask" />
        Lavar as mãos
      </label>
      <button type="button" className="trash-btn">
        <Image src={trashIcon} alt="Icon to delete task" />
      </button>
    </section>
  );
};

export default TaskCard;
