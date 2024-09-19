import AddTaskBtn from "@/components/addTaskBtn/AddTaskBtn";
import TaskCard from "@/components/taskCard/TaskCard";

export default function Home() {
  return (
    <main>
      <TaskCard />
      <AddTaskBtn />
    </main>
  );
}
