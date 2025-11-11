import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const savedLang = typeof window !== 'undefined' ? (localStorage.getItem('lang') || 'es') : 'es'

const resources = {
  es: {
    translation: {
      brand: 'JavierSA Dev',

      nav: {
        home: 'Inicio',
        about: 'Acerca',
        cv: 'CV',
        projects: 'Proyectos',
        contact: 'Contacto'
      },

      home: {
        heroName: 'Javier Eduardo Serrano Alvarado',
        heroTitle: 'Desarrollador AEM/Full Stack Java',
        knowMe: 'Conóceme'
      },

      cv: {
        title: 'Currículum',
        show: 'Mostrando',
        es: 'Español',
        en: 'Inglés',
        toEn: 'Ver en Inglés',
        toEs: 'Ver en Español',
        download: 'Descargar PDF'
      },

      header: {
        socialMedia: {
          facebook: 'Facebook Javier Serrano',
          twitter: 'Twitter Javier Serrano',
          instagram: 'Instagram Javier Serrano',
          github: 'GitHub Javier Serrano',
          linkedin: 'LinkedIn Javier Serrano'
        }
      },

      intro: {
        buttonEnter: 'Conóceme'
      },

      profile: {
        sectionTitle: '¿Quién soy?',
        imgAlt: 'Perfil de Javier',
        hello: 'Hola',
        bio: 'Soy Javier Eduardo, actual estudiante de desarrollo de software y programador autodidacta. Mi misión es usar las tecnologías como un medio para conectar más a la gente. Mi visión es crear emociones en las personas al momento que vean lo que he hecho usando mis habilidades web. Entusiasta geek y fan de la cultura asiática.',
        downloadCv: 'Descargar CV',
        infoTitle: 'Información',

        technologies: {
          title: 'Tecnologías',
          list: {
            javascript: 'JavaScript',
            html5: 'HTML5',
            css3: 'CSS3',
            bootstrap: 'Bootstrap',
            java: 'Java',
            mysql: 'MySQL',
            slack: 'Slack',
            figma: 'Figma',
            trello: 'Trello'
          }
        },

        englishLevel: {
          title: 'Nivel de Inglés',
          score: 'TOEFL: B1',
          certAlt: 'Certificado de inglés'
        },

        hobbies: {
          title: 'Pasatiempos',
          videogames: 'Videojuegos',
          coffee: 'Tomar café',
          running: 'Salir a correr'
        }
      },

      projects: {
        title: 'Proyectos',
        latestTitle: 'Último proyecto',
        latestImgAlt: 'Easter Egg portada',
        latestName: 'Easter Egg (Proyecto final)',
        latestDesc:
          'Red social de Videojuegos, creada desde la idea y mockup hasta la finalización con todas sus funciones. Apoyada con los frameworks Bootstrap (frontend) y Spring Boot (backend)',
        techUsed: 'Tecnologías usadas:',
        live: 'Live',
        repository: 'Repositorio',

        previousTitle: 'Proyectos anteriores',

        cards: {
          basicJs: {
            imgAlt: 'Ejercicios Básicos JS',
            title: 'Ejercicios Básicos de JS',
            desc:
              'Recopilación de funciones de JS para hacer diferentes cálculos y modificaciones de arrays!'
          },
          foodStore: {
            imgAlt: 'Maquetación Tienda de Comida',
            title: 'Maquetación Tienda de Comida',
            desc:
              'Tarea de GENERATION México donde se maquetó una página de inicio a partir de una imagen proporcionada.'
          },
          animaland: {
            imgAlt: 'Animaland',
            title: 'Animaland',
            desc:
              'Minijuego realizado principalmente con animaciones y contadores de CSS y un poco de HTML.'
          },
          googleClone: {
            imgAlt: 'Clon de Google',
            title: 'Clon de Google',
            desc:
              'Reto de creación de página con la estética del inicio de Google.'
          },
          javierStore: {
            imgAlt: 'Tienda Virtual de Javier',
            title: 'Tienda Virtual de Javier',
            desc:
              'Primer acercamiento a HTML y CSS, se aprendió a maquetar una página principal y crear animaciones sencillas.'
          },
          comingSoon: {
            imgAlt: 'Próximamente',
            title: 'Próximamente...',
            desc: 'Próximamente...'
          }
        },

        buttons: {
          live: 'Live',
          repository: 'Repositorio',
          disabled: 'Deshabilitado'
        }
      },

      contact: {
        title: 'Contáctame',
        sendMeEmail: 'Envíame un correo',
        text:
          'Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta o simplemente quiera saludar, ¡haré todo lo posible por responderle!',
        mailImgAlt: 'Correo'
      },

      footer: {
        madeWithLove: 'Hecho con',
        by: 'por Javier Eduardo'
      },

      about: {
        title: 'Acerca',
        content: 'Sección de ejemplo.'
      }
    }
  },

  en: {
    translation: {
      brand: 'JavierSA Dev',

      nav: {
        home: 'Home',
        about: 'About',
        cv: 'CV',
        projects: 'Projects',
        contact: 'Contact'
      },

      home: {
        heroName: 'Javier Eduardo Serrano Alvarado',
        heroTitle: 'AEM/Full Stack Java Developer',
        knowMe: 'Know me'
      },

      cv: {
        title: 'Resume',
        show: 'Showing',
        es: 'Spanish',
        en: 'English',
        toEn: 'View in English',
        toEs: 'View in Spanish',
        download: 'Download PDF'
      },

      header: {
        socialMedia: {
          facebook: 'Facebook Javier Serrano',
          twitter: 'Twitter Javier Serrano',
          instagram: 'Instagram Javier Serrano',
          github: 'GitHub Javier Serrano',
          linkedin: 'LinkedIn Javier Serrano'
        }
      },

      intro: {
        buttonEnter: 'Know me'
      },

      profile: {
        sectionTitle: 'Who am I?',
        imgAlt: 'Javier’s profile',
        hello: 'Hello',
        bio: 'I am Javier Eduardo, a current software development student and self-taught programmer. My mission is to use technology as a means to connect people. My vision is to spark emotions in others when they see what I have built using my web skills. Geek enthusiast and fan of Asian culture.',
        downloadCv: 'Download CV',
        infoTitle: 'Information',

        technologies: {
          title: 'Technologies',
          list: {
            javascript: 'JavaScript',
            html5: 'HTML5',
            css3: 'CSS3',
            bootstrap: 'Bootstrap',
            java: 'Java',
            mysql: 'MySQL',
            slack: 'Slack',
            figma: 'Figma',
            trello: 'Trello'
          }
        },

        englishLevel: {
          title: 'English Level',
          score: 'TOEFL: B1',
          certAlt: 'English certificate'
        },

        hobbies: {
          title: 'Hobbies',
          videogames: 'Video games',
          coffee: 'Drinking coffee',
          running: 'Going for a run'
        }
      },

      projects: {
        title: 'Projects',
        latestTitle: 'Latest project',
        latestImgAlt: 'Easter Egg cover',
        latestName: 'Easter Egg (Final project)',
        latestDesc:
          'Video game social network, built from idea and mockup to a full feature-complete product. Powered by Bootstrap (frontend) and Spring Boot (backend)',
        techUsed: 'Technologies used:',
        live: 'Live',
        repository: 'Repository',

        previousTitle: 'Previous projects',

        cards: {
          basicJs: {
            imgAlt: 'Basic JS Exercises',
            title: 'Basic JS Exercises',
            desc:
              'Collection of JS functions to perform various calculations and array manipulations!'
          },
          foodStore: {
            imgAlt: 'Food Store Layout',
            title: 'Food Store Layout',
            desc:
              'GENERATION Mexico assignment: homepage layout recreated from a provided image.'
          },
          animaland: {
            imgAlt: 'Animaland',
            title: 'Animaland',
            desc:
              'Mini-game mainly using CSS animations and counters, plus a bit of HTML.'
          },
          googleClone: {
            imgAlt: 'Google Clone',
            title: 'Google Clone',
            desc:
              'Challenge to create a page with Google’s home screen aesthetics.'
          },
          javierStore: {
            imgAlt: 'Javier’s Online Store',
            title: 'Javier’s Online Store',
            desc:
              'First approach to HTML and CSS: learned to build a main page and simple animations.'
          },
          comingSoon: {
            imgAlt: 'Coming soon',
            title: 'Coming soon...',
            desc: 'Coming soon...'
          }
        },

        buttons: {
          live: 'Live',
          repository: 'Repository',
          disabled: 'Disabled'
        }
      },

      contact: {
        title: 'Contact me',
        sendMeEmail: 'Send me an email',
        text:
          'I am currently looking for new opportunities. Whether you have a question or just want to say hi, I will do my best to reply!',
        mailImgAlt: 'Mail'
      },

      footer: {
        madeWithLove: 'Made with',
        by: 'by Javier Eduardo'
      },

      about: {
        title: 'About',
        content: 'Example section.'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
})

export default i18n
