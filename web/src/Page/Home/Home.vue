<script setup lang="ts">
defineOptions({
  name: 'HomePage'
})
</script>

<template>
  <div class="home">
    <div class="container">
      <img src="@/assets/500x.png" alt="Emoticons-Hub" />
      <h1>Emoticons-Hub</h1>
      <p>
        Emoticons-Hub is a program for displaying a collection of images of a company's products, if
        you see this page, please contact the service provider to provide the full url address.
      </p>
      Link:
      <a href="https://github.com/alongw/emoticons-hub" target="_blank">Github</a>
    </div>
  </div>
</template>

<style scoped lang="less">
.home {
  left: 0;
  width: 80%;
  max-width: 1200px;
  margin: 25px auto;

  img {
    width: 200px;
    margin: 15px 0;
  }
}
</style>
