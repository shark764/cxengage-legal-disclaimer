/**
 * Moment internationalization.
 */
import moment from 'moment';
// import 'moment/locale/cs';
import 'moment/locale/de';
import 'moment/locale/en-gb';
import 'moment/locale/es';
// import 'moment/locale/fi';
import 'moment/locale/fr-ca';
import 'moment/locale/fr';
// import 'moment/locale/it';
// import 'moment/locale/ja';
// import 'moment/locale/ko';
// import 'moment/locale/nb';
// import 'moment/locale/nl';
import 'moment/locale/pl';
import 'moment/locale/pt-br';
// import 'moment/locale/sv';
// import 'moment/locale/zh-cn';
// import 'moment/locale/zh-tw';

/**
 * Serenova-Client-Strings
 */
// // import csCZMessages from 'serenova-client-strings/cxengage-legal/cs-CZ.json';
// import deDEMessages from 'serenova-client-strings/cxengage-legal/de-DE.json';
// import enGBMessages from 'serenova-client-strings/cxengage-legal/en-GB.json';
import enUSMessages from 'serenova-client-strings/cxengage-legal/en-US.json';
// import esESMessages from 'serenova-client-strings/cxengage-legal/es-ES.json';
// // import fiFIMessages from 'serenova-client-strings/cxengage-legal/fi-FI.json';
// import frCAMessages from 'serenova-client-strings/cxengage-legal/fr-CA.json';
// import frFRMessages from 'serenova-client-strings/cxengage-legal/fr-FR.json';
// // import itITMessages from 'serenova-client-strings/cxengage-legal/it-IT.json';
// // import jaJPMessages from 'serenova-client-strings/cxengage-legal/ja-JP.json';
// // import koKRMessages from 'serenova-client-strings/cxengage-legal/ko-KR.json';
// // import nbNOMessages from 'serenova-client-strings/cxengage-legal/nb-NO.json';
// // import nlNLMessages from 'serenova-client-strings/cxengage-legal/nl-NL.json';
// import plPLMessages from 'serenova-client-strings/cxengage-legal/pl-PL.json';
// import ptBRMessages from 'serenova-client-strings/cxengage-legal/pt-BR.json';
// // import svSEMessages from 'serenova-client-strings/cxengage-legal/sv-SE.json';
// // import zhCNMessages from 'serenova-client-strings/cxengage-legal/zh-CN.json';
// // import zhTWMessages from 'serenova-client-strings/cxengage-legal/zh-TW.json';

export const DEFAULT_LOCALE = 'en-US';

export const setGlobalLocale = (locale) => moment.locale(locale);

export const messages = {
  // // 'cs-CZ':  csCZMessages,
  // 'de-DE': deDEMessages,
  // 'en-GB': enGBMessages,
  'en-US': enUSMessages,
  // 'es-ES': esESMessages,
  // // 'fi-FI':  fiFIMessages,
  // 'fr-CA': frCAMessages,
  // 'fr-FR': frFRMessages,
  // // 'it-IT':  itITMessages,
  // // 'ja-JP':  jaJPMessages,
  // // 'ko-KR':  koKRMessages,
  // // 'nb-NO':  nbNOMessages,
  // // 'nl-NL':  nlNLMessages,
  // 'pl-PL': plPLMessages,
  // 'pt-BR': ptBRMessages,
  // // 'sv-SE':  svSEMessages,
  // // 'zh-CN':  zhCNMessages,
  // // 'zh-TW':  zhTWMessages,
};

export const appLocales = [
  'en-US',
  // 'cs-CZ',
  'de-DE',
  'en-GB',
  'es-ES',
  // 'fi-FI',
  'fr-CA',
  'fr-FR',
  // 'it-IT',
  // 'ja-JP',
  // 'ko-KR',
  // 'nb-NO',
  // 'nl-NL',
  'pl-PL',
  'pt-BR',
  // 'sv-SE',
  // 'zh-CN',
  // 'zh-TW',
];
