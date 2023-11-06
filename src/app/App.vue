<script setup lang="ts">
import '@/shared/styles/index.scss';
import { CardSchedule } from '@/widgets/card-schedule';
import { DataPicker } from '@/widgets/data-picker';
import { Header } from '@/widgets/header';
import Container from './layouts/container.vue';
</script>

<template>
  <Suspense>
    <Container>
      <Header />
      <DataPicker />
      <CardSchedule />
    </Container>
  </Suspense>
</template>
