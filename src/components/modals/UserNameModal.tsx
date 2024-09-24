"use client";
import { useModalContext } from "@/context/providers/modal-provider";
import { useUserContext } from "@/context/providers/user-provider";
import "./styles.scss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const userSchema = z.object({
  user: z.string().min(3, "Nome curto! Por favor inserir mais de 2 caracteres"),
});

type ModaltData = z.infer<typeof userSchema>;

const UserNameModal = () => {
  const { callUserModal, setCallUserModal } = useModalContext();
  const { setUserName, updateUserStorage } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    getValues,
  } = useForm<ModaltData>({
    resolver: zodResolver(userSchema),
  });

  const resetForm = () => {
    if (isSubmitSuccessful) reset({ user: "" });
  };

  const handleClick = (data: ModaltData) => {
    console.log(data);
    setUserName(getValues("user"));
    updateUserStorage(getValues("user"));
    resetForm();
    setCallUserModal(!callUserModal);
  };

  return (
    <main className="modal-container">
      <form onSubmit={handleSubmit(handleClick)} className="modal-content">
        <h3 className="modal-title">Novo por aqui? Como você se chama?</h3>
        <fieldset>
          <label className="label-modal" htmlFor="title">
            Nome
          </label>
          <input
            className={`input-modal ${errors.user ? "error-border" : ""}`}
            type="text"
            {...register("user")}
            id="title"
            placeholder="Digite"
          />
          {errors.user && (
            <span className="error-msg">{errors.user.message}</span>
          )}
        </fieldset>
        <div className="btns-container">
          <button type="button" onClick={() => reset({ user: "" })}>
            Limpar
          </button>
          <button className="add-btn" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </main>
  );
};

export default UserNameModal;
