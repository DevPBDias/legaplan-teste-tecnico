"use client";
import { useModalContext } from "../../context/providers/modal-provider";
import { useTaskContext } from "@/context/providers/task-provider";
import { useUserContext } from "@/context/providers/user-provider";
import AddTaskBtn from "@/components/addTaskBtn/AddTaskBtn";
import AddTaskModal from "@/components/modals/AddTaskModal";
import DeleteTaskModal from "@/components/modals/DeleteTaskModal";
import TaskList from "@/components/taskList/TaskList";
import Loading from "./loading";
import BackBtn from "@/components/backBtn/BackBtn";

export default function Home() {
  const { callAddModal, callDeleteModal } = useModalContext();
  const { userName } = useUserContext();
  const { tasks, doneTasks } = useTaskContext();

  if (userName === "") {
    return <Loading />;
  }

  return (
    <main>
      {tasks.length === 0 && doneTasks.length === 0 ? (
        <p>Não tem tarefas de hoje</p>
      ) : (
        <TaskList />
      )}
      <AddTaskBtn />
      {callAddModal && <AddTaskModal />}
      {callDeleteModal && <DeleteTaskModal />}
      <BackBtn />
    </main>
  );
}
