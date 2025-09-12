// src/hooks/useSection.tsx
import { useLanguage } from "../contexts/LanguageContext";
import portfolioData from "../assets/portfolio.json";
import { IconData } from "../interfaces/IIcon";

type RefItem = { ref: string };

type LanguageKey = "en-language" | "es-language";
type PortfolioSection = Record<string, any>;

interface UseSectionIconsResult extends PortfolioSection {
  icons: IconData[];
}

export const useSection = (sectionName: string): UseSectionIconsResult => {
  const { language } = useLanguage();
  const langKey: LanguageKey = language === "EN" ? "en-language" : "es-language";

  // Traemos la sección según el idioma
  const section: PortfolioSection = (portfolioData as any)[langKey][sectionName];

  // Todos los íconos disponibles
  const allIcons: Record<string, IconData> = (portfolioData as any).icons;

  // Función para mapear arrays de refs a objetos IconData y ajustar label según idioma
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

      return { ...icon, label };
    });
  };

  // Creamos una copia de la sección y mapeamos todos los arrays que tengan refs
  const mappedSection: PortfolioSection = { ...section };

  // Mapear arrays simples de refs
  Object.keys(mappedSection).forEach((key) => {
    const value = mappedSection[key];
    if (Array.isArray(value) && value.every((i: any) => i.ref)) {
      mappedSection[key] = mapRefs(value);
    }
  });

  // Mapear bloques si existen (para la sección 'technologies')
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
