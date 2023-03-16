import React, { useRef } from "react";
import { useBudgets } from "../contexts/BudgetContext";
import ExpenseList from "./ExpenseList";

function HistoryEspenseModal() {
  const { budgetId, getBudgetExpenses } = useBudgets();
  const expenses = getBudgetExpenses(budgetId);

  return (
    <div
      className="modal fade"
      id="mdlHistoryModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              History
            </h1>
            <button
              type="reset"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <ExpenseList budgetId={budgetId} countList={expenses.lenght} actionBtn/>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryEspenseModal;
