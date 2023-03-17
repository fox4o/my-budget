import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetContext = React.createContext();

export function useBudgets() {
  return useContext(BudgetContext);
}

export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [budgetId, setBudgetId] = useState();

  function getBudgetExpenses(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }
  function addExpense({ description, amount, budgetId }) {
    setExpenses((prevExpanse) => {
      const date = new Date().toLocaleDateString();
      return [
        ...prevExpanse,
        { id: uuidV4(), date, description, amount, budgetId },
      ];
    });
  }

  function addBudget({ name, max }) {
    /*    setBudgets((prevBudget) => {
      if (prevBudget.find((budget) => budget.name === name)) {
        return prevBudget;
      }
      return [...prevBudget, { id: uuidV4(), name, max }];
    });
    */
    setBudgets((prevBudget) => {
      const i = prevBudget.findIndex((budget) => budget.name === name);
      if (i > -1) {
        prevBudget[i] = { ...prevBudget[i], name, max };
        // return prevBudget // not captured from useEffect()
        // new array for useEffect()
        return [...prevBudget];
      } else {
        return [...prevBudget, { id: uuidV4(), name, max }];
      }
    });
  }
  function deleteBudget({ id }) {
    setBudgets((prevBudget) => {
      return prevBudget.filter((budget) => budget.id !== id);
    });
  }
  function deleteExpense({ id }) {
    setExpenses((prevExpanse) => {
      return prevExpanse.filter((expense) => expense.id !== id);
    });
  }

  return (
    <BudgetContext.Provider
      value={{
        budgetId,
        setBudgetId,
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
