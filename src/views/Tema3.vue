<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Fundamentación Textil

    .row.mb-4
      #t_3_1.titulo-segundo.color-primario
        h2 3.1 Clasificación y conceptualización de las fibras naturales, químicas (artificiales y sintéticas)
      p Las fibras son una composición de filamentos que al entrelazarse componen los hilos, los hilos son el punto de partida para la producción de un textil; la composición unitaria de una materia sólida con cualquier estructura compone una fibra.
 
    .row.bm-4
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Proceso productivo textil


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")  
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imagen1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p #[b Fibras - Hilos - Tejidos - Telas - Acabados - Confección ] <br> <br>
        p #[b ¿Qué es una fibra? ] <br> <br>
        p Materia sólida unitaria de cualquier estructura textil.Fibra es cada uno de los filamentos que componen las unidades fundamentales en la fabricación de hilos, textiles y telas. <br> <br>
        p Filamentos: término utilizado para identificar fibras de longitud indeterminada.   

    .row.bm-5.mt-5
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Clasificación de las fibras textiles

    .row.mb-5.align-items-center.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-md-9.col-lg-9
        .row
          .col-3.position-relative.d-none.d-lg-block
            .avatar
              img(src="@/assets/curso/temas/tema3/imagen16.svg")
          .col-sm-12.col-md-9.col-lg-9.p-5(style='background-color: #FEF5E5')
            .row
              .col-1.col-md-1.col-lg-1
              .col-sm-12.col-md-10.col-lg-10
                p Se pueden clasificar de acuerdo con su:
                ul.lista-ul--color.vmorada.fa-ul
                  li.mb-0
                    i.lista-ul__vineta
                    span.mb-0 Origen.
                  li.mb-0
                    i.lista-ul__vineta
                    span.mb-0 Composición.
                p Esto nos permite identificar los procesos a los que son sometidas las fibras para la conformación de los productos textiles.


    .row.bm-5.mt-5
      h3(style="color: #673AB7") Naturales: 
      p Son fibras que se extraen de los animales o de origen vegetal, se caracterizan por ser fragmentos, hebras o pelo y que pueden hilarse para dar lugar a hilos o cuerdas.


    TabsA.color-acento-botones
      .tarjeta.color-acento-botones.p-4(titulo="Fibras animales" style='background-color: #FEF5E5')
        .row
          p Las fibras de origen animal son de lana, pelo y secreciones, como la seda, folículos pilosos.
        .row
          .col-sm-6.col-md-3.col-lg-3
            ul.lista-ul--color.vmorada.fa-ul
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Oveja.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Alpaca.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Vicuña.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Camello.
          .col-sm-6.col-md-3.col-lg-3
            ul.lista-ul--color.vmorada.fa-ul
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Cabra cachemira.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Mohair.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Pelo de yak.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Conejo angora.
      .tarjeta.color-acento-botones.p-4(titulo="Fibras vegetales" style='background-color: #FEF5E5')
        .row
          p Entre las fibras de origen vegetal están las que se extraen:
        .row
          .col-sm-6.col-md-2.col-lg-2
            p #[b De la semilla ]
            ul.lista-ul--color.vmorada.fa-ul
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Algodón.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Ceiba o Kapok.
          .col-sm-6.col-md-2.col-lg-2
            p #[b Del tallo ]
            ul.lista-ul--color.vmorada.fa-ul
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Lino.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Yute.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Bambú.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Cáñamo.
          .col-sm-6.col-md-2.col-lg-2
            p #[b De la hoja ]
            ul.lista-ul--color.vmorada.fa-ul
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Abacá.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Cabuya.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Esparto.
          .col-sm-6.col-md-2.col-lg-2
            p #[b De fruto ]
            ul.lista-ul--color.vmorada.fa-ul
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Bonote (Coco).
          .col-sm-6.col-md-2.col-lg-2
            p #[b De la raíz ]
            ul.lista-ul--color.vmorada.fa-ul
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Zacatón.
      .tarjeta.color-acento-botones.p-4(titulo="Fibras minerales" style='background-color: #FEF5E5')
        .row
          p Las fibras de origen mineral se obtienen de minerales de estructura fibrosa.
        .row
          .col-sm-6.col-md-3.col-lg-3
            ul.lista-ul--color.vmorada.fa-ul
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Lana de roca.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Amianto.
          .col-sm-6.col-md-3.col-lg-3
            ul.lista-ul--color.vmorada.fa-ul
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Fibra cerámica.
              li.mb-0
                i.lista-ul__vineta.color-primario
                | Fibra asbesto.

    .row.mb-5.mt-5
      h3(style="color: #673AB7") Químicas o intervenidas por el hombre
      p Las fibras que no se encuentran en la naturaleza como tales, deben ser manufacturadas por el hombre a través de procesos químicos. Se clasifican a su vez en: fibras artificiales y fibras sintéticas.

    .tarjeta--container.row.mb-5(data-aos="zoom-in-left")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta1/imagen1.png')          
        h3.text-center Fibras artificiales
        p Son aquellas obtenidas a partir de fibras naturales, mediante un proceso químico de transformación; se logra transformar los polímeros naturales utilizados como materia prima en nuevas fibras artificiales con características propias y aplicaciones específicas.
        ul.lista-ul__vineta.vamarillo
          li.mb-0
            i.lista-ul__vineta
            | Rayón o seda artificial.
          li.mb-0
            i.lista-ul__vineta
            | Fibra de vidrio.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta1/imagen2.png')
        h3.text-center Fibras sintéticas
        p Fibras textiles que provienen de productos derivados del petróleo / polímeros sintéticos, son enteramente químicas; tanto la síntesis de la materia prima como la fabricación del filamento.
        ul.lista-ul__vineta.vmorada
          li.mb-0
            i.lista-ul__vineta
            | Fibras de poliamida o nailon.
          li.mb-0
            i.lista-ul__vineta
            | Nailon 6 y nylon 6-6.
          li.mb-0
            i.lista-ul__vineta
            | Aramidas.
          li.mb-0
            i.lista-ul__vineta
            | Elástano o spandex.
      
    .row
      .col-3
      .col-md-4
        h3(style="color: #673AB7") Inteligentes o técnicos
    .row
      .col-3
      .col-md-6.p-3(style="background-color: #DADDDF")
        p Pasivos, activos, de memora, ultrainteligentes, microcápsulas, nanotecnología.
    .row.mt-4
      .col-3
      .col-md-4
        h3(style="color: #673AB7") Renovables o sostenibles
    .row.mb-5
      .col-3
      .col-md-6.p-3(style="background-color: #DADDDF")
        p Pet reciclado, algodón orgánico, cuero vegetal, nylon regenerado, algas marinas.

    .row.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-md-10.col-lg-10
        .tarjeta.p-3(style='background-color: #673AB7')
          .row.justify-content-center.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/tela.png")
            .col
              .row.justify-content-center.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mt-3.text-white Clasificación de las fibras textiles
                  p.mb-0.text-white Revisa el video que pueden resultar útil para aprender más sobre la clasificación de las fibras textiles.
                .col-sm-auto
                  a.boton.color-boton(href="https://youtu.be/I1wQoNJwVxE" target="_blank")
                    span.texto-negro Ir al sitio
                    i.fas.fa-video

    Separador

    .row.mb-4
      #t_3_2.titulo-segundo.color-primario
        h2 3.2 Identificación fibras por combustión
      p Conocer la composición de una fibra es la base de su utilidad, con la composición se logra identificar su comportamiento al ser manipuladas y permite garantizar la idoneidad en la elección frente a la función del diseño y del uso para el que están destinadas. La combustión es el proceso más común para la identificación de cada componente.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imagen3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b ¿Para qué? ]
          br
          br
          | Los materiales textiles son los cimientos de la moda y elegir los adecuados es la clave de un proyecto con éxito. Conocer su composición es muy útil para prever su comportamiento cuando se manipulan y para garantizar la idoneidad de su elección en función del diseño y del uso para el que están destinados.

    .row.mt-4
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Procedimiento
      p El procedimiento para identificar las fibras que componen una determinada tela depende de la naturaleza de la muestra, de la experiencia del analista y del equipo disponible. Para determinar de forma exacta su composición se deberán combinar varias pruebas de identificación. Una de las más sencillas es la prueba de identificación mediante el análisis por combustión.
    
    .row.justify-content-center.align-items-center.mb-5.mt-5(style='background-color: #D1BCFF')(data-aos="zoom-in-left")
      .col-5.col-md-2.col-lg-2
        img.mt-4.mb-4(src='@/assets/curso/temas/tema1/signo-de-interrogacion.png')
      .col-sm-12.col-md-7.col-lg-7.p-5
        p.mb-2 #[b Análisis pirognóstico  ]
        p.mb-2 Definición etimológica: #[b piro: ] fuego, #[b gnosis: ] conocimiento.  
        p.mb-2 Es un método muy simple que nos dará información sobre la naturaleza de las fibras que componen la tela con la que se está trabajando. Llamada también prueba de combustión.

    .row.mt-5
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Prueba de combustión
      p Esta prueba consiste en exponer a una llama, fibras o hilos de la materia textil que queremos identificar, analizando su forma de:    
    
    .row.justify-content-center.align-items-center.mt-4(data-aos="fade-down")
      .col-sm-12.col-md-10.col-lg-10
        .row.justify-content-center.align-items-center
          .col-12.col-md-12.col-lg-4
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/avatar1/imagen1.png')
              .tarjeta.align-items-center.d-flex.borde-morado100
                .p-4
                  h4.mb-3.mt-2.text-center Arder
          .col-12.col-md-12.col-lg-4
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/avatar1/imagen2.png')
              .tarjeta.align-items-center.d-flex.borde-morado100
                .p-4
                  h4.mb-3.mt-2.text-center El olor desprendido
          .col-12.col-md-12.col-lg-4
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/avatar1/imagen3.png')
              .tarjeta.align-items-center.d-flex.borde-morado100
                .p-4
                  h4.mb-0.text-center El residuo que produce la combustión

    .row.mt-5.mb-5
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Materiales, equipos y útiles de trabajo

    .row.mb-5.align-items-center.justify-content-center
      .col-sm-12.col-md-10.col-lg-10
        .row
          .col-3.position-relative
            .avatar
              img.mt-5(src="@/assets/curso/temas/tema3/imagen15.png")
          .col-sm-12.col-md-9.col-lg-9.ps-5(style='background-color: #FEF5E5')
            .row
              .col-2.d-none.d-lg-block
              .col-sm-12.col-md-8.col-lg-8
                ul.lista-ul--color.vmorada.fa-ul.mt-4
                  li.mb-0
                    i.lista-ul__vineta
                    span.mb-0 Muestras textiles 5 cm x 5 cm.
                  li.mb-0
                    i.lista-ul__vineta
                    span.mb-0 Mechero o veladora.
                  li.mb-0
                    i.lista-ul__vineta
                    span.mb-0 Cenicero.
                  li.mb-0
                    i.lista-ul__vineta
                    span.mb-0 Papel aluminio.
                  li.mb-0
                    i.lista-ul__vineta
                    span.mb-0 Pinzas.
                  li.mb-0
                    i.lista-ul__vineta
                    span.mb-0 Tijeras.

    .row.mt-4
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Normas específicas de trabajo y seguridad
    p #[b Uso del mechero o veladora:] antes de encender el mechero o veladora, comprobar que no hay material inflamable a su alrededor. Para apagar el mechero o veladora, humedezca con un poco de agua, nunca soplar.

    .row.align-items-center.justify-content-center.mb-5.mt-3(data-aos="fade-down")
      .col-xl-12
        .row
          .col-1.position-relative
            .avatar.p-4
              img(src="@/assets/curso/temas/tema3/avatar2/imagen2.png")
          .col-11
            .row.p-md-5.borde-redondo(style='background-color: #673AB7')
              h3.text-white Quemaduras
              p.text-white Prestar especial atención cuando se trabaje con muestras de tejidos compuestos por fibras que arden fundiéndose. Si se producen pequeñas quemaduras, estas se tratarán lavando la zona afectada con agua fría.

    .row.mt-4
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Procedimiento experimental
    
    .tarjeta.tarjeta--color.p-4(style="background-color: #E8E4FF")
      PasosB.color-primario
        .row.align-items-center.justify-content-center(titulo="Paso1")
          .col-sm-12.col-md-6.col-lg-6.mb-4.mb-md-0
            ul.lista-ul--color.vmorada.fa-ul.p-5
              li
                i.lista-ul__vineta.mb-0
                | Deshilachar y extraer varios hilos del tejido.
              li
                i.lista-ul__vineta.mb-0
                | Verificar si aparentemente hay diferencias entre ellos con respecto al brillo, a la torsión o al color.
              li
                i.lista-ul__vineta.mb-0
                | Separar los hilos, si hay diferencias evidentes entre ellos, esto indica que puede haber dos o más fibras en la muestra.
          .col-8.col-md-5.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema3/paso1/imagen1.svg', alt='Manos y tejido')
        .row.align-items-center.justify-content-center(titulo="Paso2")
          .col-sm-12.col-md-6.col-lg-6.mb-4.mb-md-0
            ul.lista-ul--color.vmorada.fa-ul.p-5
              li
                i.lista-ul__vineta.mb-0
                | Sostener los hilos en forma horizontal con ayuda de una pinza.
              li
                i.lista-ul__vineta.mb-0
                | Acercar los hilos lentamente al borde de la llama y observar su comportamiento. Comprobar si se enroscan, si se encogen o si se alejan de la llama.
          .col-8.col-md-5.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema3/paso1/imagen1.svg', alt='Manos encendiendo un aromatizante')
        .row.align-items-center.justify-content-center(titulo="Paso3")
          .col-sm-12.col-md-6.col-lg-6.mb-4.mb-md-0
            ul.lista-ul--color.vmorada.fa-ul.p-5
              li
                i.lista-ul__vineta.mb-0
                | Introducir el extremo de la muestra en la llama y observar su comportamiento. Comprobar si se funde o si arde y si lo hace lentamente o con dificultad.
              li
                i.lista-ul__vineta.mb-0
                | Analizar la llama que se produce durante la combustión.
          .col-8.col-md-5.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema3/paso1/imagen3.svg', alt='Manos con un fósforo encendido')
        .row.align-items-center.justify-content-center(titulo="Paso4")
          .col-sm-12.col-md-6.col-lg-6.mb-4.mb-md-0
            ul.lista-ul--color.vmorada.fa-ul.p-5
              li
                i.lista-ul__vineta.mb-0
                | Retirar la muestra de la llama y observar su comportamiento. Comprobar si continúa ardiendo con o sin fusión y si se autoextingue.
              li
                i.lista-ul__vineta.mb-0
                | Analizar el humo que se desprende durante la combustión, determinando su color.
              li
                i.lista-ul__vineta.mb-0
                | Analizar el olor que se desprende durante la combustión. Comprobar si el olor es a papel quemado, a pelo quemado, a vinagre, a apio cocido, a cera fundida, dulzón, aromático o desagradable.
          .col-8.col-md-5.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema3/paso1/imagen4.png', alt='Humo')
        .row.align-items-center.justify-content-center(titulo="Paso5")
          .col-sm-12.col-md-6.col-lg-6.mb-4.mb-md-0
            ul.lista-ul--color.vmorada.fa-ul.p-5
              li
                i.lista-ul__vineta.mb-0
                | Cuando la muestra esté fría, examinar las características de los residuos. 
              li
                i.lista-ul__vineta.mb-0
                | Comprobar la cantidad de ceniza y su forma, determinar también si es blanda, dura o quebradiza.
              li
                i.lista-ul__vineta.mb-0
                | Repetir el proceso para verificar los resultados obtenidos.
          .col-8.col-md-5.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema3/paso1/imagen5.png', alt='Residuos de ceniza')

    Separador
    
    .row.mt-5
      #t_3_3.titulo-segundo.color-primario
        h2 3.3 Clasificación de los hilos
      p Los hilos son un conjunto de fibras textiles que son sometidas a un proceso de torsión, el cual permite que se genere un recorrido de gran longitud. Dentro de su clasificación se identifican elementos como los tipos de torsiones, titulación o numeración; la lectura de esta información es lo que permite determinar la idoneidad al momento de seleccionar los insumos para la elaboración de una prenda.

    
    
    .row.justify-content-center.align-items-center.mb-5(style='background-color: #FEF5E5')(data-aos="fade-down")
      .col-6.col-md-3.col-lg-3
        img.mt-3.mb-3(src='@/assets/curso/temas/tema3/imagen4.svg')          
      .col-sm-12.col-md-7.col-lg-7
        p #[b La hilatura ]
        p Consiste en elaborar o fabricar el hilo a partir de una mecha o cinta, puede realizarse en una variedad de máquinas que estira y confiere cohesión a la masa de fibras, obteniéndose el hilo.
        .row
          .col-5
            p.mb-2 #[b Hilatura manual Procedimiento de hilatura ] 
            p #[b Hilatura mecánica Procedimiento de hilatura ]
          .col-1
            h3.texto-morado100.mb-4 >
            h3.texto-morado100 >
          .col-5
            p.mb-2 Con el huso - La rueca - Bergadana - El spinning Jenny.
            p La mule - Jenny - Selfactina - Continuas de hilar - Máquinas más modernas.
    
    .row.mb-4.mt-5
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Los hilos
      p.mb-4 Los hilos tienen un papel muy importante en la determinación del tacto y el comportamiento de la tela, pueden forzar el buen comportamiento de la fibra o compensar algunas propiedades deficientes. La efectividad de un acabado depende de la selección adecuada del hilo.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imagen6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b ¿Qué es un hilo? ]
          br
          br
          | Producto de longitud sustancial y corte seccional, relativamente pequeño, consistente de fibras o filamentos, con o sin torsión, es decir, un hilo es una hebra larga y delgada, elaborada con fibras de material textil. Un hilo está compuesto por 1,2 o más cabos torcidos entre sí.

    .row.mb-2.mt-3
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ La torsión 
      p Se entiende por torsiones a la acción que sufre un conjunto de fibras, al proporcionarles cierta cantidad de giros en sentido de su eje longitudinal, y como consecuencia, la porción de fibras adquiere una cohesión y consistencia, provocando así mayor resistencia.
      p La cantidad de torsión de los hilos puede tener otras finalidades tales como: provocar determinados efectos en el teñido, producir reflejos en el tejido, flexibilidad o rigidez.

    .row.mb-5.mt-5
      .col-sm-12.col-md-10.col-lg-10.position-relative
        .row
          .col-3.d-none.d-lg-block
            .avatar
              img(src="@/assets/curso/temas/tema3/imagen7.svg", alt="alt")
        .row
          .col-sm-12.col-md-9.col-lg-9.ps-5(style='background-color: #D1BCFF')
              ul.lista-ul--color.vmorada.fa-ul.mt-5.mb-5
                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span.mb-0 #[b Resistencia: ] A mayor torsión, mayor resistencia.
                li.mb-0
                  i.lista-ul__vineta.mb-0
                  span.mb-0 #[b Elasticidad: ] A mayor torsión, mayor elasticidad.
                li.mb-0
                  i.lista-ul__vineta.mb-0
                  span.mb-0 #[b Aspecto: ] A mayor torsión menor diámetro aparente del hilo (por la mayor compacidad).
                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span.mb-0 #[b Tacto del tejido: ] Una torsión ligera proporciona telas de superficie suave, mientras que los hilos muy torcidos producen tejidos de superficie dura.
                li.mb-0
                  i.lista-ul__vineta.mb-0
                  span.mb-0 #[b Arrugabilidad del tejido: ] A mayor torsión en el hilo, menor propensión de la tela a arrugarse.
                li.mb-0
                  i.lista-ul__vineta.mb-0
                  span.mb-0 #[b Contracción: ] Los hilos elaborados muy torcidos encogen mucho más.

    .row.mb-4.mt-4
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Tipos de torsión
      p El tipo de torsión la define el sentido de rotación del huso al momento en que se está hilando, existiendo dos tipos:

    .row.justify-content-center.align-items-center.mb-5.mt-4
      .col-sm-12.col-md-12.col-lg-10
        .row.justify-content-center.align-items-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-5.borde-morado100
              .tarjeta-numerada__numero.estilo500
                .h2.texto-morado100 Z
              p.text-center 
                h3 La torsión “Z” (derecha)
              p El huso en donde se está hilando gira en sentido a las manecillas del reloj.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-5.borde-morado100
              .tarjeta-numerada__numero.estilo500
                .h2.texto-morado100 S
              p.text-center 
                h3 La torsión “S” (izquierda)
              p El huso donde se está hilando gira en sentido contrario a las manecillas del reloj.

    .row.mb-4
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Clasificación de los hilos

    .tarjeta--container.row
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta2/imagen1.png')          
        h2.text-center Hilados (#[em spun])
        .row
          .col-3
            p.mb-5 #[b Sencillos ]
            br
            p #[b Doblados ]
          .col-7
            ul.lista-ul.fa-ul
              li.mb-0
                i.lista-ul__vineta.color-acento-botones
                | Cardados.
              li.mb-0
                i.lista-ul__vineta.color-color-acento-botones
                | Peinados.
              li.mb-3
                i.lista-ul__vineta.color-color-acento-botones
                | Con efecto.
              li.mb-0
                i.lista-ul__vineta.color-acento-botones
                | Con torsión.
              li.mb-0.ps-5
                i.lista-ul__vineta.color-color-acento-botones
                span.mb-0 Retorcidos.
              li.mb-0.ps-5
                i.lista-ul__vineta.color-acento-botones
                span.mb-0 Cableados.
              li.mb-0
                i.lista-ul__vineta.color-color-acento-botones
                | Sin torsión.  
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta2/imagen2.png')
        h2.text-center Filamentos
        ul.lista-ul
          li.mb-0
            i.lista-ul__vineta.color-acento-botones
            | Monofilamentos, multifilamentos.
          li.mb-0
            i.lista-ul__vineta.color-color-acento-botones
            | Lisos, texturizados.
          li.mb-0
            i.lista-ul__vineta.color-acento-botones
            | Con o sin torsión.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta2/imagen3.png')
        h2.text-center Otros
        ul.lista-ul
          li.mb-0
            i.lista-ul__vineta.color-acento-botones
            | Trenzados.
          li.mb-0
            i.lista-ul__vineta.color-color-acento-botones
            | Coreply - corespun.
          li.mb-0
            i.lista-ul__vineta.color-acento-botones
            | Fantasía.
          li.mb-0
            i.lista-ul__vineta.color-acento-botones
            | Teñidos.

    .row.mb-5.mt-5
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Caracterización - Título o numeración
              
    .row.mb-5.mt-5.align-items-center.justify-content-center
      .col-sm-12.col-md-10.col-lg-10
        .row
          .col-1.position-relative
            .avatar
              img(src="@/assets/curso/temas/tema3/signo-de-interrogacion.png")
          .col-sm-12.col-md-11.col-lg-11.borde-redondo.p-5(style='background-color: #D1BCFF')
            .row
              .col-1
              .col-sm-12.col-md-9.col-lg-9
                p Método para expresar la longitud específica o la longitud por unidad de masa de un hilo.

    .row.mb-5
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Numeración

    .row.mb-5.align-items-center.justify-content-center
      .col-sm-12.col-md-10.col-lg-10
        .row
          .col-3.position-relative
            .avatar
              img(src="@/assets/curso/temas/tema3/imagen8.png")
          .col-sm-12.col-md-9.col-lg-9.ps-5.mt-3(style='background-color: #FEF5E5')
            .row
              .col-sm-12.col-md-11.col-lg-11.ps-5
                p.mt-4 Los números que describen las características de un hilo se llaman título, y deben ir precedidos del símbolo del sistema que se haya empleado. El título propiamente dicho es la relación que existe entre la longitud y el peso.
                p Los sistemas de numeración se clasifican en dos grupos:
                ul.lista-ul--color.vmorada.fa-ul
                  li.mb-0
                    i.lista-ul__vineta.color-acento-botones
                    | #[b Sistemas directos ]
                  li.mb-0
                    i.lista-ul__vineta.color-color-acento-botones
                    | #[b Sistemas indirectos ]

    .row.mt-5
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Sistemas de numeración

    TabsC.color-acento-botones(data-aos="zoom-in-left")
      .py-4.py-md-0(titulo="<strong>Sistemas directos</strong>")
        .row.justify-content-center(style='background-color: #FEF5E5')
          .col-8.col-md-5.col-lg-5.ps-5.mt-5.mb-5
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta3/imagen1.png')
          .col-sm-12.col-md-6.col-lg-6.col-md-6.ps-5.mt-5.mb-5
            p (Longitud constante y peso variable) Cuanto más elevado es el número, más grueso es el hilado o fibra.
            p #[b Tex: ] peso en gramos de 1.000 metros de hilo. 
            p #[b - 1Tex = 10D Tex - Decitex (D Tex): ] es el peso en gramos de 10.000 metros de hilado. 
            p #[b - 1 DTex = 0.9 Den - Denier (Den): ] es el peso en gramos de 9000 metros de hilado o fibra.
            p Esta medida está reservada para la seda y los hilos artificiales y sintéticos.
      .py-4.py-md-0(titulo="<strong>Sistemas indirectos</strong>")
        .row.justify-content-center(style='background-color: #FEF5E5')
          .col-8.col-md-5.col-lg-5.ps-5.mt-5.mb-5
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta3/imagen2.png')
          .col-sm-12.col-md-6.col-lg-6.col-md-6.ps-5.mt-5.mb-5
            p (Peso constante y longitud variable). Cuanto más elevado es el número, más fino es el hilado o fibra.
            p #[b Número métrico (Nm): ] número de metros que pesan un gramo o miles de metros por kilogramo. (el más utilizado).
            p #[b Número inglés (Ne): ] número de madejas de 840 yardas que pesan una libra, (el más habitual para el algodón).
            p #[b Número catalán (Na): ] número de madejas de 777,5 m que pesa 440 gramos.
            p Esta numeración describe el calibre o grosor.
            p #[b El primer número: ] representa los estirajes que ha recibido el hilo cuando se está elaborando. 
            p Así, entre más estirajes ha recibido, más delgado será.
            p El número que está después del slash (raya), representa el número de Hebra (cabos) que forman el hilo. 
                
    .row.mb-5.mt-5.justify-content-center.align-items-center
      .col-md-8
        .cajon.color-primario.p-4
          p.mb-0 #[b ¿Para qué elegir el calibre? ]
          p.mb-0 La selección de calibre del hilo depende de la clase de tela y de prenda que va a coser. 
          p.mb-0 -El tipo de tejido a trabajar, según la necesidad. 
          p -El calibre de la aguja varía según el tejido e hilo.
          
    .row.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-md-10.col-lg-10
        .tarjeta.p-3(style='background-color: #673AB7')
          .row.justify-content-center.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/tela.png")
            .col
              .row.justify-content-center.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mt-3.text-white Clasificación de los hilos
                  p.mb-0.text-white Revisa el video que pueden resultar útil para conocer más sobre la clasificación de los hilos.
                .col-sm-auto
                  a.boton.color-boton(href="https://youtu.be/XmnGaIHLbro" target="_blank")
                    span.texto-negro Ir al sitio
                    i.fas.fa-file-download

    Separador

    .row.mb-5
      #t_3_4.titulo-segundo.color-primario
        h2 3.4 Clasificación de tejidos
      p Los tejidos son una composición de fibras o hilos que en su unión generan características como ancho, largo, grosor, resistencia, que permiten asignarle al tejido ciertas características, las cuales son primordiales en la segmentación o clasificación, como lo son los tejidos planos, tejidos de punto o aglomerados.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imagen9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b ¿Qué son los tejidos?  ]
          br
          br
          | Manufacturado de fibras o hilos que tienen una relación sustancial entre su longitud, área y su espesor con suficiente resistencia mecánica para otorgarle una cohesión.

    .row
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Clasificación de los tejidos
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Telas tejidas")
        .col-md-5.mb-4.mb-md-0
          p #[b Plano ]
          p.ps-3 #[b Ligamentos fundamentales ]
          ul.lista-ul--color.fa-ul.vmorada.mb-0.ps-3
            li.mb-0 
              i.lista-ul__vineta.mb-0
              | Tafetán.
            li.mb-0
              i.lista-ul__vineta.mb-0
              | Sarga (diagonal).
            li.mb-0
              i.lista-ul__vineta.mb-0
              | Raso.
          p.ps-3 #[b Ligamentos derivados ]
          ul.lista-ul--color.vmorada.mb-0.ps-3
            li.mb-0 
              i.lista-ul__vineta.mb-0
              | Esterilla / panamá / canasta.
            li.mb-0
              i.lista-ul__vineta.mb-0
              | Espina / espiga.
            li.mb-0
              i.lista-ul__vineta.mb-0
              | Sarga interrumpida ( #[em broken twill ]).
          p.ps-3 #[b Otros ]
          ul.lista-ul--color.vmorada.mb-0.ps-3
            li.mb-0 
              i.lista-ul__vineta.mb-0
              |  #[em Dobby ],  #[em jacquard ], riso, afelpados, etc.
          p.mb-3 #[b Punto ]
          p.ps-3 #[b Por trama ]
          ul.lista-ul--color.fa-ul.vmorada.mb-0.ps-3
            li.mb-0 
              i.lista-ul__vineta.mb-0
              | Sencillo (#[em jersey, lacoste]).
            li.mb-0 
              i.lista-ul__vineta.mb-0
              | Doble (#[em rib] o resortado, #[em interlock, piqué]).
          p.ps-3 #[b Por urdimbre ]
          ul.lista-ul--color.fa-ul.vmorada.mb-0.ps-3
            li.mb-0 
              i.lista-ul__vineta.mb-0
              | #[em Tricot. ]
            li.mb-0 
              i.lista-ul__vineta.mb-0
              | #[em Raschell. ]
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/acordeon1/imagen1.png', alt='Textura')
      .row.justify-content-center(titulo="Telas no tejidas")
        .col-md-5.mb-4.mb-md-0
          ul.lista-ul--color.vmorada.mb-0
            li.mb-0 
              i.lista-ul__vineta.mb-0
              | Interlones – guatas.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema3/acordeon1/imagen2.png', alt='Textura')

    .row.mt-5
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Urdimbre y trama

    .tarjeta--container.row
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta4/imagen1.png')          
        h3.text-center Urdimbre
        p La serie longitudinal de los hilos recibe el nombre de urdimbre y cada uno de los elementos que la constituyen se denomina hilo. Los hilos verticales son la urdimbre.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta4/imagen2.png')
        h3.text-center Trama
        p La serie transversal recibe el nombre de trama y cada una de sus unidades se denomina pasada. Las pasadas horizontales son la trama.

    .row.mt-5
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Diferentes direcciones del hilo de la tela

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/tarjeta5/imagen1.png")
          .crd_hover_txt--body
            h4.mb-3 Urdimbre
            p.mb-0 La dirección de los hilos verticales es la urdimbre, en la misma dirección en la que va el orillo de la tela. Es más fuerte, estable y no suele ceder.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/tarjeta5/imagen2.png")
          .crd_hover_txt--body
            h4.mb-3 Sesgo o bies
            p.mb-0 Cuando se coloca el patrón a 45° grados con respecto a la dirección de la urdimbre de la tela, aportará mejor caída y cierta elasticidad.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/tarjeta5/imagen3.png")
          .crd_hover_txt--body
            h4.mb-3 Trama
            p.mb-0 Es más fina y en ocasiones puede contener fibras elásticas, ya que estas fibras ceden al estirar la tela de orilla a orilla. Cortar en diferentes direcciones en la tela.

    .row.justify-content-center.align-items-center.mb-5(style='background-color: #D1BCFF')
      .col-5.col-md-5.col-lg-2
        img(src="@/assets/curso/temas/tema3/imagen10.svg")
      .col-sm-12.col-md-8.col-lg-8
        ul.lista-ul--color.vmorada.fa-ul.mb-4.mt-4
          li.mb-0 
            i.lista-ul__vineta.mb-0
            span.mb-0 #[b Tejido plano - Ligamentos fundamentales:] Tafetán - Sarga - Raso o Satín.
          li.mb-0
            i.lista-ul__vineta.mb-0
            span.mb-0 #[b Tejido plano - Ligamentos Derivados:] Esterilla 2x1 - Espina - Broken- Esterilla 2x2 – #[em Dobby].
          li.mb-0
            i.lista-ul__vineta.mb-0
            span.mb-0 #[b Tejido plano - Otros ligamentos: ]#[em Corduroy] – Terciopelo.
          li.mb-0 
            i.lista-ul__vineta.mb-0
            span.mb-2 #[b Tejido de punto:] proceso de fabricación de telas en que se utilizan agujas para formar una serie de mallas entrelazadas a partir de uno o más hilos, o bien, un conjunto de hilos.
          li.mb-0
            i.lista-ul__vineta.mb-0
            span.mb-0 #[b Tejido de punto - Por trama:] Sencillo, #[em jersey], doble. 
          li.mb-0
            i.lista-ul__vineta.mb-0
            span.mb-0 #[b Tejido de punto - Por urdimbre:] #[em Tricot, raschell.]
          li.mb-0
            i.lista-ul__vineta.mb-0
            span.mb-0 #[b No tejido:] tipo de telas producidas al formar una red con fibra que se unen por procedimientos mecánicos, térmicos o químicos, pero sin ser tejidas. Fieltros o aglomerados - Películas – Espumas.

    .row
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Color de las telas
      p Crudo - Pre Teñido - Teñido en pieza - Blanco – Estampado.

    Separador

    .row.mb-4
      #t_3_5.titulo-segundo.color-primario
        h2 3.5 Caracterización de los tejidos
      p Los textiles suelen ser organizados en función de su comportamiento, esto permite que la idea o el desarrollo de producto sea mucho más certero y esté enfocado al requerimiento funcional del diseño.

    .row
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Caracterización de los textiles
 
    .row.align-items-center.justify-content-center.mb-4
      .col-sm-12.col-md-10.col-lg-10.p-3
        .row
          .col-3.position-relative
            .avatar
              img(src="@/assets/curso/temas/tema3/imagen12.svg")
          .col-sm-12.col-md-8.col-lg-8.p-5(style='background-color: #FEF5E5')
            .row
              .col-sm-12.col-md-12.col-lg-12
                p Se organizan en función de su comportamiento, está relacionado con el peso del material:
                .row
                  .col-sm-12.col-md-3.col-lg-3
                    ul.lista-ul
                      li.mb-0
                        i.lista-ul__vineta
                        | Estructura.
                      li.mb-0
                        i.lista-ul__vineta
                        | Fluidez.
                  .col-sm-12.col-md-3.col-lg-3
                    ul.lista-ul
                      li.mb-0
                        i.lista-ul__vineta
                        | Expansión.
                      li.mb-0
                        i.lista-ul__vineta
                        | Compresión.

    .tarjeta.fondo2.p-3
      SlyderA(tipo="b")
        .row.justify-content-center.ps-5.mt-2
          .col-sm-12.col-md-7.col-lg-7.mb-4.mb-md-0
            h3 Estructura
            p.mb-0 Las telas estructuradas proporcionan el cuerpo de la prenda, dan forma por sí mismas. 
            p.mt-4 #[b Caída:] la tela ha de mantenerse en su lugar y no caer cuando se le suelta.
            p.mb-0 División de telas con estructura en diferentes áreas según su ocasión de uso: formal, informal,  #[em sport ].
            p.mt-4 #[b Textiles ]
            p Paño -  #[em Tweed ] -  #[em Jacquard ] - Pana - Lino -  #[em Oxford ] -  #[em Faya ] -  #[em Shantung ] - Popelina - Tafetán - Bengalina – #[em Satén].
            p #[b Textiles plastificados - Recubiertos ]
            p Microfibras de nylon y poliester, algunas veces con propiedades hidrófugas.
          .col-8.col-md-4.col-lg-4
            figure
              img.mt-4(src='@/assets/curso/temas/tema3/tarjeta6/imagen1.png')
        .row.justify-content-center.ps-5.mt-2
          .col-sm-12.col-md-7.col-lg-7.mb-4.mb-md-0
            h3 Fluidez
            p Estas telas son suaves y fluidas, incapaces de sostener su propio peso debido a su caída natural. La fluidez de estas telas está intrínsecamente ligada al tipo de hilo empleado en su fabricación, que suele ser altamente torsionado, ya sea de hebras hiladas o de multifilamento. Al caer sobre el cuerpo, estas telas son generalmente ligeras y de peso medio.
            p #[b Textiles ]
            p  #[em Chiffon ] - Gasa -  #[em Chalis ] -  #[em Interlock ] -  #[em Georgette ] -  #[em Crepé ] -  #[em Jersey ] - Malla - Encaje - Género –  #[em Velvet ] / terciopelo -  #[em Lamé ] -  #[em Crepé ] texturizado - Género de punto.
          .col-8.col-md-4.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta6/imagen2.png')
        .row.justify-content-center.ps-5.mt-2
          .col-sm-12.col-md-7.col-lg-7.mb-4.mb-md-0
            h3 Expansión
            p En el grupo de textiles por expansión se incluye el concepto del plisado, este efecto permite expandir la silueta. El concepto de acolchado se incluye en esta categoría, este es un método natural para crear calidez mediante la combinación de capas de tela, se puede aplicar el acolchado medio y acolchado grueso.
            p #[b Textiles ]
            p Acolchado - Redecillas - Tarlatana - De piel o peluche - Tules - Organza - Plisados -  #[em Crepé ] de  #[em satén ] plisados.
          .col-8.col-md-4.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta6/imagen3.png')
        .row.justify-content-center.ps-5.mt-2
          .col-sm-12.col-md-7.col-lg-7.mb-4.mb-md-0
            h3 Compresión
            p El objetivo principal de este es crear ajuste perfecto a la silueta humana. El grado de elasticidad, dependerá del tipo y cantidad de hilos elásticos.
            p  #[em Stretch confort ]: tejidos con un 2 % a 5 % de fibra de #[em spandex], proporciona una compresión suave.
            p  #[em Stretch] fuerte: contiene un 14 % a 20 % de fibra de #[spandex], proporciona una compresión continua que resta silueta al cuerpo.
            p #[b Textiles ]
            p Punto canalé - Pana  #[em stretch ] -  #[em Power] lycra - Punto de algodón  #[em stretch ] - Doble punto -  #[em Power net ].
          .col-8.col-md-4.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta6/imagen4.png')
             
    .row.mt-5
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Las entretelas

    .row.align-items-center.justify-content-center
      .col-sm-12.col-md-10.col-lg-10
        .row
          .col-1.position-relative
            .avatar
              img(src="@/assets/curso/temas/tema3/signo-de-interrogacion.png")
          .col-sm-12.col-md-11.col-lg-11.justify-content-center.align-items-center.borde-redondo.p-4(style='background-color: #D1BCFF')
            .row
              .col-1
              .col-sm-12.col-md-11.col-lg-11
                p Son la estructura de nuestra ropa, ya que sostienen y refuerzan las áreas críticas. El tipo de entretela usada determina el tacto, la forma y la durabilidad de nuestra prenda, manteniendo su función y ayudando en el proceso productivo.

    .row.mt-5
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Tipos de entretelas
      p Estas pueden ser agrupadas de acuerdo con la tela, aplicación y estiraje, dentro de estas se encuentra:

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-9
        .row.align-items-center.justify-content-center(style='background-color: #FEF5E5')
          .col-sm-12.col-md-4.col-lg-3
            ul.lista-ul--color.vmorada.fa-ul.mt-3.mb-3
              li.mb-0 
                i.lista-ul__vineta.mb-0
                | Entretelas tejidas.
          .col-sm-12.col-md-4.col-lg-3
            ul.lista-ul--color.vmorada.fa-ul.mt-3.mb-3
              li.mb-0
                i.lista-ul__vineta.mb-0
                | Entretelas no tejidas.
          .col-sm-12.col-md-4.col-lg-3
            ul.lista-ul--color.vmorada.fa-ul.mt-3.mb-3
              li.mb-0
                i.lista-ul__vineta.mb-0
                | Entretelas de punto.
                      
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta7/imagen1.png')          
        h3.text-center Entretelas tejidas
        p Pueden ser de algodón, rayón, lana, poliéster o mezclas de fibras. Se tejen de la misma forma que las telas normales (urdimbre / trama). 
        p Usualmente, cuando se cortan al sesgo, estiran más y se utilizan entonces para dar forma.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema3/tarjeta7/imagen2.png')
        h3.text-center Entretelas NO tejidas
        p Por lo general están hechas de poliéster, rayón, nylon o una mezcla de diferentes fibras.
        p Las fibras son distribuidas al azar y juntadas por acción química o térmica. 
        p Ya que no tienen una dirección de hilo o grano, no se desmechan y pueden ser cortadas en cualquier dirección o ángulo.

    .row.mt-5
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ ¿Cómo elegir la entretela adecuada?

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Fabricación y aplicación")
        .col-md-10.mb-4.mb-md-0.ps-5
          p Las entretelas pueden ser tejidas, no tejidas o de punto. Pueden usarse fusionándose, cosiéndose.
      .row(titulo="Elásticas o estables")
        .col-md-10.mb-4.mb-md-0.ps-5
          p Las entretelas se catalogan bajo estas dos categorías: 
          p #[b Las elásticas: ] donde se requiere dar forma.
          p #[b Las estables: ] en sitios de la prenda donde se necesite fijar.
      .row(titulo="Cuidado")
        .col-md-10.mb-4.mb-md-0.ps-5
          p La tela exterior debe tener características similares de la entretela.
      .row(titulo="Color")
        .col-md-10.mb-4.mb-md-0.ps-5
          p El color se transparenta a través de algunas telas. Se debe seleccionar una entretela compatible con el color de la tela exterior. 
      .row(titulo="Peso")
        .col-md-12.mb-4.mb-md-0.ps-5
          p Los pesos de las entretelas varían desde las muy livianas hasta las muy pesadas. Se deben elegir de acuerdo con el material a trabajar. 
      .row(titulo="Métodos de aplicación")
        .col-md-12.mb-4.mb-md-0.ps-5
          p Existen entretelas en los diferentes tipos, se pueden encontrar:
          p - Entretelas termoadhesivas.
          p - Entretelas cosibles.
      .row(titulo="Entretelas termoadhesivas")
        .col-md-12.mb-4.mb-md-0.ps-5
          p Van cubiertas por uno de sus lados por un agente adhesivo sensible al calor; al someterlas a humedad y calor, el agente adhesivo se funde y se adhiere a la tela. 
      .row(titulo="Fusionado mecánico")
        .col-md-10.mb-4.mb-md-0.ps-5
          p Se requiere de una máquina en perfectas condiciones para obtener un buen resultado.
          p Únicamente el balance exacto de temperatura, presión y tiempo pueden garantizar una adherencia perfecta.
      .row(titulo="Fusionado manual")
        .col-md-12.mb-4.mb-md-0.ps-5
          p Debe tener en cuenta el tipo de entretela, algunas se fusionan con vapor y presión y otras con una plancha seca sin vapor. 
          p Debe tener una adecuada temperatura la plancha, vapor o sin vapor, húmedo o seco. 
      .row(titulo="Fusionado cosibles")
        .col-md-12.mb-4.mb-md-0.ps-5
          p Las entretelas cosibles se unen a la tela o a las costuras de una prenda, ya sea a mano o a máquina. Son especialmente útiles para textiles con textura, como el terciopelo, así como para aquellos sensibles al calor, incluyendo textiles metalizados o plastificados que no toleran la presión o el calor directo de la plancha. 

    .row.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-md-10.col-lg-10
        .tarjeta.p-3(style='background-color: #673AB7')
          .row.justify-content-center.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/imagen13.png")
            .col
              .row.justify-content-center.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mt-3.text-white Caracterización de los textiles
                  p.mb-0.text-white Revisa el video que pueden resultar útil para conocer más sobre la caracterización de los textiles.
                .col-sm-auto
                  a.boton.color-boton(href="https://youtu.be/kL9UYOzJD3o" target="_blank")
                    span.texto-negro Ir al sitio
                    i.fas.fa-video

    Separador
    
    .row.mb-4
      #t_3_6.titulo-segundo.color-primario
        h2 3.6 Procesos textiles
      p.mb-5 Los tratamientos posteriores a las operaciones de coloración tienen por objeto mejorar el aspecto y las propiedades de los materiales textiles antes de su comercialización, así como proporcionarles algunas cualidades que mejoren su comportamiento al uso y mantenimiento. También eliminar o minimizar algunas cualidades no deseables de los mismos.

    .row.mb-5
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Tipos de operaciones

    .row.align-items-center.justify-content-center.mb-5
      .col-sm-12.col-md-12.col-lg-4
        .row.borde-redondo.p-3(style='background-color: #673AB7')
          .col-3.position-relative.p-4
            .avatar
              img(src="@/assets/curso/temas/tema3/avatar4/imagen1.png")
          p.text-white #[b Aprestos ]
          p.text-white(style="font-size: 18px") Cuando los efectos conseguidos se deben a la aplicación de productos químicos, tales como: rigidez, estabilidad, tactosidad, impermeabilizar o aumentar su peso.
      .col-sm-12.col-md-1.col-lg-1
      .col-sm-12.col-md-12.col-lg-4
        .row.borde-redondo.p-3(style='background-color: #D1BCFF')
          .col-3.position-relative.p-4
            .avatar
              img(src="@/assets/curso/temas/tema3/avatar4/imagen2.png")
          p #[b Acabados ]
          p(style="font-size: 18px") Cuando los efectos conseguidos se deben a la aplicación de tratamientos físicos y/o mecánicos, tales como: calor, presión, humedad, etc.
    p.mb-5 Ambos tipos de operaciones no son incompatibles entre sí; más bien al contrario, se combinan con frecuencia para la obtención de los efectos perseguidos. 

    .row
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Procesos textiles
    p Proceso realizado sobre la fibra, el hilo, la tela o la prenda, con el fin de modificar alguna de sus características:

    
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-md-12.col-lg-8
        .row.justify-content-center.align-items-center(style='background-color: #FEF5E5')
          .col-sm-12.col-md-4.col-lg-4.align-items-center.ps-5
            ol.lista-ol--cuadro.fa-ol.mb-3.mt-3
              li.mb-0 
                .lista-ol--cuadro__vineta(style='color: black')
                  span.mb-0 1
                p.mb-0 Apariencia.
          .col-sm-12.col-md-3.col-lg-3.align-items-center.ps-5
            ol.lista-ol--cuadro.fa-ol.mb-3.mt-3
              li.mb-0 
                .lista-ol--cuadro__vineta(style='color: black')
                  span.mb-0 2
                p.mb-0 Tacto.
          .col-sm-12.col-md-4.col-lg-4.align-items-center.ps-5
            ol.lista-ol--cuadro.fa-ol.mb-3.mt-3
              li.mb-0 
                .lista-ol--cuadro__vineta(style='color: black')
                  span.mb-0 3
                p.mb-0 Comportamiento.   

    .row.mt-2
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Clasificación de los acabados

    .row.align-items-center.justify-content-center.mb-3
      .col-sm-12.col-md-12.col-lg-4
        .bloque-texto-c.borde-redondo.color-acento-contenido.p-3
          .row.align-items-center.justify-content-center
            .col-sm-12.col-md-12.col-lg-8
              h3.text-center.mb-4.mt-4(style="color: #673AB7") Acción que lo origine / modifica característica:
              h3 > Físico/estético 
              p No modifica la estructura interna de la fibra, solo apariencia.
              h3 > Químico/funcional
              p Modifica propiedades estéticas y/o funcionales de la estructura interna de la fibra.
              h3 > Químico-físico / estético-funcional
      .col-sm-12.col-md-12.col-lg-4
        .bloque-texto-c.borde-redondo.color-primario.p-3
          .row.align-items-center.justify-content-center
            .col-sm-12.col-md-12.col-lg-8
              h3.text-center.text-white.mb-4.mt-4 Duración
              h3.text-white > Temporal
              p.text-white Algunas lavadas.
              h3.text-white > Permanente
              p.text-white Acabados físicos, vida útil de la prenda.
              h3.text-white > Renovable
              p.mb-4.text-white Puede renovarse en el hogar o tintorería.
          .row.mb-4.mt-4
      .col-sm-12.col-md-12.col-lg-4
        .bloque-texto-c.borde-redondo.color-acento-contenido.p-3
          .row.justify-content-center.align-items-center
            .col-sm-12.col-md-12.col-lg-8
              h3.text-center.mb-4.mt-4(style="color: #673AB7") Limpieza
              h3.mb-4 > Desgomado de la seda
              h3.mb-4 > Descrude del algodón 
              h3.mb-4 > Lavado de lana
          .row.mb-5.mt-5
          .row.mb-5.mt-5
          .row.mb-5.mt-5


    .row.align-items-center.justify-content-center.mb-5
      .col-sm-12.col-md-12.col-lg-4
        .bloque-texto-c.borde-redondo.color-primario.p-5
          h3.text-center.text-white.mb-4 Diseño y color
          p.mb-1.text-white El uso de tintes que penetran y dan color a las fibras. Se usa para dar color y crear grafías.
      .col-sm-12.col-md-12.col-lg-4
        .bloque-texto-c.borde-redondo.color-acento-contenido.p-5
          h3.text-center.mb-4(style="color: #673AB7") Textura
          p.mb-4 Se utiliza para mejorar la textura de su superficie y el tacto.
      .col-sm-12.col-md-12.col-lg-4
        .bloque-texto-c.borde-redondo.color-primario.p-5
          h3.text-center.text-white.mb-4 Desempeño
          p.mb-4.text-white Se utiliza para mejorar el desempeño y utilidad de la tela.

    .row
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Diseño y color - teñido

    .row.mb-5.align-items-center
      .col-sm-12.col-md-6.col-lg-6.p-3(style='background-color: #DADDDF')
        p #[b Métodos:] fibras, hilos, teñir en solución, materia prima, piezas.
    
    .row
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Diseño y color - estampado

    .row.mb-5.align-items-center
      .col-sm-12.col-md-6.col-lg-6.p-3(style='background-color: #DADDDF')
        p Rotativa, serigrafía, sublimación, #[em transfer] digital.

    .row
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Textura

    .row.mb-5.align-items-center
      .col-12.p-3(style='background-color: #DADDDF')
        p Calandrar satinado, glaseado, afelpado o #[em napping], mercerizado y sanforizado, reducción de brillo, grabado, gofrado, aumento de cuerpo - #[em sizing], encerado #[em ciré, moiré].

    .row
      .titulo-segundo.color-acento-contenido
        h3(style="color: #673AB7") \\\ Desempeño

    .row.mb-5.align-items-center
      .col-12.p-3(style='background-color: #DADDDF')
        p Resistencia a pliegues y arrugas, planchado durable, repelente al agua / impermeabilización, control de encogimiento, resistencia a la suciedad, antiestática, antibacterial, resistente a polillas, ignición retardada, resistencia al moho.

    .row.justify-content-center(data-aos="zoom-in-left")
      .col-sm-12.col-md-10.col-lg-10
        .tarjeta.p-3(style='background-color: #673AB7')
          .row.justify-content-center.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema3/imagen14.png")
            .col
              .row.justify-content-center.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mt-3.text-white Acabados
                  p.mb-0.text-white Revisa el video que pueden resultar útil para conocer más sobre los acabados.
                .col-sm-auto
                  a.boton.color-boton(href="https://youtu.be/ijJexxkGI98" target="_blank")
                    span.texto-negro Ir al sitio
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema3',
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
