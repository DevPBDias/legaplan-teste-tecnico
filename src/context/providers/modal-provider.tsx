"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalProps {
  callAddModal: boolean;
  setCallAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  callDeleteModal: boolean;
  setCallDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  callUserModal: boolean;
  setCallUserModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [callAddModal, setCallAddModal] = useState(false);
  const [callDeleteModal, setCallDeleteModal] = useState(false);
  const [callUserModal, setCallUserModal] = useState(true);

  return (
    <ModalContext.Provider
      value={{
        callAddModal,
        setCallAddModal,
        callDeleteModal,
        setCallDeleteModal,
        callUserModal,
        setCallUserModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ModalContext deve ser usado dentro de um ModalProvider");
  }
  return context;
};
