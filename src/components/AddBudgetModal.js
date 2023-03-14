import React, { useRef } from "react";
import { useBudgets } from "../contexts/BudgetContext";

function AddBudgetModal() {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });
    nameRef.current.value=null;
    maxRef.current.value=null;
  }

  return (
    <div
      className="modal fade"
      id="mdlAddBudget"
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
                New Budget
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
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="name"
                  ref={nameRef}
                />
              </div>
              <div class="mb-3">
                <label for="max" className="form-label">
                  Maximum
                </label>
                <input
                  type="number"
                  min={0}
                  step={0.01}
                  required
                  className="form-control"
                  id="max"
                  ref={maxRef}
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

export default AddBudgetModal;
