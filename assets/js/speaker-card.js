var speakers = [
  {
    "name": "Rodolfo Alvarez",
    "photo": "rodolfo.jpg",
    "bio": "Software Engineer en EBANX<br>Software Developer en GOIAR<br>Full Stack Developer en ORIGINO",
    "talk": {
      "title": "Zona de promesas (async/await)",
      "image": "talk-1.png",
      "summary": "Una mirada a la programación asincrónica.<br>Al no detenerse en espera de resultados, ejecuta tareas independientes en forma simultánea, optimizando el tiempo y la capacidad de respuesta.<br>Veremos código con Callbacks, Promesas y funciones async/await en Javascript.",
      "description": ""
    }
  },
  {
    "name": "Rossana Suarez",
    "photo": "rossana.jpg",
    "bio": "Ingeniera en sistemas, Tech Lead DevOps en Naranjax. DevOps Engineer (AWS) Mentora de DevOps en MundoSe, EducacionIT y ekoparty hackademy",
    "talk": {
      "title": "Entendiendo los contenedores 101",
      "image": "",
      "summary": "El uso de una arquitectura de microservicios con contenedores aborda la necesidad de hacer un mejor uso de los recursos informáticos como la necesidad de mantener aplicaciones web cada vez más complejas",
      "description": "¡Descubre todos los secretos de Docker y cómo encaja en el desarrollo de aplicaciones de la mano de Rossana Suarez @roxsross! Docker es una herramienta diseñada para beneficiar tanto a desarrolladores, testers, como devops, en relación a las máquinas, a los entornos en sí donde se ejecutan las aplicaciones software, los procesos de despliegue, etc. En el caso de los desarrolladores, el uso de Docker hace que puedan centrarse en desarrollar su código sin preocuparse de si dicho código funcionará en la máquina en la que se ejecutará. ¡No te lo puedes perder!"
    }
  },
  {
    "name": "Matías Demarchi",
    "photo": "matias.jpg",
    "bio": "Desarrollador full-stack Formando la Comunidad de Programadores de Gualeguay",
    "talk": {
      "title": "Liberarse de las Big Tech",
      "image": "talk-1.png",
      "summary": "Veremos alternativas al ecosistema de Google y Meta. Veremos redes sociales libres y autogestionadas gracias al Fediverso, así como también de las posibilidades de tener nubes privadas o autogestivas. Explicaremos los motivos que dan origen a esta problemática, utilizando un abordaje social, sumando también experiencias personales.",
      "description": ""
    }
  },
  {
    "name": "Gladys Beatriz Martinez",
    "photo": "gladys.jpg",
    "bio": "Observatorio Argentino del Ciberespacio",
    "talk": {
      "title": "La desinformación como arma de combate",
      "image": "talk-1.png",
      "summary": "En un mundo hiperconectado, la abundancia de información conduce a la desinformación. Pero el poder no está en manos de quienes la poseen sino en quienes la difunden, que se convierten en objetivos estratégicos para influir en las decisiones mediante propaganda, desinformación y manipulación.<br>Surge así una incógnita: ¿es el ámbito cognitivo un nuevo escenario de combate?",
      "description": ""
    }
  },
  {
    "name": "Rubén Darío Aybar",
    "photo": "raybar.jpg",
    "bio": "Profesor Universitario - Ciberseguridad TI<br>Consultor de seguridad de TI",
    "talk": {
      "title": "Ciberataques masivos del tipo Denegación Distribuida de Servicios",
      "image": "talk-1.png",
      "summary": "La tecnología avanza vertiginosamente, y junto a ella también las amenazas. En este contexto es imperiosa la necesidad de establecer mecanismos que nos ayuden a evitar que cualquier evento adverso, real o potencial, comprometa la seguridad de nuestros sistemas de información.",
      "description": ""
    }
  },
  {
    "name": "Federico Bustos Reyes",
    "photo": "fico.jpg",
    "bio": "Nadologo, Escritor, Barista",
    "talk": {
      "title": "La IA poniendo en jaque la percepción de la realidad",
      "image": "talk-1.png",
      "summary": "Cómo la Inteligencia Artificial está cambiando nuestra percepción de la realidad y fomentando la proliferación de fake news. Descubre cómo la tecnología de IA, desde deepfakes hasta bots, está influyendo en el paisaje informativo y determinando qué es verdad o no para nosotros.",
      "description": ""
    }
  },
  {
    "name": "Augusto Romero",
    "photo": "augusto.jpg",
    "bio": "FullStack Developer, Freelancer IA",
    "talk": {
      "title": "Usando ChatGPT con TUS PROPIOS Datos",
      "image": "talk-1.png",
      "summary": "Descubre cómo personalizar grandes modelos de lenguaje como ChatGPT usando tus datos a través de LangChain, evidenciando mediante ejemplos prácticos el transformador potencial adaptativo de la inteligencia artificial.",
      "description": ""
    }
  },
  {
    "name": "Matias Miro",
    "photo": "matiasmiro.jpg",
    "bio": "Lic en informática, desarrollador de videojuegos, profesor de desarrollo web en Coderhouse, fundador y presidente de EW GAMING, escritor del libro esports “bienvenidos a nuestro mundo”",
    "talk": {
      "title": "El futuro de la industria de los videojuegos ",
      "image": "talk-1.png",
      "summary": "Aprenderemos a comprender este ecosistema, a encontrar los fundamentos para incursionar laboralmente y también descubrir ramas profesionales para capacitarse, además conoceremos un enfoque internacional de Mercado y fundamentalmente el futuro de una de las industrias de mayor crecimiento de los últimos tiempos.",
      "description": ""
    }
  },
  {
    "name": "Soldan",
    "photo": "soldan.png",
    "bio": "Cyberciruja, hacktivista, profesor de educación primaria y editor en Revista Replay",
    "talk": {
      "title": "Infraestructura Cyberciruja para la comunidad organizada",
      "image": "talk-1.png",
      "summary": "Contra la obsolescencia programada, la oligarquía del datos, los fascistas del byte, comunidades organizadas del software libre levantan sus propios servidores autogestionados; y en Sudamérica lo hacemos con los fierros que tengamos a mano.",
      "description": ""
    }
  },
  {
    "name": "Klaibson Natal Ribeiro Borges",
    "photo": "klaibson.jpg",
    "bio": "Miembro de la comunidad Brasileña de Software Libre desde 2007. Profesor de Administración en la Escuela Técnica de São Paulo, Etec y Colaborador del Proyecto OnlyOffice. Organizador y ponente en diversos eventos de Software Libre (Flisol, Solisc, FISL, Latinoware, FTSL, etc.)",
    "talk": {
      "title": "OnlyOffice - Su Nueva Suíte de Oficina",
      "image": "talk-1.png",
      "summary": "Conocerás la suite ofimática OnlyOffice, que es gratuita y de código abierto, que funciona en la nube, en el escritorio, en el móvil y en el servidor. Muy conocido en Europa, sin embargo, está dando sus primeros pasos en América Latina. También se demostrarán las formas de contribuir al proyecto.",
      "description": ""
    }
  },
  {
    "name": "Carlos Brys",
    "photo": "no-photo.jpg",
    "bio": "Magister en Informática y Computación. Candidato a Doctor en Ciencias de la Computación por la Universidad de Málaga, España. Director de Modernización de la Gestión y Gobierno Electrónico del Gobierno de la Provincia de Misiones.",
    "talk": {
      "title": "GobLin/GNU Linux. El Linux para los gobiernos",
      "image": "talk-1.png",
      "summary": "El objetivo de este proyecto es brindar una solución “todo en uno”, que contenga todas las aplicaciones que una oficina de gobierno pueda necesitar, sin programas innecesarios. Esto facilita a los administradores y los usuarios de TI la instalación y el mantenimiento de la infraestructura informática.",
      "description": ""
    }
  },
  {
    "name": "Gonzalo Mendoza",
    "photo": "gonzalo.png",
    "bio": "Entusiasta, Desarrollador y Tech Leader",
    "talk": {
      "title": "Practicas Agiles en el proceso de Desarrollo de Software ",
      "image": "talk-1.png",
      "summary": "Conversaremos brevemente sobre un conjunto de prácticas enfocadas a potenciar equipos de desarrollo de software con una mirada holistica. Veremos algunos ejemplos concretos sobre las practicas que utilizan algunas de las empresas del sector en sus distintas propuestas de valor. EL Pentagono de desarrollo ágil nos provee de un marco de referencia como guía en la busqueda de la excelencia, aportando una visión estratégica simple con aplicación práctica en los equipos de desarrollo",
      "description": ""
    }
  }
]

