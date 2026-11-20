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
        <div class="pilot">
            <c-space direction="vertical">
                <c-slider v-model="strokeWidth" :step="0.5" :min="0.5" :max="2.5" style="width: 200px" />
                <c-space break-line style="color: var(--td-brand-color)">
                    <c-icon :icon="Search" size="1em" :stroke-width="strokeWidth" />
                    <c-icon :icon="Plus" size="1em" :stroke-width="strokeWidth" />
                    <c-icon :icon="ArrowUp" size="1em" :stroke-width="strokeWidth" />
                    <c-icon :icon="Calendar" size="1em" :stroke-width="strokeWidth" />
                    <c-icon :icon="House" size="1em" :stroke-width="strokeWidth" />
                </c-space>
            </c-space>
            <c-space style="width: min(400px, 100%)">
                <c-select ref="picker" v-model="value" placeholder="请选择"
                    :popup-props="{ overlayInnerStyle: { width: `${popupWidth}px` } }">
                    <c-option v-for="item in options" :key="item.stem" :value="item.stem" class="overlay-options">
                        <div>
                            <c-icon :icon="item.icon" size="1em" />
                        </div>
                    </c-option>
                    <template #valueDisplay>
                        <c-icon :icon="selectedIcon" size="1em"
                            style="margin-right: 8px; color: var(--td-text-color-placeholder)" />{{ value }}
                    </template>
                </c-select>
            </c-space>
        </div>
        <div class="pilot">
            <c-space break-line style="white-space: nowrap">
                <c-link theme="default" :prefix-icon="renderPrefixIcon" :on-click="clickLink"> 跳转链接 </c-link>
                <c-link theme="primary" underline href="https://tdesign.tencent.com/" target="_self">
                    <template #prefix-icon>
                        <c-icon :icon="LinkIcon" size="1em" />
                    </template>
                    跳转链接
                </c-link>
                <c-link theme="danger" hover="color" href="https://tdesign.tencent.com/" target="_blank"
                    @click="clickLink">
                    <template #suffix-icon>
                        <c-icon :icon="ExternalLink" size="1em" />
                    </template>
                    跳转链接
                </c-link>
                <c-link theme="warning" :suffix-icon="renderSuffixIcon" disabled> 跳转链接 </c-link>
            </c-space>
        </div>
        <div class="pilot">
            <c-typography-paragraph :ellipsis="ellipsisState1">{{ content }}</c-typography-paragraph>
        </div>
        <div class="pilot">
            <div :style="{ width: '200px' }">
                <span>正直</span>
                <c-divider :dashed="false" align="center" layout="horizontal">TDesign</c-divider>
                <span>进取</span>
                <c-divider :dashed="false" align="center" layout="horizontal">TDesign</c-divider>
                <span>合作</span>
                <c-divider :dashed="false" align="center" layout="horizontal">TDesign</c-divider>
                <span>创新</span>
            </div>
        </div>
        <div class="pilot">
            <c-space direction="vertical" class="grid-demo">
                <span>space-around</span>
                <c-row justify="space-around">
                    <c-col :span="2">
                        <div>col-2</div>
                    </c-col>
                    <c-col :span="2">
                        <div>col-2</div>
                    </c-col>
                    <c-col :span="2">
                        <div>col-2</div>
                    </c-col>
                    <c-col :span="2">
                        <div>col-2</div>
                    </c-col>
                </c-row>
            </c-space>
        </div>
        <div class="pilot">
            <div class="layout-demo">
                <c-layout>
                    <c-header class="layout-demo__header">Header</c-header>
                    <c-layout>
                        <c-aside class="layout-demo__aside" width="30%">Aside</c-aside>
                        <c-content class="layout-demo__content">Content</c-content>
                    </c-layout>
                    <c-footer class="layout-demo__footer">Footer</c-footer>
                </c-layout>
            </div>
        </div>
        <div class="pilot">
            <div class="space-size-scroll" role="region" aria-label="间距大小示例" tabindex="0">
                <c-slider v-model="size" class="space-size-slider" />
                <br />
                <c-space :size="size">
                    <c-button>Button</c-button>
                    <c-button>Button</c-button>
                    <c-button>Button</c-button>
                    <c-button>Button</c-button>
                </c-space>
            </div>

        </div>
        <div class="pilot">

        </div>
        <div class="pilot">

        </div>
        <div class="pilot">

        </div>
        <div class="pilot">

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import {
    CButton, CIcon, CSpace, CSlider, COption, CSelect, CLink, type CLinkProps
    , CTypographyParagraph, CDivider, CCol, CRow, CAside, CContent, CFooter, CHeader, CLayout
    ,

} from '@chengjian/foundation-web';
import type { CButtonProps } from '@chengjian/foundation-web';
import type { TypographyEllipsis } from '@chengjian/foundation-web';
// import '@chengjian/foundation-web/style.css';
import {
    createLucideIcon, CloudDownload, CloudUpload, Plus, Search, Tag, ArrowUp, Calendar
    , House, ExternalLink, Link as LinkIcon
} from '@lucide/vue';
import { glyphs, lucideName, lucideNodes } from '@chengjian/foundation-web/icon-glyphs';



