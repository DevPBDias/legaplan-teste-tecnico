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
  addStorage: (key: string, value: string) => void;
  removeStorage: (key: string, value: string) => void;
  changeTask: (task: string) => void;
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

  const changeTask = (task: string) => {
    const foundInTasks = tasks.find((item) => item === task);

    if (foundInTasks) {
      setDoneTasks([...doneTasks, task]);
      const newTasks = tasks.filter((item) => item !== task);
      setTasks(newTasks);
    } else {
      setTasks([...tasks, task]);
      const newTasks = doneTasks.filter((item) => item !== task);
      setDoneTasks(newTasks);
    }
  };

  useEffect(() => {
    const showStorage = () => {
      const checkTaskStorage = localStorage.getItem("tasks");
      const checkDoneTaskStorage = localStorage.getItem("doneTasks");

      if (!checkTaskStorage) {
        localStorage.setItem("tasks", JSON.stringify([]));
      } else {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") as any);
        setTasks(storedTasks);
      }

      if (!checkDoneTaskStorage) {
        localStorage.setItem("doneTasks", JSON.stringify([]));
      } else {
        const storedDoneTasks = JSON.parse(
          localStorage.getItem("doneTasks") as any
        );
        setDoneTasks(storedDoneTasks);
      }
    };
    showStorage();
  }, []);

  const addStorage = (key: string, value: string) => {
    const checkStorage = JSON.parse(localStorage.getItem(key) as any);
    checkStorage?.push(value);
    localStorage.setItem(key, JSON.stringify(checkStorage));
  };

  const removeStorage = (key: string, value: string) => {
    const checkStorage = JSON.parse(localStorage.getItem(key) as any);
    const newStorage = checkStorage?.filter((item: any) => item !== value);
    localStorage.setItem(key, JSON.stringify(newStorage));
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
        addStorage,
        removeStorage,
        changeTask,
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
