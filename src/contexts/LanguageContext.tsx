import React, { createContext, useContext, useState, ReactNode } from "react";

// createContext → para crear un contexto que luego compartiremos con componentes hijos.
// useContext → para consumir ese contexto desde cualquier componente.
// useState → para manejar el estado del idioma (EN o ES).
// ReactNode → tipo de datos que representa cualquier contenido de React que pueda ser pasado como children.

// Definimos la forma del contexto
interface LanguageContextProps {
  language: "EN" | "ES";
  toggleLanguage: () => void;
}

// toggleLanguage → es una función que no recibe parámetros y no devuelve nada (void). Su tarea es cambiar el idioma.

// Creamos contexto con valores iniciales
const LanguageContext = createContext<LanguageContextProps>({
  language: "EN",
  toggleLanguage: () => {}
});

// Provider
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Creamos el LanguageProvider como un componente funcional.
  const [language, setLanguage] = useState<"EN" | "ES">("EN");

  //cambia el idioma:
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "ES" : "EN"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
    // value={{ language, toggleLanguage }} → esto es lo que cualquier componente hijo podrá consumir usando useContext.
  );
};

// hook personalizado para que sea más fácil usar el contexto en cualquier componente.
export const useLanguage = () => useContext(LanguageContext);
