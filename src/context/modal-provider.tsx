"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalProps {
  callAddModal: boolean;
  setCallAddModal: any;
  callDeleteModal: boolean;
  setCallDeleteModal: any;
}

export const ModalContext = createContext<ModalProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [callAddModal, setCallAddModal] = useState(false);
  const [callDeleteModal, setCallDeleteModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        callAddModal,
        setCallAddModal,
        callDeleteModal,
        setCallDeleteModal,
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
