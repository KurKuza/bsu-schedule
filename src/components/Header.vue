<script setup lang="ts">
import { SearchOutlined, StarOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { Button } from 'ant-design-vue';
import { ScheduleApi } from '@/shared/api';

async function fetch() {
  const schedule = await (await ScheduleApi.getSchedule()).json();
  console.log(schedule);
}
</script>

<template>
  <div class="header">
    <a-typography-title class="title" :level="4">Расписание</a-typography-title>

    <div class="icons">
      <Button @click="fetch" shape="circle">
        <SearchOutlined class="icon" />
      </Button>
      <Button shape="circle">
        <StarOutlined class="icon" />
      </Button>
      <Button shape="circle">
        <SettingOutlined class="icon" />
      </Button>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}
.title {
  margin: 0;
}
.icons {
  display: flex;
  align-items: center;
  gap: 12px;
}
.icon {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
