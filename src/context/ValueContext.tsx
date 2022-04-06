import React, { createContext, ReactChild, useContext, useState } from "react";

interface ValueContextInterface {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const ValueContext = createContext<ValueContextInterface | null>(null);

export const ValueProvider: React.FC<{ children: ReactChild }> = ({
  children,
}) => {
  const [value, setValue] = useState(1250);
  return (
    <ValueContext.Provider value={{ value, setValue }}>
      {children}
    </ValueContext.Provider>
  );
};

export const useValue = () =>
  useContext<ValueContextInterface | null>(ValueContext);
