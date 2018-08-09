<template>
  <div class="hello">
    <h1>楚玉</h1>
    <ul class="wrap-content">
      <li @click="goVue">vue contents</li>
      <li @click="goEs6">es6 contents</li>
      <li @click="goWebpack">webpack contents</li>
      <li @click="goHtml5">html5 contents</li>
      <li @click="goDesign">设计模式</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goVue() {
      this.$router.push({ name: 'vueContent' })
    },
    goWebpack() {
      this.$router.push({ name: 'webpackContent' })
    },
    goEs6() {
      this.$router.push({ name: 'es6' })
    },
    goHtml5() {
      this.$router.push({ name: 'html5' })
    },
    goDesign() {
      this.$router.push({ name: 'design' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./index.scss"></style>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
