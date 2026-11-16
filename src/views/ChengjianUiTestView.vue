<script setup lang="ts">
import { ref } from 'vue'
import { ManagementPageHeader, Button, Space, Icon, Tag, CheckTag, Avatar, Badge, AvatarGroup,Dropdown } from '@chengjian/ui-web'
import {
  Plus, Upload, ChevronRight, Trash2, Search, Pencil, Check, ChevronDown, FileText,
  UserRound, Bell,
} from '@lucide/vue';
// import { Button as TButton } from 'tdesign-vue-next'
// import 'tdesign-vue-next/es/style/index.css'
// import '@chengjian/ui-web/theme'

const message = ref('')
function handleAdd() {
  message.value = '按钮点击成功，业务操作可以在这里接入。'
}
function act(name: string) {
  window.alert(name);
}

const busy = ref(false);
async function save() {
  busy.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 800));
  } finally {
    busy.value = false;
  }
}

const options = [
  { content: '保存草稿', value: 'draft' },
  { content: '复制记录', value: 'copy' },
  { content: '删除记录', value: 'delete', disabled: true },
];
function onMenu(item: { value?: unknown }) {
  act(String(item.value));
}

const tags = ref(['工程', '资料']);
const selected = ref(false);
</script>

<template>
  <div class="cj-ui divClass">
    <section class="pilot">
      <ManagementPageHeader title="项目资料" description="从 Verdaccio 安装城建 UI 后的使用示例。">
        <template #actions>
          <Button @click="handleAdd">新增资料</Button>
        </template>
      </ManagementPageHeader>
      <p v-if="message" role="status">{{ message }}</p>
    </section>
    <div class="pilot">
      <Space break-line>
        <Button @click="act('主要操作')">主要操作</Button>
        <Button theme="default" variant="outline" @click="act('次要操作')">
          次要操作
        </Button>
        <Button variant="text" @click="act('文字操作')">文字操作</Button>
        <Button theme="danger" @click="act('危险操作')">危险操作</Button>
        <Button theme="success" @click="act('已确认')">确认成功</Button>
        <Button theme="warning" @click="act('已提醒')">提醒</Button>
      </Space>
    </div>
    <div class="pilot">
      <Space break-line>
        <Button @click="act('新增')">
          <template #icon>
            <Icon :icon="Plus" />
          </template>
          新增记录
        </Button>
        <Button theme="default" variant="outline" @click="act('上传')">
          <template #icon>
            <Icon :icon="Upload" />
          </template>
          上传文件
        </Button>
        <Button variant="text" @click="act('下一步')">
          下一步
          <template #suffix>
            <Icon :icon="ChevronRight" />
          </template>
        </Button>
        <Button theme="danger" variant="outline" @click="act('删除')">
          <template #icon>
            <Icon :icon="Trash2" />
          </template>
          删除记录
        </Button>
      </Space>
    </div>
    <div class="pilot">
      <Space break-line>
        <Button variant="base" @click="act('填充')">填充按钮</Button>
        <Button variant="outline" @click="act('描边')">描边按钮</Button>
        <Button variant="dashed" @click="act('虚线')">虚线按钮</Button>
        <Button variant="text" @click="act('文字')">文字按钮</Button>
      </Space>
      <div style="background: #1d2129; padding: 16px; margin-top: 16px">
        <Button ghost variant="outline" @click="act('幽灵')">幽灵按钮</Button>
      </div>
    </div>
    <div class="pilot">
      <Space break-line align="center">
        <Button size="small" @click="act('小号')">小号</Button>
        <Button @click="act('默认')">默认</Button>
        <Button size="large" @click="act('大号')">大号</Button>
        <Button shape="round" @click="act('圆角')">圆角按钮</Button>
      </Space>
      <div style="margin-top: 16px">
        <Button block @click="act('整行操作')">整行主要操作</Button>
      </div>
    </div>
    <div class="pilot">
      <Space break-line>
        <Button shape="square" aria-label="搜索记录" @click="act('搜索')">
          <template #icon>
            <Icon :icon="Search" :size="18" />
          </template>
        </Button>
        <Button theme="default" variant="outline" shape="circle" aria-label="编辑记录" @click="act('编辑')">
          <template #icon>
            <Icon :icon="Pencil" :size="18" />
          </template>
        </Button>
        <Button theme="danger" variant="text" shape="square" aria-label="删除记录" @click="act('删除')">
          <template #icon>
            <Icon :icon="Trash2" :size="18" />
          </template>
        </Button>
      </Space>
    </div>
    <div class="pilot">
      <Space break-line>
        <Button disabled>不可操作</Button>
        <Button loading>处理中</Button>
        <Button :loading="busy" aria-label="保存按钮示例" @click="save">
          <template #icon>
            <Icon :icon="Check" />
          </template>
          {{ busy ? '保存中' : '保存示例' }}
        </Button>
        <Button shape="square" aria-label="禁用新增" disabled>
          <template #icon>
            <Icon :icon="Plus" :size="18" />
          </template>
        </Button>
      </Space>
    </div>
    <div class="pilot">
      <Space break-line>
        <Button @click="act('发布')">
          <template #icon>
            <Icon :icon="Plus" />
          </template>
          发布
        </Button>
        <Dropdown :popup-props="{ overlayClassName: 'cj-ui-overlay' }" :options="options" @click="onMenu">
          <Button theme="default" variant="outline">
            更多操作
            <template #suffix>
              <Icon :icon="ChevronDown" />
            </template>
          </Button>
        </Dropdown>
      </Space>
    </div>
    <div class="pilot">
      <Space break-line>
        <Tag theme="primary" variant="light">
          <span class="cj-status-dot" aria-hidden="true" />
          进行中
        </Tag>
        <Tag theme="success" variant="light">
          <span class="cj-status-dot" aria-hidden="true" />
          已完成
        </Tag>
        <Tag theme="warning" variant="light">
          <span class="cj-status-dot" aria-hidden="true" />
          待处理
        </Tag>
        <Tag theme="danger" variant="light">
          <span class="cj-status-dot" aria-hidden="true" />
          未通过
        </Tag>
        <Tag theme="default" variant="light">
          <span class="cj-status-dot" aria-hidden="true" />
          未开始
        </Tag>
      </Space>
    </div>
    <div class="pilot">
      <Space break-line>
        <Tag theme="primary" variant="light">浅色</Tag>
        <Tag theme="primary" variant="dark">深色</Tag>
        <Tag theme="primary" variant="outline">描边</Tag>
        <Tag theme="primary" variant="light-outline">浅色描边</Tag>
      </Space>
    </div>
    <div class="pilot">
      <Space break-line>
        <Tag theme="primary" variant="light">
          <template #icon>
            <Icon :icon="FileText" :size="14" />
          </template>
          资料
        </Tag>
        <Tag shape="round" variant="light" theme="success">圆角标签</Tag>
        <Tag shape="mark" theme="primary">标记标签</Tag>
        <Tag :max-width="120" variant="light">很长的分类名称保留完整标题</Tag>
      </Space>
    </div>
    <div class="pilot">
      <Space break-line>
        <Tag v-for="tag in tags" :key="tag" closable variant="light" @close="tags = tags.filter((t) => t !== tag)">
          {{ tag }}
        </Tag>
        <Button theme="default" size="small" @click="tags = ['工程', '资料']">
          恢复标签
        </Button>
      </Space>
      <Space break-line>
        <CheckTag v-model:checked="selected">常用</CheckTag>
        <CheckTag disabled>已禁用</CheckTag>
        <span>{{ selected ? '已选中' : '未选中' }}</span>
      </Space>
    </div>
    <div class="pilot">
      <Space align="center">
        <!-- 请替换为业务项目中可访问的头像地址 -->
        <Avatar image="/your-avatar.png" alt="示例图片头像" />
        <Avatar>陈</Avatar>
        <Avatar aria-label="默认用户">
          <template #icon>
            <Icon :icon="UserRound" :size="20" />
          </template>
        </Avatar>
        <Avatar image="/missing.png" hide-on-load-failed alt="加载失败后显示姓名">
          李
        </Avatar>
      </Space>
    </div>
    <div class="pilot">
      <Space break-line align="center">
        <Avatar v-for="size in ['24px', '32px', '40px', '56px']" :key="size" :size="size">
          陈
        </Avatar>
        <Avatar shape="round" size="40px">李</Avatar>
        <Badge :count="3">
          <Avatar shape="round">
            <template #icon>
              <Icon :icon="Bell" :size="20" />
            </template>
          </Avatar>
        </Badge>
      </Space>
    </div>
    <div class="pilot">
      <AvatarGroup :max="3" size="32px">
        <Avatar v-for="name in ['陈', '李', '王', '赵', '周']" :key="name">
          {{ name }}
        </Avatar>
      </AvatarGroup>
    </div>
    <div class="pilot">
      <div style="display: flex; gap: 16px; flex-wrap: wrap">
        <Icon :icon="Plus" :size="20" label="新增" />
        <Icon :icon="Search" :size="20" label="搜索" />
        <Icon :icon="Pencil" :size="20" label="编辑" />
        <Icon :icon="Upload" :size="20" label="上传" />
        <Icon :icon="Bell" :size="20" label="消息" />
        <Icon :icon="FileText" :size="20" label="文件" />
        <span>{{ ['新增', '搜索', '编辑', '上传', '消息', '文件'] }}</span>
      </div>
    </div>
    <div class="pilot">

    </div>
  </div>
</template>

<style scoped>
.divClass {
  width: 100%;
}

.pilot {
  padding: 24px;
  background: white;
  border: 1px solid #e5e6eb;
  border-radius: 8px;
}

.pilot p {
  margin-top: 24px;
  color: #4e5969;
}
</style>
