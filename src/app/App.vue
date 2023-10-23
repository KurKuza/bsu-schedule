<script setup lang="ts">
import '../shared/lib/styles/index.scss';
import Container from './layouts/container.vue';
import { Header } from '@/widgets/header';
import { DataPicker } from '@/widgets/data-picker';
import { CardSchedule } from '@/widgets/card-schedule';
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
