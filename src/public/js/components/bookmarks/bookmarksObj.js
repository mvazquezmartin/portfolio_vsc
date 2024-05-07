import { iconPath, imgPath } from '../../assetsPath/assetsPath.js';

const bookmarks = [
  {
    icon: iconPath.W3SCHOOLS,
    title: 'W3 Schools',
    description:
      'Es un recurso en línea ampliamente utilizado para aprender y consultar tecnologías web, incluyendo HTML, CSS, JavaScript, SQL, y muchos otros lenguajes y tecnologías relacionadas con el desarrollo web. Este sitio web sirve como una plataforma educativa y de referencia esencial para estudiantes, desarrolladores web, diseñadores y cualquier persona interesada en aprender o mejorar sus habilidades en programación y diseño web.',
    img: imgPath.W3SCHOOLS,
    link: 'https://www.w3schools.com/',
    id: 'w3schools',
    applied: 'Mi dia a dia.',
  },
  {
    icon: iconPath.ROADMAP,
    title: 'RoadMap',
    description:
      'Sirve como una guía y referencia para aquellos interesados en desarrollar habilidades en campos relacionados con la tecnología y la programación. La plataforma proporciona un conjunto de hojas de ruta (roadmaps) cuidadosamente diseñadas para diversos caminos de aprendizaje en el mundo de la tecnología. Es una valiosa herramienta educativa que facilita la planificación y el seguimiento del aprendizaje en tecnología, proporcionando a los usuarios una visión clara de los pasos que deben seguir para adquirir las habilidades necesarias en su campo de interés y avanzar en sus carreras.',
    img: imgPath.ROADMAP,
    link: 'https://roadmap.sh/',
    id: 'roadmap',
    applied: 'BackEnd',
  },
  {
    icon: iconPath.CANIUSE,
    title: 'Can I use',
    description:
      'Sitio web muy útil para los desarrolladores web y diseñadores que desean conocer la compatibilidad de las diferentes tecnologías web con los navegadores de Internet. El nombre "Can I Use" se traduce al español como "¿Puedo usarlo?" y es precisamente lo que este sitio web te ayuda a determinar.',
    img: imgPath.CANIUSE,
    link: 'https://caniuse.com/',
    id: 'caniuse',
    applied: ' - ',
  },
  {
    icon: iconPath.GRIDLAYOUT,
    title: 'Grid Layoutit',
    description:
      'Es una gran herramienta en línea que se utiliza para crear y personalizar fácilmente diseños de cuadrícula CSS utilizando el modelo de diseño de grid o grilla. Esta herramienta es especialmente útil para diseñadores web y desarrolladores front-end que desean crear diseños de páginas web complejos y responsivos de manera rápida y sin la necesidad de escribir código CSS manualmente.',
    img: imgPath.GRIDLAYOUT,
    link: 'https://grid.layoutit.com/?id=YHHYuph',
    id: 'gridLayout',
    applied: 'Layout principal, Socket.io Chat.',
  },
  {
    icon: iconPath.SWEETALERT2,
    title: 'Sweetalert2',
    description:
      'Es una biblioteca de JavaScript que se utiliza para crear ventanas emergentes personalizadas y atractivas en sitios web y aplicaciones web. Estas ventanas emergentes, también conocidas como modales, se utilizan para mostrar mensajes, alertas, confirmaciones y diálogos interactivos de manera más visual y agradable que las ventanas emergentes estándar del navegador. SweetAlert 2 es fácil de usar y ofrece una amplia gama de opciones de personalización para adaptar las ventanas emergentes al diseño y las necesidades específicas de un proyecto web.',
    img: imgPath.SWEETALERT2,
    link: 'https://sweetalert2.github.io/',
    id: 'sweetalert',
    applied: 'Socket.io Chat.',
  },
  {
    icon: iconPath.BOOTSTRAP,
    title: 'Bootstrap Icon',
    description:
      'Biblioteca de iconos gratuita y de código abierto que se utiliza junto con el framework de diseño web Bootstrap. Esta biblioteca está diseñada para simplificar la incorporación de iconos de alta calidad y estilo en proyectos web y aplicaciones, lo que permite a los desarrolladores y diseñadores mejorar la apariencia y la funcionalidad de sus interfaces de usuario de manera rápida y sencilla.',
    img: imgPath.BOOTSTRAP,
    link: 'https://icons.getbootstrap.com/',
    id: 'bootstrapIcon',
    applied: 'Iconos en el navbar aside y footer.',
  },
  {
    icon: iconPath.ILOVEIMG,
    title: 'I Love Img',
    description:
      'Es una plataforma en línea que brinda una amplia gama de herramientas para editar, mejorar y manipular imágenes de manera eficiente y conveniente. Con esta herramienta, puedes recortar, redimensionar, comprimir y convertir imágenes de forma sencilla, lo que la convierte en una herramienta valiosa para la edición y gestión de imágenes en línea.',
    img: imgPath.ILOVEIMG,
    link: 'https://www.iloveimg.com/es',
    id: 'iLoveImg',
    applied: 'Todas las imagenes del portfolio.',
  },
  {
    icon: iconPath.SVGREPO,
    title: 'SVG Repo',
    description:
      'Es un recurso en línea que proporciona una amplia colección de archivos SVG (Scalable Vector Graphics) de alta calidad y de uso gratuito. Este sitio web sirve como una valiosa herramienta para diseñadores gráficos, desarrolladores web, creadores de contenido y cualquier persona que necesite gráficos vectoriales escalables y personalizables para proyectos en línea y fuera de línea.',
    img: imgPath.SVGREPO,
    link: 'https://www.svgrepo.com/',
    id: 'svgRepo',
    applied: 'Stack.',
  },
  {
    icon: iconPath.README,
    title: 'Readme',
    description:
      'Es un servicio en línea que ayuda a crear documentación para proyectos de software y sitios web de una manera más sencilla y visual. El nombre "ReadMe" sugiere su función principal: ayudar a los desarrolladores y equipos de proyectos a crear documentación clara y legible que los usuarios puedan leer fácilmente.',
    img: imgPath.README,
    link: 'https://readme.so/',
    id: 'readme',
    applied: 'readme_m8b.md, readme_pg.md, readme_chat.md.',
  },
  {
    icon: iconPath.MARKEDJS,
    title: 'Marked Js',
    description:
      'Biblioteca de JavaScript que se utiliza para convertir texto en formato Markdown en HTML. Esta herramienta es especialmente útil para desarrolladores web y escritores que desean ofrecer una experiencia de escritura y lectura enriquecida en sus aplicaciones o sitios web, ya que permite a los usuarios escribir contenido en Markdown y luego renderizarlo de manera efectiva en HTML para que se muestre de forma legible y estilizada en línea.',
    img: imgPath.MARKEDJS,
    link: 'https://marked.js.org/',
    id: 'markedJs',
    applied: 'readme_m8b.md, readme_pg.md, readme_chat.md.',
  },
  {
    icon: iconPath.HIGHLIGHT,
    title: 'HighLight Js',
    description:
      'Biblioteca de JavaScript que se utiliza para resaltar y dar formato de manera elegante al código fuente en un sitio web. Esta herramienta es especialmente útil para desarrolladores y sitios web que desean mejorar la legibilidad y presentación del código en sus páginas web. Highlight.js admite una amplia variedad de lenguajes de programación y formatos, lo que permite a los desarrolladores mostrar código de manera efectiva y atractiva, facilitando la comprensión y el análisis del mismo para los usuarios.',
    img: imgPath.HIGHLIGHT,
    link: 'https://highlightjs.org/',
    id: 'highlightJs',
    applied: 'readme_m8b.md, package.json.',
  },
  {
    icon: iconPath.AOS,
    title: 'AOS',
    description:
      '"Animate On Scroll", es una biblioteca de JavaScript ligera y de código abierto que se utiliza para crear efectos de animación en elementos HTML cuando se desplazan en la pantalla. Esta herramienta es especialmente útil para diseñadores web y desarrolladores front-end que desean mejorar la experiencia del usuario al agregar efectos visuales a medida que los elementos se hacen visibles durante el desplazamiento en una página web.',
    img: imgPath.AOS,
    link: 'https://michalsnik.github.io/aos/',
    id: 'aos',
    applied: ' - ',
  },
  {
    icon: iconPath.GRANIM,
    title: 'Granim.js',
    description:
      'Biblioteca de JavaScript que se utiliza para crear fondos animados y degradados en las páginas web. Esta herramienta permite a los diseñadores web y desarrolladores front-end agregar efectos visuales atractivos y dinámicos a sus sitios web al crear fondos que cambian de color y se animan de manera suave y llamativa.',
    img: imgPath.GRANIM,
    link: 'https://sarcadass.github.io/granim.js/index.html',
    id: 'granimJs',
    applied: ' - ',
  },
  {
    icon: iconPath.REFACTORING,
    title: 'Refactoring Guru',
    description:
      'Sitio web y plataforma educativa que se dedica a proporcionar recursos, tutoriales y ejemplos relacionados con la práctica de la refactorización de código y los patrones de diseño de software. Su principal objetivo es ayudar a los desarrolladores de software y profesionales de la programación a mejorar sus habilidades y conocimientos en la escritura de código limpio, eficiente y mantenible.',
    img: imgPath.REFACTORING,
    link: 'https://refactoring.guru/es',
    id: 'refactoringGuru',
    applied:
      'Patron Strategy para intercambiar la persistencia en tiempo de ejecución en CRUD.',
  },
  {
    icon: iconPath.MOCKAROO,
    title: 'Mockaroo',
    description:
      'Es una plataforma en línea que se utiliza para generar datos de prueba o ficticios de manera realista y personalizada. Esta herramienta es especialmente útil para desarrolladores de software, analistas de datos y profesionales de pruebas de software que necesitan datos de muestra para probar aplicaciones, realizar análisis de datos o realizar pruebas de rendimiento.',
    img: imgPath.MOCKAROO,
    link: 'https://www.mockaroo.com/',
    id: 'mockaroo',
    applied: ' - ',
  },
  {
    icon: iconPath.CODEWARS,
    title: 'Codewars',
    description:
      'Es una plataforma en línea que ofrece desafíos de programación y ejercicios prácticos para ayudar a los desarrolladores a mejorar sus habilidades de codificación y resolución de problemas. Esta plataforma sirve como una comunidad educativa y competitiva donde los programadores pueden aprender, practicar y perfeccionar su arte de la programación a través de desafíos en una variedad de lenguajes de programación y niveles de dificultad.',
    img: imgPath.CODEWARS,
    link: 'https://www.codewars.com/',
    id: 'codewars',
    applied: ' - ',
  },
  {
    icon: iconPath.RAPIDAPI,
    title: 'Rapid API',
    description:
      'Es una plataforma que facilita el acceso a una amplia variedad de API (Interfaces de Programación de Aplicaciones) de terceros. Las API son conjuntos de reglas y protocolos que permiten que diferentes aplicaciones y servicios se comuniquen entre sí. RapidAPI actúa como un mercado o marketplace donde los desarrolladores pueden buscar, encontrar, probar y conectar fácilmente con miles de API diferentes en una sola plataforma.',
    img: imgPath.RAPIDAPI,
    link: 'https://rapidapi.com/',
    id: 'rapidapi',
    applied: ' - ',
  },
  {
    icon: iconPath.CODEPEN,
    title: 'Codepen',
    description:
      'Es una plataforma en línea que brinda a los desarrolladores web y diseñadores una experiencia de desarrollo y colaboración en tiempo real. Con CodePen.io, los usuarios pueden crear, editar y compartir código HTML, CSS y JavaScript de manera interactiva y visual. La plataforma ofrece un editor de código en vivo que muestra los cambios instantáneamente a medida que se escriben, lo que facilita la experimentación y la visualización de resultados en tiempo real.',
    img: imgPath.CODEPEN,
    link: 'https://codepen.io/',
    id: 'codepen',
    applied: ' - ',
  },
  {
    icon: iconPath.GIT,
    title: 'Git Command Explorer',
    description:
      'Es un explorador de comandos de Git que te ayuda a encontrar los comandos adecuados que necesitas sin tener que buscar en la web. Puedes seleccionar lo que quieres hacer con Git y la página te mostrará los comandos correspondientes.',
    img: imgPath.GITEXPLORER,
    link: 'https://gitexplorer.com/',
    id: 'gitexplorer',
    applied: ' - ',
  },
  {
    icon: iconPath.DRAWIO,
    title: 'Draw.io',
    description:
      'Plataforma en línea para la creación de diagramas y gráficos. Ofrece una interfaz intuitiva y herramientas versátiles para diseñar diversos tipos de diagramas, como organigramas, diagramas de flujo, mapas mentales y más. Es una herramienta colaborativa que permite trabajar en tiempo real y compartir fácilmente los proyectos.',
    img: imgPath.DRAWIO,
    link: 'https://app.diagrams.net/',
    id: 'drawio',
    applied: 'Flujo de datos en Strategy Pattern y Cache.',
  },
  {
    icon: iconPath.REGEX,
    title: 'Regex Vis',
    description:
      'Es una herramienta en línea que te permite visualizar y experimentar con expresiones regulares. Puedes definir patrones, seleccionar nodos, distinguir diferentes tipos de caracteres, establecer rangos, agrupar partes del patrón y verificar afirmaciones. En resumen, es una plataforma útil para comprender y probar expresiones regulares.',
    img: imgPath.REGEX,
    link: 'https://regex-vis.com/',
    id: 'regex',
    applied: '-',
  },
  {
    icon: iconPath.WHATUNIT,
    title: 'What Unit?',
    description:
      'Este sitio web podría ser útil para aquellos que estén aprendiendo CSS o que necesiten una guía rápida para tomar decisiones sobre las unidades de medida en sus proyectos de desarrollo web.',
    img: imgPath.WHATUNIT,
    id: 'whatunit',
    applied: '-',
  },
];

