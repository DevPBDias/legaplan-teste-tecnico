"use client";
import "./styles.scss";

const AddTaskBtn = () => {
  const handleClick = () => {
    console.log("clickou");
  };

  return (
    <button type="button" onClick={handleClick}>
      Adicionar tarefa
    </button>
  );
};

export default AddTaskBtn;
