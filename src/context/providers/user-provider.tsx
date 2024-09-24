"use client";

import React, {
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from "react";
import { useModalContext } from "./modal-provider";

interface UserProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  updateUserStorage: (value: string) => void;
}

export const UserContext = createContext<UserProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState("");
  const { setCallUserModal } = useModalContext();

  const updateUserStorage = (value: string) => {
    const storedName = JSON.parse(localStorage.getItem("userName") as any);
    if (storedName) localStorage.setItem("userName", JSON.stringify(value));
  };

  useEffect(() => {
    const showStorage = () => {
      const checkUserStorage = localStorage.getItem("userName");

      if (checkUserStorage === "") setCallUserModal(true);

      if (!checkUserStorage) {
        localStorage.setItem("userName", JSON.stringify(""));
      } else {
        const storedUser = JSON.parse(localStorage.getItem("userName") as any);
        setUserName(storedUser);
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
