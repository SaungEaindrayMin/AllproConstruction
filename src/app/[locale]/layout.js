import { CallToAction } from "@/components/Layout/CallToAction";
import { I18nProvider } from "@/providers/I18nProvider";

// dynamic import with no alias issues
async function getMessages(locale) {
  const messages = await import(`../../../public/locales/${locale}.json`);
  return messages.default;
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <I18nProvider locale={locale} messages={messages}>
          {children}
          <CallToAction />
        </I18nProvider>
      </body>
    </html>
  );
}
