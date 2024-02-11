<script setup lang="ts">
defineOptions({
  name: 'NavComponent'
})
</script>

<template>
  <div class="nav">
    <nav @click="$router.push('/')">Emoticons-Hub</nav>
    <div class="button-group">
      <a href="https://github.com/alongw/emoticons-hub" target="_blank">Github</a>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background: linear-gradient(150deg, hsl(343, 93%, 81%) 15%, #fa7298 70%, hsl(343, 93%, 69%) 94%);
  padding: 0 15px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    user-select: none;
  }
  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: #fff;
    }
  }
}
</style>
