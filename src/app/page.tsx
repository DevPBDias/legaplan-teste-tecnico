"use client";
import AddTaskBtn from "@/components/addTaskBtn/AddTaskBtn";
import AddTaskModal from "@/components/modals/AddTaskModal";
import DeleteTaskModal from "@/components/modals/DeleteTaskModal";
import UserNameModal from "@/components/modals/UserNameModal";
import TaskList from "@/components/taskList/TaskList";
import { useModalContext } from "../context/providers/modal-provider";

export default function Home() {
  const { callAddModal, callDeleteModal, callUserModal } = useModalContext();

  return (
    <main>
      <TaskList />
      <AddTaskBtn />
      {callUserModal && <UserNameModal />}
      {callAddModal && <AddTaskModal />}
      {callDeleteModal && <DeleteTaskModal />}
    </main>
  );
}
