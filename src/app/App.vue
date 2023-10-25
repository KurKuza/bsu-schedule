<script setup lang="ts">
// eslint-disable-next-line no-restricted-imports
import '@/shared/lib/styles/index.scss';
import { CardSchedule } from '@/widgets/card-schedule';
import { Header } from '@/widgets/header';
import Container from './layouts/container.vue';
</script>

<template>
  <Suspense>
    <Container>
      <Header />
      <!-- <DataPicker /> -->
      <CardSchedule />
    </Container>
  </Suspense>
</template>
