import React, { useState } from "react";
import TotalCard from "./components/TotalCard";
import ExpanseCard from "./components/ExpenseCard";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import { useBudgets } from "./contexts/BudgetContext";

const App = () => {
  const { budgets, budgetId } = useBudgets();

  return (
    <>
      <div className="container">
        <div className="hstack gap-2 mt-3">
          <h1 className="me-auto">Budget</h1>
          <button
            className="btn btn-sm btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#mdlAddBudget"
          >
            <i className="bi bi-folder-plus"></i>
          </button>
        </div>
        <TotalCard />

        <div className="hstack gap-2 mt-3">
          <h3 className="me-auto">Expanses</h3>
        </div>
        {budgets.map((budget) => {
          return (
            <ExpanseCard key={budget.id} {...budget}></ExpanseCard>
          );
        })}
      </div>
      <AddBudgetModal/>
      <AddExpenseModal budgetId={budgetId}/>
    </>
  );
};

export default App;
