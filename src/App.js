import React from "react";
import TotalCard from "./components/TotalCard";
import ExpanseCard from "./components/ExpenseCard";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import { useBudgets } from "./contexts/BudgetContext";
import HistoryEspenseModal from "./components/HistoryExpenseModal";
import LanguageDropdown from "./components/LanguageDropdown";
import useTranslation from "./hooks/useTranslations";

const App = () => {
  const { budgets, budgetId } = useBudgets();
  const [__t] = useTranslation();

  return (
    <>
      <div className="container">
        <div className="hstack gap-2 mt-3">
            <h1 className="me-auto">{__t('My budget')}</h1>
          <LanguageDropdown />
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
          <h3 className="me-auto">{__t("Expenses")}</h3>
        </div>
        {budgets.map((budget) => {
          return (
            <ExpanseCard
              key={budget.id}
              {...budget}
              countList={-3}
            ></ExpanseCard>
          );
        })}
      </div>
      <AddBudgetModal />
      <AddExpenseModal budgetId={budgetId} />
      <HistoryEspenseModal />
    </>
  );
};

export default App;