data = '';
var speaker_card = document.getElementById("speaker-card");
speakers.sort(() => Math.random() - 0.5);
speakers.forEach((speaker) => {
  data += '<div class="col-6 col-lg-4 mb-4">\n';
  data += '\t<div class="card rounded-2">\n';
  data += '\t\t<div class="card-header text-primary fw-bold">\n';
  data += '\t\t\t<h5 class="card-title mb-2">'+ speaker.name +'</h5>\n';
  data += '\t\t</div>\n';
  data += '\t\t<div class="card-body">\n';
  data += '\t\t\t<div class="row">\n';
  data += '\t\t\t\t<div class="col-4">\n';
  data += '\t\t\t\t\t<img src="assets/images/speakers/photos/'+ speaker.photo +'" class="card-img-top rounded-1" alt="">\n';
  data += '\t\t\t\t</div>\n';
  data += '\t\t\t\t<div class="col-8">\n';
  data += '\t\t\t\t\t<p class="card-bio">'+ speaker.bio +'</p>\n';
  data += '\t\t\t\t</div>\n';
  data += '\t\t\t</div>\n';
  data += '\t\t\t<div class="card-text col-12 my-2">\n';
  data += '\t\t\t\t<h5 class="card-title mb-2">'+ speaker.talk.title +'</h5>\n';
  data += '\t\t\t\t<div class="meta">'+ speaker.talk.summary +'</div>\n';
  data += '\t\t\t</div><!--//card-text-->\n';
  data += '\t\t</div><!--//card-body-->\n';
  data += '\t\t<div class="card-footer">\n';
  //data += '\t\t\t<a href="#modal-speaker-1" data-bs-toggle="modal" data-bs-target="#modal-speaker-1">Ver más &rarr;</a>\n';
  data += '\t\t</div>\n';
  data += '\t</div><!--//card-->';
  data += '</div><!--//col-->';
})  

speaker_card.insertAdjacentHTML('beforeend', data);