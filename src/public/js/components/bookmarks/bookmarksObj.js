import { iconPath, imgPath } from "../../assetsPath/assetsPath.js";

const bookmarks = [
  {
    icon: iconPath.W3SCHOOLS,
    title: "W3 Schools",
    description:
      "Es un recurso en línea ampliamente utilizado para aprender y consultar tecnologías web, incluyendo HTML, CSS, JavaScript, SQL, y muchos otros lenguajes y tecnologías relacionadas con el desarrollo web. Este sitio web sirve como una plataforma educativa y de referencia esencial para estudiantes, desarrolladores web, diseñadores y cualquier persona interesada en aprender o mejorar sus habilidades en programación y diseño web.",
    img: imgPath.W3SCHOOLS,
    link: "https://www.w3schools.com/",
    id: "w3schools",
    applied: "Mi dia a dia.",
  },
  {
    icon: iconPath.ROADMAP,
    title: "RoadMap",
    description:
      "Sirve como una guía y referencia para aquellos interesados en desarrollar habilidades en campos relacionados con la tecnología y la programación. La plataforma proporciona un conjunto de hojas de ruta (roadmaps) cuidadosamente diseñadas para diversos caminos de aprendizaje en el mundo de la tecnología. Es una valiosa herramienta educativa que facilita la planificación y el seguimiento del aprendizaje en tecnología, proporcionando a los usuarios una visión clara de los pasos que deben seguir para adquirir las habilidades necesarias en su campo de interés y avanzar en sus carreras.",
    img: imgPath.ROADMAP,
    link: "https://roadmap.sh/",
    id: "roadmap",
    applied: "BackEnd",
  },
  {
    icon: iconPath.GRIDLAYOUT,
    title: "Grid Layoutit",
    description:
      "Es una gran herramienta en línea que se utiliza para crear y personalizar fácilmente diseños de cuadrícula CSS utilizando el modelo de diseño de grid o grilla. Esta herramienta es especialmente útil para diseñadores web y desarrolladores front-end que desean crear diseños de páginas web complejos y responsivos de manera rápida y sin la necesidad de escribir código CSS manualmente.",
    img: imgPath.GRIDLAYOUT,
    link: "https://grid.layoutit.com/?id=YHHYuph",
    id: "gridLayout",
    applied: "Layout principal, Socket.io Chat.",
  },
  {
    icon: iconPath.SWEETALERT2,
    title: "Sweetalert2",
    description:
      "Es una biblioteca de JavaScript que se utiliza para crear ventanas emergentes personalizadas y atractivas en sitios web y aplicaciones web. Estas ventanas emergentes, también conocidas como modales, se utilizan para mostrar mensajes, alertas, confirmaciones y diálogos interactivos de manera más visual y agradable que las ventanas emergentes estándar del navegador. SweetAlert 2 es fácil de usar y ofrece una amplia gama de opciones de personalización para adaptar las ventanas emergentes al diseño y las necesidades específicas de un proyecto web.",
    img: imgPath.SWEETALERT2,
    link: "https://sweetalert2.github.io/",
    id: "sweetalert",
    applied: "Socket.io Chat.",
  },
  {
    icon: iconPath.BOOTSTRAP,
    title: "Bootstrap Icon",
    description:
      "Biblioteca de iconos gratuita y de código abierto que se utiliza junto con el framework de diseño web Bootstrap. Esta biblioteca está diseñada para simplificar la incorporación de iconos de alta calidad y estilo en proyectos web y aplicaciones, lo que permite a los desarrolladores y diseñadores mejorar la apariencia y la funcionalidad de sus interfaces de usuario de manera rápida y sencilla.",
    img: imgPath.BOOTSTRAP,
    link: "https://icons.getbootstrap.com/",
    id: "bootstrapIcon",
    applied: "Iconos en el navbar aside y footer.",
  },
  {
    icon: iconPath.ILOVEIMG,
    title: "I Love Img",
    description:
      "Es una plataforma en línea que brinda una amplia gama de herramientas para editar, mejorar y manipular imágenes de manera eficiente y conveniente. Con esta herramienta, puedes recortar, redimensionar, comprimir y convertir imágenes de forma sencilla, lo que la convierte en una herramienta valiosa para la edición y gestión de imágenes en línea.",
    img: imgPath.ILOVEIMG,
    link: "https://www.iloveimg.com/es",
    id: "iLoveImg",
    applied: "Todas las imagenes del portfolio.",
  },
  {
    icon: iconPath.SVGREPO,
    title: "SVG Repo",
    description:
      "Es un recurso en línea que proporciona una amplia colección de archivos SVG (Scalable Vector Graphics) de alta calidad y de uso gratuito. Este sitio web sirve como una valiosa herramienta para diseñadores gráficos, desarrolladores web, creadores de contenido y cualquier persona que necesite gráficos vectoriales escalables y personalizables para proyectos en línea y fuera de línea.",
    img: imgPath.SVGREPO,
    link: "https://www.svgrepo.com/",
    id: "svgRepo",
    applied: "Stack.",
  },
  {
    icon: iconPath.MARKEDJS,
    title: "Marked Js",
    description:
      "Biblioteca de JavaScript que se utiliza para convertir texto en formato Markdown en HTML. Esta herramienta es especialmente útil para desarrolladores web y escritores que desean ofrecer una experiencia de escritura y lectura enriquecida en sus aplicaciones o sitios web, ya que permite a los usuarios escribir contenido en Markdown y luego renderizarlo de manera efectiva en HTML para que se muestre de forma legible y estilizada en línea.",
    img: imgPath.MARKEDJS,
    link: "https://marked.js.org/",
    id: "markedJs",
    applied: "readme_m8b.md, readme_pg.md, readme_chat.md.",
  },
  {
    icon: iconPath.HIGHLIGHT,
    title: "HighLight Js",
    description:
      "Biblioteca de JavaScript que se utiliza para resaltar y dar formato de manera elegante al código fuente en un sitio web. Esta herramienta es especialmente útil para desarrolladores y sitios web que desean mejorar la legibilidad y presentación del código en sus páginas web. Highlight.js admite una amplia variedad de lenguajes de programación y formatos, lo que permite a los desarrolladores mostrar código de manera efectiva y atractiva, facilitando la comprensión y el análisis del mismo para los usuarios.",
    img: imgPath.HIGHLIGHT,
    link: "https://highlightjs.org/",
    id: "highlightJs",
    applied: "readme_m8b.md.",
  },
  {
    icon: iconPath.AOS,
    title: "AOS",
    description:
      '"Animate On Scroll", es una biblioteca de JavaScript ligera y de código abierto que se utiliza para crear efectos de animación en elementos HTML cuando se desplazan en la pantalla. Esta herramienta es especialmente útil para diseñadores web y desarrolladores front-end que desean mejorar la experiencia del usuario al agregar efectos visuales a medida que los elementos se hacen visibles durante el desplazamiento en una página web.',
    img: imgPath.AOS,
    link: "https://michalsnik.github.io/aos/",
    id: "aos",
    applied: " - ",
  },
  {
    icon: iconPath.GRANIM,
    title: "Granim.js",
    description:
      "Biblioteca de JavaScript que se utiliza para crear fondos animados y degradados en las páginas web. Esta herramienta permite a los diseñadores web y desarrolladores front-end agregar efectos visuales atractivos y dinámicos a sus sitios web al crear fondos que cambian de color y se animan de manera suave y llamativa.",
    img: imgPath.GRANIM,
    link: "https://sarcadass.github.io/granim.js/index.html",
    id: "granimJs",
    applied: " - ",
  },
  {
    icon: iconPath.REFACTORING,
    title: "Refactoring Guru",
    description:
      "Sitio web y plataforma educativa que se dedica a proporcionar recursos, tutoriales y ejemplos relacionados con la práctica de la refactorización de código y los patrones de diseño de software. Su principal objetivo es ayudar a los desarrolladores de software y profesionales de la programación a mejorar sus habilidades y conocimientos en la escritura de código limpio, eficiente y mantenible.",
    img: imgPath.REFACTORING,
    link: "https://refactoring.guru/es",
    id: "refactoringGuru",
    applied:
      "Patron Strategy para intercambiar la persistencia en tiempo de ejecución en inventario.",
  },
  {
    icon: iconPath.MOCKAROO,
    title: "Mockaroo",
    description:
      "Es una plataforma en línea que se utiliza para generar datos de prueba o ficticios de manera realista y personalizada. Esta herramienta es especialmente útil para desarrolladores de software, analistas de datos y profesionales de pruebas de software que necesitan datos de muestra para probar aplicaciones, realizar análisis de datos o realizar pruebas de rendimiento.",
    img: imgPath.MOCKAROO,
    link: "https://www.mockaroo.com/",
    id: "mockaroo",
    applied: " - ",
  },
  {
    icon: iconPath.CODEWARS,
    title: "Codewars",
    description:
      "Es una plataforma en línea que ofrece desafíos de programación y ejercicios prácticos para ayudar a los desarrolladores a mejorar sus habilidades de codificación y resolución de problemas. Esta plataforma sirve como una comunidad educativa y competitiva donde los programadores pueden aprender, practicar y perfeccionar su arte de la programación a través de desafíos en una variedad de lenguajes de programación y niveles de dificultad.",
    img: imgPath.CODEWARS,
    link: "https://www.codewars.com/",
    id: "codewars",
    applied: " - ",
  },
];

