<template>
  <header>
      <div class="logo">
        <img src='../assets/Logo.png' alt="logo" />
      </div>
    </header>
</template>

<script>
export default {
  props: ["text"]
  
}
</script>

<style scoped>
  header {
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  }

.logo {
  width: 82px;
  height: 82px;
}
</style>