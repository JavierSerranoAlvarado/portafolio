import { useTranslation } from 'react-i18next'

export default function About() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'es'
  return (
    <section>
      <h1>{t('about.title')}</h1>
      <p>{t('about.content')}</p>
    </section>
  )
}
