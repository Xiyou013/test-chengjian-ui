<template>
  <div class="cj-ui">
    <div class="pilot">
      <Form label-align="top" class="variant-form">
        <FormItem label="带图标输入" v-form-label="['带图标输入']">
          <Input v-model="account" clearable placeholder="填写用户名">
            <template #prefix-icon>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M5 21a7 7 0 0 1 14 0" />
              </svg>
            </template>
          </Input>
        </FormItem>
        <FormItem label="密码输入" v-form-label="['密码输入']">
          <Input v-model="password" type="password" placeholder="填写示例密码" />
        </FormItem>
        <FormItem label="成功状态" v-form-label="['成功状态']">
          <Input value="已校验" status="success" tips="内容符合要求" />
        </FormItem>
        <FormItem label="自适应说明" v-form-label="['自适应说明']">
          <Textarea v-model="notes" :autosize="{ minRows: 2, maxRows: 6 }" :maxlength="100" placeholder="增加内容时自动增高" />
        </FormItem>
        <FormItem label="证书日期" v-form-label="['证书日期']">
          <CertificateDatePicker :value="date" label="证书日期" v-model:popup-visible="dateOpen" @change="date = $event" />
        </FormItem>
        <FormItem label="统计期间" v-form-label="['统计期间']">
          <DateRangePicker :popup-props="{ overlayClassName: 'cj-ui-overlay' }" v-model="range" value-type="YYYY-MM-DD"
            clearable aria-label="统计期间" />
        </FormItem>
        <p class="common-output">日期 {{ date || '未选择' }} · 月份 {{ month || '未选择' }} · 时间 {{ time || '未选择' }}<br>期间
          {{ range.filter(Boolean).join(' 至 ') || '未选择' }}</p>
        <FormItem label="多选人员">
          <PersonPicker :value="selected" :people="people" :organizations="organizations" :identity-key="identity"
            :disabled="disabled" :loading="loading" :load-error="loadError" label="参与人员" :max="2"
            @change="selected = $event" @retry="loadError = ''" />
        </FormItem>
      </Form>
    </div>

  </div>
</template>

<script setup lang="ts">
import { Form, FormItem, Input, Textarea, CertificateDatePicker, DateRangePicker, PersonPicker, } from '@chengjian/ui-web';

import { ref } from 'vue';
const account = ref('');
const password = ref('');
const notes = ref('');
const date = ref('');
const dateOpen = ref('');
const month = ref('');
const range = ref<string[]>([]);
const time = ref('09:00');

const selected = ref<number[]>([]);
const identity = ref(1);
const disabled = ref(false);
const loading = ref(false);
const loadError = ref('');
const organizations = [
  { id: 1, parent_id: null, name: '示例公司', kind: 'company' },
  { id: 2, parent_id: 1, name: '综合管理部', kind: 'company_department' },
  { id: 3, parent_id: 1, name: '城市更新项目部', kind: 'project', project_status: '在建' },
  { id: 4, parent_id: 3, name: '工程部', kind: 'project_department' },
];
const people = [
  { id: 1, name: '陈明（示例）', description: '机关 · 综合管理部 · 工程师', org_id: 2 },
  { id: 2, name: '李悦（示例）', description: '城市更新项目 · 工程部 · 负责人', org_id: 4 },
  { id: 3, name: '王宁（示例）', description: '机关 · 综合管理部 · 专员', org_id: 2 },
];
</script>

<style lang="less" scoped>
.pilot {
  padding: 24px;
  background: white;
  border: 1px solid #e5e6eb;
  border-radius: 8px;
}

.variant-form {
  max-width: 440px;
}
</style>
