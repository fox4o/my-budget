import React from "react";
import { useBudgets } from "../contexts/BudgetContext";
import ExpenseList from "./ExpenseList";
import useTranslation from "../hooks/useTranslations";

function HistoryEspenseModal() {
  const { budgetId, budgets } = useBudgets();
  const budget = budgets.find(b=>b.id===budgetId);
  const [__t] = useTranslation();

  return (
    <div
      className="modal fade"
      id="mdlHistoryModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {__t("Expenses")} - {budget?.name}
            </h1>
            <button
              type="reset"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <ExpenseList budgetId={budgetId} actionBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryEspenseModal;
