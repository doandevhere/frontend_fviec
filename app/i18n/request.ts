import { getRequestConfig } from "next-intl/server";
import { localeConfig } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !localeConfig.locales.includes(locale)) {
    locale = localeConfig.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
