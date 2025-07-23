import "server-only"

const dictionaries = {
  en: () => import("../../dictionaries/en.json").then((module) => module.default),
  dk: () => import("../../dictionaries/dk.json").then((module) => module.default),
}

export const getDictionary = async (locale: "en" | "dk") => dictionaries[locale]?.() ?? dictionaries.en()
