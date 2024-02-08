<template>
  <HeaderBlizz></HeaderBlizz>
  <CarouselBlizz></CarouselBlizz>
  <Navegate></Navegate>
  <Containers></Containers>
  <Footer></Footer>
</template>

<script>

import HeaderBlizz from './components/Header.vue'
import CarouselBlizz from './components/Carousel.vue'
import Navegate from './components/Navs.vue'
import Containers from './components/Containers.vue'
import Footer from './components/footer.vue'


export default {
  name: 'App',
  components: {
    HeaderBlizz,
    CarouselBlizz,
    Navegate,
    Containers,
    Footer,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
