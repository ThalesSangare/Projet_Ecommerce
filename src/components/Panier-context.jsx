import { Children, createContext } from "react";

// items = les elemnts present dans le panier
export const PanierContext = createContext({
  items: [],
});

export const PanierContextProvider = ({ Children }) => {
  const valeurInitial = {
    items: [],
  };
  return (
    <PanierContext.Provider value={valeurInitial}>
      {Children}
    </PanierContext.Provider>
  );
};
