"use client";

import React, { createContext, useContext, useState } from "react";

interface UserProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext deve ser usado dentro de um UserProvider");
  }
  return context;
};
