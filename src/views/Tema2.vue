<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Alistamiento para elaboración de muestra física 1

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img.dor(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/cajong.png')})`}"
      )
      .bloque-texto-g__texto.dos.p-4
        p.mb-0 En primer lugar, se abordarán las generalidades, aplicaciones e importancia de la fundamentación técnica básica en reconocimiento y manejo de máquinas de confección; conceptos básicos en puntadas, costuras, agujas, tejidos, entre otros criterios específicos de la relación aguja-hilo, aguja-tejido, hilo-tejido, preparación y puesta a punto de las máquinas, especificaciones técnicas y de calidad en las operaciones de confección. De igual manera se abordarán temas pertinentes al cuidado y seguridad de las diferentes máquinas de confección. 
    

    Separador
    #t_2_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.1 Tipos de máquinas
    
    p(data-aos="fade") La identificación de máquinas y equipos en la industria de la confección es crucial para optimizar, facilitar y organizar los diversos procesos involucrados. Esta identificación define las características específicas de cada máquina, incluyendo sus usos en el proceso de confección, los tipos según las líneas de producción, las variedades de puntadas y aplicaciones, los tipos de tomadores de lazada, y los sistemas de alimentación o arrastre de tela.
    p(data-aos="fade") Las máquinas se pueden clasificar según los procesos productivos en los que se utilizan, como la preparación, el ensamble y la terminación. Además, se agrupan según las líneas de producción, tales como prendas interiores, exteriores, #[em jeans], artículos para el hogar, y ropa deportiva. También se pueden categorizar por tipos específicos de máquinas, como las de doble pespunte, cadeneta, sobrehilado y de ciclo.
    p.mb-4(data-aos="fade") Por tanto, la clasificación de las máquinas comienza por su capacidad en el proceso de confección. En función de la potencia que tienen para coser diferentes materiales y su velocidad, las máquinas se dividen en diversas categorías que reflejan su rendimiento y eficiencia en la producción.

    AcordionA.t2-1.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Máquinas familiares o domésticas")
        .col-lg-2.col-md-3.col-7.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t2/maquina.png', alt='')
        .col-md-9
          p Máquinas que por su versatilidad poseen las siguientes características:
          ul.lista-ul--color.color-primario.fa-ul
            li.mb-1
              i.fas.fa-plus
              | Muy baja velocidad (500 a 1000 rpm).
            li.mb-1
              i.fas.fa-plus
              | Muy baja potencia.
            li.mb-1
              i.fas.fa-plus
              | Facilidad para desplazarlas (portátiles en su gran mayoría).
            li.mb-1
              i.fas.fa-plus
              | Lubricación manual.
            li.mb-1
              i.fas.fa-plus
              | Materiales de sus elementos (en la gran mayoría de plástico).
            li.mb-0
              i.fas.fa-plus
              p Diversas puntadas: costura recta, #[em Zigzag] 1 y 3 pasos, ojal recto, pegar botón, algunas pueden hacer puntadas decorativas.
      .row.justify-content-center(titulo="Máquinas semi-industriales")
        .col-lg-2.col-md-3.col-7.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t2/maquina2.png', alt='')
        .col-md-9
          p Sus características se acercan más a la industria, pero todavía no alcanza el rendimiento productivo:
          ul.lista-ul--color.color-primario.fa-ul
            li.mb-1 
              i.fas.fa-plus
              | Velocidad. (1725 rpm).
            li.mb-1 
              i.fas.fa-plus
              | Potencia media, permite coser mayores capas de material que las familiares.
            li.mb-1 
              i.fas.fa-plus
              | Lubricación manual en la gran mayoría de casos (en la actualidad vienen con bomba de lubricación).
            li.mb-0
              i.fas.fa-plus
              p Diversidad de puntadas: costura recta, #[em Zigzag] sencillo, ojal recto, pegar botón, pegar apliques.
      .row.justify-content-center(titulo="Máquinas industriales")
        .col-lg-2.col-md-3.col-7.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t2/maquina3.png', alt='')
        .col-md-9
          p Con estos tipos de máquinas, se inicia en el mundo de la productividad, calidad, optimización de recursos en la diversa actualidad del sistema moda, entre sus características están:
          ul.lista-ul--color.color-primario.fa-ul
            li.mb-1 
              i.fas.fa-plus
              | Velocidad, llegan a alcanzar hasta 6,000 R.P.M.
            li.mb-1 
              i.fas.fa-plus
              | Potencia alta permite trabajar capas de material por su gran capacidad de penetración de los mecanismos de puntada.
            li.mb-1 
              i.fas.fa-plus
              | Lubricación automática.
            li.mb-0 
              i.fas.fa-plus
              p Existen maquina industriales como: #[em zigzag] sencillo, doble o triple, plana de una y dos agujas, de coser y cortar fileteadoras sencillas, de refuerzo/seguridad, recubridoras o collarín, pretinadora, multiagujas, cerradora de codo, #[em Flatseamer], entre otras.
      .row.justify-content-center(titulo="Máquinas de ciclo")
        .col-lg-2.col-md-3.col-7.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t2/maquina4.png', alt='')
        .col-md-9
          p Son aquellas que están construidas para cumplir una función específica en un ciclo como hacer un ojal, pegar un botón o un aplique, hacer una presilla entre otras. En este tipo de máquina, el operador solo tiene que ubicar el material, accionar un mando y la máquina en un ciclo realiza la operación. Entre las comunes están:
          ul.lista-ul--color.color-primario.fa-ul
            li.mb-1 
              i.fas.fa-plus
              | Presilladora.
            li.mb-1 
              i.fas.fa-plus
              | Botonadora.
            li.mb-1 
              i.fas.fa-plus
              | Ojaladora de ojal recto.
            li.mb-0 
              i.fas.fa-plus
              | Ojaladora de ojal de lágrima.

    p.mb-4(data-aos="fade") Con base en los diferentes tipos de máquinas por estructura, tipo o trabajo, las partes del cabezote se dividen en cuatro y es importante describirlas porque es donde se aloja el conjunto de elementos mecánicos que dan origen a los mecanismos de las máquinas, estas partes se conocen como:
    
    
    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-8
        img(src='@/assets/curso/temas/t2/g1.svg' alt='En la imagen se representa una máquina de coser con diferentes partes etiquetadas, como "Columna", "Cama", "Cabeza" y "Brazo". Un trozo de tela amarilla con las letras "M" y "J" bordadas cuelga de la máquina, indicando una operación de costura en proceso.')

    p.mb-4(data-aos="fade") Y es, esta última, la que cobra vital importancia en el origen de las operaciones más relevantes de un producto a confeccionar, bien sea, por su dificultad, complejidad, tiempo de producción, calidad, entre otros. Algunos tipos de máquinas pueden modificar la cama e incluso el mueble de la máquina para adaptarse mejor a las condiciones del producto, es por ello por lo que si se trabaja con prendas de gran volumen podemos encontrar términos en máquinas como:
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg-4.mb-3.mb-lg-0.pe-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarjeta.png' alt='')
          .tarjeta.bg12f
            .p-4
              h5.text-center Máquina sumergida
              p.text-center Cuando la cama de la máquina queda al mismo nivel del mueble de la máquina.
      .col-md-6.col-lg-4.mb-3.mb-lg-0.ps-lg-0.pe-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarjeta2.png' alt='')
          .tarjeta.bg7f
            .p-4
              h5.text-center.text-white Máquina semi-sumergida
              p.text-white.text-center Son las máquinas más comunes, el cárter o depósito de aceite se encuentra dentro del mueble y la cama de la máquina más arriba del mueble, su principal beneficio es el contorno de todo el mueble para usos de prendas de talla grande.
      .col-md-6.col-lg-4.mb-3.mb-lg-0.ps-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarjeta3.png' alt='')
          .tarjeta.bg12f
            .p-4
              h5.text-center Máquina no sumergida
              p.text-center Este concepto refiere a que la máquina está totalmente montada en el mueble, por aspectos de terminación de las prendas.
    
    p.mb-4(data-aos="fade") Retomando el aspecto más importante sobre las camas de las máquinas, se clasifican en:
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-sm-6.col-lg.mb-4.mb-lg-0
        .tarjeta.bg8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-md-10.col-7
              img(src='@/assets/curso/temas/t2/tarjeta4.png', alt='')
          h4.text-center Plana
          p.text-center.mb-0 Este tipo de cama facilita la manipulación del material en costuras de cocido recto y materiales anchos.
      .col-sm-6.col-lg.mb-4.mb-lg-0
        .tarjeta.bg8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-md-10.col-7
              img(src='@/assets/curso/temas/t2/tarjeta5.png', alt='')
          h4.text-center Cilíndrica o de brazo
          p.text-center.mb-0 Permite coser partes cilíndricas en su perímetro, su estructura es especialmente adecuada para trabajar piezas tubulares tales como puños, mangas, materiales cerrados, entre otros. Este tipo de cama también se emplea en la máquina de pegar botones.
      .col-sm-6.col-lg.mb-4.mb-lg-0
        .tarjeta.bg8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-md-10.col-7
              img(src='@/assets/curso/temas/t2/tarjeta6.png', alt='')
          h4.text-center Cilíndrica transversal o de codo
          p.text-center.mb-0 La zona cosida es transportada a lo largo del brazo hacia fuera. Permite coser partes cilíndricas o tubulares, operaciones tales como cerrar mangas, cerrar piernas de pantalón o #[em Jean], entre otros.
      .col-sm-6.col-lg.mb-4.mb-lg-0
        .tarjeta.bg8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-md-10.col-7
              img(src='@/assets/curso/temas/t2/tarjeta7.png', alt='')
          h4.text-center Poste
          p.text-center.mb-0 Se emplea en aplicaciones especiales que requieren el trabajo en tres dimensiones. La columna facilita el trabajo en zonas curvas y en esquina. Operaciones de marroquinería como confección de calzado y bolsos, entre otros. 
      .col-sm-6.col-lg.mb-4.mb-lg-0
        .tarjeta.bg8.p-4.h-100
          .row.justify-content-center.mb-3
            .col-md-10.col-7
              img(src='@/assets/curso/temas/t2/tarjeta8.png', alt='')
          h4.text-center Tipo zócalo
          p.text-center.mb-0 Este tipo de máquina se especializa en coser sólo al canto de costura. Costuras elásticas y de sobrehilado. 
    
    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-lg-7
        .bgf.p-4
          h4.mb-0.text-center Este tipo de cama facilita la manipulación del material en costuras de cocido recto y materiales anchos.

    
    p(data-aos="fade") En este punto, teniendo clara la descripción de las camas de las máquinas y contemplando que pueden cambiar por varios factores, uno de ellos por sus aplicaciones, bien sea en confección de ropa, de calzado, en marroquinería o tapicería, se continuará con las partes de la máquina.


    Separador
    #t_2_2.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.2 Partes de la máquina
    
    p.mb-4(data-aos="fade") Durante el proceso de reconocimiento de las máquinas por su capacidad de confección, ahora entran aspectos generales y otros particulares sobre los diferentes tipos de máquinas que se trabajarán a continuación.
    
    SlyderF.mb-5(columnas="col-lg-12" data-aos="fade-down")
      .tarjeta.color-primario.p-4
        .row.justify-content-around.align-items-center
          .col-lg-4.col-md-6.col-8.mb-4
            img(src='@/assets/curso/temas/t2/slyder.svg' alt='La imagen presenta un diagrama de una máquina de coser industrial, detallando componentes como el porta conos, cabezote o cabeza de la máquina, mueble, herraje, motor, interruptor y pedal, todos listados a la derecha sobre un fondo púrpura.')
          .col-lg-5
            h5 Aspectos generales:
            ul.lista-ul--color.color-acento-botones.fin.fa-ul
              li
                i.fas.fa-plus
                | Porta conos.
              li
                i.fas.fa-plus
                | Cabezote o cabeza de la máquina.
              li
                i.fas.fa-plus
                | Mueble. 
              li
                i.fas.fa-plus
                | Herraje.
              li
                i.fas.fa-plus
                | Motor.
              li
                i.fas.fa-plus
                | Interruptor.
              li
                i.fas.fa-plus
                | Pedal.
      .tarjeta.color-primario.p-4.px-5
        .row.justify-content-center
          h5 Aspectos particulares
          p Algunas partes de las máquinas se construyen con aspectos particulares, esto se debe a la posición, la forma y la función que cumple dentro de la máquina. Por ejemplo: el regulador de puntada en las máquinas planas y fileteadoras cumple la misma función, pero no se mueve igual y no se encuentran en la misma posición; sin embargo, se hablará de algunos elementos importantes dentro de la formación de la puntada, tales como:
        .row.justify-content-center
          .col-lg-3.lineas     
            h5.texto1 Tensores
            p Este mecanismo tiene como función regular la tensión del hilo de la aguja y controlar la alimentación del hilo para la formación de la puntada.
            .deco-linea
          .col-lg-3.lineas 
            h5.texto1 Guía hilos
            p Sirve para guiar el hilo durante todo su recorrido.
            .deco-linea
          .col-lg-3.lineas 
            h5.texto1 Palanca tira hilo
            p Es un dispositivo que tira la cantidad de hilo justa de la aguja desde su suministro. Suelta la cantidad necesaria para la formación de la puntada y saca el hilo sobrante para fijar las puntadas.
            .deco-linea
          .col-lg-3
            h5.texto1 Regulador de puntada
            p Regula el tamaño de la puntada, mientras menos es él número más pequeña es la puntada.
      .tarjeta.color-primario.p-4.px-5.py-md-5
        .row.justify-content-center
          .col-lg-3.lineas 
            h5.texto1 Tornillo regulador presión prensatelas
            p Este tornillo sirve para regular la presión que hay entre él prensatelas y la alimentación.
            .deco-linea
          .col-lg-3.lineas 
            h5.texto1 Barra de aguja
            p Su movimiento es rectilíneo vertical, sostiene la aguja en posición.
            .deco-linea
          .col-lg-3.lineas 
            h5.texto1 Ajuste (diente, planchuela, prénsatela)
            p Elementos que se ajustan a cada tipo de material o tejido, bien sea liviano, semi pesado o pesado.
            .deco-linea
          .col-lg-3
            h5.texto1 Barra prénsatela
            p Barra que sujeta el prénsatela o pie de la máquina.           
    p.mb-4 La educación es para todos por ello le invitamos a consultar el siguiente video en donde se describen las partes y funciones de la máquina plana.
    
    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WABFdmFNo8Y?si=CKMqwCC_jL4wCYCO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Partes y funciones de la maquina plana       

    p(data-aos="fade") En la industria de la confección, la diversidad de materiales como telas, hilos, agujas, y otros, junto con los diseños que evolucionan constantemente según las temporadas, requiere un conocimiento profundo y adaptativo. Los artículos varían desde ropa interior y de hogar hasta calzado, ropa exterior, carpas protectoras, velas de viento, maletas y estuches. Para cada uno de estos productos, es crucial selección.
    p(data-aos="fade") Este ajuste es fundamental para resolver problemas comunes como el deslizamiento de la tela y el fruncido de la costura. Entender los tipos y funciones de los alimentadores y prensatelas es esencial para manejar adecuadamente el desplazamiento de los materiales a coser, así mismo se debe  entender el funcionamiento y la importancia de cada uno de los elementos que lo componen los diferentes tipos de máquina.
    p.mb-4(data-aos="fade") Existen dos tipos principales de ajuste en la confección. El primero se aplica a máquinas de una sola aguja y a máquinas de dos o más agujas, permitiendo adaptar las máquinas al tipo de material que se va a trabajar, ya sea ligero (como #[em lycras]), semipesado (como dacrón) o pesado (como #[em jean]). El segundo tipo de ajuste regula la distancia entre las agujas, introduciendo así otro elemento crítico en el ensamblaje: el soporte de las agujas. Fundamentalmente, el ajuste influye en cómo el diente de la máquina agarra el tipo de tela, lo cual es decisivo para el rendimiento de la costura. A continuación, se detalla cada componente del ajuste para una comprensión más completa de su impacto en la confección.
    
    AcordionA.t2-2(tipo="b" clase-tarjeta="tarjeta--blanca")
      .row.justify-content-center(titulo="Ajuste de plana")
        .col-lg-8
          img(src='@/assets/curso/temas/t2/acordion.png', alt='La imagen describe componentes utilizados en el ajuste de una máquina de coser plana. Se observan tres elementos: una placa de aguja con dientes de arrastre, una placa de aguja con ranuras para la aguja y un pie prensatelas. El título "Ajuste de plana" indica que estos elementos son esenciales para el correcto funcionamiento de la máquina de coser plana.')
      .row.justify-content-center(titulo="Ajuste de máquina dos agujas")
        .col-lg-10
          img(src='@/assets/curso/temas/t2/acordion2.png', alt='La imagen expone varios componentes para el ajuste de una máquina de coser de dos agujas: el ajuste completo (Ref. 212) compatible con Singer, Brother, Mitsubishi y Sunstar en medidas 1/8", 3/16" y 1/4"; el pie con guía tope a la derecha (Ref. 212 x 3/16) en las mismas medidas y compatible con las mismas marcas; el pie especial para abrir costuras en copas de brassier (Ref. 212 x 3/16 P.A) con cinta brisa y medidas 1/8" (3.2mm) y 3/16" (4.8mm); y el pie con sobrecinta (Ref. 212 x 19 x 4.8) para colocar lycra espejo en copas de brassier, disponible en medidas 3/16, 6 y 1/4 según el modelo y tipo de material.')
      .row.justify-content-center(titulo="Planchuelas fileteadoras")
        .col-lg-10
          img(src='@/assets/curso/temas/t2/acordion3.png', alt='La imagen describe varios tipos de planchuelas fileteadoras, cada una enmarcada en un círculo púrpura. Los modelos incluyen la E52-131, identificada como parte de la serie 210629/210630; la DCZ-503, correspondiente a los modelos 34564, 34565 y 34566; la L32-01 de la serie 620271(hmm); y la L32-86, identificada como parte de la serie 213780/213781.')
      .row.justify-content-center(titulo="Ajuste recubridora en D")
        .col-lg-6
          img(src='@/assets/curso/temas/t2/acordion4.png', alt='La imagen presenta un conjunto de componentes para el ajuste de una recubridora en D. Los elementos  incluyen una placa de aguja, un prensatelas, varios soportes y guías, todos etiquetados con las referencias JZ-12311 y W600. Estos componentes son esenciales para el correcto funcionamiento y ajuste de una máquina recubridora, asegurando precisión y eficiencia en las tareas de costura.')
      .row.justify-content-center(titulo="Ajuste recubridora en F")
        .col-lg-6
          img(src='@/assets/curso/temas/t2/acordion5.png', alt='La imagen presenta un conjunto de componentes para el ajuste de una recubridora en F. Los elementos incluyen una placa de aguja, un prensatelas, varios soportes y guías, todos etiquetados con las referencias JZ-12314 y W562-5. Estos componentes son esenciales para el correcto funcionamiento y ajuste de una máquina recubridora, asegurando precisión y eficiencia en las tareas de costura')      
      .row(titulo="Diente")
        p.mb-3 Este dispositivo mecánico es el encargado de desplazar el material a coser; el diente para poder desplazar el material debe sujetarlo, esa función la realiza con la parte superior que hace contacto con la tela y en el momento que comienza a transportarlo por efecto de la fricción la tela se incrusta entre la separación de los dientes y es así como el diente desplaza el material.
        p.mb-4 El diente para poder desplazar el material debe sujetarlo, esa función la realiza con la parte superior que hace contacto con la tela y en el momento que comienza a transportarlo por efecto de la fricción la tela se incrusta entre la separación de los dientes y es así como el diente desplaza el material.
        p.mb-4 Los dientes vienen de diferentes tamaños, para diferenciarlos se debe medir la cantidad de dientes que haya en una pulgada o la separación existente entre ellos, si se mide en mm (Milímetros). Para seleccionar los dientes se debe tener en cuenta el material a confeccionar.
        .row.align-items-center.bg13.mb-4.p-4
          .col-md-6.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t2/figura.svg', alt='La imagen explica la selección de dientes para una máquina de coser según su tamaño y separación, medidos en dientes por pulgada o milímetros, y el material a confeccionar. Los dientes de 16 a 24 por pulgada son para telas normales, mientras que dientes con 2-5 mm de separación son para cuero y lonas. Los dientes piramidales tienen más de 24 por pulgada.')
          .col-md-6
            p.mb-0 Los dientes se identifican de, 16,18, 20 y 24 dientes por pulgada para telas tejidas normales, para materiales compactos como el cuero y lonas se identifican dientes hasta de 2.5mm de separación, también se identifican piramidales, cuando supera los 24 dientes por pulgada como en las familiares. Además, se debe tener en cuenta la cantidad de hileras del diente.
        .row.align-items-center.mb-4
          .col-md-6
            p Cuando se selecciona el diente inadecuado puede suceder lo siguiente.
            p Si la separación del diente es grande y el material delgado, cuando el diente transporta la tela esta se incrusta entre el diente haciendo olas, dando como resultado una costura con recogido.
          .col-md-6
            img(src='@/assets/curso/temas/t2/figura2.svg', alt='La imagen ejemplifica lo que puede suceder cuando se usan dientes inadecuados, por ejemplo, los dientes grandes en material delgado crean ondas y recogido.') 
        .row.align-items-center.bg13.mb-4.p-4
          .col-md-6.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t2/figura3.svg', alt='La imagen ejemplifica los dientes pequeños, que cuando son utilizados en material grueso que no sujetan bien la tela, se pueden ocasionar daños en el material.')
          .col-md-6
            p.mb-0 Si la separación del diente es pequeña y el material grueso, cuando el diente transporta, la tela no es sujetada por el diente ocasionando pega y daños en el material.      
      .row.justify-content-center(titulo="Prensatelas")
        .col-lg-11
          .row.justify-content-center
            .col-lg-2.col-md-8.mb-3
              img(src='@/assets/curso/temas/t2/prensa.svg', alt='')
            .col-lg-10
              p.mb-5 Es el encargado de apoyar el material contra el diente para que pueda ser transportado, la presión que se le debe dar al prensatelas varía de acuerdo con el material, porque si la presión no es la adecuada la apariencia de la costura no es la requerida.
              p.mb-4 Se debe tener en cuenta que el prensatelas solo hace contacto con la tela superior, problemas por una presión inadecuada en el prensatelas:
          .cajaf.p-3
            ul.lista-ul--color.fa-ul.color-primario.ps-4
              li
                i.fas.fa-plus
                | Cuando la presión es demasiada el diente en su ascenso puede dañar la tela, o como la fricción con la tela superior es demasiada al terminar la costura la tela superior es más extensa que la inferior con una apariencia lisa por encima y recogida por debajo.
              li
                i.fas.fa-plus
                | Cuando la presión es poca, la tela no alcanza a incrustarse en el diente ocasionando que esta se pegue y varía la cantidad de puntadas por pulgada. 
            p.ps-4 #[b Nota:] el ancho de la base del pie prensatelas debe de ser igual al ancho del diente y cubrirlo en un 90 % de su recorrido.      
      .row(titulo="Planchuela")
        .row.bg13.p-4.p-md-5
          p.mb-0 Es el elemento que sirve de apoyo al material cuando el diente se encuentra regresando, además viene provista de un orificio que es el lugar de penetración de la aguja, este orificio varía de acuerdo con el ajuste pues él debe de ser un 40 % más amplio que la hoja de la aguja. La planchuela tiene carriles, estos deben ser iguales al número de carriles del diente además el diente debe de desplazarse en la totalidad del carril de la plancha.      
      .row(titulo="Tomador de lazada")
        p Es el elemento mecánico que junto con la aguja se encarga de formar la puntada. Estos elementos son auxiliados algunas veces en la formación de la puntada por otros elementos mecánicos. Los más reconocidos son:
        .row.bg13.mb-4.p-2
          h5.text-center.mb-0 Clases de tomadores de lazada
        .row.align-items-center.mb-4
          .col-lg-3.col-md-5.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t2/figura4.png', alt='')
          .col-lg-9.col-md-7
            ul.lista-ul--color.fa-ul.color-primario
              li
                i.fas.fa-plus
                span.mb-0 #[b Gancho rotatorio:] es un elemento mecánico que, junto con la aguja, sirve para formar las puntadas pertenecientes a la serie 300 (doble pespunte) dando revoluciones completas.
        .bg14.p-4.mb-4
          .row.align-items-center
            .col-lg-10.col-md-8
              ul.lista-ul--color.fa-ul.color-primario
                li
                  i.fas.fa-plus
                  span.mb-0 #[b Corchete:] este elemento es utilizado para producir la puntada de cadeneta a un hilo, siempre da revoluciones completas, si la máquina tiene alimentación, trabaja sólo con la aguja, pero si esto sólo tiene transporte, necesita de un elemento auxiliar llamado extensor, para compensar la falta del alzador en máquina. 
            .col-lg-2.col-md-4.col-8
              img(src='@/assets/curso/temas/t2/figura5.png', alt='')
        .row.align-items-center.mb-4
          .col-lg-2.col-md-3.col-6.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t2/figura6.png', alt='')
          .col-lg-10.col-md-9
            ul.lista-ul--color.fa-ul.color-primario
              li
                i.fas.fa-plus
                span.mb-0 #[b Extensor:] este elemento mecánico es utilizado en la mayoría de las veces como auxiliar de los #[em Looper], corchetes, para formar varios tipos de puntadas de diferentes series.
        .mb-4.bg14.p-4
          .row.align-items-center
            .col-lg-9.col-md-7
              ul.lista-ul--color.fa-ul.color-primario
                li
                  i.fas.fa-plus
                  span.mb-0 #[b #[em Looper:]] es un elemento que tiene hilo propio o sea se puede enhebrar como las agujas, es decir tiene ojo.  Se usa para la elaboración de las puntadas de las series 400, 500, 600. 
            .col-lg-3.col-md-5
              img(src='@/assets/curso/temas/t2/figura7.png', alt='')        
        .row.align-items-center.mb-4
          .col-lg-2.col-md-3.col-6.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t2/figura8.png', alt='')
          .col-lg-10.col-md-9
            ul.lista-ul--color.fa-ul.color-primario
              li
                i.fas.fa-plus
                span.mb-0 #[b Recubridor:] elemento mecánico que sin llevar ojo guía para el hilo, si lleva hilo, el cual extiende sobre la tela superior al formar la puntada de cadeneta con recubridor, dicho hilo es sostenido por el hilo de la aguja, cada que el material avance. Ejemplo: La puntada utilizada en algunas prendas interiores tanto para dama como para hombre, usada para unir el resorte con la tela.
        .bg14.p-4
          .row.align-items-center
            .col-lg-10.col-md-9
              ul.lista-ul--color.fa-ul.color-primario
                li
                  i.fas.fa-plus
                  span.mb-0 #[b Lanzadera:] es un elemento mecánico que, junto con la aguja, sirve para formar las puntadas pertenecientes a la serie 300 (doble pespunte), su movimiento es oscilatorio. 
            .col-lg-2.col-md-3.col-6
              img(src='@/assets/curso/temas/t2/figura9.png', alt='')
    

    Separador
    #t_2_3.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.3 Alimentación y transporte
    
    p(data-aos="fade") La relación entre el ajuste y el sistema de alimentación o transporte es un factor clave en la diferenciación de maquinaria dentro del proceso productivo. Los distintos tipos de alimentación determinan la línea productiva específica del artículo a fabricar, influyendo también en la variedad de materiales utilizados en la industria, como tejidos, no tejidos, aglomerados, cueros, cuerinas y lonas.
    p.mb-4(data-aos="fade") En la maquinaria de confección, la alimentación se refiere al movimiento del material que se va a coser. Sin embargo, en ciertos casos, como en la fabricación de colchones donde el material es demasiado pesado, no se desplaza el material sino la misma máquina.


    SlyderF(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta-avatar
        img.px-2(src='@/assets/curso/temas/t2/circulo.svg' alt='')
        .tarjeta.color-acento-botones.fg
          .p-4
            img.mb-3(src='@/assets/curso/temas/t2/pasos.svg' alt='La imagen ilustra el mecanismo de un oscilante sencillo, donde se detallan cuatro pasos en el proceso. En el primer paso, una pieza se desplaza hacia abajo, siguiendo la dirección de la flecha. A continuación, en el segundo paso, la pieza se mueve hacia la izquierda. El tercer paso indica un movimiento descendente de otra pieza en el sistema. Finalmente, en el cuarto paso, la pieza se mueve hacia la derecha. Todo esto ocurre a lo largo de una línea recta, que probablemente representa el recorrido de un componente dentro del mecanismo de oscilación.')
            p.mb-4 Este tipo de alimentación lo realiza el diente siguiendo cuatro pasos y solo la secuencia se invierte cuando se remata, los pasos son los siguientes.
            p.mb-0 #[b Paso 1:] el diente sube y aparecen justamente encima de la pancha de aguja.   
            p.mb-0 #[b Paso 2:] los dientes desplazan el material a coser.
            p.mb-0 #[b Paso 3:] los dientes decienten hasta la parte inferior de la plancha.
            p.mb-4 #[b Paso 4:] los dientes se regresan por la parte inferior de la plancha.
            p #[b Nota:] este tipo de alimentación lo utilizan la mayoría de las máquinas.
      .tarjeta-avatar
        img.px-2(src='@/assets/curso/temas/t2/circulo2.svg' alt='')
        .tarjeta.color-acento-botones.fg
          .p-4
            img.mb-3(src='@/assets/curso/temas/t2/pasos2.svg' alt='La imagen representa un proceso de alimentación combinada en cuatro pasos distintos. En el primer paso, una aguja desciende hacia la tela. En el segundo paso, la aguja continúa su descenso mientras la pieza de alimentación avanza hacia adelante. En el tercer paso, la aguja comienza a subir y la pieza de alimentación se desplaza hacia la izquierda. Finalmente, en el cuarto paso, la aguja termina de subir mientras la pieza de alimentación vuelve a su posición inicial, preparándose para repetir el ciclo. Este proceso es un mecanismo de costura en el que se combinan diferentes movimientos para lograr un avance preciso del material.')
            p.mb-4 Este tipo de alimentación es realizada por el diente y la aguja, o sea que la barra de aguja también tiene cuatro pasos y se combinan con el diente para desplazar el material.
            p #[b Nota:] este tipo de alimentación es más utilizado en las máquinas de dos agujas.
      .tarjeta-avatar
        img.px-2(src='@/assets/curso/temas/t2/circulo3.svg' alt='')
        .tarjeta.color-acento-botones.fg
          .p-4
            img.mb-3(src='@/assets/curso/temas/t2/pie.svg' alt='La imagen representa un sistema de doble transporte utilizado en máquinas de coser, destacando tres componentes clave: el pie prensatelas, el diente superior y el diente inferior. El pie prensatelas presiona la tela desde arriba, mientras que el diente superior y el diente inferior trabajan juntos para mover la tela de manera sincronizada, asegurando un avance uniforme y preciso durante el proceso de costura. Este mecanismo es especialmente útil para manejar materiales más gruesos o difíciles de alimentar, garantizando una costura consistente y sin desplazamientos indeseados del tejido.')
            p.mb-4 Las máquinas con este sistema de alimentación presentan un prensatelas que, a primera vista, parece estar dividido en dos partes. Sin embargo, es solo al activar la máquina que se puede observar cómo una sección del pie se eleva y se mueve en coordinación con el diente para trasladar el material. Este diente superior realiza un movimiento de cuatro pasos, similar a la barra de aguja en la alimentación combinada. La principal diferencia radica en que el diente no penetra en el material, sino que lo mueve por contacto directo.
            p #[b Nota:] este tipo de alimentación es muy utilizado en las máquinas de guarnecer.
      .tarjeta-avatar
        img.px-2(src='@/assets/curso/temas/t2/circulo4.svg' alt='')
        .tarjeta.color-acento-botones.fg
          .p-4
            img.mb-3.w-50.m-auto(src='@/assets/curso/temas/t2/pie2.svg' alt='La imagen describe tres tipos de alimentación en máquinas de coser: oscilante sencillo, realizado en cuatro pasos donde el diente sube, desplaza el material, desciende y regresa; alimentación combinada, que involucra al diente y la aguja, utilizada en máquinas de dos agujas; y doble transporte, donde el prensatelas y el diente superior se mueven para desplazar el material, común en máquinas de guarnicionero. ')
            p Es el tipo de alimentación más pesado que se conoce, son tres los encargados de desplazar el material a coser, y es la combinación de todas las anteriores. El material es desplazado por diente inferior, aguja y diente superior.
      .tarjeta-avatar
        img.px-2(src='@/assets/curso/temas/t2/circulo5.svg' alt='')
        .tarjeta.color-acento-botones.fg
          .p-4
            p Este tipo alimentación como su nombre lo dice es constante, o sea que el material no se detiene siempre está siendo desplazado en el momento de costura, es empleado principalmente en algunas máquinas autómatas como la ojaladora sencilla y en máquinas automáticas como las ribeteadoras y pagadoras de bolsillo.
      .tarjeta-avatar
        img.px-2(src='@/assets/curso/temas/t2/circulo6.svg' alt='')
        .tarjeta.color-acento-botones.fg
          .p-4
            img.mb-3(src='@/assets/curso/temas/t2/alimentacion.svg' alt='La imagen explica el concepto de alimentación por diferencial, destacando cómo está compuesta por un par de dientes independientes que tienen movimiento propio. Estos dientes pueden sincronizarse de manera similar al mecanismo oscilante sencillo, pero se emplean para ajustar el recorrido de uno en comparación con el otro según sea necesario, ya sea para recoger o estirar la tela. Se ilustran dos casos: la alimentación principal, que frunce la tela con 10 repeticiones por pulgada (RPP), y la alimentación diferencial, que la estira con 6 RPP en la parte fruncida y 10 RPP en la parte estirada, dependiendo de las necesidades del material a procesar.')
            p.mb-4 Aquel que está formado por un par de dientes independientes, con movimiento propio cada uno de ellos, su sincronización es idéntica oscilante sencillo, se utiliza para hacer que uno de los dientes tenga un mayor o igual recorrido que el otro de acuerdo con las necesidades, ya sea para recoger o estirar la tela.
    
    Separador
    #t_2_4.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.4 Generaciones de máquinas
    
    p.mb-4(data-aos="fade") En esa búsqueda de reconocer e identificar los diferentes tipos de máquinas, tipos de camas, ajustes, partes y funciones, se encuentran las generaciones tecnológicas dentro de las cuales presentan mejores alternativas al proceso de confección para poder aumentar o disminuir áreas de costura, tipos de puntadas, fruncidos de tela, entre otros. Actualmente las máquinas de coser se pueden clasificar en tres tipos según el nivel tecnológico:
    
    .row.mb-4(data-aos="fade-down")
      .col-lg-12
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/imag.png' alt='')
          .tarjeta.tarjeta--morado.d-flex.align-items-center
            .p-4
              p.mb-0 #[b Máquinas de primera generación:] máquinas convencionales sin ningún tipo de ayudas, en este tipo de máquinas el operador realiza el 90 % de las operaciones de la máquina como: levantar el prensatelas, posicionar la aguja para retirar el material, cortar los hilos, hacer atraques y otras operaciones más.    
    
    .row.mb-4(data-aos="fade-down")
      .col-lg-12  
        .tarjeta-avatar-b.top
          .tarjeta.tarjeta--morado.alreves
            .p-4
              p #[b Máquinas de Segunda generación:] en este tipo de máquinas el operador realiza el 50 % de las operaciones, debido a que las máquinas vienen provistas con ayudas de tipo electrónico, neumático o electroneumático. 
              ul.lista-ul--color.fa-ul.color-primario
                li
                  i.fas.fa-plus
                  span.mb-0 #[b Posicionador de aguja:] este tipo de ayuda electrónica posiciona a la barra de aguja en el momento en que el operador deja de accionar el pedal del motor, permitiendo que la aguja quede arriba o abajo según operación a realizar. Esto le permite al operador, tener las manos libres para realizar otras acciones de costura.
                li
                  i.fas.fa-plus
                  span.mb-0 #[b Cortadores de hilo:] este tipo de ayuda corta los hilos automáticamente una vez terminada la operación de costura, con esto se evitan el desperdicio de hilo y tiempos en la operación.
                li
                  i.fas.fa-plus
                  span.mb-0 #[b Levantador de prensatelas:] este tipo de ayuda le permite al operador levantar el prensatelas y/o #[em puller] en el momento que lo requiera, solamente llevando el pedal hacia atrás. Esto disminuye la fatiga del operador debido a que la máquina no necesita rodilleros ni pedales para realizar esta operación, la cual, en algunos casos requiere un gran esfuerzo por parte del operador para vencer la resistencia de los resortes de tensión del prensatelas.
                li
                  i.fas.fa-plus
                  span.mb-0 #[b Tableros de control:] estos tableros le permiten al operador programar la máquina para que realice algunas operaciones de costura en forma automática entre otras están: remate inicial, realizar costuras rectas automáticamente, remate final, corte de hilo automático al terminar la operación. Todo dependiendo del tipo de tablero con que esté equipada la máquina.
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/imag2.png' alt='')
    
    .row.mb-4(data-aos="fade-down")
      .col-lg-12
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/imag3.png' alt='')
          .tarjeta.tarjeta--morado.d-flex.align-items-center
            .p-4
              p.mb-0 #[b Máquinas de tercera generación:] en este tipo de máquinas el operador realiza el 10 % de las operaciones y puede incluso operar dos o tres máquinas a la vez. Estas vienen provistas con las ayudas de la generación anterior pero además cuentan con la ayuda de sensores que permiten que las máquinas trabajen casi solas.          
    
    .row.mb-4(data-aos="fade-down")
      .col-lg-12  
        .tarjeta-avatar-b
          .tarjeta.tarjeta--morado.alreves.align-items-center
            .p-4
              p.mb-0.my-3 #[b Máquinas de Ultrasonido:] este tipo de máquinas unen el material por ultrasonido las cuales incorporan un sistema de sonoroso que emite un ultrasonido de 60.000 ciclos contra una rueda transportadora que tiene la forma de una puntada. Podría decirse que produce una soldadura entre las telas y por medio un disco intercambiable puede imitar las puntadas de fileteo, cadeneta y doble pespunte. La única condición es que el material a coser debe estar compuesto de poliéster como mínimo en un 60 % de su estructura física.
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/imag4.png' alt='')
    
    
    Separador
    #t_2_5.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.5 Clasificación, nomenclatura, puntas, calibres y usos
    
    p.mb-4(data-aos="fade") En la industria de la confección existen relaciones entre los insumos y las maquinas, los cuales garantizan el óptimo desempeño de la producción en términos de calidad, optimización de recursos, productividad entre otras.
    p.mb-4(data-aos="fade") La relación de insumos genera unos eslabones que al romperse alguno de ellos ocasiona dificultades, en la tela, en la puntada, en la costura, al estar entrelazados.
    p.mb-4(data-aos="fade") Un segundo bloque o módulo de conocimiento, se relaciona directamente con las diferentes características de agujas, puntadas, pespuntes, costuras, entre otros. En confección y particularmente las diseñadoras deben tener los conocimientos de tejidos, hilos y agujas, generan unos eslabones que se conectan o entrelazan para darle a las puntadas, costuras, tejidos una mejor apariencia, terminación y calidad del producto. Por lo tanto, se debe tener conceptos claros sobre:    

    .tarjeta.tarjeta--azul.sli.p-4
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-11.my-4
            h4 La aguja
            p.mb-0 La aguja es un elemento mecánico que sirve para traspasar el material a coser y llevar el hilo hasta un tomador de lazada. Además, es uno de los elementos fundamentales para la invención de la máquina de coser, ya que es alrededor de la aguja, como nacen todas las ideas para su desarrollo.
            p.mb-4 De la aguja se deben considerar tres aspectos importantes:
            .row.justify-content-center.align-items-center
              .col-lg-12
                img(src='@/assets/curso/temas/t2/imag5.png' alt='La imagen destaca tres aspectos importantes de las agujas de coser: el número de material de 6 dígitos para facilitar el pedido, el grosor de la aguja en Nm y otras denominaciones habituales, y el código DataMatrix, que permite seguir la producción y acceder a información adicional mediante escáner de etiquetas. Además, se menciona que las agujas se adquieren en diferentes formas y puntas, adecuadas para materiales desde telas ligeras hasta cuero pesado.')
        .row.justify-content-center
          .col-lg-5
            h5 Calibre
            p El calibre de las agujas varía de acuerdo con el grosor del material a coser, por ejemplo, para #[em lycras] 65 y 70, para tejidos de punto 70, 80 y 90, para driles y #[em Jean] 100, 110 y 125.
            img(src='@/assets/curso/temas/t2/iim.svg' alt='')
          .col-lg-6
            .titulo-sexto.color-primario
              h5 Tabla 5.  
              | Equivalencia en MM
            .tabla-a.tabla-peque.color-primario
              table( alt='Tabla de equivalencias entre el sistema métrico y el sistema inglés para agujas de coser, con sus respectivas conversiones a milímetros. La tabla incluye: •	Métrico 70 = Inglés 10 = 0.7 mm •	Métrico 80 = Inglés 12 = 0.8 mm •	Métrico 90 = Inglés 14 = 0.9 mm •	Métrico 100 = Inglés 16 = 1.0 mm •	Métrico 110 = Inglés 18 = 1.1 mm •	Métrico 120 = Inglés 20 = 1.2 mm')
                thead
                  tr.text-white.bg3
                    th.nad Métrico
                    th.nad Inglés
                    th.nad Equivalencia mm
                tbody.text-center
                  tr
                    td.p-1.na 70
                    td.p-1.na 10
                    td.p-1.na 0.7
                  tr
                    td.p-1.na 80
                    td.p-1.na 12
                    td.p-1.na 0.8
                  tr
                    td.p-1.na 90
                    td.p-1.na 14
                    td.p-1.na 0.9
                  tr
                    td.p-1.na 100
                    td.p-1.na 16
                    td.p-1.na 1
                  tr
                    td.p-1.na 110
                    td.p-1.na 18
                    td.p-1.na 1.1
                  tr
                    td.p-1.na 120
                    td.p-1.na 20
                    td.p-1.na 1.2

        .row.justify-content-center
          .col-lg-5
            h5 Sistema o referencia
            p Indica la aguja que se necesita para el tipo de máquina.
            img(src='@/assets/curso/temas/t2/imi.svg' alt='')
          .col-lg-6
            .titulo-sexto.color-primario
              h5 Tabla 6.  
              | Tipo de aguja 
            .tabla-a.tabla-peque.color-primario
              table(alt='Tabla que compara los tipos de agujas en sistemas métricos e ingleses para diferentes máquinas de coser. Para máquinas planas, se utilizan agujas 16 x 231 cabo delgado y 135 x 15 cabo grueso. Para recubridoras, la aguja es B63. Las máquinas zig-zag y de dos agujas usan 135 x 5, mientras que las fileteadoras utilizan B27.')
                thead
                  tr.text-white.bg3
                    th.nad  Métrico
                    th.nad  Inglés
                tbody.text-center
                  tr
                    td.p-1 Plana
                    td.p-1 16 x 231 cabo delgado #[br] 135 x 15 cabo grueso
                  tr
                    td.p-1 Recubridora
                    td.p-1 B63
                  tr
                    td.p-1 #[em Zig-zag]
                    td.p-1 135 x 5
                  tr
                    td.p-1 Dos agujas
                    td.p-1 135 x 5
                  tr
                    td.p-1 Fileteadora
                    td.p-1 B27

        .row.justify-content-center
          .col-lg-11
            h5 Punta de aguja
            p Determina el tipo de tejido a coser, desde el más fino hasta el más pesado.
            .row.justify-content-center.align-items-center
              .col-lg-4
                img(src='@/assets/curso/temas/t2/imij.svg' alt='')
              .col-lg-7
                .tarjeta.color-primario.p-3.mb-4
                  .row.justify-content-around.align-items-center
                    .col-3.col-sm-2.col-lg-2
                      img.img-a.img-t.px-md-3.px-lg-0(src="@/assets/curso/temas/t1/icono.svg")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          p.mb-0 #[b Recurso.] Puntas de desplazamiento Groz-Beckert 
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://www.groz-beckert.com/mm/media/es/web/pdf/Cloth_points_from_Groz-Beckert.pdf" target="_blank")
                            span Descargar
                            i.fas.fa-file-download
              
    Separador
    #t_2_6.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.6 Relación de elementos de costura: tela, aguja, puntada, hilo, ajuste
    
    p.mb-4 A continuación, se presentan los principales elementos:  

    h4(data-aos="fade") Tejidos
    p.mb-5(data-aos="fade")  Un tejido es una estructura formada por fibras textiles. Esta estructura se puede lograr de tres formas diferentes que, de alguna manera, dividen los procedimientos de trabajo. Se identifican: tejido plano o de calada, tejido de punto y técnicas de aglutinamiento.
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.tarjeta--tabla.bg7
        .row.justify-content-center.mb-3
          .col-5.mtn-7
            img(src='@/assets/curso/temas/t2/imag6.png' alt='')
        .p-4
          h4.text-center.text-white Tejido plano
          p.text-white Es el que se lleva a cabo en una máquina llamada telar y que consiste en entrelazar dos hilos normalmente formando un ángulo recto. Uno de los hilos es la urdimbre y el otro es la trama. El tejido plano puede trabajarse al hilo, al través o al bies. Los ligamentos usados para la elaboración del tejido plano son los que dan origen a las diferentes telas (Sarga, Tafetán, Satén, Gasa, Crepé, Felpa.)
      .col-md-6.col-lg.tarjeta--tabla.bg19
        .row.justify-content-center.mb-3
          .col-5.mtn-7
            img(src='@/assets/curso/temas/t2/imag7.png' alt='')
        .p-4
          h4.text-center.text-white Tejido de punto
          p.text-white Está formado por mallas, bucles o puntos. Consiste en pasar una lazada de hilo sobre una aguja y luego pasarla a otra aguja. El caso más claro para entenderlo es el tejido de dos agujas que se hace de forma manual, que se entrelaza el mismo hilo formando una sola estructura, es importante entender que en este tipo de tejido hay un solo hilo largo. Los ligamentos básicos del tejido de punto son: #[em Jersey], franela, franela perchada, el rib, #[em interlock], pique. Las telas de tejido de punto son difíciles de manejar, resbalan al cortarlas y estiran fácilmente, y se adaptan muy bien al cuerpo.
      .col-md-6.col-lg.tarjeta--tabla.bg7
        .row.justify-content-center.mb-3
          .col-5.mtn-7
            img(src='@/assets/curso/temas/t2/imag8.png' alt='')
        .p-4
          h4.text-center.text-white Por aglutinamiento de fibras
          p.text-white Son telas que se fabrican con fibras naturales o artificiales que no han pasado por procesos de hilatura y que se humedecen y se someten a presión y calor lo cual hace que las fibras se adhieran.
    
    .row.mb-5.bg17
      .p-4(data-aos="fade") 
        h4 Hilos
        p.mb-4 Representa un 2 % del costo de la prenda, pero comparte un 50 % de la durabilidad de las costuras.

        .row.justify-content-center.tarjeta--container.mb-5(data-aos="fade-down") 
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-lg-5.col-md-7.col-9
                img(src='@/assets/curso/temas/t2/hilos.png', alt='')
            h3.text-center.text-white Sistema de numeración tex
            ul.lista-ul--color.fa-ul.color-acento-botones.fin
              li
                i.fas.fa-plus
                | Basado en el hilo crudo.
              li
                i.fas.fa-plus
                | Usado para determinar el calibre del hilo.
              li
                i.fas.fa-plus
                span.mb-0 Sistema de numeración directo (entre más alto el número; más grueso es el hilo). Ejemplo: #[b T-80 es más grueso que T-50.]
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-lg-5.col-md-7.col-9
                img(src='@/assets/curso/temas/t2/imag9.png', alt='')
            h3.text-center.text-white.text-center Factores que afectan la resistencia de las costuras
            ul.lista-ul--color.fa-ul.color-acento-botones.text-white.fin
              li
                i.fas.fa-plus
                | Tipo de tela y grueso.
              li
                i.fas.fa-plus
                | Tipo de hilo y tamaño.
              li
                i.fas.fa-plus
                | Puntada y tipo de costura.   
              li
                i.fas.fa-plus
                | Puntadas por pulgada.
              li
                i.fas.fa-plus
                | Balance de la puntada (tensión).
      
        p.mb-4(data-aos="fade")  El hilo se hace utilizando fibras naturales o sintéticas. El poliéster es uno de los hilos más utilizados. Es más fuerte que los hilos de algodón de un tamaño comparable, y está disponible en una amplia variedad de tamaños y colores.
        
        .row.mb-4
          .col-lg-7(data-aos="fade-right") 
            p El hilo con núcleo más usado tiene una construcción de capa múltiple, con cada capa hecha de un centro de filamento de poliéster con fibras de algodón o poliéster recubierto alrededor del núcleo. En esta estructura de hilo influye la fortaleza del filamento poliéster y la facilidad de costura del recubrimiento de fibra de algodón o poliéster. El hilo con alma generalmente se usa en la costura a alta velocidad de muchos tipos de prenda, especialmente los que requieren alta fortaleza de costura. Los hilos de filamento son más fuertes que los hilos de fibra corta de la misma fibra y tamaño. Se usan comúnmente tres tipos de hilos de filamento.
          .col-lg-5.col-md-8(data-aos="fade-left") 
            img(src='@/assets/curso/temas/t2/imag10.svg', alt='')
      
        .row.justify-content-center.mb-5(data-aos="fade-down") 
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t2/icono.svg' alt='')
              .tarjeta.color-acento-botones
                .p-4
                  h4.text-center Hilo monofilamento
                  p.text-center.mb-0 Se hace de una sola fibra continua de un grosor especificado. Aunque el monofilamento es fuerte, uniforme y poco costoso de hacer, carece de flexibilidad y tiene una sensación tiesa y áspera. Como resultado, su uso normalmente se restringe a bastillas, cortinas, y muebles tapizados.
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t2/icono2.svg' alt='')
              .tarjeta.color-acento-botones
                .p-4
                  h4.text-center Hilo multifilamento suave
                  p.text-center.mb-0 Se elabora comúnmente de nylon o poliéster y se usa donde el requisito primordial de la costura es la fortaleza. Consta de dos o más filamentos continuos torcidos juntos. Se usa comúnmente para coser zapatos, prendas de cuero, y productos industriales.
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t2/icono3.svg' alt='')
              .tarjeta.color-acento-botones
                .p-4
                  h4.text-center Hilo de filamento texturizado
                  p.text-center.mb-0 Se hace usualmente de poliéster y se usa primordialmente como el hilo de lanzadera para puntadas de cobertura. Los filamentos texturizados le dan más cobertura y extensibilidad a la fibra, pero hace que el hilo esté más sujeto a enredarse.

        ul.lista-ul--color.fa-ul.color-primario
          li
            i.fas.fa-plus
            span.mb-0 #[b Algodón:] es la parte del hilo que va a estar en contacto con la piel e impide que se produzcan irritaciones o incomodidades, ya que sus características son suavidad, absorbente y fresco.
          li
            i.fas.fa-plus
            span.mb-0 #[b Poliéster:] la fibra que va por el centro o es el núcleo del hilo, aporta elasticidad, es decir, la capacidad de aumentar considerablemente su dimensión sin romperse.
          li
            i.fas.fa-plus
            span.mb-0 #[b Mercerizado:] es un acabado que le dan al hilo consistente en bañarlo en una solución de soda cáustica, con la intensión de dotarlo de brillo, suavidad y resistencia.
          li
            i.fas.fa-plus
            span.mb-0 #[b Lubricado:] es un acabado final que le deben dar al hilo para evitar su rotura al estar en contacto con la aguja.
    

    h4(data-aos="fade") Tamaño de hilo y aplicaciones
    
    p.mb-4 En la tabla que se presenta a continuación, se relacionan los tamaños de hilo según su tejido y las prendas en las que regularmente son utilizados. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-lg-6
        .titulo-sexto.color-primario
            h5 Tabla 7.  
            | Tamaño de hilo y aplicaciones
        .tabla-a.tabla-peque.color-primario.wii
          table(alt='Tabla que relaciona el tamaño de hilo y sus aplicaciones según el tipo de tejido. Para tejidos livianos, se utilizan hilos TEX 24, 25, y 27 en prendas como blusas y ropa interior. Para tejidos semipesados, los hilos TEX 30, 35, y 40 son adecuados para pantalones y overoles de dril. En tejidos pesados, se utilizan hilos TEX 60, 70 hasta 120, para prendas como jeans y chaquetas.')
            thead
              tr.bg19.text-white
                th.fr Tejido
                th.fr TEX
                th.fr Prenda
            tbody.text-center
              tr
                td.rr Liviano
                td.rr 24, 25, 27
                td.rr Blusas, ropa interior
              tr
                td.rr Semipesado
                td.rr 30, 35, 40
                td.rr Pantalones, overol drill
              tr
                td.rr Pesado
                td.rr 60, 70 hasta 120
                td.rr #[em Jeans], chaquetas

    p.mb-4(data-aos="fade") Cuando los conceptos están claros dentro del proceso de confección, se procede a fortalecer las relaciones o eslabones que van a permitir que la cadena de confección tenga la fortaleza suficiente de producción, confección y calidad. Con base en las premisas anteriores, existen combinaciones o relaciones entre los eslabones que nos permiten tener un panorama más apropiado a la hora de la confección de un producto; por lo tanto, presente un informe de las relaciones HILO –AGUJA e HILO – TEJIDO según sus conocimientos.

    .row.justify-content-center.mb-4(data-aos="fade") 
      .col-lg-8
        .cjj.p-4
          p.mb-0 #[b La relación hilo-agujas permite que se produzcan las puntadas con sus series y tipos respectivos, los tipos y usos de los pespuntes, las puntadas por pulgada y sus criterios de calidad según el proceso, entre otros.] 
    
    
    h4(data-aos="fade") Puntadas
    p.mb-4(data-aos="fade") En las diferentes líneas de producción de hoy, las puntadas son fundamentales en el valor agregado que pueda tener un producto, tanto por su calidad, durabilidad, seguridad, elongación y sobre todo por su apariencia y decoración de un producto, con base en ello, las puntadas tienen unas características diferentes, aquí algunas más representativas. Por lo tanto, las características se definen según el tipo de puntada.
    
    .row.justify-content-center 
      .col-lg-7
        .titulo-sexto.color-primario
          h5 Tabla 8.  
          | Características según puntada
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down") 
      .col-lg-7
        .tabla-a.tabla-peque.color-primario.wii 
          table(alt='La tabla presenta diferentes series y tipos de costura junto con sus características. La serie 100 incluye tipos 101-103 con cadeneta sencilla de un hilo. La serie 200 se refiere a costuras ornamentales. La serie 300, con tipos 301, 304 y 315, corresponde al doble despunte. La serie 400 incluye tipos 401, 406 y 407, caracterizándose por la cadeneta doble. La serie 500, con tipos 504, 514 y 516, se usa para sobrehilado. Finalmente, la serie 600, con tipos 602, 605 y 609, corresponde a las flatseamers.')
            thead
              tr.bg19.text-white
                th.fr Serie
                th.fr Tipo
                th.fr Características
            tbody.text-center
              tr
                td 100
                td 101 - 103
                td Cadeneta sencilla - 1 hilo
              tr
                td 200
                td 
                td Ornamentales
              tr
                td 300
                td 301 - 304 - 315
                td Doble despunte          
              tr
                td 400
                td 401 - 406 - 407
                td Cadeneta doble
              tr
                td 500
                td 504 - 514 - 516
                td Sobrehilado
              tr
                td 600
                td 602 - 605 - 609
                td #[em Flatseamers]
    
    h4(data-aos="fade") Reglas para la óptima resistencia de las costuras:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img.px-lg-3(src='@/assets/curso/temas/t2/icono4.svg' alt='')
          .tarjeta.color-acento-contenido
            .p-4
              h4.text-center 301 puntada recta
              p.text-center Se debe utilizar el mismo tamaño de hilo en la aguja y en la bobina porque la cadena siempre se rompe por el eslabón más débil.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img.px-lg-3(src='@/assets/curso/temas/t2/icono4.svg' alt='')
          .tarjeta.color-acento-contenido
            .p-4
              h4.text-center 401 puntada cadeneta
              p.text-center Se puede usar un hilo 40 % más débil en el #[em looper] pues el hilo del #[em looper] no penetra el material y está doble en la formación de la cadena.
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta-avatar
          img.px-lg-3(src='@/assets/curso/temas/t2/icono4.svg' alt='')
          .tarjeta.color-acento-contenido
            .p-4
              h4.text-center 504 puntada sobre hilado
              p.text-center Utiliza múltiples hilos para encerrar el borde de la tela. Se puede usar un hilo 50 % más débil en los #[em loopers], ya que no penetran el material, sino que forman el sobrehilado alrededor del borde, proporcionando un acabado limpio y resistente.
    
    p(data-aos="fade-down") La relación hilo-tejido permite que se produzcan las costuras con sus tipos, características y usos respectivos, de acuerdo con criterios de calidad del proceso.
    

    Separador
    #t_2_7.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.7 Calibrar
    
    .row.mb-4(data-aos="fade-down") 
      .col-lg-12
        .cajon.color-primario.bg1.p-4
          p.mb-0 Ahora se presentarán aspectos fundamentales para la puesta a punto de las máquinas y en lo primero que se debe centrar la atención es en los enhebrados y sus repercusiones. A continuación, se expone mapas de enhebrado de cada tipo de máquina y calibración de la puntada.
    
    h4.mb-4(data-aos="fade") Enhebrados de máquina plana, enhebrado caja bobina y ajuste de tensión de puntada.

    .row.justify-content-center.mb-5
      .col-lg-9
        h5 Máquina plana
        p.ps-3 Enhebrado de máquina:
        ul.lista-ul--color.fa-ul.color-primario.ps-3
          li.mb-1
            i.fas.fa-plus
            | Girar el volante para que la barra de la aguja quede en su punto más alto.
          li.mb-1
            i.fas.fa-plus
            | Pasar el hilo por los puntos 1, 2, 3.
          li.mb-1
            i.fas.fa-plus
            | Pasar el hilo por el disco de tensión por los puntos 4, 5, 6, 7.
          li.mb-1
            i.fas.fa-plus
            | Pasar el hilo por el estirador del hilo 8.
          li.mb-1
            i.fas.fa-plus
            | Pasar el hilo por las guías 9, 10 y 11.
          li.mb-0
            i.fas.fa-plus
            | Finalmente pase el hilo por el orificio de la aguja 12 de izquierda a derecha, dejando el hilo por debajo y atrás del pie prénsatela.
      .col-lg-3.col-md-6.col-8
        img(src='@/assets/curso/temas/t2/imag11.svg' alt='')
    
    .bg18.mb-3.p-4
      h4.mb-0 Enhebrado caja bobina  
    img(src='@/assets/curso/temas/t2/imag12.png' alt='La imagen describe el proceso de enhebrado de una caja bobina en tres pasos ilustrados. Primero, se coloca la bobina en la caja con el hilo saliendo en la dirección indicada por una flecha verde. Luego, se tira del hilo y se pasa por la ranura de la caja. Finalmente, se asegura el hilo bajo la lengüeta, completando el enhebrado adecuado para el funcionamiento de la máquina de coser.')      
    figcaption.mb-4 Fuente: Tomada de https://de.matri.eu/auflosen-beschwerden/einstellung-der-unter-und-oberfadenspannung
    .bg18.mb-5.p-3  
      ul.lista-ul--color.fa-ul.color-primario
        li.mb-1
          i.fas.fa-plus
          | Coloque la bobina llena en la caja de bobina, dejando el hilo con un sobrante de 10 cm aproximadamente.
        li.mb-1
          i.fas.fa-plus
          | Pase el hilo por la ranura de la caja de la bobina.
        li.mb-0
          i.fas.fa-plus
          | Hale el hilo por debajo del muelle de tensión. La alimentación debe ser en sentido contrario a las manecillas del reloj. 
    
    .bg13.mb-5.p-4(data-aos="fade-down") 
      .row.justify-content-center
        .col-lg-12
          h4 Ajuste de tensión de la caja bobina
        .col-lg-6.col-md-10
          img(src='@/assets/curso/temas/t2/ajuste.png' alt='La imagen presenta el ajuste de la tensión de la caja bobina. Ilustra dos pasos: en el paso C, se aumenta la tensión girando un tornillo en sentido horario, y en el paso D, se reduce la tensión girando el tornillo en sentido antihorario. Estos ajustes aseguran que la tensión del hilo sea adecuada para una costura uniforme y de buena calidad.')
    
    .row.justify-content-center.align-items-center.p-1.bg15.mb-4 

    h4(data-aos="fade") Verificación de tensión de la caja bobina
    .row.justify-content-center.mb-4
      .col-lg-6.col-md-10.col-10
        img(src='@/assets/curso/temas/t2/edi.svg' alt='La imagen presenta el proceso de verificación de la tensión de la caja bobina. A la izquierda, se ilustra cómo sostener y dejar caer la caja de bobina para comprobar la tensión del hilo. A la derecha, se presentan ejemplos visuales de diferentes tensiones: tensión correcta para una máquina plana, tensión inferior demasiado ajustada, tensión superior demasiado ajustada y tensión superior e inferior demasiado ajustadas. Estos ejemplos ayudan a identificar y corregir problemas de tensión en la costura.')
      .col-lg-6.col-md-10.col-10
        .caja1.p-3.mb-2.my-3.crd_hover_txt
          p.mb-0 Tensión correcta máquina plana.
        .caja1.p-3.mb-2.crd_hover_txt
          p.mb-0 Tensión inferior demasiado ajustada.
        .caja1.p-3.mb-2.crd_hover_txt
          p.mb-0 Tensión superior demasiado ajustada.
        .caja1.p-3.mb-3.crd_hover_txt
          p.mb-0 Tensión superior e inferior demasiado ajustadas.
    
    .row.justify-content-center.align-items-center.p-1.bg15.mb-5
    
    .row.mb-4
      .col-lg-9(data-aos="fade-right") 
        h4 Máquina fileteadora
        p Enhebrado máquina fileteadora:
        ul.lista-ul--color.color-primario.fa-ul
          li.mb-1
            i.fas.fa-plus
            | Girar el volante para que la barra de la aguja quede en su punto más alto.
          li.mb-1
            i.fas.fa-plus
            | Pasar el hilo por los puntos 1, 2, 3.
          li.mb-1
            i.fas.fa-plus
            | Pasar el hilo por el disco de tensión por los puntos 4, 5, 6, 7.
          li.mb-1  
            i.fas.fa-plus
            | Pasar el hilo por el estirador del hilo 8.
          li.mb-1
            i.fas.fa-plus
            | Pasar el hilo por las guías 9, 10 y 11.
          li.mb-0
            i.fas.fa-plus
            | Finalmente pase el hilo por el orificio de la aguja 12 de izquierda a derecha, dejando el hilo por debajo y atrás del pie prénsatela.
      .col-lg-3.col-md-6.col-8(data-aos="fade-left") 
        img(src='@/assets/curso/temas/t2/mk.png' alt='')
    
    h4.mb-4(data-aos="fade") Ajuste de tensión máquina fileteadora - Enhebrado de máquina

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down")(alt='La imagen expone la validación de tensores y la correcta tensión de puntada e hilo en máquinas fileteadoras, indicando la tensión correcta y los errores en la tensión del hilo de la aguja, del looper superior y del looper inferior.')
      .tarjeta.color-acento-botones.p-4
        h4.text-center Enhebrado porta-conos
        img.w-50.m-auto(src='@/assets/curso/temas/t2/slyder1.png' alt='')
      .tarjeta.color-acento-botones.p-4
        h4.text-center Enhebrado tensores
        img.w-50.m-auto(src='@/assets/curso/temas/t2/slyder2.png' alt='')
      .tarjeta.color-acento-botones.p-4
        h4.text-center Enhebrado guía hilos
        img.w-50.m-auto(src='@/assets/curso/temas/t2/slyder3.png' alt='')
      .tarjeta.color-acento-botones.p-4
        h4.text-center Enhebrado #[em looper] superior e inferior
        img.w-50.m-auto(src='@/assets/curso/temas/t2/slyder4.png' alt='')
      .tarjeta.color-acento-botones.p-4
        h4.text-center Enhebrado guía hilos - aguja
        img.w-50.m-auto(src='@/assets/curso/temas/t2/slyder5.png' alt='')
      .tarjeta.color-acento-botones.p-4
        h4.text-center Enhebrado guía hilo trasero puntada de seguridad
        img.w-50.m-auto(src='@/assets/curso/temas/t2/slyder6.png' alt='')
      .tarjeta.color-acento-botones.p-4
        h4.text-center Enhebrado tensor auxiliar leva tira hilo - puntada de seguridad
        img.w-50.m-auto(src='@/assets/curso/temas/t2/slyder7.png' alt='')
      .tarjeta.color-acento-botones.p-4
        h4.text-center Enhebrada leva tira hilo puntada de seguridad 
        img.w-50.m-auto(src='@/assets/curso/temas/t2/slyder8.png' alt='')
      .tarjeta.color-acento-botones.p-4
        h4.text-center Enhebrado #[em looper]
        img.w-50.m-auto(src='@/assets/curso/temas/t2/slyder9.png' alt='')


    h4.mb-5(data-aos="fade") Validación de tensores - Puntada e hilo

    .row.width-25.mb-5(data-aos="fade-down")(alt='La imagen expone el enhebrado de una máquina recubridora y el ajuste de tensión. También se ilustra el enhebrado específico de una máquina recubridora tipo collarín, destacando el recorrido del hilo a través de varios componentes para asegurar un correcto funcionamiento. ')
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/001.svg' alt='La imagen ejemplifica una validación de tensión correcta de puntada en máquina fileteadora.')
          .tarjeta.color-primario.align-items-center.d-flex
            .p-4
              h4.mb-0 Tensión correcta de puntada  en máquina fileteadora.
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/002.svg' alt='La imagen ejemplifica una tensión incorrecta del hilo de la aguja.')
          .tarjeta.color-primario.align-items-center.d-flex
            .p-4
              h4.mb-0 Tensión incorrecta del hilo de la aguja.
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/003.svg' alt='La imagen ejemplifica una tensión incorrecta del looper superior.')
          .tarjeta.color-primario.align-items-center.d-flex
            .p-4
              h4.mb-0 Tensión incorrecta del #[em looper] superior.
      .col-lg-6
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/t2/004.svg' alt='La imagen ejemplifica una tensión incorrecta del looper inferior.')
          .tarjeta.color-primario.align-items-center.d-flex
            .p-4
              h4.mb-0 Tensión incorrecta del #[em looper] inferior.
      figcaption.mb-4 Fuente: https://es.slideshare.net/slideshow/industria-de-la-confeccion/49197064#62 
    
    
    h4(data-aos="fade") Enhebrado de máquina recubridora - Ajuste de tensión
    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-8.col-8.mb-4.mb-md-0
        img.my-3(src='@/assets/curso/temas/t2/fos.svg' alt='La imagen expone el enhebrado de una máquina recubridora y el ajuste de tensión. También se ilustra el enhebrado específico de una máquina recubridora tipo collarín, destacando el recorrido del hilo a través de varios componentes para asegurar un correcto funcionamiento.')
    
    
    h4(data-aos="fade") Validación de tensores - Puntada e hilo
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .cajon.color-primario.bg1.p-4
          .row.justify-content-around
            .col-lg-3.col-md-6.col-6
              h5.text-center Puntada tensionada
              img(src='@/assets/curso/temas/t2/imag16.svg' alt='La imagen describe la validación de tensores en puntada e hilo, para el caso de la puntada tensionada tiene un aspecto ajustado y uniforme.')
            .col-lg-3.col-md-6.col-6
              h5.text-center Puntada floja
              img(src='@/assets/curso/temas/t2/imag17.svg' alt='La imagen describe la validación de tensores en puntada e hilo, para el caso de la puntada floja muestra hilos sueltos y desorganizados, indicando una tensión incorrecta.')
    
    h4(data-aos="fade") Puntadas por pulgada (PPP).
    p.mb-4(data-aos="fade") Cuando se están escribiendo las especificaciones de una prenda, se debe especificar la cantidad apropiada de puntadas por pulgada (PPP) que deben ser usadas en su producto de costura, porque la cantidad de puntadas por pulgada puede tener influencia en:
    
    .tarjeta--container.sinb.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-4
          .col-6
          ol.lista-ol--cuadro.color-primario
            li 
              .lista-ol--cuadro__vineta
                span.text-white a
              | La resistencia de la costura.
            li 
              .lista-ol--cuadro__vineta
                span.text-white b
              | La apariencia de la puntada.
            li 
              .lista-ol--cuadro__vineta
                span.text-white c
              | La elasticidad de la costura en telas elásticas.
      .col-md.tarjeta.color-acento-botones.fon2.d-none.d-lg-block
      .col-md.tarjeta.color-acento-contenido.p-4
        .row.justify-content-center
          .col-12
            p La resistencia de la costura depende de un número de factores que incluyen:
            ul.lista-ul--color.fa-ul.color-primario
              li.mb-0
                i.fas.fa-plus
                | Tipo y peso de la tela.
              li.mb-0
                i.fas.fa-plus
                | Construcción de la puntada y la costura.
              li.mb-0
                i.fas.fa-plus
                | Puntadas por pulgada.
              li.mb-0  
                i.fas.fa-plus
                | Tipo y dimensión del hilo.
              li.mb-0 
                i.fas.fa-plus
                | Balance de la puntada (tensión del hilo).
          

    p(data-aos="fade") Generalmente, entre más puntadas por pulgada, mayor es la resistencia de la costura. Existen algunos casos donde agregar puntadas por pulgada puede causar daño a la tela de forma que la costura es debilitada, esto solamente pasa en textiles específicos que pueden ser fácilmente dañados por excesivas penetraciones de la aguja.
    p(data-aos="fade") El tamaño de la puntada es medida contando la cantidad de entradas de la aguja en la tela dentro de una pulgada. Existen diferentes contadores de puntadas que hacen esta medida fácil. De igual manera, usted puede colocar una cinta métrica enseguida del pespunte y hacer la misma función en 2.54 cm que es el equivalente a una pulgada.       


    Separador
    #t_2_8.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.8 Desarrollo de operaciones básico para ensamble de piezas
    
    p(data-aos="fade") Para realizar los ejercicios en máquina de coser familiar o industrial, se requieren 4 bandas de tela con las siguientes características; 1 m de largo por 10 cm de ancho; preferiblemente una de las bandas de tela que tenga líneas con las características que se describen más adelante.
    p.mb-4(data-aos="fade") En la primera banda de tela, se trabaja sin aguja, en este ejercicio se hará pasar la tela por el pie prensatelas a lo largo de toda la banda de tela, presionando el pedal suavemente para iniciar el ejercicio, la presión del pie sobre el pedal irá aumentando la velocidad en la máquina haciendo avanzar la tela, y debe procurar que la tela se conserve una línea recta, y que no se salga del control del prensatelas. Realizar el ejercicio sin aguja e hilo, practicar hasta lograr una velocidad controlada e inicia el recorrido ajustando la perilla del largo de la puntada en el número 2 y luego a 3 y así sucesivamente hasta lograr tener un control dirigido de la tela en su máximo largo de puntada.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-10
        img(src='@/assets/curso/temas/t2/imag18.svg' alt='La imagen presenta una guía para el ejercicio descrito en el texto previo, teniendo como referencia una línea recta punteada sobre la tela, con la finalidad de conservar el control del prensatelas.')
    
    .bg13g.p-4.mb-4(data-aos="fade-down")
      .row.justify-content-center.mb-4
        .col-lg-11
          .row.add
            .col-lg-2.peqt
              .cajaul.p-3
                img.img-a.img-t(src='@/assets/curso/temas/t2/cajaul.svg' alt='')
            .col-lg-9
              .cajaol.p-4
                h4.text-white.my-2 Ejercicio de control de pedal, arranque y parada
      .row.justify-content-center
        .col-lg-11
          p Se trabaja con aguja, ya dominando la velocidad y la rectitud del pespunte, se procederá a dominar la parada en el sitio exacto, en este caso la banda se divide en 5 rectángulos de 20 cm de largo por 10 cm de ancho. Este ejercicio debe realizarlo usando las bandas con las marcas o rayas que se presentan en la imagen de referencia. La idea del ejercicio se centra en parar en cada vértice del ángulo, clavar la aguja, girar la banda y continuar el recorrido hasta terminar el ejercicio y los 5 rectángulos; en este ejercicio obtendremos dominio de pedal, control de freno y arranque en puntos exactos.
      .row.justify-content-center
        .col-lg-12
          img.mb-2(src='@/assets/curso/temas/t2/imag19.svg' alt='La imagen es una guía para el ejercicio que consiste en coser, siguiendo las marcas de rectángulos en bandas de 20 cm de largo por 10 cm de ancho, enfocándose en la precisión de ángulos y control del pedal.')
    
    .bg13g.p-4.mb-4(data-aos="fade-down")
      .row.justify-content-center.mb-4
        .col-lg-11
          .row.adds
            .col-lg-2.peqt
              .cajaul.p-3.mb-0
                img.img-a.img-t(src='@/assets/curso/temas/t2/cajaul1.svg' alt='')
            .col-lg-9
              .cajaol1.p-2
                h4.text-white.my-3.mx-4 Ejercicio de control de pedal, arranque y parada, calidad de la costura y remate o presilla 
      .row.justify-content-center
        .col-lg-11
          p Para este ejercicio, trabaja con aguja e hilo. Este ejercicio debe realizarlo usando las bandas con las marcas o rayas que se presentan en la imagen de referencia. La idea del ejercicio se centra en iniciar con un remate de 3 a 4 puntadas máximo.
      .row.justify-content-center
        .col-lg-12
          img.mb-4(src='@/assets/curso/temas/t2/imag20.svg' alt='Imagen con marcas de referencia para realizar el ejercicio planteado en el texto previo. Se inicia con un remate de 3 a 4 puntadas máximo.')
      .row.justify-content-center
        .col-lg-11
          p Luego, debe realizarlo usando las bandas con las marcas o rayas que se presentan a continuación. La idea del ejercicio se centra en iniciar con un remate de 3 a 4 puntadas máximo; después se inicia el pespunte y antes y después de cada vértice del ángulo se hace el remate de nuevo, clava la aguja en todo el vértice del ángulo, gira la banda para darle calidad de puntadas en los ángulos y continuar el recorrido hasta terminar el ejercicio y los 5 rectángulos.
      .row.justify-content-center
        .col-lg-12
          img(src='@/assets/curso/temas/t2/imag21.svg' alt='Imagen con bandas o marcas de referencia para dar continuidad al ejercicio según se plantea en el texto previo, haciendo el recorrido hasta terminar el ejercicio y los 5 rectángulos.')


      

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
