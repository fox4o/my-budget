import React from "react";
import { useBudgets } from "../contexts/BudgetContext";

const TotalCard = () => {
  const {budgets, expenses} = useBudgets();
  const totalBudgets = budgets.reduce((total, budget) =>{
    return (total=total+budget.max);
  },0);
  const totalExpenses = expenses.reduce((total, expense) =>{
    return (total=total+expense.amount);
  },0);

  return (
    <div className="card mt-3 bg-info">
    <div className="card-body">
      <h3 className="card-title hstack align-items-baseline fw-normal">
        <div>Total</div>
        <div className="ms-auto fs-3">
          {totalExpenses}
          <span className="text-muted ms-1">/ {totalBudgets}</span>
        </div>
      </h3>
    </div>
  </div>
  );
};

export default TotalCard;
