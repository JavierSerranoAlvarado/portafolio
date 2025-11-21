import { useTranslation } from 'react-i18next'

export default function About() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'es'
  return (
    <section class="experiencia__item">
      <h1 class="mt-5 experiencia__titulo">{t('about.title')}</h1>
      <p class="mt-1 experiencia__subtitulo">{t('about.content')}</p>
    </section>
  )
}
