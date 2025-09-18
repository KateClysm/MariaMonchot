// src/hooks/useSection.tsx
import { useLanguage } from "../contexts/LanguageContext";
import portfolioData from "../assets/portfolio.json";
import { IconData } from "../interfaces/IIcon";

type RefItem = { ref: string }; //tipo de ícono
type LanguageKey = "en-language" | "es-language"; //restringe a dos posibles claves de idioma
type PortfolioSection = Record<string, any>; //un objeto genérico (Record<string, any>) porque cada sección tiene estructura distinta.

//Define que el hook devuelve toda la sección pedida (PortfolioSection) más un array de íconos ya resueltos (icons).
interface UseSectionIconsResult extends PortfolioSection {
  icons: IconData[];
}

// El hook recibe el nombre de la sección, Obtiene el idioma actual desde el contexto (EN o ES).
// Y define qué clave usar en el JSON ("en-language" o "es-language").
export const useSection = (sectionName: string): UseSectionIconsResult => {
  const { language } = useLanguage();
  const langKey: LanguageKey = language === "EN" ? "en-language" : "es-language";

  // Traemos la sección según el idioma
  const section: PortfolioSection = (portfolioData as any)[langKey][sectionName];

  // Guarda todos los íconos que están en la sección icons del JSON para resolver referencias.
  const allIcons: Record<string, IconData> = (portfolioData as any).icons;

  // Función mapRefs toma un array de { ref: "algo" } y lo transforma en un array de objetos de tipo IconData.
  // Busca el ícono correspondiente en allIcons usando la clave ref.
  const mapRefs = (items: RefItem[] | undefined): IconData[] => {
    if (!items) return [];
    return items.map((i) => {
      const icon = allIcons[i.ref] || i;

      // Si el icono tiene 'label', lo usamos directamente
      // Si no, usamos 'en-label' o 'es-label' según el idioma
      const label =
        (icon.label as string) ||
        (language === "EN"
          ? (icon["en-label"] as string)
          : (icon["es-label"] as string)) ||
        "";

      return { ...icon, label }; //Retorna un nuevo objeto con los datos originales del ícono más la etiqueta traducida.
      //se está creando un nuevo objeto basado en icon, pero forzando a que tenga un campo label explícito. -> normaliza
    });
  };

  // Hace una copia de la sección.
  const mappedSection: PortfolioSection = { ...section };

  // Recorre todas las claves de la sección (icons, myPriorities, myHighlights...).
  // Si encuentra un array de objetos con ref, lo convierte en íconos usando mapRefs.
  Object.keys(mappedSection).forEach((key) => {
    const value = mappedSection[key];
    if (Array.isArray(value) && value.every((i: any) => i.ref)) {
      mappedSection[key] = mapRefs(value);
    }
  });

  // Mapear bloques si existen (para la sección 'technologies')
  //Maneja el caso especial de technologies, que tiene una estructura distinta
  //Convierte los items dentro de cada block en íconos completos.
  if (mappedSection.blocks && Array.isArray(mappedSection.blocks)) {
    mappedSection.blocks = mappedSection.blocks.map((block: any) => ({
      ...block,
      items: mapRefs(block.items),
    }));
  }

  // Siempre devolvemos también los íconos principales de la sección
  const icons = section?.icons ? mapRefs(section.icons) : [];

  return { ...mappedSection, icons };
};
