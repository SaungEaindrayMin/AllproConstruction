import { I18nProvider } from "@/providers/I18nProvider";
import NextTopLoader from "nextjs-toploader";

async function getMessages(locale) {
  try {
    const messages = await import(`../../locales/${locale}.json`);
    return messages.default;
  } catch (err) {
    console.warn(`Locale "${locale}" not found, falling back to English.`);
    const messages = await import(`../../locales/en.json`);
    return messages.default;
  }
}

export default async function LocaleLayout({ children, params }) {
  const locale = params.locale;

  const messages = await getMessages(locale);

  return (
    <I18nProvider locale={locale} messages={messages}>
      <NextTopLoader color="#1b4050" showSpinner={false} />
      {children}
    </I18nProvider>
  );
}