const youtubeId = {
  FreeCodeCamp: "UC8butISFwT-Wl7EV0hUK0BQ",
  MoureDev: "UCxPD7bsocoAMq8Dj18kmGyQ",
  ManzDev: "UCgZoKiTvvpEnr1zI6Kv_i7A",
  ProgramadorX: "UCjXAQ-cayM4mIZmUZKMFW_w",
  Midudev: "UC8LeXCWOalN8SxlrPcG-PaQ",
  Fazt: "UCX9NJ471o7Wie1DQe94RVIg",
  FaztCode: "UCMn28O1sQGochG94HdlthbA",
  FireShip: "UCsBjURrPoezykLs9EqgamOA",
  GreatStack: "UCkjoHfkLEy7ZT4bA2myJ8xA",
  EDteam: "UCP15FVAA2UL-QOcGhy7-ezA",
  HolaMundo: "UC4FHiPgS1KXkUMx3dxBUtPg",
  Deivchoi: "UCCPJTSHMeae1Ll9uuG-zlkA",
  Guinxu: "UCGsVaz3QTFdspLqt79jIuPA",
  NateGentile: "UC36xmz34q02JYaZYKrMwXng",
  JoaquinLeal: "UCu-hqTjimoU5KZzfE_gFDAQ",
};

export { bookmarks, youtubeId };
