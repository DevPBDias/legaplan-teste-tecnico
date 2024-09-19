import TaskCard from "../taskCard/TaskCard";
import "./styles.scss";

const TaskList = () => {
  return (
    <section className="card-container">
      <h3 className="title">Suas tarefas de hoje</h3>
      <div>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
      <h3 className="title">Tarefas finalizadas</h3>
      <div>
        <TaskCard />
      </div>
    </section>
  );
};

export default TaskList;
