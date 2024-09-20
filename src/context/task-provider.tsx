"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface TaskProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  doneTasks: string[];
  setDoneTasks: React.Dispatch<React.SetStateAction<string[]>>;
  taskToDelete: string;
  setTaskToDelete: React.Dispatch<React.SetStateAction<string>>;
  addNewTasks: (newTask: string) => void;
  deleteTasks: (deletedTask: string) => void;
}

export const TaskContext = createContext<TaskProps | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [doneTasks, setDoneTasks] = useState<string[]>([]);
  const [taskToDelete, setTaskToDelete] = useState<string>("");

  const addNewTasks = (newTask: string) => {
    if (tasks.length === 0) {
      setTasks([newTask]);
    } else {
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTasks = (deletedTask: string) => {
    const newTasks = tasks.filter((item) => item !== deletedTask);
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        doneTasks,
        setDoneTasks,
        taskToDelete,
        setTaskToDelete,
        addNewTasks,
        deleteTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("TaskContext deve ser usado dentro de um ModalProvider");
  }
  return context;
};
