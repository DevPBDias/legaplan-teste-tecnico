"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface UserProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  updateUserStorage: (value: string) => void;
}

export const UserContext = createContext<UserProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState("");

  const updateUserStorage = (value: string) => {
    localStorage.setItem("userName", JSON.stringify(value));
  };

  useEffect(() => {
    const showStorage = () => {
      const checkUserStorage = JSON.parse(
        localStorage.getItem("userName") as any
      );

      if (!checkUserStorage) {
        localStorage.setItem("userName", JSON.stringify(""));
      } else {
        setUserName(checkUserStorage);
      }
    };
    showStorage();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        updateUserStorage,
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
