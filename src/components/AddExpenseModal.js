import React, { useRef } from "react";
import { useBudgets } from "../contexts/BudgetContext";

function AddExpenseModal({ budgetId }) {

  const descriptionRef = useRef();
  const amountRef = useRef();
  const { setBudgetId, addExpense } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetId
    });
    descriptionRef.current.value=null;
    amountRef.current.value=null;
    setBudgetId(null);
  }

  return (
      <div
        className="modal fade"
        id="mdlAddExpense"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <form onSubmit={handleSubmit}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  New Expense
                </h1>
                <button
                  type="reset"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <div class="mb-3">
                  <label for="name" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="description"
                    ref={descriptionRef}
                  />
                </div>
                <div class="mb-3">
                  <label for="max" className="form-label">
                    Amount
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
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
  );
}

export default AddExpenseModal;
