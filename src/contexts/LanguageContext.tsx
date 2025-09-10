import React, { createContext, useContext, useState, ReactNode } from "react";

// Definimos la forma del contexto
interface LanguageContextProps {
  language: "EN" | "ES";
  toggleLanguage: () => void;
}

// Creamos contexto con valores iniciales dummy
const LanguageContext = createContext<LanguageContextProps>({
  language: "EN",
  toggleLanguage: () => {}
});

// Provider
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<"EN" | "ES">("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "ES" : "EN"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para consumir el contexto
export const useLanguage = () => useContext(LanguageContext);
