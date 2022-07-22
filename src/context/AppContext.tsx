import React from 'react';

type ContextType = {
  contextData: any;
  setGlobalContext: (data: any) => void;
};

export const AppContext = React.createContext<ContextType | null>(null);
