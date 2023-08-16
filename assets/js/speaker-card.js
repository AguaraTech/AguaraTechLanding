var speakers = [
  {
    "name": "Rodolfo Alvarez",
    "photo": "rodolfo.jpg",
    "bio": "Software Engineer en EBANX<br>Software Developer en GOIAR<br>Full Stack Developer en ORIGINO",
    "talk": {
      "title": "Zona de promesas (asinc/await)",
      "image": "talk-1.png",
      "summary": "Una mirada a la programación asincrónica.<br>Al no detenerse en espera de resultados, nos permite ejecutar tareas independientes en forma simultanea, optimizando el tiempo y mejorando la capacidad de respuesta.<br>Veremos código con Callbacks, Promesas y funciones asinc/await en Javascript.",
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
      "summary": "Veremos alternativas al ecosistema de Google. Veremos redes sociales libres y autogestionadas gracias al Fediverso, así como también de las posibilidades de tener nubes privadas o autogestivas.",
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
    "photo": "no-photo.jpg",
    "bio": "Profesor Universitario - Ciberseguridad TI<br>Consultor de seguridad de TI",
    "talk": {
      "title": "Ciberataques masivos del tipo Denegación Distribuida de Servicios",
      "image": "talk-1.png",
      "summary": "La tecnología avanza vertiginosamente, y junto a ella también las amenazas. En este contexto es imperiosa la necesidad de establecer mecanismos que nos ayuden a evitar que cualquier evento adverso, real o potencial, comprometa la seguridad de nuestros sistemas de información.",
      "description": ""
    }
  }
]

data = '';
var speaker_card = document.getElementById("speaker-card");
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