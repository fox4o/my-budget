import React from "react";
import { useBudgets } from "../contexts/BudgetContext";

function useTranslation() {
  const [translations, setTranslations] = React.useState();
  const { locale } = useBudgets();

  React.useEffect(() => {
    (async function loadLangTranslations() {
      setTranslations((await import(`../locales/${locale}.json`)).default);
    })();
  }, [locale]);

  const __trans = (key) => {
    return translations?.[key] || key;
  };

  return [__trans];
}

export default useTranslation;
