"use client";
import { createContext, useContext } from "react";

const I18nContext = createContext();

export function I18nProvider({ locale, messages, children }) {
  return (
    <I18nContext.Provider value={{ locale, messages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useMessages() {
  return useContext(I18nContext);
}
