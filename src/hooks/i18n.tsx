import React, { useState, useCallback, createContext, useContext } from 'react';
import {
  RawIntlProvider,
  createIntlCache,
  createIntl,
  useIntl,
} from 'react-intl';
import translations from '../i18n';

interface I18nData {
  locale: string;
  changeLang(lang: string): void;
}

export const I18nContext = createContext<I18nData>({} as I18nData);

const I18n: React.FC = ({ children }) => {
  const [locale, setLocale] = useState<string>(
    localStorage.getItem('@mailManager/locale') || 'pt'
  );

  const changeLang = useCallback((lang) => {
    localStorage.setItem('@mailManager/locale', lang);
    setLocale(lang);
  }, []);

  const cache = createIntlCache();
  const intl = createIntl(
    {
      locale,
      messages: translations[locale],
    },
    cache
  );

  return (
    <I18nContext.Provider value={{ locale, changeLang }}>
      <RawIntlProvider value={intl}>{children}</RawIntlProvider>
    </I18nContext.Provider>
  );
};

function useI18n(): I18nData {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useIntl must be used within an I18n');
  }

  return context;
}

export { I18n, useI18n, useIntl };