const renderSearch: CButtonProps['icon'] = (h) => h(CIcon, { icon: Search });
const strokeWidth = ref(2);
const options = Object.keys(glyphs).map(stem => ({
    stem,
    icon: createLucideIcon(lucideName(stem), lucideNodes(stem)),
}));
const value = ref('plus');
const picker = ref<InstanceType<typeof CSelect> | null>(null);
const popupWidth = ref(400);
const selectedIcon = computed(() => options.find(item => item.stem === value.value)?.icon ?? Plus);

let pickerObserver: ResizeObserver | undefined;
onMounted(() => {
    const control = picker.value?.$el;
    if (!(control instanceof HTMLElement)) return;
    popupWidth.value = control.offsetWidth;
    pickerObserver = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (entry) popupWidth.value = entry.contentRect.width;
    });
    pickerObserver.observe(control);
});
onBeforeUnmount(() => pickerObserver?.disconnect());

const renderPrefixIcon: CLinkProps['prefixIcon'] = (h) => h(CIcon, { icon: LinkIcon, size: '1em' });
const renderSuffixIcon: CLinkProps['suffixIcon'] = (h) => h(CIcon, { icon: ExternalLink, size: '1em' });
const clickLink: CLinkProps['onClick'] = () => {
    console.log('不触发');
};

const content = `TDesign was founded with the principles of open-source collaboration from the beginning. The collaboration scheme discussion, component design, and API design, including source code, are fully open within the company, garnering widespread attention from internal developers and designers. TDesign follows an equal, open, and strict policy, regardless of the participants' roles.`;
const ellipsisState1: TypographyEllipsis = {
    row: 2,
    expandable: true,
    collapsible: true,
};

const size = ref(8);

</script>

<style lang="less" scoped>
.pilot {
    padding: 24px;
    background: white;
    border: 1px solid #e5e6eb;
    border-radius: 8px;
}

.grid-demo {
    width: 100%;
}

.grid-demo :deep(.t-row > .t-col > div) {
    box-sizing: border-box;
    display: grid;
    place-items: center;
    min-height: 40px;
    padding: 4px;
    background-color: var(--td-brand-color-7);
    color: var(--td-text-color-anti);
    text-align: center;
    overflow-wrap: anywhere;
}

.grid-demo :deep(.t-row > .t-col:nth-child(even) > div) {
    background-color: var(--td-brand-color-4);
    color: var(--td-text-color-primary);
}

.layout-demo {
    --layout-demo-label-color: var(--td-text-color-primary);
    box-sizing: border-box;
    display: grid;
    gap: 16px;
    padding: clamp(12px, 3vw, 32px);
    border-radius: 6px;
    background-color: var(--td-bg-color-secondarycontainer);
}

:root:is(.dark, [theme-mode="dark"]) .layout-demo {
    --layout-demo-label-color: var(--td-text-color-anti);
}

.layout-demo__header,
.layout-demo__content,
.layout-demo__footer,
.layout-demo__aside {
    box-sizing: border-box;
    display: grid;
    place-items: center;
    padding: 8px;
    color: var(--layout-demo-label-color);
    font: var(--td-font-body-large);
    text-align: center;
}

.layout-demo__header,
.layout-demo__footer {
    background-color: var(--td-brand-color-4);
}

.layout-demo__header {
    height: 56px;
}

.layout-demo__content {
    min-height: 100px;
    background-color: var(--td-brand-color-5);
}

.layout-demo__footer {
    min-height: 88px;
}

.layout-demo__aside {
    flex: none;
    background-color: var(--td-brand-color-7);
    color: var(--td-text-color-anti);
}

.space-size-scroll {
    max-width: 100%;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: thin;
    scrollbar-color: var(--td-scrollbar-hover-color) transparent;
}

.space-size-slider {
    box-sizing: border-box;
    padding: 4px 8px 0;
}
</style>

<style>
.overlay-options {
    display: inline-block;
    font-size: 20px;
}
</style>