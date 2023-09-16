<script setup lang="ts">
import { SearchOutlined, StarOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { Typography, Button } from 'ant-design-vue';
</script>

<template>
  <div class="header">
    <a-typography-title class="title" :level="4">Расписание</a-typography-title>

    <div class="icons">
      <Button type="primary" shape="circle" size="middle">
        <SearchOutlined class="icon" />
      </Button>
      <Button type="primary" shape="circle" size="middle">
        <StarOutlined class="icon" />
      </Button>
      <Button type="primary" shape="circle" size="middle">
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
