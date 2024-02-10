<script setup lang="ts">
import NavComponent from './components/Nav.vue'
defineOptions({
  name: 'App'
})
</script>
<template>
  <nav-component />
  <router-view />
</template>
