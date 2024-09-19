import AddTaskBtn from "@/components/addTaskBtn/AddTaskBtn";
import TaskList from "@/components/taskList/TaskList";

export default function Home() {
  return (
    <main>
      <TaskList />
      <AddTaskBtn />
    </main>
  );
}
