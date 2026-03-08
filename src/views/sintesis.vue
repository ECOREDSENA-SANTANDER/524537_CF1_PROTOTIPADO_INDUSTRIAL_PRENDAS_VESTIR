<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-5 Conocer los conceptos y terminología utilizados en el área del diseño de prendas de vestir, es una base fundamental de la formación de un patronista, en este componente se realiza una revisión detallada de esta terminología; adicional se realiza un viaje por materiales, insumos, textiles, etc., que permiten al aprendiz tener una visión general de la producción y elaboración de prendas de vestir.

    .row.justify-content-center
      .col-lg-11.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El diagrama de flujo presenta los conceptos tratados  dentro del componente: dibujo técnico y diseño CAD, Fundamentación textil, clasificación y características de las fibras. adicionalmente se mencionan los universos de vestuario y su relación con el perfil estilo del consumidor.")
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
