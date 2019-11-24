import enLang from './entries/en-US';
import esLang from './entries/es_ES';
import {addLocaleData} from 'react-intl';

const AppLocale = {
    es: esLang,
    en: enLang
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.es.data);

export default AppLocale;
