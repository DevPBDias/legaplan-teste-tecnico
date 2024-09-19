"use client";
import "./styles.scss";

const AddTaskModal = () => {
  const handleClick = () => {
    console.log("clickou");
  };

  return (
    <section>
      <h3>Nova tarefa</h3>
      <fieldset>
        <label htmlFor="title">Título</label>
        <input type="text" name="" id="title" placeholder="Digite" />
      </fieldset>
      <div>
        <button type="button">Cancelar</button>
        <button className="add-btn" type="button" onClick={handleClick}>
          Adicionar
        </button>
      </div>
    </section>
  );
};

export default AddTaskModal;
