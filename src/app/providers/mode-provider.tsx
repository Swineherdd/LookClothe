import React, { createContext, useContext, useState, ReactNode } from 'react';

export enum AppMode {
  SHOPPING = 'shopping',
  STYLE = 'style'
}

interface ModeContextType {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within ModeProvider');
  }
  return context;
};

interface ModeProviderProps {
  children: ReactNode;
  defaultMode?: AppMode;
}

export const ModeProvider: React.FC<ModeProviderProps> = ({
  children,
  defaultMode = AppMode.SHOPPING
}) => {
  const [mode, setMode] = useState<AppMode>(defaultMode);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};