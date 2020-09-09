import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index.reducer';
import translations from '../translations';

const loggerMiddleware = createLogger();

const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;
let lang = language.toLowerCase().split(/[_-]+/)[0];
lang = translations[lang] === undefined ? 'en' : lang;

export const store = createStore(
    rootReducer,
    { Intl: { locale: lang}},
    applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
    )
);