const youtubeId = {
  FreeCodeCamp: 'UC8butISFwT-Wl7EV0hUK0BQ',
  MoureDev: 'UCxPD7bsocoAMq8Dj18kmGyQ',
  ManzDev: 'UCgZoKiTvvpEnr1zI6Kv_i7A',
  Midudev: 'UC8LeXCWOalN8SxlrPcG-PaQ',
  Gonzy: 'UCCvaRcYdZCZBrBQVnsUBg5Q',
  Fazt: 'UCX9NJ471o7Wie1DQe94RVIg',
  FaztCode: 'UCMn28O1sQGochG94HdlthbA',
  FireShip: 'UCsBjURrPoezykLs9EqgamOA',
  GreatStack: 'UCkjoHfkLEy7ZT4bA2myJ8xA',
  ProgramadorX: 'UCjXAQ-cayM4mIZmUZKMFW_w',
  EDteam: 'UCP15FVAA2UL-QOcGhy7-ezA',
  HolaMundo: 'UC4FHiPgS1KXkUMx3dxBUtPg',
  Deivchoi: 'UCCPJTSHMeae1Ll9uuG-zlkA',
  Guinxu: 'UCGsVaz3QTFdspLqt79jIuPA',
  NateGentile: 'UC36xmz34q02JYaZYKrMwXng',
  JoeGrand: 'UCqGONXW1ORgz5Y4qK-0JdkQ',
  JoaquinLeal: 'UCu-hqTjimoU5KZzfE_gFDAQ',
};

