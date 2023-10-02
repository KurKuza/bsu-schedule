<script setup lang="ts">
import { SearchOutlined, StarOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { Button } from 'ant-design-vue';
import { ref } from 'vue';
import { OnClickOutside } from '@vueuse/components';
import { useThemeStore } from '@/entities/theme';

const { toggleTheme } = useThemeStore();

const isSearch = ref(false);

const handleSearch = () => {
  isSearch.value = !isSearch.value;
};
</script>

<template>
  <div class="header">
    <a-typography-title class="title" :level="4">Расписание</a-typography-title>
    <button @click="toggleTheme">Toggle Theme</button>

    <div class="icons">
      <div class="search-container">
        <Button v-if="!isSearch" @click="handleSearch" shape="circle">
          <SearchOutlined class="icon" />
        </Button>

        <OnClickOutside v-else @trigger="handleSearch">
          <a-input-search
            bordered="false"
            ref="isSearch"
            class="search"
            placeholder="input search text"
            style="width: 200px"
          />
        </OnClickOutside>
      </div>
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

.search {
  width: 100% !important;
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
