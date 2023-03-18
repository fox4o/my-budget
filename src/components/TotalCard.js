import React from "react";
import { useBudgets } from "../contexts/BudgetContext";
import { currency } from "../utils";
import useTranslation from "../hooks/useTranslations";

const TotalCard = () => {
  const { budgets, expenses } = useBudgets();
  const [__t] = useTranslation();

  const totalBudgets = budgets.reduce((total, budget) => {
    return (total = total + budget.max);
  }, 0);
  const totalExpenses = expenses.reduce((total, expense) => {
    return (total = total + expense.amount);
  }, 0);
  const cardBg = (expenses, total) => {
    const ratio = expenses / total;
 
    if (ratio < 0.5 || expenses===0) return "bg-info";
    if (ratio < 0.75) return "bg-warning";
    return "bg-danger";
  };
  
  return (
    <div className={"card mt-3 "+cardBg(totalExpenses,totalBudgets)}>
      <div className="card-body">
        <h3 className="card-title hstack align-items-baseline fw-normal">
          <div>{__t("Total")}</div>
          <div className="d-flex ms-auto fs-5">
            {currency.format(totalExpenses)}
            <span className="text-muted ms-1">/ {currency.format(totalBudgets)}</span>
          </div>
        </h3>
      </div>
    </div>
  );
};

export default TotalCard;
