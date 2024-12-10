import { defineRouting } from "next-intl/routing";

type LocaleConfig = ReturnType<typeof defineRouting>;

export const localeConfig: LocaleConfig = {
  locales: ["vi", "en"],
  defaultLocale: "vi",
  localeDetection: true,

  pathnames: {
    "/": {
      vi: "/",
      en: "/",
    },
    "/job": {
      vi: "/viec-lam",
      en: "/job",
    },
    "/job/[id]": {
      vi: "/viec-lam/[id]",
      en: "/job/[id]",
    },
  },
};
