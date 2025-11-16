import { createTranslator } from "next-localization";

export async function loadTranslations(locale) {
  const messages = await import(`../../public/locales/${locale}.json`);
  return createTranslator({ locale, messages: messages.default });
}
