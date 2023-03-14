import React from "react";
import { useBudgets } from "../contexts/BudgetContext";

const ExpenseList = ({ budgetId }) => {
  const { getBudgetExpenses } = useBudgets();
  const expenseList = getBudgetExpenses(budgetId);

  return expenseList.slice(-3).map((expense) => {
    return (
      <div className="hstack gap-2 mt-1">
        <div className="fw-6 text-muted">{expense.date}</div>
        <div>{expense.description}</div>
        <div className="ms-auto text-end">{expense.amount}</div>
      </div>
    );
  });
};

export default ExpenseList;
