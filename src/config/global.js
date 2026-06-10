export default {
  global: {
    Name: 'Reconocimiento de la estructura corporal',
    Description:
      'A través del material de formación “Reconocimiento de la estructura corporal”, se da respuesta a necesidades de la región, del sector empresarial y sus trabajadores, frente a la capacitación de mano de obra calificada en el desarrollo y escalado de patrones de prendas de vestir de manera manual y sistematizada.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos de pre-patronaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estructura corporal humana',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de medidas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Concepto de patronaje',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Pasos del patronaje',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Elaboración de básicos infantil',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Elaboración de básicos masculinos',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Elaboración de básicos femeninos',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Alistamiento para elaboración de muestra física 1',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de máquinas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Partes de la máquina',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Alimentación y transporte',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Generaciones de máquinas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Clasificación, nomenclatura, puntas, calibres y usos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo:
              'Relación de elementos de costura: tela, aguja, puntada, hilo, ajuste',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Calibrar',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Desarrollo de operaciones básico para ensamble de piezas',
            hash: 't_2_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/524537_CF2_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Aguja',
      significado:
        'Instrumento puntiagudo utilizado en la máquina de coser para perforar la tela y guiar el hilo.',
    },
    {
      termino: 'Ajuste de tensión',
      significado:
        'Proceso de regulación de la tensión del hilo en la máquina de coser para asegurar puntadas uniformes.',
    },
    {
      termino: 'Alimentación combinada',
      significado:
        'Tipo de alimentación que utiliza tanto el diente como la aguja para mover la tela en una máquina de coser.',
    },
    {
      termino: 'Alimentación oscilante sencilla',
      significado:
        'Tipo de alimentación donde el diente realiza cuatro movimientos (subir, desplazar, descender, regresar) para mover la tela.',
    },
    {
      termino: 'Básicos masculinos y femeninos',
      significado:
        'Patrones base utilizados para crear ropa para hombres y mujeres.',
    },
    {
      termino: 'Cadeneta sencilla',
      significado:
        'Tipo de puntada que utiliza un solo hilo, formando una cadena en la parte inferior de la tela.',
    },
    {
      termino: 'Caja bobina',
      significado:
        'Componente de la máquina de coser que contiene la bobina de hilo inferior.',
    },
    {
      termino: 'Clasificación de medidas',
      significado:
        'Organización y categorización de las diferentes medidas corporales utilizadas en el diseño de patrones.',
    },
    {
      termino: 'Control de pedal',
      significado:
        'Habilidad de manejar la velocidad y el arranque/parada de la máquina de coser mediante el pedal.',
    },
    {
      termino: 'Convenciones',
      significado:
        'Reglas y prácticas estándar que se aplican en el diseño y elaboración de patrones.',
    },
    {
      termino: 'Cuadros de tallas',
      significado:
        'Tablas que contienen las medidas estándar para diferentes tallas de ropa.',
    },
    {
      termino: 'Doble despunte',
      significado:
        'Puntada formada por dos líneas paralelas de costura, común en la serie 300.',
    },
    {
      termino: 'Doble transporte',
      significado:
        'Sistema de alimentación que utiliza tanto el pie prensatelas como los dientes inferiores para mover la tela.',
    },
    {
      termino: 'Enhebrado',
      significado:
        'Proceso de pasar el hilo a través de las guías y el ojo de la aguja en la máquina de coser.',
    },
    {
      termino: 'Estándar',
      significado:
        'Que sirve de patrón, modelo o punto de referencia para medir o valorar cosas de la misma especie.',
    },
    {
      termino: 'Estructura corporal',
      significado:
        'Evaluación y clasificación de las características físicas del cuerpo humano.',
    },
    {
      termino: 'Fileteadora',
      significado:
        'Máquina de coser especializada en realizar costuras de acabado en los bordes de las telas.',
    },
    {
      termino: '<em>Flatseamers</em>',
      significado:
        'Máquina de coser de la serie 600 utilizada para hacer costuras planas.',
    },
    {
      termino: 'Grosor de la aguja',
      significado:
        'Medida del diámetro de la aguja, generalmente indicado en Nm.',
    },
    {
      termino: '<em>Looper</em>',
      significado:
        'Componente de la máquina de coser que forma las puntadas en las máquinas <em>overlock</em> y recubridoras.',
    },
    {
      termino: 'Normatividad',
      significado:
        'Conjunto de reglas y estándares que se siguen al construir cuadros de tallas y patrones.',
    },
    {
      termino: 'Patronaje',
      significado:
        'Proceso de crear patrones de costura a partir de medidas corporales y estándares predefinidos.',
    },
    {
      termino: 'Pre-patronaje',
      significado:
        'Etapa preliminar en el diseño de patrones, que incluye análisis y clasificación de medidas corporales.',
    },
    {
      termino: 'Procedimientos',
      significado:
        'Pasos detallados que se siguen para desarrollar patrones de ropa.',
    },
    {
      termino: 'Sistemas de medidas',
      significado:
        'Conjunto de normas y estándares para tomar y aplicar medidas corporales en el diseño de ropa.',
    },
    {
      termino: 'Talla',
      significado:
        'Expresión normalizada que permite identificar a las personas para el uso de prendas de vestir.',
    },
  ],
  referencias: [
    {
      referencia:
        'Equipo de Desarrollo Curricular, SENA Programa Técnico en Patronaje Industrial de Prendas de Vestir, Centro de Manufactura en Textil y Cuero, Distrito Capital, 2020.',
      link: '',
    },
    {
      referencia:
        'Equipo de Desarrollo Curricular, SENA Programa Tecnólogo en Desarrollo de Colecciones para la Industria de la Moda, 2020.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez, L. y Moncayo, A. (2011). Manual de patronaje básico e interpretación de diseños. Bogotá: SENA, Japan Inernational Cooperation Agency "jica", 2011.',
      link: '',
    },
    {
      referencia:
        'Pulgarín, B. y Ulloa, J. (1998). La evolución de las máquinas y su aplicación en la industria de la confección Colombiana.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000009660',
    },
    {
      referencia:
        'Bonilla Giraldo, C. A. (2016). Diseño de sistema de seguridad para máquinas automáticas de aplicación de insumos de confección y marroquinería (Doctoral disertación).',
      link: 'https://repositorio.unal.edu.co/handle/unal/59082',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Maritza Rodríguez Beltrán',
          cargo: 'Instructora técnica ',
          centro:
            'Centro de Manufactura en Textil y Cuero - Regional Distrito Capital ',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro para La Industria de la Comunicación Gráfica - Regional Distrito Capital ',
        },
        {
          nombre: 'Sandra Paola Morales Paez ',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander ',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
