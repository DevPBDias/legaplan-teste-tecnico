import React from "react";
import { ModalProvider } from "./providers/modal-provider";
import { TaskProvider } from "./providers/task-provider";
import { UserProvider } from "./providers/user-provider";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalProvider>
      <UserProvider>
        <TaskProvider>{children}</TaskProvider>
      </UserProvider>
    </ModalProvider>
  );
};

export default GlobalProvider;
