<script setup lang="ts">
import { Layout } from 'ant-design-vue';
</script>

<template>
  <Layout>
    <Content class="container">
      <slot />
    </Content>
  </Layout>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
