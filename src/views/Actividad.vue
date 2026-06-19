<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reconocimiento de la estructura corporal',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de los conceptos técnicos relacionados con la estructura corporal, las medidas anatómicas y su aplicación en el patronaje industrial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad principal de reconocer la estructura corporal antes de iniciar un proceso de patronaje industrial de prendas de vestir?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Interpretar proporciones, volúmenes y posturas para transformar el cuerpo en patrones funcionales y técnicamente ajustados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Seleccionar colores, texturas y acabados decorativos para definir la apariencia comercial de cada prenda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar únicamente el tipo de máquina que se empleará durante el ensamble final de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Clasificar insumos de confección según precio, proveedor y disponibilidad dentro del proceso productivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de la estructura corporal como punto de partida para interpretar medidas, volúmenes y necesidades técnicas del patronaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 2,
          texto:
            '¿Qué relación establece correctamente la arquitectura del cuerpo con los conceptos técnicos usados en prepatronaje?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La anatomía estudia la postura, la ergonomía estudia las medidas y la antropometría analiza únicamente los movimientos articulares.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La anatomía aborda estructura; la biomecánica, el movimiento; la morfología, la geometría del cuerpo; la ergonomía, la postura y la antropometría, las medidas corporales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La morfología define puntadas, la biomecánica clasifica máquinas y la ergonomía establece los márgenes de costura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La antropometría selecciona textiles, la anatomía calcula desahogos y la ergonomía determina acabados de confección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se reconoce apropiación de los conceptos que articulan anatomía, biomecánica, morfología, ergonomía y antropometría en el análisis corporal.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 3,
          texto:
            '¿Cómo se divide técnicamente el cuerpo desde la cintura para relacionarlo con prendas superiores e inferiores?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En región frontal y dorsal, asociando el frente con prendas formales y la espalda con prendas funcionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'En zona anatómica y zona textil, separando medidas directas de medidas normalizadas para cuadros industriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En prendas superiores, que comprenden cabeza, tronco y miembros superiores, y prendas inferiores, vinculadas con extremidades inferiores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'En plano anatómico y plano productivo, diferenciando moldes de corte y operaciones de confección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de la división corporal aplicada a la clasificación inicial de prendas superiores e inferiores.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 4,
          texto:
            '¿Cuál descripción corresponde a la posición anatómica utilizada como referencia para el estudio del cuerpo humano?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuerpo sentado, brazos cruzados, cabeza inclinada y pies apoyados lateralmente para observar los puntos de tensión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuerpo inclinado, piernas flexionadas, manos en reposo y mirada lateral para analizar la movilidad cotidiana.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cuerpo de pie, palmas hacia el cuerpo, hombros relajados y pies juntos para evaluar únicamente la postura neutra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cuerpo de pie, cabeza recta, brazos extendidos, palmas hacia adelante, piernas separadas y pies orientados al frente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se demuestra comprensión de la posición anatómica como referencia básica para describir el cuerpo con precisión técnica.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 5,
          texto:
            '¿Qué función cumplen los planos anatómicos dentro del análisis corporal aplicado al patronaje de prendas de vestir?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permiten describir divisiones espaciales del cuerpo para ubicar estructuras, movimientos y relaciones necesarias en el trazo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sirven para calcular exclusivamente el consumo de tela requerido en cada talla antes del proceso de corte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definen la secuencia operacional de ensamble y la maquinaria requerida para cerrar cada pieza de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organizan los acabados decorativos según temporada, línea de mercado y universo de vestuario proyectado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los planos anatómicos como referencias espaciales esenciales para interpretar el cuerpo en el trazo técnico.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 6,
          texto:
            '¿Cuál opción diferencia correctamente el plano sagital, el plano frontal y el plano transversal del cuerpo humano?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El sagital divide superior e inferior, el frontal divide derecha e izquierda y el transversal divide anterior y posterior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El sagital divide derecha e izquierda, el frontal divide anterior y posterior y el transversal divide superior e inferior.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El sagital separa torso y extremidades, el frontal separa cadera y cintura y el transversal separa cuello y hombros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El sagital organiza contornos, el frontal organiza largos y el transversal organiza anchos para cuadros de tallas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se reconoce apropiación de la función de cada plano anatómico en la lectura espacial del cuerpo humano.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 7,
          texto:
            '¿Por qué la antropometría es fundamental para construir cuadros de tallas y moldes básicos en patronaje industrial?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque define las máquinas adecuadas para ensamblar prendas según tipo de puntada, arrastre y material textil.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque establece los colores de identificación de cada talla dentro de la ficha técnica de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque estudia proporciones y medidas corporales, permitiendo estandarizar referencias para trazos, ajustes y escalados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Porque clasifica únicamente los tejidos según elasticidad, caída, peso y comportamiento durante la confección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del papel de la antropometría en la estandarización de medidas corporales para patronaje y escalado.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 8,
          texto:
            '¿Qué aporte realiza la ergonomía al diseño técnico y construcción de prendas de vestir funcionales?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Define la resistencia del hilo y selecciona el calibre de aguja requerido para cada clase de material.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establece la fórmula de conversión entre pulgadas, centímetros y milímetros para elaborar cuadros industriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Clasifica las fibras textiles según origen natural, artificial o sintético para determinar el acabado final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Analiza la adaptación de la prenda a las características físicas del usuario para favorecer el confort y la postura.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se demuestra comprensión de la ergonomía como criterio para adaptar la prenda al cuerpo, al uso y a la postura del usuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 9,
          texto:
            '¿Cuál enunciado describe correctamente la biomecánica dentro del reconocimiento de la estructura corporal?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Estudia la actividad física, las fuerzas y los movimientos corporales para prever exigencias funcionales de la prenda.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Registra únicamente las medidas horizontales del cuerpo para construir tablas de tallas normalizadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determina la clasificación comercial de las prendas según línea femenina, masculina, infantil o deportiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organiza los moldes sobre la tela para mejorar el aprovechamiento durante el proceso de corte industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de la biomecánica como base para relacionar movimiento corporal y funcionalidad de la prenda.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 10,
          texto:
            '¿Qué caracteriza al somatotipo ectomorfo dentro de la clasificación de formas corporales?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presenta cuerpo grande, huesos gruesos, alta acumulación de grasa y dificultad frecuente para perder volumen corporal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Presenta estructura delgada, huesos largos, poca grasa, poco músculo y tendencia a no ganar peso fácilmente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Presenta musculatura natural, hombros anchos, cuerpo atlético y facilidad para ganar masa muscular definida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Presenta volumen abdominal prominente, cintura amplia, cadera estrecha y distribución irregular del peso corporal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se reconoce apropiación de las características morfológicas asociadas al somatotipo ectomorfo y su lectura corporal.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 11,
          texto:
            '¿Cuál descripción corresponde al somatotipo mesomorfo según la clasificación corporal abordada en el componente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuerpo delgado, huesos largos, pecho plano, hombros pequeños y metabolismo rápido con baja ganancia muscular.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuerpo blando, redondo, bajo y fornido, con facilidad para acumular grasa y metabolismo lento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cuerpo atlético, musculatura natural, hombros anchos, fuerza espontánea y facilidad para desarrollar músculo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Cuerpo ovalado, abdomen dominante, extremidades cortas y predominio de medidas transversales sobre verticales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio de la clasificación mesomorfa y de sus rasgos relevantes para el análisis corporal en vestuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 12,
          texto:
            '¿Qué propósito tiene identificar las tipologías corporales o siluetas en el desarrollo técnico de prendas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar la toma de medidas, evitando cuadros de tallas y reduciendo el número de patrones base.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Seleccionar únicamente accesorios, cierres y complementos decorativos según el estilo visual del diseño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar el costo final de producción, considerando tiempos, insumos, maquinaria y procesos de terminación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reconocer contornos y proporciones generales para orientar ajustes, desahogos y decisiones de construcción del patrón.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se demuestra comprensión de las siluetas como lectura morfológica útil para orientar ajustes y decisiones de patronaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 13,
          texto:
            '¿Cuál afirmación interpreta adecuadamente las formas corporales dentro del enfoque técnico del componente formativo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las formas corporales presentan características particulares y no deben clasificarse como buenas, malas, bellas o feas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Las formas corporales se organizan jerárquicamente para seleccionar cuerpos ideales dentro del patronaje industrial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las formas corporales se valoran principalmente por criterios estéticos antes de definir medidas y trazos técnicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las formas corporales se sustituyen por tallas normalizadas sin necesidad de observación anatómica individual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación de una lectura técnica y no valorativa de las diferencias corporales aplicadas al patronaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 14,
          texto:
            '¿Por qué la postura debe analizarse antes de interpretar medidas y desarrollar patrones de prendas de vestir?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque modifica la distribución del peso, el equilibrio corporal y las medidas observadas sobre una misma estructura.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque determina el color de las piezas, la ubicación de estampados y la elección de acabados decorativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque reemplaza los sistemas de medidas y permite trabajar sin puntos antropométricos de referencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque define únicamente la velocidad de máquina y la longitud de puntada durante el ensamble.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se reconoce la postura como factor que incide en la distribución de pesos, el equilibrio y la lectura de medidas corporales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 15,
          texto:
            '¿Qué diferencia existe entre las medidas anatómicas y las medidas de prenda dentro del patronaje?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las anatómicas incluyen holguras de uso, mientras las de prenda se toman directamente sin aumentos sobre el cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las anatómicas se toman justas sobre el cuerpo, mientras las de prenda incorporan holguras según uso y funcionalidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Las anatómicas se calculan desde fichas técnicas, mientras las de prenda se deducen únicamente por fórmulas verticales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las anatómicas corresponden a insumos textiles, mientras las de prenda corresponden a máquinas y costuras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de la diferencia entre medidas corporales exactas y medidas de prenda con holguras funcionales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 16,
          texto:
            '¿Cuál opción clasifica correctamente las medidas corporales usadas en patronaje según su forma de toma?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contornos alrededor de la zona, largos en sentido vertical y anchos en sentido horizontal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Contornos en sentido diagonal, largos alrededor del cuerpo y anchos desde cuello hasta piso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Contornos para costuras, largos para puntadas y anchos para acabados de confección.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Contornos para máquinas, largos para insumos y anchos para ficha técnica industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se demuestra dominio de la clasificación básica de medidas en contornos, largos y anchos dentro del patronaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 17,
          texto:
            '¿Qué caracteriza a las medidas deducidas dentro de la construcción de cuadros de tallas?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se obtienen directamente del cuerpo, sin fórmulas, considerando únicamente postura, edad y masa corporal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se calculan a partir de otras medidas mediante fórmulas comprobadas y deben aplicarse de manera progresiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se agregan únicamente como márgenes de costura para facilitar el ensamble de las piezas del patrón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se seleccionan visualmente según silueta, material textil y estilo final definido por diseño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se reconoce apropiación del uso de fórmulas para obtener medidas deducidas y evitar combinaciones técnicas inadecuadas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 18,
          texto:
            '¿Qué representa el drop femenino en el análisis morfológico de tallas para prendas de vestir?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La diferencia entre cintura y pecho, usada para establecer la relación masculina entre torso y abdomen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La diferencia entre altura total y séptima cervical, usada para obtener el largo útil del cuerpo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La diferencia entre contorno de cadera y contorno de busto, usada para reconocer contexturas femeninas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La diferencia entre pecho y cuello, usada para calcular mangas, hombros y ancho de espalda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión del drop femenino como relación entre cadera y busto para identificar contexturas corporales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 19,
          texto:
            '¿Qué acción corresponde al paso de despiece dentro del procedimiento técnico de patronaje?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cortar directamente el plano original para usarlo como molde definitivo durante el tendido industrial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Modificar la postura del usuario para ajustar las medidas antes de construir el cuadro de tallas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir la maquinaria de ensamble, los hilos, las agujas y las puntadas requeridas por operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Calcar cada pieza del plano, recortarla separadamente y marcar señalización, costuras y complementos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se demuestra dominio del despiece como etapa de separación, marcación y preparación técnica de cada patrón.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
        {
          id: 20,
          texto:
            '¿Qué información debe incluirse en cada pieza del patrón al aplicar la metodología técnica de patronaje?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Nombre de pieza, referencia, talla, patronista, simbología de corte, número de cortes, piquetes y líneas de aplomo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Color principal, tendencia de temporada, precio de insumos, proveedor textil, empaque final y canal comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Velocidad de máquina, presión del prensatelas, tipo de motor, lubricación, generación tecnológica y mueble.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Nombre del cliente, fecha de compra, fotografía del diseño, tipo de tienda y estrategia de mercadeo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia apropiación de la información técnica necesaria para identificar y comunicar correctamente cada pieza del patrón.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión de la estructura corporal y su aplicación técnica en patronaje.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra apropiación de los fundamentos sobre estructura corporal, medidas anatómicas y criterios técnicos aplicados al patronaje industrial.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
