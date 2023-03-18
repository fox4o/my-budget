import React, { useRef } from "react";
import { useBudgets } from "../contexts/BudgetContext";
import useTranslation from "../hooks/useTranslations";

function AddBudgetModal() {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudgets();
  const [__t] = useTranslation();

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
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <form onSubmit={handleSubmit}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {__t("New Budget")}
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
                {__t("Name")}
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="name"
                  ref={nameRef}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="max" className="form-label">
                  {__t("Maximum")}
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
                {__t("Add")}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBudgetModal;
