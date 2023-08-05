import { certificadoPath, iconPath } from "../../assetsPath/assetsPath.js";

export const stacks = [
  {
    title: "HTML5",
    image: iconPath.HTML,
    shortDescription:
      "Lenguaje de marcado estándar utilizado para crear y estructurar contenido en la web. Con HTML, los elementos y etiquetas se utilizan para definir la apariencia y la organización de una página web, desde encabezados y párrafos hasta imágenes y enlaces. Es la base fundamental de cualquier sitio web y permite la presentación de texto, imágenes, videos y otros tipos de contenido en los navegadores web.",
    certificado: certificadoPath.DESARROLO_WEB,
    linkCertificado: certificadoPath.DESARROLO_WEB_LINK,
    path: "Inicio > DesarrolloWeb > Html5",
    id: "html5",
  },
  {
    title: "CSS",
    image: iconPath.CSS,
    shortDescription:
      "Hoja de estilos utilizado para dar formato y diseño a páginas web escritas en HTML. Con CSS, se pueden controlar los colores, fuentes, márgenes, espaciado y otros aspectos visuales de los elementos HTML. Permite separar la estructura del contenido de su presentación, lo que facilita la creación de diseños coherentes y flexibles, lo que contribuye a una experiencia visualmente atractiva para los visitantes.",
    certificado: certificadoPath.DESARROLO_WEB,
    linkCertificado: certificadoPath.DESARROLO_WEB_LINK,
    path: "Inicio > DesarrolloWeb > CSS",
    id: "css",
  },
  {
    title: "SASS",
    image: iconPath.SASS,
    shortDescription:
      "Es un preprocesador de CSS que extiende la funcionalidad de este lenguaje de estilo. Proporciona características adicionales como variables, anidamiento de selectores, mixins y funciones, lo que facilita la escritura y el mantenimiento del código CSS. Sass es una herramienta que mejora la eficiencia y la organización del código CSS, brindando mayor flexibilidad y reutilización de estilos.",
    certificado: certificadoPath.DESARROLO_WEB,
    linkCertificado: certificadoPath.DESARROLO_WEB_LINK,
    path: "Inicio > DesarrolloWeb > CSS > Sass",
    id: "sass",
  },
  {
    title: "BOOTSTRAP",
    image: iconPath.BOOTSTRAP,
    shortDescription:
      "Librería web de código abierto que simplifica la creación de sitios responsivos y modernos. Con estilos predefinidos, componentes y herramientas, permite desarrollar interfaces atractivas y adaptativas de manera eficiente. Basado en HTML, CSS y JavaScript, es flexible, compatible con diferentes dispositivos y acelera el proceso de desarrollo, mejorando la experiencia del usuario.",
    certificado: certificadoPath.DESARROLO_WEB,
    linkCertificado: certificadoPath.DESARROLO_WEB_LINK,
    path: "Inicio > DesarrolloWeb > Library > Bootstrap",
    id: "bootstrap",
  },
  {
    title: "JAVASCRIPT",
    image: iconPath.JAVASCRIPT,
    shortDescription:
      "Lenguaje dinámico y de alto nivel, ampliamente utilizado en la web. Es orientado a objetos, basado en prototipos y compatible con todos los navegadores modernos. Junto con HTML y CSS, es esencial para construir sitios web. Ofrece una API para manipular texto, arrays, fechas y expresiones regulares.",
    certificado: certificadoPath.JAVASCRIPT,
    linkCertificado: certificadoPath.JAVASCRIPT_LINK,
    path: "Inicio > DesarrolloWeb > JavaScript",
    id: "javaScript",
  },
  {
    title: "REACT JS",
    image: iconPath.REACTJS,
    shortDescription:
      "Librería de JavaScript de código abierto que permite construir interfaces de usuario interactivas y reactivas. Utiliza componentes reutilizables para representar diferentes partes de la interfaz y utiliza un enfoque basado en el estado para actualizar eficientemente los elementos afectados, brindando así una experiencia de desarrollo rápida y eficiente.",
    certificado: certificadoPath.REACTJS,
    linkCertificado: certificadoPath.REACTJS_LINK,
    path: "Inicio > DesarrolloWeb > ReactJs",
    id: "reactJs",
  },
  {
    title: "FIREBASE",
    image: iconPath.FIREBASE,
    shortDescription:
      "Plataforma en la nube desarrollada por Google que ofrece una variedad de servicios y herramientas para el desarrollo de aplicaciones web y móviles. Proporciona bases de datos en tiempo real, autenticación de usuarios, almacenamiento de archivos, notificaciones push y más, simplificando así la creación de aplicaciones escalables, seguras y en tiempo real.",
    certificado: certificadoPath.REACTJS,
    linkCertificado: certificadoPath.REACTJS_LINK,
    path: "Inicio > DesarrolloWeb > FireBase",
    id: "firebase",
  },
  {
    title: "NODE JS",
    image: iconPath.NODEJS,
    shortDescription:
      "Entorno de ejecución de JavaScript basado en el motor V8 de Google Chrome. Permite ejecutar código JavaScript en el lado del servidor, lo que posibilita la construcción de aplicaciones web y de red escalables y de alto rendimiento. Node.js utiliza un enfoque basado en eventos y no bloqueante, lo que permite manejar múltiples solicitudes de manera eficiente y facilita la creación de servidores rápidos y escalables.",
    certificado: certificadoPath.BACKEND,
    linkCertificado: certificadoPath.BACKEND_LINK,
    path: "Inicio > DesarrolloWeb > BackEnd > NodeJs",
    id: "nodeJs",
  },
  {
    title: "EXPRES JS",
    image: iconPath.EXPRESS,
    shortDescription:
      "Framework de NodeJs minimalista y flexible para construir aplicaciones web. Proporciona una capa de abstracción sobre el manejo de rutas, solicitudes y respuestas, facilitando la creación de API RESTful y sitios web. Con una sintaxis sencilla y una amplia gama de complementos disponibles, Express.js permite desarrollar de manera eficiente aplicaciones web rápidas y escalables, brindando control total sobre el ciclo de vida de las solicitudes.",
    certificado: certificadoPath.BACKEND,
    linkCertificado: certificadoPath.BACKEND_LINK,
    path: "Inicio > DesarrolloWeb > BackEnd > Framework > ExpressJs",
    id: "expressJs",
  },
  {
    title: "MONGO DB",
    image: iconPath.MONGO,
    shortDescription:
      "Base de datos NoSQL de código abierto y orientada a documentos. Almacena datos en forma de documentos flexibles similares a JSON, lo que permite un almacenamiento y consulta rápidos y escalables. MongoDB es altamente flexible y se adapta fácilmente a cambios en la estructura de los datos. Ofrece una fácil escalabilidad horizontal y proporciona características como replicación, fragmentación y tolerancia a fallos.",
    certificado: certificadoPath.BACKEND,
    linkCertificado: certificadoPath.BACKEND_LINK,
    path: "Inicio > DesarrolloWeb > BackEnd > DataBase > MongoDb",
    id: "mongoDb",
  },
  {
    title: "POSTMAN",
    image: iconPath.POSTMAN,
    shortDescription:
      "Herramienta de colaboración y desarrollo de API que simplifica el proceso de prueba, documentación y consumo de servicios web. Permite enviar y recibir solicitudes HTTP, realizar pruebas automatizadas, crear colecciones de API, generar documentación interactiva y colaborar con equipos de desarrollo.",
    certificado: certificadoPath.BACKEND,
    linkCertificado: certificadoPath.BACKEND_LINK,
    path: "Inicio > DesarrolloWeb > BackEnd > Postman",
    id: "postman",
  },
];
