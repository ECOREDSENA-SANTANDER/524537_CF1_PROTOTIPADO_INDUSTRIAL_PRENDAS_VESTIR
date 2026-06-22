<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 A continuación, se presenta la síntesis del componente que explica el "reconocimiento de la estructura corporal" con varios temas importantes en el campo del patronaje y la confección, todo esto teniendo en cuenta los conceptos de pre-patronaje, que incluye sistemas y clasificación de medidas, para brindar al aprendiz un panorama resumido de la temática abordada. 

    .row.mb-5
      .col-lg-10.mb-5
        .row.justify-content-center
          .col-lg-6
            figure
              img(src="@/assets/curso/temas/sintesis.svg", alt="Sintesis de flujo vertical titulado 'Reconocimiento de la estructura corporal', el cual se desglosa en categorías técnicas de diseño textil como: conceptos de pre-patronaje, pasos del patronaje, elaboración de básicos (infantil, masculinos y femenino) y tipos de máquinas.")
    .row.justify-content-center  
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
