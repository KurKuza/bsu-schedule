<script setup lang="ts">
import Container from './layouts/container.vue';
import { Header } from '@/widgets/header';
import { CardSchedule } from '@/widgets/card-schedule';
import ThemeProvider from './providers/theme.vue';
</script>

<template>
  <Suspense>
    <ThemeProvider>
      <Container>
        <Header />
        <CardSchedule />
      </Container>
    </ThemeProvider>
  </Suspense>
</template>
