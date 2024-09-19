"use client";
import "./styles.scss";

const DeleteTaskModal = () => {
  const handleClick = () => {
    console.log("clickou");
  };

  return (
    <section>
      <h3>Deletar tarefa</h3>
      <p>Tem certeza que você deseja deletar essa tarefa?</p>
      <div>
        <button type="button">Cancelar</button>
        <button className="delete-btn" type="button" onClick={handleClick}>
          Deletar
        </button>
      </div>
    </section>
  );
};

export default DeleteTaskModal;
