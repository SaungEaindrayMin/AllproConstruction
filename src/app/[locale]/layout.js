import { CallToAction } from "@/components/Layout/CallToAction";
import { I18nProvider } from "@/providers/I18nProvider";

async function getMessages(locale) {
  const messages = await import(`../../../public/locales/${locale}.json`);
  return messages.default;
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;
  const messages = await getMessages(locale);

  return (
    <I18nProvider locale={locale} messages={messages}>
      {children}
      <CallToAction />
    </I18nProvider>
  );
}
