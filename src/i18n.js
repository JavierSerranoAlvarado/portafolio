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
        experience: 'Experiencia',
        contact: 'Contacto'
      },

      home: {
        heroName: 'Javier Eduardo Serrano Alvarado',
        heroTitle: 'Desarrollador Frontend React + AEM',
        heroState: 'Estado de México ·',
        knowMe: 'Conoceme'
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
        bio: 'Frontend Developer con experiencia practica en React y Adobe AEM, contribuyendo a proyectos empresariales (Verizon). Experto en componentes reutilizables, integraciones React-AEM, creacion de servlets, diseno de APIs, automatizacion de workflows y mejoras de accesibilidad. Experiencia en entornos agiles, depuracion de UI compleja y entrega de soluciones responsivas, escalables y de alto rendimiento.',
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
        title: 'Portafolio',
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

      experience: {
        sectionTitle: 'Experiencia Profesional',
        item1Title: 'Implementación de Soluciones SPA con React y AEM (2024–2025)',
        item1Role: 'Desarrollador React',
        item1Scope: 'Implementación de requerimientos frontend en React con backend gestionado por Adobe AEM.',
        item1Achievements: 'Desarrollo de componentes React reutilizables para alta interactividad. Creación de servlets y APIs para AEM para el renderizado dinámico de datos en los componentes React.',
        item1QualityFocus: 'Aseguramiento de la integración fluida React/AEM y resolución de problemas de accesibilidad y visualización cross-browser.',

        item2Title: 'Desarrollo Backend y Flujos de Trabajo en AEM (2023–2024)',
        item2Role: 'Desarrollador AEM',
        item2Achievements: 'Creación de flujos de trabajo para automatizar procesos y desarrollo de servlets para obtener y gestionar datos del repositorio de AEM.',
        item2Process: 'Trabajo bajo el modelo ágil, implementando historias de usuario y mejoras de componentes core según requerimientos.',

        item3Title: 'Proyecto Full Stack: Easter Egg (Generation México, 2021-2022)',
        item3Role: 'Desarrollador Java',
        item3Scope: 'Diseño de concepto original y mockup con foco en la interfaz y experiencia de usuario (UX/UI).',
        item3Tech: 'Backend con Spring Boot para el manejo eficiente de datos e integración, y Frontend con Bootstrap para una experiencia moderna.'
      },

      contact: {
        title: 'Contáctame',
        sendMeEmail: 'Envíame un correo',
        text:
          'Actualmente estoy abierto a nuevas oportunidades de desarrollo AEM y Full Stack Java. Ya sea para discutir un proyecto, colaborar, o simplemente saludar, ¡escríbame!',
        mailImgAlt: 'Correo'
      },

      footer: {
        madeWithLove: 'Hecho con',
        by: 'por Javier Eduardo'
      },

      about: {
        title: 'Acerca de mí',
        content: 'Soy Javi, desarrollador frontend con enfoque en crear interfaces claras, eficientes y pensadas para el usuario. Trabajo principalmente con JavaScript, React, Bootstrap y AEM. Me apasiona aprender, mejorar procesos y construir soluciones que combinen técnica y creatividad. Fuera del código, disfruto del arte, el anime y la tecnología que inspira nuevas ideas.'
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
        experience: 'Experience',
        contact: 'Contact'
      },

      home: {
        heroName: 'Javier Eduardo Serrano Alvarado',
        heroTitle: 'React + AEM Frontend Developer',
        heroState: 'State of Mexico ·',
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
        bio: 'Frontend Developer with hands-on experience in React and Adobe AEM, contributing to enterprise-level projects for Verizon. Skilled in reusable UI components, React-AEM integrations, servlets, API design, workflows, and accessibility improvements. Strong Agile background, debugging complex UIs, and delivering responsive, scalable, performance-oriented solutions.',
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
        title: 'Portfolio',
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

      experience: {
        sectionTitle: 'Professional Experience',
        
        item1Title: 'Implementing SPA Solutions with React and AEM (2024–2025)',
        item1Role: 'React Developer',
        item1Scope: 'Implementing front-end requirements in React, with the backend managed by Adobe Experience Manager (AEM).',
        item1Achievements: 'Developed reusable React components for high interactivity. Created AEM servlets and APIs for dynamic data rendering in React components.',
        item1QualityFocus: 'Ensuring smooth React/AEM integration and solving cross-browser accessibility and display issues.',

        item2Title: 'Backend Development and Workflow Management in AEM (2023–2024)',
        item2Role: 'AEM Developer',
        item2Achievements: 'Designed and implemented workflows to automate processes and developed servlets to fetch and manage data from the AEM repository.',
        item2Process: 'Worked under the Agile methodology, implementing user stories and core component enhancements as per requirements.',

        item3Title: 'Full Stack Project: Easter Egg (Generation Mexico, 2021-2022)',
        item3Role: 'Java Developer',
        item3Scope: 'Original concept design and mockup focusing on user interface and experience (UX/UI).',
        item3Tech: 'Backend developed with Spring Boot for efficient data handling and integration, and Frontend using Bootstrap for a modern experience.'
      },

      contact: {
        title: 'Contact me',
        sendMeEmail: 'Send me an email',
        text:
          "I am currently open to new opportunities in AEM and Full Stack Java development. Whether it's to discuss a project, collaborate, or just say hello, please write to me!",
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








