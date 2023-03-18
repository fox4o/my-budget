import React from "react";
import { useBudgets } from "../contexts/BudgetContext";
import { currency } from "../utils";
import useTranslation from "../hooks/useTranslations";

const ExpenseList = ({ budgetId, count, actionBtn }) => {
  const { getBudgetExpenses, deleteExpense } = useBudgets();
  const expenses = getBudgetExpenses(budgetId);
  const [__t] = useTranslation();

  if(Object.keys(expenses).length===0) return (<div className="text-center text-muted">- {__t("Empty")} -</div>)
  return expenses.slice(count ? count : expenses.lenght).map((expense) => {
    return (
      <div className="hstack gap-2 mt-1" key={expense.id}>
        <div className="fw-6 text-muted">{expense.date}</div>
        <div>{expense.description}</div>
        <div className="ms-auto text-end">{currency.format(expense.amount)}</div>
        {actionBtn && (
          <button className="btn btn-sm btn-outline-danger" onClick={()=>deleteExpense(expense)}>
            <i className="bi bi-trash"></i>
          </button>
        )}
      </div>
    );
  });
};

export default ExpenseList;
