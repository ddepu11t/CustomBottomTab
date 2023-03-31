import React, {
  FC,
  createContext,
  useState,
  PropsWithChildren,
  useContext,
} from "react";

const TabContext = createContext({ opened: false, toogleMenu: () => {} });

export const TabContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [opened, setOpened] = useState(false);

  const toogleMenu = () => {
    setOpened((prevState) => !prevState);
  };

  return (
    <TabContext.Provider value={{ opened, toogleMenu }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabMenu = () => useContext(TabContext);
