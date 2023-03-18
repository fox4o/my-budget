import React from "react";
import { useBudgets } from "../contexts/BudgetContext";

function LanguageDropdown() {
  const { setLocale } = useBudgets();

  return (
    <div className="dropdown">
      <button
        className="btn btn-sm btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-globe"></i>
      </button>
      <ul className="dropdown-menu">
        <li className="dropdown-item" onClick={() => setLocale("en")}>
          English
        </li>
        <li className="dropdown-item" onClick={() => setLocale("it")}>
          Italiano
        </li>
        <li className="dropdown-item" onClick={() => setLocale("bg")}>
          Български
        </li>
      </ul>
    </div>
  );
}

export default LanguageDropdown;
