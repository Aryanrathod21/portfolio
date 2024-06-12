// src/components/visible/VisibilityContext.tsx
'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VisibilityContextType {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface VisibilityProviderProps {
  children: ReactNode;
}

const VisibilityContext = createContext<VisibilityContextType | undefined>(undefined);

export const VisibilityProvider: React.FC<VisibilityProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <VisibilityContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = (): VisibilityContextType => {
  const context = useContext(VisibilityContext);
  if (!context) {
    throw new Error('useVisibility must be used within a VisibilityProvider');
  }
  return context;
};
