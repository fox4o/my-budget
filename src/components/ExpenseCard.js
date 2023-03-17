import React from "react";
import { useBudgets } from "../contexts/BudgetContext";
import ExpenseList from "./ExpenseList";

const ExpanseCard = ({ id, name, max }) => {
  const { setBudgetId, getBudgetExpenses, deleteBudget } =
    useBudgets();
  const expenses = getBudgetExpenses(id);
  const amount = expenses.reduce((total, expanse) => total + expanse.amount, 0);

  return (
    <>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title hstack align-items-baseline fw-normal">
            <div className="me-auto">{name}</div>
            <div className="d-flex align-items-baseline mx-auto">
              {amount}
              <span className="text-muted ms-1">/ {max}</span>
            </div>
            {expenses.length > 0 ? (
              <button
                className="btn btn-sm btn-outline-secondary"
                data-bs-toggle="modal"
                data-bs-target="#mdlHistoryModal"
                onClick={() => setBudgetId(id)}
              >
                <i className="bi bi-clock-history"></i>
              </button>
            ) : (
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => deleteBudget({ id })}
              >
                <i className="bi bi-trash"></i>
              </button>
            )}
            <div className="vr m-1"></div>
            <button
              className="btn btn-sm btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#mdlAddExpense"
              onClick={() => setBudgetId(id)}
            >
              <i className="bi bi-file-earmark-plus"></i>
            </button>
          </h5>
          <div className="progress rounded-pill">
            <div
              className={"progress-bar " + setProgressBar(amount, max)}
              role="progressbar"
              aria-valuenow={amount}
              aria-valuemin={0}
              aria-valuemax={max}
              style={{ width: (amount / max) * 100 + "%" }}
            ></div>
          </div>
          <ExpenseList budgetId={id} count={-3} />
        </div>
      </div>
    </>
  );
};

function setProgressBar(amount, max) {
  const ratio = amount / max;
  if (ratio < 0.5) return "bg-primary";
  if (ratio < 0.75) return "bg-warning";
  return "bg-danger";
}

export default ExpanseCard;
