import React, { useRef } from "react";
import { useBudgets } from "../contexts/BudgetContext";
import useTranslation from "../hooks/useTranslations";

function AddExpenseModal({ budgetId }) {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const { setBudgetId, addExpense, budgets } = useBudgets();
  const [__t] = useTranslation();

  const budget = budgets.find((b) => b.id === budgetId);

  function handleSubmit(e) {
    e.preventDefault();
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetId,
    });
    descriptionRef.current.value = null;
    amountRef.current.value = null;
    setBudgetId(null);
  }

  return (
    <div
      className="modal fade"
      id="mdlAddExpense"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <form onSubmit={handleSubmit}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {__t("New Expense")} - {budget?.name}
              </h1>
              <button
                type="reset"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  {__t("Description")}
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="description"
                  ref={descriptionRef}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="max" className="form-label">
                  {__t("Amount")}
                </label>
                <input
                  type="number"
                  min={0}
                  step={0.01}
                  required
                  className="form-control"
                  id="amount"
                  ref={amountRef}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                type="submit"
                data-bs-dismiss="modal"
              >
                {__t("Add")}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddExpenseModal;
