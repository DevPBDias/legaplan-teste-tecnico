"use client";
import { useModalContext } from "@/context/providers/modal-provider";
import { useUserContext } from "@/context/providers/user-provider";
import "./styles.scss";
import { useState } from "react";

const UserNameModal = () => {
  const { callUserModal, setCallUserModal } = useModalContext();
  const { userName, setUserName, updateUserStorage } = useUserContext();
  const [newName, setNewName] = useState("");

  const handleClick = () => {
    setUserName(newName);

    console.log(newName);
    console.log(userName);

    updateUserStorage(newName);
    console.log(newName);

    setCallUserModal(!callUserModal);
    setNewName("");
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
            value={newName}
            onChange={({ target }) => setNewName(target.value)}
            id="title"
            placeholder="Digite"
          />
        </fieldset>
        <div className="btns-container">
          <button type="button" onClick={() => setNewName("")}>
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

export default UserNameModal;
