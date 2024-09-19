"use client";
import AddTaskBtn from "@/components/addTaskBtn/AddTaskBtn";
import AddTaskModal from "@/components/modals/AddTaskModal";
import DeleteTaskModal from "@/components/modals/DeleteTaskModal";
import TaskList from "@/components/taskList/TaskList";
import { useModalContext } from "../context/modal-provider";

export default function Home() {
  const { callAddModal, callDeleteModal } = useModalContext();

  return (
    <main>
      <TaskList />
      <AddTaskBtn />
      {callAddModal && <AddTaskModal />}
      {callDeleteModal && <DeleteTaskModal />}
    </main>
  );
}
