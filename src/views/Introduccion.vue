<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 Le invitamos a consultar atentamente el video que se presenta a continuación, con el fin de iniciar su recorrido formativo sobre el reconocimiento de la estructura corporal. 
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/w7EKDSizmUI?si=sWmaH1k-4K_Vn53b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Reconocimiento de la estructura corporal
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
