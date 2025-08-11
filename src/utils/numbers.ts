import i18n from "i18next";

import { translate } from "@/translations/utils";


export const convertPrice = (price: number) => {
  const lang = i18n.language;
  if (lang === "fa")
    return price?.toLocaleString(lang) + " " + translate("currency");
  return translate("currency") + " " + price?.toLocaleString(lang);
};
export const convertNumber = (number: number) => {
  const lang = i18n.language;
  return number?.toLocaleString(lang) + "";
};
