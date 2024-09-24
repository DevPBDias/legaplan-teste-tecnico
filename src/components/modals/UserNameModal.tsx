"use client";
import { useModalContext } from "@/context/providers/modal-provider";
import { useUserContext } from "@/context/providers/user-provider";
import { useTaskContext } from "@/context/providers/task-provider";
import "./styles.scss";

const AddTaskModal = () => {
  const { callUserModal, setCallUserModal } = useModalContext();
  const { addStorage } = useTaskContext();
  const { userName, setUserName } = useUserContext();

  const handleClick = () => {
    addStorage("user", userName);
    setCallUserModal(!callUserModal);
  };

  return (
    <main className="modal-container">
      <section className="modal-content">
        <h3 className="modal-title">Novo por aqui? Como você se chama?</h3>
        <fieldset>
          <label className="label-modal" htmlFor="title">
            Nome
          </label>
          <input
            className="input-modal"
            type="text"
            name="name"
            value={userName}
            onChange={({ target }) => setUserName(target.value)}
            id="title"
            placeholder="Digite"
          />
        </fieldset>
        <div className="btns-container">
          <button type="button" onClick={() => setUserName("")}>
            Limpar
          </button>
          <button className="add-btn" type="button" onClick={handleClick}>
            Entrar
          </button>
        </div>
      </section>
    </main>
  );
};

export default AddTaskModal;
