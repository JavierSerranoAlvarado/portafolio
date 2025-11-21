import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export default function Home() {
   const { t } = useTranslation()
 
  return (
    <>
    <div class="stars"></div>
<div class="shooting-star"></div>
<div class="shooting-star"></div>
<div class="shooting-star"></div>
<div class="shooting-star"></div>
<div class="shooting-star"></div>
     
      <header id="header" class="mt-5"> 
      {/* 
  <section className="socialMedia">
    <div className="socialMedia__list">
      <a target="_blank" rel="noreferrer" title={t('header.socialMedia.facebook')} href="https://www.facebook.com/JavierSADev">
        <i className="fab fa-facebook-square"></i>
      </a>
      <a target="_blank" rel="noreferrer" title={t('header.socialMedia.twitter')} href="https://twitter.com/JavierSADev">
        <i className="fab fa-twitter-square"></i>
      </a>
      <a target="_blank" rel="noreferrer" title={t('header.socialMedia.instagram')} href="https://www.instagram.com/javiersadev/">
        <i className="fab fa-instagram-square"></i>
      </a>
      <a target="_blank" rel="noreferrer" title={t('header.socialMedia.github')} href="https://github.com/JavierSerranoAlvarado">
        <i className="fab fa-github-square"></i>
      </a>
      <a target="_blank" rel="noreferrer" title={t('header.socialMedia.linkedin')} href="https://www.linkedin.com/in/javier-eduardo-serrano-alvarado-033386185/">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </section> */}

  <section className="intro">
    <div className="intro--text">
      <p className="intro--nombre">{t('home.heroName')}</p>
      <div className="intro--titulo">{t('home.heroTitle')}</div>
      <div className="intro--meta">
        <p className="mb-1">{t('home.heroState')} <a href="mailto:contacto@javiersadev.com">contacto@javiersadev.com</a></p>
        <p className="mb-0">
          <a href="https://javiersadev.com" target="_blank" rel="noreferrer">javiersadev.com</a>
          {' '}·{' '}
          <a href="https://www.linkedin.com/in/javiersadev/" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
    </div>
    {/*
    <div className="d-flex gap-2 mt-3">
      <NavLink className="btn btn-primary" to="/cv">Ver CV</NavLink>
      <NavLink className="btn btn-outline-secondary" to="/" state={{ scrollTo: 'contacto' }}>Contacto</NavLink>
    </div>
    */}
  </section>
</header>

<section className="perfil pt-4" id="perfil">
  <h2 className="experiencia__titulo">{t('profile.sectionTitle')}</h2>
  <div className="perfil__container">
    <div className="perfil__container--info grid-container mt-3">
      <div className="perfil__container--imgfondo"></div>
      <img loading="lazy" src="/assets/img/perfil-javier.png" alt={t('profile.imgAlt')} />
      <div>
        <h3>{t('profile.hello')}</h3>
        <h1>
          {t('profile.bio')}
          <br />
        </h1>
        <NavLink to="/cv" className="proyectos--button button--active">
          {t('profile.downloadCv')}
        </NavLink>
      </div>
    </div>
  </div>
   <section className="perfil__experiencia perfil--responsive" id="experiencia">
    <h3 className="experiencia__titulo">{t('experience.sectionTitle')}</h3>
    
    <div className="experiencia__item">
        <h4 className="experiencia__subtitulo">1. {t('experience.item1Title')}</h4>
        <p><strong>Rol Clave:</strong> {t('experience.item1Role')}</p>
        <p><strong>Alcance:</strong> {t('experience.item1Scope')}</p>
        <p><strong>Logros Técnicos:</strong> {t('experience.item1Achievements')}</p>
        <p><strong>Enfoque de Calidad:</strong> {t('experience.item1QualityFocus')}</p>
    </div>

    <div className="experiencia__item">
        <h4 className="experiencia__subtitulo">2. {t('experience.item2Title')}</h4>
        <p><strong>Rol Clave:</strong> {t('experience.item2Role')}</p>
        <p><strong>Logros Técnicos:</strong> {t('experience.item2Achievements')}</p>
        <p><strong>Proceso:</strong> {t('experience.item2Process')}</p>
    </div>

    <div className="experiencia__item">
        <h4 className="experiencia__subtitulo">3. {t('experience.item3Title')}</h4>
        <p><strong>Rol Clave:</strong> {t('experience.item3Role')}</p>
        <p><strong>Alcance:</strong> {t('experience.item3Scope')}</p>
        <p><strong>Tecnologías:</strong> {t('experience.item3Tech')}</p>
    </div>
</section>
  <div className="perfil__container--extrainfo grid-container">
    <h3 className="proyectos__carrusel--titulo experiencia__titulo">{t('profile.infoTitle')}</h3>
    <div className="chips">
      <h3>{t('profile.technologies.title')}</h3>
      <span className="chip">React</span>
      <span className="chip">AEM</span>
      <span className="chip">Sling Models</span>
      <span className="chip">OSGi</span>
      <span className="chip">HTL/Sightly</span>
      <span className="chip">Core Components</span>
      <span className="chip">Servlets</span>
      <span className="chip">APIs</span>
      <span className="chip">Workflows</span>
      <span className="chip">NVDA</span>
      <span className="chip">Responsive</span>
      <span className="chip">Java</span>
      <span className="chip">Spring Boot</span>
      <span className="chip">MySQL</span>
      <span className="chip">REST</span>
    </div>

    <div className="perfil__container--ingles perfil--responsive">
      <h3>{t('profile.englishLevel.title')}</h3>
      <p>
        <i className="fas tecnologias fa-language"></i> {t('profile.englishLevel.score')}
      </p>
      <a href="/assets/img/ingles-voxy.png" target="_blank" rel="noreferrer">
        <img loading="lazy" src="/assets/img/ingles-voxy.png" alt={t('profile.englishLevel.certAlt')} />
      </a>
    </div>

    <div className="perfil__container--hobbies perfil--responsive">
      <h3>{t('profile.hobbies.title')}</h3>
      <ul>
        <li>{t('profile.hobbies.videogames')} <i className="fas tecnologias fa-gamepad"></i></li>
        <li>{t('profile.hobbies.coffee')}<i className="fas tecnologias fa-coffee"></i></li>
        <li>{t('profile.hobbies.running')}<i className="fas tecnologias fa-running"></i></li>
      </ul>
    </div>
  </div>
</section>

<main id="container__proyectos" className="container__proyectos">

  <section className="proyectos">
    <section className="proyectos__ultimo grid-container">
      <h3 className="proyectos__ultimo--titulo">{t('projects.latestTitle')}</h3>
      <div className="proyectos__ultimo--img">
        <img loading="lazy" src="/assets/img/easteregg.png" alt={t('projects.latestImgAlt')} />
      </div>
      <div className="proyectos__ultimo--text">
        <h3>{t('projects.latestName')}</h3>
        <p>
          {t('projects.latestDesc')}
          <br />
          {t('projects.techUsed')}
          <i className="fab tecnologias fa-js-square"></i>
          <i className="fab tecnologias fa-bootstrap"></i>
          <i className="fab tecnologias fa-java"></i>
        </p>
        <a className="proyectos--button button--active" href="https://javierserranoalvarado.github.io/Easter-egg/" target="_blank" rel="noreferrer">
          {t('projects.buttons.live')}<i className="fas fa-file-alt"></i>
        </a>
        <a className="proyectos--button proyectos--actualRepo" href="https://github.com/JavierSerranoAlvarado/Easter-egg" target="_blank" rel="noreferrer">
          {t('projects.buttons.repository')}<i className="fab fa-git-square"></i>
        </a>
      </div>
    </section>
  </section>

  <section className="proyectos__carrusel grid-container">
    <h3 className="proyectos__carrusel--titulo">{t('projects.previousTitle')}</h3>

    <div className="proyectos__carrusel--card">
        <img loading="lazy" src="/assets/img/proyecto-ejercicios-basicosJS.png" alt={t('projects.cards.basicJs.imgAlt')} />
      <div className="proyectos__carrusel--info">
        <h3>{t('projects.cards.basicJs.title')}</h3>
        <p>
          {t('projects.cards.basicJs.desc')}
          <br />
          {t('projects.techUsed')}
          <i className="fab tecnologias fa-js-square"></i>
          <i className="fab tecnologias fa-html5"></i>
          <i className="fab tecnologias fa-css3-alt"></i>
        </p>
        <div className="proyectos__carrusel--links">
          <a className="proyectos--button button--active" href="https://javierserranoalvarado.github.io/EjerciciosBasicosJS/" target="_blank" rel="noreferrer">
            {t('projects.buttons.live')}<i className="fas fa-file-alt"></i>
          </a>
          <a className="proyectos--button" href="https://github.com/JavierSerranoAlvarado/EjerciciosBasicosJS" target="_blank" rel="noreferrer">
            {t('projects.buttons.repository')}<i className="fab fa-git-square"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="proyectos__carrusel--card">
        <img loading="lazy" src="/assets/img/proyecto-maquetacion.png" alt={t('projects.cards.foodStore.imgAlt')} />
      <div className="proyectos__carrusel--info">
        <h3>{t('projects.cards.foodStore.title')}</h3>
        <p>
          {t('projects.cards.foodStore.desc')}
          <br />
          {t('projects.techUsed')}
          <i className="fab tecnologias fa-html5"></i>
          <i className="fab tecnologias fa-css3-alt"></i>
        </p>
        <div className="proyectos__carrusel--links">
          <a className="proyectos--button button--active" href="https://javierserranoalvarado.github.io/maquetacion-tienda/" target="_blank" rel="noreferrer">
            {t('projects.buttons.live')}<i className="fas fa-file-alt"></i>
          </a>
          <a className="proyectos--button" href="https://github.com/JavierSerranoAlvarado/maquetacion-tienda" target="_blank" rel="noreferrer">
            {t('projects.buttons.repository')}<i className="fab fa-git-square"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="proyectos__carrusel--card">
        <img loading="lazy" src="/assets/img/proyecto-animaland2.png" alt={t('projects.cards.animaland.imgAlt')} />
      <div className="proyectos__carrusel--info">
        <h3>{t('projects.cards.animaland.title')}</h3>
        <p>
          {t('projects.cards.animaland.desc')}
          <br />
          {t('projects.techUsed')}
          <i className="fab tecnologias fa-html5"></i>
          <i className="fab tecnologias fa-css3-alt"></i>
        </p>
        <div className="proyectos__carrusel--links">
          <a className="proyectos--button button--active" href="https://javierserranoalvarado.github.io/animaland/" target="_blank" rel="noreferrer">
            {t('projects.buttons.live')}<i className="fas fa-file-alt"></i>
          </a>
          <a className="proyectos--button" href="https://github.com/JavierSerranoAlvarado/animaland" target="_blank" rel="noreferrer">
            {t('projects.buttons.repository')}<i className="fab fa-git-square"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="proyectos__carrusel--card">
        <img loading="lazy" src="/assets/img/proyecto-clon-de-google.png" alt={t('projects.cards.googleClone.imgAlt')} />
      <div className="proyectos__carrusel--info">
        <h3>{t('projects.cards.googleClone.title')}</h3>
        <p>
          {t('projects.cards.googleClone.desc')}
          <br />
          {t('projects.techUsed')}
          <i className="fab tecnologias fa-html5"></i>
          <i className="fab tecnologias fa-css3-alt"></i>
        </p>
        <div className="proyectos__carrusel--links">
          <a className="proyectos--button button--active" href="https://javierserranoalvarado.github.io/clon-de-google/" target="_blank" rel="noreferrer">
            {t('projects.buttons.live')}<i className="fas fa-file-alt"></i>
          </a>
          <a className="proyectos--button" href="https://github.com/JavierSerranoAlvarado/clon-de-google" target="_blank" rel="noreferrer">
            {t('projects.buttons.repository')}<i className="fab fa-git-square"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="proyectos__carrusel--card">
        <img loading="lazy" src="/assets/img/proyecto-tienda-virtual.png" alt={t('projects.cards.javierStore.imgAlt')} />
      <div className="proyectos__carrusel--info">
        <h3>{t('projects.cards.javierStore.title')}</h3>
        <p>
          {t('projects.cards.javierStore.desc')}
          <br />
          {t('projects.techUsed')}
          <i className="fab tecnologias fa-html5"></i>
          <i className="fab tecnologias fa-css3-alt"></i>
        </p>
        <div className="proyectos__carrusel--links">
          <a className="proyectos--button button--active" href="https://javierserranoalvarado.github.io/tiendaJavier//" target="_blank" rel="noreferrer">
            {t('projects.buttons.live')}<i className="fas fa-file-alt"></i>
          </a>
          <a className="proyectos--button" href="https://github.com/JavierSerranoAlvarado/tiendaJavier" target="_blank" rel="noreferrer">
            {t('projects.buttons.repository')}<i className="fab fa-git-square"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="proyectos__carrusel--card">
        <img loading="lazy" src="/assets/img/proximamente.jpg" alt={t('projects.cards.comingSoon.imgAlt')} />
      <div className="proyectos__carrusel--info">
        <h3>{t('projects.cards.comingSoon.title')}</h3>
        <p>{t('projects.cards.comingSoon.desc')}</p>
        <div className="proyectos__carrusel--links">
          <a className="proyectos--button button--disable" href="#" target="_blank" rel="noreferrer">
            {t('projects.buttons.live')}<i className="fas fa-file-alt"></i>
          </a>
          <a className="proyectos--button button--disable" href="#" target="_blank" rel="noreferrer">
            {t('projects.buttons.repository')}<i className="fab fa-git-square"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</main>

<section className="contacto" id="contacto">
  <h2 class="experiencia__titulo">{t('contact.title')}</h2>
  <div className="contacto__container">
    <div className="contacto__container--info grid-container">
      <i className="fas fa-envelope-open-text"></i>
      <h3 className="experiencia__subtitulo">{t('contact.sendMeEmail')}</h3>
      <p>{t('contact.text')}</p>
      <img className="contacto--img" src="/assets/img/correo.png" alt={t('contact.mailImgAlt')} />
    </div>
  </div>
</section>

<footer>
  <p>
    {t('footer.madeWithLove')} <span>❤</span> {t('footer.by')}
  </p>
</footer>
    </>
  );
}

