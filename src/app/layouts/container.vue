<script setup lang="ts">
import { Content } from 'ant-design-vue/es/layout/layout';
</script>

<template>
  <Content class="container">
    <slot />
  </Content>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
