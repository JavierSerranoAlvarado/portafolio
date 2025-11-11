import { useTranslation } from 'react-i18next'

export default function Cv() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : 'es'
  const cvEs = '/assets/pdf/Javier_Serrano_CV_ES.pdf'
  const cvEn = '/assets/pdf/Javier_Serrano_CV_EN.pdf'
  const currentSrc = lang === 'es' ? cvEs : cvEn

  const toggleLang = () => i18n.changeLanguage(lang === 'es' ? 'en' : 'es')

  return (
    <section className="cv-page">
      <div className="container py-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h1 className="h4 m-0">{t('cv.title')}</h1>
        </div>
        <embed className="pdf" src={currentSrc} type="application/pdf" style={{ width: '100%', height: '85vh', border: 'none' }} />
        <div className="mt-3">
          <a className="btn btn-outline-secondary" href={currentSrc} download>{t('cv.download')}</a>
        </div>
      </div>
    </section>
  )
}
