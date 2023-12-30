'use client';
import React, { ReactNode, createContext, useState } from 'react';
export const DrawerCtx = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  onToggle: () => {},
});
export default function DrawerCtxProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };
  const onToggle = () => {
    setIsOpen(preSt => !preSt);
  };

  return (
    <DrawerCtx.Provider value={{ isOpen, onClose, onOpen, onToggle }}>
      {children}
    </DrawerCtx.Provider>
  );
}
