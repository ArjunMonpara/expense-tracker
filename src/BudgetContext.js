
import React, { createContext, useState } from "react";

export const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [budget, setBudget] = useState(15000);

  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  );
}

export default BudgetProvider;
