<template>
  <div class="cj-ui">
    <ManagementPageHeader title="导航标题" description="导航标题的描述">
      <template #actions>
        <TButton @click="handleAdd">新增资料</TButton>
      </template>
    </ManagementPageHeader>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ManagementPageHeader } from '@chengjian/ui-web'
import { Button as TButton } from 'tdesign-vue-next';

function handleAdd() {
  window.alert('请在这里接入新增操作');
}
</script>

<style lang="less" scoped>

</style>