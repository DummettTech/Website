import React from "react";
import { useTranslation } from "react-i18next";

export const WhoAreWe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold text-center">{t("whoAreWe")}</h1>
      <div className="py-2 px-4 sm:px-6 lg:px-40">
        <h2 className="text-2xl py-2">{t("blerb")}</h2>
      </div>
    </div>
  );
};
