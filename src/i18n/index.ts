import i18next from 'i18next'
import zh from './zh'
import en from './en'
import ptBR from './ptBR'

i18next.init({
  fallbackLng: 'en',
  lng: 'en', // if you're using a language detector, do not define the lng option
  // debug: true,
  resources: {
    en,
    zh,
    ptBR
  }
})

export default i18next