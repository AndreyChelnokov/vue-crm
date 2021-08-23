<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from './layout/EmptyLayout';
import MainLayout from './layout/MainLayout';
  export default {
    computed: {
      layout() {
        console.log(this.$route.meta.layout)
        return (this.$route.meta.layout || 'empty') + '-layout';
      }
    },
    components: {
      EmptyLayout, MainLayout
    }
  }
</script>

<style lang="scss">
@import "/assets/index.css";
@import '../node_modules/materialize-css/dist/css/materialize.min.css';
</style>
