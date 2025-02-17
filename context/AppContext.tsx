"use client";

import { createContext, useState } from "react";

// should declare here the type of the things that i pass as props
export type AppContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;

};



export const AppContext = createContext<AppContextType | null>(null);

interface Props {
  [propName: string]: any;
}

const AppContextProvider = (props: Props) => {

  const [open, setOpen] = useState(false);

  const contextValue = {
    open,
    setOpen,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
