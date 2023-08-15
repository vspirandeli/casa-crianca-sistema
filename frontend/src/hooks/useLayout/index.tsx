'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

interface LayoutProvider {
  children: ReactNode;
}

interface LayoutContextData {
  isLoading: boolean;
  handleLoading: (state: boolean) => void;
}

export const LayoutContext = createContext<LayoutContextData>(
  {} as LayoutContextData,
);

export function LayoutProvider({ children }: LayoutProvider) {
  const [isLoading, setIsLoading] = useState(false);

  function handleLoading(state: boolean) {
    setIsLoading(state);
  }

  return (
    <LayoutContext.Provider value={{ isLoading, handleLoading }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout(): LayoutContextData {
  const context = useContext(LayoutContext);

  return context;
}
