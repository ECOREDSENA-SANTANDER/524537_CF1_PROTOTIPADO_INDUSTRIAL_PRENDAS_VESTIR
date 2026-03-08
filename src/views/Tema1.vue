<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos de pre-patronaje
    
    p.mb-4 El cuerpo humano es una estructura base que se debe entender para poder interpretar su comportamiento y necesidades de vestuario. Para lo cual es fundamental tener en cuenta los siguientes conceptos:
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-md-7.col-12.bg21.p-4
        .row.justify-content-center.align-items-center
          .col-lg-6
            img.mb-3.w-50(src='@/assets/curso/temas/t1/deco1.svg', alt='')
            h5 Arquitectura del cuerpo
            p Conocimiento e interpretación corporal.
          .col-lg-6
            .row 
              .col-lg-6.col-md-6.col-5
                p.mb-0.der Anatomía
                p.mb-0.der Biomecánica
                p.mb-0.der Morfología
                p.mb-0.der Ergonomía
                p.mb-0.der Antropometría
              .col-lg-6.col-md-6.col-7
                p.mb-0 #[span.texto2 =] &nbsp;&nbsp;&nbsp;&nbsp;Estructura
                p.mb-0 #[span.texto2 =] &nbsp;&nbsp;&nbsp;&nbsp;Movimiento
                p.mb-0 #[span.texto2 =] &nbsp;&nbsp;&nbsp;&nbsp;Geometría
                p.mb-0 #[span.texto2 =] &nbsp;&nbsp;&nbsp;&nbsp;Postura
                p.mb-0 #[span.texto2 =] &nbsp;&nbsp;&nbsp;&nbsp;Medidas

    .bg20.p-4.mb-5
      .row.justify-content-center.mb-4 
        .col-lg-11
          .cajr.p-4
            h4.mb-3.mx-4 División del cuerpo
            p.mb-0.mx-4 Desde la cintura se trabaja una línea imaginaría con el fin de dividir el cuerpo en dos regiones principales.
      .row.justify-content-center
        .col-lg-9
          ImagenInfografica.color-primario.mb-4(data-aos="fade-down")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/t1/imgg.svg', alt='La imagen permite la accesibilidad a la división del cuerpo humano en dos regiones principales, utilizando una línea imaginaria que se traza desde la cintura. Estas regiones son los miembros superiores (cabeza, tronco y extremidades superiores) y los miembros inferiores (extremidades inferiores). La imagen también señala las áreas para las prendas superiores e inferiores, indicando cómo se relacionan estas divisiones anatómicas con el diseño y desarrollo de ropa.')
            .tarjeta.bg13.p-3(x="6%" y="8%" numero="+")
              p.mb-0 Las prendas superiores incluyen una variedad de artículos esenciales en el vestuario diario, como camisetas, blusas, chaquetas, sudaderas, #[em tops], chalecos, etc. Estas prendas varían en estilo, material y diseño, adaptándose a diversas ocasiones y preferencias personales.
            .tarjeta.bg13.p-3(x="85%" y="64%" numero="+")
              p.mb-0 Las prendas inferiores abarcan una variedad de artículos, entre los más comunes se encuentran los pantalones, #[em jeans], faldas, shorts, sudaderas, bermudas, etc. Cada una de estas prendas puede variar en estilo, material y diseño, permitiendo opciones tanto para ocasiones formales como casuales.
        
          

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Anatomía

    p.mb-4 Es la estructura o disposición de los órganos y las partes del cuerpo. Es entonces que la anatomía descriptiva considera el cuerpo humano dividido en:

    SlyderF(columnas="col-lg-3 col-md-6" data-aos="fade-down")
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Cabeza
        .row.justify-content-center.mb-3
          .col-11
            img(src='@/assets/curso/temas/t1/slyder01.svg' alt='')
        p.text-center.mb-0 Cara - cráneo. 
        p.text-center #[b Cuello:] Esternocleidomastoideo - anterior, lateral, posterior.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Tronco 
        .row.justify-content-center.mb-3
          .col-9
            img(src='@/assets/curso/temas/t1/slyder02.svg' alt='')
        p.text-center Dorsal - pectoral -abdominal - perineal.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Extremidades superiores
        .row.justify-content-center.mb-3        
          .col-9
            img(src='@/assets/curso/temas/t1/slyder03.svg' alt='')
        p.text-center.mb-0 Hombro, brazo, codo, antebrazo y mano. 
        p.text-center #[b Mano:] dorso y palma. Carpo, metacarpo y dedos.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Extremidades inferiores
        .row.justify-content-center.mb-3        
          .col-9
            img(src='@/assets/curso/temas/t1/slyder04.svg' alt='')
        p.text-center.mb-0 Cadera, muslo, rodilla, pierna y pie. 
        p.text-center #[b Pie:] dorso y palma, tarso, metatarso y dedos.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Sistema óseo
        .row.justify-content-center.mb-3        
          .col-8
            img(src='@/assets/curso/temas/t1/slyder05.svg' alt='')
        p.text-center Es la estructura viva de huesos duros cuya función principal es la protección y apoyo a los órganos vitales y la generación de movimiento.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Articulaciones
        .row.justify-content-center.mb-3        
          .col-9
            img(src='@/assets/curso/temas/t1/slyder06.svg' alt='')
        p.text-center Son puntos de unión entre los componentes del sistema óseo (hueso, cartílagos), y facilitan movimientos mecánicos, proporcionándole elasticidad y plasticidad al cuerpo.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Sistema muscular
        .row.justify-content-center.mb-3        
          .col-10
            img(src='@/assets/curso/temas/t1/slyder07.svg' alt='')
        p.text-center Es el conjunto de los más de 650 músculos del cuerpo, cuya función principal es generar movimiento, ya sea voluntario o involuntario.
      .tarjeta.bg2.p-4
        h4.text-center.mb-4 Tejido conectivo        
        .row.justify-content-center.mb-3        
          .col-10
            img(src='@/assets/curso/temas/t1/slyder08.svg' alt='')
        p.text-center Es el conjuntivo, adiposo, cartilaginoso, óseo, linfoide, la sangre.
    

    Separador
    #t_1_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.1 Estructura corporal humana
    
    p.mb-4 Es importante precisar las características de la estructura humana a través de los siguientes aspectos:
    
    .row.mb-4
      .col-lg-6.pe-lg-0(data-aos="fade-right")
        .tarjeta.bg3.h-100.p-4
          .row.align-items-center
            .col-lg-5.col-md-5.col-7.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/t1/imag06.svg' alt='')
            .col-lg-7
              h4 Posición anatómica
              p Es aquella que se considera adecuada para el estudio anatómico del cuerpo humano. Consiste en:
              ul.lista-ul.fa-ul.mb-0
                li.mb-0 
                  i.fas.fa-plus
                  | Cuerpo de pie. 
                li.mb-0 
                  i.fas.fa-plus
                  | Cabeza y cuello rectos.
                li.mb-0 
                  i.fas.fa-plus
                  | Brazos extendidos hacia abajo.
                li.mb-0 
                  i.fas.fa-plus
                  | Palma de las manos vueltas hacia adelante.
                li.mb-0 
                  i.fas.fa-plus
                  | Punta de los dedos mirando la frente.
                li.mb-0 
                  i.fas.fa-plus
                  | Piernas extendidas y levemente separadas.
                li.mb-0 
                  i.fas.fa-plus
                  | Tobillos y pies extendidos, señalando hacia el frente con la punta de los dedos.
      .col-lg-6.ps-lg-0(data-aos="fade-left")
        .tarjeta.bg4.h-100.d-flex.align-items-center.p-4
          .row
            .col-lg-5.col-md-5.col-7.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/t1/imag07.svg' alt='')
            .col-lg-7
              h4 Posición neutra
              p.mb-0 Es la posición natural de la columna cuando se mantienen sus 3 curvas fisiológicas. A diferencia de la anatómica, las palmas de las manos descansan sobre el cuerpo en los laterales del muslo.
            
    .division

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-3
          h4.mb-4.mt-4 Planos y ejes anatómicos
          p.mb-0 Son las referencias espaciales que sirven para describir la disposición de los diferentes tejidos, órganos y sistemas, así como las relaciones que existen entre ellos.
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.col-md-8
        img.mb-3(src='@/assets/curso/temas/t1/imag02.svg', alt='En la imagen se comparte un esquema anatómico del cuerpo humano con las direcciones y planos anatómicos principales. Se señalan tres planos: el plano sagital (que divide el cuerpo en izquierda y derecha), el plano frontal (que divide el cuerpo en anterior y posterior), y el plano transversal (que divide el cuerpo en superior e inferior). Además, se indican varias direcciones anatómicas, como craneal (hacia la cabeza), caudal (hacia los pies), dorsal (hacia la espalda), ventral (hacia el frente), proximal (cercano al punto de origen), distal (lejano al punto de origen), medial (hacia el centro del cuerpo), lateral (alejado del centro del cuerpo), entre otras. Estas referencias son fundamentales para describir la ubicación de estructuras y movimientos del cuerpo humano en medicina y anatomía.')
        figcaption Fuente: https://es.scribd.com/document/675092535/neuro-26-5


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Planos del cuerpo humano
        
    p.mb-4 Son las formas de división del cuerpo humano, los cuales se describen a continuación:

    .row.align-items-end.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.col-md-6
        img.mb-4(src='@/assets/curso/temas/t1/imag03.svg' alt='La imagen integra tres vistas del cuerpo humano en relación con diferentes planos anatómicos: el plano sagital, que divide el cuerpo en mitades izquierda y derecha; el plano frontal, que divide el cuerpo en partes anterior (frontal) y posterior (trasera); y el plano transversal, que divide el cuerpo en partes superior e inferior. Estos planos son esenciales para la descripción y el estudio de la anatomía humana. ')
        h5 Plano frontal (coronal)
        p Divide a nuestro cuerpo en la parte de mitad delantero posterior.
      .col-lg-4.col-md-6
        img.mb-2(src='@/assets/curso/temas/t1/imag04.svg' alt='La imagen integra tres vistas del cuerpo humano en relación con diferentes planos anatómicos: el plano sagital, que divide el cuerpo en mitades izquierda y derecha; el plano frontal, que divide el cuerpo en partes anterior (frontal) y posterior (trasera); y el plano transversal, que divide el cuerpo en partes superior e inferior. Estos planos son esenciales para la descripción y el estudio de la anatomía humana. ')
        h5 Plano sagital
        p Divide a nuestro cuerpo en la parte de mitad derecha e izquierda.
      .col-lg-4.col-md-6
        img.mb-4(src='@/assets/curso/temas/t1/imag05.svg' alt='La imagen integra tres vistas del cuerpo humano en relación con diferentes planos anatómicos: el plano sagital, que divide el cuerpo en mitades izquierda y derecha; el plano frontal, que divide el cuerpo en partes anterior (frontal) y posterior (trasera); y el plano transversal, que divide el cuerpo en partes superior e inferior. Estos planos son esenciales para la descripción y el estudio de la anatomía humana. ')
        h5 Plano transversal (horizontal)
        p Divide a nuestro cuerpo en la parte de mitad superior e inferior.
    

    PasosA.color-secundario.mb-5(tipo="n")
      .row.align-items-center.justify-content-around        
        .col-md-6
          h4 Antropometría
          p Estudio de las proporciones y las medidas del cuerpo humano.
        .col-md-5.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t1/imag08.svg', alt='Es una imagen con los diagramas anatómicos de las proporciones corporales de una mujer, un hombre y un niño, cada uno con medidas específicas. Los diagramas incluyen dimensiones como la altura total, el largo de los brazos, el ancho de los hombros, la longitud de las piernas y otras medidas clave del cuerpo. Estos diagramas son utilizados para entender y comparar las proporciones anatómicas entre diferentes edades y géneros, lo cual es útil en campos como la ergonomía, la medicina y el diseño de ropa. ')
      .row.align-items-center.justify-content-around 
        .col-md-5.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t1/imag09.svg', alt='En la imagen hay cuatro tipos de movimientos del cuerpo humano, cada uno con su ángulo específico: inclinación lateral (25°), rotación (35°), flexión (75°) e hiperextensión (30°). Estos diagramas ilustran los rangos de movimiento y la flexibilidad del cuerpo, siendo útiles para estudios en anatomía y ergonomía. ')
        .col-md-6
          h4.text-left Ergonomía
          p.text-left Es el estudio de las condiciones de adaptación de un lugar de trabajo, una máquina, un vehículo, una prenda y cualquier otro producto de uso humano, a las características físicas del trabajador o el usuario.
      .row.align-items-center.justify-content-around 
        .col-md-5
          h4 Biomecánica
          p Es un área de conocimiento que estudia la actividad física de nuestro cuerpo en circunstancias y condiciones diferentes; analiza las consecuencias mecánicas que se derivan de esas actividades en nuestra vida cotidiana, en el trabajo, haciendo deporte, etc.
        .col-md-7
          img(src='@/assets/curso/temas/t1/imag100.svg', alt='La imagen expone a una mujer en tres diferentes posturas de estiramiento. En la primera, adopta una posición con una rodilla en el suelo y la otra pierna doblada hacia adelante. En la segunda, cruza un brazo sobre su torso mientras lo sostiene con el otro. En la tercera, extiende ambos brazos por encima de su cabeza con los dedos entrelazados. La mujer viste una camiseta y shorts, y tiene el cabello recogido.')
        

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Somatotipos

    p.mb-4 Es un sistema diseñado para clasificar el tipo corporal o físico; es utilizado para estimar la forma corporal y su composición. Se clasifican en:
    
    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.bg23.mh-375
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h2.text-center Ectomorfo - estructura ligera
              p Se caracteriza por tener estructura delgada y huesos largos, poca grasa y poco músculo. 
              p Complexión delgada, estructura fina, fibroso, no gana peso con facilidad, metabolismo rápido, pecho plano y hombros pequeños.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarj-slide1.svg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.bg23.mh-375(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h2.text-center Mesomorfo - estructura mediana
              p Se distingue por tener una musculatura natural y poca grasa. Los huesos son largos y semi-gruesos. Se dice que es el ideal para el físico constructivo. 
              p Complexión atlética, cuerpo duro con músculos definidos,  es fuerte de forma natural, gana músculo fácilmente, engorda con más facilidad que los ectomorfos y hombros anchos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarj-slide2.svg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.bg23.mh-375
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h2.text-center Endomorfo - estructura pesada
              p Se distingue por tener un cuerpo grande de huesos gruesos, con mucha grasa y con gran facilidad para obtener más de ésta. 
              p Complexión blanda y redonda, suele ser bajo y fornido, gana músculo fácilmente,  engorda fácilmente, le cuesta perder grasa, metabolismo lento y hombros anchos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/tarj-slide3.svg')})`}")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-11.kaj.p-3.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-3
            .cajablanca.p-4
              p.mb-0.mb-lg-4.my-4 La gran mayoría de nosotros somos una combinación de dos somatotipos, las más comunes son: meso-ectomorfo y meso-endomorfo.
          .col-lg-6
            .cajablan.p-3
              .row.justify-content-center.align-items-center
                .col-lg-2
                .col-lg-10
                  img(src='@/assets/curso/temas/t1/ikk.svg', alt='En la imagen se presenta un diagrama con una figura central conectada mediante líneas a diferentes somatotipos, que incluyen combinaciones de términos como "mesomorfo", "ectomorfo", y "endomorfo". Cada combinación está asociada a una figura humana que representa las características corporales correspondientes. Las conexiones entre el centro y los somatotipos están representadas por segmentos divididos en diferentes colores, y alrededor de la figura central hay diversas etiquetas que indican las combinaciones como "Mesomorfo Balanceado", "Endo-Ectomorfo", y otras variaciones.')
            


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Tipologías corporales - siluetas

    p El siguiente diagrama, permite identificar la tipología corporal de acuerdo con algunas características físicas generales: 
    
    .row.fondo-t2.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          .col-lg-8
            img(src='@/assets/curso/temas/t1/imag16.svg', alt='La imagen presenta diferentes tipologías corporales en forma de siluetas, clasificadas según sus características físicas generales de contorno y forma corporal. Las tipologías incluyen: reloj de arena/trapecio, triángulo, triángulo invertido, rectángulo y óvalo. Cada figura humana ilustra una de estas formas corporales, destacando las variaciones en proporciones y distribución de volumen. Esta clasificación es útil para entender la morfología de superficie y puede ser aplicada en áreas como la moda, el diseño de ropa y la ergonomía.')
    p.mb-4 El siguiente diagrama, permite identificar la tipología corporal de acuerdo con algunas características físicas generales:
    
    .d-flex.justify-content-center
      .d-flex.flex-wrap.align-items-center.bg-img-bluess
        h4.col.px-4.mb-0(data-aos="fade-right") ¿Cuál es mi tipo de cuerpo?
    .row.fondo-t1.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          .col-lg-10
            img(src='@/assets/curso/temas/t1/imag17.svg', alt='La imagen presenta un diagrama de flujo para determinar el tipo de cuerpo femenino. Comienza con la pregunta "¿Tus hombros y cadera tienen medida similar?" Si la respuesta es sí, se pregunta "¿Tu cintura es más pequeña que tu cadera?", lo que identifica la forma de reloj de arena. Si la respuesta es no, se pregunta "¿Tus hombros miden más que tu cadera o abdomen?", identificando la forma de triángulo invertido. Si la respuesta inicial es no, se pregunta "¿Tu blusa tiene una talla más que tu pantalón?", determinando la forma ovalada si la respuesta es sí, o la forma de triángulo si la respuesta es no. Cada tipo de cuerpo se ilustra con una figura femenina correspondiente.')
    
    
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Evaluación de aplomos - postura
    

    p.mb-4 Asociado a la correlación entre las extremidades y el tronco y a las posiciones de las articulaciones.
        
    .row.mb-5
      .col-lg-6(data-aos="fade-right")
        .row 
          .col-lg-7
            ul.lista-ul--color.fa-ul.color-acento-botones
              li.bg6.br-7.p-1.ps-2
                i.fas.fa-plus
                p.mb-0 #[b Equilibrio postural:] muscular esquelético 
              li.bg6.br-7.p-1.ps-2
                i.fas.fa-plus
                p.mb-0 Apoyo bipedestal
          .col-lg-5
            ul.lista-ul--color.fa-ul.color-acento-botones
              li.bg6.br-7.p-1.ps-2
                i.fas.fa-plus
                p.mb-0 Distribución de pesos
              li.bg6.br-7.p-1.ps-2
                i.fas.fa-plus
                p.mb-0 Centros de gravedad
        .bg6.p-4(data-aos="fade-down")
          p El análisis de las extremidades anteriores y frontales, es lo que permite determinar si el caballo tiene buena postura o si por el contrario es defectuosa. Este análisis se hace bajo especificaciones ya estipuladas las cuales permite revisar la composición de todos los términos anteriormente mencionados con el fin de identificar la postura.
          p.mb-2 La postura es un punto clave en el análisis de la estructura corporal; es lo que corresponde a la distribución de pesos frente a la gravedad. En la imagen se identifica lo que esta categorizado como postura correcta o incorrecta.
      .col-lg-6(data-aos="fade-left")
        .bg144.p-4  
          img.my-4.mb-4(src='@/assets/curso/temas/t1/imag18.svg', alt='La imagen compara dos posturas al caminar: una postura correcta y una postura incorrecta. En la postura correcta, la persona mantiene una alineación recta de la columna vertebral con los hombros hacia atrás y la cabeza erguida. En la postura incorrecta, la persona tiene los hombros encorvados hacia adelante, la espalda curvada y la cabeza inclinada hacia abajo. Esta comparación ilustra la importancia de una buena postura para prevenir problemas musculares y articulares.')
    
    .row.mb-5
      .col-md-6.pe-md-0.mb-3(data-aos="fade-right")
        .tarjeta.bg24.p-4.h-100
          h4 Análisis de diferentes posturas sobre un mismo cuerpo
          p Cada postura da una medida diferente, siendo el mismo cuerpo o la misma persona, eso depende de las hiperextensiones o flexiones que toma el cuerpo en cada una de sus divisiones.
          img.mh-290.m-auto(src='@/assets/curso/temas/t1/imag19.svg' alt='La imagen ilustra dos conceptos relacionados con la postura y el equilibrio corporal. En la sección de la izquierda, titulada "Análisis de diferentes posturas sobre un mismo cuerpo", se presenta cómo distintas posturas pueden alterar las medidas del cuerpo debido a hiperextensiones o flexiones. La serie de figuras presenta un mismo cuerpo en diferentes posiciones que afectan su alineación. En la sección de la derecha, titulada "Análisis de punto de equilibrio", se explica que cada cuerpo tiene un tipo de equilibrio particular. Dependiendo del género, se identifican variaciones en el sistema óseo y muscular que influyen en el punto de equilibrio. Las figuras presentan una línea de equilibrio ideal comparada con una postura desalineada.')  
      .col-md-6.ps-md-0.mb-3(data-aos="fade-left")
        .tarjeta.bg7.p-4.h-100
          h4.text-white Análisis de punto de equilibrio
          p.text-white Cada cuerpo tiene un tipo de equilibrio. Dependiendo del género se identifican pequeñas variaciones tanto en el sistema óseo, como muscular, los cuales varían o afectan el punto de equilibrio.
          img.mh-290.m-auto(src='@/assets/curso/temas/t1/imag20.svg' alt='La imagen ilustra dos conceptos relacionados con la postura y el equilibrio corporal. En la sección de la izquierda, titulada "Análisis de diferentes posturas sobre un mismo cuerpo", se presenta cómo distintas posturas pueden alterar las medidas del cuerpo debido a hiperextensiones o flexiones. La serie de figuras presenta un mismo cuerpo en diferentes posiciones que afectan su alineación. En la sección de la derecha, titulada "Análisis de punto de equilibrio", se explica que cada cuerpo tiene un tipo de equilibrio particular. Dependiendo del género, se identifican variaciones en el sistema óseo y muscular que influyen en el punto de equilibrio. Las figuras presentan una línea de equilibrio ideal comparada con una postura desalineada.')  
        
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Diferentes tipos de posturas

    p.mb-4 Buena postura, postura defectuosa relajada, alineamiento de cifosis y lordosis, espalda inclinada, espalda plana y espalda redonda.
    
    .row.fondo-t2.align-items-center.py-4.py-lg-5.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          SlyderA(tipo="b")
            .row.justify-content-around
              .col-md-6.col-lg-5.mb-4.mb-md-0
                p.mb-3 #[b Proporciones de longitud de piernas en relación con el torso.]
                img.mb-3(src='@/assets/curso/temas/t1/i1.png', alt='La imagen presenta una serie de figuras femeninas que ilustran diferentes proporciones de longitud de piernas en relación con el torso, desde "normal" hasta "muy cortas". Las categorías son: a. Normal, b. Largas, c. Moderadas, d. Cortas, y e. Muy cortas. Cada figura está etiquetada con letras que corresponden a las descripciones relacionadas debajo de la imagen. Esta ilustración es útil para entender y comparar las variaciones en las proporciones corporales femeninas.')
                ol.lista-ol--cuadro
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Normal.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Largas.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span c
                    | Moderadas.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span d
                    | Cortas.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span e
                    | Muy cortas.

              .col-md-6.col-lg-5
                p.mb-3 #[b Tipos de estructura corporal.]
                img.mb-3(src='@/assets/curso/temas/t1/i7.png', alt='La imagen expone cinco figuras femeninas estilizadas en vista frontal, cada una representando diferentes tipos de estructura corporal. De izquierda a derecha, las figuras están etiquetadas como "Normal", "Cuadrada", "Alta", "Baja" y "Muy Ancha". Cada figura tiene líneas horizontales numeradas del 1 al 7 a lo largo del cuerpo, posiblemente para medir proporciones y diferencias en la forma corporal. La figura "Normal" presenta una forma corporal equilibrada, la "Cuadrada" tiene hombros y caderas más anchos, la "Alta" tiene una estatura mayor, la "Baja" es de menor estatura, y la "Muy Ancha" presenta una figura con caderas significativamente más anchas. ')
                ol.lista-ol--cuadro
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Normal.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Cuadrada.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span c
                    | Alta.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span d
                    | Baja.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span e
                    | Muy ancha.

            .row.justify-content-around
              .col-md-6.col-lg-5.mb-4.mb-md-0
                p.mb-3 #[b Alineación de piernas.]
                img.mb-3(src='@/assets/curso/temas/t1/i6.png', alt='Imagen  con cinco figuras femeninas estilizadas en vista frontal, cada una con diferentes alineaciones de piernas y articulaciones. De izquierda a derecha, las figuras están etiquetadas como "Normal", "Quebrado con rodillas separadas", "Quebrado con rodillas y tobillos separados", "Quebrado con tobillos separados" y "Muy quebrado - cadera, rodillas y tobillos separados". Las descripciones indican variaciones en la alineación de las caderas, rodillas y tobillos, desde una alineación normal hasta una alineación muy separada en múltiples puntos.')
                ol.lista-ol--cuadro
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Normal.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Quebrado con rodillas separadas. 
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span c
                    | Quebrado con rodillas y tobillos separados.  
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span d
                    | Quebrado con tobillos separados.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span e
                    | Muy quebrado - cadera, rodillas y tobillos separados.

              .col-md-6.col-lg-5
                p.mb-3 #[b Diferentes posturas y alineaciones de la columna y las caderas.]
                img.mb-3(src='@/assets/curso/temas/t1/i5.png', alt='Imagen expone cinco figuras femeninas estilizadas en vista lateral, cada una representando diferentes posturas y alineaciones de la columna y las caderas. De izquierda a derecha, las figuras están etiquetadas como "Normal", "Quebrado con la cadera hacia atrás", "Quebrado con la cadera hacia adelante", "Doblemente quebrado" y "Completamente quebrado". Estas descripciones indican variaciones en la postura, desde una alineación normal hasta diversas formas de desviaciones en la columna y la cadera, evidenciando diferentes grados de curvatura y desplazamiento.')
                ol.lista-ol--cuadro
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Normal.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Quebrado con la cadera hacia atrás. 
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span c
                    | Quebrado con la cadera hacia adelante.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span d
                    | Doblemente quebrado. 
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span e
                    | Completamente quebrado.

            .row.justify-content-around
              .col-md-6.col-lg-5.mb-4.mb-md-0
                p.mb-3 #[b Diferentes formas de caderas y glúteos.]
                img.mb-3(src='@/assets/curso/temas/t1/i4.png', alt='Describe cinco figuras femeninas estilizadas en vista posterior, cada una representando diferentes formas de caderas y glúteos. De izquierda a derecha, las figuras están etiquetadas como "Normal", "Un poco grandes", "Cadera baja amplia y glúteos puntiagudos", "Cadera muy amplia y glúteos redondos" y "Cadera alta amplia y glúteos chatos". Estas descripciones indican variaciones en la forma y tamaño de las caderas y glúteos, desde una forma normal hasta diversas combinaciones de caderas altas o bajas y glúteos de diferentes formas y tamaños.')
                ol.lista-ol--cuadro
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Normal.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Un poco grandes. 
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span c
                    | Cadera baja amplia y glúteos puntiagudos.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span d
                    | Cadera muy amplia y glúteos redondos.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span e
                    | Cadera alta amplia y glúteos chatos.

              .col-md-6.col-lg-5
                p.mb-3 #[b Diferentes formas del vientre y los glúteos.]
                img.mb-3(src='@/assets/curso/temas/t1/i3.png', alt='Describe cinco figuras femeninas estilizadas en vista lateral, cada una representando diferentes formas del vientre y los glúteos. De izquierda a derecha, las figuras están etiquetadas como "Normal", "Vientre alto abultado, glúteos redondos y grandes", "Vientre y glúteos planos y puntiagudos", "Vientre plano con pubis saliente y glúteos chatos" y "Vientre chato con pubis muy saliente con glúteos planos y entrantes". Estas descripciones indican variaciones en la forma y tamaño del abdomen y glúteos, mostrando desde una forma normal hasta combinaciones de vientres abultados o planos, glúteos redondos, chatos o puntiagudos, y la prominencia del pubis.')
                ol.lista-ol--cuadro
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Normal.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Vientre alto abultado, glúteos redondos y grandes. 
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span c
                    | Vientre y glúteos planos y puntiagudos.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span d
                    | Vientre plano con pubis saliente y glúteos chatos. 
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span e
                    | Vientre chato con pubis muy saliente con glúteos planos y entrantes.

            .row.justify-content-center
              .col-md-6.col-lg-5.mb-4.mb-md-0
                p.mb-3 #[b Diferentes formas del torso y la cadera.]
                img.mb-3(src='@/assets/curso/temas/t1/i2.png', alt='Se evidencian cinco figuras femeninas estilizadas en vista frontal, cada una representando diferentes formas del torso y la cadera. De izquierda a derecha, las figuras están etiquetadas como "Normal (Trapecio regular)", "Paralela de cadera y senos pequeños", "Paralela de cadera cuadrada, torso y cintura ancha, senos amplios", "Trapecio abierto" y "Trapecio invertido". Estas descripciones indican variaciones en la forma del torso y caderas, desde una forma normal hasta combinaciones de torsos y caderas paralelos, anchos, y diferentes tipos de trapecios.')
              .col-md-6.my-5
                ol.lista-ol--cuadro
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span a
                    | Normal (trapecio regular). 
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span b
                    | Paralela de cadera y senos pequeños.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span c
                    | Paralela de cadera cuadrada, torso y cintura ancha, senos amplios.
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span d
                    | Trapecio abierto. 
                  li.mb-1
                    .lista-ol--cuadro__vineta
                      span e
                    | Trapecio invertido.

    p Otras características y particularidades que generan diferencias corporales son: género, edad, masa corporal, tejido adiposo, lenguaje propioceptivo y patologías.



    Separador
    #t_1_2.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.2 Clasificación de medidas
    
    p.mb-5 A continuación, se describen los sistemas de medidas, su clasificación, características, usos e implementación.
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Sistemas de medidas de longitud

    p La longitud es la distancia que hay entre un punto y otro. Los dos sistemas utilizados para determinar esa distancia son: sistema inglés y sistema internacional o métrico decimal.
    p.mb-4 En el sistema inglés, la unidad básica de medida es la pulgada, se aplica principalmente en Estados Unidos, Inglaterra y Australia. En el sistema internacional o métrico decimal que tiene como unidad principal el metro, se usa en el resto del mundo.
    
    .cajon.color-acento-contenido.p-4.mb-5(data-aos="fade-down")
      .row.align-items-center
        .col-lg-6
          p Sin embargo, los dos tipos de sistemas son utilizados en diferentes áreas y cadenas productivas teniendo en cuenta que algunos estándares están trabajados en medidas diferentes a las que usa oficialmente el país.
        .col-lg-3.col-md-6.mb-4.mb-md-0
          h5.text-small Sistema inglés
          img(src='@/assets/curso/temas/t1/gt.svg', alt='La imagen presenta una regla con una escala en pulgadas, que abarca desde 1 hasta 2, y sobre ella se encuentra un texto que dice "Sistema inglés" en la parte superior. La regla tiene marcas detalladas que indican las fracciones de pulgada, y el fondo de la imagen es de color lila.')
        .col-lg-3.col-md-6.mb-4.mb-md-0
          h5.text-small Sistema internacional o métrico decimal
          img(src='@/assets/curso/temas/t1/imag21.svg', alt='La imagen presenta una regla con una escala en centímetros, que abarca desde 1 hasta 5, y sobre ella se encuentra un texto que dice "Sistema internacional o métrico" en la parte superior. La regla tiene líneas de medición detalladas entre cada número, que indican las fracciones de centímetro, y el fondo de la imagen es de color lila.')
    
    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Sistema métrico inglés 

    .row.justify-content-center 
      .col-lg-9.col-md-12.col-12(data-aos="fade-right")
        p.mb-4 Como todo número fraccionario, se representa A/B. Donde A es el numerador y B el denominador. El numerador indica el número de partes que se toman de la unidad y el denominador en cuántas partes iguales se divide esa unidad.
        p.mb-4 En confección, se utiliza la pulgada como medida de estandarización que mide el número de puntadas por pulgada PPP:
        .row.bg55.p-4.mb-4
          .col-lg-12
            .row.justify-content-center.align-items-center 
              .col-lg-2
                img.d-none.d-lg-block(src='@/assets/curso/temas/t1/55.svg', alt='')
              .col-lg-10
                ul.lista-ul--color.fa-ul.mb-0
                  li.mb-1
                    i.fas.fa-plus
                    | Ancho de la puntada (se utiliza un calibrador para facilitar el proceso).
                  li.mb-1
                    i.fas.fa-plus
                    | La planchuela de la máquina puede tener las medidas para guiarse.
                  li.mb-0
                    i.fas.fa-plus
                    | Pies de las máquinas (se miden por pulgadas y de acuerdo con el ancho de las costuras).
      .col-lg-3.col-md-7.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/imag23.svg', alt='')
    
        
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .cajon.color-acento-contenido.p-4
          p.mb-0.text-center #[b En patronaje la denominación de tallas europeas y también unos cuadros de tallas especialmente los masculinos se trabajan en pulgadas.]
    
    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Sistema métrico decimal o universal
    p Es un sistema de unidades en el cual los múltiplos o submúltiplos de las unidades de una misma naturaleza siguen una escala decimal (10).
    p En confección: se utiliza para verificar medidas finales de la prenda. Los rangos de tolerancia de una costura se miden en milímetros.
    
    ul.lista-ul--color.fa-ul.ps-2.ps-md-5.mb-4
      li.mb-1
        i.fas.fa-plus
        | Algunos Insumos de confección, se caracterizan por centímetros.
      li
        i.fas.fa-plus
        | El ancho de los materiales textiles se mide en centímetros. Los textiles al detal se venden por metros.
    
    p.mb-4 En patronaje: la mayoría de los cuadros de tallas anatómicas e industriales, en todas las líneas, están construidos en centímetros que es el sistema métrico estandarizado para el proceso de toma de medidas, patronaje y corte de las prendas. Las reducciones o ampliaciones para el confort de la prenda se realizan en centímetros.
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-10.mnr-1(data-aos="fade-right")
        .bg8.p-4
          p.mb-0 Como se utilizan los centímetros:
          p.mb-3 1 metro = 10 Decímetros, 1 Decímetro = 10 Centímetros, 1 Centímetro = 10 Milímetros - Imagen de referencia
          p.mb-0 Fracciones - ½ = Decimales - .5
          p.mb-3 Conversión de 1/2 Pulgada = 1,27 Centímetros = 12,700 Milímetros.
          p.mb-0 #[b TABLA DE CONVERSIÓN]
          p.mb-0 ¼ de Fracción = .25 Decimales = .33 Milímetros
      .col-lg-3.col-md-7
        img(src='@/assets/curso/temas/t1/imag24.svg', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3 Anexo 1. Tabla de tallas para confeccionar ropa
                  p.text-small.mb-0 Consulte el documento para aprender más sobre tabla de equivalencias
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://capacitateparaelempleo.org/assets/dj88xla.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Las medidas
    
    p Son unidades numéricas que representan el tamaño de las figuras, personas y/o objetos. Por lo general se trabaja con un sistema de medida (cinta métrica) de manera lineal, para medir las diferentes partes del cuerpo. 
    p.mb-4 Las medidas por lo general se toman sobre los puntos de anclaje del cuerpo teniendo en cuenta los parámetros antropométricos y anatómicos, pasando por los volúmenes (contornos) protuberantes.
    
    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Clasificación de las medidas
    
    p.mb-4  Se clasifican en tres grupos:
    .row.justify-content-center.mb-4
      .col-lg-4.col-md-6.col-12.mb-3
        .caj1.p-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/t1/chica1.svg', alt='')   
          h5 Contornos:
          p Se toman alrededor de la parte a medir, cerrando el metro.
          .bgwh.p-3
            ul.lista-ul--color.fa-ul
              li.mb-0
                i.fas.fa-plus
                | Contorno de cuello.
              li.mb-0
                i.fas.fa-plus
                | Contorno de pecho/busto.
              li.mb-0
                i.fas.fa-plus
                | Contorno de cintura.
              li.mb-0
                i.fas.fa-plus
                | Contorno de codo.
              li.mb-0
                i.fas.fa-plus
                | Contorno de puño. 
              li.mb-0
                i.fas.fa-plus
                | Contorno de brazo.
              li.mb-0
                i.fas.fa-plus
                | Contorno de cadera.
              li.mb-0
                i.fas.fa-plus
                | Contorno de rodilla.
              li.mb-0
                i.fas.fa-plus
                | Contorno de bota.
      
      .col-lg-4.col-md-6.col-12.mb-3
        .caj3.p-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/t1/chica3.svg', alt='')   
          h5 Largos:
          p Se toman verticalmente y corresponden a largos y talles.
          .bgwh.p-3
            ul.lista-ul--color.fa-ul
              li.mb-0
                i.fas.fa-plus
                | Talle frente.
              li.mb-0
                i.fas.fa-plus
                | Talle atrás.
              li.mb-0
                i.fas.fa-plus
                | Centro frente.
              li.mb-0
                i.fas.fa-plus
                | Centro atrás.
              li.mb-0
                i.fas.fa-plus
                | Costado.
              li.mb-0
                i.fas.fa-plus
                | Hombro.
              li.mb-0
                i.fas.fa-plus
                | Altura de busto.
              li.mb-0
                i.fas.fa-plus
                | Altura de cadera.
              li.mb-0
                i.fas.fa-plus
                |  Altura de tiro.
              li.mb-0
                i.fas.fa-plus
                | Largo de falda.
              li.mb-0
                i.fas.fa-plus
                | Largo de pantalón.
              li.mb-0
                i.fas.fa-plus
                | Largo de manga.
            
      .col-lg-4.col-md-6.col-12.mb-3
        .caj2.p-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/t1/chica2.svg', alt='')   
          h5 Anchos:
          p Se toman horizontalmente y corresponden a los anchos.
          .bgwh.p-3
            ul.lista-ul--color.fa-ul
              li.mb-0
                i.fas.fa-plus
                | Ancho de pecho.
              li.mb-0
                i.fas.fa-plus
                | Ancho de espalda.
              li.mb-0
                i.fas.fa-plus
                | Separación de busto.
    
    
    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Tipos de medidas
    
    TabsC.color-acento-contenido.mb-5(data-aos="fade-down")
      .py-4.py-md-5.p-4.bg9(titulo="Sobre medidas")
        .row.justify-content-around
          .col-md-8.col-11
            p Son las medidas que se toman directamente sobre el cuerpo de la persona. Estas medidas se deben tomar teniendo en cuenta los ejes de movimiento. 
            p La cantidad de medidas a tomar dependerá del tipo de prenda a construir. En este caso es fundamental la observación y análisis de la estructura corporal para interpretar los ajustes que deben darse al trazo de patrones.
          .col-md-4.col-lg-3.col-11
            img(src='@/assets/curso/temas/t1/figuras1.svg', alt='')
      .py-4.py-md-5.p-4.bg9(titulo="Deducidas")
        .row.justify-content-around.align-items-center
          .col-md-3.col-lg-2.col-11.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t1/nuev.png', alt='')
          .col-md-9.col-11
            p Se deducen o se sacan de otra medida, aplicando fórmulas ya estudiadas y comprobadas con anterioridad. Se basan esencialmente en una medida horizontal, que se toma al contorno del cuerpo más prominente y en una medida vertical que es tomada a lo largo del cuerpo de arriba hacia abajo. Con estas medidas se deducen las otras, por eso se toman exactas y no deben mezclarse con otras medidas al construir el cuadro de tallas.
      .py-4.py-md-5.p-4.bg9(titulo="Estandarizadas")
        .row.justify-content-around
          .col-md-8.col-11
            p #[b Medidas estandarizadas o normalizadas:] son el resultado de estudios antropométricos, que establecen un rango de medidas que corresponden a las principales medidas corporales – tallas. Estas medidas son definidas y adoptada por norma. 
          .col-md-4.col-lg-3.col-11
            img(src='@/assets/curso/temas/t1/figuras3.svg', alt='')
      .py-4.py-md-5.p-4.bg9(titulo="Anatómicas")
        .row.justify-content-around
          .col-md-4.col-lg-2.col-11
            img(src='@/assets/curso/temas/t1/file.svg', alt='')
          .col-md-8.col-11
            p.my-4 Son las medidas tomadas justas sobre el cuerpo teniendo en cuenta los puntos antropométricos y ejes de movimiento. #[b No tienen desahogos ni flojos.]
      .py-4.py-md-5.p-4.bg9(titulo="Medidas de prenda")
        .row.justify-content-around
          .col-lg-2.col-md-3.col-11.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t1/figuras4.svg', alt='')
          .col-md-9.col-11
            p.mb-4 Estas incluyen medidas de holgura, teniendo en cuenta el uso de la prenda. Por lo general se construyen cuadros de tallas de prendas que ya tienen incluidos esos centímetros de más en las diferentes medidas.
            

    h4 Medidas anatómicas, estandarizadas o normalizadas
    p.mb-4 Son el resultado de la toma de medidas directas o de estudios antropométricos. Estas medidas se toman exactas sobre la estructura, es decir no tiene aumentos ni ajustes. De la toma correcta de las medidas depende el resultado del patrón. Estas medidas son utilizadas para la construcción y elaboración de los básicos, superiores e inferiores. A continuación, puede ampliar la información en el siguiente video.
    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/42izGHE9H_o?si=MeJv0D5X3UcBc3yo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Toma de medidas sobre el cuerpo: Estructura Corporal


    Separador
    #t_1_3.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.3 Concepto de patronaje
    
    p.mb-4 Este proceso está definido por los siguientes conceptos:

    .tarjeta.tarjeta--azul.fe.p-4.mb-5
      SlyderA.t1-3(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            .row.justify-content-center.mb-2.p-4
              .col-lg-4.col-md-6.col-6
                img.mb-3(src='@/assets/curso/temas/t1/slide1-3-1.png', alt='')              
              h4 Canon
              p Modelo o prototipo que reúne las características que se consideran perfectas en su género, especialmente el referido a la figura humana que reúne las proporciones ideales.
          .col-md-6.mb-4.mb-md-0
            .row.justify-content-center.mb-2.p-4
              .col-lg-4.col-md-6.col-6
                img.mb-3(src='@/assets/curso/temas/t1/slide1-3-2.png', alt='')        
              h4 Proporción
              p Relación de correspondencia, equilibrio o simetría que existe entre los componentes de un todo.
              p Secuencia Fibonacci que presenta una serie numérica: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, etc. Es una serie infinita en la que la suma de dos números consecutivos siempre da como resultado el siguiente número Tratado de las proporciones Da Vinci o el hombre de Vitruvio, analiza en un mapa de simetría del cuerpo determinando el estándar de 8 cabezas como canon de belleza.
        .row
          .col-md-6.mb-4.mb-md-0
            .row.justify-content-center.mb-2.p-4
              .col-lg-4.col-md-6.col-6
                  img.mb-3(src='@/assets/curso/temas/t1/slide1-3-3.png', alt='')              
              h4  Proporciones corporales
              p  Modelo o prototipo que reúne las características que se consideran perfectas en su género, especialmente el referido a la figura humana que reúne las proporciones ideales.
              ul.lista-ul--color.fa-ul
                li
                  i.fas.fa-plus.mo
                  span.mb-0 Griegos Policleto y Lisipo canon de 7 y 7 ½ cabezas.
                li
                  i.fas.fa-plus.mo
                  span.mb-0 Leonardo da Vinci nos presenta una proporción de 8 cabezas en su Tratado de proporciones.
          .col-md-6.mb-4.mb-md-0
            .row.justify-content-center.mb-2.p-4
              .col-lg-4.col-md-6.col-6
                img.mb-3(src='@/assets/curso/temas/t1/slide1-3-4.png', alt='')        
              h4 Medidas deducidas
              p Para calcular un cuadro de tallas completo se utiliza generalmente dos medidas anatómicas:
              ul.lista-ul--color.fa-ul
                li
                  i.fas.fa-plus
                  | La altura o estatura total.
                li
                  i.fas.fa-plus
                  | El contorno superior más prominente.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3 Recurso. Análisis de tallas y medidas
                  p.text-small.mb-0 Revisa el documento para aprender más sobre análisis de tallas y medidas
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://drive.google.com/file/d/15M2rdSOnvqpt8LyylD2hWxj-Ban6K3vG/view" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Fórmulas

    p.mb-4 Expresión breve y precisa del modo de hacer, resolver o conseguir algo. Cálculo estandarizado para obtener un resultado.

    .row.justify-content-center  
      .col-lg-7
        .titulo-sexto.color-primario
          h5 Tabla 1.  
          | Tallas y medidas
    .row.justify-content-center.mb-4
      .col-lg-7.col-md-12.mb-4
        .tabla-a.tabla-peque.color-primario.wii
          table.text-center
            thead
              tr
                th.text-center.ble.b4 #[b Tórax máximo]
                th.text-center.b1 #[b Talla]
            tbody
              tr.p-1
                td.text-center.b4 Pecho
                td.text-center.b1 Tórax máximo - 2 cm
              tr.p-1
                td.text-center.b4 Cadera
                td.text-center.b1 Tórax máximo + 4 cm
              tr.p-1
                td.text-center.b4 Cintura
                td.text-center.b1 Cadera - 14 cm
              tr.p-1
                td.text-center.b4 Estatura 7a
                td.text-center.b1 Estatura total - 20 cm
              tr.p-1
                td.text-center.b4 Talle
                td.text-center.b1 3/10 de la estatura 7aC
              tr.p-1
                td.text-center.b4 Cintura/Suelo
                td.text-center.b1 7/10 de la estatura 7aC
              tr.p-1
                td.text-center.b4 Largo de brazo
                td.text-center.b1 4/10 de la estatura 7aC
              tr.p-1
                td.text-center.b4 Estatura total
                td.text-center.b1 Estatura 7aC + 20 cm
              tr.p-1
                td.text-center.b4 Base
                td.text-center.b1 Pecho + desahogo (4 cm)  + costura (2 cm)

    .row.mb-4(data-aos="fade-down")
      .col-lg-12
        .cajon.color-acento-contenido.bg1.p-4.px-md-5
          p #[b Ejemplo:] para deducir la medida de 7a cervical, se toma la medida total de una persona y se le resta 20 cm. ¿Por qué 20 cm? En la estandarización de medidas, se establece que 20 cm corresponde a la medida aprox. de la cabeza.
          p.mb-0 #[b Fórmula:] 7a cervical o largo útil = largo total - 20 cm   
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-10.col-md-12.col-12.bg67.p-3
        .row.mb-3
          .col-lg-5.col-md-12.col-12
            .encab.p-2.mb-3
              h4.text-center Fórmulas de deducción horizontales
            .row.justify-content-center.mb-4
              .col-lg-5.col-md-6.col-6.co6
                p.mb-0 Tórax máximo
                p.mb-0 Tórax máximo
                p.mb-0 Pecho
                p.mb-0 Bajo busto
                p.mb-0 Sep. de busto
                p.mb-0 Cintura
                p.mb-0 Cadera 
                p.mb-0 Cuello
                p.mb-0 Rodilla
                p.mb-0 Tobillo
                p.mb-0 Brazo
                p.mb-0 Muñeca
                p.mb-0 Ancho Espalda
              .col-lg-7.col-md-6.col-6.p-0.co7
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp; Busto
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp; Talla +36
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp; Tórax máximo -2
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp; Busto -6
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp; 2/5 busto
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp; Busto -10
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp; Busto +4
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp; 1/2 busto + 12
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp; 1/4 busto + 24
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp; 1/8 busto + 25.5
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp; Busto -18
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp; 1/4 busto + 5
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp; Busto -8

            .row.mb-3
              .col-lg-12.col-md-12.col-12
                .encab.p-2.mb-3
                  h4.text-center Fórmulas de deducción verticales  
            .row.justify-content-center.mb-4.p-0
              .col-lg-5.col-md-6.col-6.mb-0.co6
                p.mb-0 Estatura 7aC
                p.mb-0 Estatura total
                p.mb-0 Altura de busto
                p.mb-0 Altura bajo busto
                p.mb-0 Largo brazo
                p.mb-0 Cintura/suelo
                p.mb-0 Altura cadera 
              .col-lg-7.col-md-6.col-6.mb-0.p-0.co7
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Busto + 96
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7aC +20
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3/8 Estatura 7aC - 27
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3/8 Estatura 7aC - 18
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4/10 Estatura 7aC
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7/10 Estatura 7aC
                p.mb-0 = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2/3 de tiro
  
          .col-lg-7.col-md-12.col-12
            .encab.p-2.mb-3
              h4.text-center Otras fórmulas de deducción
            .row.justify-content-center.mb-0.p-0
              .col-lg-5.col-md-6.col-6.co6
                p.mb-0 Talla
                p.mb-0 Pecho
                p.mb-0 Cintura
                p.mb-0 Cadera
                p.mb-0 Cuello
                p.mb-0 Estatura 7aC
                p.mb-0 Talle espalda
                p.mb-0 Estatura total
              .col-lg-7.col-md-6.col-6.p-0.co7
                p.mb-0 = &nbsp;&nbsp;Años
                p.mb-0 = &nbsp;&nbsp;Años + 24cm
                p.mb-0 = &nbsp;&nbsp;1/2 de años + 26
                p.mb-0 = &nbsp;&nbsp;Años + 28
                p.mb-0 = &nbsp;&nbsp;2/3 de pecho + 4cm
                p.mb-0 = &nbsp;&nbsp;Años x 5 + 65cm
                p.mb-0 = &nbsp;&nbsp;3/10 de estatura 7aC
                p.mb-0 = &nbsp;&nbsp;Estatura 7aC + 15 a 18cm. Corresponden al canon del niño o medida de cabeza.
            .row.justify-content-center.mb-0.p-0
              .col-lg-5.col-md-6.col-6.co6
                p.mb-0 Largo de brazo
              .col-lg-7.col-md-6.col-6.p-0.co7
                p.mb-0 = &nbsp;&nbsp;4/10 de estatura 7aC
            .row.justify-content-center.mb-0.p-0
              .col-lg-5.col-md-6.col-6.co6
                p.mb-0 Codo
              .col-lg-7.col-md-6.col-6.p-0.co7
                p.mb-0 = &nbsp;&nbsp;1/2 de brazo. Esta medida sin tener en cuenta lo que corresponde a la muñeca (menos 5cms para todas las tallas).
            .row.justify-content-center.mb-0.p-0
              .col-lg-5.col-md-6.col-6.co6
                p.mb-0 Cintura al suelo
              .col-lg-7.col-md-6.col-6.p-0.co7
                p.mb-0 = &nbsp;&nbsp;7/10 de estatura 7aC
            .row.justify-content-center.mb-0.p-0
              .col-lg-5.col-md-6.col-6.co6
                p.mb-0 Largo de falda larga
              .col-lg-7.col-md-6.col-6.p-0.co7
                p.mb-0 = &nbsp;&nbsp;2/3 de la medida cintura al suelo -3
            .row.justify-content-center.mb-0.p-0
              .col-lg-5.col-md-6.col-6.co6
                p.mb-0 Largo de falda corta
              .col-lg-7.col-md-6.col-6.p-0.co7
                p.mb-0 = &nbsp;&nbsp;1/2 de la medida cintura al suelo -3
    .bg66.mb-4.p-4.px-lg-5.mb-5(data-aos="fade-down")
      .row
        .col-lg-4
          .d-flex.justify-content-center.mb-4.mb-lg-5
            .d-flex.flex-wrap.align-items-center.bg-img-bluess
              h4.col.px-2.mb-0(data-aos="fade-right") ¿Cómo obtener medidas deducidas?
          img.d-none.d-lg-block(src="@/assets/curso/temas/t1/123.png")
        .col-lg-7
          .titulo-sexto.color-primario.mb-3
            h5 Tabla 2.
            | Desarrollando fórmulas.
          .tabla-a.tabla-peque.color-1
            table.text-center
              thead
                tr.bg12
                  th Medida
                  th Fórmula
                  th Resultado
              tbody.fw-bold
                tr.p-1
                  td Estatura total
                  td N/A
                  td 1.70 cm
                tr.p-1
                  td Tórax máximo
                  td N/A
                  td 90 cm
                tr.p-1
                  td Cadera
                  td Tórax máximo +8 cm
                  td 98 cm
                tr.p-1
                  td Pecho
                  td Tórax máximo -4 cm
                  td 86 cm
                tr.p-1
                  td Cintura
                  td Cadera -28 cm
                  td 70 cm
                tr.p-1
                  td Estatura 7a cervical útil
                  td Altura total -20 cm
                  td 1.50 cm
                tr.p-1
                  td Largo de brazo
                  td 4/10 de estatura 7aC
                  td 60 cm
      
    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Construyendo tallas y cuadros
    p.mb-4 Grupo de magnitudes estandarizadas que definen las medidas de una prenda de vestir. Los cuadros contienen grupos de tallas.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-primario.mb-3
          h5 Tabla 3.
          | Grupos de tallas
        .row.justify-content-center
          .col-lg-12.col-md-12.col-12
            .tabla-c.tabla-peq.tt
              table.text-center
                thead
                  tr.bg12
                    th.h4 #[b Talla]
                    th.h4 #[b XS/30 - 6]
                    th.h4 #[b S/32 - 8]
                    th.h4 #[b M/34 - 10]
                    th.h4 #[b L/38 - 12]
                    th.h4 #[b XL/40 - 14]
                    th.h4 #[b SL/42 - 16]
                    th.h4 #[b INCRE]
                tbody
                  tr.p-1
                    td.text-center.bla Tórax máximo
                    td.text-center.bla 40
                    td.text-center.bla 42
                    td.text-center.bla 44
                    td.text-center.bla 46
                    td.text-center.bla 48
                    td.text-center.bla 50
                    td.text-center.bla 2
                  tr.p-1
                    td.text-center.ba Cadera
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                  tr.p-1
                    td.text-center.bla Pecho
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                  tr.p-1
                    td.text-center.ba Cintura
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba
                  tr.p-1
                    td.text-center.bla Estatura total
                    td.text-center.bla 166
                    td.text-center.bla 168
                    td.text-center.bla 170
                    td.text-center.bla 172
                    td.text-center.bla 174
                    td.text-center.bla 174
                    td.text-center.bla 2
                  tr.p-1
                    td.text-center.ba Estatura 7a
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba
                  tr.p-1
                    td.text-center.bla Talle
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla
                  tr.p-1
                    td.text-center.ba Largo de brazo
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba
                  tr.p-1
                    td.text-center.bla Cuello
                    td.text-center.bla
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla
                  tr.p-1
                    td.text-center.ba Cintura / Suelo
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba 
                    td.text-center.ba
                  tr.p-1
                    td.text-center.bla Base
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla 
                    td.text-center.bla
    
    .row.justify-content-center.mb-5
      .col-lg-10.col-md-12.col-12
        .bg45.p-3
          .row
            .col-lg-3.col-md-3.col-5
              p.mb-0 Cadera
              p.mb-0 Pecho
              p.mb-0 Cintura
              p.mb-0 Estatura total
              p.mb-0 Estatura 7aC
              p.mb-0 Talle
              p.mb-0 Largo de brazo
              p.mb-0 Cuello
              p.mb-0 Cintura/suelo
              p.mb-0 Base
            .col-lg-9.col-md-9.col-7
              p.mb-0 =&nbsp; Tórax máximo + 4 cm
              p.mb-0 =&nbsp; Tórax máximo - 2 cm
              p.mb-0 =&nbsp; Cadera - 14 cm
              p.mb-0 =&nbsp; Estatura 7aC + 20 cm
              p.mb-0 =&nbsp; Estatura total - 20 cm
              p.mb-0 =&nbsp; 3/10 de estatura 7aC
              p.mb-0 =&nbsp; 4/10 de estatura 7aC
              p.mb-0 =&nbsp; 2/3 de pecho + 4 cm
              p.mb-0 =&nbsp; 7/10 de estatura 7aC
              p.mb-0 =&nbsp; Pecho + desahogo + costura (desahogo 4 cm / costura 2 cm)
          

        
    .row.justify-content-center.mb-5
      .col-lg-10.col-12.col-md-12
        .titulo-sexto.color-primario.mb-3
          h5 Tabla 4.
          | Construcción talla 6
        .tabla-c.tabla-peque.tt
          table.text-center
            thead
              tr.bg12
                th.h4.text-white #[b Talla]
                th.h4.text-white #[b 6]
                th.h4.text-white #[b XS/30 - 6]
            tbody.fw-bold
              tr.p-1
                td.text-center.blat Tórax máximo
                td.text-center.blat 40
                td.text-center.blat 40
              tr.p-1
                td.text-center.ba Cadera
                td.text-center.ba 40 + 4 = 44
                td.text-center.ba 44
              tr.p-1
                td.text-center.blat Pecho
                td.text-center.blat 40 - 2 = 38
                td.text-center.blat 38
              tr.p-1
                td.text-center.ba Cintura
                td.text-center.ba 44 - 14 = 32
                td.text-center.ba 30
              tr.p-1
                td.text-center.blat Estatura total
                td.text-center.blat 166
                td.text-center.blat 166
              tr.p-1
                td.text-center.ba Estatura 7a
                td.text-center.ba 164 - 20 = 146
                td.text-center.ba 146
              tr.p-1
                td.text-center.blat Talle
                td.text-center.blat 144/10 = 14,6 * 3 = 43,8
                td.text-center.blat 0
              tr.p-1
                td.text-center.ba Largo de brazo
                td.text-center.ba 144/10 = 14,6 * 4 = 58,4
                td.text-center.ba 0
              tr.p-1
                td.text-center.blat Cuello
                td.text-center.blat 40/3 = 13,3 * 2 = 26,6
                td.text-center.blat 26,6
              tr.p-1
                td.text-center.ba Cintura/Suelo
                td.text-center.ba 144/10 = 14,6 * 7 = 102,2
                td.text-center.ba 0
              tr.p-1
                td.text-center.blat Base
                td.text-center.blat 38 + 4 + 2 = 44
                td.text-center.blat 44

        

    .row.mb-5(data-aos="fade-down")
      .col-lg-12
        .cajon.color-acento-contenido.bg1.p-4.px-md-5
          h5 Errores más comunes
          p.mb-0 Combinación de medidas: cuando se trabaja con medidas deducidas, se debe ir trabajando con las medidas obtenidas de cada fórmula de manera progresiva; usted debe tener en cuenta que el resultado cambia si en vez de aplicar únicamente las medidas obtenidas por deducción, adicionamos una medida anatómica.

    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Cuadros de tallas
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg6.p-4
          ul.lista-ul--color.color-acento-contenido.fa-ul.mb-4
            li.mb-1 
              i.fas.fa-plus
              | Anatómicos y deducidos: de acuerdo con la obtención de medidas.
            li.mb-1 
              i.fas.fa-plus
              | Proporcionales: existe una secuencia numérica en el crecimiento de la talla.
            li.mb-1 
              i.fas.fa-plus
              | No proporcionales: no existe una secuencia numérica en el crecimiento de la talla.
            li.mb-1 
              i.fas.fa-plus
              | Completos: incluyen todas las medidas requeridas para la construcción de patrones de prendas.
            li.mb-1 
              i.fas.fa-plus
              | Según prenda: que incluyen en algunos casos desahogos y costuras.
          h5 Normatividad        
          h5 Ejemplos:
          ul.lista-ul--color.color-acento-contenido.fa-ul.mb-4
            li.mb-1 
              i.fas.fa-plus
              | ANTC-ISO 8559. Fabricación de Vestuario y Estudios Antropométricos. Dimensiones Corporales - Icontec.
            li 
              i.fas.fa-plus
              | Norma UNE-EN 13402-3. Armoniza y simplifica el etiquetado de tallas de prendas de vestir para el beneficio del consumidor y de la industria en general.          
          h5 Para el análisis de cuadros de tallas se determinan: 
          p.mb-0 #[b Límites:] la más pequeña y la más grande.  
          p.mb-0 #[b Frecuencia:] aumento de medida talla a talla (secuencial y no secuencial -constantes y variables).  
          p.mb-4 #[b Incremento:] magnitud de crecimiento de la medida talla por talla
          p.mb-0 El análisis de los anteriores dará como resultado: valores, proporciones, rupturas de talla (para una, dos o hasta tres tallas base), valores: imágenes de referencia.
    
    
    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 Proporciones
    p Aumento secuencial estandarizado para el crecimiento o disminución de tallas, se encuentra identificando la diferencia en unidades de medida de talla a talla en cada línea de medida del cuerpo.
    
    p.mb-3 La fórmula estandarizada para hallar la proporción es: diferencia del contorno mayor dividido en 4, de allí se encuentran las fracciones de la proporción. Ejemplo:
    
    .row.align-items-center.mb-5
      .col-lg-9
        .row.align-items-right 
          .col-lg-12
            .bg22y.p-3.mb-2
              ul.lista-ul--color.fa-ul.color-acento-contenido.mb-0
                li.mb-0 
                  i.fas.fa-plus
                  p.mb-0 1 proporción será 1 cm.
                li.mb-0
                  i.fas.fa-plus
                  p.mb-0 ½ proporción será 0,5 cm. 
                li.mb-0 
                  i.fas.fa-plus
                  p.mb-0 ¼ proporción será 0,25 cm 1.5 proporción será 1,5 cm.
        p.mb-2 Permitiendo analizar el crecimiento vertical de las medidas de una talla.
        p.mb-2 Esta información es fundamental para el escalado de tallas y ajuste de los mismos sobre medidas:
        .row.align-items-right 
          .col-lg-12
            .bg22y.p-3.mb-3
              ul.lista-ul--color.fa-ul.color-acento-contenido.mb-0
                li.mb-0
                  i.fas.fa-plus
                  p.mb-0 Cuadros de tallas.
                li.mb-0 
                  i.fas.fa-plus
                  p.mb-0 Comparación de medidas.
                li.mb-0 
                  i.fas.fa-plus
                  p.mb-0 Incremento entre talla y talla - tomar medida por medida y revisar el incremento que hay entre talla y talla.
                li.mb-0
                  i.fas.fa-plus
                  p.mb-0 Ruptura de talla - Identificar ruptura del cuadro de tallas, por medida y talla.
        p.mb-4 En el ejemplo, la ruptura esta entre la talla 14 y 16, porque se incrementa 6 cm, rompiendo con los 4 cm de las demás medidas.
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/temas/t1/1234.png', alt='')   

    

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 #[em Drop]
    p.mb-4 Palabra técnica que indica la diferencia en centímetros entre dos medidas del cuerpo que nos permiten determinar la morfología de este: 

    .tarjeta--container.row.mb-4(data-aos="fade-down")
      .col-md.tarjeta.caj3.p-5
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/t1/imag25.svg', alt='')   
        h5 #[em Drop] femenino
        p.mb-0 Diferencia entre cadera y contorno de Busto para la mujer.
        p Contorno Contorno de cadera - Contorno de busto = #[em DROP]
        p Con el #[em Drop] se establecen las diferentes contexturas de una misma talla. En las mujeres, el #[em Drop] es la diferencia entre las medidas de contorno de cadera y contorno de busto. En las tallas femeninas predomina un #[em Drop] positivo, generalmente una talla se considera normal cuando el #[em Drop] es positivo entre +2 cm y + 4 cm. El #[em Drop] estándar usado en Colombia es + 4 cm. En las tallas extremas y altas el #[em Drop] se vuelve negativo. 
        h5.mb-0 Ejemplos:
        p.mb-0 #[em Drop] + 2 indica la medida de cadera 2 cm mayor que el contorno de busto.
        p.mb-0 El #[em Drop] 0 indica que la medida de cadera es igual a la medida de contorno de busto.
        p.mb-0 El #[em Drop] - 4 indica que la medida de cadera tiene 4 cm menos que el contorno de busto.         
      .col-md.tarjeta.bg23.p-5
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/t1/imag26.svg', alt='')   
        h5 #[em Drop] masculino
        p.mb-0 Diferencia entre la cintura y el pecho, para el hombre.
        p Contorno de cintura - contorno de pecho = #[em DROP]
        p Diferencia entre la cintura y el pecho, para el hombre. Generalmente en tallas masculinas predomina el #[em Drop] negativo, (más pecho que cintura), aunque al realizar una tabla de tallas (a mayor talle menos #[em Drop]) llegando en tallas extremas a ser positivo o sea un cuerpo con más cintura que pecho. 
        h5.mb-0 Ejemplos:
        p.mb-0 Un #[em Drop] -4 indica, una cintura con 4 pulgadas menos que la medida de pecho.
        p.mb-0 Un #[em Drop] 0 indica una cintura igual al pecho.
        p.mb-0 El #[em Drop] + 2 indica una cintura con 2 pulgadas que el pecho.

    p.mb-0 Acorde a cada tipo de silueta hay un #[em Drop] característico. 


    Separador
    #t_1_4.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.4 Pasos del patronaje
    
    p.mb-4 El patronaje es la representación en 2D (bidimensional) de un volumen en 3D (tridimensional), a través de la elaboración de planos, moldes o patrones de prendas de vestir para el cuerpo.
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        img(src='@/assets/curso/temas/t1/caja.svg', alt='Imagen expone una explicación visual del concepto de patronaje. A la izquierda, hay una figura 3D que representa un cubo en un sistema de coordenadas tridimensionales (ejes X, Y, Z). En el centro, se presenta el mismo cubo, pero con líneas punteadas para resaltar su forma tridimensional. A la derecha, se presenta el desarrollo plano (2D) del cubo, que consiste en seis cuadrados conectados que, cuando se pliegan, forman el cubo. El texto explica que el patronaje es la representación en 2D (bidimensional) de un volumen en 3D (tridimensional) mediante la elaboración de planos, moldes o patrones de prendas de vestir para el cuerpo.') 
    
    p.mb-4 El patronaje sirve para transferir la información de la estructura corporal en planos que luego se convierten en moldes.
    
    .row.justify-content-center.mb-5
      .col-lg-6
        img.mb-5(src='@/assets/curso/temas/t1/estructura.svg', alt='Imagen describe la relación entre la estructura del cuerpo humano, su representación en planos y los moldes utilizados en la confección de prendas. De izquierda a derecha, se observan figuras estilizadas de un hombre y una mujer etiquetadas como "Estructura". A la derecha de estas figuras, se presenta una representación en "Plano" que descompone las formas tridimensionales en una vista bidimensional. Finalmente, se ven los "Moldes", que son las plantillas específicas para cortar las telas y confeccionar las prendas de vestir, detallando las formas de las piezas necesarias para cubrir la estructura del cuerpo.' data-aos="fade-down") 
      .col-lg-6
        img.mb-5(src='@/assets/curso/temas/t1/estructura1.svg', alt='La imagen describe el proceso de creación de prendas de vestir a partir de la estructura del cuerpo humano. De izquierda a derecha, se ven dos figuras humanas estilizadas etiquetadas como "Figura 3D" o "Estructura". Luego, estas figuras se traducen en un "Plano 2D", que descompone la forma tridimensional en una vista bidimensional. A continuación, se presentan los "Moldes", que son las plantillas para cortar las piezas de tela necesarias. Finalmente, el proceso culmina en la "Prenda", que es el producto final confeccionado a partir de los moldes, ejemplificado con un saco. Esto ilustra cómo la representación tridimensional del cuerpo se convierte en una prenda de vestir a través de un proceso de diseño y confección.' data-aos="fade-down") 
    

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Procedimientos del patronaje
    p.mb-4 Este proceso está compuesto por los siguientes pasos:
    
    AcordionA.t2-1.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-down")
      .row.justify-content-center.align-items-center(titulo="Paso 1: construcción de básicos")
        .col-md-3.col-7.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t1/acordion.svg', alt='')        
        .col-md-8.mb-4.mb-md-0
          p Los básicos se dividen en dos grupos: superior (básico superior + Manga) e inferior, básico de falda (alrededor de cadera desde cintura hasta rodilla), básico de pantalón (alrededor de cadera, y la base genital, desde cintura hasta el tobillo).
          p Los básicos son moldes anatómicos del cuerpo, es decir no son una prenda, son el punto de partida para hacerla. El básico superior en metodología SENA es un solo básico superior, es decir, cualquier tipo de prenda superior. En otras metodologías hay varios básicos: un solo tipo de prenda, básico de blusa/camisa, básico de chaleco, básico de chaqueta, básico de abrigo, básico de vestido, entre otros. 
      .row.justify-content-center.align-items-center(titulo="Paso 2: definición del diseño")
        .col-md-8.mb-4.mb-md-0
          p Por lo general la definición del diseño no está a cargo del patronista, sin embargo, es la base para definir que se va a desarrollar, es decir, poder hacer el análisis del tipo de prenda a patronar.
        .col-md-3.col-7
          img(src='@/assets/curso/temas/t1/acordion2.svg', alt='')      
      .row.justify-content-center.align-items-center(titulo="Paso 3: análisis de la prenda (talla, básico, horma, material e insumos)")
        .col-md-3.col-7
          img(src='@/assets/curso/temas/t1/acordion3.png', alt='')        
        .col-md-8.mb-4.mb-md-0
          p Se analizan los factores necesarios para el desarrollo de la prenda, después de los básicos, son el punto de partida para dar inicio al trazo del plano.
          .row
            .col-lg-9
              .tarjeta.color-primario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-3.col-lg-2
                    img.px-md-2(src="@/assets/curso/temas/t1/icono.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.mb-0 Consulta pasos para definir patronaje
                      .col-sm-auto
                        a.boton.color-acento-botones(href="https://www.studocu.com/co/document/servicio-nacional-de-aprendizaje/patronaje-prendas-basicas/7-anexo-7-pdf-pasos-definir-patronaje/39261850" target="_blank")
                          span Descargar
                          i.fas.fa-file-download           
      .row.justify-content-center.align-items-center(titulo="Paso 4: construcción de planos")
        .col-md-4.mb-4
          img(src='@/assets/curso/temas/t1/acordion4.svg', alt='La imagen expone tres figuras humanas que representan los planos anatómicos del cuerpo. A la izquierda, el "Plano Frontal" divide el cuerpo en partes anterior y posterior. En el centro, el "Plano Sagital" (marcado como "Plano") divide el cuerpo en mitades derecha ("Der.") e izquierda ("Izq."). A la derecha, el "Plano Transversal" divide el cuerpo en partes superior ("Superior") e inferior ("Inferior"). Estos planos son fundamentales en la anatomía para describir ubicaciones y movimientos en el cuerpo humano.')        
        .col-md-7.mb-4
          p Según las características de la prenda y sus componentes los básicos deben organizarse para facilitar la comprensión de la prenda y simplificar su construcción. La recomendación de la metodología SENA es trabajar planos unidos. Estos se clasifican en:
          ul.lista-ul--color.fa-ul.color-primario
            li.mb-1 
              i.fas.fa-plus
              | Plano separado.
            li.mb-1 
              i.fas.fa-plus
              | Plano sencillo.
            li.mb-1 
              i.fas.fa-plus
              | Plano abierto completo.
            li.mb-1 
              i.fas.fa-plus
              | Plano abierto delantero o posterior.
            li.mb-1 
              i.fas.fa-plus
              | Plano montado (centro frente, sobre centro atrás).
            li 
              i.fas.fa-plus
              | Plano con unión de hombros.
        .bg11.p-5.mb-5
          .row.align-items-center
            .col-lg-8.mb-4.mb-md-0
              h5 Ajuste al plano
              p Desahogos: son aumentos que se dan en algunas medidas de construcción para cumplir con los requerimientos de biomecánica del cuerpo de acuerdo con el tipo y uso de la prenda.
              p.mb-4 También conocidos como holgura, amplitud, flojo. Son medidas que se adicionan al básico para la construcción del plano, interpretación o desarrollo de la prenda. Los desahogos permiten la funcionalidad de las prendas sobre prendas.
              .row.justify-content-center
                .col-lg-4.col-md-6.col-12.mb-3
                  h4.mb-2.text-center Básico
                  p.mb-2.text-center Contorno de pecho/busto &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +
                  p.mb-0.text-center Medida anatómica
                .col-lg-3.col-md-6.col-12.mb-3
                  h4.mb-2.text-center Blusa
                  p.mb-2.text-center &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Desahogo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +
                  p.mb-0.text-center &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Incremento &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
                .col-lg-3.col-md-6.col-12.mb-3
                  h4.mb-2.text-center Chaqueta
                  p.mb-2.text-center Desahogo
                  p.mb-0.text-center Funcionabilidad
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/acordion5.svg', alt='') 
        .row
          h5 Ejemplo de desahogos:
          ul.lista-ul--color.fa-ul.color-primario
            li 
              i.fas.fa-plus
              | Sistema de ajuste: permiten la horma final de la prenda sobre el cuerpo con pinzas y cortes. Son procedimientos de patronaje o complementos en la prenda, que permiten junto al material elegido, la horma final de la prenda sobre el cuerpo.
            li 
              i.fas.fa-plus
              | Sistema de cierre: mecanismos utilizados para facilitar el uso de la prenda, también llamados sistemas de acceso a la prenda permiten vestir y desvestir el cuerpo. Compuesto por: cremalleras, botones, broches y gafetes, cauchos, cintas y cordones, pasamanería, galones flecos y borlas, herrajes.
          .row.justify-content-center.align-items-center
            .col-lg-5
              .tarjeta.color-primario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img(src="@/assets/curso/temas/t1/icono.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        p.mb-0 #[b Recurso.] Desahogos
                      .col-sm-auto
                        a.boton.color-acento-botones(href="https://www.studocu.com/co/document/sena-sofiaplus/diseno-de-modas/desahogos-de-prendas/74896400" target="_blank")
                          span Descargar
                          i.fas.fa-file-download     
      .row(titulo="Paso 5: transformación de la base o interpretación del diseño")
        .col-lg-12
          .bg12.p-3
            p.text-center.mb-0 Se desarrolla de acuerdo a los siguientes niveles:
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.bg6.p-4
              .row.justify-content-center.mb-3
                .col-md-12.col-6
                  h4.mb-4.text-center Básica
                  img.img-a.img-t(src='@/assets/curso/temas/t1/paso5-1.svg', alt='')
              p.text-center.mb-0 Análisis básico de prendas de vestir, sin ningún tipo de complejidad en el desarrollo.
            .col-md.tarjeta.bg8.p-4
              .row.justify-content-center.mb-3
                .col-md-12.col-6
                  h4.mb-4.text-center Intermedia
                  img.img-a.img-t(src='@/assets/curso/temas/t1/paso5-2.svg', alt='')
              p.text-center.mb-0 Análisis intermedio de prendas de vestir, complejidad desde cortes, ajustes y complementos.
            .col-md.tarjeta.bg6.p-4
              .row.justify-content-center.mb-3
                .col-md-12.col-6
                  h4.mb-4.text-center Avanzada
                  img.img-a.img-t(src='@/assets/curso/temas/t1/paso5-3.svg', alt='')
              p.text-center.mb-0 Análisis avanzado para la construcción de prendas de vestir, traslados, volúmenes y tridimensiones.             
        .bg11.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-10.mb-4.mb-md-0
              h4.text-center Tipos de modificaciones y trazos
              ul.lista-ul--color.fa-ul.color-primario
                li 
                  i.fas.fa-plus
                  | Sencillo: se traza en el patrón, los cortes, pinzas y complementos que hacen parte del diseño.
                li 
                  i.fas.fa-plus
                  | Cruzado: las líneas de las amplitudes y cortes se cruzan dentro del patrón y se separan en el momento del despiece.
                li.mb-0
                  i.fas.fa-plus
                  | Cortando y ampliando: se trazan los cortes y se da amplitud en el momento del despiece. La pieza se abre y se vuelve a trazar para un nuevo despiece. Trazo de planos (ejemplos visuales).
      .row(titulo="Paso 6: despieces")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-md-0
            ul.lista-ul--color.fa-ul.color-primario
              li.mb-1
                i.fas.fa-plus
                | El plano nunca se corta: este debe quedar archivado para hacer sobre las correcciones y ajustes cada pieza es calcada y recortada separadamente.
            p.mb-5 En cada pieza se marcan: Señalización + Costuras + Complementos.
            h5 Despiece del plano
            ul.lista-ul--color.fa-ul.color-primario.mb-4
              li.mb-1 
                i.fas.fa-plus
                span.mb-0 #[b Señalización:] información de corte y producción, que debe marcarse en cada patrón.
              li.mb-1 
                i.fas.fa-plus
                span.mb-0 #[b Costuras:] medida que se adiciona al borde de las piezas que se ensamblan; varía de acuerdo con la maquinaria o acabado.
              li.mb-0 
                i.fas.fa-plus
                span.mb-0 #[b Complementos:] plantillas, información y/o medidas que se adiciona para sistemas de ajuste, cierre o acabados.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/acordion6.png', alt='')
          .col-lg-11  
            p #[b Señalización:]   hilo de tela
            p.mb-0 "Hilo de la tela" o "sentido del hilo" corresponde a la dirección que siguen los moldes sobre el material textil.
            p Los tejidos planos se forman por hilos longitudinales (urdimbre) que se cruzan con hilos transversales (trama) formando un perfecto ángulo de 90°.
            ul.lista-ul--color.fa-ul.color-primario.mb-5
              li.mb-1 
                i.fas.fa-plus
                | Tipos de hilos: de acuerdo con las cualidades del textil y necesidades de aprovechamiento se elige el hilo a trabajar.
              li.mb-0 
                i.fas.fa-plus
                | Márgenes de costura: de acuerdo con las cualidades del textil y necesidades de aprovechamiento se elige el hilo a trabajar.      
        .row.mb-4
          .col-lg-6.pe-md-0
            .bg25.p-4.h-100
              .row
                .col-lg-5.col-md-3.col-6.mb-3.mb-md-0
                  img(src='@/assets/curso/temas/t1/hilos.png', alt='')
                .col-lg-6.col-md-9
                  h5 Hilos de tela:
                  ul.lista-ul.fa-ul.mb-0
                    li.mb-1 
                      i.fas.fa-plus
                      | Hilo de tela al hilo.
                    li.mb-1 
                      i.fas.fa-plus
                      | Hilo de tela por trama.
                    li.mb-1 
                      i.fas.fa-plus
                      | Hilo de tela al bies.
                    li.mb-1 
                      i.fas.fa-plus
                      | Hilo de tela una cabeza hacia arriba.
                    li.mb-1 
                      i.fas.fa-plus
                      | Hilo de tela una cabeza hacia abajo.
                    li.mb-0 
                      i.fas.fa-plus
                      | Hilo de tela cabeza doble.
          .col-lg-6.ps-md-0
            .bg11.p-4.h-100
              .row
                .col-lg-5.col-md-3.col-6.mb-3.mb-md-0
                  img(src='@/assets/curso/temas/t1/parche.svg', alt='')
                .col-lg-6.col-md-9
                  h5 Ubicación de hilos de tela:
                  ul.lista-ul.fa-ul.mb-0
                    li.mb-1 
                      i.fas.fa-plus
                      | Hilos de urdimbre - Hilos de trama.   
                    li.mb-1 
                      i.fas.fa-plus
                      | Una cabeza hacia arriba 
                    li.mb-1 
                      i.fas.fa-plus
                      | Una cabeza hacia abajo.  
                    li.mb-1 
                      i.fas.fa-plus
                      | Una cabeza doble.  
                    li.mb-0 
                      i.fas.fa-plus
                      | Doblez de tela.  
        .row
          .col-lg-5.mb-3.mb-lg-0
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img(src="@/assets/curso/temas/t1/icono.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0 #[b Recurso.] Hilos y tela.
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://repositorio.sena.edu.co/sitios/modisteria_conocimientos_basicos/hilos_maquina/hilosytelas.html#" target="_blank")
                        span Descargar
                        i.fas.fa-file-download 
      .row.justify-content-center.align-items-center(titulo="Paso 7: trazo y corte")
        .col-md-12.col-lg-8
          p Se marcan las piezas sobre el material teniendo en cuenta las indicaciones y se procede a cortar las piezas teniendo en cuenta los márgenes de costura. De acuerdo con el tipo de material, se marca el textil o se sujetan con alfileres los patrones o transfiere la marca con la rodaja. Se corta la muestra en el textil elegido.
        .col-md-5.col-7.col-lg-3
          img(src='@/assets/curso/temas/t1/acordion7.svg', alt='')        
      .row.justify-content-center.align-items-center(titulo="Paso 8: confección de muestra física")
        .col-md-12.col-lg-8
          p Se ensambla la muestra física o primer prototipo del diseño.
        .col-md-5.col-7.col-lg-3
          img(src='@/assets/curso/temas/t1/acordion8.svg', alt='')        
      .row.justify-content-center.align-items-center(titulo="Paso 9: verificación de muestra física")
        .col-md-5.col-7.col-lg-3
          img(src='@/assets/curso/temas/t1/acordion9.svg', alt='')
        .col-md-12.col-lg-8
          p Se verifica que la muestra coincida con lo proyectado en el diseño inicial.      
      .row.justify-content-center.align-items-center(titulo="Paso 10: corrección y/o ajustes de la muestra física sobre el plano")
        .col-md-12.col-lg-8
          p Se realizan los ajustes al patrón, de acuerdo con lo verificado en la muestra física. Es posible que se requieran ajustes complejos que incluyan de pinzas, desahogos, cortes, reubicación de líneas, etc. O en otros casos pequeños ajustes para lograr el #[em fit] ideal proyectado en el diseño inicial.
        .col-md-5.col-7.col-lg-3
          img(src='@/assets/curso/temas/t1/acordion10.png', alt='')      
      .row.justify-content-center.align-items-center(titulo="Paso 11: verificación del nuevo despiece")
        .col-md-5.col-7.col-lg-3
          img(src='@/assets/curso/temas/t1/acordion11.png', alt='')
        .col-md-12.col-lg-8
          p Se realiza el nuevo despiece del diseño de acuerdo con los ajustes y correcciones.      
      .row.justify-content-center.align-items-center(titulo="Paso 12 y 13: contramuestra o prototipo final - validación de la prenda")
        .col-md-12.col-lg-8
          p Se realiza este paso y los anteriores todas las veces necesarias hasta obtener el producto exacto que fue proyectado.
        .col-md-5.col-7.col-lg-3
          img(src='@/assets/curso/temas/t1/acordion12.png', alt='')      
      .row.justify-content-center.align-items-center(titulo="Paso 14: industrialización del patrón")
        .col-md-5.col-7.col-lg-3
          img(src='@/assets/curso/temas/t1/acordion14.png', alt='')
        .col-md-12.col-lg-8
          p En los procesos industrializados, es en este paso donde se proyectan las escalas de tallas y se digitalizan los patrones ya probados para su reproducción en serie.
      .row.justify-content-center.align-items-center(titulo="Paso 15: documentación técnica")
        p.text-center Información de desarrollo del producto para ficha técnicas materiales, medidas, tallas, acabados, etc.
        .col-lg-6
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img.px-lg-2(src="@/assets/curso/temas/t1/www.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.mb-0 Recurso. Descubre cómo crear una ficha técnica de moda sin errores en AUDACES
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://audaces.com/es/blog/ficha-tecnica-moda" target="_blank")
                      span Enlace
                      i.fas.fa-globe
          

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Metodología - Presentación del manual de patronaje SENA  

    p.mb-4 Es necesario conocer y manejar las diferentes simbologías, que facilitan los procesos técnicos de patronaje y corte. Algunos de estos símbolos permiten entender fácilmente las gráficas de construcción, eliminando el uso de textos y referencias alfanuméricas. Otros indican de qué manera están aplomados los patrones despiezados para su corte. Es importante anotar que, en el momento de despiezar el patrón, para su identificación, cada pieza debe estar marcada así:
    
    .row.justify-content-center.mb-4 
      .col-lg-8.col-md-12.col-12
        .bggg.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4.col-md-6
              ul.lista-ul--color.fa-ul.color-primario.ps-2.ps-md-4
                li.mb-1 
                  i.fas.fa-plus
                  | Nombre de la pieza.
                li.mb-1 
                  i.fas.fa-plus
                  | Referencia.
                li.mb-1 
                  i.fas.fa-plus
                  | Talla.
                li.mb-1 
                  i.fas.fa-plus
                  | Nombre del patronista.
                li.mb-1 
                  i.fas.fa-plus
                  | Simbología para corte.
                li.mb-1 
                  i.fas.fa-plus
                  | Número de veces a cortar.
                li.mb-1 
                  i.fas.fa-plus
                  | Piquetes de confección.
                li 
                  i.fas.fa-plus
                  | Líneas de aplomo.
            .col-lg-7.col-md-6
              img(src="@/assets/curso/temas/t1/img1.svg")

    p.mb-4 Se pueden anexar datos de estampación, cambios de color o material, acabados especiales, ubicación de bolsillos, etc. 
    
    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/t1/www.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Manual de Patronaje SENA
                  p.text-small.mb-0 Revisa el documento para aprender más sobre manual de Patronaje SENA
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.studocu.com/co/document/universidad-sergio-arboleda/confeccion/manual-de-patronaje-basico-sena/87155960" target="_blank")
                    span Enlace
                    i.fas.fa-globe

    Separador
    #t_1_5.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.5 Elaboración de básicos infantil

    p.mb-4 Este proceso está diseñado para iniciar siempre desde los básicos en la metodología SENA, desarrollado de la siguiente forma:

    SlyderF.mb-5(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/bombillo.svg' alt='')
        .tarjeta.bg10
          .p-4.pt-5
            h5.text-center Tipo de plano
            p  Identificar qué tipo de plano se va a trabajar, si es un plano unido, separado o montado.      
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/bombillo.svg' alt='')
        .tarjeta.bg10
          .p-4.pt-5
            h5.text-center Rectángulo
            p Todo básico inicia siempre desde un rectángulo, el cual se traza con la medida de contorno más protuberante y el largo más largo de la parte del cuerpo a trabajar.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/bombillo.svg' alt='')
        .tarjeta.bg10
          .p-4.pt-5
            h5.text-center Medida más larga a trabajar
            p El largo inicial del rectángulo se trabaja con la medida más larga de la parte del cuerpo a trabajar, por ejemplo, en el pantalón es: largo de pantalón, en la falda: altura de rodilla, en el superior: largo de talle posterior.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/bombillo.svg' alt='')
        .tarjeta.bg10
          .p-4.pt-5
            h5.text-center Medida en el trazo
            p Las medidas que se trabajan en la metodología en algunos casos únicamente se sacan del cuadro de talla, la medida de contorno y largo, no se trabajan medidas como hombro, anchos, cuello y demás. Dichas medidas salen por fórmula o como se trabaja en temas anteriores por medidas deducidas.
            p.mb-0 En infantil la medida de cuello posterior equivale a:
            p.mb-0 B/20+2.5 = B (Contorno de pecho) / 20 + 2.5
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/bombillo.svg' alt='')
        .tarjeta.bg10 
          .p-4.pt-5
            h5.text-center Manejo del papel
            p.mb-0 Por lo general el trazo de moldes se suele hacer con papel trazo o #[em manifold], dicho papel tiene dos caras, una cara que al tacto es liso y visualmente brillante; otra que al tacto es corrugada y visualmente opaca. Por lo general se recomienda trabajar por la parte corrugada con el fin de tener una mejor adhesión del grafito (lápiz) y de no permitir que rebote la luz, es recomendable trabajar en papel blanco con el fin de no cansar la vista y descansar la mente.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/bombillo.svg' alt='')
        .tarjeta.bg10
          .p-4.pt-5
            h5.text-center Medida más protuberante a trabajar
            p Por lo general el manual trabaja con fórmulas o convenciones, en la mayoría de los casos la medida más protuberante es sustituida por una letra, por ejemplo, en infantil, contorno de pecho (medida más protuberante de la cintura para arriba) equivale o es igual a la letra “B”.
            p.mb-0 B = Contorno de pecho de la talla a trabajar.
            p.mb-0 Talla 6: B = 68 cm (Contorno de pecho del cuadro de tallas correspondiente a la talla 6).

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base superior infantil
    
    p.mb-4 Para obtener más información sobre este proceso, le recomiendo visitar el siguiente enlace de video. En él, se explica detalladamente cada etapa del diseño y confección de prendas, desde la representación tridimensional del cuerpo humano hasta la creación de los moldes y el ensamblaje final de la prenda. Este recurso proporcionará una comprensión más profunda y clara de cómo las figuras tridimensionales se transforman en prendas de vestir mediante técnicas de patronaje y costura.

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/IFVssuNFdEc?si=MgHVXn5kD1c3_Nxh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Base superior infantil
    
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base inferior falda infantil

    p.mb-4 Para conocer acerca de este proceso explore el siguiente video:

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/otIp33OfC-4?si=aC3vZW-fwJVVk-p6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Base inferior falda infantil
  
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base inferior pantalón infantil
    
    p.mb-4 Para conocer en detalle este proceso, le recomiendo ir al siguiente video. En él, se explican paso a paso todas las fases involucradas en la creación de prendas de vestir, ayudando así a entender cómo se transforma una idea de diseño en una prenda.
    figure.mb-0(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WGSVbqigNXo?si=VfG0Q2R66lWAv-fY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Base básico de pantalón infantil

    
    Separador
    #t_1_6.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.6 Elaboración de básicos masculinos

    p.mb-3 Este recurso le guiará a través de los pasos fundamentales del proceso, desde la creación de patrones hasta la confección final de prendas masculinas básicas. Al visitar este video, podrá apreciar las técnicas y metodologías utilizadas para diseñar y producir ropa masculina esencial, proporcionándole un conocimiento práctico y visual de cada etapa involucrada.

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/BlBjJsMQYEQ?si=vKckYf8LkpncqlMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Elaboración de básicos masculinos
    
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base superior masculina #[em Slim-fit]

    p.mb-4 Para conocer acerca de este proceso visite el siguiente video:

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/lLLtWBVK-zA?si=02jQuPD-phNezbkT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Base superior masculina #[em Slim-fit]
    
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base inferior pantalón masculino
    p.mb-4 Para obtener una comprensión detallada sobre la "Base inferior del pantalón masculino", diríjase al recurso que lo guiará a través de los pasos fundamentales del proceso, desde la creación del patrón base hasta la confección final del pantalón. Allí, podrás conocer las técnicas y metodologías utilizadas para diseñar y producir pantalones masculinos, proporcionándole un conocimiento práctico de cada etapa involucrada.

    figure.mb-0(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/kUN0Zv0mpUA?si=ydL_V5uFEyNUBu1h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Base inferior pantalón masculino
    

    Separador
    #t_1_7.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.7 Elaboración de básicos femeninos
    
    p.mb-4 Cómo se referencia en temas anteriores, se debe iniciar revisando y analizando el cuadro de tallas para identificar: la talla, las medidas, incrementos y diferencias que se van a trabajar. El desarrollo de básicos funciona de la siguiente forma:
    
    ul.lista-ul--color.fa-ul.color-primario.ps-2.ps-md-4.mb-5
      li 
        i.fas.fa-plus
        span.mb-0 #[b Tipo de plano:] identificar qué tipo de plano se va a trabajar, si es un plano unido, separado o montado.
      li 
        i.fas.fa-plus
        span.mb-0 #[b Rectángulo:] todo básico inicia siempre desde un rectángulo, el cual se traza con la medida de contorno más protuberante y el largo más largo de la parte del cuerpo a trabajar.
      li 
        i.fas.fa-plus
        span.mb-0 #[b Cuadro de tallas:] en el caso de femenino, para la elaboración de los básicos se trabaja con las medidas del cuadro de tallas, es decir cada punto de referencia sobre el cuerpo es trabajado del cuadro de tallas, a diferencia de lo anterior, este desarrollo hace necesario identificar todo el listado de las medidas que se van a implementar para hacer el desarrollo.
      li 
        i.fas.fa-plus
        span.mb-0 #[b Manejo del papel:] por lo general el trazo de moldes se suele hacer con papel trazo o #[em manifold], dicho papel tiene dos caras, una cara que al tacto es liso y visualmente brillante y otra que al tacto es corrugada y visualmente opaca, por lo general se recomienda trabajar por la parte corrugada con el fin de tener una mejor adhesión del grafito (lápiz) y de no permitir que rebote la luz, es recomendable trabajar en papel blanco con el fin de no cansar la vista y descansar la mente.
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base superior femenina

    p.mb-4 Para conocer en detalle este proceso, le sugiero el siguiente video, en el que se explican de manera exhaustiva todas las fases involucradas en la elaboración de prendas de vestir, centrándose en la "Base superior femenina".  Allí podrá conocer una guía o paso a paso desde la creación hasta la confección final de las prendas. 

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MJJln-zDjfc?si=J4oykXk74s426TOK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Base superior femenino
    
    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base inferior falda femenina

    p.mb-4 Este recurso le proporcionará una paso a paso y así entender mejor las técnicas y metodologías utilizadas en el diseño y producción de ropa, ofreciéndote una comprensión práctica sobre la base inferior de falda. 

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WKzG-VWf6oo?si=_mufo8V5MdPT0HEv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Base inferior falda femenino

    
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.ms-2 Base inferior pantalón femenino

    p.mb-4 Para obtener una comprensión detallada sobre la "Base inferior del pantalón femenino", diríjase al recurso que lo guiará en las técnicas y metodologías empleadas en el diseño y producción de pantalones femeninos. 

    figure.mb-0(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/AaLSVib6v5U?si=v_R3AgOLjkOOHDFN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Base inferior de pantalón femenino
    


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    indicadorTarjetaSlide: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
