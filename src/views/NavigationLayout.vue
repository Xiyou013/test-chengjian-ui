<template>
    <div class="cj-ui">
        <div class="pilot">
            <c-space class="cj-ui" size="24px" break-line>
                <c-button theme="primary">
                    <template #icon>
                        <c-icon :icon="Plus" />
                    </template>
                    新建
                </c-button>
                <c-button variant="outline">
                    <template #icon>
                        <c-icon :icon="CloudUpload" />
                    </template>
                    上传文件
                </c-button>
                <c-button theme="primary" shape="circle" aria-label="标签">
                    <template #icon>
                        <c-icon :icon="Tag" />
                    </template>
                </c-button>
                <c-button theme="primary" shape="circle" aria-label="下载">
                    <template #icon>
                        <c-icon :icon="CloudDownload" />
                    </template>
                </c-button>
                <c-button variant="outline" :icon="renderSearch">搜索</c-button>
            </c-space>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CButton, CIcon, CSpace } from '@chengjian/foundation-web';
import type { CButtonProps } from '@chengjian/foundation-web';
// import '@chengjian/foundation-web/style.css';
import { CloudDownload, CloudUpload, Plus, Search, Tag } from '@lucide/vue';

const renderSearch: CButtonProps['icon'] = (h) => h(CIcon, { icon: Search });
</script>

<style lang="less" scoped>
.pilot {
    padding: 24px;
    background: white;
    border: 1px solid #e5e6eb;
    border-radius: 8px;
}
</style>