const channelNotes = {
  freeCodeCamp_org:
    'Este canal siempre es bueno tenerlo en vista. Aporta información valiosa y una gran cantidad de recursos para empezar en el camino de un nuevo lenguaje o desde cero. Tienen canal en español e inglés, aunque para tener en cuenta, el canal en inglés tiene contenido más actualizado.',
  MoureDev_by_Brais_Moure:
    'Moure es un experto ingeniero de software, que comparte su conocimiento y experiencias. Sus cursos que tiene publicado son excelentes, recomiendo ver "Primeros pasos desde cero" antes de empezar con un nuevo lenguaje, otorga un buen panorama de los principios del lenguaje en una hora. Actualmente, lo consumo en modo de postcast cuando transmite en twitch.',
  ManzDev:
    'Envidiable los diseños que construye en el frontend, lo que hace Manz con CSS puro es de admirar. Tiene variedad de videos donde aporta conceptos básicos y fundamentos de CSS, desde etiquetas HTML hasta dibujar un GameBoy. Actualmente, lo consumo en modo postcast cuando transmite en twitch.',
  Programador_X:
    'Xavier con su vasto currículum en grandes empresas, comparte su experiencia de como llego hasta ahí y el camino que siguió. Además creo su academia para formar nuevos programadores. Muy motivador para que uno pueda llegar a las metas deseadas.',
  midudev:
    'Fue unos de los primeros canales en español que conocí cuando empecé a investigar que era ser un desarrollador full stack. Tuve la suerte de toparme con Midu, me despejo mis principales dudas y me motivo a emprender en este viaje de ser programador. Actualmente, lo consumo en modo postcast cuando transmite en twitch.',
  Goncy:
    'Buscando práctica para mejorar mi lógica de programación, me encontré con este gran canal que me encanto como explica y resuelve los desafíos técnicos. Actualmente, lo consumo en modo postcast cuando transmite en twitch.',
  Fazt: 'Con Fazt me mantengo informado de las últimas noticias de informática, además muestra el uso de las nuevas tecnologías o cambios en los lenguajes. Está más enfocado en el contenido backend, por lo que me ayudo mucho a llegar donde estoy ahora.',
  Fazt_Code:
    'FaztCode es el canal secundario de Fazt donde comparte y publica videos extensos creando proyectos académicos con un stack definido. Siempre es bueno ver código de otra persona, y además, con buenas prácticas.',
  Fireship:
    'Canal en inglés, aporta las últimas noticias tecnológicas y también gran variedad de tutoriales. Su serie "... in 100 seconds" le agrega un poco de humor a cada lenguaje que analiza.',
  GreatStack:
    'Canal en inglés. Anteriormente, EazyTutorial, con él aprendí los principios básicos de html y css. Tiene publicado gran variedad de videos haciendo sitios web con esas dos tecnologías, sin ninguna librería o framework, código limpio y sencillo de entender. La serie "JavaScript Tutorial for Beginners" es de mis preferidas.',
  EDteam:
    'EDteam, además de ser un canal de YouTube, tiene una plataforma educativa. Brindan cursos tanto para principiantes como para usuarios más avanzados. Tiene gran cantidad de videos explicando referencias al mundo de la programación como: "¿Qué es la programación orientada a objetos?", "¿Qué es una API?", y muchos más.',
  HolaMundo:
    'Es conocido por ser un canal en español dedicado a la programación y la tecnología. El canal se centra en la creación de contenido educativo y tutoriales sobre una amplia variedad de temas relacionados con la informática y el desarrollo de software. Estos temas pueden incluir programación, desarrollo web, aplicaciones móviles, lenguajes de programación, herramientas de desarrollo y más.',
  deivchoi:
    'Al canal de Deivchoi lo conocí cuando estaba investigando sobre el mundo de desarrollo web, dio la casualidad que cuando empezó a compartir videos, él estaba comenzando sus estudios, compartía sus errores y aciertos en el aprendizaje. Su historia y como dio un cambio de rumbo a su vida, me hizo sentir identificado.',
  Guinxu:
    'Aunque no sea dedicado a la programación, es un canal que consumo, ya que Guinxu es un apasionado en lo que hace. Explica como se logran ciertos efectos en los videojuegos, que métodos utilizar para optimizar el rendimiento y mucho más.',
  Nate_Gentile:
    'Siempre tuve como hobby la tecnología y en especial las computadoras. Nate sube gran cantidad de contenido armando PC con los últimos componentes, modding o noticias del mundo tech.',
  Joe_Grand:
    'Es un ingeniero electrónico, inventor y hacker de hardware estadounidense, conocido en la comunidad hacker como Kingpin. Aunque no es muy activo en Youtube, los videos que tiene son impresionante como indaga y llega a lo más profundo para corromper el sistema de seguridad de un dispositivo.',
  Joaquin_Leal:
    'Cuando estuve trabajando en una empresa que construía rig de minería de ETH, había un problema con una marca de placa de video que rendía muchos menos de lo esperado. Investigando como solucionarlo, llegue al canal de Joaquin que resolvía la problemática. Desde entonces, me enamoré de su proyecto y sigo día a día sus avances.',
};

export { bookmarks, youtubeId, channelNotes };
