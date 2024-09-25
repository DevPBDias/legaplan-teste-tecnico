"use client";
import AddTaskBtn from "@/components/addTaskBtn/AddTaskBtn";
import AddTaskModal from "@/components/modals/AddTaskModal";
import DeleteTaskModal from "@/components/modals/DeleteTaskModal";
import TaskList from "@/components/taskList/TaskList";
import { useModalContext } from "../../context/providers/modal-provider";
import { useTaskContext } from "@/context/providers/task-provider";

export default function Home() {
  const { callAddModal, callDeleteModal } = useModalContext();
  const { tasks, doneTasks } = useTaskContext();

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
    </main>
  );
}
