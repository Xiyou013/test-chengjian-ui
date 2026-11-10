<script setup lang="ts">
import { ref } from 'vue'
import { ManagementPageHeader } from '@chengjian/ui-web'
import { Button as TButton } from 'tdesign-vue-next'
// import 'tdesign-vue-next/es/style/index.css'
// import '@chengjian/ui-web/theme'

const message = ref('')
function handleAdd() {
  message.value = '按钮点击成功，业务操作可以在这里接入。'
}
</script>

<template>
  <section class="cj-ui pilot">
    <ManagementPageHeader title="项目资料" description="从 Verdaccio 安装城建 UI 后的使用示例。">
      <template #actions><TButton @click="handleAdd">新增资料</TButton></template>
    </ManagementPageHeader>
    <p v-if="message" role="status">{{ message }}</p>
  </section>
</template>

<style scoped>
.pilot { padding: 24px; background: white; border: 1px solid #e5e6eb; border-radius: 8px; }
.pilot p { margin-top: 24px; color: #4e5969; }
</style>
