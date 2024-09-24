"use client";
import { useModalContext } from "@/context/providers/modal-provider";
import "./styles.scss";
import { useTaskContext } from "@/context/providers/task-provider";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const modalSchema = z.object({
  task: z.string().min(3, "Tarefa curta! Por favor detalhar tarefa"),
});

type ModaltData = z.infer<typeof modalSchema>;

const AddTaskModal = () => {
  const { callAddModal, setCallAddModal } = useModalContext();
  const { addNewTasks, addStorage } = useTaskContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    getValues,
  } = useForm<ModaltData>({
    resolver: zodResolver(modalSchema),
  });

  const resetForm = () => {
    if (isSubmitSuccessful) reset({ task: "" });
  };

  const handleClick = (data: ModaltData) => {
    console.log(data);
    addNewTasks(getValues("task"));
    addStorage("tasks", getValues("task"));
    resetForm();
    setCallAddModal(!callAddModal);
  };

  return (
    <main className="modal-container">
      <form onSubmit={handleSubmit(handleClick)} className="modal-content">
        <h3 className="modal-title">Nova tarefa</h3>
        <fieldset>
          <label className="label-modal" htmlFor="title">
            Título
          </label>
          <input
            className={`input-modal ${errors.task ? "error-border" : ""}`}
            type="text"
            {...register("task")}
            id="title"
            placeholder="Digite"
          />
          {errors.task && (
            <span className="error-msg">{errors.task.message}</span>
          )}
        </fieldset>
        <div className="btns-container">
          <button type="button" onClick={() => setCallAddModal(!callAddModal)}>
            Cancelar
          </button>
          <button className="add-btn" type="submit">
            Adicionar
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddTaskModal;
