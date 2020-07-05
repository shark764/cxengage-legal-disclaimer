import React from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';

/**
 * default locale to en-US
 */
import { DEFAULT_LOCALE, messages, setGlobalLocale, appLocales } from '../i18n';
import IntlError from './IntlError';

const TranslationProvider = ({
  children,
  locale = DEFAULT_LOCALE,
  ...props
}) => {
  /**
   * Default to en-US
   */
  if (!appLocales.includes(locale)) {
    locale = DEFAULT_LOCALE;
  }

  /**
   * Set datetime locale
   */
  setGlobalLocale(locale);

  return (
    <IntlProvider
      {...props}
      /**
       * Set messages translation locale
       */
      locale={locale}
      messages={messages[locale]}
      onError={IntlError}
    >
      {children}
    </IntlProvider>
  );
};

TranslationProvider.propTypes = {
  children: PropTypes.node,
  locale: PropTypes.string,
};

export default TranslationProvider;
