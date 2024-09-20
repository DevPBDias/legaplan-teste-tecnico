import { useTaskContext } from "@/context/task-provider";
import TaskCard from "../taskCard/TaskCard";
import "./styles.scss";
import DoneTaskCard from "../taskCard/DoneTaskCard";

const TaskList = () => {
  const { tasks, doneTasks } = useTaskContext();

  return (
    <section className="card-container">
      <h3 className="title">Suas tarefas de hoje</h3>
      <div>
        {tasks &&
          tasks.map((item, index) => <TaskCard key={index} data={item} />)}
      </div>
      <h3 className="title">Tarefas finalizadas</h3>
      <div>
        {doneTasks &&
          doneTasks?.map((item, index) => (
            <DoneTaskCard key={index} data={item} />
          ))}
      </div>
    </section>
  );
};

export default TaskList;
