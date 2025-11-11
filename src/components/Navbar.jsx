import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
   const isEn = i18n.language?.startsWith('en')
  const toggleLang = () => {
    const next = isEn ? 'es' : 'en'
    i18n.changeLanguage(next)
    try { localStorage.setItem('lang', next) } catch {}
  }

  return (
    <nav className="socialMedia navbar navbar-expand-lg border-bottom fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">{t('brand')}</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/">{t('nav.home')}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">{t('nav.about')}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/cv">{t('nav.cv')}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/" state={{ scrollTo: 'container__proyectos' }}>{t('nav.projects')}</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/" state={{ scrollTo: 'contacto' }}>{t('nav.contact')}</NavLink></li>
            <li className="nav-item ms-3 d-flex align-items-center">
              <button className="btn btn-sm btn-outline-secondary" onClick={toggleLang}>
                {isEn ? 'ES' : 'EN'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
