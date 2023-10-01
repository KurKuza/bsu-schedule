<script setup lang="ts">
import { Layout } from 'ant-design-vue';
</script>

<template>
  <Layout class="layout">
    <Content class="container">
      <slot />
    </Content>
  </Layout>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
