import { Project } from './project.model';

    /**
     * FUENTE ÚNICA DE VERDAD de los proyectos de Granitos de Arena Colombia.
     *
     * Los arreglos de fotos, testimonios, línea de tiempo y prensa están vacíos:
     * las secciones que los muestran tienen *ngIf, así que no se renderizan hasta
     * que agregues contenido. Agregar una foto es una línea, y la sección aparece sola.
     */
    export const PROJECTS: Project[] = [
    {
        id: 1,
        slug: 'manature-la-guajira',
        name: 'Mañature, La Guajira',
        year: '2024',
        location: 'Mañature, La Guajira',
        region: 'La Guajira',
        line: 'Nutrición',
        tag: 'Nutrición y educación alimentaria',
        status: 'finalizado',
        imageClass: 'project-guajira',

        summary:
        'El primer proyecto de la fundación: mercados y educación alimentaria para 270 familias.',
        impact: '270 familias acompañadas',

        challenge:
        'En La Guajira la ayuda alimentaria llega en jornadas puntuales, se agota y el ciclo ' +
        'vuelve a empezar. Al conversar con las familias de Mañature entendimos que entregar ' +
        'mercados sin acompañar el cómo usarlos y conservarlos resolvía una semana, no un año.',
        approach:
        'Combinamos la entrega con talleres de educación alimentaria para padres e hijos al ' +
        'mismo tiempo, para que lo aprendido se sostuviera en casa. Los mercados se armaron con ' +
        'productos de consumo habitual en la zona, no con lo que era fácil conseguir en Bogotá.',
        outcome:
        'Acompañamos a 270 familias. Más allá de la cifra, el componente formativo nos dejó ' +
        'la metodología que después replicamos en Cazucá y en Córdoba: nunca entregar sin ' +
        'acompañar, y nunca decidir el contenido sin preguntar.',

        metrics: [
        { value: '270', label: 'mercados entregados' },
        { value: '270', label: 'familias acompañadas' },
        ],

        photos: [],
        testimonials: [],
        partners: [],
        timeline: [],
        press: [],
    },

    {
        id: 2,
        slug: 'altos-de-cazuca',
        name: 'Altos de Cazucá',
        year: 'Junio 2025',
        location: 'Altos de Cazucá, Soacha',
        region: 'Cundinamarca',
        line: 'Educación',
        tag: 'Educación, lectura y recreación',
        status: 'finalizado',
        imageClass: 'project-soacha',

        summary:
        'Kits escolares, dotación de libros y material para un centro de aprendizaje, en una ' +
        'jornada recreativa con los niños del sector.',
        impact: '300 kits escolares y un centro de aprendizaje dotado',

        challenge:
        'El costo de los útiles escolares es una barrera silenciosa: no saca al niño del colegio ' +
        'de un día para otro, pero sí lo deja sin poder participar en clase. En Altos de Cazucá ' +
        'a eso se suma la falta de espacios donde estudiar fuera del horario escolar.',
        approach:
        'No hicimos solo una entrega. Montamos la jornada alrededor de actividades recreativas, ' +
        'para que los niños recibieran el kit en un contexto de juego y no de asistencia, y ' +
        'dejamos instalada una dotación de libros y material en un centro de aprendizaje del ' +
        'sector: algo que sigue ahí cuando nosotros ya no estamos.',
        outcome:
        'Entregamos 300 kits escolares y dotamos un centro de aprendizaje con libros y material ' +
        'didáctico. Fue la jornada que consolidó nuestra red de voluntarios.',

        metrics: [
        { value: '250', label: 'kits escolares entregados' },
        { value: '1', label: 'centro de aprendizaje dotado con libros y material' },
        ],

        photos: [],
        testimonials: [],
        partners: [],
        timeline: [],
        press: [],
    },

    {
        id: 3,
        slug: 'navidad-con-proposito',
        name: 'Navidad con Propósito',
        year: 'Diciembre 2025',
        location: 'Altos de Cazucá, Soacha',
        region: 'Cundinamarca',
        line: 'Ayuda humanitaria',
        tag: 'Jornada navideña y alianza empresarial',
        status: 'recurrente',
        imageClass: 'project-navidad',
        summary:
        'Nuestra jornada de mayor alcance, junto a los empresarios de la Plaza de Paloquemao: ' +
        'mercados, ropa, juguetes y kits para 500 familias.',
        impact: '500 familias en un solo día',

        challenge:
        'Diciembre concentra gasto familiar en un mes en el que muchos hogares de Cazucá ya ' +
        'vienen ajustados desde el segundo semestre. Y es cuando más jornadas se cruzan entre ' +
        'organizaciones, con el riesgo de que unas familias reciban tres veces y otras ninguna.',
        approach:
        'Sumamos a los empresarios de la Plaza de Paloquemao, que aportaron el volumen que una ' +
        'fundación joven no consigue sola, y coordinamos con líderes de barrio la lista de ' +
        'familias para evitar duplicidades y priorizar hogares que no habían recibido apoyo ese año.',
        outcome:
        'Cuatro tipos de entrega para 500 familias en una sola jornada. Nos demostró que la ' +
        'alianza con el sector empresarial multiplica el alcance sin diluir el criterio: la ' +
        'selección de familias siguió siendo nuestra y de los líderes comunitarios.',

        metrics: [
        { value: '500', label: 'mercados' },
        { value: '500', label: 'kits escolares' },
        { value: '500', label: 'juguetes' },
        { value: '500', label: 'mudas de ropa' },
        ],

        photos: [],
        testimonials: [],
        partners: [
        {
            name: 'Empresarios de la Plaza de Paloquemao',
            kind: 'Aliado donante',
        },
        ],
        timeline: [],
        press: [],
    },

    {
        id: 4,
        slug: 'coqui-nuqui',
        name: 'Coquí, Nuquí',
        year: '2025 – Actualidad',
        location: 'Coquí, Nuquí, Chocó',
        region: 'Chocó',
        line: 'Educación',
        tag: 'Educación y liderazgo juvenil',
        status: 'activo',
        imageClass: 'project-nuqui',

        summary:
        'Con Mochileros x Colombia: transformación de espacios educativos e intercambio ' +
        'cultural en el Pacífico chocoano. Nuestro primer proyecto de largo plazo.',
        impact: '+100 estudiantes, docentes y familias',

        challenge:
        'Coquí es una comunidad del Pacífico chocoano sin acceso por vía terrestre. Los espacios ' +
        'educativos existen, pero el deterioro físico y el aislamiento reducen lo que la escuela ' +
        'puede ofrecer, y los jóvenes crecen sin ver de cerca las rutas que existen fuera del territorio.',
        approach:
        'No llegamos con un proyecto cerrado. Trabajamos con Mochileros x Colombia, que ya tenía ' +
        'relación con la comunidad, y construimos la agenda con docentes y familias. El intercambio ' +
        'cultural va en dos direcciones: los jóvenes que viajan desde Bogotá aprenden tanto como enseñan.',
        outcome:
        'Es nuestra primera intervención sostenida en el tiempo en lugar de una jornada puntual. ' +
        'Ese cambio de escala es, para nosotros, el resultado más importante del proyecto.',
        nextStep:
        'En octubre de 2026 viajamos al Chocó con Mochileros x Colombia para un festival en el ' +
        'territorio. Estamos buscando financiación para dos frentes: reparar la escuela de Coquí ' +
        'y traer a jóvenes chocoanos a Bogotá a conocer el Congreso, la Casa de Nariño, ' +
        'universidades y fundaciones.',

        metrics: [
        { value: '+100', label: 'estudiantes, docentes y familias' },
        ],

        photos: [],
        testimonials: [],
        partners: [
        {
            name: 'Mochileros x Colombia',
            url: 'https://www.mochileros.co/',
            kind: 'Aliado operativo',
        },
        ],
        timeline: [],
        press: [],
    },

    {
        id: 5,
        slug: 'inundacion-cordoba',
        name: 'Emergencia por inundación en Córdoba',
        year: '2026',
        location: 'Córdoba',
        region: 'Córdoba',
        line: 'Ayuda humanitaria',
        tag: 'Respuesta a emergencia',
        status: 'finalizado',
        imageClass: 'project-cordoba',

        summary:
        'Respuesta rápida ante una inundación: mercados, productos de higiene y agua potable ' +
        'para más de 400 personas.',
        impact: '+400 personas atendidas',

        challenge:
        'Una inundación deja a las familias sin lo básico de un día para otro, y el agua potable ' +
        'suele ser lo primero que falta y lo último que llega. La ayuda institucional existe, ' +
        'pero tarda, y los primeros días son los que más pesan.',
        approach:
        'Priorizamos las tres necesidades que no admiten espera en una inundación: alimento, ' +
        'higiene y agua potable. Fue nuestra primera respuesta de emergencia y nos obligó a ' +
        'movernos en días, no en meses.',
        outcome:
        'Atendimos a más de 400 personas con mercados, productos de higiene personal y agua ' +
        'potable. El proyecto abrió nuestra línea de respuesta humanitaria a emergencias.',

        metrics: [
        { value: '+400', label: 'personas atendidas' },
        { value: '3', label: 'frentes atendidos: alimento, higiene y agua potable' },
        ],

        photos: [],
        testimonials: [],
        partners: [],
        timeline: [],
        press: [],
    },

    {
        id: 6,
        slug: 'pragma-radar',
        name: 'Pragma Radar',
        year: '2025 – Actualidad',
        location: 'Colombia',
        region: 'Nacional',
        line: 'Participación ciudadana',
        tag: 'Tecnología cívica',
        status: 'activo',
        imageClass: 'project-pragma',

        summary:
        'Nuestra plataforma civic-tech: perfiles de todos los candidatos presidenciales de 2026, ' +
        'con sus propuestas organizadas por tema y seguimiento ciudadano al cumplimiento.',
        impact: '+10.000 visualizaciones',

        challenge:
        'La información política existe, pero está dispersa, escrita en lenguaje técnico y sin ' +
        'seguimiento en el tiempo. Un votante joven que quiera comparar en serio a dos candidatos ' +
        'tiene que leer dos planes de gobierno de cientos de páginas. Y una vez pasan las ' +
        'elecciones, nadie tiene cómo verificar si lo prometido se cumplió.',
        approach:
        'Perfilamos a todos los candidatos presidenciales de 2026 con biografía, trayectoria y ' +
        'propuestas, y organizamos cada propuesta por tema para que se puedan comparar lado a ' +
        'lado: ciencia y tecnología, economía, educación, empleo, energía, equidad social, ' +
        'infraestructura y movilidad, política exterior, medio ambiente, paz, salud y seguridad. ' +
        'Todo con enlace a la fuente pública. A eso sumamos encuestas ciudadanas sobre temas ' +
        'coyunturales y un seguimiento tipo semáforo al cumplimiento de las promesas.',
        outcome:
        'Más de 10.000 visualizaciones y cobertura completa de la contienda presidencial. ' +
        'Trabajamos con organizaciones de monitoreo electoral, entre ellas un observatorio ' +
        'electoral nacional financiado por la Unión Europea.',
        nextStep:
        'Consolidar el componente de veeduría: pasar de informar antes del voto a hacer ' +
        'seguimiento después, con énfasis en legislación, conectividad, servicios públicos y tecnología.',

        metrics: [
        { value: '+10.000', label: 'visualizaciones', method: 'Analítica de la plataforma' },
        { value: '12', label: 'temas por los que se comparan las propuestas' },
        { value: '3', label: 'estados de seguimiento: incumplida, avance parcial, cumplida' },
        ],

        photos: [],
        testimonials: [],
        partners: [
        {
            name: 'Fundación Colombia 2050 - Candidateados',
            url: 'https://www.fundacioncolombia2050.org/',
            kind: 'Alianza de monitoreo electoral',
        },
        ],
        timeline: [],
        press: [],
    },

    {
        id: 7,
        slug: 'encuentro-liderazgo-politico',
        name: 'Encuentro de liderazgo político',
        year: '2025',
        location: 'Universidad de los Andes, Bogotá',
        region: 'Bogotá',
        line: 'Participación ciudadana',
        tag: 'Diálogo entre jóvenes y actores políticos',
        status: 'finalizado',
        imageClass: 'project-liderazgo',

        summary:
        'Un espacio de diálogo directo entre jóvenes y siete figuras de la política nacional, ' +
        'de distintas orillas.',
        impact: 'Siete figuras políticas en diálogo abierto con jóvenes',

        challenge:
        'Los jóvenes son el grupo del que más se habla en campaña y con el que menos se conversa. ' +
        'Los espacios que existen suelen ser de una sola vía: el político habla, el joven escucha.',
        approach:
        'Invertimos el formato. En lugar de discursos, preguntas de jóvenes directamente a ' +
        'congresistas, exministros y precandidatos. Y convocamos deliberadamente a figuras de ' +
        'distintas orillas políticas, para que el encuentro fuera un ejercicio de pluralismo y ' +
        'no la validación de una sola postura.',
        outcome:
        'Participaron Catherine Juvinao, Jennifer Pedraza, Andrés Forero, Juan Sebastián Gómez, ' +
        'Héctor Olimpo Espinosa, Mauricio Lizcano y Daniel Palacios. El encuentro confirmó la ' +
        'tesis detrás de Pragma Radar: cuando la información y el acceso están, los jóvenes ' +
        'preguntan con criterio.',

        metrics: [
        { value: '7', label: 'figuras de la política nacional' },
        { value: '1', label: 'espacio plural, con participantes de distintas orillas' },
        ],

        photos: [],
        testimonials: [],
        partners: [
        {
            name: 'Universidad de los Andes',
            kind: 'Sede anfitriona',
        },
        ],
        timeline: [],
        press: [],
    },
];